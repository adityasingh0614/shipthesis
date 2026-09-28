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
Type Our own product · Platform Web app · Industry Social media marketing · Service Product design, build and launch · Stack Next.js · Supabase · Gemini · Timeline 11 weeks

**Hero image:** placeholder: finished report, page 1, fanned over the upload screen (made-up client, once captured).

**Marquee:** Meta ✱ Instagram ✱ TikTok ✱ LinkedIn ✱ Google Ads ✱ GA4

## 01 · The brief

**One report, from whatever they export**

Assignment memo. To: Every freelancer with a monthly report due │ From: Ship Thesis │ Re: Poststeady, 11 weeks

- **The story.** Social media freelancers send each client a report every month. The numbers come from Meta, Instagram, TikTok, LinkedIn and Google Ads.
- **The problem.** Each platform exports them in its own format, with its own name for the same figure.
- **What ran.** Upload the exports, get a branded three-page report with a summary you can edit.

## 02 · The centrepiece

**175 ways to say "Spend"**

Every platform names the same number differently. The report needs one name, so Poststeady does the translating.

Three header cells (Amount Spent, Cost, Total Spend) are struck through and merge into one clean cell, **Spend**. Then the page's one big number: **175** column names Poststeady matches to the right metric, across every platform it reads.

## 03 · The wizard

**One report, start to finish** (pinned browser-frame placeholder; its label follows the active step)

1. **Download what you already have.** The exports each platform already gives you. No social-account logins. (Upload step)
2. **Upload, checked on arrival.** Row counts, the date range and the platform, detected as the files land. (Upload step)
3. **Confirm the matches.** Column names are pre-filled from 175 known aliases; you confirm or correct them. (Column matching screen)
4. **Check the numbers.** Headline metrics are editable before anything is written or sent. (Metrics review)
5. **The summary, drafted for you.** An AI-written summary you edit, with month-over-month comparisons. (AI summary editor)
6. **Send it.** A branded PDF, or a share link the client opens without logging in. (Finished report, page 1)

## 04 · The hard parts

**The fact-check desk**

The output is a document a freelancer's client reads. A silent mistake costs trust twice, so nothing ships unchecked.

- ✓ **Asked, not guessed · When a file could belong to two platforms.** Poststeady asks instead of guessing, so the report the client sees is accurate.
- ✓ **Facts only · What the AI is allowed to say.** It quotes only real figures and never states a cause it can't know. Jumps over 300% are flagged before it sees the data.
- ✓ **What you see prints · One design, three outputs.** The screen, the share link and the PDF render from the same design, so they can never drift apart.

## Mid-page CTA

**Want a product built like this?**
Start with a 30-minute call about your idea.
**Button:** Book a Discovery Call → `/#contact`

## 05 · Judgement

**Stories we spiked**

The newsroom word for a story cut on purpose, not one that ran out of time.

- **No social-account logins.** Works for clients whose accounts can't be connected, and keeps working when platforms change their rules.
- **No YouTube auto-detection.** Its export looks identical to Meta's, and a wrong guess would corrupt a client's report.
- **No scheduling or live dashboard.** Scope stays tight on the report, not a broader analytics product.

## 06 · Result

**11 WEEKS**, with a working first version at the end of week 1. (Centred against the facts.)

- Live: At poststeady.com.
- Plans: Free and Pro, both live.
- Tested: 221 automated tests.

## Under the hood (open by default)

Flow: Browser, files read client-side → Next.js on Vercel → Supabase · RLS everywhere → File storage
Gemini drafts the summary → Headless Chrome prints the reviewed page → PDF or share link → Payments · signed webhook

- **Plan limits enforced in the database.** The free quota can't be bypassed from the browser.
- **One list of metrics everything reads from.** It replaced three copies that had drifted apart.
- **Client text treated as data, never instructions.** Names and pasted notes can't redirect the AI.
- **The AI model is pinned.** 4 out of 4 successes in testing, averaging 2.4 seconds.
- **Quality:** 221 automated tests and two dated security audits.

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

**ChromaLayer** ("Chroma" in near-ink `#030d26`)
Our own Windows app: seven colour controls for laptop screens that stay applied after every restart, sleep and sign-in.
**Link:** See our work → `/#work` (becomes "View case study" → `/work/chromalayer` once that page exists and is visible). Dashed "ChromaLayer screen, once captured" frame.

## Open items

- Screens from a demo account with made-up clients: upload step, column matching, metrics review, AI summary editor, finished report pages 1 and 2, dashboard, share page. Until then the page stays hidden on production.
- A real freelancer quote for section 07.
- Users or subscribers the founder is willing to share (none are shown).
