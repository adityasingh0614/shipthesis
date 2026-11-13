import os
from PIL import Image

BASE_DIR = r"D:\projects\studio-site"
PUBLIC_DIR = os.path.join(BASE_DIR, "web", "public")
LOGO_DIR = os.path.join(PUBLIC_DIR, "logo")
SOURCE_LOGO_DIR = os.path.join(BASE_DIR, "shipthesis-logo")

os.makedirs(LOGO_DIR, exist_ok=True)

# 1. Standalone SVG pure mark (The Quantum Monolith)
PURE_MARK_SVG = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="256" height="256" role="img" aria-labelledby="t">
  <title id="t">Ship Thesis</title>
  <g id="logo-mark" fill="#10B981">
    <!-- Upper Kinetic Wing (Lunges Right) -->
    <path d="M 128 36 L 220 128 L 164 128 L 128 92 L 92 128 L 64 100 Z" />
    <!-- Lower Kinetic Wing (Anchors Left) -->
    <path d="M 128 220 L 36 128 L 92 128 L 128 164 L 164 128 L 192 156 Z" />
  </g>
</svg>"""

with open(os.path.join(LOGO_DIR, "favicon.svg"), "w", encoding="utf-8") as f:
    f.write(PURE_MARK_SVG)

with open(os.path.join(PUBLIC_DIR, "icon.svg"), "w", encoding="utf-8") as f:
    f.write(PURE_MARK_SVG)

# 2. icon-1024.svg with rounded obsidian tile
ICON_1024_SVG = """<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" role="img" aria-labelledby="title desc">
  <title id="title">Ship Thesis Icon</title>
  <desc id="desc">Ship Thesis Quantum Monolith mark on a dark obsidian rounded tile.</desc>
  <rect width="1024" height="1024" rx="220" fill="#14201A"/>
  <!-- Centered mark with scale=3.6 -->
  <g fill="#10B981" transform="translate(512 512) scale(3.6) translate(-128 -128)">
    <!-- Upper Kinetic Wing (Lunges Right) -->
    <path d="M 128 36 L 220 128 L 164 128 L 128 92 L 92 128 L 64 100 Z" />
    <!-- Lower Kinetic Wing (Anchors Left) -->
    <path d="M 128 220 L 36 128 L 92 128 L 128 164 L 164 128 L 192 156 Z" />
  </g>
</svg>"""

with open(os.path.join(LOGO_DIR, "icon-1024.svg"), "w", encoding="utf-8") as f:
    f.write(ICON_1024_SVG)

# 3. Read wordmark paths from existing logo-light.svg
with open(os.path.join(LOGO_DIR, "logo-light.svg"), "r", encoding="utf-8") as f:
    old_svg = f.read()

wm_start = old_svg.find('<g fill="#14201A">')
wm_end = old_svg.rfind('</svg>')
inner_wm = old_svg[wm_start:wm_end]

def build_lockup(mark_color="#10B981", wm_color="#14201A", s=1.18, mark_cx=155, wm_dx=-32):
    tx = mark_cx - 128 * s
    ty = 168 - 128 * s
    wm_content = inner_wm
    if wm_color != "#14201A":
        wm_content = wm_content.replace('fill="#14201A"', f'fill="{wm_color}"')
        
    return f"""<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1144 321" role="img" aria-labelledby="title desc">
  <title id="title">Ship Thesis</title>
  <desc id="desc">Ship Thesis logo with Quantum Monolith mark and bold wordmark.</desc>
  <g id="logo-mark" fill="{mark_color}" transform="translate({tx:.2f} {ty:.2f}) scale({s:.4f})">
    <!-- Upper Kinetic Wing (Lunges Right) -->
    <path d="M 128 36 L 220 128 L 164 128 L 128 92 L 92 128 L 64 100 Z" />
    <!-- Lower Kinetic Wing (Anchors Left) -->
    <path d="M 128 220 L 36 128 L 92 128 L 128 164 L 164 128 L 192 156 Z" />
  </g>
  <g transform="translate({wm_dx} 0)">
{wm_content}
  </g>
</svg>"""

# Write logo-light.svg
with open(os.path.join(LOGO_DIR, "logo-light.svg"), "w", encoding="utf-8") as f:
    f.write(build_lockup(mark_color="#10B981", wm_color="#14201A"))

# Write logo-dark.svg
with open(os.path.join(LOGO_DIR, "logo-dark.svg"), "w", encoding="utf-8") as f:
    f.write(build_lockup(mark_color="#10B981", wm_color="#FFFFFF"))

# 4. og-image.svg (1200x630 social share card)
lockup_inside_og = build_lockup(mark_color="#10B981", wm_color="#14201A")
# Remove <?xml ...> and root svg wrapper for nesting
lockup_nested = lockup_inside_og.split("<desc", 1)[1].split("</desc>", 1)[1].rsplit("</svg>", 1)[0]

OG_IMAGE_SVG = f"""<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" role="img" aria-labelledby="title desc">
  <title id="title">Ship Thesis</title>
  <desc id="desc">Ship Thesis logo centered on a white social share image.</desc>
  <rect width="1200" height="630" fill="#FFFFFF"/>
  <g transform="translate(108 178) scale(0.86)">
{lockup_nested}
  </g>
