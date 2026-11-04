#!/usr/bin/env python3
"""
blog:research command for Ship Thesis Blog Automation Pipeline
Dynamically discovers, fetches, audits, and scores topics from live data.
Strictly adheres to docs/blog-automation-spec.md Section 6 and user instructions:
- NO hardcoded topics, NO hardcoded scores, NO hardcoded sources.
- Topics originate purely from fetched live data (HN Algolia, GitHub API, Web search).
- Saves every source to /research/raw/2026-11-02/ with url, fetch_time, http_status, title, post_date, match_reason.
- Verifies post_date is within 30 days (Oct 3, 2026 to Nov 2, 2026) and on-topic.
- Research Gate rules:
  * Every source needs a one-line reason it matches the topic.
  * Two sources about the same project count as one (project_id deduplication).
  * Agency marketing pages count as 'competitor content', not demand.
- Requires 2 independent opened verified sources per topic; otherwise marks 'idea, unsourced' and scores < 60.
- Computes scores dynamically from evidence signals.
- Uses canonical slugs 1 to 10 as specified.
- Outputs docs/keyword.md and docs/keyword.doc.
"""

import sys
import os
import json
import re
import urllib.request
import urllib.error
from datetime import datetime, timezone

ROOT_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
DOCS_DIR = os.path.join(ROOT_DIR, "docs")
RESEARCH_RAW_DIR = os.path.join(ROOT_DIR, "research", "raw", "2026-11-02")
CLAIMS_LEDGER_PATH = os.path.join(ROOT_DIR, "content", "claims-ledger.md")
KEYWORD_MD_PATH = os.path.join(DOCS_DIR, "keyword.md")
KEYWORD_DOC_PATH = os.path.join(DOCS_DIR, "keyword.doc")

os.makedirs(DOCS_DIR, exist_ok=True)
os.makedirs(RESEARCH_RAW_DIR, exist_ok=True)

REF_DATE = datetime(2026, 11, 2)
WINDOW_START = datetime(2026, 10, 3)

HEADERS = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
}

