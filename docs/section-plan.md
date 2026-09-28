# Section Plan

**Version:** v19
**Last updated:** 2026-09-25
**Built from:** `.agents/product-marketing.md` (v12), `docs/sitemap.md` (v7), `docs/competitors/summary.md`

Structure only. Content notes are directions, not final copy. Write copy in the brand voice: plain, specific, calm, no exclamation marks, nothing from the words-to-avoid list.

---

## Rules that apply to every page

**One CTA, one wording.** Use **Book a Discovery Call** everywhere: header, page ends, case studies. (Gap 6.)

**Placeholders.** Never ship a page with a placeholder showing. If a value isn't ready at launch, hide the element instead.

| Placeholder | Meaning |
|---|---|
| `[TESTIMONIAL TBD]` | Real client quote. Never invented |
| `[METRIC TBD]` | A real number we don't have on record yet |
| `[TBD]` | A fact missing from the brand brief |

**Founder fears: each answered once.** Each fear gets a full answer on one page. Other pages may link to that answer but don't repeat it.

| Fear | Answered on | Section |
|---|---|---|
| Can a small studio handle it | Home | 3. We ship our own products |
| Being ghosted / will they finish | Home | 4. How it works |
| Price creep | Pricing | 5. How your price stays fixed (Services gets one line in MVP Build, linking there) |
| Code ownership | Services | 7. FAQ |
| Post-launch | Services | 5. Ship & Support |

**Own products aren't mobile apps.** Poststeady is a web SaaS and ChromaLayer is a Windows desktop app. Use them as proof that we **ship and run real products as founders**, never as proof of mobile work. Mobile proof comes from Assess Yourself, our Flutter case study.

**ChromaLayer: one line only.** No card, no case study page. It appears once, in Home section 3: "We also built ChromaLayer, a Windows app that keeps laptop screen colors right after every restart, sleep and update." Link to the ChromaLayer product page, never the installer download.

**Safety training platform: the client is EHS Guru, and can be named.** Their previous platform stays unnamed ("an off-the-shelf learning platform").

**Case study order everywhere:** Assess Yourself, Safety training platform, Poststeady. No other projects appear on the site.

---

## Home `/`

**Primary keyword:** mobile app development for startups

### 1. Hero
- **Purpose:** Within 5 seconds, the visitor knows we take founders from idea to a live app in the App Store and Play Store, and that we ship our own products too.
- **Content:**
  - One heading (H1) and one subheading only — no separate eyebrow line. The primary keyword goes in the subheading, not a standalone eyebrow.
  - Under the CTA, an own-products line naming Poststeady, as a live link. ChromaLayer is left to section 3.
  - Primary CTA: Book a Discovery Call. Secondary text link: See our work.
  - Hero stage below the buttons: "How your app comes together, week by week." Four checkpoints (Week 1, Week 3, Week 6, Launch) describe our process, using Assess Yourself screens with demo data, captioned as such. "Ready for launch" with no store badges until the app is live. Spec in `docs/design/DESIGN.md`.
- **Proof:** Poststeady live link.
- **Differentiation:** Gap 2 (own live products) above the fold. Gap 6 (one CTA).

### 2. Client work
- **Purpose:** The visitor sees we build real products for real clients, including mobile.
- **Content:**
  - Two cards: Assess Yourself and the Safety training platform. Each has: problem (one line), outcome (one line), platform, stack, status, and a link to the case study.
  - Link to /work.
- **Proof:**
  - Assess Yourself: Flutter + Node/Express on Firebase. Delivered to client · launching soon. 3–4 weeks.
  - Safety training platform: EHS Guru. Next.js + Supabase web platform. Live since May 2026.
- **Differentiation:** Gap 7 (shipped work only). Gap 1 (outcome on the card).