</svg>"""

with open(os.path.join(LOGO_DIR, "og-image.svg"), "w", encoding="utf-8") as f:
    f.write(OG_IMAGE_SVG)

# 5. Render og-image.png and twitter-image.png (1200x630) using sharp
try:
    import subprocess
    node_render_script = """
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
const srcSvg = path.join(process.cwd(), 'web', 'public', 'logo', 'og-image.svg');
const dests = [
  path.join(process.cwd(), 'web', 'src', 'app', 'opengraph-image.png'),
  path.join(process.cwd(), 'web', 'public', 'opengraph-image.png'),
  path.join(process.cwd(), 'web', 'src', 'app', 'twitter-image.png'),
  path.join(process.cwd(), 'web', 'public', 'twitter-image.png'),
  path.join(process.cwd(), 'web', 'public', 'logo', 'og-image.png'),
  path.join(process.cwd(), 'web', 'public', 'og-image.png'),
];
sharp(srcSvg)
  .resize(1200, 630)
  .png()
  .toBuffer()
  .then(buf => {
    dests.forEach(d => fs.writeFileSync(d, buf));
    console.log('OG & Twitter banner PNGs generated successfully via sharp.');
  })
  .catch(err => console.error(err));
"""
    subprocess.run(["node", "-e", node_render_script], cwd=BASE_DIR, check=True)
except Exception as e:
    print(f"Warning: Could not render SVG banners via sharp: {e}")

# 6. Copy standalone root logo files into web/public/logo/
standalone_files = [
    ("logo.svg", "logo.svg"),
    ("logo.png", "logo.png"),
    ("logo.webp", "logo.webp"),
    ("logo-white.png", "logo-white.png"),
    ("logo-white.webp", "logo-white.webp"),
    ("logo-forest.png", "logo-forest.png"),
    ("logo-forest.webp", "logo-forest.webp"),
]

for src, dst in standalone_files:
    src_p = os.path.join(SOURCE_LOGO_DIR, src)
    dst_p = os.path.join(LOGO_DIR, dst)
    if os.path.exists(src_p):
        with open(src_p, "rb") as rf:
            with open(dst_p, "wb") as wf:
                wf.write(rf.read())

# Copy svg variations into web/public/logo/
for color_svg in ["logo-cream.svg", "logo-emerald.svg", "logo-forest.svg", "logo-white.svg"]:
    src_p = os.path.join(SOURCE_LOGO_DIR, "svg", color_svg)
    dst_p = os.path.join(LOGO_DIR, color_svg)
    if os.path.exists(src_p):
        with open(src_p, "rb") as rf:
            with open(dst_p, "wb") as wf:
                wf.write(rf.read())

# 6. Generate raster favicons and PWA icons using Pillow Lanczos
src_master_png = os.path.join(SOURCE_LOGO_DIR, "png", "logo-emerald-2048.png")
if not os.path.exists(src_master_png):
    src_master_png = os.path.join(SOURCE_LOGO_DIR, "logo.png")

master_img = Image.open(src_master_png).convert("RGBA")

targets = [
    ("favicon-48x48.png", (48, 48)),
    ("icon-96.png", (96, 96)),
    ("icon-192.png", (192, 192)),
    ("icon-512.png", (512, 512)),
    ("apple-touch-icon.png", (180, 180)),
]

for name, sz in targets:
    res = master_img.resize(sz, resample=Image.Resampling.LANCZOS)
    out_path = os.path.join(PUBLIC_DIR, name)
    res.save(out_path, format="PNG")
    print(f"Generated {out_path} ({sz[0]}x{sz[1]})")

# Multi-resolution favicon.ico (16, 32, 48)
ico_sizes = [(16, 16), (32, 32), (48, 48)]
ico_imgs = [master_img.resize(s, resample=Image.Resampling.LANCZOS) for s in ico_sizes]
ico_out = os.path.join(PUBLIC_DIR, "favicon.ico")
ico_imgs[0].save(ico_out, format="ICO", sizes=ico_sizes)
print(f"Generated {ico_out} (multi-size ICO)")

print("All logo assets updated successfully!")

