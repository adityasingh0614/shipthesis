=== PAGE 1 ===
Ship Thesis: Blog Automation Spec
Draft v1 · November 2, 2026 · Written to be handed to Antigravity
1. What this system does
One command researches what US founders are asking right now, writes the
keyword.doc, drafts pages from a fixed template, makes matching cover images, checks
everything against Ship Thesis rules, and queues posts for review. The goal is to be found
in Google, Bing, ChatGPT, Claude, Perplexity and Gemini and to win the first US client.
No one can guarantee a ranking or a citation. So every page carries a visibility sheet that
measures what actually happens, and the system adjusts from the results.
Terms used in this document
Blog: a founder-decision page that answers one question.
Block: a technical blueprint page (architecture diagram, schema, implementation).
SEO: search engines (Google, Bing).
AEO: answer engines (featured answers, zero-click answers).
GEO: generative engines (AI assistants that write answers and cite sources).
2. Hard rules (Antigravity must enforce all of them)
No pricing, price ranges, cost, budget or hourly-rate content anywhere. Topics with
price intent are rejected at research time.
Timelines are written only as "in weeks." No week numbers or ranges.
The 3:4:3 payment split is allowed (it is a percentage structure, not a price) and applies
to every project.
No team members are named anywhere. Content is attributed to "Ship Thesis."
Do not claim or imply US client work. There are no US clients yet.
Do not name client companies without written permission.
Voice: plain, direct, first-person plural ("we"). No hype words.
Graphics: light/white theme.
Every claim about Ship Thesis must come from the claims ledger (section 4). If a
needed claim is missing, stop and ask.
Ship Thesis: Blog Automation Spec
Page 1 of 11


=== PAGE 2 ===
Never invent trends, statistics, quotes or sources. Every topic and every number needs
a source URL and a date, or it is marked unverified and excluded.
3. Pipeline and commands
Status flow for every page: researched → briefed → drafted → lint pass → reviewed →
scheduled → live → tracked.
Command
What it does
Output
blog:research
Finds trending founder
questions, scores them,
builds the keyword.doc
keyword.doc (.docx plus .md mirror)
blog:brief
<slug>
Pulls what currently ranks
and gets cited, finds the
gap, assigns a ledger claim
/briefs/<slug>.md
blog:draft
<slug>
Writes the page from the
template
/content/blog/<slug>.mdx or
/content/blocks/<slug>.mdx
blog:image
<slug>
Renders the cover and
social images from the one
image template
/public/covers/<slug>-*.png
blog:lint
<slug>
Runs every rule in section 10
Pass/fail report
blog:review
Lists drafts waiting for
human review
Review queue
blog:publish
<slug>
Builds, adds schema,
updates sitemap, pings
IndexNow, queues a
LinkedIn post draft
Live page
blog:track
Runs the prompt bank
across assistants and
updates visibility sheets
visibility-report.md
Ship Thesis: Blog Automation Spec
Page 2 of 11


=== PAGE 3 ===
4. Claims ledger (starter, Adiya to confirm before first use)
The generator may state facts about Ship Thesis only from this list.
Ship Thesis builds MVPs for founders: web, mobile apps and SaaS.
Payment split is 3:4:3 on every project.
The founder gets a working build to test on their own phone every week (Friday
builds).
Code lives in the client's own GitHub from day one.
Offer: a 1-week Discovery Sprint.
Offer: a free 20-minute assessment call.
Stack: Next.js, Supabase/PostgreSQL, Flutter, TypeScript.
Proof: AssessYourself, an offline-first mobile examination app.
Rule of thumb we use: a first MVP is cut down to about three screens.
Reviews and testimonials: to be added after they go live on the site (in a few days).
Not allowed: prices, week counts, team names, client names without permission, US
client claims.
5. Research: finding trending topics
Sources (record URL and date for every item used)
Reddit: r/startups, r/SaaS, r/Entrepreneur, r/indiehackers, r/FlutterDev, r/nextjs,
r/supabase (read through search or the official API, within terms of service).
Hacker News, Indie Hackers, founder newsletters, YC content.
Google Trends (US), Google People Also Ask and autocomplete, Bing related searches.
GitHub issues and Stack Overflow for technical Block topics.
Live prompt tests: ask ChatGPT, Claude, Perplexity and Gemini the way a US founder
would, and record which sources they cite.
Product Hunt discussions may be read for topic ideas only. It is not a distribution
channel.
Method
1. Collect candidate questions from the last 30 days.
Ship Thesis: Blog Automation Spec
Page 3 of 11