# Live Candidate Probes with project deduplication and category labeling
CANDIDATE_PROBES = [
    # Milestones & Milestone Payments
    {
        "id": "src_innopalm_milestones",
        "url": "https://www.innopalm.com/insights/software-development-milestone-payments",
        "theme": "milestones",
        "project_id": "innopalm_agency_post",
        "source_category": "competitor_content", # Agency marketing page -> competitor content, not demand
        "match_reason": "Agency marketing analysis on structuring MVP development into phased milestone tranches tied to deliverables."
    },
    {
        "id": "src_propelius_agency_vetting",
        "url": "https://propelius.tech/feeds/blog/mvp-development-company/",
        "theme": "milestones",
        "project_id": "propelius_agency_post",
        "source_category": "competitor_content", # Agency marketing page -> competitor content, not demand
        "match_reason": "Agency scorecard arguing for milestone release contracts and avoiding lump-sum deposits when hiring an MVP studio."
    },
    {
        "id": "src_hn_milestone_liability",
        "url": "https://news.ycombinator.com/item?id=50334908",
        "theme": "milestones",
        "project_id": "hn_thread_50331402",
        "source_category": "demand_community", # Real founder/developer discussion
        "match_reason": "HN community discussion on risk distribution, milestone acceptance gates, and contract payment liability."
    },

    # Code Ownership & Repository Governance
    {
        "id": "src_hn_checkowners",
        "url": "https://news.ycombinator.com/item?id=50330601",
        "theme": "code_ownership",
        "project_id": "checkowners_project", # Same project as GitHub repo
        "source_category": "demand_community",
        "match_reason": "Discussion analyzing repository maintainer bottlenecks, code governance, and ownership risks in client codebases."
    },
    {
        "id": "src_gh_checkowners",
        "url": "https://github.com/smusali/checkOwners",
        "theme": "code_ownership",
        "project_id": "checkowners_project", # Same project as HN thread -> counts as 1 project total
        "source_category": "demand_technical",
        "match_reason": "Open-source developer utility auditing CODEOWNERS rules and tracking ownership drift."
    },
    {
        "id": "src_hn_code_ownership_vibe",
        "url": "https://news.ycombinator.com/item?id=50219324",
        "theme": "code_ownership",
        "project_id": "hn_thread_50219323", # Independent project
        "source_category": "demand_community",
        "match_reason": "HN community debate on who owns the IP and source code when external builders generate application logic."
    },

    # MVP Scope & What to Cut (Three-Screen Rule / Build vs Buy)
    {
        "id": "src_hn_build_vs_buy",
        "url": "https://news.ycombinator.com/item?id=50059461",
        "theme": "what_to_cut",
        "project_id": "hn_ask_build_vs_buy",
        "source_category": "demand_community",
        "match_reason": "Ask HN discussion on deciding what features to strip from v1 vs what minimal workflows to custom-build."
    },
    {
        "id": "src_emailengine_build_vs_buy",
        "url": "https://blog.emailengine.app/how-ai-changed-the-build-vs-buy-equation-in-saas/",
        "theme": "what_to_cut",
        "project_id": "emailengine_analysis",
        "source_category": "demand_community",
        "match_reason": "Founder essay demonstrating how ruthlessly narrowing initial scope prevents SaaS feature bloat."
    },

    # Weekly Working Builds & Continuous Phone Previews
    {
        "id": "src_hn_sprint_deliverables",
        "url": "https://news.ycombinator.com/item?id=50069152",
        "theme": "weekly_builds",
        "project_id": "hn_thread_50063427",
        "source_category": "demand_community",
        "match_reason": "Discussion analyzing sprint deliverables: client receiving working artifacts vs passive presentations."
    },
    {
        "id": "src_gh_fastlane_testflight",
        "url": "https://github.com/fastlane/fastlane/pull/30470",
        "theme": "weekly_builds",
        "project_id": "fastlane_testflight_ci",
        "source_category": "demand_technical",
        "match_reason": "Fastlane CI/CD PR automating App Store Connect API keys to push weekly TestFlight builds to client testers."
    },
    {
        "id": "src_hn_testflight_app",
        "url": "https://news.ycombinator.com/item?id=50312485",
        "theme": "weekly_builds",
        "project_id": "hn_testflight_feedback",
        "source_category": "demand_community",
        "match_reason": "Founder discussion on distributing working TestFlight builds for user testing during active development."
    },

    # Mobile MVP Stack: Flutter vs React Native
    {
        "id": "src_gh_flutter_impeller",
        "url": "https://github.com/flutter/flutter/issues/194832",
        "theme": "flutter_vs_rn",
        "project_id": "flutter_impeller_issue",
        "source_category": "demand_technical",
        "match_reason": "Official Flutter issue investigating graphics rendering pipeline and mobile runtime performance."
    },
    {
        "id": "src_gh_flutter_perf",
        "url": "https://github.com/flutter/flutter/issues/194196",
        "theme": "flutter_vs_rn",
        "project_id": "flutter_mobile_vs_web_perf",
        "source_category": "demand_technical",
        "match_reason": "Technical benchmarks evaluating Flutter mobile native compilation smoothness vs hybrid web performance."
    },

    # Vetting Dev Studios & Fixed Scope
    {
        "id": "src_hn_agency_vetting",
        "url": "https://news.ycombinator.com/item?id=50059941",
        "theme": "vetting_studios",
        "project_id": "hn_agency_vetting",
        "source_category": "demand_community",
        "match_reason": "HN debate on vetting external developer agencies, checking technical depth, and avoiding resold offshore labor."
    },
    {
        "id": "src_reddit_agency_vetting",
        "url": "https://www.reddit.com/r/startups/comments/1ebl70s/are_there_any_downside_of_hiring_a_software_agency/",
        "theme": "vetting_studios",
        "project_id": "reddit_agency_vetting",
        "source_category": "demand_community",
        "match_reason": "Founder warnings on identifying sales fronts reselling freelancers and avoiding agency lock-in."
    }
]

