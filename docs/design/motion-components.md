# Motion components plan

**Version:** v1
**Last updated:** 2026-09-26

Referenced from each section of `docs/design/home-brief.md`. Which motion.dev "Motion UI" pattern goes where on the site. Motion UI's registry is paid (needs a token), so each one is hand-built with the free `motion` library in `web/src/components/motion-ui/`, matching the behaviour described. Every component must respect reduced motion.

## Site-wide

| Component | Where | What it does | Status |
|---|---|---|---|
| 29 Shrink Header | Header (all pages) | Header condenses from tall and transparent to compact and solid on scroll; hides on scroll down, returns on scroll up (never hides near the top or while the phone menu is open) | Built (`shrink-header.tsx`) |
| 08 Arrow Link | Every "→" text link (See our work, See full pricing, etc.) | Trailing arrow slides forward on hover | To build |

## Home (in build order, `docs/design/home-brief.md`)

| Section | Component | What it does | Status |
|---|---|---|---|
| 1. Hero | 34 Stagger Reveal | Headline rises line by line, subheading and buttons follow | To build |
| 1. Hero animation | Undecided | Built last, separate decision | Open |
| 2. Our work | 10 Carousel Controls (dots only, no arrows) + scroll-driven rail | Desktop: section pins with its heading visible; scrolling picks the card and a spring slides it fully in (one full card at a time, never half cards); animated dots show position and jump to a card. Phones, short screens and reduced motion: native swipe row with the same dots | Built (`carousel-controls.tsx`, `home/OurWork.tsx`) |
| 2. Our work | 24 Screenshot Scroll Reveal | Project screenshot tilts upright and scales in on scroll | Waiting for real screens |
| 3. How it works | 34 Stagger Reveal | Step cards fade up in sequence as they come into view (once) | Built (`home/HowItWorks.tsx`) |
| 4. What we build | Coded animated scene per card (Tilt Card dropped) | One 6s loop each that builds the picture, holds, then the whole scene fades out as one layer and stays hidden while it resets and the loop wraps, so the restart is never on screen; paused off-screen, finished still with reduced motion. Cross-platform: code types in, lines draw to iOS and Android phones, live checks pop. Native: chip powers up, camera/sensor/location/performance wire in, Swift and Kotlin land. Custom solutions: pieces fly into a business-shaped outline, it turns solid, check. SaaS: a web app builds its dashboard, billing/account/growth tiles float in. AI (read left to right): a document is read line by line, flows into a green AI core with a sparkle, and three results land: Summary, Reply, Automation | Built (`home/visuals/*`, shared timing in `visuals/shared.tsx`) |
| 5. Pricing | 03 Border Beam | Arc of light sweeps the border of the price card | To build |
| 6. Testimonials | 34 Stagger Reveal | Grid items stagger in | To build (section hidden until real quotes) |
| 7. From the blog | 34 Stagger Reveal | Post cards stagger in | To build (section hidden until 3 posts) |
| 8. Final CTA | 15 Magnetic Pull | Button gently follows the pointer, springs back | To build |

## Other pages

| Page | Component | What it does | Status |
|---|---|---|---|
| /pricing | 03 Border Beam | Beam around each plan card (no "recommended" tier) | To build |
| /work/* case studies | 24 Screenshot Scroll Reveal | Hero screenshot tilts upright and scales in | To build |

## Not used

Add to Basket, Command Palette, Confetti, Copy Button, Hold to Confirm, Swipe Actions, Toast Stack, Terminal Session, Sparkline, Progress Bar and the rest: no job on a studio marketing site. Revisit only if a page needs one.
