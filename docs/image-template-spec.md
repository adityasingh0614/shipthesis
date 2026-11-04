=== PAGE 1 ===
Ship Thesis: Image Template Spec v1
Draft v1 · November 2, 2026 · Replaces section 9 of the Blog Automation Spec
1. What this covers
One image system for every blog and every block. Each page gets three images from the
same illustration: a plain illustration, a link-preview image and a LinkedIn image. The style
is inspired by one reference (section 2) and must not copy it.
2. Style: soft-gradient flat vector illustration
The reference is a row of blog cards. Each card shows two or three people working
around a large monitor on a pale lavender-to-white gradient, with a small badge on the
screen and a pill-shaped category tag above the card title.
What we take
The soft lavender-to-white gradient background.
Flat vector shapes with light shading and no outlines.
A small team around one large screen as the focal point.
A small badge or icon on the screen that hints at the topic.
A pill-shaped category tag (Note: Deprecated for Ship Thesis — use monospace category metadata, no pills).
Rounded corners and plenty of white space.
What we do not copy
No composition, character or scene from the reference.
No Flutter logo or any other third-party brand mark. Use generic phone, code and
diagram shapes instead.
No text baked into the illustration. Text is added later in the HTML template.
Ship Thesis: Image Template Spec
Page 1 of 7


=== PAGE 2 ===
3. Outputs for every page
On the blog index, the category label and title are real HTML on the card, not part of image A.
4. Design tokens (starting values)
Antigravity must first read the site's existing colors and fonts and match the brand where
they exist. Use these values only where the site has none.
Fonts: Inter or Plus Jakarta Sans (weight 800 for headlines, 500 for other text), with a
system sans-serif fallback. Embed the font file locally so the renderer never falls back.
Asset
Size
Text on the image
Used for
A. Illustration
1600×900 (16:9)
None
Blog index card and
blog header
B. Link
preview
1200×630
Category label (no pill), headline,
wordmark, domain
Open Graph and link
previews
C. LinkedIn
1200×627 and
1080×1080
Same as B
LinkedIn posts
Token
Value
Use
background
#FFFFFF
Canvas
gradient-start
#EEF0FF
Top of the soft gradient
gradient-end
#FFFFFF
Bottom of the soft gradient
navy
#1B2A4E
Headline text, dark shapes
blue
#3B5BDB
Primary shapes
periwinkle
#7C8CF5
Secondary shapes
lavender
#C9CFFF
Soft background shapes
pill-bg
#EEF2FF
Category tag background
pill-text
#4F5BD5
Category tag text
muted
#5B6785
Footer text
Ship Thesis: Image Template Spec
Page 2 of 7


=== PAGE 3 ===
5. Layout of the link-preview and LinkedIn images (B and C)
Canvas 1200×630, white background, 64px margins.
Left, about 55%: pill tag at the top, headline in the middle, wordmark and domain at the
bottom.
Right, about 45%: the illustration inside a rounded panel (24px corners) with the soft
gradient.
Headline: at most 8 words over 2 to 3 lines, 64px, weight 800, line height 1.1, navy,
sentence case.
Pill tag: 22px text, fully rounded. Categories: MVP, SaaS, Mobile, AI, Contracts, BLOCK.
Footer: "Ship Thesis" on the left, shipthesis.com on the right, 24px, muted color.
Square (1080×1080): illustration on the top 58%, then the pill tag, then the headline at
56px, then the footer.
The headline must stay readable when the image is shown 300px wide.
<div class="canvas">
  <div class="text">
    <span class="pill">{{category}}</span>
    <h1>{{headline}}</h1>
    <div class="footer"><span>Ship Thesis</span><span>shipthesis.com</span>
</div>
  </div>
  <div class="art"><img src="{{illustration}}" alt="{{alt}}"></div>
</div>
6. Illustration rules (the style lock)
Flat vector look with soft gradients and subtle shading. No outlines, no 3D, no photo
realism.
Two or three people at most, with one large screen as the focal point.
Colors only from the tokens in section 4.
No text, letters, numbers or logos inside the illustration.
Generous empty space at the edges, so the image crops cleanly in every size.
One small topic hint on the screen, drawn with generic shapes.
Characters are generic and must not resemble anyone on the team or any real person.
Ship Thesis: Image Template Spec
Page 3 of 7