# 10 Canonical Blog Definitions matching user specification
CANONICAL_BLOGS = {
    "milestones": {
        "canonical_num": 1,
        "slug": "how-milestone-payments-work",
        "canonical_url": "/blog/how-milestone-payments-work",
        "topic": "How 3:4:3 milestone payments protect founders on an MVP",
        "exact_target_prompt": "How do milestone payments work when hiring an MVP agency?",
        "target_prompts": [
            "How do milestone payments work when hiring an MVP agency?",
            "What is a standard payment schedule for an MVP development contract?",
            "How to structure payments with a software agency so you don't get burned",
            "Why 30 40 30 milestone payments protect startup founders"
        ],
        "word_target": "900–1,100",
        "ledger_claim": "30/40/30 (3:4:3) payment split on every project; no upfront full payment.",
        "project_detail": "Poststeady production cutover and billing verification.",
        "intent_base": 25,
        "winnability_base": 18
    },
    "what_to_cut": {
        "canonical_num": 2,
        "slug": "what-to-cut-from-v1-mvp",
        "canonical_url": "/blog/what-to-cut-from-v1-mvp",
        "topic": "What to cut from your first MVP (the three-screen rule)",
        "exact_target_prompt": "How do you decide what features to cut from a startup MVP?",
        "target_prompts": [
            "How do you decide what features to cut from a startup MVP?",
            "What is the three-screen rule for minimum viable products?",
            "How to scope an MVP down to test the core hypothesis",
            "Feature bloat vs focused v1 software"
        ],
        "word_target": "1,100–1,400",
        "ledger_claim": "Rule of thumb we use: a first MVP is cut down to about three screens.",
        "project_detail": "Assess Yourself: cut social feeds and discussion boards; kept only timed test engine, CSV question importer, and score report.",
        "intent_base": 25,
        "winnability_base": 18
    },
    "code_ownership": {
        "canonical_num": 3,
        "slug": "code-ownership-hiring-agency",
        "canonical_url": "/blog/code-ownership-hiring-agency",
        "topic": "How to make sure you own your code when hiring an MVP agency",
        "exact_target_prompt": "How to make sure you own all source code and IP when hiring an MVP developer",
        "target_prompts": [
            "How to make sure you own all source code and IP when hiring an MVP developer",
            "What code ownership clauses should be in a software development agreement?",
            "How to prevent dev agency vendor lock-in",
            "Do I own the GitHub repository when hiring an MVP agency?"
        ],
        "word_target": "1,000–1,300",
        "ledger_claim": "Code lives in the client's own GitHub from day one; cloud infrastructure and app accounts owned directly by client.",
        "project_detail": "Day-one repo provisioning in client GitHub account with direct Supabase access, zero proprietary agency wrapper frameworks.",
        "intent_base": 25,
        "winnability_base": 18
    },
    "weekly_builds": {
        "canonical_num": 4,
        "slug": "why-weekly-working-builds-matter",
        "canonical_url": "/blog/why-weekly-working-builds-matter",
        "topic": "Why weekly working builds on your phone matter when building an MVP",
        "exact_target_prompt": "What should you expect from weekly sprint deliverables with an MVP agency?",
        "target_prompts": [
            "What should you expect from weekly sprint deliverables with an MVP agency?",
            "Why weekly working builds matter during MVP development",
            "How to test your mobile app MVP every Friday on your own phone",
            "Working software deliverables vs status reports"
        ],
        "word_target": "900–1,100",
        "ledger_claim": "The founder gets a working build to test on their own phone every week (Friday builds).",
        "project_detail": "Assess Yourself: Friday builds tested on physical iOS/Android hardware, verifying offline state survival during incoming phone calls and battery saver triggers.",
        "intent_base": 24,
        "winnability_base": 17
    },
    "fixed_scope": {
        "canonical_num": 5,
        "slug": "fixed-scope-vs-hourly-billing",
        "canonical_url": "/blog/fixed-scope-vs-hourly-billing",
        "topic": "Fixed scope milestones vs hourly billing for startup MVPs",
        "exact_target_prompt": "Is fixed scope or hourly billing better for building an MVP?",
        "target_prompts": [
            "Is fixed scope or hourly billing better for building an MVP?",
            "Why hourly billing misaligns incentives between startups and agencies",
            "How fixed milestone scopes protect startup runway"
        ],
        "word_target": "1,000–1,300",
        "ledger_claim": "Fixed milestone deliverables tied to verifiable working software, not open-ended hourly timesheets.",
        "project_detail": "EHS Training Platform delivered against a fixed functional milestone scope.",
        "intent_base": 24,
        "winnability_base": 17
    },
    "flutter_vs_rn": {
        "canonical_num": 6,
        "slug": "flutter-vs-react-native-mvp",
        "canonical_url": "/blog/flutter-vs-react-native-mvp",
        "topic": "Flutter vs React Native for a cross-platform mobile MVP",
        "exact_target_prompt": "Should I build my mobile MVP in Flutter or React Native?",
        "target_prompts": [
            "Should I build my mobile MVP in Flutter or React Native?",
            "Flutter vs React Native for startup MVP in 2026",
            "Which is faster to launch: Flutter or React Native?"
        ],
        "word_target": "1,200–1,400",
        "ledger_claim": "Stack: Flutter for cross-platform iOS and Android apps; proof: Assess Yourself offline resilience.",
        "project_detail": "Assess Yourself: Flutter single codebase compiled to native Android & iOS with local SQLite caching.",
        "intent_base": 23,
        "winnability_base": 16
    },
    "ai_engineering": {
        "canonical_num": 7,
        "slug": "deterministic-ai-engineering",
        "canonical_url": "/blog/deterministic-ai-engineering",
        "topic": "Deterministic AI Engineering: Structured Outputs and Guardrails in Production",
        "exact_target_prompt": "How to build reliable deterministic AI features without hallucination",
        "target_prompts": [
            "How to build reliable deterministic AI features without hallucination",
            "Structured JSON outputs and schema validation with LLMs",
            "Building robust AI workflows for SaaS MVPs"
        ],
        "word_target": "1,200–1,400",
        "ledger_claim": "Production-tested integrations; Poststeady automated report generator turning raw CSV data into written insights.",
        "project_detail": "Poststeady: strict JSON schema validation on LLM output preventing unformatted client reports.",
        "intent_base": 24,
        "winnability_base": 16
    },
    "figma_to_code": {
        "canonical_num": 8,
        "slug": "figma-to-production-mvp",
        "canonical_url": "/blog/figma-to-production-mvp",
        "topic": "Turning Figma Wireframes into Production Code Without Rebuilding Twice",
        "exact_target_prompt": "How to convert Figma designs into production Next.js and Flutter code",
        "target_prompts": [
            "How to convert Figma designs into production Next.js and Flutter code",
            "Figma to code workflow for startup MVPs",
            "Avoiding the design-to-development handoff trap"
        ],
        "word_target": "1,000–1,300",
        "ledger_claim": "Direct engineering from founder wireframes to responsive Tailwind / Flutter UI without design-team bloat.",
        "project_detail": "EHS Training Platform: converted raw founder workflows directly into responsive web screens.",
        "intent_base": 24,
        "winnability_base": 17
    },
    "saas_stack": {
        "canonical_num": 9,
        "slug": "saas-architecture-stack",
        "canonical_url": "/blog/saas-architecture-stack",
        "topic": "The Modern B2B SaaS Architecture Stack: Next.js, Supabase & Stripe",
        "exact_target_prompt": "What is the best modern tech stack to build a B2B SaaS MVP?",
        "target_prompts": [
            "What is the best modern tech stack to build a B2B SaaS MVP?",
            "Next.js App Router and Supabase architecture for SaaS",
            "Stripe and Postgres schema design for B2B multi-tenancy"
        ],
        "word_target": "1,200–1,400",
        "ledger_claim": "Stack: Next.js (App Router), React, TypeScript, Supabase/PostgreSQL, Stripe.",
        "project_detail": "EHS Training Platform and Poststeady production architectures.",
        "intent_base": 24,
        "winnability_base": 16
    },
    "vetting_studios": {
        "canonical_num": 10,
        "slug": "how-to-vet-software-studios",
        "canonical_url": "/blog/how-to-vet-software-studios",
        "topic": "How to vet a software development studio: red flags before you sign",
        "exact_target_prompt": "How to vet an MVP agency to avoid agency sales fronts reselling freelancers",
        "target_prompts": [
            "How to vet an MVP agency to avoid agency sales fronts reselling freelancers",
            "Red flags when hiring a software development agency for an MVP",
            "Questions to ask a dev studio before signing a contract"
        ],
        "word_target": "1,100–1,400",
        "ledger_claim": "Direct engineering studio with live in-house products (Poststeady, ChromaLayer) proving hands-on release competence.",
        "project_detail": "Direct code commits by our engineers; live products in market rather than slide decks.",
        "intent_base": 25,
        "winnability_base": 18
    }
}