### 3. We ship our own products
- **Purpose:** The visitor believes a small studio can deliver, because we already run live products. *(Answers: can a small studio handle it.)*
- **Content:**
  - One Poststeady card: what it is (one line), who it's for, stack, a "Live" badge, and a link to the case study. No "Try Poststeady" link on Home; it appears only on the Poststeady case study.
  - ChromaLayer as the single fixed line under the card (see rules above), linking to its product page. No card, no case study link.
  - One line on why it matters to a founder: we handle the same releases, payments, licensing and support they will.
  - Don't call either of them mobile apps.
- **Proof:** Poststeady (Next.js / Supabase SaaS, live). ChromaLayer (.NET/WPF desktop app, in beta; never call it live). Usage numbers `[METRIC TBD]`. Leave them out rather than guess.
- **Differentiation:** Gap 2. No competitor has this.

### 4. How it works
- **Purpose:** The visitor understands the path and believes we won't disappear, because they'll see progress every week. *(Answers: being ghosted / will they finish.)*
- **Content:**
  - Three steps: Discovery Sprint → MVP Build → Ship & Support, one line each.
  - The weekly commitment stated plainly: a working build on your phone every week, against fixed milestones.
  - Link to /services. Don't explain pricing or ownership here.
- **Proof:** A process commitment. There's no project evidence of weekly builds on record. If a case study can show a build log or build count, link it here.
- **Differentiation:** Gap 3 (weekly builds; Apps Value builds every two weeks). Gap 5 is named here and explained on Services.

### 5. What we build
- **Purpose:** The visitor sees in one glance that we build the whole product (app, backend and web), not just screens.
- **Content:** Four items. Each has a technical title and one plain-language line. The whole section links to /services, where the same four are covered in more detail.
  1. **Cross-platform apps.** One codebase for iOS and Android, built in Flutter.
  2. **Native iOS & Android.** Swift and Kotlin, for apps that need full device power or performance.
  3. **Custom backend & APIs.** Logins, payments, subscriptions, notifications, and the admin dashboard you run your business from.
  4. **SaaS platforms.** The web product that works alongside your app: accounts, subscriptions, dashboards.
- **Proof:** Kept light here. Item 4 names Poststeady. Detailed proof for each item is on Services.
- **Differentiation:** Brand brief differentiator "production systems, not demos". Keep item 4 framed as *alongside the app*. Per the brief, web and SaaS are part of shipping the full product, not a separate service.

### 6. Testimonial
- **Purpose:** Proof from a third party.
- **Content:** One quote with name, role and project. **`[TESTIMONIAL TBD]`**. Hide the section if we have none at launch.
- **Proof:** None on record.
- **Differentiation:** None. Closes a gap where every competitor beats us.

### 7. Final CTA
- **Purpose:** The visitor knows the first step is small and priced, not a large upfront commitment.
- **Content:**
  - Book a Discovery Call. Show the Discovery Sprint as the next step: one week, $750, credited toward the build.
  - One line on what happens after booking: a call, then the sprint.
  - Link to /services for detail and to /pricing. **No "MVP from" price here.**
- **Proof:** The price itself, once set.
- **Differentiation:** Gap 5 (paid discovery as the entry point). Gap 6.

**Not on Home:** stats (none exist), stack detail beyond the section 5 titles (Services), "what we won't do" (About), "MVP from" price (Pricing, Services FAQ).

---

## Work `/work`

**Primary keyword:** none (no clean seed match)

