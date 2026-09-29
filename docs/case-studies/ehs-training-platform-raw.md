# Case Study Raw Material: EHS Guru Training Platform

> Raw notes for a portfolio case study, pulled from the repository as of 2026-09-24 (branch `dev`, last commit `2f75f7c`, 2026-09-19).
> **Reader:** a non-technical founder deciding whether to hire us. Sections 1–13 are in plain language; the engineering detail is in §14, the Technical appendix.
> Tags: **[EVIDENCE: path / commit]** = backed by code or git history. **[FOUNDER]** = stated by the founder on 2026-09-24. **[INFERRED]** = a reasonable reading that the code doesn't prove. **[NEEDS FOUNDER]** = still open.
> This file contains no secrets, credentials or personal data. **The client is EHS Guru, and the founder confirmed it can be named.** [FOUNDER]

---

## 1. One-line description

A custom online training platform for **EHS Guru**, a safety-training company (Environment, Health & Safety) that runs live classes in batches of nearly 80 learners, with several batches running. [FOUNDER] It runs live classes over Zoom, takes attendance automatically, records every class into a private video library, and brings in new learners through free webinars. [EVIDENCE: `app/admin/`, `app/trainer/`, `app/participant/`, `app/free/`]

- **Who uses it:** the training company's admins, its trainers, enrolled (paying) learners, and guests who sign up for free webinars without an account. [EVIDENCE: `proxy.ts` role checks; `app/api/free/register/route.ts`]

## 2. Platforms and live status

| Platform | Status |
|---|---|
| Web, desktop and mobile browsers | **Yes, the product is web-first**: it works on any modern browser on laptop or phone, with no install. [EVIDENCE: `package.json`; `browserslist` = last 2 versions of Chrome, Firefox, Edge, Safari; responsive layout, commit `3fd44a6`] |

- **Live: yes.** In production at https://ehs-training-platform.ehsguru.com [EVIDENCE: `proxy.ts` `ALLOWED_ORIGINS`] [FOUNDER: live, client can be named]. Running real paid classes. [EVIDENCE: commits `2f75f7c`, `3de7c1a`]
- **Hosting:** Vercel. [EVIDENCE: `.vercel/`, `@vercel/speed-insights`]
- **Launch:** **2026-05-27.** [FOUNDER] [EVIDENCE: production domain set up that day, commits `47e902a`, `11eb773`]

## 3. Stack

**This is a web app (TypeScript, Next.js, React). It is not Flutter, native Swift or native Kotlin.** [EVIDENCE: `package.json`, `tsconfig.json`, `app/`]

In plain terms: one Next.js web app on Vercel, a Supabase (Postgres) database with login, Zoom for the live classes, Cloudflare R2 to store the videos, Resend for email, Twilio for WhatsApp, and Sentry for error alerts. Exact versions are in §14.1.

## 4. Why this kind of product is hard

- **Someone else's video platform is at the centre.** The live class happens inside Zoom, not in our app. Everything the business cares about (who attended, for how long, where the recording is) has to be rebuilt from Zoom's notifications, and those can arrive late, twice, out of order, or in pieces. [EVIDENCE: `app/api/zoom/webhook/route.ts` comments]
- **Attendance is evidence.** In safety training, "this person attended and watched the material" is often something a company has to prove. So attendance and watch time must be hard to fake. [INFERRED: domain reasoning] [EVIDENCE of the anti-spoofing work: `app/api/recording-progress/route.ts`, `findParticipant()` in the webhook]
- **A live class can't be re-run.** Every recording has to be captured completely and reliably, class after class. [INFERRED: domain reasoning] [EVIDENCE of the safeguards: `lib/zoom.ts` `startCloudRecording`, webhook recording handlers]
- **Scale of a live class.** One batch is nearly 80 learners joining the same Zoom class, across several batches, so attendance matching and recording delivery run at that size every session. [FOUNDER]
- **Four audiences, one system.** Admins, trainers, paying learners and anonymous guests each need a different view and different permissions over the same data. [EVIDENCE: `proxy.ts`, `lib/auth/requireRole.ts`]
- **Reminders and time zones.** Reminders by email and WhatsApp have to land at the right time for learners in their local time zone while servers run on UTC. [EVIDENCE: commits `f80b552` (local-timezone rendering), `7a31aa1` (IST emails), `ac5bd10` (reminder window)]

