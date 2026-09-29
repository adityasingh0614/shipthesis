# Poststeady

> Matches the built page `/work/poststeady` (ported from the approved design `web/public/_design/poststeady.html`, 2026-09-28). World: "The Press Room" (`docs/design/case-study-brief.md` §4). Facts: `docs/case-studies/poststeady-raw.md`, [EVIDENCE]/[FOUNDER] only. Rules: no Poststeady prices, no user or revenue numbers, never "one developer", no payment-provider switch, no past bugs.
>
> **Hidden on production** while any placeholder frame exists (`hiddenOnProduction` in `web/src/content/case-studies.ts`). Every screen below is a dashed placeholder until captured from a demo account with made-up clients.

**Page accent:** `#1A5BFA` (art direction only; buttons stay green).

## Opening

**Kicker:** Case study · Own product
**Title:** POSTSTEADY ("Post" in the accent, no space)
**Line:** A web app that turns the analytics files social media freelancers already download into a branded monthly report for their clients.

**Proof · Case study 03** (crop marks at the four corners; dateline: ● Live · poststeady.com, links out)
Type Our own product · Platform Web app · Industry Social media marketing · Service Product design, build and launch · Stack Next.js · Supabase · Gemini

**Hero image:** placeholder: finished report, page 1, fanned over the upload screen (made-up client, once captured).

**Marquee:** Meta ✱ Instagram ✱ TikTok ✱ LinkedIn ✱ Google Ads ✱ GA4

## 01 · The brief

**One report, from whatever they export**

Assignment memo, same sheet shape as EHS's run sheet: a dark header (To: Every freelancer with a monthly report due │ From: Ship Thesis │ Re: Poststeady), then three labelled rows.

- **The story · What freelancers do.** Social media freelancers send each client a report every month, built from the numbers Meta, Instagram, TikTok, LinkedIn and Google Ads export.
- **The problem · What the month looked like.** One file per platform, none shaped the same, each with its own name for the same number. They all had to line up before anything could be said. Then the commentary was rewritten from scratch for every client, and the evening went on formatting. (Source: Poststeady repo `docs/02-audience-and-positioning.md`, the pain points already on poststeady.com.)
- **The gap · Why we built it.** Most social media tools bundle features freelancers don't need, like scheduling, live dashboards and team seats, and keep reporting for their premium plans: from about $50 a month, up to $200. A solo freelancer with three clients can't justify that. So the report gets made in Canva, or by pasting numbers into ChatGPT: slow, manual, and it looks it. (Founder, 2026-09-29.)
- **What ran · What we built.** Upload the exports, get a branded three-page report with a summary you can edit.

