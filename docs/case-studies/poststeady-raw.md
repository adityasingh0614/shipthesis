# Poststeady Reports: Case Study Raw Material

Generated 2026-09-24 from the `poststeady-app` repo (branch `dev`, HEAD `024c6e2`). Read-only analysis. Every point is tagged `[EVIDENCE: path]` or `[INFERRED]`.

**Reader:** a non-technical founder deciding whether to hire us. Sections 1–13 are plain language. Deep detail lives in §14, the Technical appendix.

**Client or own product?** The repo reads as founder-owned, not a client build: one git author, a founder byline on the blog, and a founder's own Pro subscription. So the product name is used below. Confirm in §15. [EVIDENCE: `git shortlog` shows one author; lib/blog/posts/*.ts author field] [INFERRED]

---

## 1. One-line description

A web app that turns the analytics spreadsheets social media freelancers already download (from Meta, Instagram, TikTok, LinkedIn, Google Ads and scheduling tools) into a branded, three-page PDF report for their clients. The report includes a written summary the freelancer can edit. [EVIDENCE: docs/01-product-truth.md §1–2, CLAUDE.md]

Users: solo freelance social media managers and small agencies who send clients a monthly report. [EVIDENCE: docs/01-product-truth.md §2]

## 2. Platforms and live status

- **Web only.** No iOS, Android or desktop app. [EVIDENCE: package.json has no React Native, Expo or Electron]
- **Live:** https://www.poststeady.com [EVIDENCE: lib/site.ts `CANONICAL_SITE_URL`]
- Hosted on Vercel. [EVIDENCE: lib/pdf/chromium.ts comments, `@vercel/analytics` in package.json]
- A marketing site and a 26-post blog run from the same codebase. [EVIDENCE: app/page.tsx, app/pricing, app/resources, lib/blog/posts/]
- Pricing: Free is 2 reports a month and 2 clients. Pro is $10.99/month for unlimited reports and clients. [EVIDENCE: lib/billing/limits.ts, app/pricing/page.tsx:10]

## 3. Stack

**It's a web app, not Flutter, native Swift or native Kotlin.** TypeScript on Next.js 16.2.6 and React 19.2.4. Supabase handles the database, logins and file storage. Gemini writes the AI text, Dodo Payments handles billing, Resend sends email, and headless Chrome (Puppeteer) produces the PDFs. [EVIDENCE: package.json] Full versions are in §14.1.

## 4. Why this domain was hard

- **Every platform exports different files.** Meta, TikTok, LinkedIn, GA4 and Google Ads name the same number differently ("Amount Spent", "Cost", "Total Spend"). Some add title lines above the header or use unusual text encodings. The app has to read all of them. [EVIDENCE: docs/01-product-truth.md §5 (175 aliases), lib/reports/parse-csv.ts, lib/reports/parse-csv.test.ts]
- **A wrong number goes straight to a paying client.** This isn't an internal dashboard. The output is a document the freelancer's client reads, so a silent mistake costs trust twice. It happened once: an ambiguous file was credited to the wrong platform in a real client report. [EVIDENCE: CLAUDE.md "Step 3", lib/reports/auto-map.ts:87]
- **No API access to the client's accounts.** The users usually can't connect their clients' Meta or TikTok accounts. Everything has to work from files downloaded by hand. [EVIDENCE: docs/01-product-truth.md §3]
- **Dates and months are tricky.** Exports span several months, date formats vary, and timezones shift the 1st of the month into the previous month. [EVIDENCE: CLAUDE.md "One report holds ONE row per platform", lib/reports/metrics.ts `parseDateCell`]
- **AI can't be allowed to make numbers up.** The written summary has to quote only real figures and never state a cause it can't know. [EVIDENCE: lib/ai/gemini.ts `REPORT_COPY_RULES`]
- **Generating PDFs on serverless hosting is fragile.** Headless Chrome has to start inside a short-lived function and can't use the user's login session. [EVIDENCE: lib/pdf/chromium.ts, app/api/generate-pdf]

## 5. Before/after for the end user