## 5. Before and after for the end user

**Before:** EHS Guru ran on **Edmingle**, an off-the-shelf LMS. They paid for a large feature set they mostly didn't use, the cost was too high, and the platform wasn't theirs: it didn't give them a brand of their own. They wanted a platform built for exactly how they teach, under their own name. [FOUNDER]

**After:** a fully custom platform on their own domain and brand, built around their real workflow of live Zoom classes in batches of nearly 80. [FOUNDER] [EVIDENCE: `proxy.ts` domain, client branding in `components/layouts/*`, `app/(legal)/*`]

| Job | With this product |
|---|---|
| Scheduling a class | Admin creates the session; the Zoom meeting is created automatically and learners are notified. [EVIDENCE: `lib/zoom.ts` `createZoomMeeting`, `app/api/admin/email/trigger`] |
| Joining a class | Learner clicks Join in their portal and lands in the class, with no extra Zoom registration. [EVIDENCE: `components/ZoomMeetingLoader.tsx`, commit `d41f478`] |
| Taking attendance | Automatic, with minutes present per person, plus an admin override. [EVIDENCE: webhook; `app/api/admin/attendance/override`] |
| Sharing the recording | Every class is saved into the library automatically, and the admin publishes it to enrolled learners when ready. [EVIDENCE: webhook; `is_published` default false] |
| Knowing who actually watched | Watch progress per learner, engagement analytics, and a one-click "nudge" to disengaged learners. [EVIDENCE: `hooks/useWatchTracker.ts`, `app/admin/engagement`, `app/api/admin/session-engagement/[sessionId]/nudge`] |
| Running free webinars for leads | Public sign-up page, guest portal link by email, automatic reminders, "recording ready" messages. [EVIDENCE: `app/free/`, `app/api/free/*`, `app/api/cron/free-reminders`] |
| Assignments and assessments | Learners submit in the portal, and trainers review in theirs. [EVIDENCE: `app/participant/assignments`, `app/trainer/assessments`] |
| Materials | PDFs view in the browser; other documents download in one click. [EVIDENCE: `components/PdfViewer.tsx`] |

## 6. Scope delivered vs time and team

- **Team:** built end to end by our team, fully custom. [FOUNDER]
- **Time to live:** **about 2 months of build to go live** on 2026-05-27. [FOUNDER] After launch it has kept improving alongside real classes, with updates shipping through September 2026. [EVIDENCE: `git log`]
- **Screens:** 76 pages. [EVIDENCE: `find app -name page.tsx`]
  - Admin 38, Trainer 13, Learner 14, Free-webinar funnel 4, Meeting join 1, Login and password reset 2, Legal 2.
- **Server endpoints:** 52 API routes. [EVIDENCE: `find app/api -name route.ts`]
  - Admin 23, Zoom 9, Free webinars 8, Recordings and progress 3, Scheduled jobs 2, others 7.
- **Data model:** 27 database tables, plus 5 database functions for attendance and view counts. [EVIDENCE: `.from('…')` and `.rpc('…')` references across `app/`, `lib/`]
- **External services integrated:** 7 — Supabase, Zoom, Cloudflare R2, Resend, Twilio WhatsApp, Upstash Redis, Sentry. [EVIDENCE: `package.json`, `lib/`]

**What was delivered, in build order** [EVIDENCE: `git log`]

1. Foundation: login, user management with bulk CSV import, role-based dashboards.
2. Learning structure: courses, modules, batches, materials, assessments, calendar, email automation.
3. Zoom + video: one-click classes, automatic attendance, automatic recordings to Cloudflare R2.
4. Dashboards, assignments, and security hardening before launch.
5. Recordings library, engagement analytics, free-webinar funnel, legal pages.
6. **Go-live, 2026-05-27.** [FOUNDER]
7. After launch: WhatsApp notifications, a speed and accessibility pass, a smarter inactivity timeout, and stronger recording reliability.

## 7. Key technical decisions (plain language; detail in §14.3)

