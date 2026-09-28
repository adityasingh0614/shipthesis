# Schema Plan

**Version:** v3
**Last updated:** 2026-09-25
**Built from:** `docs/sitemap.md` (v9), `docs/copy/*.md`, `.agents/product-marketing.md` (v13)

Plan only. No code yet. All structured data is JSON-LD, one `@graph` per page, server-rendered.

---

## Rules

- **Mark up only what the page shows.** Every price, question and name in the schema must appear as visible text on that page.
- **No `Review` or `AggregateRating`.** We have no testimonials on record.
- **No client prices.** Offers describe our own published prices only.
- **Don't mark up ChromaLayer.** It's one line on Home, in beta, with no page of its own.
- **Placeholders block launch.** The logo and the founder details have to be real before any schema ships.
- **FAQPage expectations:** Google shows FAQ rich results only for government and health sites, so don't expect FAQ snippets in Google results. We add FAQPage anyway, because AI engines (ChatGPT, Perplexity, Claude) use it to pull out answers.

---

## Site-wide: Organization (defined once, referenced everywhere)

Defined in full on Home with `@id: https://shipthesis.com/#organization`. Every other page references that `@id` instead of repeating it.

| Property | Value | Source |
|---|---|---|
| `@type` | `Organization` (optionally also `ProfessionalService`) | — |
| `name` | Ship Thesis | brief, Product Overview |
| `url` | https://shipthesis.com/ | brief, Product Overview |
| `logo` | [LOGO URL TBD] | open-items §3 |
| `email` | hello@shipthesis.com | contact.md §4 |
| `address` | `addressCountry: IN` only (no street address) | brief, Booking & Location |
| `areaServed` | United States, Europe | brief, Booking & Location |
| `founder` | `Person`: [FOUNDER NAME TBD], `jobTitle` [FOUNDER ROLE TBD] | about.md §1 |
| `sameAs` | [SOCIAL PROFILE URLS TBD], if any | — |
| `knowsAbout` | Flutter app development, MVP app development, iOS, Android | services.md |

Also on Home: `WebSite` with `name` and `url`, and `publisher` set to the Organization `@id`. No search box.

---

## Per page

| Page | URL | Organization | Service | FAQPage | BreadcrumbList |
|---|---|---|---|---|---|
| Home | `/` | Full definition | — | — | — (root page) |
| Work | `/work` | Reference | — | — | Home › Work |
| Assess Yourself | `/work/assess-yourself` | Reference | — | — | Home › Work › Assess Yourself |
| Safety training platform | `/work/safety-training-platform` | Reference | — | — | Home › Work › Safety training platform |
| Poststeady | `/work/poststeady` | Reference | — | — | Home › Work › Poststeady |
| Services | `/services` | Reference | Yes, 3 services | Yes, 6 questions | Home › Services |
| Pricing | `/pricing` | Reference | Yes, the same 3 services with offers | Yes, 5 questions | Home › Pricing |
| About | `/about` | Reference, plus `AboutPage` | — | — | Home › About |
| Contact | `/contact` | Reference, plus `ContactPage` | — | — | Home › Contact |
| Privacy | `/privacy` | Reference | — | — | Home › Privacy |

---

## Service (Services and Pricing)

Three `Service` nodes. Each has `provider` set to the Organization `@id`, `areaServed` set to United States and Europe, and `serviceType` given below. The Services page describes each one. The Pricing page adds `offers`.

| Service | `serviceType` | `offers` (Pricing page only) |
|---|---|---|
| Discovery Sprint | App scoping and planning | `Offer`: `price` 750, `priceCurrency` USD. Description: 1 week, credited toward the build |
| MVP Build | MVP app development | `Offer` with `priceSpecification`: `minPrice` 6000, `priceCurrency` USD ("from $6,000") |
| Ship & Support | App maintenance and support | 3 `Offer`s, each a `UnitPriceSpecification` with `minPrice` and `unitText` MONTH: App Care 300, Product Care 550, Full Care 900 |

- Use `minPrice` for every "from" price, never a fixed `price`, because the real number is a quote.
- Leave out the 30-day warranty and the 30/40/30 payment split. They're terms, not prices, and they stay as page text.
- Don't mark up the $6,000 example as its own offer.

---

## FAQPage

`mainEntity` is a list of `Question` items, each with an `acceptedAnswer`. Question and answer text must match the page word for word, without the "→" link text.

**Services (6):** What does an app cost? · How long does it take to build an app? · Do I own the code? · What happens after launch? · Can we work across time zones? · Why Flutter?
- "Can we work across time zones?" is included. Its answer: "Yes, we work with founders in the US and Europe from our base in India. We book calls during your working hours, wherever you are. Day-to-day questions go through Slack or email, with a reply within one business day. And because a new build reaches your phone every week, you can check progress on your own schedule."

**Pricing (5):** How much does it cost to build an app? · How do payments work? · What if I want to change something mid-build? · What if I don't continue after the Discovery Sprint? · What does support cost after launch?

---

## BreadcrumbList

- Every page except Home.
- `itemListElement`: `position` 1 is Home, then each level, all with full absolute URLs.
- Names match the visible nav labels: Home, Work, Services, Pricing, About, Contact.
- Case studies use the case study name as the last item.
- Show visible breadcrumbs on the case study pages so the markup matches what's on screen. They're optional on the top-level pages.

---

## Optional, later (not in this plan's scope)

- **`CreativeWork` on case studies:** add only if it's useful later, with `about`, `creator` set to the Organization, and the client as `sourceOrganization` (EHS Guru only, since the client can be named).
- **`SoftwareApplication` for Poststeady:** this belongs on poststeady.com, not on the studio site.

---

## Before launch

1. Fill in the logo and the founder details.
2. Validate every page in the Google Rich Results Test and the Schema.org validator.
3. After any price or FAQ change, update the schema in the same commit.

---

## Changelog

- v3 (2026-09-25): Organization name (Ship Thesis), URL (https://shipthesis.com/) and email filled in.
- v2 (2026-09-25): Time-zone question added to the Services FAQPage (answer is final).
- v1 (2026-09-25): First plan: Organization (with WebSite on Home), Service with offers, FAQPage and BreadcrumbList, per page.
