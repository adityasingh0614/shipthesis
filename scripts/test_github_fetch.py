import urllib.request
import urllib.parse
import json

queries = [
    ("supabase_rls", "repo:supabase/supabase multi-tenant auth RLS updated:>=2026-10-03"),
    ("nextjs_auth", "repo:vercel/next.js App Router auth session updated:>=2026-10-03"),
    ("stripe_webhooks", "repo:stripe/stripe-node webhook signature idempotency updated:>=2026-10-03"),
    ("flutter_offline", "repo:flutter/flutter offline local storage SQLite updated:>=2026-10-03")
]

headers = {"User-Agent": "ShipThesisResearchBot/1.0"}

for name, q in queries:
    url = f"https://api.github.com/search/issues?q={urllib.parse.quote(q)}&sort=updated&order=desc&per_page=5"
    req = urllib.request.Request(url, headers=headers)
    try:
        with urllib.request.urlopen(req, timeout=10) as resp:
            data = json.loads(resp.read().decode("utf-8"))
            items = data.get("items", [])
            print(f"\n[GitHub: '{name}'] ({len(items)} items):")
            for it in items[:3]:
                print(f"  • {it.get('title')}")
                print(f"    URL: {it.get('html_url')}")
                print(f"    Updated: {it.get('updated_at')}")
    except Exception as e:
        print(f"GitHub query error '{name}': {e}")