1. **Zoom notifications drive attendance, and the database does the maths.** Zoom tells the app when people join and leave. The app records it in one step inside the database, so duplicate or overlapping notifications never double-count, and it uses Zoom's own timestamps so late notifications still give exact minutes. [EVIDENCE: `supabase/migrations/20260602000001_attendance_rpc.sql`; webhook comment on `leave_time`]
2. **Recordings are copied into the client's own storage (Cloudflare R2).** EHS Guru owns its video library instead of depending on Zoom's. [EVIDENCE: `lib/r2.ts`, webhook] Likely reasons: R2 doesn't charge for video traffic, and videos don't depend on Zoom's retention rules. [INFERRED]
3. **Matching a Zoom attendee to a real learner uses several checks.** It tries email, then name narrowed by course enrollment, so attendance lands on the right person even when people type their name differently. [EVIDENCE: `findParticipant()` in `app/api/zoom/webhook/route.ts`]
4. **Access is checked in three places:** at the front door (`proxy.ts`), on every protected page (`lib/auth/requireRole.ts`), and in the database login token (`supabase/migrations/20260602000002_auth_hook_jwt.sql`). The reason: a fast check for speed, backed by an authoritative one for safety. [EVIDENCE: files listed]
5. **Lean and low-cost by design.** Twilio and the rate limiter are called directly rather than through extra libraries, which keeps the app light. [EVIDENCE: `lib/whatsapp.ts`, `lib/rateLimit.ts` ("no SDK dependency needed")] Scheduled reminders run on cron-job.org, so the whole platform stays on low-cost hosting. [FOUNDER] [EVIDENCE: `vercel.json`]
6. **Every Zoom event is logged.** Any class's full history (joins, leaves, recordings) can be traced and replayed. [EVIDENCE: `webhook_logs` inserts in the webhook]

## 8. Refined through real use: deliberate choices

The product was shaped by EHS Guru's live classes. These are the choices that make it work the way it does. [EVIDENCE: commits listed]

| Choice | Why | Evidence |
|---|---|---|
| **Join from the portal, not via Zoom registration** | Removes a registration step for 80 learners per class, and attendance is recorded on our side the moment they click Join. | commits `f3384d8`, `d41f478`, `eb951a5` |
| **Keep every segment of a recording** | If a trainer pauses and resumes, every part of the class is kept and shown in order. | commit `2f75f7c` |
| **Automatically restart a recording if it stops** | Protects the recording from accidental clicks during a live class. | commit `2f75f7c`, `lib/zoom.ts` |
| **Tune recording rules on real class data** | The minimum clip length was set from real sessions (30 s) so real content is kept and only empty clips are skipped. | commits `3de7c1a`, `2f75f7c` |
| **Serve videos from a fast CDN domain** | Measured 7.5× faster playback (0.90 vs 0.12 MB/s). | commit `3de7c1a` |
| **Scheduling on cron-job.org** | Frequent reminder runs without paying for a higher hosting tier. | [FOUNDER]; `vercel.json` |
| **Admins can start a class any time** | Trainers aren't blocked from opening the room early; the learner join window is unchanged. | commit `8b5ec51` |
| **Zoom web client for joining** | Learners join from any browser with nothing to install. | `components/ZoomMeetingLoader.tsx` |
| **Payments handled offline** | EHS Guru's choice; kept out of scope so the build focused on teaching. | [FOUNDER] |
| **Email first, WhatsApp added after template approval** | Launch wasn't held up waiting for Meta to approve message templates. | `lib/whatsapp.ts` header |

## 9. Numbers from the repo

| What | Number | Source |
|---|---|---|
| Video playback speed | **7.5× faster** (0.12 → 0.90 MB/s) | commit `3de7c1a` |
| Reminder precision | window tightened from ±29 min to **±10 min** | commit `ac5bd10` |
| Recording coverage | every segment of 30 s or longer is kept | webhook `MIN_RECORDING_DURATION_SECONDS`, commit `2f75f7c` |
| Recording auto-restart | up to 20 automatic restarts per recording, each handled exactly once | webhook `MAX_RESTARTS_PER_INSTANCE` |
| Trainer name shown in Zoom | confirmed by Zoom before the trainer enters (up to 8 s) | commit `ffba1a0`, `lib/zoom.ts` |
| Watch-time integrity | each tracked segment is checked on the server (≤90 s, never past the real video length) | `app/api/recording-progress/route.ts` |
| Guest access link | valid 30 days, resend limited to 3 per hour | `app/api/free/register/route.ts`, `lib/rateLimit.ts` |
| Login protection | 5 attempts per minute per IP | `lib/rateLimit.ts` |
| Scale per class | ~80 learners per batch, several batches | [FOUNDER] |

## 10. Hard problems solved

