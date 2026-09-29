# Assess Yourself

**Page accent:** `#283593` (darker shade `#1C2B7A`) (project colour; use it as this page's primary accent, buttons stay green). See `docs/design/home-brief.md` §2.

An exam-prep app that takes students from finding the right government exam to sitting a timed paper.

**Client: Aptellic · Mobile app · Flutter, Node.js/Express, Firebase · 3–4 weeks · Delivered to client, launching soon**

**Hero, as built (2026-09-28, v2 design):** kicker "Case study · Mobile app" · H1 ASSESS (accent) YOURSELF · line "An exam-prep app that takes students from finding the right government exam to sitting a timed paper." · admit card "Admit card · Case study 01": Client Aptellic / Platform Mobile app, Flutter / Industry Education, exam preparation / Service Mobile app design and development / Stack Flutter · Node.js · Firebase / Timeline 3-4 weeks · stamp "Delivered · Launching soon" · hero image `ay_hero.webp` with a hover lift.

## Below the hero, as built (2026-09-28)

Bespoke exam-paper world. Source of truth for layout: `web/public/_design/assess-yourself.html` (approved design) and `web/src/components/work/assess-yourself/`.

**Marquee (neutral band):** Exam discovery ✱ Timed tests ✱ Previous-year papers ✱ Live tests ✱ Instant analysis ✱ Excel question import ✱ 15-day free trial

**01 · The brief** — "One app from "which exam?" to exam day". Answer paper (header: Assess Yourself · Case paper / Client: Aptellic / Time allowed: 3-4 weeks):
- Q1. What did Aptellic need? One app where students preparing for UPSC, SSC and MPSC could find an exam, check its details and practise, instead of gathering it all from many different places.
- Q2. What made it hard? A large question bank lived in Excel files with two layouts, Marathi numerals and image-based answers. And a timed paper of 60+ questions couldn't be lost when the phone closed the app.
- Q3. What shipped? A Flutter app with exam discovery, a full test engine, instant analysis and a 15-day free trial, plus an upload that turns Excel files into ready-to-use tests.
- Scores: 3-4 weeks to deliver the app to Aptellic · 15 REST APIs behind the content and tests · 60+ questions in a single timed paper · 15 day free trial, then Razorpay plans

**02 · Exam discovery** — "Every government exam, one student corner". Students start from the exam, not a search bar. Central and state exams sit in one list, and each exam has its own page with the details, notices and study material they need before choosing a paper. Phones: Exam list (UPSC, SSC, RRB and IBPS in one place.) · Exam categories (Central, state and PSU, sorted the way students think.) · Exam details (Details, notices and study material before the paper.)

**03 · Exam day** — "A timed paper that survives the phone". Pinned analytics phone; steps A-F: Pick a paper · Start the clock · Mark for review · The app gets closed · Carry on · Instant analysis.

**04 · The question bank** — "Excel in, clean tests out". Excel files → Read both layouts → Check every row → Ready-to-use tests. Note: The content team uploads a file. Anything that needs fixing is flagged by row; every other question goes live. That's how new exams reach students from a single upload.

**05 · The hard parts** — "Three problems we had to get right" (marking scheme: question / the problem / what we did / why it matters to you): Tests that survive interruptions · Messy spreadsheets in · One source of truth for plans.

**Mid-page call (full-bleed green band, after 05):** "Want an app built like this?" / "Start with a 30-minute call about your idea." / Book a Discovery Call.

**06 · Judgement** — "What we chose not to build": Recurring auto-pay, held back · An importer that stops at row one.

**07 · Result** — 3-4 weeks to deliver the app to Aptellic. Content: New exams go live from a single Excel upload. Students: Exam discovery, timed tests and instant analysis in one app. Status: Delivered, launching on the Play Store soon.

**08 · Under the hood** (expandable) — Flutter app → 15 REST APIs → Express on Firebase Functions → Firestore; Excel importer, Razorpay payments, test state saved on the phone; 5 decisions.

**08 · In their words (placeholder, hidden on the live site):** "What Aptellic says". Video frame + quote placeholder + "Name Surname / Role · Aptellic". Replace with a real, approved quote before it can show.

**09 · Conclusion:** "What this build says about yours". Final answer: i. We plan for how people really use your app (Students close apps mid-exam, so the app saves every answer as they go.) · ii. We build around the data you already have (Aptellic kept its questions in Excel, so the upload reads their files instead of asking them to retype.) · iii. We don't build decisions you haven't made (Auto-pay was held back while the renewal model was still undecided.) · Summary: The same goes for your app: a fixed quote after a one-week Discovery Sprint, a new build on your phone every week, and code you own. · Buttons: Book a Discovery Call / See pricing →

**Next project (last):** EHS Training Platform (EHS Training in its green) · "A custom training platform for EHS Guru: live Zoom classes, automatic attendance and every class recorded." · See our work → (View case study once that page exists).

*The earlier facts rail, "The challenge" and "What we built" rows were replaced by this design on 2026-09-28.*