=== PAGE 4 ===
7. Character kit (keeps the series consistent)
Four fixed archetypes with no names. A scene uses two or three of them. Keep their
clothing colors the same on every image.
Founder: navy blazer over a white shirt.
Developer: blue shirt or hoodie, with a laptop.
Designer: lavender sweater, with a tablet or sketches.
Product lead: white shirt, holding a phone or clipboard.
Mix genders and skin tones naturally across scenes.
Ship Thesis: Image Template Spec
Page 4 of 7


=== PAGE 5 ===
8. Scene library
9. Generation prompt (use as written)
Base prompt
Flat vector illustration, modern tech startup style, soft lavender-to-white gradient
background, {SCENE}, two or three generic characters in navy, blue, periwinkle and
lavender clothing, clean shapes, subtle shading, no outlines, limited palette of navy,
blue, periwinkle, lavender and white, 16:9, generous empty space around the edges,
no text, no logos, no watermark.
Page
Scene on the screen
How milestone payments work
Three-step checklist with three simple milestone
icons
What to cut from v1
A phone wireframe with items being crossed out
Code ownership
A repository icon next to a lock and shield
Weekly working builds
A person holding a phone with a working app and a
week calendar
Fixed scope vs hourly billing
A balance scale with a document on one side and a
clock on the other
Flutter vs React Native
Two phones side by side showing one shared code
panel
Deterministic AI engineering
A document turning into a clean table with a check
mark
Figma to production
A design canvas on one screen and a phone build
on the next
SaaS architecture stack
A simple layered stack diagram
How to vet software studios
A checklist with a magnifying glass
Blocks (all)
No people. A clean diagram panel on the same
gradient with the BLOCK tag
Ship Thesis: Image Template Spec
Page 5 of 7


=== PAGE 6 ===
Negative prompt
photorealistic, 3D render, text, letters, numbers, logos, brand marks, watermark,
outlines, harsh shadows, busy background, distorted hands, extra fingers, real
people, celebrity likeness.
Settings: 16:9. Generate 3 candidates and keep the best one. If the tool accepts a style
reference image, use the approved sample from section 12.
Blocks do not use this prompt. They are drawn as diagrams in the HTML template.
10. Pipeline for blog:image <slug>
1. Look up the page's scene in the scene library and build the prompt from section 9.
2. Generate 3 candidates and save the chosen one as /public/covers/<slug>-
illustration.png and a .webp copy.
3. Save the prompt, settings and seed in /public/covers/<slug>.json so the image can
be reproduced.
4. Render images B and C from the HTML template with a script (for example Playwright),
using the illustration, headline and category.
5. Compress the link-preview image to under 300 KB.
6. Write alt text in the form: "Illustration of {scene} for {headline}."
7. Mark the page "image needs review" until the check in section 11 passes.
Fallback if image generation is not available: use a small library of 8 approved illustrations
reused by topic, or the gradient-only layout with a diagram.
11. Image check (about one minute)
Hands and faces look normal, with no extra fingers or distorted features.
No stray text, numbers or logos anywhere in the illustration.
It looks like it belongs to the same set as the other images (palette and character
clothing).
The headline is readable at 300px wide and has enough contrast.
The headline has at most 8 words and no price or numeric timeline.
File size and alt text are correct.
Ship Thesis: Image Template Spec
Page 6 of 7


=== PAGE 7 ===
12. Approval and freeze
Generate sample sets for four pages: How milestone payments work, What to cut from v1,
Weekly working builds, and one block (Next.js and Supabase auth). Adiya picks the
version to keep. Then freeze it as template-v1 : the tokens, the layout, the prompt, the
character kit and the scene library. Any later change needs a version bump to template-
v2 .
13. Rules that never change
No prices, price words or numeric delivery timelines in any headline or image.
No team member names, and no character that resembles a real person.
No client logos and no third-party brand marks (including the Flutter logo).
Light/white theme only.
No stock photos.
14. Build prompt for Antigravity (copy and paste)
Read /docs/image-template-spec.md fully. It replaces section 9 of the Blog
Automation Spec. Do not redesign it.
First, read the site's existing colors and fonts and reconcile them with the tokens in
section 4. Then build the HTML template for images B and C and the blog:image
command. Generate the four sample sets from section 12 for my approval, and stop
there. Do not generate images for any other page until I approve one version.
Never put text, numbers or logos inside the illustration. Add all text in the HTML
template. Save the prompt and seed for every image.
15. What Adiya decides
Whether the site's brand colors replace the starting tokens in section 4.
Which image generation tool Antigravity should use.
Which of the four sample sets becomes template-v1 .
Ship Thesis: Image Template Spec
Page 7 of 7
