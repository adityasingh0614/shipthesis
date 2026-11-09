# Sitemap

**Version:** v11
**Last updated:** 2026-09-28

Launch scope only — pages we can fill with real content today. See reasoning for omitted pages at the bottom.

## Page Hierarchy

```
Home (/)  (Our work = #work, Get in touch = #contact)
├── Assess Yourself (/work/assess-yourself)
├── EHS Training Platform (/work/safety-training-platform)
├── Poststeady (/work/poststeady)
├── ChromaLayer (/work/chromalayer)
├── Services (/services)
├── Pricing (/pricing)
├── Blog (/blog) — planned, placeholder until posts exist
└── About (/about)
```

## URL Map

| Page | URL | Purpose | Primary keyword | Main CTA |
|---|---|---|---|---|
| Home | `/` | Establish who we are + the fear-reduction pitch (fixed scope, weekly builds, you own the code); route to Work/Services | mobile app development for startups | Book a Discovery Call |
| Work (index) | `/work` | Proof hub — list all three case studies (no filter) | — (no clean seed match) | Book a Discovery Call |
| Assess Yourself | `/work/assess-yourself` | Lead case study: client Flutter app, problem→outcome | — (project-specific, not a seed term) | Book a Discovery Call |
| EHS Training Platform | `/work/safety-training-platform` | Case study: EHS Guru's web platform, live | — (project-specific) | Book a Discovery Call |
| Poststeady | `/work/poststeady` | Full case study: own live product, proves we ship and maintain our own SaaS | — (project-specific; could target "Poststeady" branded search) | Try Poststeady / Book a Discovery Call |
| Services | `/services` | Explain the engineering process, weekly builds, and fixed milestones | MVP app development | Book a Discovery Call |
| About | `/about` | Founder-led framing — why a small studio building its own products is the differentiator; objection handling | app development for founders | Book a Discovery Call |
| Contact | `#contact` | Cal.com booking embed; sets expectations for the free 20-minute call | hire a mobile app developer | Book a Discovery Call |

## Navigation

**Header nav** (5 items + CTA): `Work (/#work) · Services (/#services) · Process (/#process) · FAQ (/#faq) · Contact (/#contact)` — CTA button: **Book a Discovery Call** (rightmost, links to `/#contact`)

**Footer:**
- **Studio** — Work, Services, Process, About
- **Get in touch** — Contact, hello@shipthesis.com
- **Legal** — Privacy, Terms

## Internal Linking

- Every case study card on `/work` links to its own page; every case study page links back to `/work` and forward to `#contact`.
- `/about` links to `/work` ("judge us by live work, not headcount") and to `#contact`.
- `/` links to `/work`, `/about`, `#contact` — no orphans.

## /services FAQ section (not a separate page)

Covers founder objections within the page:
- What will it cost? → Fixed-scope milestones (30% / 40% / 30%). Zero open-ended hourly billing.
- How long does it take to build an app? → In weeks, not months.
- Do I own the code? → Yes: your GitHub, your store and cloud accounts, from day one.
- What happens after launch? → 30 days of free fixes for in-scope bugs, with ongoing maintenance support options.
- Can we work across time zones? → Based in India, working with US and Europe founders; calls booked in the founder's working hours, Slack or email with a one-business-day reply.

---

## Pages not added, with reasoning

- **Standalone FAQ page** — cost, timeline, ownership, after-launch and time-zone questions are covered as an FAQ section within `/services`.
- **Team page** — no bios/headcount to show, and the marketing doc explicitly says to judge by live work "not headcount" — a team page would cut against that positioning anyway.
- **Blog** — now planned (see above). Home has a placeholder blog section, hidden until three real posts exist; a full blog automation will be set up later. Not in the header nav until it has content.
- **ChromaLayer case study**: now a page (launched, 2026-09-26).
- **Terms page** — no real terms drafted yet; add alongside Privacy once available.

## Changelog

- v11 (2026-09-28) — No `/work` index (Home's Our work carousel is the index) and no `/contact` page (Get in touch is Home's closing section, `#contact`). Case study pages follow `docs/design/case-study-brief.md`. The URL map rows for Work and Contact below are historical.
- v10 (2026-09-26) — Blog planned at /blog: Home shows a placeholder blog section (hidden until three real posts); blog automation later. Not in the header nav yet.
- v9 (2026-09-25): Footer email is hello@shipthesis.com.
- v8 (2026-09-25) — Time-zone FAQ line updated; no overlap-hours placeholder.
- v7 (2026-09-25) — Home final CTA and /contact link to /pricing.
- v6 (2026-09-25) — Added `/pricing` (primary keyword: cost to build an app / MVP) with the final pricing; added to header nav and footer. Services FAQ list expanded to cost, timeline, ownership, after launch and time zones. Secondary keyword is "Flutter app development". Contact uses a Cal.com embed.
- v5 (2026-09-24) — Work index has no filter.
- v4 (2026-09-24) — EHS Guru can now be named on the Safety training platform case study.
- v3 (2026-09-24) — Final project list. Case studies: Assess Yourself, Safety training platform (/work/safety-training-platform, replaces EHS LMS), Poststeady. Removed /work/pawgloo, EHS Guru and NIEV.
- v2 (2026-09-24) — Case studies now Assess Yourself, Pawgloo (lead, mobile), EHS LMS (replaces Train Platform), Poststeady. Removed /work/chromalayer (one-line mention only). EHS Guru confirmed not a case study. CTA is "Book a Discovery Call" everywhere.
- v1 (2026-09-23) — Initial launch sitemap: Home, Work index + 4 case studies, Services (single page), About, Contact.