Stat cards under the sheet (verified in the Poststeady repo, 2026-09-29): **21** screens, app and website together · **3** pages in every finished report · **230** automated tests · **2** dated security audits. (175 stays the page's one big number, in section 02.)

## 02 · The centrepiece

**175 ways to say "Spend"**

Every platform names the same number differently. The report needs one name, so Poststeady does the translating.

Three header cells (Amount Spent, Cost, Total Spend) are struck through and merge into one clean cell, **Spend**. Then the page's one big number: **175** column names Poststeady matches to the right metric, across every platform it reads.

## 03 · The wizard

Lede (founder's design story, 2026-09-29): The first version asked freelancers to connect their social accounts. We cut it before it shipped: those accounts belong to their clients, who don't want to share logins, and platform rules change without warning. So the wizard works from the files each platform already gives you, and 175 known column names mean the matching step rarely needs a touch. It runs once a month, with nothing to set up.

**One report, start to finish** (pinned browser-frame placeholder; its label follows the active step). Steps match the product's real five-step wizard (`app/reports/new/step-1..5`), then sending.

1. **Pick the client and the month.** Their logo and brand colour come along automatically. (Setup step)
2. **Upload the exports.** The files each platform already gives you, no social-account logins. Rows, dates and platform are checked as they land. Add last month's too, for a real comparison. (Upload step)
3. **Confirm the matches.** Columns are pre-matched from 175 known names; you confirm or correct them. (Column matching screen)
4. **Check the numbers.** Every imported number, by platform. Fix any value, or hide what this client doesn't need. (Metrics review)
5. **Edit the summary.** The AI drafts it from the real figures; you edit any line before it goes out. (Review step)
6. **Send it.** A branded three-page PDF, or a link the client opens in any browser, with no login. (Finished report, page 1)

## 04 · The hard parts

**The fact-check desk**

The output is a document a freelancer's client reads. A silent mistake costs trust twice, so nothing ships unchecked.

- ✓ **Asked, not guessed · When a file could belong to two platforms.** Poststeady doesn't guess. You pick the platform in one click, so the report the client sees is accurate.
- ✓ **Facts only · What the AI is allowed to say.** It quotes only real figures and never states a cause it can't know. Jumps over 300% are flagged before it sees the data.
- ✓ **What you see prints · One design, three outputs.** The screen, the share link and the PDF render from the same design, so they can never drift apart.

## Mid-page CTA

**Want a product built like this?**
Start with a 30-minute call about your idea.
**Button:** Book a Discovery Call → `/#contact`

## 05 · Judgement

**Stories we spiked**

The newsroom word for a story cut on purpose, not one that ran out of time.

- **No social-account logins.** It was in the first version, and we cut it before launch. The accounts belong to the freelancer's clients, who don't want to share logins, and platform rules change without warning.
- **No YouTube auto-detection.** Its export looks identical to Meta's, and a wrong guess would corrupt a client's report.
- **No scheduling or live dashboard.** Scope stays tight on the report, not a broader analytics product.

## 06 · Result

**LIVE**, "Our own product, running today." (Centred against the facts. No build time: founder, 2026-09-29.)

- Live: At poststeady.com.
- Plans: Free for 2 reports a month, and Pro for unlimited.
- Sending: A branded PDF, or a link the client opens in any browser with no login.

## Under the hood (open by default)

How it works, in plain words, with the technical name underneath.

Files read on your own computer (Browser) → The app itself (Next.js on Vercel) → Each account sees only its own data (Supabase, row-level security) → Uploads stored safely (File storage)
AI drafts the summary (Gemini) → The PDF is printed from the page you approved (Headless Chrome) → PDF, or a no-login link (Share link) → Payments confirmed by the provider itself (Signed webhook)

- **Plan limits are counted on the server.** The free allowance can't be switched off from the browser.
- **One list of metrics, read by every screen.** The upload, the review and the finished report always agree.
- **Client text treated as data, never instructions.** Names and pasted notes can't redirect the AI.
- **The AI model was tested before it was chosen.** The fixed version answered 4 of 4 test runs in 2.4 seconds on average; the auto-updating version managed 3 of 4 at 15.7 seconds. So it stays fixed, and changes only when we decide.
- **Quality:** 230 automated tests and two dated security audits.

## 07 · In their words (placeholder)

**What freelancers say**: printed-page placeholder and a placeholder quote until a real, approved user quote exists.

## 08 · Conclusion (07 without the testimonial)

**What running our own product means for yours**, set as the back page (The back page │ Poststeady):

- **i. We live with what we ship.** Payments, support and two dated security audits: we carry the same weight your product will.
- **ii. We cut scope on purpose.** No social logins, no YouTube guessing, no scheduling. Three spiked stories, not three missed deadlines.
- **iii. We guard accuracy before polish.** The AI quotes only real figures. A number a client will see is checked before it looks good.

The same goes for your app: **a fixed quote** after a one-week Discovery Sprint, **a new build every week**, and **code you own**.

**Buttons:** Book a Discovery Call → `/#contact` · See pricing → `/#pricing`

## Next project

**ChromaLayer** ("Chroma" in ChromaLayer navy `#1c2450`)
Our own Windows app: seven colour controls for laptop screens that stay applied after every restart, sleep and sign-in.
**Link:** See our work → `/#work` (becomes "View case study" → `/work/chromalayer` once that page exists and is visible). Dashed "ChromaLayer screen, once captured" frame.

## Open items

- Screens from a demo account with made-up clients: upload step, column matching, metrics review, AI summary editor, finished report pages 1 and 2, dashboard, share page. Until then the page stays hidden on production.
- A real freelancer quote for section 07.
- Users or subscribers the founder is willing to share (none are shown).