- **Before:** [NEEDS FOUNDER] What the freelancer did by hand: copying numbers from each platform into slides or a doc, reformatting, writing commentary. The product docs imply this but give no time figure. [INFERRED from docs/01-product-truth.md §3]
- **With the product:** download the files they already export → upload → confirm the pre-filled column matching → check or correct the numbers → edit the AI-drafted summary → send a branded PDF or a no-login share link. [EVIDENCE: app/reports/new/step-1…5, docs/01-product-truth.md §4]
- **Comparing months:** uploading last month's file too gives a real month-over-month comparison. [EVIDENCE: docs/01-product-truth.md §4]
- **Time saved:** [NEEDS FOUNDER] No measured figure exists, and the project's own copy rules forbid quoting one. [EVIDENCE: docs/03-voice-and-messaging.md §4 "Time-saving claims"]

## 6. Scope delivered vs time and team

- **Team:** one developer (one git author, 440 commits). [EVIDENCE: `git shortlog -sn`] Use of AI coding tools: [NEEDS FOUNDER].
- **Timeline:** first commit 2026-07-10, latest 2026-09-23. About 11 weeks, and a working first version by the end of week 1 (2026-07-15). [EVIDENCE: git log]
- **Screens:** 21 pages, including the dashboard, clients, client detail, the 5-step report wizard, report preview, public share page, settings, onboarding, the login/signup/password-reset flows, and the marketing pages (home, pricing, about, resources, blog posts, privacy, terms). [EVIDENCE: `find app -name page.tsx`]
- **API routes:** 11. PDF generate and download, AI summary and block regenerate, report blocks, checkout, billing portal, the payment webhook, the email webhook, feedback, support. [EVIDENCE: app/api/**/route.ts]
- **Integrations:** Supabase (database, login incl. Google sign-in, file storage), Dodo Payments, Google Gemini, Resend, Upstash Redis, GA4 and Vercel Analytics. [EVIDENCE: package.json, lib/]
- **Database:** 47 versioned changes (migrations), with row-level security on every table. [EVIDENCE: supabase/migrations/]
- **Content engine:** 26 blog posts with an automated quality test. [EVIDENCE: lib/blog/posts/, lib/blog/posts.test.ts]
- **Milestones:** [EVIDENCE: git log, supabase/migrations/]
  - 07-14/15: first version (dashboard, PDF engine, billing, settings, analytics)
  - 08-01: the database structure moved under version control
  - 08-10: paywall
  - 08-12: switched payment provider from Stripe to Dodo
  - 08-22: client caps; payment webhook protected against events arriving out of order
  - 08-29: pre-launch audit, 30 findings fixed
  - 08-31 → 09-23: blog and SEO push
  - 09-14: second security audit
  - 09-19: Google sign-in
  - 09-05 / 09-21: Pro price dropped from $19 to $10.99, then made consistent everywhere

## 7. Key technical decisions

1. **Spreadsheet upload only, no social logins.** The product works for clients whose accounts the freelancer can't connect, and keeps working when platforms change their API rules. The cost: nothing refreshes automatically. [EVIDENCE: docs/01-product-truth.md §3]
2. **One report design for screen, share link and PDF.** The PDF is a print of the exact page the user reviewed, so they can never drift apart. [EVIDENCE: components/report/report-canvas.tsx, CLAUDE.md "Step 5"]
3. **Paywall enforced in the database, not the browser.** The free quota is counted by the database itself, resets monthly with no scheduled job, and can't be bypassed from the client side. [EVIDENCE: lib/billing/entitlement.ts, supabase/migrations/20260810120200_report_unlock_monthly_reset.sql]
4. **The column matcher refuses to guess when a file is ambiguous.** Asking the user beats silently crediting a number to the wrong platform. [EVIDENCE: lib/reports/auto-map.ts:87, CLAUDE.md "Step 3"]
5. **Guardrails on the AI.** The prompt forbids invented numbers, recalculated figures, stated causes, and percentages of 300% or more. Comparisons with an incomplete previous month are flagged in the data before the AI sees it. [EVIDENCE: lib/ai/gemini.ts:159-172, lib/reports/metrics.ts:614-619]
6. **One list of metrics that everything reads from.** It replaced three copies that had drifted apart. [EVIDENCE: lib/reports/metrics.ts `METRIC_DEFS`, lib/reports/auto-map.test.ts]

Reasoning and file detail are in §14.3.

## 8. Dead ends and deliberate "not built" choices

