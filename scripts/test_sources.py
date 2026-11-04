import urllib.request
import urllib.parse
import json
import re
from datetime import datetime

CUTOFF_TIMESTAMP = 1790985600 # 2026-10-03 00:00:00 UTC
HEADERS = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"}

def search_hn(query, tags="story", hits=5):
    url = f"https://hn.algolia.com/api/v1/search?query={urllib.parse.quote(query)}&tags={tags}&numericFilters=created_at_i>={CUTOFF_TIMESTAMP}&hitsPerPage={hits}"
    req = urllib.request.Request(url, headers={"User-Agent": "curl/7.68.0"})
    try:
        with urllib.request.urlopen(req, timeout=10) as resp:
            data = json.loads(resp.read().decode("utf-8"))
            return data.get("hits", [])
    except Exception as e:
        print(f"HN Error ({query}):", e)
        return []

def search_github(query, hits=5):
    url = f"https://api.github.com/search/issues?q={urllib.parse.quote(query)}&per_page={hits}"
    req = urllib.request.Request(url, headers=HEADERS)
    try:
        with urllib.request.urlopen(req, timeout=10) as resp:
            data = json.loads(resp.read().decode("utf-8"))
            return data.get("items", [])
    except Exception as e:
        print(f"GitHub Error ({query}):", e)
        return []

print("=== HN Stories: agency, mvp, code ownership, build vs buy, supabase, flutter, webhook ===")
for q in ["agency", "mvp", "code ownership", "build vs buy", "supabase", "flutter", "webhook"]:
    results = search_hn(q, "story", 3)
    print(f"\n--- Query: {q} (Hits: {len(results)}) ---")
    for r in results:
        title = r.get("title")
        created = r.get("created_at")
        oid = r.get("objectID")
        url = r.get("url") or f"https://news.ycombinator.com/item?id={oid}"
        print(f"  [{created}] {oid}: {title} -> {url}")

print("\n=== HN Comments: milestone, code ownership, vendor lock-in, sprint deliverable ===")
for q in ["milestone", "code ownership", "vendor lock-in", "sprint deliverable", "agency contract"]:
    results = search_hn(q, "comment", 3)
    print(f"\n--- Comment Query: {q} (Hits: {len(results)}) ---")
    for r in results:
        created = r.get("created_at")
        oid = r.get("objectID")
        story_id = r.get("story_id")
        text = (r.get("comment_text") or "")[:90].replace("\n", " ").replace("&#x27;", "'").replace("&quot;", '"')
        print(f"  [{created}] {oid} (Story {story_id}): {text}...")