- **Complete recordings, every class.** Zoom splits a recording whenever it's paused and can stop it by accident. The platform restarts recording automatically and keeps every segment in order. [EVIDENCE: `lib/zoom.ts` `startCloudRecording`, webhook, `lib/zoom-autorestart.test.ts`, `lib/zoom-fragment-gate.test.ts`]
- **The right video file.** Zoom produces several files per class (speaker view, gallery, audio, captioned). The platform picks the best view and downloads that exact file. [EVIDENCE: `lib/recording-pick.ts`, `lib/zoom.ts`]
- **Classes end only when they really end.** A learner who joins early and leaves, or a trainer testing the link, doesn't close the class. [EVIDENCE: `meeting.ended` handler; commit `f1855db`]
- **"Who is 'John' in Zoom?"** Free-text Zoom names are matched reliably to real, enrolled learners. [EVIDENCE: `findParticipant()`]
- **One Zoom account, many trainers.** A single Zoom Pro host account serves every trainer; it takes the trainer's name automatically before each class. [FOUNDER: Zoom Pro] [EVIDENCE: `lib/zoom.ts` `renameMasterHost`]
- **Watch time you can trust.** Watch progress is verified on the server, so reports reflect what learners really watched. [EVIDENCE: commit `7c7757c`]
- **Never logged out mid-class.** The inactivity timeout works across browser tabs and pauses during a live meeting or a recording. [EVIDENCE: `components/SessionTimeoutListener.tsx`; commits `072fc97`, `da69615`, `ec4a4be`]
- **Enterprise-style features on low-cost hosting.** Reminders, analytics and video run without a premium hosting plan. [FOUNDER] [EVIDENCE: `vercel.json`]

## 11. Screenshots and diagram

**Screens to capture** (use demo data where flagged)

| # | Screen | Route / file | Why | ⚠ Flag |
|---|---|---|---|---|
| 1 | Admin dashboard | `/admin/dashboard` · `app/admin/dashboard/page.tsx`, `SessionsWidget.tsx` | The operator's single view | Real learner names |
| 2 | Sessions list with Start / Clone / Publish | `/admin/sessions` · `app/admin/sessions/page.tsx` | The one-click Zoom workflow | Real trainer names |
| 3 | Recordings library | `/admin/recordings` · `app/admin/recordings/RecordingsList.tsx` | "Every class, saved" | Video thumbnails may show faces |
| 4 | Engagement analytics | `/admin/engagement` · `app/admin/engagement/page.tsx` | Who attended and who watched | **Real learner names and attendance data.** Must use demo data |
| 5 | Learner video player with progress | `/participant/recordings` · `components/recordings/` | The learner experience | Class content may show real people |
| 6 | Free-webinar sign-up page | `/free/[slug]` · `app/free/[slug]/RegistrationClient.tsx` | The lead funnel, in EHS Guru's brand | None: public page, and the client may be named |

**Architecture diagram to draw (one picture):**

```
Admin / Trainer / Learner / Guest (browser)
        │
        ▼
Next.js app on Vercel ──► proxy.ts (role gate) ──► pages + 52 API routes
        │                         │
        │                         ├──► Supabase Postgres + Auth (27 tables, attendance functions)
        │                         ├──► Resend (email) · Twilio (WhatsApp) · Upstash (rate limits)
        │                         └──► Sentry (errors)
        ▼
      Zoom ── create meeting / join / auto-restart recording ◄── lib/zoom.ts
        │
        └── events: joined · left · started · ended · recording stopped/completed
                 │
                 ▼
          /api/zoom/webhook ──► attendance (DB functions)
                            └─► best MP4 ──► Cloudflare R2 ──► learner player ──► watch progress

cron-job.org ──► reminder endpoints (email + WhatsApp)
```
[EVIDENCE: `app/api/zoom/webhook/route.ts`, `lib/zoom.ts`, `lib/r2.ts`, `hooks/useWatchTracker.ts`] [FOUNDER: cron-job.org]

## 12. Reusable lessons (what we'd do the same way next time)

