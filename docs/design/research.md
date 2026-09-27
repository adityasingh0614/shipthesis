# Design Research

**Version:** v1
**Last updated:** 2026-09-25
**Sources:** `docs/design/references/DESIGN-stripe.md`, `docs/design/references/DESIGN-apple.md`, https://www.flutteryourway.com/ (fetched as HTML 2026-09-25), `docs/competitors/flutter-your-way.md`

What we take from each reference, specifically, and what we must not copy. Our own direction is product precision: crisp, premium, trustworthy, very readable, light theme only, no gradients, green as the brand colour.

---

## Stripe

### Take
- **Type that scales its tracking.** Display sizes get negative letter-spacing that shrinks as the size shrinks (-1.4px at 56px → -0.2px at 20px). Body text stays at 0. This makes headlines feel dense and deliberate without shouting.
- **Tabular figures wherever money appears.** Every price uses `tnum` so digits line up. This matters on our `/pricing` page ($750, $6,000, $300 / $550 / $900) and in support plan tables.
- **One filled button per band.** The primary colour goes on the one filled CTA and on inline links, nowhere else. For us that means one green "Book a Discovery Call" per section.
- **The product is the illustration.** Every feature explanation sits next to a real product mockup, not an illustration. Our equivalent is real app screens inside phone frames.
- **Quiet, tinted shadows in two levels.** Level 1 is `0 1px 3px` at 8% for cards. Level 2 is `0 8px 24px` plus `0 2px 6px`, both at low opacity, for floating product panels. The shadows use a tint of the ink colour rather than grey, so they look clean.
- **Small, disciplined tokens.** An 8px spacing base with 2/4/12 sub-steps, a radius scale of 4 / 6 / 8 / 12 / 16, and hairline borders (`#e3e8ee`-style) on cards.
- **Motion:** the Stripe reference file doesn't document motion, so the motion rules in DESIGN.md are our own. We don't borrow them from this file.

### Don't copy
- The indigo/purple palette and deep navy ink.
- The **gradient mesh**. It's Stripe's signature, and we use no gradients at all.
- **Thin (300) display weights.** They're Stripe's typographic signature, and thin strokes lose readability on phones for a non-technical reader.
- Pill-shaped buttons. Both references use pills, so we won't.
- The dark featured pricing card, the cream "interlude" band and the dark dashboard composites. Those all come from Stripe's product, not ours.

---

## Apple

### Take
- **White space as a pedestal.** At least 64px of air above a section headline on desktop and 48–64px below. The nearest content stays at least 40px from the product image. One idea per section.
- **The device is the hero object.** A crisp phone, centred, with nothing competing. Apple uses exactly one drop shadow in the whole system (`3px 5px 30px` at 22%), and only under a product resting on a surface. We take the idea: one "device shadow", used only under phones.
- **Reading pace.** Body text at 17px with ~1.47 line height reads rather than scans. That suits founders reading prices and terms on a phone.
- **A short weight ladder.** 400 for body and 600 for headlines, with no in-between weights, keeps hierarchy obvious.
- **Surface change instead of borders.** White ↔ off-white bands mark sections without lines.
- **Press feedback.** A small scale-down on press (`scale(0.95)` in the reference; we'll use a gentler 0.98) is the only button micro-interaction.
- **No decorative gradients.** Atmosphere comes from the product imagery, which matches our no-gradient rule.

### Don't copy
- **Near-black tiles and the black global nav.** We're light theme only.
- **Action Blue and the "Apple tight" SF Pro look.** Our identity is green, with our own typeface.
- **Frosted-glass (`backdrop-filter`) bars.** They're costly to render on low-end phones, and they read as Apple.
- **Full-bleed photography and one-viewport-per-idea density.** Our founders need prices, timelines and terms, so our sections carry more information.
- **Pill CTAs.**
- **Apple's own device renders or anything implying Apple's endorsement.** We use a neutral phone frame. The App Store and Google Play badges follow each store's badge guidelines.

---

## Flutter Your Way

What the fetch could see: the page came back as HTML only. The hero is the headline "Stop Planning. Start Launching. We Build Apps That Go Live Fast", a subline, and two buttons ("View Portfolio", "Get A Quote"). The markup has no hero image; only the logo is there.

The story is told as you scroll:
1. The hero promise.
2. Three service cards, each with an animated GIF of an interface in use (MVP, full-cycle, custom).
3. A five-step process with icon illustrations: discovery call → design → development → testing → deployment.
4. Project mockups.
5. Testimonials with avatars and ratings.

There are no animation libraries in the markup. The motion is GIFs. Colours, type and any scroll effects couldn't be seen without rendering the page in a browser.

### Take
- **An idea-to-app arc down the page.** The promise comes first, then how it gets built, then real shipped work. We tell the same arc, but through our weekly-build promise.
- **Real interfaces in motion instead of stock art.** Moving screens show that the product exists.
- **One destination for every CTA.** All their buttons go to the same booking link, and ours already do.

### Don't copy
- Their wording: "Stop planning", "Start launching", "go live fast".
- **GIFs for motion.** They're heavy, can't be paused and ignore reduced-motion settings. We'll use lightweight CSS or video with a static poster instead.
- A generic five-icon process strip. Ours is three stages, shown with real screens.
- "Coming Soon" projects, star ratings, follower counts and "AI-powered" framing.

---

## What this means for Ship Thesis

1. **Hero object:** one phone with real app screens that fills in week by week, then launches on the App Store. This combines Apple's device as hero, Stripe's "show the real product" and Flutter Your Way's idea-to-app arc, told through our own promise: a working build on your phone every week.
2. **Identity:** a green accent (no purple, no Action Blue), no gradients, rounded-rectangle buttons (no pills), and our own type pairing. Light theme only.
3. **Discipline from Stripe:** tabular prices, one filled CTA per band, a tight token scale, quiet tinted shadows.
4. **Calm from Apple:** generous white space, 17px body text, one device shadow, section changes marked by surface colour.
5. **Performance first:** no GIFs, no blur, no heavy libraries. Motion must never slow the page down.

---

## Changelog

- v1 (2026-09-25): First research notes from the Stripe and Apple reference files and Flutter Your Way's homepage.
