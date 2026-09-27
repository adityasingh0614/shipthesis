# Sitemap

**Version:** v10
**Last updated:** 2026-09-26

Launch scope only — pages we can fill with real content today. See reasoning for omitted pages at the bottom.

## Page Hierarchy

```
Home (/)
├── Work (/work)
│   ├── Access Yourself (/work/access-yourself)
│   ├── EHS Training Platform (/work/safety-training-platform)
│   ├── Poststeady (/work/poststeady)
│   └── ChromaLayer (/work/chromalayer)
├── Services (/services)
├── Pricing (/pricing)
├── Blog (/blog) — planned, placeholder until posts exist
├── About (/about)
└── Contact (/contact)
```

## URL Map

| Page | URL | Purpose | Primary keyword | Main CTA |
|---|---|---|---|---|
| Home | `/` | Establish who we are + the fear-reduction pitch (fixed scope, weekly builds, you own the code); route to Work/Services | mobile app development for startups | Book a Discovery Call |
| Work (index) | `/work` | Proof hub — list all three case studies (no filter) | — (no clean seed match) | Book a Discovery Call |
| Access Yourself | `/work/access-yourself` | Lead case study: client Flutter app, problem→outcome | — (project-specific, not a seed term) | Book a Discovery Call |
| EHS Training Platform | `/work/safety-training-platform` | Case study: EHS Guru's web platform, live | — (project-specific) | Book a Discovery Call |
| Poststeady | `/work/poststeady` | Full case study: own live product, proves we ship and maintain our own SaaS | — (project-specific; could target "Poststeady" branded search) | Try Poststeady / Book a Discovery Call |
| Services | `/services` | Explain the three-stage engagement (Discovery Sprint → MVP Build → Ship & Support), scope/cost/timeline honesty | MVP app development (secondary: Flutter app development) | Book a Discovery Call |
| Pricing | `/pricing` | Every price in one place: Discovery Sprint, MVP Build, payments, scope changes, warranty, support plans | cost to build an app / MVP | Book a Discovery Call |
| About | `/about` | Founder-led framing — why a small studio building its own products is the differentiator; objection handling | app development for founders | Book a Discovery Call |
| Contact | `/contact` | Cal.com booking embed; sets expectations for the call and the Discovery Sprint | hire a mobile app developer | Book a Discovery Call |

**Note on keywords:** 6 of the 7 SEO seeds now map to a page. "cost to build an app / MVP" is the primary keyword on `/pricing`. "how long does it take to build an app" stays as FAQ content within `/services`. "Flutter app development" is a secondary keyword on `/services` (subheading of the cross-platform block) — Flutter is the default mobile stack (per `.agents/product-marketing.md`).

**ChromaLayer:** case study at `/work/chromalayer` (launched; raw material in `docs/case-studies/chromalayer-raw.md`). Link its product page, never the installer.

## Navigation

**Header nav** (5 items + CTA): `Work · Services · Pricing · About · Contact` — CTA button: **Book a Discovery Call** (rightmost, links to `/contact`)

**Footer:**
- **Studio** — Work, Services, Pricing, About (Blog added here once it has three real posts)
- **Get in touch** — Contact, hello@shipthesis.com
- **Legal** — Privacy *(the Cal.com booking collects personal data, so a privacy policy is required; Terms omitted — no real terms to publish yet)*

## Internal Linking

- Every case study card on `/work` links to its own page; every case study page links back to `/work` and forward to `/contact`.
- `/services` links out to 1–2 relevant case studies per stage (e.g. MVP Build → Access Yourself as mobile proof; EHS Training Platform and Poststeady for backend and web).
- `/services` links to `/pricing` from each stage and from the FAQ cost answer; `/pricing` links back to `/services` for what each stage includes.
- `/about` links to `/work` ("judge us by live work, not headcount" — ties directly to the differentiation point in the marketing doc) and to `/contact`.
- `/contact` ("What happens next") and the Home final CTA link to `/pricing`.
- `/` links to `/work`, `/services`, `/pricing`, `/about`, `/contact` — no orphans, every page reachable in 1 click from Home.