- **Log every event from a third party before acting on it,** so any issue can be traced end to end. [EVIDENCE: `webhook_logs`]
- **Design for real-world events:** they can repeat (use an idempotency key), arrive late (use their timestamps), and come in pieces. [EVIDENCE: webhook `restartKey`, `leave_time` comment]
- **Put business-critical counting in the database, done in one step.** [EVIDENCE: attendance migration]
- **Verify on the server anything that decides a business outcome,** such as watch time. [EVIDENCE: commit `7c7757c`]
- **Back critical flows with small tests built from real scenarios.** [EVIDENCE: `lib/*.test.ts`]
- **Tune rules with real usage data** and measure before choosing between options. [EVIDENCE: commit `3de7c1a`, playback measured 0.12 vs 0.90 MB/s]
- **Keep running costs low by design,** for example external scheduling instead of a premium hosting tier. [FOUNDER]
- **Keep improving after launch.** Changes ship with a written root cause, the fix and how it was verified. [EVIDENCE: commits `2f75f7c`, `3de7c1a`, `7a149e5`]

## 13. Positioning suggestion (suggestion only)

- **Strongest story:** "Moving off an expensive off-the-shelf LMS (Edmingle) onto a platform you own and brand, live in about 2 months." Aim at training businesses paying for LMS features they don't use. [FOUNDER facts, positioning INFERRED]
- **Best fit:** training, education and certification businesses that run **live classes on Zoom** and need attendance, recordings and engagement they can prove. [INFERRED]
- **Broader angle:** "We build dependable platforms on top of third-party tools (Zoom, WhatsApp, email) and keep them sharp after launch." [INFERRED]
- **Adjacent buyers:** corporate compliance training teams, coaching and cohort-course businesses, and webinar-led lead-generation funnels. [INFERRED]

---

## 14. Technical appendix

### 14.1 Exact stack (declared versions from `package.json`)

| Layer | Tech | Version |
|---|---|---|
| Framework | Next.js App Router (`proxy.ts` = Next 16 request proxy) | ^16.2.1 |
| UI | React / React DOM (pinned through `overrides`) | 18.3.1 |
| Language | TypeScript | ^5 |
| Styling | Tailwind CSS via `@tailwindcss/postcss` | ^4 |
| Icons | lucide-react | ^0.576.0 |
| Validation | Zod (`lib/schemas/*.schema.ts`) | ^4.3.6 |
| DB / Auth | `@supabase/supabase-js` ^2.95.3, `@supabase/ssr` ^0.8.0, `pg` ^8.21.0 | |
| Storage | Cloudflare R2 via `@aws-sdk/client-s3` ^3.1015.0 | |
| Video | Zoom REST (Server-to-Server OAuth), webhooks, web client + ZAK | |
| Email | Resend | ^6.9.2 |
| WhatsApp | Twilio REST via `fetch` (Meta content templates) | no SDK |
| Rate limit / cache | Upstash Redis REST via `fetch` | no SDK |
| Monitoring | `@sentry/nextjs` ^10.42.0; `@vercel/speed-insights` ^2.0.0 | |
| Misc | `jsonwebtoken` ^9.0.3, `file-type` ^22.0.1, `nextjs-toploader` ^3.9.17 | |
| Scheduling | cron-job.org (external) [FOUNDER] | |

### 14.2 Architecture detail

- **Monolith:** Server Components and Route Handlers (`app/api/**`) talk to Supabase. There are three Supabase clients: browser, server (cookie-bound) and admin (service role, server only). [EVIDENCE: `lib/supabase/{client,server,admin}.ts`]
- **Webhook pipeline** (`app/api/zoom/webhook/route.ts`, `maxDuration = 300`):
  1. `endpoint.url_validation` is answered immediately (commit `445cc19`).
  2. HMAC-SHA256 signature check (`x-zm-signature`, `v0:{ts}:{body}`).
  3. Every event is logged to `webhook_logs` via `after()`, which doesn't block the response.
  4. `participant_joined` / `participant_left` → RPCs `record_paid_attendance_join` / `calculate_paid_attendance_duration`; free-session attendance lives on `free_session_registrants`.
  5. `meeting.started` / `meeting.ended` → session status, with a host-joined check and a scheduled-start check.
  6. `recording.stopped` → placeholder row + auto-restart via `PATCH /live_meetings/{id}/events {method: recording.start}` (`startCloudRecording`, 204 = success), idempotent on `${zoomUUID}:${event_ts}`, capped at 20 per instance.
  7. `recording.completed` → Gate 1 (≥30 s) → Gate 2 (one row per `zoom_uuid`, upgrading the `pending_{uuid}` placeholder) → `pickBestMp4` (view-type priority, `(CC)` suffix normalised, size tie-break) → download via the payload URL + `download_token` → streamed upload to R2 → `recordings` row (`is_published=false`).