- **Stripe → Dodo Payments** (switched around 2026-08-12). The reason isn't in the code: [NEEDS FOUNDER]. [EVIDENCE: supabase/migrations/20260812131750_dodo_payments_billing.sql, git log 2026-08-12]
- **Sentry error reporting was removed** (2026-08-23). It was set up but never actually ran. Server errors go to Vercel's function logs by choice. [EVIDENCE: CLAUDE.md "Known rough edges"]
- **A database-based login lockout was added and then dropped the same day**, moved to Upstash Redis instead. [EVIDENCE: supabase/migrations/20260819182141_auth_attempt_lockout.sql, 20260819182511_drop_auth_attempt_lockout.sql, lib/auth-rate-limit.ts]
- **The team-management UI was hidden.** The backend (workspaces, roles, invites) is still intact and can be switched back on. [EVIDENCE: CLAUDE.md "AI summaries and billing", lib/workspace.ts]
- **The 30-minute idle logout was removed.** [EVIDENCE: commit 2026-09-19 "remove 30-min idle timeout"]
- **YouTube auto-detection was deliberately not built**, because its export looks identical to Meta's and guessing wrong corrupts reports. [EVIDENCE: CLAUDE.md "Step 3", content/keyword-queue.md "Ruled out"]
- **No scheduling or publishing, no live dashboard, no competitor tracking.** Scope stays tight on the report. [EVIDENCE: docs/03-voice-and-messaging.md §4]
- **A report-deletion block was replaced with a ledger.** A blunt database trigger stopped users deleting reports. It was swapped for an unlock record, so deleting a report doesn't hand back a free slot. [EVIDENCE: supabase/migrations/20260920054943_report_unlock_ledger.sql]
- **Stale engineering docs were deleted** (2026-08-17) because they described tables and features that never existed. The code plus CLAUDE.md became the source of truth. [EVIDENCE: CLAUDE.md "Where to look for more"]
- **Unused database columns and an unsafe browser security setting (`unsafe-eval`) were removed** during the audit. [EVIDENCE: commits 2026-08-30 "drop three unused columns", "drop unsafe-eval from production CSP"]

## 9. Before/after numbers from the repo

Only figures written in the repo. These are engineering numbers, not user outcomes.

| What | Before | After | Evidence |
|---|---|---|---|
| PDF export on Vercel | Failed **100%** of the time (wrong Chrome download URL) | Fixed; a test now fails if the version drifts | lib/pdf/chromium.ts header comment |
| AI model reliability (internal test) | "latest" alias: **3/4** success, avg **15.7s**; another model 0/4 | Pinned model: **4/4**, avg **2.4s** (1.8s on the structured call) | lib/ai/gemini.ts:11–26 |
| AI percentage bug | Wrote "engagements rose **33,513%**" off a partial month | Anything over 300% is flagged and never quoted | lib/ai/gemini.ts:159-172, lib/reports/metrics.ts:614-619 |
| PDF access token | Deleted on first use, so the PDF became a 404 page | **5-minute** expiry, reusable within that window | CLAUDE.md "PDF generation" |
| Column matching coverage | n/a | **175** header aliases | docs/01-product-truth.md §5 |
| Pro price | $19/month | $10.99/month | git log 2026-09-05, app/pricing/page.tsx:10 |
| Free quota | "2 reports lifetime" model (per project notes) | 2 reports **every month**, resets on the 1st | lib/billing/limits.ts, supabase/migrations/20260810120200_report_unlock_monthly_reset.sql |
| Cost limits | n/a | AI: 20/hour, 300/month. PDF: 10/hour. Logins: 5 per 15 min | CLAUDE.md "Known rough edges", lib/rate-limit.ts |
| Test suite | n/a | 221 passing tests | `npm test` output 2026-09-24 |

## 10. Hard problems solved

- **Date traps.** A plain "35" in a date column became the year 2034, and on an Indian server the 1st of every month was filed under the previous month. Fixed with one date parser that's safe across timezones. [EVIDENCE: lib/reports/metrics.ts `parseDateCell`, lib/reports/parse-numeric-cell.test.ts]
- **Double-counted reports.** A 3-month LinkedIn export could be summed into one month's report. Now only the report's own month is written and the rest is reported back to the user. [EVIDENCE: CLAUDE.md "One report holds ONE row per platform"]
- **"Which month is this?"** The dashboard reset every client to "pending" on the 1st, even for finished and delivered reports. It was rebuilt around the last complete month. [EVIDENCE: lib/reports/reporting-queue.ts, reporting-queue.test.ts]
- **PDF export dead in production** while working locally. See §9. [EVIDENCE: lib/pdf/chromium.ts]
- **Silent save failures.** A database permission rule that matched nothing updated zero rows without any error. Edits now re-read the row to confirm they landed. [EVIDENCE: CLAUDE.md "Step 4"]
- **Signup broke on a secret-format mismatch** between Supabase and the webhook library, and the user saw a bare "{}". [EVIDENCE: lib/auth-webhook.ts, lib/auth-webhook.test.ts]
- **Security hardening across two audits.** They closed paths around the paywall, the client cap and the cost limiters. [EVIDENCE: AUDIT-2026-08-29.md, AUDIT-2026-09-14.md, commit 2026-09-14]
- **Protection against prompt injection.** Client names and pasted notes are wrapped so the AI treats them as data, never as instructions. [EVIDENCE: lib/ai/gemini.ts `untrustedContextBlock`, lib/ai/gemini.test.ts]

