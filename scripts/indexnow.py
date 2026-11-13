#!/usr/bin/env python3
"""
IndexNow Ping Script for Ship Thesis
Submits site URLs to IndexNow (Bing & partner search engines) for instant indexing.
"""

import sys
import os
import json
import urllib.request
import urllib.error

INDEXNOW_KEY = "fa4dac4ee233428ba605fe468943cc94"
HOST = "www.shipthesis.com"
KEY_LOCATION = f"https://{HOST}/{INDEXNOW_KEY}.txt"

DEFAULT_URLS = [
    f"https://{HOST}/",
    f"https://{HOST}/flutter-app-development",
    f"https://{HOST}/saas-development",
    f"https://{HOST}/mvp-development",
    f"https://{HOST}/ai-product-development",
    f"https://{HOST}/work/assess-yourself",
    f"https://{HOST}/work/safety-training-platform",
    f"https://{HOST}/work/poststeady",
    f"https://{HOST}/blog",
    f"https://{HOST}/blog/how-milestone-payments-work",
    f"https://{HOST}/blog/what-to-cut-from-v1-mvp",
    f"https://{HOST}/blog/code-ownership-hiring-agency",
    f"https://{HOST}/blog/why-weekly-working-builds-matter",
    f"https://{HOST}/blog/flutter-vs-react-native-mvp",
    f"https://{HOST}/blog/nextjs-supabase-multi-tenant-rls",
    f"https://{HOST}/blog/how-to-vet-software-studios",
    f"https://{HOST}/blog/integrating-llms-into-saas-mvp",
    f"https://{HOST}/blog/saas-stripe-webhooks-idempotency",
]

ENDPOINTS = [
    "https://api.indexnow.org/indexnow",
    "https://www.bing.com/indexnow",
]

def submit_urls(urls=None):
    if urls is None:
        urls = DEFAULT_URLS
    
    payload = {
        "host": HOST,
        "key": os.getenv("INDEXNOW_KEY", INDEXNOW_KEY),
        "keyLocation": KEY_LOCATION,
        "urlList": urls,
    }
    
    data = json.dumps(payload).encode("utf-8")
    headers = {"Content-Type": "application/json; charset=utf-8"}
    
    results = {}
    for endpoint in ENDPOINTS:
        try:
            req = urllib.request.Request(endpoint, data=data, headers=headers)
            with urllib.request.urlopen(req, timeout=10) as response:
                status = response.status
                results[endpoint] = {"status": status, "success": status in (200, 202)}
                print(f"[IndexNow] {endpoint} -> HTTP {status} (Accepted)")
        except urllib.error.HTTPError as e:
            results[endpoint] = {"status": e.code, "error": e.read().decode("utf-8")}
            print(f"[IndexNow Error] {endpoint} -> HTTP {e.code}: {results[endpoint]['error']}")
        except Exception as e:
            results[endpoint] = {"status": 0, "error": str(e)}
            print(f"[IndexNow Error] {endpoint} -> {e}")
            
    return results

if __name__ == "__main__":
    urls_to_submit = sys.argv[1:] if len(sys.argv) > 1 else DEFAULT_URLS
    print(f"Submitting {len(urls_to_submit)} URLs to IndexNow...")
    for u in urls_to_submit:
        print(f"  • {u}")
    res = submit_urls(urls_to_submit)
    success = all(r.get("success", False) for r in res.values())
    sys.exit(0 if success else 1)