- **Participant matching** (`findParticipant`): email (free registrants first for free sessions) → exact `ilike` name narrowed by active `enrollments` → unique first-name match among enrolled learners → free-registrant name match. Paid-session attendance is also recorded server-side at join time.
- **Watch tracking:** `hooks/useWatchTracker.ts` sends `{segment_start, segment_end}` on pause/seek/end and every 30 s (`keepalive` on unload). `app/api/recording-progress/route.ts` validates each segment (numeric, forward, ≤90 s, ≤ DB duration + 5 s), authenticates by Supabase cookie or `free_portal_tokens`, and merges overlapping segments.
- **Auth:** email/password through `/api/auth/login` (rate-limited). PKCE password reset through server-side `auth/confirm` and `auth/callback`. A Custom Access Token hook puts `role` into the JWT. The `user-role` cookie is used for fast checks in `proxy.ts`; `requireRole()` re-reads the role from the DB.
- **Guests:** `free_portal_tokens` with 30-day expiry; resend limited to 3 per hour per email.
- **Notifications:** Resend for transactional and blast email (`lib/free-session-emails.ts`, `app/api/admin/email/*`); Twilio WhatsApp sent directly (`lib/whatsapp.ts`, 9 calling routes); reminder endpoints `/api/admin/email/reminders/process` and `/api/cron/free-reminders` are triggered by cron-job.org [FOUNDER].
- **Tables (27):** announcement_logs, assignment_submissions, assignments, attendance, audit_logs, batch_members, batch_modules, batches, blast_history, courses, email_logs, email_triggers, enrollments, free_portal_tokens, free_session_registrants, free_sessions, login_attempts, materials, modules, platform_settings, recording_watch_logs, recordings, sessions, submissions, users, webhook_logs, whatsapp_queue.

### 14.3 Decision evidence

| Decision | Files / commits |
|---|---|
| Atomic attendance in Postgres (`ON CONFLICT`, `FOR UPDATE`) | `supabase/migrations/20260602000001_attendance_rpc.sql` |
| Zoom timestamps over server time | webhook `participant_left` comment |
| R2 library, served from the CDN domain | `lib/r2.ts`; commit `3de7c1a` |
| Download by payload URL + `download_token` | `lib/zoom.ts`; commits `7a149e5`, `3de7c1a` |
| Recording-type priority with `(CC)` normalisation | `lib/recording-pick.ts` |
| Role at three layers | `proxy.ts`, `lib/auth/requireRole.ts`, JWT hook migration |
| Zoom OAuth token cached for 58 min | `lib/zoom.ts` |
| Redis rate limiting via REST, fail-open | `lib/rateLimit.ts` |
| Recording auto-restart, idempotent + capped | webhook `recording.stopped` |
| Host rename confirmed by polling before redirect | `lib/zoom.ts` `renameMasterHost`, commit `ffba1a0` |

### 14.4 Quality signals

| Signal | Finding |
|---|---|
| Tests | Regression tests for the critical Zoom and recording logic: `lib/recording-pick.test.ts`, `zoom-fragment-gate.test.ts`, `zoom-autorestart.test.ts`, `zoom-recording.test.ts`, `zoom-rename.test.ts`, `session-utils.test.ts` (run with `npx tsx`), plus `test_recording_gates.js`. |
| Monitoring | Sentry on client, server and edge; `webhook_logs` as a full event trail; Vercel Speed Insights for real-user performance. |
| Performance | Database index migration (`20260602000000_add_performance_indexes.sql`), parallel data fetching (`675ca33`, `8f68793`), Server Components + `next/image` on Login (`f7cc607`), font and layout-shift work (`09dee4a`), bundle analyzer, streamed video uploads (`3de7c1a`), CDN video delivery. |
| Security | CSP, HSTS, X-Frame-Options, Permissions-Policy (`next.config.ts`); CORS allow-list (`proxy.ts`); rate limits on login, OTP, admin, upload and portal resend (`lib/rateLimit.ts`); Zoom HMAC signature verification; Zod input validation (`lib/schemas/`); file type checked from content (`app/api/files/validate`); audit log (`lib/audit-logger.ts`); role checks at proxy, page and token level; server-verified watch progress; pre-launch hardening (`d8a7467`, `0aeb101`). |
| Accessibility | Contrast and link-name fixes (`732d69f`); login accessibility pass (`17d225a`). |
| Responsive | Responsive sidebar and table layouts (`3fd44a6`, `de124ea`). |

