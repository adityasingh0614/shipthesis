# Motion components plan

**Version:** v1
**Last updated:** 2026-09-26

Referenced from each section of `docs/design/home-brief.md`. Which motion.dev "Motion UI" pattern goes where on the site. Motion UI's registry is paid (needs a token), so each one is hand-built with the free `motion` library in `web/src/components/motion-ui/`, matching the behaviour described. Every component must respect reduced motion.

## Site-wide

| Component | Where | What it does | Status |
|---|---|---|---|
| 29 Shrink Header | Header (all pages) | Header condenses from tall and transparent to compact and solid on scroll; hides on scroll down, returns on scroll up (never hides near the top, while the phone menu is open, or while Our work's pinned carousel is driving the scroll) | Built (`shrink-header.tsx`, `nav-hide-lock.ts`) |
| 08 Arrow Link | Every "→" text link (See our work, See full pricing, etc.) | Trailing arrow slides forward on hover | To build |

## Home (in build order, `docs/design/home-brief.md`)

| Section | Component | What it does | Status |
|---|---|---|---|
| 1. Hero | 34 Stagger Reveal | Headline rises line by line, subheading and buttons follow | To build |
| 1. Hero animation | Exploded phone (custom, Motion) | Four isometric layers drop and dissolve into one phone, "Shipped" pops, hold, float apart; one 7s master clock; scroll compresses the stack; reduced motion shows it assembled | Built (`home/hero/HeroVisual.tsx`) |
| 2. Our work | 10 Carousel Controls (dots only, no arrows) + scroll-driven rail | Desktop: section pins with its heading visible; scrolling picks the card and a spring slides it fully in (one full card at a time, never half cards); animated dots show position and jump to a card. Phones, short screens and reduced motion: native swipe row with the same dots | Built (`carousel-controls.tsx`, `home/OurWork.tsx`) |
| 2. Our work | 24 Screenshot Scroll Reveal | Project screenshot tilts upright and scales in on scroll | Waiting for real screens |
| 3. How it works | 34 Stagger Reveal | Step cards fade up in sequence as they come into view (once) | Built (`home/HowItWorks.tsx`) |
| 4. What we build | Coded animated scene per card + a hover lift (no 3D tilt) | One 5s loop each: pieces build in with a stagger, hold briefly, then float back apart in the same stagger order (mirroring the build), settling exactly where they started so the loop wraps with nothing to mask, no fade, no snap; paused off-screen, finished still with reduced motion. On hover the card lifts 4px with a green border, no 3D tilt (that fought with the animated scenes). Every visual keeps its outer frame (window, card, phone body) always on screen and animates only what's inside it, so the canvas never goes fully blank between loops. Cross-platform: code types in, lines draw to iOS and Android phones, live checks pop. Native: chip powers up, camera/sensor/location/performance wire in, Swift and Kotlin land. Custom solutions: pieces fly into a business-shaped outline, it turns solid, check. SaaS: a web app builds its dashboard, billing/account/growth tiles float in. AI (read left to right): a document is read line by line, flows into a green AI core with a sparkle, and three results land: Summary, Reply, Automation | Built (`home/visuals/*`, shared timing in `visuals/shared.tsx`) |
| 5. Pricing | 28 Segmented Toggle + 03 Border Beam | Get it built / Keep it running toggle: green pill slides on a spring; cards swap with a short staggered fade, rise and blur; on hover a short green light runs around the card border (a moving stroke, not a gradient) | Built (`home/Pricing.tsx`) |
| 6. Testimonials | 34 Stagger Reveal | Cards rise in on scroll, staggered by column then row (once); static with reduced motion | Built with placeholders (`home/Testimonials.tsx`), hidden on the live site until real quotes |
| 7. From the blog | 34 Stagger Reveal | Cards rise in on scroll, staggered left to right (once); static with reduced motion. Hover: card lifts 4px with a green border, matching What we build | Built with placeholders (`home/FromTheBlog.tsx`), hidden on the live site until 3 posts |
| 8. Final CTA | — | Removed 2026-09-28: `home/FinalCta.tsx` deleted. Every "Book a Discovery Call" now goes to `#contact`; Home's closing section is the FAQ + Get in touch | Removed |
| 9. FAQ | None (native disclosure) | Native `<details>`/`<summary>` accordion, bordered icon-row cards, chevron rotates 180° on open, open card/icon border turn green, answer fades in; first item open by default, top 5 of 9 shown, "Show 4 more questions" toggle for the rest; no JS beyond the toggle | Built (`home/Faq.tsx`) |
| 10. Get in touch (Home's closing section) | None | Static: heading, one card (Email, WhatsApp, Location), Email us button | Built (`home/Contact.tsx`) |

## Other pages

| Page | Component | What it does | Status |
|---|---|---|---|
| /contact | — | Removed 2026-09-28: `app/contact/page.tsx` deleted. A standalone page felt wrong for a single-scroll site; "Get in touch" is now Home's own closing section (`#contact`) | Removed |
| /pricing | 03 Border Beam | Beam around each plan card (no "recommended" tier) | To build |
| /work/* case studies | 24 Screenshot Scroll Reveal | Hero screenshot tilts upright and scales in | To build |

## Not used

Add to Basket, Command Palette, Confetti, Copy Button, Hold to Confirm, Swipe Actions, Toast Stack, Terminal Session, Sparkline, Progress Bar and the rest: no job on a studio marketing site. Revisit only if a page needs one.