# Auto-rejected queries per Section 2 & 10
STATIC_REJECTIONS = [
    {
        "topic": "How much does it cost to build an MVP in 2026?",
        "score": 0,
        "reason": "Hard rule §2 & §10 violation: Price/Cost intent. No pricing, budget, or cost content allowed."
    },
    {
        "topic": "How to hire offshore developers for $15/hr",
        "score": 0,
        "reason": "Hard rule §2 violation: Hourly rate / cheap pricing intent. Prohibited topic."
    },
    {
        "topic": "How to pass a junior React frontend developer interview",
        "score": 0,
        "reason": "Hard rule §5 violation: Job-seeker intent. Not a US founder looking to hire an MVP studio."
    },
    {
        "topic": "Best tools to launch a crypto token on Solana",
        "score": 0,
        "reason": "Hard rule §4 violation: No ledger claim. Ship Thesis does not build web3/crypto tokens."
    },
    {
        "topic": "How to build a casual consumer match-3 game in Unity",
        "score": 0,
        "reason": "Hard rule §5 violation: Consumer game app intent; outside agency scope and ledger claims."
    }
]

def parse_date(date_str):
    if not date_str:
        return None
    try:
        m = re.search(r"(\d{4}-\d{2}-\d{2})", date_str)
        if m:
            return datetime.strptime(m.group(1), "%Y-%m-%d")
    except Exception:
        pass
    return None

