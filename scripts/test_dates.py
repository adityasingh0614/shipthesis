import urllib.request
import re
import json

urls = [
    'https://news.ycombinator.com/item?id=50330601',
    'https://github.com/smusali/checkOwners',
    'https://news.ycombinator.com/item?id=50059461',
    'https://news.ycombinator.com/item?id=49949946',
    'https://github.com/supabase/supabase/pull/51348',
    'https://github.com/stripe/stripe-node/issues/2908',
    'https://github.com/flutter/flutter/issues/194832',
    'https://github.com/4yk5/Ghostman',
    'https://news.ycombinator.com/item?id=50300902',
    'https://propelius.tech/feeds/blog/mvp-development-company/',
    'https://www.innopalm.com/insights/software-development-milestone-payments',
    'https://blog.emailengine.app/how-ai-changed-the-build-vs-buy-equation-in-saas/',
    'https://supabase.com/blog/supabase-compute-private-alpha'
]

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}

for u in urls:
    try:
        req = urllib.request.Request(u, headers=headers)
        with urllib.request.urlopen(req, timeout=10) as resp:
            html = resp.read().decode('utf-8', errors='ignore')
            m_title = re.search(r'<title>(.*?)</title>', html, re.IGNORECASE | re.DOTALL)
            title = m_title.group(1).replace('\n', ' ').strip() if m_title else 'No Title'
            
            pub_date = None
            m_hn = re.search(r'class="age"\s+title="([^"]+)"', html)
            if m_hn:
                pub_date = m_hn.group(1)
            if not pub_date:
                m_gh = re.search(r'datetime="([^"]+)"', html)
                if m_gh:
                    pub_date = m_gh.group(1)
            if not pub_date:
                for pat in [
                    r'property="article:published_time"\s+content="([^"]+)"',
                    r'"datePublished":\s*"([^"]+)"',
                    r'"dateModified":\s*"([^"]+)"',
                    r'<time[^>]*datetime="([^"]+)"'
                ]:
                    m = re.search(pat, html, re.IGNORECASE)
                    if m:
                        pub_date = m.group(1)
                        break
            print(f"URL: {u}")
            print(f"  Title: {title[:70]}")
            print(f"  PubDate: {pub_date}")
            print(f"  Status: {resp.status}")
    except Exception as e:
        print(f"URL: {u} -> Error: {e}")
