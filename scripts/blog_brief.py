#!/usr/bin/env python3
"""
blog:brief command for Ship Thesis Blog Automation Pipeline
Generates /briefs/<slug>.md according to Section 3, 6, 7 and 8 of docs/blog-automation-spec.md.
Pulls target prompts, assigns ledger claim, sets real project detail, defines competitor gap, and lays out structural outline.
"""

import sys
import os
import json
from datetime import datetime

ROOT_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
BRIEFS_DIR = os.path.join(ROOT_DIR, "briefs")
os.makedirs(BRIEFS_DIR, exist_ok=True)

PAGE_CONFIGS = {
    "how-milestone-payments-work": {
        "canonical_num": 1,
        "title": "How 3:4:3 Milestone Payments Protect Founders on an MVP",
        "h1": "How Do Milestone Payments Work When Hiring an MVP Agency?",
        "slug": "how-milestone-payments-work",
        "canonical_url": "/blog/how-milestone-payments-work",
        "word_target": "900–1,100",
        "target_prompts": [
            "How do milestone payments work when hiring an MVP agency?",
            "What is a standard payment schedule for an MVP development contract?",
            "How to structure payments with a software agency so you don't get burned",
            "Why 30 40 30 milestone payments protect startup founders"
        ],
        "assigned_claim": "30/40/30 (3:4:3) payment split on every project; no upfront full payment.",
        "project_detail": "Poststeady: payment 2 released only after core automated CSV report generation was verified live in staging; payment 3 upon production cutover and active billing verification.",
        "direct_answer": "Milestone payments divide an MVP development contract into verifiable deliverable stages where capital is only released after working software is inspected and approved. Rather than paying 100% upfront or open-ended hourly retainers, founders typically use a 30/40/30 structure (deposit, core working architecture, and final production cutover) to eliminate delivery risk.",
        "competitor_gap": "Agency marketing posts promote milestones vaguely without enforceable technical gates, or propose front-heavy 50/50 retainers that leave founders exposed before seeing running code.",
        "outline": [
            "What is a milestone payment in software development?",
            "Why upfront payments and hourly billing fail startup founders",
            "The 3:4:3 milestone breakdown: deposit, core build, and production cutover",
            "What criteria must be verified before releasing each payment tranche?",
            "How Ship Thesis structures milestone agreements (ledger claims & Poststeady proof)",
            "Frequently Asked Questions"
        ]
    },
    "what-to-cut-from-v1-mvp": {
        "canonical_num": 2,
        "title": "What to Cut from Your First MVP (The Three-Screen Rule)",
        "h1": "What Should You Cut from Your First MVP?",
        "slug": "what-to-cut-from-v1-mvp",
        "canonical_url": "/blog/what-to-cut-from-v1-mvp",
        "word_target": "1,100–1,400",
        "target_prompts": [
            "How do you decide what features to cut from a startup MVP?",
            "What is the three-screen rule for minimum viable products?",
            "How to scope an MVP down to test the core hypothesis",
            "Feature bloat vs focused v1 software"
        ],
        "assigned_claim": "Rule of thumb we use: a first MVP is cut down to about three screens.",
        "project_detail": "Assess Yourself: cut social feeds, gamified leaderboards, and peer chatrooms; kept only three core screens: timed exam session, bulk CSV question importer, and score report.",
        "direct_answer": "To cut scope from a first MVP without crippling value, reduce the entire product to a single core loop across three primary screens: input, core processing, and output. Stripping secondary features like social login, chat rooms, settings toggles, and complex notification systems preserves capital and cuts development time to weeks.",
        "competitor_gap": "Generic startup advice says 'cut 50% of your roadmap' without a concrete architectural rule. Competitor agencies actively encourage larger feature sets to inflate contract scope.",
        "outline": [
            "Why first-time founders build twice as much software as they need",
            "The three-screen rule: identifying your primary value loop",
            "The feature cut list: five things to defer until post-launch validation",
            "Build vs. buy: when to use off-the-shelf primitives for secondary workflows",
            "How Ship Thesis applies ruthless scoping (Assess Yourself real project detail)",
            "Frequently Asked Questions"
        ]
    },
    "code-ownership-hiring-agency": {
        "canonical_num": 3,
        "title": "How to Make Sure You Own Your Code When Hiring an MVP Agency",
        "h1": "How Do You Ensure 100% Code Ownership When Hiring an Agency?",
        "slug": "code-ownership-hiring-agency",
        "canonical_url": "/blog/code-ownership-hiring-agency",
        "word_target": "1,000–1,300",
        "target_prompts": [
            "How to make sure you own all source code and IP when hiring an MVP developer",
            "What code ownership clauses should be in a software development agreement?",
            "How to prevent dev agency vendor lock-in",
            "Do I own the GitHub repository when hiring an MVP agency?"
        ],
        "assigned_claim": "Code lives in the client's own GitHub from day one; cloud infrastructure and app accounts owned directly by client.",
        "project_detail": "Client's GitHub repository created on day one, zero proprietary agency wrapper frameworks, client owns Supabase database and hosting accounts directly.",
        "direct_answer": "Ensuring complete code ownership requires the development agency to commit all source code directly into your own GitHub organization from day one, with cloud accounts (Supabase, Vercel, Apple Developer) created in your name. Never accept contracts where code handoff is promised at the end, as this creates predatory vendor lock-in.",
        "competitor_gap": "Most agencies maintain private agency repos, deliver zipped bundles only after final payment, or wrap apps in proprietary libraries that require their engineers to maintain.",
        "outline": [
            "The agency hostage trap: why 'we transfer the code at the end' is dangerous",
            "Three technical pillars of day-one code ownership (GitHub, Cloud, App Stores)",
            "Proprietary wrappers and licensing tricks that create hidden vendor lock-in",
            "The exact IP and repository governance checklist every founder must sign",
            "How Ship Thesis builds in your repository from commit one",
            "Frequently Asked Questions"
        ]
    },
    "why-weekly-working-builds-matter": {
        "canonical_num": 4,
        "title": "Why Weekly Working Builds on Your Phone Matter When Building an MVP",
        "h1": "Why Do Weekly Working Builds on Your Phone Matter for an MVP?",
        "slug": "why-weekly-working-builds-matter",
        "canonical_url": "/blog/why-weekly-working-builds-matter",
        "word_target": "900–1,100",
        "target_prompts": [
            "What should you expect from weekly sprint deliverables with an MVP agency?",
            "Why weekly working builds matter during MVP development",
            "How to test your mobile app MVP every Friday on your own phone",
            "Working software deliverables vs status reports"
        ],
        "assigned_claim": "The founder gets a working build to test on their own phone every week (Friday builds).",
        "project_detail": "Assess Yourself: Friday builds tested on physical iOS/Android hardware, verifying offline state survival during incoming phone calls and battery saver triggers.",
        "direct_answer": "Weekly working builds deployed to your phone via TestFlight or preview environments provide proof of engineering velocity and catch critical defects early. Status reports, slide decks, and Figma prototypes conceal technical failure modes like network drops, OS battery limits, and device latency that only physical hardware reveals.",
        "competitor_gap": "Traditional agencies rely on monthly sprint slide decks and clickable Figma files, delaying live device builds until weeks into the engagement when fixing architecture is expensive.",
        "outline": [
            "The black-box agency problem: why monthly demos create launch disasters",
            "Physical hardware vs Figma: what simulators and slide decks hide",
            "The Friday build rhythm: what a founder should inspect every week",
            "Fastlane and automated distribution: how real engineering teams ship test builds",
            "How Ship Thesis delivers Friday phone builds (Assess Yourself real project detail)",
            "Frequently Asked Questions"
        ]
    }
}