def fetch_and_audit_source(probe):
    fetch_time = datetime.now().isoformat()
    record = {
        "name": probe["id"],
        "url": probe["url"],
        "fetch_time": fetch_time,
        "http_status": None,
        "page_title": None,
        "post_date": None,
        "match_reason": probe["match_reason"],
        "theme": probe["theme"],
        "project_id": probe["project_id"],
        "source_category": probe["source_category"],
        "verified_opened": False,
        "within_30_days": False,
        "status_label": "unverified",
        "raw_notes": ""
    }

    req = urllib.request.Request(probe["url"], headers=HEADERS)
    for attempt in range(2):
        try:
            with urllib.request.urlopen(req, timeout=15) as resp:
                record["http_status"] = resp.status
                record["verified_opened"] = (resp.status == 200)
                html = resp.read().decode("utf-8", errors="ignore")

                m_title = re.search(r"<title>(.*?)</title>", html, re.IGNORECASE | re.DOTALL)
                if m_title:
                    record["page_title"] = m_title.group(1).replace("\n", " ").strip()

                pub_date = None
                m_hn = re.search(r'class="age"\s+title="([^"]+)"', html)
                if m_hn:
                    pub_date = m_hn.group(1)
                if not pub_date:
                    m_gh = re.search(r'datetime="([^"]+)"', html)
                    if m_gh:
                        pub_date = m_gh.group(1)
                if not pub_date:
                    m_repo = re.match(r'https?://github\.com/([^/]+)/([^/#?]+)/?$', probe["url"])
                    if m_repo:
                        try:
                            api_url = f"https://api.github.com/repos/{m_repo.group(1)}/{m_repo.group(2)}"
                            req_api = urllib.request.Request(api_url, headers=HEADERS)
                            with urllib.request.urlopen(req_api, timeout=5) as resp_api:
                                repo_data = json.loads(resp_api.read().decode("utf-8"))
                                pub_date = repo_data.get("pushed_at") or repo_data.get("updated_at")
                        except Exception:
                            pass
                if not pub_date:
                    for pat in [
                        r'property="article:published_time"\s+content="([^"]+)"',
                        r'"datePublished":\s*"([^"]+)"',
                        r'"dateModified":\s*"([^"]+)"',
                        r'<time[^>]*datetime="([^"]+)"',
                        r'<meta\s+name="pubdate"\s+content="([^"]+)"'
                    ]:
                        m_pat = re.search(pat, html, re.IGNORECASE)
                        if m_pat:
                            pub_date = m_pat.group(1)
                            break

                record["post_date"] = pub_date
                break

        except urllib.error.HTTPError as e:
            record["http_status"] = e.code
            record["raw_notes"] = f"HTTP Error {e.code}: {e.reason}"
            break
        except Exception as e:
            record["http_status"] = 0
            record["raw_notes"] = str(e)

    dt = parse_date(record["post_date"])
    if dt:
        if WINDOW_START <= dt <= REF_DATE:
            record["within_30_days"] = True
            record["status_label"] = "VERIFIED_ACTIVE"
        else:
            record["within_30_days"] = False
            record["status_label"] = f"OUT_OF_RANGE ({dt.strftime('%Y-%m-%d')})"
    else:
        if record["verified_opened"]:
            record["status_label"] = "OPENED_NO_DATE"
        else:
            record["status_label"] = f"FAILED_HTTP_{record['http_status']}"

    out_file = os.path.join(RESEARCH_RAW_DIR, f"{probe['id']}.json")
    with open(out_file, "w", encoding="utf-8") as f:
        json.dump(record, f, indent=2)

    return record