## 11. Screenshots and diagrams

Capture from a **demo account with made-up client data**. ⚠ marks screens that could show a real client's branding or data.

1. **Upload step with file checks** (row counts, detected date range, detected platform). Route `/reports/new`, step 2, source `app/reports/new/step-2-upload.tsx`. ⚠ uploaded files and client name.
2. **Column matching screen** (pre-filled matches). `/reports/new` step 3, `app/reports/new/step-3-mapping.tsx`. ⚠ real CSV headers are fine, but the client name shows.
3. **Metrics review with editable headline cards.** `/reports/new` step 4, `app/reports/new/step-4-metrics.tsx`. ⚠ real numbers.
4. **Finished report, page 1** (branding, headline cards, AI summary). `/reports/[id]/preview`, `components/report/report-canvas.tsx`. ⚠ **High risk:** client logo, brand color, real figures. Existing images `public/Landing_page_images/Report_page_1.webp` (and `_2`, `_3`) are already public on the landing page, but check they aren't a real client before reusing.
5. **Dashboard with the pending-reports queue.** `/dashboard`, `app/dashboard/page.tsx`. ⚠ client names.
6. **Public share page** (what the end client sees, no login). `/share/[token]`. ⚠ same as #4.

Also in `public/Landing_page_images/`: `Clients_page.webp`, `Client_details.webp`, `July_2026_Performance_Report_*`, `August_2026_Performance_Report.pdf`. ⚠ The file names suggest real report exports. Confirm they're demo data before use. [EVIDENCE: `ls public/Landing_page_images`]

**Architecture diagram (one):**
`Browser (CSV read in the browser) → Next.js on Vercel (wizard server actions) → Supabase (Postgres with row-level security + file storage)`, with branches: `→ Gemini (summary)`, `→ headless Chrome prints the same report page → PDF in storage`, `→ share link (token)`, and `Dodo Payments → signed webhook → subscriptions`. [EVIDENCE: §14.2]

## 12. Reusable lessons for the next client project

- **Enforce money rules in the database.** Paywalls, quotas and caps belong in the database, where a browser can't touch them. [EVIDENCE: §7.3]
- **One source of truth for anything listed twice.** Duplicated lists drift and lose data quietly. [EVIDENCE: lib/reports/metrics.ts `METRIC_DEFS`]
- **Keep logic in pure, testable modules and API routes thin.** 221 tests run in seconds with no test framework. [EVIDENCE: CLAUDE.md "Hard rules", lib/**/*.test.ts]
- **Decline instead of guessing when data is ambiguous**, especially when the output goes to someone's customer. [EVIDENCE: lib/reports/auto-map.ts]
- **Constrain AI with rules and pre-flagged data**, not only a better prompt. [EVIDENCE: lib/ai/gemini.ts, lib/reports/metrics.ts:614-619]
- **Turn every production outage into a test that fails the build.** [EVIDENCE: lib/pdf/chromium.test.ts]
- **Database changes only through versioned migrations.** Hand edits caused repeated "column doesn't exist" bugs. [EVIDENCE: CLAUDE.md "Schema changes: migrations only"]
- **Run dated audits before launch and after major changes.** [EVIDENCE: AUDIT-2026-08-29.md, AUDIT-2026-09-14.md]

## 13. Positioning suggestion (suggestion only)

[INFERRED] This project could attract:
- **Founders of small, focused SaaS products that need a paywall and billing on day one**, especially outside Stripe's easy regions (Dodo was used here).
- **Products that turn messy data into a client-facing document**: reports, invoices, audits, PDFs.
- **AI features where accuracy matters more than flair**: summaries that must never invent a number.
- **Solo or early-stage founders who want a lot of scope fast**: a full SaaS in about 11 weeks with one developer.

---

## 14. Technical appendix