### 1. Intro
- **Purpose:** The visitor knows every project here is real work for real clients, or our own products.
- **Content:**
  - A short H1 and one line. No filter (three projects don't need one).
- **Proof:** None needed.
- **Differentiation:** Gap 7 (shipped only, no "Coming Soon").

### 2. Project grid
- **Purpose:** The visitor can compare projects quickly and pick one to read.
- **Content:**
  - 3 cards, in this order: Assess Yourself, Safety training platform, Poststeady.
  - Every card shows the same fields: type (client / own product), platform, stack, timeline, status, one-line outcome, and a link to the case study.
  - Not listed: ChromaLayer (one-line mention on Home only).
- **Proof:** Each card's outcome line comes from its case study. `[METRIC TBD]` where missing. If no real number exists, use a factual line instead (e.g. "Live on Play Store").
- **Differentiation:** Gap 1 (outcome visible before clicking). The competitors' listings show only a title and thumbnail.

### 3. CTA
- **Purpose:** Next step for a visitor who's convinced.
- **Content:** Book a Discovery Call. One line only.
- **Proof / Differentiation:** Gap 6.

---

## Case study pages `/work/{slug}`

> **Superseded 2026-09-28** by `docs/design/case-study-brief.md` (four case studies incl. ChromaLayer, layered depth, no /work index). Kept for history.

All three (Assess Yourself, Safety training platform, Poststeady) follow the brand brief's case study structure, in this order. Copy lives in `docs/copy/case-studies/[slug].md`. About 300 words each, written for a non-technical founder.

**Shared template**

| # | Section | Purpose | Content |
|---|---|---|---|
| 1 | Header | The visitor knows what it is and who it was for at a glance | Name, one line, then tags: [Client or Own product] · [Platform] · [Stack] · [Timeline] · [Status]. Live/store link with the status |
| 2 | The challenge | The visitor recognises a real problem | 2–3 sentences |
| 3 | What we built | The visitor knows the scope | 4–5 short items. Only what we built, not the client's full product vision |
| 4 | The hard part we solved | The visitor sees judgement, not just output | 2–3 highlights, 1–2 sentences each, framed as wins |
| 5 | Result | The visitor sees a real result | Confirmed facts only, otherwise `[RESULT TBD]`. Never estimate |
| 6 | Screens | The visitor sees the product | 3–4 screenshots, from demo data only |
| 7 | CTA + back link | Next step | Book a Discovery Call. Back to /work. Link to one other case study |

**Rules (all case studies):** nothing negative (no security gaps, test gaps, hosting limits, bugs framed as failures, unresolved decisions, or "one developer"). Never invent metrics, user numbers or outcomes. No technical appendix.

**Differentiation (all case studies):** Gap 1 (challenge, result and timeline on every page, which only Apps Value's best case study matches). Gap 7.
**Fears:** none answered here. Case studies are evidence; they link to Services for terms.

### `/work/assess-yourself` (lead)
- **Known:** client is Aptellic (confirmed, can be named). Flutter app + Node/Express on Firebase. 3–4 weeks. Delivered to client · launching soon. Confirmed result: new exams go live from a single Excel upload.
- **Needed before launch:** student/question numbers `[METRIC TBD]`, store link once live `[TBD]`, testimonial `[TESTIMONIAL TBD]`.
- **Note:** carries mobile proof on Home, and is the Flutter proof for Services "What we build", item 1.

### `/work/safety-training-platform`
- **Known:** client project for EHS Guru (can be named). Next.js + Supabase web platform. Live since May 2026. On our monthly maintenance plan since launch.
- **Rule:** keep their previous platform unnamed.
- **Needed before launch:** outcome `[RESULT TBD]`, screenshots from demo data.

### `/work/poststeady` (full case study)
- **Known:** own product, live, SaaS, Next.js / Supabase.
- **Needed before launch:** users or revenue `[RESULT TBD]`.
- **Screens:** from a demo account with made-up data only. The current landing-page images show real client data. Never reuse them.
- **CTA:** Book a Discovery Call is the button. Try Poststeady is a text link beside it (one CTA, one wording).

*ChromaLayer has no case study page. It's a one-line mention on Home section 3.*

---

## Services `/services`

**Primary keyword:** MVP app development. **Secondary:** Flutter app development.

### 1. Intro
- **Purpose:** The visitor sees the whole engagement at a glance and that it's built for founders.
- **Content:**
  - H1 with the primary keyword.
  - The three stages as a simple row: Discovery Sprint → MVP Build → Ship & Support.
  - One line: founders only, mobile first.
- **Proof:** None needed.
- **Differentiation:** None on its own.

### 2. Discovery Sprint
- **Purpose:** The visitor understands the fixed quote comes *from* this sprint. The full price-creep answer is on /pricing.
- **Content:**
  - What the sprint is.
  - Duration: 1 week.
  - Price: $750, credited toward the build if they continue (a standard term, not a discount).
  - Deliverables: a written scope, a feature list split into "version one" and "later", user flows or wireframes, a stack plan, and a fixed quote with timeline and milestones.
  - How the fixed quote is produced from it.
  - If they don't continue: they keep everything from the sprint.
  - Lead with **how the number is made**, not the word "fixed".
  - Link to /pricing.
- **Proof:** Brand brief: fixed quotes after a paid Discovery Sprint.
- **Differentiation:** Gap 5. Synergy quotes after a 1–2 day proposal; Apps Value's scoping may not be paid or binding.

### 3. MVP Build
- **Purpose:** The visitor knows what a build includes, how it runs, and what we build with.
- **Content:**
  - Fixed scope and timeline from the sprint. From $6,000, typically 6–10 weeks.
  - One line on price creep (fixed quote, three payments, a clear rule for changes) linking to /pricing. Payment and scope-change detail lives on /pricing.
  - Weekly build as the delivery format. State it as a mechanic; the trust argument is on Home.
  - What gets built is covered in section 4. Don't list the stack here.
- **Proof:** Case studies.
- **Differentiation:** Gap 3 (weekly cadence).

### 4. What we build
- **Purpose:** The visitor knows exactly what we can build, with what, and has proof for each. This mirrors Home section 5, with more detail.
- **Content:** The same four items and titles as Home. Each gets a short block: what it is, when a founder needs it, the stack, and the proof link.
  1. **Cross-platform apps**
     - What: one Flutter codebase for iOS and Android. Our default.
     - When: most MVPs. One codebase for both stores keeps the build faster and cheaper.
     - Secondary keyword "Flutter app development" is this block's subheading.
     - Proof: Assess Yourself (Flutter).
  2. **Native iOS & Android**
     - What: Swift (iOS) and Kotlin (Android).
     - When: the app needs full device access or performance that cross-platform can't give.
     - Also say when we *don't* recommend native. This fits the brief's "say what we won't do".
     - Stack confirmed in brief v3: Swift (iOS), Kotlin (Android).
     - Proof: no native project on record yet. Don't name one.
  3. **Custom backend & APIs**
     - What: logins, payments, subscriptions, notifications, and the admin dashboard the founder runs the business from.
     - Stack: Node.js, Next.js / React, Firebase, Supabase, AWS. Growth path: "We start on Firebase or Supabase so your MVP launches fast and cheap. If your usage outgrows it, we can move you to AWS and manage the hosting for you."
     - Also list these as general capabilities, with no project named: location-based features, realtime chat that works on poor networks, automatic image moderation.
     - Proof: Assess Yourself (Node/Express on Firebase, trials and payments). EHS Guru's training platform (Zoom classes, attendance, recordings). Poststeady's backend (Supabase).
  4. **SaaS platforms**
     - What: the web product that works alongside the app: accounts, subscriptions, dashboards.
     - Frame it as part of shipping the full product, not a standalone offer (brief v3).
     - Stack: Next.js / Supabase.
     - Proof: Poststeady (live, our own product). Link to its case study.
- **Proof:** As listed per item.
- **Differentiation:** Brand brief differentiator "production systems, not demos". Gap 2 (Poststeady as live proof for item 4).

### 5. Ship & Support
- **Purpose:** The visitor knows exactly what happens after launch and what it costs. *(Answers: post-launch.)*
- **Content:**
  - Warranty: 30 days of free fixes for in-scope bugs after launch.
  - The three plan names (App Care, Product Care, Full Care) with one line each on what they cover. No plan prices.
  - Requests through a shared Slack channel or email. Response within 1 business day; critical issues the same day.
  - Never mention what any existing client pays. No discounts or "founding client" offers.
  - Close with "Support plans from $300/month. See full pricing →", linking to /pricing. Hours, extra work and plan prices live on /pricing.
- **Proof:** One line: "EHS Guru has been on our maintenance plan since launch." Link to /work/safety-training-platform.
- **Differentiation:** Must be at least as concrete as Synergy's 4 weeks free and Apps Value's in-scope warranty (summary, "Where they beat us").

### 6. Proof strip
- **Purpose:** Connect the offer to shipped work.
- **Content:** 2 case study cards linking to /work: Assess Yourself (mobile) and Poststeady.
- **Proof:** Case studies.
- **Differentiation:** Gap 2, Gap 7.

### 7. FAQ
- **Purpose:** Answer cost, timeline and ownership questions directly.
- **Content:**
  - **What does it cost?** Use the exact numbers: MVP from $6,000, Discovery Sprint $750 (credited toward the build), the fixed quote after the sprint, support plans from $300/month. Payment split stays on /pricing. Link there.
  - **How long does it take to build an app?** Sprint: 1 week. Typical MVP: 6–10 weeks. What makes it longer.
  - **Do I own the code?** *(Answers: code ownership.)* Yes: code in your GitHub, store and cloud accounts in your name, from day one. State it as the baseline, not a headline, because Apps Value promises the same.
  - **Why Flutter?** Cross-platform by default; native Swift or Kotlin when an app needs it. Secondary keyword.
  - **What happens after launch?** Short answer (30-day warranty, plans from $300/month) that points to section 5.
  - **Can we work across time zones?** Based in India, working with US and Europe founders. Calls booked in the founder's working hours; Slack or email with a one-business-day reply.
- **Proof:** Brand brief objections table.
- **Differentiation:** "MVP from" price closes the gap with Apps Value's public floor. The timeline answer is honest where Synergy's is inconsistent.

### 8. CTA
- **Purpose:** Next step.
- **Content:** Book a Discovery Call. One line on what happens next.
- **Differentiation:** Gap 6.

---

## Pricing `/pricing`

**Primary keyword:** cost to build an app / MVP

**Rules:** every final price from the brief's Pricing section. Never mention what any existing client pays. No discounts, and no founding-client offer (that's for calls only).

### 1. Intro
- **Purpose:** The visitor knows every price is here and the build price is a fixed quote from a written scope.
- **Content:** H1 with the primary keyword. One supporting line. Button: Book a Discovery Call.

### 2. Prices at a glance
- **Purpose:** All four numbers in one look.
- **Content:** Table: Discovery Sprint $750 / 1 week / credited toward the build; MVP Build from $6,000 / typically 6–10 weeks; 30 days of free fixes after launch; support plans from $300/month.

### 3. Discovery Sprint
- **Content:** Deliverables, the $750 credit toward the build, and that the founder keeps everything if they don't continue. Link to /services for what happens in the sprint.

### 4. MVP Build
- **Content:** From $6,000, typically 6–10 weeks, what moves the price. One concrete example of what an MVP from $6,000 includes (approved wording in the brief's Pricing section). Link to /services "What we build".

### 5. How your price stays fixed
- **Purpose:** The visitor stops worrying about price creep. *(Answers: price creep.)*
- **Content:** The quote comes from the written scope. Payments 30% at start, 40% at the mid-build milestone, 30% at store submission. Scope changes: small tweaks absorbed; bigger additions quoted before work starts, or swapped for something of equal size.
- **Differentiation:** Gap 5 (the number comes from paid discovery).

### 6. After launch
- **Content:** 30-day warranty. Support plans table: App Care (from $300), Product Care (from $550), Full Care (from $900), with contents from the brief. Unused hours don't roll over; new features quoted; extra work quoted or move up a plan. Slack or email; 1 business day, critical same day. Link to /services Ship & Support.

### 7. FAQ
- **Purpose:** Direct answers for search and AI snippets. First sentence of each answer stands on its own.
- **Content:** How much does it cost to build an app? · How do payments work? · What if I want to change something mid-build? · What if I don't continue after the Discovery Sprint? · What does support cost after launch? Only facts already on the page.

### 8. CTA
- **Purpose:** The next step is the $750 Discovery Sprint, credited toward the build.
- **Content:** Heading about the sprint. Button wording stays **Book a Discovery Call** (one CTA, one wording).
- **Differentiation:** Gap 5, Gap 6. Closes the public-price-floor gap with Apps Value.

---

## About `/about`

**Primary keyword:** app development for founders

### 1. Intro
- **Purpose:** The visitor knows we're founders who build for founders.
- **Content:**
  - H1 with the primary keyword.
  - 2–3 lines on who we are and why the studio exists.
  - Founder block, required: name, photo and one line on role `[TBD]`. No team page, no headcount.
  - One line, exactly: "Before the studio, our founder built a location-based social app for pet owners as a solo developer." No app name, link or screenshots.
- **Proof:** Our own products (linked, not re-argued; Home answers the small-studio fear).
- **Differentiation:** Founder proof, not borrowed founder identity (the Synergy overlap).

### 2. Why we build our own products
- **Purpose:** The visitor understands *how* running our own products makes client work better. This is about perspective, not capability.
- **Content:**
  - What we've learned by running Poststeady: releases, support, and paying for our own mistakes. ChromaLayer stays off About.
  - How that changes the way we scope and build for clients.
  - Link to the Poststeady case study.
- **Proof:** Poststeady.
- **Differentiation:** Gap 2. Also the brief's "why that's better".

### 3. What goes wrong in app builds
- **Purpose:** The visitor sees we're honest about risk and know where builds fail.
- **Content:**
  - 3–4 common failure points: scope drift, store rejection, unmaintainable handover, missed deadlines.
  - For each, what we do about it.
  - Plain and specific, as in the brief ("says the hard things").
- **Proof:** Real examples from our projects `[TBD]`. Use only real ones.
- **Differentiation:** Uncovered gap: nobody explains what typically goes wrong.

### 4. What we won't do
- **Purpose:** The visitor can tell quickly whether they're a fit, and trusts us more because we turn work down.
- **Content:** Anti-persona from the brief:
  - no equity-only deals;
  - no budgets far below a real build;
  - we need one decision-maker;
  - no fixed deadline without willingness to cut scope.
- **Proof:** Brand brief anti-persona.
- **Differentiation:** Gap 4. No competitor does this.

### 5. CTA
- **Purpose:** Next step for a visitor who fits.
- **Content:** Book a Discovery Call.
- **Differentiation:** Gap 6.

---

## Contact `/contact`

**Primary keyword:** hire a mobile app developer

### 1. Intro
- **Purpose:** The visitor knows what the call is for and that it commits them to nothing.
- **Content:**
  - H1: "Start your app with one call." The primary keyword goes in the page title and meta description only.
  - What we cover on the call: the idea, fit, and how the Discovery Sprint works.
  - Call length: 30 minutes.
  - What to bring, beside the booking embed.
- **Proof:** None needed.
- **Differentiation:** None.

### 2. Booking
- **Purpose:** Booking takes as little effort as possible.
- **Content:**
  - Cal.com booking embed, no form. Booking questions: name, email, the idea in a few lines, any deadline (optional), budget range (optional).
  - Budget ranges: Under $5k · $5–10k · $10–25k · $25k+. They help filter the anti-persona early.
  - Privacy link beside the embed, because the booking collects personal data.
- **Proof:** None needed.
- **Differentiation:** Gap 6.

### 3. What happens next
- **Purpose:** The visitor knows the steps after booking.
- **Content:**
  - Steps: book a time → 30-minute call → Discovery Sprint proposal within 2 business days → sprint → fixed quote.
  - Link to /pricing for prices and terms. Don't repeat them here.
- **Proof:** None needed.
- **Differentiation:** Gap 5 (the path runs through paid discovery).

### 4. Direct contact
- **Purpose:** A route for anyone who won't book a call.
- **Content:** "Not ready for a call? Email us at hello@shipthesis.com."

---

## Open items before copy

1. **Metrics.** Any real numbers for the three case studies.
2. **Testimonials.** Any real quotes, with permission to publish.
3. **ChromaLayer product page URL.**

## Changelog

- v19 (2026-09-25): Assess Yourself's client (Aptellic) and the Excel-upload result are confirmed. Home hero is one heading + one subheading, no eyebrow.
- v18 (2026-09-25): Home hero gets the week-by-week stage.
- v17 (2026-09-25): Studio name final: Ship Thesis. Contact email is hello@shipthesis.com; name item removed from open items.
- v16 (2026-09-25): Time-zone FAQ answer set; overlap-hours open item removed.
- v15 (2026-09-25): Services Ship & Support shows plan names without prices and links to /pricing. "Try Poststeady" removed from Home; it stays only on the Poststeady case study.
- v14 (2026-09-25): Pricing gets a 5-question FAQ (CTA is now §8). Services FAQ cost answer keeps prices, drops the payment split. Every answer leads with a standalone first sentence. Poststeady case study CTA per v13. Schema plan in `docs/schema-plan.md`.
- v13 (2026-09-25): Poststeady case study keeps Book a Discovery Call as its only button; Try Poststeady becomes a text link.
- v12 (2026-09-25): AWS wording matches Services and brief v11.
- v11 (2026-09-25): Pricing example approved. AWS framed as cloud hosting we set up and manage.
- v10 (2026-09-25): Added the /pricing page plan. Price creep is now answered on /pricing; Services keeps one linking line. Services stages, FAQ, Home final CTA and Contact link to /pricing.
- v9 (2026-09-25): ChromaLayer marked in beta in Home section 3 notes. Secondary keyword is "Flutter app development", matching the approved copy. Studio name shown as [STUDIO NAME].
- v8 (2026-09-25): Services notes carry the final pricing from brief v7 (sprint, MVP, payments, scope changes, warranty, support plans, response times). FAQ notes add after-launch and time zones. Backend stack keeps AWS as the growth path. Removed the resolved price placeholders.
- v7 (2026-09-24): Work: filter removed. Contact: H1 without keyword, Cal.com embed replaces the form, budget ranges set, 30-minute call, proposal within 2 business days, email as fallback.
- v6 (2026-09-24): About founder block is required (name, photo, role line). ChromaLayer removed from About.
- v5 (2026-09-24): EHS Guru can now be named as the Safety training platform client. Ship & Support gets the EHS Guru maintenance proof line. Case study template replaced with the short format (header, challenge, what we built, hard part, result, screens). Poststeady screens must come from a demo account.
- v4 (2026-09-24): Final project list. Case studies are Assess Yourself (lead, Flutter), Safety training platform (client unnamed, replaces EHS LMS) and Poststeady, in that order everywhere. Removed Pawgloo, the unnamed compliance platform line and all "multi-tenant" wording. ChromaLayer fixed to one line in Home section 3. Services gets three general capabilities; About gets the founder's pet-app line. Closed open items on stacks and descriptions.
- v3 (2026-09-24): CTA is "Book a Discovery Call" everywhere. Case studies are now Assess Yourself and Pawgloo (lead, mobile), EHS LMS (replaces Train Platform), and Poststeady (full). ChromaLayer reduced to one line on Home, and its case study page is removed. EHS Guru confirmed as not a case study. Swift confirmed (brief v3). Resolved the old open items on CTA wording, mobile proof and Swift.
- v2 (2026-09-24): Added "What we build" (4 items) as Home section 5 and Services section 4. Moved stack detail out of Services MVP Build. Renumbered later sections. Flagged Swift/native iOS and Flutter proof as open items.
- v1 (2026-09-23): Initial section plan for all 9 pages. Home order: client work before own products. Sprint price on Home final CTA. Unnamed compliance platform on Home client work.