## /services FAQ section (not a separate page)

Covers founder objections within the page:
- What will it cost? → $750 Discovery Sprint (credited toward the build), MVP from $6,000, fixed quote after the sprint, support plans from $300/month. Links to `/pricing`.
- How long does it take to build an app? → Sprint: 1 week. Typical MVP: 6–10 weeks.
- Do I own the code? → Yes: your GitHub, your store and cloud accounts, from day one.
- What happens after launch? → 30 days of free fixes for in-scope bugs, then support plans from $300/month.
- Can we work across time zones? → Based in India, working with US and Europe founders; calls booked in the founder's working hours, Slack or email with a one-business-day reply.

## /pricing content (final pricing, from the brief)

- **Discovery Sprint:** 1 week, $750, credited toward the build if the founder continues. Deliverables: written scope, feature list ("version one" / "later"), user flows or wireframes, stack plan, fixed quote with timeline and milestones. The founder keeps everything if they don't continue.
- **MVP Build:** from $6,000, typically 6–10 weeks. Payments: 30% at start, 40% at the mid-build milestone, 30% at store submission.
- **Scope changes:** small tweaks absorbed; bigger additions quoted before work starts, or swapped for something of equal size.
- **After launch:** 30 days of free fixes for in-scope bugs.
- **Support plans from $300/month:** App Care (from $300), Product Care (from $550), Full Care (from $900). No public hourly rate; work beyond a plan is quoted per request, or the client moves up a plan.
- **Rules:** never mention what any existing client pays. No discounts or "founding client" offers.

---

## Pages not added, with reasoning

- **Standalone FAQ page** — cost, timeline, ownership, after-launch and time-zone questions are covered as an FAQ section within `/services`.
- **Team page** — no bios/headcount to show, and the marketing doc explicitly says to judge by live work "not headcount" — a team page would cut against that positioning anyway.
- **Blog** — now planned (see above). Home has a placeholder blog section, hidden until three real posts exist; a full blog automation will be set up later. Not in the header nav until it has content.
- **ChromaLayer case study**: now a page (launched, 2026-09-26).
- **Terms page** — no real terms drafted yet; add alongside Privacy once available.

## Changelog

- v10 (2026-09-26) — Blog planned at /blog: Home shows a placeholder blog section (hidden until three real posts); blog automation later. Not in the header nav yet.
- v9 (2026-09-25): Footer email is hello@shipthesis.com.
- v8 (2026-09-25) — Time-zone FAQ line updated; no overlap-hours placeholder.
- v7 (2026-09-25) — Home final CTA and /contact link to /pricing.
- v6 (2026-09-25) — Added `/pricing` (primary keyword: cost to build an app / MVP) with the final pricing; added to header nav and footer. Services FAQ list expanded to cost, timeline, ownership, after launch and time zones. Secondary keyword is "Flutter app development". Contact uses a Cal.com embed.
- v5 (2026-09-24) — Work index has no filter.
- v4 (2026-09-24) — EHS Guru can now be named on the Safety training platform case study.
- v3 (2026-09-24) — Final project list. Case studies: Access Yourself, Safety training platform (/work/safety-training-platform, replaces EHS LMS), Poststeady. Removed /work/pawgloo, EHS Guru and NIEV.
- v2 (2026-09-24) — Case studies now Access Yourself, Pawgloo (lead, mobile), EHS LMS (replaces Train Platform), Poststeady. Removed /work/chromalayer (one-line mention only). EHS Guru confirmed not a case study. CTA is "Book a Discovery Call" everywhere.
- v1 (2026-09-23) — Initial launch sitemap: Home, Work index + 4 case studies, Services (single page), About, Contact.