### 14.1 Stack with versions [EVIDENCE: package.json]

| Layer | Package | Version |
|---|---|---|
| Framework | next | 16.2.6 |
| UI | react / react-dom | 19.2.4 |
| Language | typescript | 5.7.3 |
| Styling | tailwindcss / @tailwindcss/postcss | ^4.2.0 |
| Components | shadcn ^4.8.0, @base-ui/react ^1.5.0, lucide-react ^1.16.0, framer-motion ^13.2.0 | |
| DB / auth / storage | @supabase/supabase-js ^2.110.4, @supabase/ssr ^0.12.1 | |
| CSV | papaparse | ^5.5.4 |
| PDF | puppeteer-core ^25.3.0, @sparticuz/chromium-min 149.0.0 | |
| AI | @google/genai ^2.17.1 (default `gemini-3.5-flash`, lib/ai/gemini.ts:26) | |
| Payments | dodopayments ^2.45.1, standardwebhooks ^1.0.0 | |
| Email | resend | ^6.20.0 |
| Auth rate limit | @upstash/ratelimit ^2.0.8, @upstash/redis ^1.38.2 | |
| Validation | zod | ^4.4.3 |
| Analytics | @vercel/analytics 1.6.1 + GA4 (lib/gtag.ts) | |
| Docs export | docx | ^9.7.1 |

### 14.2 Architecture

- `app/reports/new/`: 5-step wizard. React Context plus sessionStorage keeps state across refreshes; File objects are nulled before serializing. [EVIDENCE: wizard-context.tsx]
- `app/reports/actions.ts`: all wizard server actions. [EVIDENCE]
- `lib/reports/`: pure logic (auto-map, source fingerprinting, CSV/date/number parsing, KPI derivation, reporting queue), kept outside `app/` because `npm test` only covers `lib/`. [EVIDENCE: CLAUDE.md]
- `components/report/report-canvas.tsx`: the one renderer for preview, share and print. [EVIDENCE]
- `proxy.ts`: Next 16's middleware replacement. Global auth guard plus the print-route exemption. [EVIDENCE]
- **Data flow:** CSV parsed client-side (PapaParse) → `csv_uploads` bucket + `csv_imports` → mapping → `processMetricsAction` normalizes into `platform_metrics` (UNIQUE report_id, platform_id) → edits and visibility in `reports.metrics_config` → Gemini writes to `ai_generations` → print route → Puppeteer → `pdfs` bucket, or a `report_shares` token. [EVIDENCE: CLAUDE.md]
- **Multi-tenancy:** workspaces, `workspace_members`, `member_role` (owner/editor/viewer), `is_workspace_member()` RLS. [EVIDENCE: lib/workspace.ts, migrations]
- **Service-role key:** limited to 6 server files, each doing its own ownership check. [EVIDENCE: CLAUDE.md table]

### 14.3 Decision detail

- **Print auth:** `/api/generate-pdf` mints a `crypto.randomBytes(32)` token in `print_tokens` with a 5-minute TTL. `proxy.ts` exempts the print route and the page validates the token server-side. The token isn't consumed on first use, because Chromium may request the page more than once. [EVIDENCE: app/api/generate-pdf, app/reports/[id]/print/page.tsx]
- **Quota:** the `consume_report_slot` Postgres function counts unlocks since `date_trunc('month', now())`, atomically. The `report_unlocks` ledger since 2026-09-20. The client cap is enforced at DB level, including on unarchive. [EVIDENCE: migrations 20260810120200, 20260920054943, 20260904183516, 20260914114009]
- **Subscriptions:** `subscriptions` is SELECT-only for users. `workspace_has_active_subscription` requires `status='active'` and an unexpired `current_period_end` (3-day grace). Refund and dispute events are logged but don't revoke access. [EVIDENCE: CLAUDE.md, migration 20260829071702]
- **Source detection:** `detectSource()` fingerprints `meta`, `tiktok`, `linkedin`, `google`, `ga4`, and falls back to `generic` plus the filename. The platform stays correctable in step 2. [EVIDENCE: lib/reports/auto-map.ts:87]
- **KPI overrides:** reserved `__kpis` and `__kpis_extra` keys inside `reports.metrics_config`, applied in one place (`deriveCanvasMetrics`). [EVIDENCE: lib/reports/metrics.ts]
- **Engagement rate** is derived from engagements/reach, never stored. [EVIDENCE: CLAUDE.md "Step 4"]

### 14.4 Quality signals

