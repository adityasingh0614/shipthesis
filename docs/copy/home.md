# Home copy `/`

**Version:** v24
**Last updated:** 2026-09-26
**Built from:** `docs/section-plan.md` (v19), `.agents/product-marketing.md` (v14)

Placeholders in `[BRACKETS]` must be filled or the element hidden before launch.

---

## 1. Hero — FINAL, locked 2026-09-26

Centred layout, built 2026-09-26. One large animation sits below the buttons; it is undecided and built last (placeholder for now, see `docs/design/home-brief.md` §1). The week-by-week stage and the video hero are dropped.

**Links:** Book a Discovery Call → `/contact` · See our work → `/work`

**Heading (H1):**
> FROM FIRST IDEA *(grey)* TO A LIVE PRODUCT.

**Subheading:**
> AI-powered mobile apps and SaaS for founders: a new build on your phone every week, and code you own.

**Primary button:** Book a Discovery Call
**Secondary link:** See our work →

*The "own products" line under the buttons is dropped from the hero; that point now lives under the work carousel in section 2 (see `docs/design/home-brief.md` §2).*

---

## 2. Our work — built 2026-09-26

**Heading:** WHAT WE'VE SHIPPED
**Subheading:** Apps we built for clients, and products we build and run ourselves. So we deal with the same releases, bugs, payments and support you will.

