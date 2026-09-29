# EHS Training Platform

> Matches the built page `/work/safety-training-platform` (ported from the approved design `web/public/_design/safety-training-platform.html`, 2026-09-28). World: "The Session Console" (`docs/design/case-study-brief.md` §3). Facts: `docs/case-studies/ehs-training-platform-raw.md`, [EVIDENCE]/[FOUNDER] only.

**Page accent:** `#00674C` (art direction only; buttons stay green).

## Opening

**Kicker:** Case study · Web platform
**Title:** EHS TRAINING PLATFORM ("EHS Training" in the accent)
**Line:** A custom training platform for EHS Guru, a safety-training company that teaches live classes on Zoom.

**Session pass · Case study 02** (on-air badge: ● Live since May 2026)
Client EHS Guru · Platform Web app, any browser · Industry Safety training (EHS) · Service Web platform design and development · Stack Next.js · Supabase · Zoom · Timeline About 2 months to live
Foot: Access: admin · trainer · learner · guest │ On our maintenance plan

**Marquee:** One-click classes ✱ Automatic attendance ✱ Every class recorded ✱ Engagement analytics ✱ Free webinars ✱ Email and WhatsApp reminders

## 01 · The brief

**Live classes, run on their own platform**

Run sheet: EHS Training Platform │ Client: EHS Guru │ Runtime: About 2 months to live

- **Cue 01 · What EHS Guru needed.** They teach live Zoom classes in batches of nearly 80 learners, with several batches running. They were on an off-the-shelf learning platform, paying for features they didn't use, under someone else's brand. They wanted a platform built for how they actually teach, on their own domain.
- **Cue 02 · What made it hard.** The class itself happens inside Zoom, so attendance and recordings have to be rebuilt from Zoom's notifications, which can arrive late, twice or out of order.
- **Cue 03 · What went live.** One platform for admins, trainers, learners and webinar guests: one-click Zoom classes, automatic attendance, every class recorded into a private library, engagement analytics, and free webinars that bring in new learners.

Stats: **76** pages across four portals · **52** API routes behind them · **~80** learners in a single live class · **4** audiences, each with its own view

## 02 · The platform

**Four audiences, one system**

Admins run the schedule, trainers teach, learners join from any browser, and guests come in through free webinars. Each sees only what they need.

- ADMIN · **One-click classes.** Schedule a session and the Zoom meeting is created for you. (`sessions.webp`)
- LEARNER · **Join from the portal.** Nothing to install, no Zoom sign-up. (`learner.webp`)
- ADMIN · **Everyone in one place.** Roles, batches and bulk CSV import. (`users.webp`)
- GUEST · **Free webinars.** Sign up without an account, get reminders, come back as a learner. (`webinars.webp`)

## 03 · Showtime

**What happens when a class goes live** (pinned `sessions.webp`, class clock follows the active cue)

- **Before · Reminders go out.** Email and WhatsApp reminders land at the right time in each learner's time zone.
- **T-0 · Admin clicks Start.** The Zoom meeting is ready, and it shows the trainer's name before they walk in.
- **Join · Learners join.** From the portal, in any browser. Their attendance starts counting the moment they click Join.
- **Live · Every minute counted.** Every join and leave is recorded in one step, so a duplicate notification from Zoom can never count twice.
- **Pause · Recording stops by accident.** It restarts on its own, and every segment of the class is kept, in order.
- **After · Class ends, video lands.** The best video file is copied into EHS Guru's own storage, published when the admin is ready, and watch time is checked on the server.

## 04 · The hard parts

**The reliability log**

Zoom sits at the centre of every class, and it doesn't always behave. These are the problems we designed for before a single paid class ran.

Log header: ehs-training-platform · status │ ● All classes recorded

- **Recording, during class · A recording stops mid-class.** Cause: trainers pause, or stop by accident, and Zoom splits the recording. Fix: recording restarts automatically, and every segment is kept in order. RESOLVED
- **Attendance, on join · "Who is 'John' in Zoom?"** Cause: people type their names differently when they join. Fix: matched by email first, then by name within the enrolled batch. RESOLVED
- **Session, on leave · A class that ends too early.** Cause: a learner joining early and leaving, or a trainer testing the link. Fix: the class ends only when it really ends. RESOLVED
- **Playback, library · Class videos loading slowly.** Fix: moved playback to a fast delivery network, measured before choosing: 0.12 → 0.90 MB/s. **7.5×** faster video playback (the page's one big number).

## Mid-page CTA

**Want a platform built like this?**
Start with a 30-minute call about your idea.
**Button:** Book a Discovery Call → `/#contact`

## 05 · Judgement

**What we left out, on purpose**

- **Cut 01 · Payments, kept offline.** EHS Guru's choice. It kept the build on teaching, not billing.
- **Cut 02 · Waiting for WhatsApp.** Email went live first. WhatsApp followed once Meta approved the templates, so launch was never held.
- **Cut 03 · A premium hosting tier.** Reminders run on external scheduling, so the platform stays on low-cost hosting.

## 06 · Result

**LIVE SINCE MAY 2026**, about 2 months after the build started.

- Classes: Runs EHS Guru's paid live classes, in batches of nearly 80.
- Brand: On their own domain, under their own name.
- After launch: Still on our monthly maintenance plan.

## Under the hood (open by default)

Architecture and the decisions behind it.

Flow: Any browser → Next.js on Vercel → 52 API routes → Supabase · 27 tables
Zoom events → Webhook, every event logged → Attendance in one step → Best recording picked → Client's own storage

- **Attendance counted inside the database, in one step.** Duplicate or late Zoom events never double count.
- **Recordings copied into EHS Guru's own storage.** Their video library doesn't depend on Zoom's.
- **Every Zoom event logged.** Any class's full history can be traced.
- **Access checked at three layers.** A fast check at the door, backed by an authoritative one.
- **Quality:** regression tests on the Zoom and recording logic, error monitoring, security headers and rate limits.

## 07 · In their words (hidden on production)

**What EHS Guru says**: placeholder video and quote until a real, approved testimonial exists.

## 08 · Conclusion (07 on production)

**What this build says about yours**, set as the end-of-show log (End of show │ ● Off air · still running):

- **i. We make the tools you already use dependable.** Zoom, email and WhatsApp stayed. We built the platform that makes them work together.
- **ii. We measure before we choose.** Video playback was tested both ways before we picked the faster one: 7.5×.
- **iii. We stay after launch.** EHS Guru is still on our maintenance plan, and the platform keeps improving alongside real classes.

The same goes for your app: **a fixed quote** after a one-week Discovery Sprint, **a new build every week**, and **code you own**.

**Buttons:** Book a Discovery Call → `/#contact` · See pricing → `/#pricing`

## Next project

**Poststeady Client Reporting Tool** ("Poststeady" in `#1A5BFA`)
Our own product: it turns the analytics files social media freelancers already download into a branded monthly report.
**Link:** See our work → `/#work` (switches to "View case study" → `/work/poststeady` once that page exists). The dashed "Poststeady screen, once captured" frame shows only off production.
