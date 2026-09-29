# Home Page Brief

**Version:** v22
**Last updated:** 2026-09-26
**For:** whoever designs and builds the Ship Thesis homepage (Impeccable + the taste skill).
**Facts source:** `.agents/product-marketing.md` (the brand brief wins on any fact). **Copy:** `docs/copy/home.md`. **Motion:** `docs/design/motion-components.md` (which motion component each section uses; each section below names its own).

This brief says **what each section must say and achieve**. It deliberately does not prescribe layout, sizes, spacing, card styles or animation mechanics: those are design decisions for the design skills. Where the founder has a direction in mind, it's noted as a starting point, not a spec.

---

## 0. Fixed rules (content and brand, not layout)

**Content truth**
- No invented facts: no numbers, logos, ratings, quotes or claims that aren't in the brand brief. Missing items stay as clearly marked placeholders.
- Client names allowed: Aptellic (Assess Yourself), EHS Guru (EHS Training Platform). Nothing else.
- One button label everywhere: "Book a Discovery Call".
- Prices only as stated in the brand brief; /pricing owns the detail.
- No code-drawn fake app screens. App screens are real screenshots or recordings with demo data.
- Sections with no real content yet (testimonials, blog) are built with placeholders and hidden on the live site until real content exists.

**Brand commitments the founder has pinned** (honour these; everything else is open)
- Light theme only.
- Green is the brand: deep green `#0A7F55` for actions, bright green `#24B47E` for small highlights only (never text or button fills).
- Headings: Phudu, uppercase.
- Labels and prices: JetBrains Mono.
- Secondary text colour `#445048` (the founder rejected the lighter grey as dull).
- Sections alternate between two tones of one neutral (white and a slightly darker shade), so bands are clearly visible.
- Cards need a visible border (the founder found 1px too faint).
- No gradients, no emoji, no em dashes in visible copy.

**Quality floor:** accessible (contrast, focus, keyboard), works at 360px first, respects reduced motion, fast to load.

---

## 1. Hero

**Job:** in five seconds, a founder knows we take an idea to a live AI-powered app or SaaS product, and books a call.

**Copy:** in `docs/copy/home.md` §1. H1: "From first idea (grey) to a live product." Buttons: Book a Discovery Call (green) and See our work (white, outlined).

**Visual (built 2026-09-27, refined same day): "exploded phone".** Flat isometric inline SVG, no photos or 3D renders. Four layers of one phone on the same axis, each with its own detail:
- Idea: a cream paper note with tape, a handwritten title, bullets, a lightbulb doodle, a mini flow sketch and a small yellow sticky.
- Design: the dashed wireframe of the same screen Build shows, with a measurement line, a comment pin and a cursor.
- Build: that screen finished (status bar, header, chart card with one green bar, tabs, list, the one green button).
- Ship: the phone body (dynamic island, side buttons, a home screen of apps and a dock).
Labels on thin leader lines, each with a short caption (your sketch, screens you approve, a build every week, App Store & Play Store). Flutter, Swift, Kotlin and AWS logos sit upright and readable under the Ship label. Faint isometric dot grid behind, fading at the edges. One soft shadow under the whole stack.

**Motion:** one 7s loop. Layers start spread apart; each lands on the one below and merges into it; Build drops into the phone and the merged layers show as thin edges on its side; "✓ Shipped" pops; hold about 2s; the layers float apart again. Scrolling compresses the stack slightly. Reduced motion: the assembled phone, still. Built with Motion (already on the site) instead of GSAP.

**Proof strip (under the visual):** "Built & shipped by Ship Thesis" and one row of app tiles: Poststeady, EHS Training Platform, ChromaLayer, Assess Yourself. Hover or focus lifts a tile 4px and shows its type and status. Monogram tiles until the real app icons arrive.

**Founder's rules kept over the source prompt:** green stays #0A7F55 (not #16A34A), the button stays "Book a Discovery Call", no eyebrow, proof strip uses the brief's four projects and statuses.

