#!/usr/bin/env python3
"""
Audits all cited URLs in blog_research:
- Opens each URL
- Records HTTP status, fetch timestamp, real page title, and actual post date
- Saves raw result to research/raw/2026-11-02/<source_name>.json
- Checks if date is strictly within 30 days of Nov 2, 2026 (>= Oct 3, 2026)
"""

import os
import json
import re
import urllib.request
import urllib.error
from datetime import datetime

URLS = [
    ("topic1_reddit", "https://www.reddit.com/r/StartUpIndia/comments/1k00x7j/5_things_i_wish_startup_founders_knew_before/"),
    ("topic1_hn", "https://news.ycombinator.com/item?id=19948695"),
    ("topic2_reddit", "https://www.reddit.com/r/startups/comments/1ebl70s/are_there_any_downside_of_hiring_a_software_agency/"),
    ("topic2_hn", "https://news.ycombinator.com/item?id=50330601"),
    ("topic3_reddit", "https://www.reddit.com/r/FlutterDev/comments/1d3f9b2/client_weekly_builds/"),
    ("topic3_hn", "https://news.ycombinator.com/item?id=50332722"),
    ("topic4_reddit", "https://www.reddit.com/r/startups/comments/1ebl70s/are_there_any_downside_of_hiring_a_software_agency/"),
    ("topic4_hn", "https://news.ycombinator.com/item?id=16268672"),
    ("topic5_reddit1", "https://www.reddit.com/r/startups/comments/1ebl70s/are_there_any_downside_of_hiring_a_software_agency/"),
    ("topic5_reddit2", "https://www.reddit.com/r/SaaS/comments/1g91m9y/avoiding_agency_lock_in/"),
    ("topic6_reddit", "https://www.reddit.com/r/FlutterDev/comments/1fm6qj1/flutter_in_2026_vs_react_native/"),
    ("topic6_hn", "https://news.ycombinator.com/item?id=50333797"),
    ("topic7_reddit", "https://www.reddit.com/r/SaaS/comments/1f81x4y/nextjs_supabase_stack_2026/"),
    ("topic7_github", "https://github.com/supabase/supabase/pull/51348"),
    ("topic8_reddit", "https://www.reddit.com/r/startups/comments/1g11x3q/preparing_for_developer_calls/"),
    ("topic8_hn", "https://news.ycombinator.com/item?id=42129021"),
    ("topic9_github", "https://github.com/supabase/supabase/pull/51348"),
    ("topic9_reddit", "https://www.reddit.com/r/nextjs/comments/1f4x62k/supabase_ssr_rls_pattern/"),
    ("topic10_github", "https://github.com/stripe/stripe-node/issues/2516"),
    ("topic10_reddit", "https://www.reddit.com/r/SaaS/comments/1d471m2/handling_stripe_webhook_duplicates/")
]

OUT_DIR = os.path.join(os.path.dirname(__file__), "..", "research", "raw", "2026-11-02")
os.makedirs(OUT_DIR, exist_ok=True)

headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
}

results = []

for name, url in URLS:
    fetch_time = datetime.now().isoformat()
    record = {
        "name": name,
        "url": url,
        "fetch_time": fetch_time,
        "http_status": None,
        "page_title": None,
        "post_date": None,
        "verified_opened": False,
        "within_30_days": False,
        "status_label": "unverified",
        "raw_notes": ""
    }
    
    req = urllib.request.Request(url, headers=headers)
    try:
        with urllib.request.urlopen(req, timeout=8) as resp:
            record["http_status"] = resp.status
            record["verified_opened"] = (resp.status == 200)
            html = resp.read().decode("utf-8", errors="ignore")
            
            m_title = re.search(r"<title>(.*?)</title>", html, re.IGNORECASE | re.DOTALL)
            if m_title:
                record["page_title"] = m_title.group(1).replace("\n", " ").strip()
            
            # HN date pattern
            m_hn = re.search(r'class="age"\s+title="(\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2})"', html)
            if m_hn:
                record["post_date"] = m_hn.group(1)
                
            # GitHub date pattern
            m_gh = re.search(r'datetime="(\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z?)"', html)
            if m_gh:
                record["post_date"] = m_gh.group(1)
                
    except urllib.error.HTTPError as e:
        record["http_status"] = e.code
        record["raw_notes"] = f"HTTP Error {e.code}: {e.reason}"
    except Exception as e:
        record["http_status"] = 0
        record["raw_notes"] = str(e)

    # Date check
    if record["post_date"]:
        try:
            clean_date = record["post_date"].replace("Z", "")
            dt = datetime.fromisoformat(clean_date)
            # Within 30 days of Nov 2, 2026: >= Oct 3, 2026
            if dt >= datetime(2026, 10, 3):
                record["within_30_days"] = True
                record["status_label"] = "VERIFIED_ACTIVE"
            else:
                record["within_30_days"] = False
                record["status_label"] = f"EXPIRED_STALE (Date: {clean_date[:10]})"
        except Exception as e:
            record["raw_notes"] += f" | Date parse error: {e}"
    else:
        if not record["verified_opened"]:
            record["status_label"] = f"BLOCKED_UNVERIFIED (HTTP {record['http_status']})"
        else:
            record["status_label"] = "OPENED_NO_DATE"

    # Save to research/raw/2026-11-02/
    out_file = os.path.join(OUT_DIR, f"{name}.json")
    with open(out_file, "w", encoding="utf-8") as f:
        json.dump(record, f, indent=2)

    results.append(record)
    title_short = (record['page_title'] or 'None')[:45]
    print(f"[{record['status_label']}] {name} (HTTP {record['http_status']}): {title_short} | Date: {record['post_date']}")

print("\n--- Summary of Audited Sources ---")
verified_count = sum(1 for r in results if r["within_30_days"] and r["verified_opened"])
blocked_count = sum(1 for r in results if not r["verified_opened"])
stale_count = sum(1 for r in results if r["verified_opened"] and not r["within_30_days"])
print(f"Total Sources Checked: {len(results)}")
print(f"Verified & Within 30 Days: {verified_count}")
print(f"Blocked / HTTP Error (Unverified): {blocked_count}")
print(f"Stale / Older than 30 Days: {stale_count}")

