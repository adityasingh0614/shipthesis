import urllib.request
import urllib.parse
import json
from datetime import datetime

# 30 days prior to Nov 2, 2026: Oct 3, 2026
# Let's check epoch timestamp:
nov_2_2026 = datetime(2026, 11, 2)
oct_3_2026 = datetime(2026, 10, 3)
start_ts = int(oct_3_2026.timestamp())

print(f"Searching HN Algolia API with created_at_i >= {start_ts} (Oct 3, 2026 to Nov 2, 2026)...")

queries = [
    'MVP',
    'SaaS',
    'Supabase',
    'Next.js',
    'Flutter',
    'hiring developer',
    'dev agency',
    'code ownership',
    'milestone payment',
    'webhooks'
]

headers = {'User-Agent': 'ShipThesisResearch/1.0 (info@shipthesis.com)'}

for q in queries:
    url = f"https://hn.algolia.com/api/v1/search_by_date?query={urllib.parse.quote(q)}&tags=(story,ask_hn)&numericFilters=created_at_i>={start_ts}&hitsPerPage=5"
    req = urllib.request.Request(url, headers=headers)
    try:
        with urllib.request.urlopen(req, timeout=10) as resp:
            data = json.loads(resp.read().decode('utf-8'))
            hits = data.get('hits', [])
            print(f"\n[HN: '{q}'] Found {len(hits)} hits:")
            for h in hits:
                title = h.get('title')
                oid = h.get('objectID')
                dt = h.get('created_at')
                url_hn = f"https://news.ycombinator.com/item?id={oid}"
                story_url = h.get('url')
                print(f"  • Title: {title}")
                print(f"    HN: {url_hn} | Date: {dt}")
                if story_url:
                    print(f"    Ext URL: {story_url}")
    except Exception as e:
        print(f"Error querying '{q}': {e}")