def generate_brief(slug):
    if slug not in PAGE_CONFIGS:
        print(f"[ERROR] Slug '{slug}' not found in PAGE_CONFIGS.")
        return False

    cfg = PAGE_CONFIGS[slug]
    run_date = datetime.now().strftime("%Y-%m-%d %H:%M:%S")

    prompts_formatted = "\n".join([f"- \"{p}\"" for p in cfg["target_prompts"]])
    outline_formatted = "\n".join([f"{i+1}. {item}" for i, item in enumerate(cfg["outline"])])

    content = f"""# Content Brief: {cfg['title']}
**Slug**: `{cfg['slug']}` · **Canonical URL**: `{cfg['canonical_url']}`
**Page Type**: Blog · **Word Target**: {cfg['word_target']} words (never padded)
**Generated**: {run_date} · **Step**: `blog:brief`

---

## 1. Core Intent & Target Prompts
US-based early-stage founders seeking trusted MVP engineering partners who deliver working software without agency sales bloat or vendor lock-in.

### Primary Prompts to Win:
{prompts_formatted}

---

## 2. AEO Strategy & Answer Box
The direct answer must occupy the first two sentences (approx. 40–60 words) immediately beneath the H1:
> **Direct Answer**:
> {cfg['direct_answer']}

---

## 3. GEO Strategy & Claims Ledger Assignment
- **Assigned Master Claim**: {cfg['assigned_claim']}
- **Assigned Real Project Detail**: {cfg['project_detail']}
- **Entity Uniformity**: Always refer to the brand as "Ship Thesis" with first-person plural ("we", "our"). Never name individual team members.
- **Strict Negatives**: Zero pricing, dollar signs ($), USD, hourly rates, or budget figures. Timelines strictly written "in weeks".

---

## 4. Competitor Gap Analysis
- **Competitor Flaw**: {cfg['competitor_gap']}
- **Our Edge**: Grounded technical truth backed by working in-house software and transparent engineering processes.

---

## 5. Structural Outline
{outline_formatted}

---

## 6. Conversion Architecture & CTA
- **Primary CTA**: Free 20-minute assessment call to review wireframes, architecture, and scope.
- **Link**: Read dynamically via booking helper (`/lib/booking.ts`).
- **Footer Attribution**: Author: Ship Thesis · Last Updated: 2026-11-02.
"""

    out_path = os.path.join(BRIEFS_DIR, f"{slug}.md")
    with open(out_path, "w", encoding="utf-8") as f:
        f.write(content)

    print(f"[OK] Generated brief: {out_path}")
    return True

def main():
    if len(sys.argv) > 1:
        slug = sys.argv[1]
        generate_brief(slug)
    else:
        print("[blog:brief] Generating briefs for all canonical pages (1 to 4)...")
        for slug in PAGE_CONFIGS.keys():
            generate_brief(slug)

if __name__ == "__main__":
    main()