=== PAGE 4 ===
2. Merge duplicates into one exact target prompt per topic, phrased the way a founder
would type it.
3. Auto-reject price-intent topics, job-seeker topics, consumer-app topics, and topics
where Ship Thesis has no ledger claim and no real experience.
4. Score the rest out of 100.
Scoring
Score 70 or more: queue. 60 to 69: hold for next run. Below 60: reject, with the reason
logged.
6. keyword.doc format
The research command produces this document on every run. It is a Word-compatible file
with a Markdown copy.
Part A: Ranked topics
Part B: Visibility sheet per topic (filled at brief time, updated by blog:track )
Factor
Points
What it measures
US founder intent
25
Is the asker a founder who might hire an MVP
builder?
Demand and trend
20
Activity in the last 30 days, repeated across at
least two sources
Winnability
20
Existing answers are thin, outdated or generic
Claim fit
20
A verified ledger claim or a real project detail fits
the topic
Timeliness
15
Tied to something current (a tool change, a launch,
a common new question)
#
Topic
Exact target prompt
Page type
Score
Sources (URL, date)
Ledger claim used
Slug
Ship Thesis: Blog Automation Spec
Page 4 of 11


=== PAGE 5 ===
Part C: Publishing schedule. The queue for the next 14 days, with date, slug and status.
Part D: Rejected topics. Topic, score and reason (for example "price intent").
Part E: Run log. Date, sources reached, sources that failed, topics found, topics queued.
7. Optimization layers and scorecard
Each layer has five checks worth 5 points each, for 25 points per layer and 100 in total. A
page needs 85 or more, and no layer below 18, to be published.
SEO (search engines)
1. Title 60 characters or fewer with the main phrase, meta description 140 to 160
characters, one H1, a clean slug.
2. Indexable: canonical tag, in the sitemap, returns 200, no noindex. Submitted to Google
Search Console and Bing, plus an IndexNow ping.
3. At least 3 internal links to related pages and 3 links from them back, plus breadcrumbs.
4. Valid JSON-LD (Article, Organization, BreadcrumbList, and FAQPage when the page
has an FAQ), Open Graph tags, image alt text.
5. Static HTML, fast and stable on mobile (Core Web Vitals pass).
Field
Content
Target prompts
3 to 5 prompts this page should win
SEO check
Score from section 7
AEO check
Score from section 7
GEO check
Score from section 7
Assistants check
Score from section 7
Baseline
For ChatGPT, Claude, Perplexity and Gemini: is Ship
Thesis mentioned (yes/no) and who is cited
instead
Re-test dates
7, 14 and 30 days after publishing, with results
Ship Thesis: Blog Automation Spec
Page 5 of 11


