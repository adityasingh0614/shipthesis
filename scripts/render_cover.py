#!/usr/bin/env python3
"""
Cover Image Renderer for Ship Thesis Blog Pipeline (blog:image)
Renders crisp Open Graph (1200x630) and LinkedIn (1080x1080) cards from template-v1.html using Playwright.
"""

import sys
import os
import json
import base64
from playwright.sync_api import sync_playwright
from PIL import Image

ROOT_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
TEMPLATE_PATH = os.path.join(ROOT_DIR, "templates", "cover", "template-v1.html")
COVERS_DIR = os.path.join(ROOT_DIR, "web", "public", "covers")

def get_base64_image(image_path):
    with open(image_path, "rb") as f:
        data = f.read()
    ext = os.path.splitext(image_path)[1].lower().replace(".", "")
    if ext == "jpg":
        ext = "jpeg"
    return f"data:image/{ext};base64,{base64.b64encode(data).decode('utf-8')}"

def render_cover(slug):
    meta_path = os.path.join(COVERS_DIR, f"{slug}.json")
    if not os.path.exists(meta_path):
        print(f"[ERROR] Metadata not found at {meta_path}")
        return False

    with open(meta_path, "r", encoding="utf-8") as f:
        meta = json.load(f)

    # Look for illustration file
    ill_png = os.path.join(COVERS_DIR, f"{slug}-illustration.png")
    ill_webp = os.path.join(COVERS_DIR, f"{slug}-illustration.webp")
    ill_jpg = os.path.join(COVERS_DIR, f"{slug}-illustration.jpg")
    
    ill_path = ill_png if os.path.exists(ill_png) else (ill_webp if os.path.exists(ill_webp) else ill_jpg)
    if not os.path.exists(ill_path):
        print(f"[ERROR] Illustration not found for slug '{slug}' in {COVERS_DIR}")
        return False

    ill_uri = get_base64_image(ill_path)

    with open(TEMPLATE_PATH, "r", encoding="utf-8") as f:
        html = f.read()

    html = (
        html
        .replace("{{category}}", meta.get("category", "MVP"))
        .replace("{{headline}}", meta.get("headline", ""))
        .replace("{{illustration}}", ill_uri)
        .replace("{{alt}}", meta.get("alt_text", ""))
    )

    tmp_html_path = os.path.join(COVERS_DIR, f"temp_{slug}.html")
    with open(tmp_html_path, "w", encoding="utf-8") as f:
        f.write(html)

    og_png_path = os.path.join(COVERS_DIR, f"{slug}-og.png")
    square_png_path = os.path.join(COVERS_DIR, f"{slug}-square.png")
    linkedin_png_path = os.path.join(COVERS_DIR, f"{slug}-linkedin.png")

    print(f"[Renderer] Launching Chromium to capture {slug}...")
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        
        # 1. Landscape 1200x630 (OpenGraph & LinkedIn Landscape)
        page = browser.new_page(viewport={"width": 1400, "height": 800}, device_scale_factor=1)
        page.goto(f"file:///{tmp_html_path.replace(os.sep, '/')}")
        page.wait_for_selector("#landscape")
        
        # Hide square while capturing landscape
        page.evaluate("document.getElementById('square').style.display = 'none';")
        landscape_el = page.locator("#landscape")
        landscape_el.screenshot(path=og_png_path)
        print(f"  [OK] Rendered Open Graph (Lavender Spec): {og_png_path}")

        # Brand Accent Variant
        brand_og_path = os.path.join(COVERS_DIR, f"{slug}-og-brand.png")
        page.evaluate("document.getElementById('landscape').classList.add('theme-brand');")
        landscape_el.screenshot(path=brand_og_path)
        print(f"  [OK] Rendered Open Graph (Brand Green): {brand_og_path}")

        # LinkedIn variant 1200x627
        img_og = Image.open(og_png_path)
        img_li = img_og.resize((1200, 627), Image.Resampling.LANCZOS)
        img_li.save(linkedin_png_path, "PNG", optimize=True)
        print(f"  [OK] Rendered LinkedIn: {linkedin_png_path}")

        # 2. Square 1080x1080
        page2 = browser.new_page(viewport={"width": 1200, "height": 1200}, device_scale_factor=1)
        page2.goto(f"file:///{tmp_html_path.replace(os.sep, '/')}")
        page2.evaluate("document.getElementById('landscape').style.display = 'none';")
        page2.wait_for_selector("#square")
        square_el = page2.locator("#square")
        square_el.screenshot(path=square_png_path)
        print(f"  [OK] Rendered Square 1080x1080: {square_png_path}")

        browser.close()

    # Clean up temp html
    if os.path.exists(tmp_html_path):
        os.remove(tmp_html_path)

    # Check file sizes
    og_kb = os.path.getsize(og_png_path) / 1024
    sq_kb = os.path.getsize(square_png_path) / 1024
    print(f"\n[File Sizes] OG: {og_kb:.1f} KB (Limit: <300 KB) | Square: {sq_kb:.1f} KB")

    return True

if __name__ == "__main__":
    slug = sys.argv[1] if len(sys.argv) > 1 else "milestone-payments-mvp"
    success = render_cover(slug)
    sys.exit(0 if success else 1)