A scroll-driven carousel, one full card at a time. Each card: type tag, two-colour title (first part in the project colour, rest in ink), subheading, top six stack items (with logos; Simple Icons placeholders until the founder's logo files arrive), client · time · status, "Read the case study" link. Screens are placeholders until real demo-data screens arrive.

| Card | Colour | Tag | Subheading | Stack | Client · Time · Status | Link |
|---|---|---|---|---|---|---|
| Access Yourself | #283593 | Mobile app | A scalable ed-tech platform with a TypeScript/Express REST API and Flutter mobile app, featuring exam prep, live tests, subscriptions via Razorpay, and Firebase-backed auth. | Flutter, Node.js, Express, Firebase, Razorpay (pending: founder to supply final stack) | Client: Aptellic · 3-4 weeks · Delivered, launching soon | /work/access-yourself |
| EHS Training Platform | #00674C | Web platform | A dedicated, brand-first LMS built for live cohort-based learning. | Next.js, Supabase, Zoom API, TypeScript, Sentry, Tailwind CSS | Client: EHS Guru · Since May 2026 · Live, on our maintenance plan | /work/safety-training-platform |
| Poststeady Client Reporting Tool | #1A5BFA | SaaS | A client-reporting SaaS that turns messy CSV exports into a branded report, with the analysis written, not just charted. | Next.js, Supabase, TypeScript, Tailwind CSS, Dodo Payments, Puppeteer | Our own product · Built in 11 weeks · Live | /work/poststeady |
| ChromaLayer | #030d26 | Windows app | A native Windows utility for advanced, system-wide display color and temperature control. | C# / .NET / WPF, Magnification API, Velopack, Astro, Tailwind CSS, Dodo + Cloudflare Workers | Our own product · Live | /work/chromalayer |

*New own products are added as cards in this carousel, never as a separate section.*

---

## 3. How it works — built 2026-09-26

**Heading:** HOW IT WORKS
**Subheading:** From the first call to launch, with design, development and testing repeating every week until your app ships.

Six step cards, three per row. Each: a visual (placeholder for now), a STEP 01-06 badge, the step name, one line on what you get, and its timing. Design, Development and Testing also show "Every week". Link at the end: "What each stage includes" to /services.

| Step | When | What you get |
|---|---|---|
| Discovery call | Day 1, 30 minutes | A straight answer on fit, plus a Discovery Sprint: a written scope, wireframes and a fixed quote with timeline and milestones. |
| Design | Before each screen is built | Designs for your app's screens, which you see and approve before we build them. |
| Development | Weeks 2 onward | A new build on your phone every week, against the milestones in your quote. |
| Testing | Every week, and before submission | Each weekly build is tested before it reaches your phone, and the whole app is checked end to end before store submission. |
| Store submission | End of build | We handle App Store and Play Store submission and review. |
| Launch | Launch day | Your app, live, on accounts in your name. |

---

## 4. What we build — built 2026-09-26

**Heading:** WHAT WE BUILD
**Subheading:** Everything your product needs to go live, from the app in the store to the systems behind it, built by one team.

Five cards (three on the first row, two wider below), each with a visual (placeholder for now), the service name and one line. Each line answers the founder's question for that service; facts from `.agents/product-marketing.md`.

| Service | Line |
|---|---|
| Cross-platform apps | Built once in Flutter, live on both the App Store and Play Store. Our default for most MVPs. |
| Native iOS & Android | When your app needs everything the phone can do, we build it natively in Swift and Kotlin. |
| Custom solutions | Bespoke products tailored to your unique business needs and goals. |
| AI features | AI added where it makes the product better: summaries, chat, automation and more. Not as a gimmick. |
| SaaS apps & platforms | Customer-facing web apps with accounts, billing, dashboards and the systems behind them. It's the kind of product we build and run ourselves. |

**Link:** See how each one works → /services

---

## 6. Testimonial

One quote with name, role and project: `[TESTIMONIAL TBD]`. None on record, so the section is hidden on the live site until a real, approved quote exists. Never write sample quotes that look real.

---

## 8. Final CTA

**Heading:** Tell us what you want to build

**Body:**
> Book a call and bring the idea as it is. We'll talk it through and tell you honestly if we're the right fit. If we are, the next step is a one-week Discovery Sprint for $750, credited toward your build if you continue. It ends with a fixed quote.

**Button:** Book a Discovery Call
**Links:** How the Discovery Sprint works → · See pricing → *(/pricing)*

---

## Meta

- **Page title:** Mobile App Development for Startups | Ship Thesis
- **Meta description:** We build mobile apps for founders, from first scope to the App Store and Play Store. A working build every week. A fixed quote after a paid Discovery Sprint.

---

## Changelog

- v24 (2026-09-26): Card copy is the founder's own; Backend & admin panel renamed Custom solutions, SaaS renamed SaaS apps & platforms.
- v23 (2026-09-26): Backend restored as a fifth card (3+2 grid), copy rewritten so it doesn't read as a separate service.
- v22 (2026-09-26): Backend moved from a card to an "included with every app" bar so it doesn't read as a separate service.
- v21 (2026-09-26): What we build copy rewritten with the copywriting skill; Poststeady proof tag removed from the AI card.
- v20 (2026-09-26): What we build rewritten to match the build; sections renumbered to match `docs/design/home-brief.md`. Section 6 Testimonial restored from `docs/section-plan.md` after an editing slip removed it.
- v11 (2026-09-26): Hero locked to the final AI-powered headline and subheading, centred layout, real-app video hero. Week-by-week hero stage removed. Sections 2 onward still reflect the pre-reset design (see `docs/design/home-brief.md` v4 for the current plan) and will be rewritten section by section as we rebuild the page.
- v10 (2026-09-25): Client work link reads "See our work →", the same label as the hero link (one label per intent).
- v9 (2026-09-25): New hero — one heading, one subheading, no eyebrow. The primary keyword moved into the subheading. Access Yourself card names the client, Aptellic.
- v8 (2026-09-25): Added the hero stage copy: heading, four checkpoint captions and the demo-data caption.
- v7 (2026-09-25): Page title uses the final studio name, Ship Thesis.
- v6 (2026-09-25): Removed "Try Poststeady" from the Poststeady card; it now appears only on the Poststeady case study.
- v5 (2026-09-25): Polish: cut the "not a status report" contrast in How it works; shortened the final CTA's last sentence.
- v4 (2026-09-25): Final CTA links to /pricing.
- v3 (2026-09-25): Final CTA shows the Discovery Sprint price: one week, $750, credited toward the build.
- v2 (2026-09-25): Safety training card matches Work: names EHS Guru, "Since May 2026", status "Live · on our maintenance plan". Removed "live in about 2 months".
- v1 (2026-09-24): First saved version. Hero option A, with the headline as the H1 and the eyebrow as small text. "Build, launch and run". New client-work intro line. Client work has two cards: Access Yourself and the Safety training platform. Removed the unnamed compliance-platform line. ChromaLayer appears once, in section 3, with the fixed line.