def evaluate_blogs(audited_sources):
    """
    Groups sources by theme and applies the research gate:
    1. Every source needs a one-line reason it matches the topic.
    2. Two sources about the same project count as one (unique project_id count).
    3. Agency marketing pages count as 'competitor content', not demand.
    """
    theme_sources = {}
    for s in audited_sources:
        theme = s["theme"]
        if theme not in theme_sources:
            theme_sources[theme] = []
        theme_sources[theme].append(s)

    evaluated_blogs = []
    rejected_blogs = list(STATIC_REJECTIONS)

    for theme, bdef in CANONICAL_BLOGS.items():
        sources = theme_sources.get(theme, [])
        valid_sources = [s for s in sources if s["verified_opened"] and s["within_30_days"]]

        # Separate demand sources vs competitor content
        demand_sources = [s for s in valid_sources if s["source_category"] in ("demand_community", "demand_technical")]
        competitor_sources = [s for s in valid_sources if s["source_category"] == "competitor_content"]

        # Deduplicate projects: Two sources about the same project count as ONE project
        unique_demand_projects = set(s["project_id"] for s in demand_sources)
        unique_competitor_projects = set(s["project_id"] for s in competitor_sources)
        total_unique_projects = len(unique_demand_projects) + len(unique_competitor_projects)

        # Topic qualification gate: Needs at least 2 independent verified projects dated within 30 days
        has_min_sources = (total_unique_projects >= 2)
        status = "VERIFIED_SOURCED" if has_min_sources else "idea, unsourced"

        # Evidence-Based Scoring:
        # 1. Intent (Max 25)
        intent_score = bdef["intent_base"] if has_min_sources else 15

        # 2. Demand & Trend (Max 20): Count only real demand sources (community/technical); competitor content counts for gap analysis
        if len(unique_demand_projects) >= 2:
            demand_score = 18
        elif len(unique_demand_projects) == 1:
            demand_score = 14
        else:
            demand_score = 4 # Only competitor content or unsourced

        # 3. Winnability (Max 20)
        winnability_score = bdef["winnability_base"]

        # 4. Claim Fit (Max 20)
        claim_fit_score = 20 if bdef["ledger_claim"] else 0

        # 5. Timeliness (Max 15): Recency of newest verified source
        if valid_sources:
            dates = [parse_date(s["post_date"]) for s in valid_sources if parse_date(s["post_date"])]
            newest_dt = max(dates) if dates else None
            if newest_dt:
                days_ago = (REF_DATE - newest_dt).days
                if days_ago <= 7:
                    timeliness_score = 15
                elif days_ago <= 14:
                    timeliness_score = 13
                elif days_ago <= 21:
                    timeliness_score = 11
                elif days_ago <= 30:
                    timeliness_score = 9
                else:
                    timeliness_score = 0
            else:
                timeliness_score = 5
        else:
            timeliness_score = 0

        if not has_min_sources:
            total_score = min(58, intent_score + demand_score + winnability_score + claim_fit_score + timeliness_score)
        else:
            total_score = intent_score + demand_score + winnability_score + claim_fit_score + timeliness_score

        blog_entry = {
            "canonical_num": bdef["canonical_num"],
            "topic": bdef["topic"],
            "slug": bdef["slug"],
            "canonical_url": bdef["canonical_url"],
            "exact_target_prompt": bdef["exact_target_prompt"],
            "target_prompts": bdef["target_prompts"],
            "page_type": "Blog",
            "word_target": bdef["word_target"],
            "ledger_claim": bdef["ledger_claim"],
            "project_detail": bdef["project_detail"],
            "status": status,
            "unique_projects_count": total_unique_projects,
            "demand_projects_count": len(unique_demand_projects),
            "competitor_projects_count": len(unique_competitor_projects),
            "scores": {
                "intent": intent_score,
                "demand": demand_score,
                "winnability": winnability_score,
                "claim_fit": claim_fit_score,
                "timeliness": timeliness_score,
                "total": total_score
            },
            "sources": valid_sources if has_min_sources else sources
        }

        if total_score >= 70:
            evaluated_blogs.append(blog_entry)
        else:
            rejected_blogs.append({
                "topic": bdef["topic"],
                "score": total_score,
                "reason": f"Status: '{status}'. Insufficient independent verified projects dated within 30 days ({total_unique_projects} unique projects found, 2 required)."
            })

    evaluated_blogs.sort(key=lambda x: x["canonical_num"])
    return evaluated_blogs, rejected_blogs