---

## 2. Our work

**Job:** prove we ship real work, fast: client apps and our own product.

**Content:** four projects, in this order. Own products join the same carousel as they ship; never a second section for them.

| Project | Client line | What it is | Stack | Status / time |
|---|---|---|---|---|
| Assess Yourself | Client: Aptellic | A scalable ed-tech platform with a TypeScript/Express REST API and Flutter mobile app, featuring exam prep, live tests, subscriptions via Razorpay, and Firebase-backed auth. | Flutter, Node.js, Express, Firebase, Razorpay (pending: founder to supply final stack) | 3-4 weeks · Delivered, launching soon |
| EHS Training Platform | Client: EHS Guru | A dedicated, brand-first LMS built for live cohort-based learning. | Next.js, Supabase, Zoom API, TypeScript, Sentry, Tailwind CSS | Since May 2026 · Live, on our maintenance plan |
| Poststeady | Our own product | A client-reporting SaaS that turns messy CSV exports into a branded report, with the analysis written, not just charted. | Next.js, Supabase, TypeScript, Tailwind CSS, Dodo Payments, Puppeteer | Built in 11 weeks · Live |
| ChromaLayer | Our own product | A native Windows utility for advanced, system-wide display color and temperature control. | C# / .NET / WPF, Magnification API, Velopack, Astro, Tailwind CSS, Dodo + Cloudflare Workers | Live · /work/chromalayer; product page link, never the installer |

Each project shows a visual of the product (real screens, demo data), its name, client line, description, stack, status and a link to its case study.

**Project colours:** each project title is two colours: the first part in the project colour, the rest in ink (Assess / Yourself, EHS Training / Platform, Poststeady Client / Reporting Tool, Chroma / Layer; colour covers Poststeady Client, EHS Training and Chroma); the subheading and everything else stay in the page colours. Assess Yourself `#283593` (darker shade `#1C2B7A`), EHS Training Platform `#00674C`, Poststeady `#1A5BFA`, ChromaLayer `#4a5fd6`. The same colour is that project's primary accent on its case study page. These are the only exception to green-as-brand, and only inside that project's card or page; buttons stay green.

**Also say here** (answers "can a small studio do this?"): we build and run our own products, so we deal with the same releases, bugs, payments and support you will. This sits in the section subheading.

**Founder's direction:** a carousel of project cards that moves as you scroll, one full card at a time (no arrows, no peek of the next card), with the top six stack items per project.

**Motion:** Carousel Controls + Screenshot Scroll Reveal. See `docs/design/motion-components.md`.

---

## 3. How it works

**Job:** show a thorough, visible process from first call to launch, so a founder trusts we won't disappear.

**Content:** six steps.

| Step | When | What you get |
|---|---|---|
| Discovery call | Day 1 · 30 minutes | We learn what you're building, what you need, and whether we're the right fit. Then we turn it into a clear scope, wireframes, timeline and milestones |
| Design | Before each screen is built | We design the screens your users will see, then get your approval before development begins |
| Development | Weeks 2 onward · Every week | You get a new working build on your phone every week, with progress tied to the agreed milestones |
| Testing | Every week + before submission | Every build is tested before it reaches you, with full end-to-end testing before submission |
| Store submission | End of build | We handle the App Store and Play Store submission, including the review process |
| Launch | Launch day | Your app, live on the App Store and Play Store |

Link: "What each stage includes →" (to /services). No prices here.

**Founder's direction:** follow the founder's reference: a grid of step cards (three per row on desktop), each with a visual on top (placeholder until real visuals arrive), a STEP 01-06 badge, the step name, one line on what you get, and its timing. Arrows sit between cards in a row. Design, Development and Testing carry an "Every week" marker. The earlier drawn-line diagram was dropped.

**Motion:** Stagger Reveal, cards fade up in sequence as they come into view. See `docs/design/motion-components.md`.

