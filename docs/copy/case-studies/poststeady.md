# Poststeady

> **Superseded 2026-09-28.** This copy follows the retired shared template. The page's plan now lives in `docs/design/case-study-brief.md` §4 ("The Press Room"). Rewrite this file to match once the page is built.

**Page accent:** `#1A5BFA` (project colour; use it as this page's primary accent, buttons stay green). See `docs/design/home-brief.md` §2.

Our own product. It turns the analytics files social media freelancers already download into a branded monthly report for their clients.

**Own product · Web app · Next.js, Supabase · 11 weeks · Live**

## The challenge

Social media freelancers send each client a report every month. The numbers come from Meta, Instagram, TikTok, LinkedIn and Google Ads. Each platform exports them in its own format, with its own name for the same figure. We built Poststeady to turn those files into one clear report a client can read.

## What we built

- Upload of the files freelancers already export, with no need to connect anyone's social accounts.
- Automatic column matching that recognises 175 different column names across platforms.
- A three-page branded PDF report, plus a share link clients open without logging in.
- An AI-written summary the freelancer can edit, with month-over-month comparisons.
- Free and Pro plans, with payments built in.

## The hard part we solved

- **The right number on the right platform.** When a file could belong to more than one platform, Poststeady asks instead of guessing, so the report the client sees is accurate.
- **An AI summary that sticks to the facts.** It quotes only real figures and never states a cause it can't know. Unusual jumps are flagged before the AI sees the data.
- **Plan limits that run themselves.** The free plan's monthly allowance is counted by the database and resets on the 1st, with no manual work.

## Result

- Live at [poststeady.com](https://www.poststeady.com).
- Built in 11 weeks, with a working first version at the end of week 1.
- Free plan (2 reports a month) and Pro plan ($10.99/month) both live.
- [RESULT TBD: users, paying subscribers, time saved per report]

## Screens

Capture every screen from a demo account with made-up data. Do not reuse the current landing-page images: they show real client data.

1. Upload step with file checks.
2. Column matching screen.
3. Finished report, page 1, with a made-up client logo and brand color.
4. Dashboard with the reports queue.

## CTA

**Heading:** Want an app built like this?
> Start with a 30-minute call about your idea.

**Button:** Book a Discovery Call
**Links:** Try Poststeady → *(poststeady.com)* · Next: Assess Yourself → *(/work/assess-yourself)* · Back to all work → *(/work)*