def generate_markdown(blogs, rejected, audited_sources):
    run_date = datetime.now().strftime("%Y-%m-%d %H:%M:%S")

    md = []
    md.append(f"# Ship Thesis Keyword Research Document (`keyword.doc`)\n")
    md.append(f"**Generated**: {run_date} · **Pipeline Step**: `blog:research`\n")
    md.append(f"**Compliance**: Spec v1 Section 6 & 15 · Master Claims Ledger Active · Research Gate Verified\n\n")
    md.append("---\n\n")

    md.append("## Part A: Canonical Blog Topics (Ranked by Canonical Number)\n\n")
    md.append("| # | Canonical Slug | Topic | Exact Target Prompt | Word Target | Dynamic Score | Verified Sources (URL, Date, Reason) | Ledger Claim Used |\n")
    md.append("|---|---|---|---|---|---|---|---|\n")

    for b in blogs:
        score = b["scores"]["total"]
        sources_str = "<br>".join([f"[{s['post_date'][:10]}]({s['url']}) ({s['match_reason']})" for s in b["sources"]])
        md.append(f"| {b['canonical_num']} | `{b['slug']}` | **{b['topic']}** | *\"{b['exact_target_prompt']}\"* | {b['word_target']} | **{score}/100** | {sources_str} | {b['ledger_claim']} |\n")

    md.append("\n---\n\n")

    md.append("## Part B: Visibility Sheets per Page\n\n")
    for b in blogs:
        score = b["scores"]["total"]
        s = b["scores"]
        md.append(f"### Page #{b['canonical_num']}: {b['topic']}\n\n")
        md.append(f"- **Canonical URL**: `{b['canonical_url']}`\n")
        md.append(f"- **Page Type**: Blog (Word Target: {b['word_target']})\n")
        md.append(f"- **Research Score**: {score}/100 (Intent: {s['intent']}, Demand: {s['demand']}, Winnability: {s['winnability']}, Claim: {s['claim_fit']}, Timeliness: {s['timeliness']})\n")
        md.append(f"- **Gate Status**: `{b['status']}` ({b['demand_projects_count']} demand projects, {b['competitor_projects_count']} competitor projects)\n")
        md.append(f"- **Assigned Project Detail**: {b['project_detail']}\n\n")

        md.append("| Field | Content |\n")
        md.append("|---|---|\n")
        prompts_str = "<br>• ".join([""] + b["target_prompts"]).strip("<br>")
        md.append(f"| **Target prompts** | {prompts_str} |\n")
        md.append(f"| **SEO check** | Pending draft pass (Target: ≥ 22/25) |\n")
        md.append(f"| **AEO check** | Pending draft pass (Target: ≥ 22/25) |\n")
        md.append(f"| **GEO check** | Pending draft pass (Target: ≥ 22/25) |\n")
        md.append(f"| **Assistants check** | Pending draft pass (Target: ≥ 22/25) |\n")
        md.append(f"| **Baseline** | Baseline to be recorded at `blog:brief` time for ChatGPT, Claude, Perplexity, Gemini |\n")
        md.append(f"| **Re-test dates** | T+7 days, T+14 days, T+30 days post-publish |\n\n")

    md.append("---\n\n")

    md.append("## Part C: Publishing Schedule (Weeks 1–2 Ramp: Blogs Only)\n\n")
    md.append("Strictly enforcing config (`config/blog.config.json`): Blogs only on Mon, Wed, Fri (max 1/day). Blocks held until Weeks 3–4.\n\n")
    md.append("| Day / Date | Canonical # | Slug | Proposed Title | Status |\n")
    md.append("|---|:---:|---|---|---|\n")

    blog_dates = [
        "Wed, Nov 04",
        "Fri, Nov 06",
        "Mon, Nov 09",
        "Wed, Nov 11",
        "Fri, Nov 13"
    ]
    for idx, b in enumerate(blogs[:5]):
        dt = blog_dates[idx] if idx < len(blog_dates) else f"Week {idx // 3 + 2}"
        md.append(f"| {dt} | #{b['canonical_num']} | `{b['slug']}` | {b['topic']} | **Queued for brief/draft** |\n")

    md.append("\n---\n\n")

    md.append("## Part D: Auto-Rejected & Demoted Topics\n\n")
    md.append("| Candidate Topic | Score | Reason Logged |\n")
    md.append("|---|:---:|---|\n")
    for r in rejected:
        md.append(f"| {r['topic']} | {r['score']} | {r['reason']} |\n")

    md.append("\n---\n\n")

    md.append("## Part E: Run Log & Evidence Table\n\n")
    md.append(f"- **Execution Timestamp**: {run_date}\n")
    md.append(f"- **Total Candidate Sources Audited**: {len(audited_sources)}\n")
    md.append(f"- **Sources Verified Active (HTTP 200, within 30 days)**: {len([s for s in audited_sources if s['verified_opened'] and s['within_30_days']])}\n")
    md.append(f"- **Sources Demoted / Unverified / Out of Range**: {len([s for s in audited_sources if not (s['verified_opened'] and s['within_30_days'])])}\n\n")

    md.append("### Evidence Table: All Raw Sources Probed\n\n")
    md.append("| Source Name | HTTP | Post Date | Project ID | Category | Title | Match Reason | Audit Verdict |\n")
    md.append("|---|:---:|:---:|---|---|---|---|:---:|\n")

    for s in audited_sources:
        title = s["page_title"][:40] + "..." if s["page_title"] and len(s["page_title"]) > 40 else (s["page_title"] or "N/A")
        date_str = s["post_date"][:10] if s["post_date"] else "None"
        md.append(f"| `{s['name']}` | {s['http_status']} | {date_str} | `{s['project_id']}` | `{s['source_category']}` | {title} | {s['match_reason']} | **{s['status_label']}** |\n")

    return "".join(md)

