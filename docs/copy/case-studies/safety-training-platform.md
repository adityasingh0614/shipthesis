# Safety training platform

> **Superseded 2026-09-28.** This copy follows the retired shared template. The page's plan now lives in `docs/design/case-study-brief.md` §3 ("The Session Console"). Rewrite this file to match once the page is built.

**Page accent:** `#00674C` (project colour; use it as this page's primary accent, buttons stay green). See `docs/design/home-brief.md` §2.

A custom training platform for EHS Guru, a safety-training company that teaches live classes on Zoom.

**Client · Web app (desktop and mobile browsers) · Next.js, Supabase · Live since May 2026 · Live**

## The challenge

EHS Guru teaches live classes on Zoom, in batches of nearly 80 learners, with several batches running at once. They were on an off-the-shelf learning platform, paying for features they didn't use, under someone else's brand. They wanted a platform built for how they actually teach, on their own domain.

## What we built

- One-click classes: the admin schedules a session, the Zoom meeting is created and learners get an email.
- Joining from the learner portal in any browser, with nothing to install and no extra sign-up.
- Automatic attendance, with minutes present for every learner.
- A private video library: every class is recorded, the admin publishes it when ready, and watch progress is tracked per learner.
- Free webinar pages that bring in new learners, with automatic reminders.

## The hard part we solved

- **Every class recorded, start to finish.** If a trainer pauses or accidentally stops the recording, it restarts automatically and every part is kept in order.
- **Attendance on the right person.** People type their names differently in Zoom. The platform matches each attendee to the enrolled learner, so attendance reports stay accurate.
- **Videos that load 7.5× faster.** We moved playback to a fast delivery network and measured the difference before choosing it.

## Result

- Live since May 2026.
- Runs EHS Guru's paid live classes, in batches of nearly 80 learners.
- Runs on EHS Guru's own domain and brand.
- The client stayed on after launch with a monthly maintenance plan.
- [RESULT TBD: cost saved against the old platform, total learners, classes run]

## Screens

Use a demo dataset. EHS Guru's branding can be shown.

1. Admin sessions list. ⚠ EHS Guru branding; real trainer names.
2. Recordings library. ⚠ EHS Guru branding; thumbnails may show faces.
3. Engagement analytics. ⚠ EHS Guru branding; real learner names and attendance, so demo data only.
4. Learner video player with progress. ⚠ EHS Guru branding; class content may show real people.

## CTA

**Heading:** Want an app built like this?
> Start with a 30-minute call about your idea.

**Button:** Book a Discovery Call
**Links:** Next: Poststeady → *(/work/poststeady)* · Back to all work → *(/work)*