=== PAGE 6 ===
AEO (answer engines)
1. The H1 is the question, or a plain-language claim.
2. A direct answer in the first two sentences, roughly 40 to 60 words, that makes sense
on its own if quoted.
3. An FAQ with 3 to 5 real follow-up questions, each answered in one to three sentences.
4. At least one list, table or step sequence.
5. Key terms defined in one line on first use.
GEO (generative engines)
1. At least one claim only Ship Thesis can make, taken from the ledger.
2. One real detail from a project: a decision, a trade-off, a bug or a screen.
3. Every number or factual claim has a source, or is labeled as our own experience.
4. The company is named "Ship Thesis" consistently, with the same one-line description
everywhere.
5. An off-site plan for the page's idea: where it will also be mentioned (a LinkedIn post, a
directory listing, a community answer, a review snippet). Mentions on other sites
matter for recommendation-style prompts.
Assistants (ChatGPT, Claude, Perplexity, Gemini)
1. robots.txt allows the search and user-fetch bots of each assistant. Check each
vendor's current documentation for bot names (for example OAI-SearchBot, ChatGPT-
User, PerplexityBot, Claude's search and user bots, Googlebot, Bingbot). Allowing or
blocking training bots is a separate policy choice.
2. The full content is readable without JavaScript (verify with a plain curl ).
3. The page is indexed in Bing as well as Google. This is a cheap hedge, because several
assistants lean on web search.
4. Before publishing, 3 to 5 target prompts are run across the assistants and logged as the
baseline.
5. Referral tracking is on: GA4 sources for chatgpt.com, perplexity.ai, claude.ai and
similar, plus UTM tags on links we place elsewhere.
What we cannot control. Which sources an assistant picks changes by model, by day and
by how the question is phrased. The scorecard raises the odds. The tracking tells us
whether it worked.
Ship Thesis: Blog Automation Spec
Page 6 of 11


=== PAGE 7 ===
8. Page templates
Blog template (900 to 1,400 words, never padded)
1. H1 as the question.
2. Answer box: the two-sentence direct answer.
3. Short version: three bullets.
4. Body: three to five H2 sections phrased as sub-questions, with one table or checklist.
5. "How Ship Thesis does it": ledger claims only, plus the real project detail.
6. FAQ: three to five questions.
7. CTA: the free 20-minute assessment call or the 1-week Discovery Sprint. No prices.
8. Footer: last-updated date, author shown as "Ship Thesis."
Block template
1. The problem in one sentence, then the answer.
2. Architecture diagram (Mermaid).
3. Schema or types.
4. Implementation steps with code that has been run and tested.
5. Failure modes and edge cases.
6. When to use it and when not to.
7. CTA: "Need this built into your MVP?" with the free assessment call.
9. Image template (one template, reused everywhere)
Sizes: 1200×630 (blog cover and Open Graph), plus a LinkedIn variant (1200×627 or
1080×1080). Same template, resized grid.
Layout (three zones):
Top-left: a small category chip (MVP, SaaS, Mobile, BLOCK).
Left and center: the headline, at most 8 words over 2 to 3 lines, large.
Right: one simple vector illustration or mini-diagram built from basic shapes.
Bottom: Ship Thesis wordmark on the left, shipthesis.com on the right.
Ship Thesis: Blog Automation Spec
Page 7 of 11