### 14.5 Git timeline (for reference)

First commit 2026-02-14 · go-live 2026-05-27 [FOUNDER] · latest commit 2026-09-19 · 244 commits. Phase commits: foundation `e7a511b`, `4a88729` · phase 1 `fceeb18` · Zoom + R2 `ccc81f2` · attendance `e3afd77` · security hardening `d8a7467`, `0aeb101` · free funnel `8246ce4`, `b1430ca` · launch-day merge `47e902a` · recording reliability `2f75f7c`.

### 14.6 Ops note: scheduled jobs

- Scheduling runs on **cron-job.org**. `vercel.json` is intentionally empty. [FOUNDER] [EVIDENCE: `vercel.json`]
- Endpoints: `/api/admin/email/reminders/process` (paid-class email reminders, ±15 min window) and `/api/cron/free-reminders` (free-webinar reminders, ±10 min window, with sent flags). Both are protected by an internal key. [EVIDENCE: both route.ts files]

---

## 15. Questions for the founder

**Answered 2026-09-24:** name the client (EHS Guru) · before = Edmingle LMS, too many unused features, too expensive, not their own brand · batches of ~80 learners, several batches · live 2026-05-27 after ~2 months of build · full team, end to end, fully custom · payments offline · the only running cost is a Zoom Pro account (not to be published). [FOUNDER]

**Answered 2026-09-29:** WhatsApp reminders are fully live, using Meta-approved templates. [FOUNDER] (The reminder lead time, how long before a class they go out, is still not on file.)

**Still open:**

1. **Business results:** what changed since leaving Edmingle? Money saved per month (even as "less than before"), admin time, webinar-to-paid conversion.
2. **Usage numbers** the client will approve: how many batches so far, total learners, trainers, classes run.
3. **Testimonial:** a quote from EHS Guru or a trainer?
4. ~~**WhatsApp:** live with approved templates?~~ Answered above.
5. **AI-assisted development:** mention it in the case study or not?
6. **Screenshots:** a demo dataset to capture from, so no real learner data shows?

## 16. Verified against the code (2026-09-29, `EHS-Training-Platform` HEAD `1f85493`)

- ✓ 76 pages, 52 API routes, 27 database tables, 245 commits.
- ✓ Recording auto-restart, capped at 20 per recording; segments of 30 s or more kept (`app/api/zoom/webhook/route.ts`).
- ✓ Attendance matched by email first, then by name among enrolled learners (`findParticipant`); counted in one step in the database (`20260602000001_attendance_rpc.sql`).
- ✓ A class ends only when it really ends: `meeting.ended` is skipped if the host never joined.
- ✓ Every Zoom event logged (`webhook_logs`); best recording picked (`lib/recording-pick.ts`); copied to Cloudflare R2 (`lib/r2.ts`); trainer's name set on the host (`renameMasterHost`, up to 8 s).
- ✓ Watch time checked on the server: segments over 90 s rejected, total length never trusted from the browser.
- ✓ 7.5×: commit `3de7c1a` measured 0.12 vs 0.90 MB/s before moving playback to the public CDN domain.
- ✓ Access checked at three layers (`proxy.ts`, `lib/auth/requireRole.ts`, JWT hook migration). ✓ 6 test files on the Zoom/recording logic, Sentry, CSP and HSTS headers.
- ✓ Scheduling on cron-job.org (`vercel.json` is empty). ✓ Bulk CSV user import (`app/admin/users/import`).
- **Open:** timeline. The page says "about 2 months" (founder, 2026-09-24), but commits run continuously from 2026-02-14 (8 in Feb, 45 in Mar, 54 in Apr) to the 2026-05-27 launch, about 3.5 months.
- Changed on the page: "All classes recorded" status line → "Recording safeguards on" (the code proves the safeguards, not a record of every class).

## 17. Founder story (2026-09-29)

EHS Guru is an environment, health and safety company that creates its own courses in the EHS field and runs them in batches. They used an off-the-shelf LMS with many features they never used; they wanted only the core features, decided to build their own, and came to us. (The old platform stays unnamed on the site, per the brief.)
