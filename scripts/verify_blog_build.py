import os
import glob
import json
import re

print("=== VERIFYING GENERATED STATIC PAGES ===")
blog_dir = "web/.next/server/app/blog"
slugs = [
    "how-milestone-payments-work",
    "what-to-cut-from-v1-mvp",
    "code-ownership-hiring-agency",
    "why-weekly-working-builds-matter"
]

for slug in slugs:
    html_path = os.path.join(blog_dir, slug + ".html")
    if not os.path.exists(html_path):
        print(f"ERROR: {html_path} does not exist!")
        continue
    with open(html_path, "r", encoding="utf-8") as f:
        html = f.read()

    # 1. Hero image
    hero_match = re.search(r'<div class="[^"]*heroImage[^"]*"><img[^>]+src="([^"]+)"', html)
    hero_src = hero_match.group(1) if hero_match else "NOT FOUND"

    # 2. OG image
    og_match = re.search(r'<meta property="og:image" content="([^"]+)"', html)
    og_src = og_match.group(1) if og_match else "NOT FOUND"

    # 3. Breadcrumbs UI
    has_breadcrumbs = 'aria-label="Breadcrumb"' in html

    # 4. JSON-LD Schemas across all ld+json blocks
    schema_matches = re.findall(r'<script[^>]+ld\+json[^>]*>([\s\S]*?)</script>', html)
    all_types = []
    for s_raw in schema_matches:
        try:
            data = json.loads(s_raw)
            graph = data.get("@graph", [])
            for item in graph:
                t = item.get("@type")
                if isinstance(t, list):
                    all_types.extend(t)
                elif t:
                    all_types.append(t)
        except Exception as e:
            print("Error parsing schema:", e)

    has_article = "Article" in all_types
    has_faq = "FAQPage" in all_types
    has_breadcrumb_schema = "BreadcrumbList" in all_types

    print(f"Slug: {slug}")
    print(f"  Hero image: {hero_src}")
    print(f"  OG image: {og_src}")
    print(f"  Breadcrumbs UI: {'[PASS]' if has_breadcrumbs else '[FAIL]'}")
    print(f"  Article Schema: {'[PASS]' if has_article else '[FAIL]'}")
    print(f"  FAQPage Schema: {'[PASS]' if has_faq else '[FAIL]'}")
    print(f"  BreadcrumbList Schema: {'[PASS]' if has_breadcrumb_schema else '[FAIL]'}")

    # Check for milestone diagram on page 1
    if slug == "how-milestone-payments-work":
        has_diagram = "30/40/30 Milestone Payment Framework" in html
        has_new_text = "Each payment is released at a checkpoint you can inspect" in html
        has_midpoint = "40% Midpoint" in html
        print(f"  Timeline Diagram rendered: {'[PASS]' if has_diagram else '[FAIL]'}")
        print(f"  Updated Wording verified: {'[PASS]' if has_new_text else '[FAIL]'}")
        print(f"  Midpoint Wording verified: {'[PASS]' if has_midpoint else '[FAIL]'}")

print("\n=== VERIFYING SITEMAP ENTRIES ===")
sitemap_found = False
for root, dirs, files in os.walk("web/.next"):
    for f in files:
        if "sitemap" in f:
            p = os.path.join(root, f)
            with open(p, "rb") as fh:
                content = fh.read().decode("utf-8", errors="ignore")
                if "how-milestone-payments-work" in content:
                    sitemap_found = True
                    print(f"Found sitemap entries in: {p}")
                    for line in content.splitlines():
                        if any(s in line for s in slugs) or "blog" in line:
                            print("  " + line.strip()[:100])
                    break
    if sitemap_found:
        break