=== PAGE 8 ===
Style: light/white background, one accent color, dark text, generous spacing. The exact
accent color, typeface and illustration style are decided after Adiya's reference images are
reviewed.
Rules: no stock photos, no faces, no prices, no client logos without permission, no small
text.
Blocks use the same template. Only the chip changes to BLOCK, and the illustration area
shows a mini architecture diagram.
How to build it: an HTML/SVG template with variables ( headline , category ,
illustration_id ), rendered to PNG with a script (for example Playwright). This keeps
text sharp and consistent. AI image generators tend to garble text, so use them, if at all,
only for background elements.
Reference images: used only to extract layout, spacing, type mood and color feel. Write a
short inspiration-notes file describing what is taken. Never copy a composition, logo or
illustration.
Approval step: generate three sample covers in the template, Adiya picks one, then
freeze it as template-v1 . After that, every blog and block uses it.
10. Quality gates ( blog:lint )
Blocking (page cannot ship):
Any $ , "USD", "price", "cost", "budget", "cheap" or "per hour" in the page.
Any numeric timeline, such as "6 weeks" or "4 to 8 weeks."
Any team member name.
A claim about Ship Thesis that is not in the ledger.
A statistic without a source and date.
The direct answer is not in the first two sentences.
Missing or invalid schema, broken links, or an image without alt text.
Duplicate title or slug.
Hype phrases (for example "game-changing," "cutting-edge," "in today's fast-paced
world").
Block pages: code that does not compile or run.
Warnings: over 1,600 words, no list or table, average sentence over 22 words.
Ship Thesis: Blog Automation Spec
Page 8 of 11


=== PAGE 9 ===
11. Human review (5 to 10 minutes per page)
1. Every statement about Ship Thesis is true.
2. Add or confirm one real project detail.
3. Read the first two sentences. They should be worth quoting.
4. Check the CTA and the cover image.
5. Approve, or send back with a note.
12. Posting cadence (the "how many a day" setting)
The default is deliberately conservative. Quality and review time are the limit, not the tool.
{
  "blog":  { "max_per_day": 1, "days": ["Mon", "Wed", "Fri"] },
  "block": { "max_per_week": 2 },
  "global_cap_per_day": 2,
  "min_score": 70,
  "max_review_queue": 3,
  "never_fill_quota_with_weak_topics": true
}
Ramp:
Weeks 1 and 2: 3 blogs per week.
Weeks 3 and 4: up to 4 blogs and 1 block per week.
From week 5: up to 1 blog per weekday and 2 blocks per week, only while the review
queue stays at 3 or fewer and enough topics score 70 or more.
If fewer topics pass the threshold, publish fewer. Never publish to hit a number.
13. Tracking and refresh
Prompt bank ( prompts.json ): 50 to 100 prompts grouped by intent, each mapped to a
page, refreshed monthly.
Weekly run ( blog:track ): run the prompts across ChatGPT, Claude, Perplexity and
Gemini, logged out, with search on where available. Record mentioned (yes/no), cited
URL, and which competitors appear. API results can differ from the consumer apps, so
note which was used.
Ship Thesis: Blog Automation Spec
Page 9 of 11


=== PAGE 10 ===
Weekly report ( visibility-report.md ): pages live, indexed in Google and Bing,
prompts where Ship Thesis appears, new citations, referral sessions from assistants,
competitors that appear most.
Refresh rule: not cited after 30 days, rewrite the answer box and add outside
mentions. Cited, add FAQ answers for the follow-up questions people ask. Refresh the
topic list every month.
14. Seed topics (starting ideas, not research)
blog:research must replace or extend these with sourced, current topics.
Blogs
How 3:4:3 milestone payments protect founders on an MVP
How to make sure you own your code when hiring an MVP agency
What a weekly working build on your phone looks like
What to cut from your first MVP (the three-screen rule)
Flutter vs React Native for an MVP
Next.js with Supabase for a SaaS MVP
How to vet a dev studio: red flags before you sign
What a 1-week Discovery Sprint is and what you get
What to prepare before you talk to an MVP developer
AssessYourself case study (after reviews are on the site)
Blocks
Next.js and Supabase: multi-tenant auth with row-level security
Stripe subscription webhooks that never miss an event
Flutter offline sync with SQLite
Deterministic PDF extraction into a typed schema
Ship Thesis: Blog Automation Spec
Page 10 of 11


=== PAGE 11 ===
15. Build prompt for Antigravity (copy and paste)
You are building a blog automation pipeline for shipthesis.com (Next.js, static output,
content as MDX in the repo). Read the whole spec first.
Create: /content/claims-ledger.md , /config/blog.config.json (section 12),
/config/lint-rules.json (section 10), /prompts/prompts.json ,
/templates/blog.mdx , /templates/block.mdx , /templates/cover/template-
v1.html , and scripts for the commands in section 3.
Rules: never invent trends, statistics or quotes. Every topic needs a source URL and
date. If a source cannot be fetched, mark it unverified and exclude it from scoring.
Only state facts about Ship Thesis that are in the claims ledger, and stop and ask if
one is missing. Enforce every hard rule in section 2.
Work in phases and show me the output after each one:
1. blog:research and the keyword.doc only.
2. The image template: three sample covers for approval, using my reference images
as inspiration only.
3. Drafting, the scorecard and lint.
4. Publishing, schema, IndexNow and tracking.
16. Still needed from Adiya
The reference images (they have not been shared yet).
Accent color and typeface preferences, or "choose from the references."
Confirmation of the claims ledger in section 4.
Confirmation of the /blog and /blocks routes.
A decision on whether LinkedIn posts are drafted for manual posting or posted
automatically.
The date the reviews go live on the site.
Ship Thesis: Blog Automation Spec
Page 11 of 11
