import urllib.request
import urllib.error
import re
import os
import json
from datetime import datetime

CANDIDATES = [
    # Topic: Code Ownership & Repository Control for Startups
    {
        "cluster": "Code Ownership",
        "name": "hn_checkowners_repo",
        "url": "https://news.ycombinator.com/item?id=50330601",
        "relation": "HN discussion on finding single points of failure in codebase governance and repo access."
    },
    {
        "cluster": "Code Ownership",
        "name": "gh_checkowners_tool",
        "url": "https://github.com/smusali/checkOwners",
        "relation": "GitHub tool repository for inspecting code ownership rules and repository maintainer coverage."
    },
    {
        "cluster": "Code Ownership",
        "name": "medium_code_ownership_agents",
        "url": "https://medium.com/@viajesubmarino/what-ownership-means-when-agents-write-the-code-ae269f04ace5",
        "relation": "Article analyzing who owns the code, licensing, and liability when external builders generate codebase."
    },

    # Topic: Next.js + Supabase Multi-Tenant Architecture & RLS
    {
        "cluster": "Next.js & Supabase Architecture",
        "name": "gh_supabase_multitenant_kb",
        "url": "https://github.com/supabase/supabase/pull/51348",
        "relation": "Official Supabase PR adding architectural guides for multi-tenancy, custom auth, and Postgres RLS."
    },
    {
        "cluster": "Next.js & Supabase Architecture",
        "name": "hn_supabase_compute",
        "url": "https://news.ycombinator.com/item?id=50312393",
        "relation": "HN discussion on Supabase dedicated compute and database resource allocation for SaaS apps."
    },
    {
        "cluster": "Next.js & Supabase Architecture",
        "name": "supabase_compute_blog",
        "url": "https://supabase.com/blog/supabase-compute-private-alpha",
        "relation": "Official Supabase launch post for isolated compute infrastructure."
    },

    # Topic: Build vs Buy SaaS & MVP Scope Reduction
    {
        "cluster": "MVP Scope & Build vs Buy",
        "name": "hn_build_vs_buy_saas",
        "url": "https://news.ycombinator.com/item?id=50335994",
        "relation": "HN discussion on build vs buy: teams building custom software vs buying bloated off-the-shelf tools."
    },
    {
        "cluster": "MVP Scope & Build vs Buy",
        "name": "research_build_vs_buy",
        "url": "https://hissingkitty.com/research/build-vs-buy-october-2026",
        "relation": "Independent October 2026 industry research on custom software vs bloated SaaS subscription costs."
    },

    # Topic: Flutter Cross-Platform Performance & Offline Mobile Apps
    {
        "cluster": "Flutter Mobile App Engineering",
        "name": "hn_flutter_performance",
        "url": "https://news.ycombinator.com/item?id=50307586",
        "relation": "HN discussion analyzing Flutter cross-platform rendering performance on low-end mobile hardware."
    },
    {
        "cluster": "Flutter Mobile App Engineering",
        "name": "upsling_flutter_perf_blog",
        "url": "https://upsling.space/blog/60-fps-flutter-physics-on-a-100-dollar-phone/",
        "relation": "In-depth October 2026 benchmark on Flutter rendering engine, frame rates, and mobile app architecture."
    },

    # Topic: Webhook Reliability & Event Idempotency
    {
        "cluster": "Webhook Reliability",
        "name": "hn_webhook_security",
        "url": "https://news.ycombinator.com/item?id=50317071",
        "relation": "HN discussion on webhook reliability, payload verification, and preventing missed deliveries."
    },
    {
        "cluster": "Webhook Reliability",
        "name": "gh_webhook_inspector",
        "url": "https://github.com/4yk5/Ghostman",
        "relation": "Open-source developer utility for inspecting and validating incoming webhook payloads and retry headers."
    }
]

OUT_DIR = os.path.join(os.path.dirname(__file__), "..", "research", "raw", "2026-11-02")
os.makedirs(OUT_DIR, exist_ok=True)

headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
}

print(f"Opening and auditing {len(CANDIDATES)} candidate sources...")

results = []

for item in CANDIDATES:
    fetch_time = datetime.now().isoformat()
    record = {
        "name": item["name"],
        "cluster": item["cluster"],
        "url": item["url"],
        "relation": item["relation"],
        "fetch_time": fetch_time,
        "http_status": None,
        "page_title": None,
        "post_date": None,
        "verified_opened": False,
        "within_30_days": False,
        "status_label": "unverified",
        "raw_notes": ""
    }
    
    req = urllib.request.Request(item["url"], headers=headers)
    try:
        with urllib.request.urlopen(req, timeout=10) as resp:
            record["http_status"] = resp.status
            record["verified_opened"] = (resp.status == 200)
            html = resp.read().decode("utf-8", errors="ignore")
            
            # Title
            m_title = re.search(r"<title>(.*?)</title>", html, re.IGNORECASE | re.DOTALL)
            if m_title:
                record["page_title"] = m_title.group(1).replace("\n", " ").strip()
                
            # Date detection:
            # HN
            m_hn = re.search(r'class="age"\s+title="(\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2})"', html)
            if m_hn:
                record["post_date"] = m_hn.group(1)
            # GitHub
            if not record["post_date"]:
                m_gh = re.search(r'datetime="(\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z?)"', html)
                if m_gh:
                    record["post_date"] = m_gh.group(1)
            # Schema.org or meta date
            if not record["post_date"]:
                m_meta = re.search(r'property="article:published_time"\s+content="(\d{4}-\d{2}-\d{2}[^"]*)"', html, re.IGNORECASE)
                if not m_meta:
                    m_meta = re.search(r'name="pubdate"\s+content="(\d{4}-\d{2}-\d{2}[^"]*)"', html, re.IGNORECASE)
                if not m_meta:
                    m_meta = re.search(r'"datePublished":\s*"(\d{4}-\d{2}-\d{2}[^"]*)"', html)
                if m_meta:
                    record["post_date"] = m_meta.group(1)
                    
    except urllib.error.HTTPError as e:
        record["http_status"] = e.code
        record["raw_notes"] = f"HTTP Error {e.code}: {e.reason}"
    except Exception as e:
        record["http_status"] = 0
        record["raw_notes"] = str(e)
        
    # Check date
    if record["post_date"]:
        try:
            # Parse up to YYYY-MM-DD
            d_str = record["post_date"][:10]
            dt = datetime.strptime(d_str, "%Y-%m-%d")
            # 30 days prior to Nov 2, 2026 is Oct 3, 2026
            if dt >= datetime(2026, 10, 3) and dt <= datetime(2026, 11, 3):
                record["within_30_days"] = True
                record["status_label"] = "VERIFIED_ACTIVE"
            else:
                record["within_30_days"] = False
                record["status_label"] = f"OUT_OF_RANGE ({d_str})"
        except Exception as e:
            record["raw_notes"] += f" | Date parse error: {e}"
    else:
        if record["verified_opened"]:
            record["status_label"] = "OPENED_NO_DATE"
        else:
            record["status_label"] = f"FAILED_HTTP_{record['http_status']}"

    # Write to raw storage
    out_file = os.path.join(OUT_DIR, f"{item['name']}.json")
    with open(out_file, "w", encoding="utf-8") as f:
        json.dump(record, f, indent=2)
        
    results.append(record)
    print(f"[{record['status_label']}] {item['name']} (HTTP {record['http_status']}): {str(record['page_title'])[:40]} | Date: {record['post_date']}")

print(f"\nAudit complete. Raw JSON files saved to {OUT_DIR}")