---

## 4. What we build

**Job:** show we build the whole product, not just screens, including AI.

| Service | Line |
|---|---|
| Cross-platform apps | Built once in Flutter, live on both the App Store and Play Store. Our default for most MVPs. |
| Native iOS & Android | When your app needs everything the phone can do, we build it natively in Swift and Kotlin. |
| Custom solutions | Products built around how your business actually works, not squeezed into a template. |
| AI features | AI added where it makes the product better: summaries, chat, automation and more. Not as a gimmick. |
| SaaS apps & platforms | Customer-facing web apps with accounts, billing, dashboards and the systems behind them. It's the kind of product we build and run ourselves. |
Link: "See how each one works →" (to /services).

**Founder's direction:** service cards with motion, in the spirit of Flutter Your Way's services section. Built 2026-09-26: five cards (three on the first row, two wider below), each with a visual on top (placeholder until the founder's animated visuals arrive), the service name and its line. Heading: WHAT WE BUILD, with a subheading. Copy lives in `docs/copy/home.md`.

**Motion:** each card has its own coded animated scene (shapes only, no fake app screens); no card tilt. See `docs/design/motion-components.md`.

---

## 5. Pricing

**Job:** show our prices in the open (competitors hide theirs) and send people to /pricing.

| Item | Price | Line |
|---|---|---|
| Discovery Sprint | $750 | One week. Credited toward your build if you continue. |
| MVP Build | From $6,000 | Typically 6-10 weeks, as a fixed quote. |
| Support | From $300/month | After 30 days of free fixes. |

Link: "See full pricing →". No "recommended" option, no discounts.

**Built 2026-09-27 (founder's direction):** a Get it built / Keep it running toggle. Build: Discovery Sprint, MVP Build, After launch (30 days free fixes). Maintain: App Care, Product Care, Full Care (from the brand brief's support plans), one line each. Copy in `docs/copy/home.md` §5.

**Motion:** Segmented Toggle (pill slides on a spring), cards swap with a short staggered fade and blur, Border Beam on hover. See `docs/design/motion-components.md`.

---

## 6. Testimonials

**Job:** third-party proof. **We have none yet:** placeholders only, hidden on the live site until real, approved quotes exist. Never write sample quotes that look real.

**Founder's direction:** a mixed grid of video and text testimonials.

**Built 2026-09-27 (placeholders):** three staggered columns interleaving quote cards and tall video cards (1 column on phones). Hidden when `VERCEL_ENV` is `production`; shows locally and on preview deploys. Copy in `docs/copy/home.md` §6.

**Motion:** Stagger Reveal. See `docs/design/motion-components.md`.

---

## 7. From the blog

**Job:** show we write about building apps. **No posts yet:** placeholders only, hidden on the live site until three real posts exist. A blog automation will fill it later, so each post needs: title, excerpt, date, cover image, link. Link: "See all posts →" (to /blog).

**Built 2026-09-27 (placeholders):** three-card grid (cover image, date, title, excerpt), one column on phones. `/blog` is a placeholder holding page until real posts exist. Hidden when `VERCEL_ENV` is `production`. Copy in `docs/copy/home.md` §7.

**Motion:** Stagger Reveal. See `docs/design/motion-components.md`.

---

## 8. Final call to action — removed 2026-09-28

Replaced by the FAQ's own "Talk to us" link and the site-wide "Book a Discovery Call" (header nav + hero), all pointing to `/contact`. The standalone CTA band, its magnetic-pull button and `home/FinalCta.tsx` were deleted rather than kept as dead code; `/contact` is now the one real destination. If the founder wants Home to end on a bigger closing moment again later, revisit then.

---

## 9. FAQ — redesigned 2026-09-28

**Job:** answer the objections a founder has before they book a call, using the brand brief's own Objections table (`.agents/product-marketing.md`). Now also Home's closing section.

**Built 2026-09-28, redesigned same day:** five-item accordion, each row a bordered card with a Phosphor icon, question and chevron; first item open by default; open card and icon border turn green. Top 5 of 9 shown by default, a "Show 4 more questions" toggle reveals the rest. Subheading ends with a real "Talk to us" link to `#contact`. No category pills (General/Pricing/Dashboard/API in the reference): we don't have enough real content to split into categories, so it's a single list. Copy in `docs/copy/home.md` §9.

---

## 10. Get in touch (Home's closing section, replaces /contact page, 2026-09-28)

**Job:** the real destination for every "Book a Discovery Call" link/button on the site. A standalone `/contact` page felt wrong for a single-scroll site: clicking the button shouldn't drop the visitor onto a fresh page repeating the pitch they just read. It's now the last section on Home (`id="contact"`), and every link on the site (header nav, header CTA, hero CTA, FAQ's "Talk to us") points to `/#contact` / `#contact` instead of a route.

**Built:** centred heading "Get in touch", one line, then a single card (Email, WhatsApp, Location) and an "Email us" button. No repeated pitch or 3-step process: the visitor already read that earlier on the same scroll.

**Facts used:** email `hello@shipthesis.com`, WhatsApp +91 88169 55217, location "Remote only" (the brief's fuller line is "based in India, working with US and Europe founders"; the founder asked for "Remote only" here).

**Open item:** no Cal.com booking embed yet, needs the founder's Cal.com link/username. Until then, "Email us" and WhatsApp are the working contact actions.

---

## Open items

- Assess Yourself logo: is it covered by Aptellic's approval?
- Real demo-data screens for the three projects.
- Testimonials: none yet.
- Blog: no posts yet; automation later.
- Get in touch (Home §10): no Cal.com booking embed yet, needs the founder's Cal.com link/username.

## Changelog

- v16 (2026-09-27): Hero rebuilt: new headline, exploded-phone visual and proof strip.
- v15 (2026-09-27): How it works table updated to the founder's own copy.
- v22 (2026-09-26): Card copy is the founder's own (five cards, order: Cross-platform, Native, Custom solutions, AI features, SaaS apps & platforms).
- v21 (2026-09-26): Reverted to five cards (3+2 grid); backend card copy rewritten instead of moved to a bar.
- v20 (2026-09-26): Backend shown as included with every app, not as a separate service card.
- v19 (2026-09-26): What we build lines rewritten (copywriting skill); no Poststeady tag on the AI card.
- v18 (2026-09-26): What we build built: five service cards with Tilt Card motion.
- v17 (2026-09-26): How it works rebuilt from the founder's reference as a step-card grid; the drawn-line diagram is dropped. Our work pins with its heading visible.
- v16 (2026-09-26): How it works built as a drawn line with a weekly loop (option A).
- v15 (2026-09-26): Founder's card titles and subheadings; EHS Training Platform renamed; colours updated (Assess Yourself #283593, ChromaLayer #020914); one full card at a time.
- v14 (2026-09-26): Project colours and two-colour project headings; the colour carries into each case study page.
- v13 (2026-09-26): ChromaLayer becomes the fourth carousel card; own products share the one carousel. The own-products point moved into the subheading. Section headings are centred.
- v12 (2026-09-26): Our work is a scroll-driven carousel with no arrows and five stack items per project.
- v11 (2026-09-26): Each section names its motion component; full plan in `docs/design/motion-components.md`. Header: Shrink Header that hides on scroll down and returns on scroll up.
- v10 (2026-09-26): Stripped to content and goals. Removed prescriptive layout, sizing, card styling and motion specs so Impeccable and the taste skill can design freely; the founder's directions stay as starting points, and the brand commitments the founder pinned are listed in section 0.
- v9 (2026-09-26): Added pricing teaser, blog section and an AI features service.
- v1–v8 (2026-09-25/26): Earlier drafts, including the dropped week-by-week hero stage, phone-recording hero and isometric scene.
