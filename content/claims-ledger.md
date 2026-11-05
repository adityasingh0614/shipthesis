# Ship Thesis Claims Ledger
Version: 2.3 · Verified for Automation Pipeline
Last Updated: November 5, 2026

The generator and blog automation system may state facts about Ship Thesis ONLY from this ledger. Every sentence about Ship Thesis, its process, stack, projects, or numbers MUST end with a tag matching an ID below, e.g. `{{c:BILL-1}}`. A tag is not proof: a tagged sentence may contain only facts that appear in the cited ledger entry (Rule 13). Any statement without a verified ID or any unverified claim outside this ledger is strictly blocked by `blog:lint`.

---

## 1. Services & Scope
* `[SVC-1]` **Core service**: Ship Thesis builds MVPs for founders: web applications, mobile apps, and SaaS platforms.
* `[AUD-1]` **Target Audience**: Early-stage founders who need a solid v1 built cleanly.
* `[SCOPE-1]` **Scope rule of thumb**: A first MVP is scoped down to about three core screens or workflows to test the primary value hypothesis before adding secondary features.

## 2. Process, Ownership & Milestones
* `[BILL-1]` **30% Kickoff Deposit**: Due prior to sprint scheduling, design system initialization, and repository setup. *(Terms §03)*
* `[BILL-2]` **40% Midpoint Milestone**: Invoiced upon delivery of the interactive mid-stage test build demonstrating core user authentication and primary feature flows. *(Terms §03)*
* `[BILL-3]` **30% Handover & Submission**: Invoiced upon submission to the Apple App Store / Google Play Console or production web release. *(Terms §03)*
* `[BILL-4]` **No Hourly Billing**: Ship Thesis does not bill by the hour. Billing is the 3:4:3 milestone split.
* `[BUILD-1]` **Weekly Friday Builds**: The founder gets a working build to test on their own phone or browser preview every Friday.
* `[OWN-1]` **Code Ownership from First Commit**: Code repository lives in the client's own GitHub account from the very first commit.
* `[OWN-2]` **Client Cloud Infrastructure**: Cloud hosting (Supabase, Firebase, Vercel) and API providers are billed directly to the client's corporate payment card. *(Terms §06)*
* `[OWN-3]` **Client Developer Consoles**: Client holds direct developer accounts with the Apple Developer Program and Google Play Console. *(Terms §06)*

## 3. Terms of Service & Legal Baseline
* `[TERMS-IP-1]` **Bespoke IP Assignment**: All bespoke deliverables created specifically for Client qualify as work made for hire or are assigned to Client worldwide, conditioned upon receipt of full payment for that specific milestone. *(Terms §02)*
* `[TERMS-IP-2]` **Payment Condition Precedent**: Full assignment of intellectual property rights for each respective milestone is strictly conditioned upon receipt of full payment of all fees due for that specific milestone. *(Terms §02)*
* `[TERMS-TERM-1]` **Termination Deliverables**: Upon termination, Client pays for all milestone work performed up to the termination date, and Ship Thesis promptly delivers all completed deliverables, source code, and credentials paid for. *(Terms §12)*
* `[TERMS-REV-1]` **Milestone Review Window**: Client has seven (7) business days following delivery of each milestone build to test and inspect the deliverable against written scope specifications. *(Terms §04)*

## 4. Technology Stack
* `[STACK-1]` **Frontend Web & SaaS**: Next.js (App Router), React, TypeScript, Tailwind CSS.
* `[STACK-2]` **Mobile Apps**: Flutter (Dart) for cross-platform iOS and Android with native performance and offline persistence.
* `[STACK-3]` **Backend, Auth & Database**: PostgreSQL, Supabase (with Row Level Security and Auth), Node.js / TypeScript.
* `[STACK-4]` **Payments & Integrations**: Stripe, Zoom API, REST / Webhooks with idempotent event handlers.

## 5. Current Offers & CTAs
* `[CTA-1]` **Primary Offer**: Free 20-minute assessment call (`https://cal.com/shipthesis/20min`) to review wireframes, architecture, and scope.
* `[CTA-2]` **Discovery Sprint**: Not offered on the site yet. No prices or paid discovery packages mentioned.

## 6. Verified Proof & Case Studies (One Fact Per Entry)
* `[AY-1]` **Assess Yourself App**: Mobile examination and test-taking app built with Flutter for Android and iOS. *(Note: Capability fact only. App is not live; no user counts, no live or launch claims).*
* `[AY-2]` **Assess Yourself Timed State**: Built so timed test state survives operating system kills, phone calls, and battery savers via a local SQLite state engine.
* `[AY-3]` **Assess Yourself Importer**: Built with an Excel question bank bulk importer with row-level error validation.
* `[EHS-1]` **EHS Platform**: Custom live training web platform built for EHS Guru, replacing a commercial LMS.
* `[EHS-2]` **EHS Zoom Integration**: 1-click Zoom meeting integration with automated attendee tracking.
* `[EHS-3]` **EHS RBAC**: Role-based access for Admins, Trainers, Learners, and Guests.
* `[POST-1]` **Poststeady**: Live in-house SaaS reporting tool that transforms raw CSV exports into branded client reports with automated written analysis at `poststeady.com`. Live in-house product, never client work; has no clients and no milestone payments.
* `[CHROMA-1]` **ChromaLayer**: Live in-house Windows desktop display utility with 7 screen color controls that persist through restarts, sleep cycles, and logouts at `chromalayer.app`. Live in-house product, never client work; has no clients and no milestone payments.

## 7. Strict Negatives (Hard Block Rules)
* ❌ NO pricing, price ranges, dollar signs (`$`), `USD`, `budget`, `cheap`, or `per hour` (except allowed statement in BILL-4).
* ❌ NO describing Assess Yourself with "live", "launched", "serves", "users", "students use", "in production", "battle-tested", or any user or student counts. Assess Yourself entries may ONLY describe what it is built to do (capability facts).
* ❌ NO adding testimonials to the ledger or pages until approved wording is explicitly provided by the founder. EHS Guru testimonial is pending and has none yet. Aptellic app is not live.
* ❌ NEVER describe Poststeady or ChromaLayer as client work — they are live in-house products.
* ❌ NO numeric week counts (e.g. `4 weeks`, `6-8 weeks`). Timelines must only be described generally as "in weeks".
* ❌ NO individual team member names. Everything is attributed to the brand "Ship Thesis" using first-person plural ("we", "our").
* ❌ NO claims of US client work.
* ❌ NO unapproved client names or logos.
* ❌ NO invented trends, statistics, student numbers, quotes, or unverified claims.
* ❌ NO derogatory phrases or jabs at other agencies (e.g. "agency bloat", "sales fronts", "predatory").
* ❌ NO inventing build narratives for in-house products (Poststeady, ChromaLayer have no clients and no milestone payments).