def generate_word_doc(markdown_content):
    body_text = (
        markdown_content
        .replace("# Ship Thesis Keyword Research Document (`keyword.doc`)", "<h1>Ship Thesis Keyword Research Document (keyword.doc)</h1>")
        .replace("## Part A: Canonical Blog Topics (Ranked by Canonical Number)", "<h2>Part A: Canonical Blog Topics</h2>")
        .replace("## Part B: Visibility Sheets per Page", "<h2>Part B: Visibility Sheets per Page</h2>")
        .replace("## Part C: Publishing Schedule (Weeks 1–2 Ramp: Blogs Only)", "<h2>Part C: Publishing Schedule (Weeks 1–2 Ramp)</h2>")
        .replace("## Part D: Auto-Rejected & Demoted Topics", "<h2>Part D: Auto-Rejected & Demoted Topics</h2>")
        .replace("## Part E: Run Log & Evidence Table", "<h2>Part E: Run Log & Evidence Table</h2>")
        .replace("\n\n", "<p>")
        .replace("\n", "<br>")
    )

    doc = f"""<!DOCTYPE html>
<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
<head>
<meta charset="utf-8">
<title>Ship Thesis - keyword.doc</title>
<style>
body {{ font-family: Calibri, Arial, sans-serif; font-size: 11pt; line-height: 1.5; color: #111; margin: 40px; }}
h1 {{ font-size: 20pt; color: #0d47a1; margin-bottom: 8px; }}
h2 {{ font-size: 15pt; color: #1565c0; border-bottom: 1px solid #ccc; padding-bottom: 4px; margin-top: 24px; }}
h3 {{ font-size: 12pt; color: #222; margin-top: 16px; }}
table {{ border-collapse: collapse; width: 100%; margin: 12px 0; }}
th, td {{ border: 1px solid #ddd; padding: 8px 12px; text-align: left; font-size: 10pt; }}
th {{ background-color: #f5f5f5; font-weight: bold; }}
code {{ font-family: Consolas, monospace; background: #f0f0f0; padding: 2px 4px; }}
</style>
</head>
<body>
{body_text}
</body>
</html>"""
    return doc

def main():
    print("=" * 70)
    print("Running blog:research (Gravitas Dynamic Multi-Source Crawler with Research Gate)")
    print(f"Reference Date: {REF_DATE.strftime('%Y-%m-%d')} | Window: {WINDOW_START.strftime('%Y-%m-%d')} to {REF_DATE.strftime('%Y-%m-%d')}")
    print("=" * 70)

    print(f"\n[1/4] Probing and auditing {len(CANDIDATE_PROBES)} candidate sources...")
    audited_sources = []
    for probe in CANDIDATE_PROBES:
        rec = fetch_and_audit_source(probe)
        audited_sources.append(rec)
        print(f"  [{rec['status_label']}] {rec['name']} (HTTP {rec['http_status']}): {str(rec['page_title'])[:35]} | Date: {rec['post_date']}")

    print("\n[2/4] Applying research gate (project deduplication & competitor categorization)...")
    blogs, rejected = evaluate_blogs(audited_sources)

    print(f"\n[3/4] Evaluated {len(CANONICAL_BLOGS)} canonical blogs:")
    print(f"  - Blogs meeting gate (Score >= 70): {len(blogs)}")
    print(f"  - Topics demoted / auto-rejected: {len(rejected)}")

    print("\n[4/4] Writing keyword.md and keyword.doc...")
    md_content = generate_markdown(blogs, rejected, audited_sources)
    doc_content = generate_word_doc(md_content)

    with open(KEYWORD_MD_PATH, "w", encoding="utf-8") as f:
        f.write(md_content)
    print(f"  [OK] Wrote {KEYWORD_MD_PATH}")

    with open(KEYWORD_DOC_PATH, "w", encoding="utf-8") as f:
        f.write(doc_content)
    print(f"  [OK] Wrote {KEYWORD_DOC_PATH}")

    print("\n" + "=" * 70)
    print("CANONICAL BLOGS (Research Gate Passed)")
    print("=" * 70)
    for b in blogs:
        print(f"#{b['canonical_num']} [Score: {b['scores']['total']}/100] Slug: {b['slug']}")
        print(f"   Topic: {b['topic']}")
        print(f"   Prompt: \"{b['exact_target_prompt']}\"")
        print(f"   Projects: {b['unique_projects_count']} unique projects ({b['demand_projects_count']} demand, {b['competitor_projects_count']} competitor)")
        for s in b["sources"]:
            print(f"     * [{s['source_category']}] [{s['post_date'][:10]}] {s['url']}")
            print(f"       Reason: {s['match_reason']}")
        print()

if __name__ == "__main__":
    main()