- **Tests:** 19 files, 221 tests on `node --test`, plus realistic edge-case CSV fixtures. [EVIDENCE: lib/**/*.test.ts, tests/csv-test-kit/]
- **CI/CD:** no GitHub Actions; deploys through Vercel's git integration. [EVIDENCE: no .github/] [INFERRED: Vercel auto-deploy]
- **Offline:** none needed (a web app). The wizard survives a refresh. [EVIDENCE: wizard-context.tsx]
- **Performance:** memoized wizard context, steps 3–5 code-split, image loading fixes. [EVIDENCE: commit 2026-09-20, lib/image-optimize.ts]
- **Security:** RLS everywhere, signed webhooks, a CSP without `unsafe-eval`, auth lockout, and cost limiters. [EVIDENCE: CLAUDE.md, lib/rate-limit.ts, lib/auth-rate-limit.ts]
- **Error handling:** no Sentry, by choice. Plain UI error boundaries. [EVIDENCE: app/error.tsx, app/global-error.tsx]

---

## 15. Questions for the founder

1. Signups, active users, paying Pro subscribers?
2. Revenue or MRR you're willing to share?
3. Time a freelancer spent per report before vs with the product, even one user's estimate? (§5)
4. Any testimonials or user quotes?
5. Is this your own product (it reads that way)? OK to show it publicly under its real name?
6. Are the images in `public/Landing_page_images/` (incl. the July/August report files) demo data or a real client's? (§11)
7. Why Dodo over Stripe? Payout availability in India, fees, approval? (§8)
8. Why CSV-only: customer interviews, or API access pain you hit yourself?
9. Which AI coding tools did you use, and how would you like that framed? (§6)
10. Search results from the blog (impressions, clicks) you're happy to cite?
11. Why the price drop from $19 to $10.99, and did it change conversion?
12. What's next: team features (built but hidden), more platforms?

---

## 16. Verified against the code (2026-09-29, `Post_Steady_app` HEAD `0d3e086`)

Checked line by line for the case study page. ✓ = matches the code.

- ✓ 21 pages (`find app -name page.tsx`), 11 API routes, 47 migrations.
- ✓ 175 header aliases across 31 metric keys (`lib/reports/auto-map.ts` `ALIAS_MAP`); "Amount Spent", "Cost", "Total Spend" are real `spend` aliases.
- **Changed:** tests are now **230** (was 221): all 230 pass in IST; one date test assumes the machine's timezone and fails under UTC (a test issue, not a product bug).
- ✓ Row-level security enabled on all 19 tables. ✓ Two dated audits (`AUDIT-2026-08-29.md`, `AUDIT-2026-09-14.md`).
- ✓ AI rules (`REPORT_COPY_RULES`): no invented numbers, no causes, no change of 300%+; client text wrapped as data. ✓ Pinned `gemini-3.5-flash`: 4/4 at 2.4s vs the `-latest` alias 3/4 at 15.7s; thinking budget 0.
- ✓ Report canvas is 3 pages; the share page (`/share/[token]`), the preview and the PDF all render the same `<ReportCanvas>`; share link needs no login.
- ✓ Free plan: 2 reports and 2 clients a month; Pro unlimited.
- **Changed:** the wizard is 5 steps: Setup (client + month) → Upload → Mapping → Metrics → Review (edit AI summary, export or share). The page previously listed "Download" as step 1.
- ✓ Ambiguous files: `detectSource()` declines rather than guesses; the platform is then picked from a dropdown in step 2.
- ✓ First commit 2026-07-10; PDF engine, billing and settings in by 2026-07-15 (end of week 1); 448 commits, work continuing after launch.
- Before-state pains used on the page come from the product repo's `docs/02-audience-and-positioning.md` ("already the pain-point section on the live site").


## 17. Founder answers (2026-09-29)

- **Why we built it [FOUNDER]:** most reporting tools bundle scheduling, live dashboards and team seats and charge for them; reporting sits in most tools' premium plans, from about $50/month up to $200 (founder, corrected 2026-09-29); a solo freelancer with three clients can't justify that, so they use Canva or paste numbers into ChatGPT. (Competitor price range confirmed by the founder.)
- **Design story [FOUNDER]:** the first wizard asked users to connect social accounts; cut before shipping (clients own the accounts and won't share logins; platform API rules change and revoke access). Became file-based; 175 names mapped before launch; ambiguous files are not guessed.
- **YouTube misattribution:** leave out of the case study.
