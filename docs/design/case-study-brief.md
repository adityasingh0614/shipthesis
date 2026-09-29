# Case Study Brief

**Version:** v9
**Last updated:** 2026-09-28
**For:** whoever designs and builds the Ship Thesis case study pages (Impeccable + the taste skill).
**Facts source:** `.agents/product-marketing.md` (the brand brief wins on any fact), then `docs/case-studies/*-raw.md`. Only points tagged `[EVIDENCE]` or `[FOUNDER]` in a raw file may ship as claims. `[INFERRED]` and `[NEEDS FOUNDER]` never ship.
**Copy:** `docs/copy/case-studies/[slug].md` (update each to match what's built). **Motion:** `docs/design/motion-components.md`.
**Supersedes:** the case study template in `docs/section-plan.md` (v19, "about 300 words, no technical appendix") and the `/work` index in `docs/copy/work.md`.

> **v6 (2026-09-28), read first:** the ten-beat shared template in §1 is **retired below the hero**. After the founder rejected the templated sections 2-4 and pointed to chintanuxui.com case studies, the rule is now: **every case study shares only the hero (§1.1); everything below it is a bespoke design in that product's own world**, approved as a static design file (`web/public/_design/<slug>.html`, gitignored) before any site code. Assess Yourself's world is an exam paper (answer-paper brief, score cards, pinned phone with answer-sheet bubbles, Excel pipeline, marking-scheme hard parts, decisions, big result, under the hood, closing band in the project blue). Rules kept: facts only from `[EVIDENCE]`/`[FOUNDER]`, light theme only, no glows, buttons green, Phudu headings centred, section labels allowed (founder, 2026-09-28).

This brief says what each case study page must say, in what order, and the visual system they share. Assess Yourself was built first (1440px and 390px). The other three share its hero and a few mechanics, but each gets its own world below the hero (§3-§5).

---

## 0. Fixed rules

**Everything in `docs/design/home-brief.md` §0 still applies** (light theme only, green buttons, Phudu uppercase headings, JetBrains Mono labels, Geist body, secondary text `#445048`, visible card borders, no gradients, no emoji, no em dashes in visible copy, centred section headings).

**Case-study rules on top:**

- **Pages:** `/work/assess-yourself`, `/work/safety-training-platform`, `/work/poststeady`, `/work/chromalayer`. **No `/work` index**: Home's Our work carousel is the index. Nav "Work" goes to `/#work`.
- **Order everywhere:** Assess Yourself → EHS Training Platform → Poststeady → ChromaLayer → back to Assess Yourself.
- **Every CTA:** "Book a Discovery Call" → `/#contact`.
- **Project accent** (from Home §2) is an art-direction colour, never the page colour. It goes on: the coloured half of the title, section heading markers, diagram lines, screenshot captions, the hero's tinted field, small emphasis, text selection. **Buttons stay green.** Assess Yourself `#283593`, EHS Training Platform `#00674C`, Poststeady `#1A5BFA`, ChromaLayer `#1c2450`.
- **No eyebrows** above headings (no "CASE STUDY / MOBILE APP", no "THE CHALLENGE" label over "The challenge"). The heading carries its own weight. Mono is for metadata, captions and numbers only.
- **No decorative numbering** (no giant faint 01/02/03, no "DECISION 01", no "01 / 04" page counters). Numbers appear only when they are data.
- **No generic cards.** Sections are open compositions of type, screens and hairlines. A bordered box exists only where it does a job (the Under the hood toggle, the facts rail on mobile).
- **Screens are the star.** Visual weight: product screens > typography > diagrams > decoration. Never tiny screenshots under giant headings.
- **Honest numbers.** No counters that animate up, no growth arrows, no "+X%". One real number shown big beats five small ones. A page shows only numbers from its raw file.
- **Nothing negative** in the main story: no bugs framed as failures, no "one developer", no unresolved questions. Deliberate scope calls are allowed (§1.6); failures and dead ends are not.
- **Other rules:** no client prices. EHS Guru's previous platform stays unnamed. Poststeady and ChromaLayer prove we ship and run our own products; they are never mobile proof.
- **Placeholders:** a missing screen renders as a dashed, device-shaped frame labelled with what goes there. **Any page with a placeholder frame is hidden on production** (`VERCEL_ENV === "production"`), and the Next project link skips hidden pages.
- **Global fields (2026-09-28):** every case study carries an **Industry** and a **Service** (what we provided) fact, shown in the opening metadata and the facts rail. More global fields may be added later; when one is, it goes on all four pages at once so they never drift apart.

---

## 1. The page template

One template, ten beats. The rhythm is the point: the page alternates quiet and loud so it feels unhurried.

| # | Beat | Rhythm |
|---|---|---|
| 1 | Opening (title + hero) | Quiet → big product moment |
| 2 | Facts rail | Persistent, beside the story |
| 3 | The challenge | Quiet story |
| 4 | What we built | Visual product evidence |
| 5 | The hard parts | Dense engineering evidence |
| 6 | What we chose not to build | Quiet strategic thinking |
| 7 | Result | Big proof |
| 8 | Under the hood | Technical depth, on request |
| 9 | Next project | Big page turn |
| 10 | Closing CTA | Quiet |

**Spacing:** case study sections breathe more than Home. Use `--case-py: clamp(96px, 12vw, 176px)` between beats (Home uses `--section-py`, up to 112px). Don't fit more than one beat into a laptop viewport.

### 1.1 Opening

- **Title: one line** (founder's call, 2026-09-28, overrides the earlier two-line stack), space-joined, accent word then ink word: `ASSESS YOURSELF`. Phudu, fluid down to ~36px on a phone so the longest project name still fits on one line without wrapping. Centred.
- **One line** under it: what it is and who it's for. Geist, ~20-22px, max-width ~620px.
- **Metadata row** instead of pills: one line of JetBrains Mono separated by thin vertical hairlines: `CLIENT: APTELLIC │ MOBILE APP │ FLUTTER / NODE.JS / FIREBASE │ 3-4 WEEKS │ INDUSTRY: … │ SERVICE: …`. Wraps to extra centred lines on narrow screens (hairlines only apply on the single-line desktop layout). **Industry and Service are new global fields (2026-09-28), present on every case study**; more fields may follow. Below the metadata, the status with one small dot (the only dot on the page; it carries real state): `● DELIVERED, LAUNCHING SOON` or `● LIVE` with the live link.
- **Hero visual:** where the product has its own pre-composed promo render (a founder-supplied image showing the app in context, e.g. two phones already arranged), **use that image directly** as a single hero shot rather than re-composing individual screenshots. Where no such render exists, fall back to composing 2-3 real screenshots as devices placed in space (one dominant, one or two supporting, transparent backgrounds, no boxes). Either way the devices sit **straight on the page surface**, with no tinted panel or box behind them (founder, 2026-09-28).
- **Hover:** the hero image lifts and scales up slightly on hover/focus (translateY -8px, scale 1.015, shadow deepens), so the product itself feels touchable. Instant (no transition) under reduced motion.
- **No caption** under the hero. The screenshots show real data (founder, 2026-09-28), so there's no "demo data" note.
- **Motion on load:** text fades up (opacity 0→1, y 20→0), staggered. Reduced motion: no movement.

### 1.2 Facts rail

- **Desktop (≥1024px):** from beat 3 to beat 7 the page is two columns: a narrow sticky rail on the left, the story on the right. Rail items are a mono label, a large value and a hairline: Industry · Service · Client · Platform · Stack (logos, top 6) · Timeline · Status (+ live link) · "On our maintenance plan" where true. No cards.
- **Below 1024px the rail is hidden**: the opening's stacked metadata list already shows every fact, so a second copy (the earlier "Project facts" disclosure) would only repeat it. Rail order: Industry · Service · Client · Platform · Timeline · Stack · Status. No status dot in the rail; the opening's dot is the page's only one.

### 1.3 The challenge

- H2 "The challenge", centred.
- The **first sentence set large** (Geist, ~28-32px, ink), then the rest at reading size. Text column ~45-55% of the content width, the rest left empty on purpose. No card, no box, no illustration.

### 1.4 What we built

A product walkthrough, not a feature grid.

- H2 centred, then **one full-width row per feature**, alternating screen-left / screen-right. Each row: a large single-device shot, a short Phudu heading, 1-2 lines of Geist.
- Under each screen, a mono **evidence caption** in the accent, e.g. `EXAM LIST · STUDENT CORNER`.
- Only features with a real screen get a row. Everything else goes in one closing line ("Also in the build: …") or moves to the hard parts.
- Phones get the site's one device shadow; laptops sit flat.
- **Mobile:** stack vertically in the same order: screen, then text.
- Motion: each screen reveals gently on scroll (fade and rise, once).

### 1.5 The hard parts

Denser and more technical than 1.4, so the page visibly changes register.

- H2 centred. Then 2-3 **horizontal blocks** divided by full-width hairlines. Each block: a Phudu heading, then **Problem / What we did / Why it matters for you**, each 1-2 sentences, labels in mono.
- Each block gets **one supporting visual**: a real screen if one proves it, otherwise a **simple step diagram** (authored SVG, accent lines, mono labels, e.g. `EXCEL → NORMALISE → VALIDATE → READY-TO-USE TEST`). Diagrams show the real mechanism; never a fake app screen.
- **A real number, when one exists, is the block's dominant element** (EHS: `7.5×` faster video playback). At most one big number per page.

### 1.6 What we chose not to build

- Deliberately sparse and visibly different from 1.4: a very light accent-tinted band, no screens.
- H2 centred: "What we chose not to build". Then 2-3 decisions as horizontal rows: a short Phudu heading, then 2-3 lines of reason. Only decisions with evidence; don't pad to three.
- Framed as product judgement ("held back until…", "asked instead of guessing"), never as limitations.

### 1.7 Result

- H2 centred. An **editorial grid with hierarchy**: one fact set very large (Phudu or mono numerals), one as a medium statement, one as a small confirmation. Confirmed facts only.
- No counters, no arrows, no percentages that aren't in the raw file.
- `[RESULT TBD]` and testimonial slots don't render until real.

### 1.8 Under the hood

- **Collapsed:** a full-width strip with a thin border: "Under the hood", one line ("Architecture, key decisions and quality checks"), and an expand control on the right. Native `<details>`/`<summary>` so it works without JS and with the keyboard. The expand animates smoothly (`interpolate-size` / grid rows); instant under reduced motion.
- **Expanded:** Architecture (one simple diagram, 4-6 boxes, accent lines) → Key decisions (3-5, plain language, one line each + why) → Quality (only signals the raw file evidences; omit the block if there are none).
- Should feel like a reward for the curious technical reader: real engineering, no jargon dump.

### 1.9 Next project

- Feels like turning a page: a full-width block with the next project's **two-colour name** large, its one line, and a **large cropped crop of its hero**, bleeding off the edge. Link text: "View case study →". Subtle image drift on hover.
- Below, a quiet mono line of continuity: `ASSESS YOURSELF → EHS TRAINING PLATFORM`.
- Skips pages hidden on production.

### 1.10 Closing CTA

- Calm, lots of space, centred. Heading: **"Have something worth building?"** Line: "Start with a 30-minute call about your idea." Button: **Book a Discovery Call** → `/#contact`.

### Mobile (390px) is composed, not collapsed

Opening: title, line, metadata (wrapping to two lines), then the dominant and secondary phones only. Facts: disclosure. Challenge: full width. What we built: one feature at a time, screen then text. Hard parts: stacked, diagram under text. Under the hood: the same disclosure. Next project: full-width visual card.

### SEO

Each page: title `[Project]: [what it is] | Ship Thesis case study`, a meta description from the one line, and an OG image cropped from the hero. Headings in order (one H1 = project name). JSON-LD per `docs/schema-plan.md`. The Under the hood content stays in the HTML when collapsed, so search engines and AI answer engines can read it.

---

## 2. Assess Yourself `/work/assess-yourself`

**Status:** build first. Ships with no placeholders.

| Beat | Content |
|---|---|
| Opening | `ASSESS YOURSELF` (one line, Assess in #283593). *An exam-prep app that takes students from finding the right government exam to sitting a timed paper.* Meta: `CLIENT: APTELLIC │ MOBILE APP │ FLUTTER / NODE.JS / FIREBASE │ 3-4 WEEKS │ INDUSTRY: EDUCATION, EXAM PREPARATION │ SERVICE: MOBILE APP DESIGN AND DEVELOPMENT` · `● DELIVERED, LAUNCHING SOON`. **Hero:** `ay_hero.webp`, the app's own promo render (exam list phone + splash screen), used as a single image with a hover lift. Caption: SHOWN WITH DEMO DATA |
| Facts | Industry Education, exam preparation · Service Mobile app design and development · Client Aptellic · Platform Mobile app (Flutter) · Stack Flutter, Node.js, Express, Firebase, Firestore, Razorpay · Timeline 3-4 weeks · Status Delivered, launching soon |
| Challenge | Students preparing for exams like UPSC, SSC and MPSC were gathering exam details, past papers and practice tests from many different places. Aptellic wanted one app that brings it together, and a large bank of questions kept in spreadsheets had to get in without being typed again by hand |
| What we built | ① **Find the right exam** `a6` · ② **Know the exam before you sit it** `a1` (bleed crop, the phone runs off the row's bottom edge) · ③ **Instant analysis and score history** `a3`. Optional ④ **Every subject, organised** `a2` (subject → topics → tests, bilingual names, free-test tag), only once it's re-captured without the "Smoke B1…B4" rows. Closing line: also in the build: previous-year papers, live tests that open and close on a schedule, and a 15-day free trial with Razorpay plans |
| Hard parts | **Tests that survive interruptions:** papers run to 60+ questions against the clock; if the phone closes the app, answers, review marks and time come back. Diagram: `START → 60+ QUESTIONS → APP CLOSED → REOPEN → SAME ANSWERS, SAME TIME`. **Messy spreadsheets in, clean questions out:** 2 layouts, Marathi numerals, image answer options; bad rows are flagged without stopping the upload. Diagram: `EXCEL → NORMALISE → VALIDATE → READY-TO-USE TEST`. **One source of truth for subscriptions:** trial and plan status come from the server, so every student sees the right plan. Diagram: `PHONE ← SERVER (TRIAL STATE) → RAZORPAY` |
| Not built | **Recurring auto-pay, held back until the renewal model was decided**, rather than hard-coding billing the client hadn't chosen. **An importer that stops at the first bad row:** real files would fail it, so the upload reports every bad row and keeps going |
| Result | Large: `3-4 WEEKS`, delivered to the client. Medium: new exams go live from a single Excel upload. Small: launching on the Play Store soon |
| Under the hood | Diagram: Flutter app → 15 REST APIs → Express on Firebase Cloud Functions → Firestore; Excel → parser → API; Razorpay beside the API; test state on the phone. Decisions: trial rules on the server · row-level error reports on import · content linked by IDs so each screen fetches only its layer · test state saved on the phone after every tap · upload stream handled below Firebase's default parser so Excel files arrive intact. No Quality block (no test/CI evidence on file) |
| Next | EHS Training Platform |

**Assets, revised 2026-09-28** (the product's real name is Assess Yourself, confirmed by the founder; "Access Yourself" was our error): `ay_hero.webp` is the opening hero, used whole. `a3`, `a6`, `a1` (bleed crop) are for the "What we built" walkthrough (beat 4, not yet built). Move all to `web/public/work/assess-yourself/`. Screenshots show real data (founder, 2026-09-28). **Hold:** `a2` and `a5` (Subject Details): 4 of 6 topics read "Smoke B1 1773749599240", which looks unfinished to a visitor; use once re-captured with real-looking topic names. **Don't use:** `ay.webp` (same Smoke rows on its left phone), `a4` (splash alone, `ay_hero` already includes it), `a7` (superseded by `ay_hero` in the opening; still usable in the walkthrough), `aabout.webp` (generic illustration), `access_about.webp` (435px).

---

## 3. EHS Training Platform `/work/safety-training-platform`

**World: "The Session Console."** Assess Yourself is a student sitting an exam; EHS Guru is a company running live classes. So this page speaks the language of live broadcast (cues, run sheets, "on air", logs), and its device is a **laptop in a browser**, never a phone (it's a web platform). Accent `#00674C`. Planned 2026-09-28, founder asked for a distinct world per case study.

**Status:** next to build. Design file first (`web/public/_design/safety-training-platform.html`), then port. All screens exist; ships with no placeholders except the testimonial.

| Beat | Assess Yourself did | EHS does |
|---|---|---|
| Hero card | Admit card + rotated stamp | **Session pass**: a live-event credential. Header "Session pass · Case study 02". A **pulsing ● LIVE badge** ("Live since May 2026") replaces the stamp |
| Hero image | `ay_hero` phones | **`ehs_hero.webp`**: three laptops (admin cohort, trainer dashboard, calendar) on a plain background. Founder confirmed 2026-09-28 |
| Marquee | Features, indigo band | One-click classes ✱ Automatic attendance ✱ Every class recorded ✱ Engagement analytics ✱ Free webinars ✱ Email and WhatsApp reminders (EHS green band) |
| 01 The brief | Answer paper, Q1-Q3 | **Run sheet**: the rundown a live broadcast runs from. Header: EHS Guru · Run sheet / Client: EHS Guru / Status: Live since May 2026. **Cue 1** What EHS Guru needed · **Cue 2** What made it hard · **Cue 3** What went live |
| Stat cards | 3-4 / 15 / 60+ / 15 | **76** pages · **52** API routes · **~80** learners per live class · **4** audiences in one system |
| 02 Walkthrough | 3 tilted phones | **"Four audiences, one system"**: laptops `ehs2` Admin · Sessions, `ehs1` Learner · Dashboard, `ehs4` Admin · Users, `ehs7` Guest · Free webinars (crop the dev badge). Staggered 2×2, captions in mono |
| 03 Pinned story | Exam day, steps A-F | **"When a class goes live"**: laptop `ehs2` pinned; steps light up like cues: **Before** Reminder by email and WhatsApp, at the right time in each learner's time zone → **T-0** Admin clicks Start: Zoom meeting created, trainer's name set → **Join** Learners join from the portal, nothing to install, no Zoom sign-up → **Live** Every join and leave is recorded, and a duplicate event can't count twice → **Pause** Recording stops by accident: it restarts, every segment kept in order → **After** Best video copied to EHS Guru's own storage, published, watch time checked on the server |
| 04 Hard parts | Marking scheme | **Reliability log**: status-page entries after an incident, each with a mono timestamp and a green "Resolved" chip. Recording stops mid-class → restarts, segments kept · "Who is 'John' in Zoom?" → matched by email, then by name within the enrolled batch · A class ending because one person left → ends only when it really ends · Videos slow to load → moved to a fast delivery network, **7.5×** (0.12 → 0.90 MB/s, measured first). **7.5× is the page's one big number** |
| Mid CTA | Green dot band | Same mechanic: **"Want a platform built like this?"** |
| 05 Judgement | 2 decisions | **Payments kept offline**, EHS Guru's choice, so the build stayed on teaching · **Email first, WhatsApp after**: launch wasn't held for Meta's template approval · **No premium hosting tier**: reminders run on external scheduling, so running costs stay low |
| 06 Result | "3-4 WEEKS" | Big: **LIVE SINCE MAY 2026**. Facts: runs EHS Guru's paid live classes in batches of nearly 80 · on its own domain and brand · still on our maintenance plan |
| Under the hood | Open | Diagram: browser → Next.js on Vercel → Supabase; Zoom events → webhook → attendance (in the database, one step) + best recording → Cloudflare R2 → player; scheduler → email + WhatsApp. Decisions: attendance counted in one step · recordings in the client's own storage · every Zoom event logged · access checked at three layers. Quality: regression tests on the Zoom and recording logic, error monitoring, security headers and rate limits |
| 07 Testimonial | Placeholder | "What EHS Guru says", hidden on production until real |
| 08 Conclusion | Final answer | **"What this build says about yours"**, set as the **end-of-show log**: i. We make the tools you already use dependable (Zoom, email, WhatsApp) · ii. We measure before we choose (7.5×) · iii. We stay after launch (still on our plan). Same brand-promise line + two buttons |
| Next | EHS | **Poststeady** (falls back to `/#work` while its page is hidden) |

**Rules for this page:** the old platform stays unnamed ("an off-the-shelf learning platform"). No payments or client-price talk. Zoom is the client's tool; we never imply we built Zoom.

**Assets:** `ehs_hero.webp` (hero, 731×650: check sharpness at 1440px; ask for a larger export if soft), `ehs1`, `ehs2`, `ehs4`, `ehs7`. Move to `web/public/work/safety-training-platform/` (`sessions.webp` from `ehs2` is already there). **Don't use:** `ehs_hero_small.webp` (dark gradient background), `ehs_about.webp` (435px).

---

## 4. Poststeady `/work/poststeady`

**World: "The Press Room."** Poststeady turns chaotic analytics exports into a finished, printed report, so this page speaks the language of an editorial desk and a print run: assignment memos, proofs, fact-checking, "spiked" stories, the issue going to print. Device: **browser frames and printed pages** (the output is literally a PDF). Accent `#1A5BFA`. It's **our own product**: proof that we ship and run a real SaaS, never mobile proof.

**Status:** design file can be built now with dashed placeholder frames; **the page stays hidden on production until real screens exist** (demo account, made-up clients only; never the current landing-page images).

| Beat | Poststeady does |
|---|---|
| Hero card | **Proof sheet**: the card carries printer's **crop marks** at its four corners. Header "Proof · Case study 03". Fields: Type Our own product · Platform Web app · Industry Social media marketing · Service Product design, build and launch · Stack Next.js · Supabase · Gemini. Status set as a newspaper **dateline strip**: "LIVE · POSTSTEADY.COM" (links out) |
| Hero image | Placeholder until captured: finished report page 1 (made-up client) fanned over the upload screen |
| Marquee | The sources it reads: Meta ✱ Instagram ✱ TikTok ✱ LinkedIn ✱ Google Ads ✱ GA4 |
| 01 The brief | **Assignment memo**: TO / FROM / RE header. The story: freelancers send every client a monthly report · The problem: every platform exports its own file, with its own name for the same number · What ran: upload the exports, get a branded three-page report with a summary you can edit |
| 02 Centrepiece | **"175 ways to say 'Spend'"**: a column of real messy header names ("Amount Spent", "Cost", "Total Spend", …) collapsing into one clean metric, animated on scroll. **175 is the page's one big number.** Works without screenshots |
| 03 Pinned story | **"One report, start to finish"**: a pinned browser frame changes screen per step: Download the exports you already have → Upload (row counts, date range, platform detected) → Confirm the matched columns → Check or edit the numbers → The AI drafts the summary, you edit it → Send a branded PDF or a no-login link. Placeholder frames until the 6 screens are captured |
| 04 Hard parts | **Fact-check desk**: each item carries an editor's proof mark. "ASKED, NOT GUESSED": when a file could belong to two platforms, it asks · "FACTS ONLY": the AI quotes only real figures, never states a cause it can't know, and jumps over 300% are flagged before it sees them · "WHAT YOU SEE PRINTS": one design renders the screen, the share link and the PDF, so they can't drift apart |
| Mid CTA | Green dot band: **"Want a product built like this?"** |
| 05 Judgement | **Spiked**, the newsroom word for stories cut on purpose: **No social-account logins**: works for clients whose accounts can't be connected, and keeps working when platforms change their rules · **No YouTube auto-detection**: its export looks like Meta's, and a wrong guess would corrupt a client's report · **No scheduling or live dashboard**: scope stays on the report |
| 06 Result | Big: **11 WEEKS**, with a working first version at the end of week 1. Facts: live at poststeady.com, free plan and Pro · 221 automated tests |
| Under the hood | Diagram: browser (files read in the browser) → Next.js on Vercel → Supabase (row-level security on every table, file storage) → Gemini (summary) / headless Chrome prints the reviewed page → PDF / share link; payments via a signed webhook. Decisions: plan limits enforced in the database · one list of metrics everything reads from · client text treated as data, never instructions · pinned AI model (4/4 successes in 2.4s). Quality: 221 tests, two dated security audits |
| 07 Testimonial | "What freelancers say", placeholder, hidden until real user quotes exist |
| 08 Conclusion | **"What running our own product means for yours"**, set as the **back page**: i. We live with what we ship (payments, support, audits) · ii. We cut scope on purpose · iii. We guard accuracy before polish. Brand-promise line + two buttons |
| Next | **ChromaLayer** |

**Rules for this page:** no Poststeady prices (founder rule: no prices beyond /pricing's own). No user or revenue numbers until the founder shares them. Never "one developer". The Stripe → Dodo switch and past bugs stay out of the story.

**Assets needed:** upload step, column matching, metrics review, AI summary editor, finished report page 1 and 2, dashboard, share page. **Demo account, made-up clients only.**

---

## 5. ChromaLayer `/work/chromalayer`

**World: "The Colour Lab."** ChromaLayer is about what a screen shows, so this page is a display-calibration bench: test patterns, colour swatches, measurement rulers, lab notes, a monitor's on-screen readout. Device: **Windows app windows** plus a **real-hardware photo** (screen capture can't show the effect). Accent `#1c2450` (ChromaLayer Brand Navy; secondary `#8f9fe8`; no rainbow strips, founder 2026-09-29), with colour also from the **swatches themselves**, which are data (presets and test patterns), not decoration. It's **our own product** and proof of reliability engineering, **never** App Store or mobile proof.

**Status:** design file can be built now with placeholder frames; **page hidden on production** until real screens and the before/after photo exist.

| Beat | ChromaLayer does |
|---|---|
| Hero card | **Calibration target**: a colour-bar test-pattern strip runs along the card's top edge. Header "Test pattern · Case study 04". Fields: Type Our own product · Platform Windows 10 and 11 laptops · Industry Consumer software, display tools · Service Product design, build and release · Stack C# · .NET · WPF (no Timeline field: founder, 2026-09-29, only Assess Yourself shows one). Status as a monitor **on-screen display** readout: "● LIVE" in mono, like an OSD menu |
| Hero image | Placeholder until captured: the main window with the Vivid preset, over a real desktop |
| Marquee | The seven controls: Vibrancy ✱ Warmth ✱ Brightness ✱ Contrast ✱ Hue ✱ Black level ✱ White point |
| 01 The brief | **Calibration report**: a measurement sheet with ruled rows. Subject: Intel laptop screens · Observed: colours look washed out, and Intel's own settings reset on reboot · Fix: seven richer controls that stay applied after every restart, sleep and sign-in |
| 02 Centrepiece | **"Seven dials"**: a row of seven slider readouts with their real ranges (Vibrancy 0-200, Warmth 2700-10000 K, Brightness ±100, Contrast 0-200, Hue ±180°, Black level 0-30, White point 70-100) and the five presets as swatch chips (Natural, Vivid, Cinema, Gaming, Night). **Optional, founder to decide:** a small "drag to try" demo on a sample photo, clearly labelled "illustration in your browser; the app works system-wide" |
| 03 Pinned story | **"Sign in, and the fight for your screen"**: a horizontal time ruler from 0 to 25 s with the real recovery checkpoints (0, 0.25, 1, 2.5, 5, 10, 15, 20, 25 s). Pinned: a screen swatch that washes out, then snaps back, as you scroll. Steps: Sign in, colours applied → 15-25 s later Windows quietly resets them → the watchdog notices (every 0.5 s for the first 30 s, then every 5 s) → colours reapplied → they hold |
| 04 Hard parts | **Lab notes** (observation / fix / result): **Greys stay grey**: all seven controls combined into one colour matrix built so whites and greys never tint · **Restore always works**: getting the original screen back never depends on the licence, the network or a crash · **Never waits on the network at startup**: the window no longer waits on the licence check (it used to wait up to 10 s), and if the first colour apply fails it retries up to 5 times, 400 ms apart. Big number: **25 s**, the window after every sign-in, wake and display change that the app covers |
| Mid CTA | Green dot band: **"Want an app that just keeps working?"** |
| 05 Judgement | **No overlay or driver**: uses the same built-in mechanism as Windows' own colour filters, so no admin rights and protected video still plays · **No HDR, multiple monitors or ARM in v1** · **No "eye health" or "calibrated" claims**: it makes the screen look better and says only that |
| 06 Result | Big: **LIVE**, no build time. Facts: in-app updates through its own update feed · a 14-day trial and licensing built in · tests *(only after the suite is re-run on .NET 10)* |
| Under the hood | Diagram: tray app (WPF) → Application (profiles, licensing) → ColorEngine (7 controls → one 5×5 matrix) → Platform.Windows (Magnification API ← watchdog + event monitor) → screen; side: licence API, trial sync on Cloudflare Workers, updates via GitHub Releases + Velopack. Decisions: one matrix per change · colour maths with no Windows code, so it's testable and portable · device identity that survives a Windows reset · never block startup on the network |
| 07 Testimonial | Placeholder, hidden until real user feedback is approved |
| 08 Conclusion | **"Why a Windows app is on a mobile studio's site"**, set as the **lab's final result**: the hard part of any app is staying correct while the system works against it (Windows resetting colours here; background kills and OS updates on phones) · we test on real hardware · we ship updates safely. Brand-promise line + two buttons. Must not claim App Store experience |
| Next | **Assess Yourself** (wraps to the first project) |

**Rules for this page:** no price (even though it's our own product). Never mention the unsigned installer, the installer switches or two authors. Link the product page, never the installer download. "Live" matches Home and the brand brief (founder, 2026-09-29: ChromaLayer is live).

**Assets needed:** main window with Vivid selected, tray menu, onboarding, licence window (hide key and email), update dialog, and a **real-hardware before/after photo** of the same scene.

---

## 6. Build order

**Per page:** study the page's world → **static design file first** (`web/public/_design/<slug>.html`, gitignored, real screenshots and real copy, only the parts being designed) → founder approves at 1440px and 390px → port faithfully into `components/work/<slug>/` → check at both widths → founder review.

**Order:** EHS (all assets exist) → Poststeady → ChromaLayer (both need screenshots; their design files can go ahead with placeholder frames, pages hidden on production).

**Shared code (stays shared):** the hero (`CaseOpening`) with per-project `kicker`, `card` and `stamp`; `Reveal`; the green mid-page CTA band; the testimonial placeholder; the two-button conclusion; the next-project card. **Needs adding for EHS:** a hero status `variant` so the stamp can be a rotated stamp (Assess Yourself), a pulsing live badge (EHS), a dateline strip (Poststeady) or an OSD readout (ChromaLayer). Everything else below the hero is bespoke per page.

**Build notes:**
- Move approved mockups from repo-root `public/mockups/` into `web/public/work/<slug>/`, trimmed and resized with sharp.
- Every page follows the site's two background tones; the only full-bleed colour moments are the page's accent marquee and the green CTA band.
- Each page's copy goes in `docs/copy/case-studies/<slug>.md`, updated to match what's built.

---

## Open items

- **Assess Yourself:** Subject Details (`a2`) re-captured without the "Smoke B1…B4" test rows; a test-taking screen; a trial/plans screen; store link; student numbers; testimonial.
- **EHS:** a larger export of `ehs_hero` if it looks soft at 1440px; screens of the recordings library and engagement analytics; business results since the old platform; testimonial.
- **Poststeady:** all screens from a demo account (6 wizard steps, report pages 1-2, dashboard, share page); users or subscribers you're willing to share; testimonial.
- **ChromaLayer:** all screens and a real-hardware before/after photo; re-run the test suite on .NET 10. **Answered 2026-09-28:** product page is https://chromalayer.app/ (source for any ChromaLayer facts); **Corrected 2026-09-29 (founder): ChromaLayer is live**, so the status says Live, as the brand brief and Home already do (the "not on sale yet" note above was wrong); the "drag to try" demo exists on the landing page: reuse that code exactly.
- **EHS hero:** use the current 731px `ehs_hero.webp` for now; founder will upload a larger export later.

## Changelog

- v10 (2026-09-28): Poststeady built from its approved design (`web/public/_design/poststeady.html`) at `/work/poststeady`: proof-sheet hero (crop marks, dateline status; `stamp.variant: "dateline"`), assignment memo, "175 ways to say Spend", pinned wizard, fact-check desk, spiked scope cuts. All screens are placeholders, so `hiddenOnProduction` keeps the page off production and out of the EHS next-project link (`getVisibleCaseStudy`). Hero title parts can run together (`joined`). Result block centred against its facts.
- v9 (2026-09-28): Bespoke worlds planned for the other three pages (founder: case study pages shouldn't all be the same). EHS "The Session Console" (session pass + live badge, run sheet, four-audience laptops, pinned "When a class goes live", reliability log, 7.5×), hero now `ehs_hero.webp`. Poststeady "The Press Room" (proof sheet with crop marks, assignment memo, "175 ways to say Spend", pinned report wizard, fact-check desk, "spiked" scope cuts). ChromaLayer "The Colour Lab" (calibration target card, calibration report, seven dials, pinned 0-25 s recovery ruler, lab notes). Build order and open items rewritten; hero status gets a per-world variant.
- v8 (2026-09-28): Founder review fixes. Marquee reverted to the accent (indigo), not neutral. Exam day scrollspy rebuilt (was tracking only whichever step last fired in a narrow centre band, so a fast scroll skipped steps); now tracks every step still crossing the top half of the viewport and picks the lowest one, so nothing is missed. Question bank cards get a hover lift. Under the hood is open by default (still collapsible). The green CTA band is sized to its text (no forced viewport height) and carries a dot-pattern texture (the reference's own device, not a brand rule change: still no colour gradients).

- v7 (2026-09-28): Assess Yourself arrangement (founder asked me to decide): hero (split layout, facts card in the project's world, status stamp) → marquee (neutral) → 01-05 → full-bleed green CTA band "Want an app built like this?" (the page's one colour moment, right after the engineering proof) → 06 → 07 + under the hood → 08 testimonial (placeholder, hidden on production) → 09 conclusion "What this build says about yours" with two buttons (Book a Discovery Call, See pricing → /#pricing) → next project (light card, last). Separate final CTA dropped (the conclusion carries the call). Section bands use only the two site neutrals, alternating even when the testimonial is hidden. Blue closing band removed. Hero facts card and stamp are shared (content per project: `card`, `stamp`, `kicker`).
- v6 (2026-09-28): Per-project bespoke designs below a shared hero; design file first. Assess Yourself built from its approved design (exam-paper world). Old facts rail / challenge / built rows deleted. Section labels allowed; no glows; fully light (founder).
- v5 (2026-09-28): Beats 3-4 built for Assess Yourself. The challenge is centred (lead ~30ch at ~32px, rest ~52ch) rather than a left column, so it sits under its centred heading. What we built: 3 screen rows alternating sides (the columns flip with the screen); the cropped `exam-details` phone fades out at the bottom via a mask; rows fade up on scroll with CSS scroll-driven animation (no JS; static where unsupported or with reduced motion). Stack logos without a mark keep an icon-sized slot so labels align.
- v4 (2026-09-28): Screenshots are real data, not demo: "Shown with demo data" caption removed. Hero sits straight on the page, no tinted panel. Facts rail built (desktop only; hidden below 1024px, where the opening's list already shows every fact).
- v3 (2026-09-28): Real product name confirmed as **Assess Yourself** (not Access Yourself); renamed everywhere. Opening title is one line (founder's call). New global fields Industry and Service on every case study. Hero uses the product's own pre-composed promo render (`ay_hero.webp`) as a single image with a hover lift, instead of a custom 3-device composition, wherever such a render exists.
- v2 (2026-09-28): All mockup data confirmed demo. Assess Yourself row ② uses `a1` (bleed crop); `a2` Subject Details held until re-captured without the Smoke test rows. EHS personal-data hold removed.
- v1 (2026-09-28): First version. Layered depth (story + collapsible Under the hood), "What we chose not to build" section, no `/work` index, screens-led template locked on Assess Yourself. Merged an external art-direction pass: kept the editorial opening, sticky facts rail, alternating walkthrough, step diagrams, sparse decisions band, hierarchical result grid, page-turn next project and calm CTA; dropped the eyebrows, decorative numbering (giant 01/02/03, "DECISION 01", "01 / 04") and curved background geometry, which break the pinned rules and the craft floor. Title capped at 6rem instead of 96-120px.

**Timeline rule (founder, 2026-09-29):** no case study shows a build time or a Timeline field except Assess Yourself (3-4 weeks). Hero cards for the other three have five fields; the last spans the row. Result big numbers: EHS "Live since May 2026", Poststeady and ChromaLayer "Live".

**Lighter hero (founder picked option C, 2026-09-30, supersedes the six-fact card):** every hero card shows at most four facts (Client or Type, Platform, Stack, and Timeline only where a project states one), a status badge in the header, no kicker line, and a dashed "Industry and service: see the brief ↓" strip. Industry and Service now sit under the "01 · The brief" heading (`BriefFacts`). Assess Yourself's stamp became a header badge ("Delivered · launching soon"). The Poststeady brief keeps the founder's own "Timeline 11 weeks" edit (2026-09-30), so the earlier "only Assess Yourself shows a timeline" rule no longer holds.
