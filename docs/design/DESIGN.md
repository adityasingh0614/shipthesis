---
version: 8
name: Ship Thesis
description: Product precision for a mobile app studio. Light theme only, one deep green for every action, a bright green reserved for highlights and the launch moment, Phudu headlines over the system UI font, real app screens in neutral phone frames, and one scroll-driven hero that builds an app week by week. No gradients, no dark mode, no pills.

colors:
  primary: "#0A7F55"          # deep green: buttons, links, focus ring
  primary-hover: "#076343"
  accent: "#24B47E"           # bright green: highlights, icons, badges, launch moment. Never text or button fill on white
  tint: "#EAF7F1"             # light green surface for tags and highlighted rows
  ink: "#14201A"
  muted: "#445048"
  canvas: "#FFFFFF"
  surface: "#F0F4F1"
  hairline: "#E3E8E6"
  on-primary: "#FFFFFF"

typography:
  font-heading: "'Phudu', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
  font-body: "system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji'"
  font-mono: "'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
  display:   { family: heading, weight: 700, size: "clamp(2.25rem, 1.6rem + 2.9vw, 3.5rem)",  lineHeight: 1.08, letterSpacing: "0" }
  h1:        { family: heading, weight: 700, size: "clamp(2rem, 1.55rem + 2vw, 3rem)",        lineHeight: 1.1,  letterSpacing: "0" }
  h2:        { family: heading, weight: 700, size: "clamp(1.75rem, 1.5rem + 1.1vw, 2.25rem)", lineHeight: 1.15, letterSpacing: "0" }
  h3:        { family: heading, weight: 700, size: "clamp(1.3125rem, 1.25rem + 0.3vw, 1.5rem)", lineHeight: 1.25, letterSpacing: "0" }
  h4:        { family: heading, weight: 700, size: "1.125rem", lineHeight: 1.3, letterSpacing: "0" }
  lead:      { family: body, weight: 400, size: "clamp(1.125rem, 1.08rem + 0.2vw, 1.25rem)", lineHeight: 1.5 }
  body:      { family: body, weight: 400, size: "1.0625rem", lineHeight: 1.55 }
  small:     { family: body, weight: 400, size: "0.9375rem", lineHeight: 1.5 }
  caption:   { family: body, weight: 400, size: "0.875rem",  lineHeight: 1.45 }
  button:    { family: body, weight: 600, size: "1.0625rem", lineHeight: 1 }
  label:     { family: mono, weight: 500, size: "0.75rem",   lineHeight: 1.3, letterSpacing: "0.04em", transform: uppercase }
  price:     { family: mono, weight: 500, numeric: "tabular-nums" }

spacing: { 1: 4px, 2: 8px, 3: 12px, 4: 16px, 5: 24px, 6: 32px, 7: 48px, 8: 64px, 9: 96px, 10: 128px }

rounded: { sm: 6px, md: 10px, lg: 16px, xl: 24px, device: 44px, device-screen: 34px }

shadows:
  card: "0 1px 2px rgba(20,32,26,0.05), 0 1px 3px rgba(20,32,26,0.06)"
  float: "0 8px 24px rgba(20,32,26,0.08), 0 2px 6px rgba(20,32,26,0.04)"
  device: "0 28px 56px -16px rgba(20,32,26,0.28)"

motion:
  fast: 120ms
  base: 200ms
  reveal: 320ms
  ease-out: "cubic-bezier(0.2, 0, 0, 1)"
  ease-standard: "cubic-bezier(0.4, 0, 0.2, 1)"

breakpoints: { sm: 480px, md: 768px, lg: 1024px, xl: 1280px }

components:
  button-primary:   { background: "{colors.primary}", text: "{colors.on-primary}", typography: "{typography.button}", rounded: "{rounded.md}", padding: "15px 22px", minHeight: 48px }
  button-primary-hover: { background: "{colors.primary-hover}" }
  link:             { text: "{colors.primary}", underline: "on hover and focus; always underlined inside body copy" }
  card:             { background: "{colors.canvas}", border: "2px solid {colors.hairline}", rounded: "{rounded.lg}", padding: "20px → 32px (md+)" }
  tag:              { background: "{colors.tint}", text: "{colors.primary}", typography: "{typography.caption}", rounded: "{rounded.sm}", padding: "4px 8px" }
  badge-live:       { background: "{colors.accent}", text: "{colors.ink}", typography: "{typography.label}", rounded: "{rounded.sm}", padding: "4px 8px" }
  build-label:      { text: "{colors.muted}", typography: "{typography.label}" }
  phone-frame:      { frame: "{colors.ink}", bezel: 10px, rounded: "{rounded.device}", screenRadius: "{rounded.device-screen}", shadow: "{shadows.device}", aspectRatio: "9 / 19.5" }
---

# Ship Thesis Design System

> **Status (2026-09-26): pre-build reference, not binding.** The site is now designed with Impeccable and the taste skill, which write the binding design system from the finished build. Only the founder's pinned brand commitments (listed in `docs/design/home-brief.md` section 0) carry over as rules. The week-by-week hero described below is dropped.

## Overview

**Direction: product precision.** The site should feel crisp, premium and trustworthy, and read easily on a phone. Every visual choice serves one argument: *we ship real apps, one visible week at a time.*

- **Light theme only.** No dark mode, no dark sections, no `prefers-color-scheme` switch.
- **No gradients, anywhere.** No backgrounds, buttons, text, borders or overlays. Depth comes from surface colour, hairlines, three shadows and the phone itself.
- **Green is the brand.** The deep green `{colors.primary}` means "you can act here". The bright green `{colors.accent}` means "this is shipped or live".
- **The phone is the hero object.** Real app screens sit in a neutral phone frame, with nothing decorative competing.
- **Mobile first.** Every rule below is written for a 360px-wide phone first, then scaled up with `min-width` queries.

Sources and reasoning: `docs/design/research.md`.

---

## Colour

### Tokens

| Token | Hex | Role |
|---|---|---|
| `primary` | `#0A7F55` | Filled buttons, text links, focus ring, active states |
| `primary-hover` | `#076343` | Hover and pressed state of `primary` |
| `accent` | `#24B47E` | Highlights, decorative icons, the "Live" badge fill, the hero's launch moment |
| `tint` | `#EAF7F1` | Tag backgrounds, highlighted table rows, soft callout fills |
| `ink` | `#14201A` | All headings and body text |
| `muted` | `#445048` | Secondary text, captions, build labels |
| `canvas` | `#FFFFFF` | Default page background |
| `surface` | `#F0F4F1` | Alternate section band and the footer, a visibly darker shade of the same off-white so the band change actually reads (`canvas`/`surface` are two tones of one neutral, the way Stripe alternates `canvas`/`canvas-soft` and Apple alternates white/parchment) |
| `hairline` | `#E3E8E6` | 2px card and panel borders; 1px hairline dividers (nav, footer, FAQ rows) |

### Contrast (WCAG 2.2)

| Pair | Ratio | Use allowed |
|---|---|---|
| `primary` on `canvas` | 5.02:1 | ✅ Body text, links, buttons (AA) |
| `canvas` text on `primary` | 5.02:1 | ✅ Button labels (AA) |
| `primary` on `surface` | 4.67:1 | ✅ Links on grey bands (AA) |
| `primary` on `tint` | 4.56:1 | ✅ Tag text (AA) |
| `primary-hover` on `canvas` | 7.30:1 | ✅ |
| `ink` on `canvas` / `surface` / `tint` | 16.78 / 15.59 / 15.24:1 | ✅ AAA |
| `muted` on `canvas` / `surface` / `tint` | 8.44 / 7.61 / 7.67:1 | ✅ AA |
| `ink` on `accent` | 6.32:1 | ✅ Badge label on bright fill (AA) |
| `accent` on `canvas` | 2.66:1 | ❌ Not for text. Below the 3:1 needed for meaningful icons |
| `canvas` text on `accent` | 2.66:1 | ❌ Never white text on bright green |

### Rules

1. **`primary` is the only action colour.** Every filled button, text link and focus ring uses it. Nothing else is deep green.
2. **`accent` is never text, and never a button background on white.** It goes on:
   - the fill of the "Live" badge, always with `ink` text;
   - decorative icons and marks that sit next to a text label (the label carries the meaning);
   - highlight marks: a 3px underline under a key word, the checkmark at launch;
   - the hero's launch moment.
3. **An icon that carries meaning on its own** (no text next to it) uses `primary`, not `accent`, so it meets 3:1.
4. **One filled `primary` button per band.** Secondary actions are text links.
5. **Sections alternate `canvas` ↔ `surface`.** The colour change is the divider. Don't add a border between bands.
6. **Status colours:** the site has no error or warning states outside the Cal.com embed, which inherits the brand colour. Don't add red, yellow or orange.

---

## Typography

### Families

| Role | Family | Why |
|---|---|---|
| Headings (h1–h4, display) | **Phudu**, weight **700** only | A bold, blocky geometric display face. Distinct from Stripe's Sohne, Apple's SF Pro and the ubiquitous Inter. Used at heading sizes only, it isn't a body face |
| Body, buttons, UI | **System UI stack** | Native, very readable on every phone, and costs zero bytes to load |
| Build labels and prices | **JetBrains Mono**, 500 | "Week 3", "Build 12", "$750". Phudu has no confirmed tabular figures, so every price runs in the mono, not the heading font |

### Loading (performance rules)

- **Phudu:** self-hosted, static weight 700 only (not the full variable file), Latin subset, `font-display: swap`. Preload it only on pages whose H1 is above the fold, which is all of them. Budget: at most 40 KB, verified against the real file at build, since Phudu's glyphs run heavier than a typical grotesque.
- **Fallback metrics:** give the Phudu fallback `size-adjust`, `ascent-override` and `descent-override` values that match the real font, so the swap causes no layout shift. Phudu's x-height and cap-height run larger than the system stack, so this matters more here than it would for a conventional face.
- **JetBrains Mono:** self-hosted `woff2`, subset to digits, capital letters, currency and punctuation (dollar sign, comma, period, slash, dash, space) needed for prices and build labels. `font-display: optional` for build labels, `swap` for prices, since a price must never render blank. Never preloaded. Budget: at most 14 KB.
- **No other webfonts.** No icon fonts.

### Scale (mobile → desktop, fluid between 360px and 1280px)

| Token | Phone | Desktop | Line height | Tracking | Use |
|---|---|---|---|---|---|
| `display` | 36px | 56px | 1.08 | 0 | Home H1 only |
| `h1` | 32px | 48px | 1.10 | 0 | H1 on every other page |
| `h2` | 28px | 36px | 1.15 | 0 | Section headings |
| `h3` | 21px | 24px | 1.25 | 0 | Card titles, FAQ questions |
| `h4` | 18px | 18px | 1.30 | 0 | Small headings, plan names |
| `lead` | 18px | 20px | 1.50 | 0 | Supporting line under an H1 |
| `body` | 17px | 17px | 1.55 | 0 | All paragraphs |
| `small` | 15px | 15px | 1.50 | 0 | Card body, footer links |
| `caption` | 14px | 14px | 1.45 | 0 | Captions, tags, fine print. The minimum size for body-font text |
| `label` | 12px | 12px | 1.30 | +0.04em, uppercase | Mono build labels only |

### Rules

- **Two weights on the page:** Phudu 700 and the system font at 400 (and 600 for buttons and inline `<strong>`). No other Phudu weight, no italics for emphasis. Phudu is a blocky face, so it carries no negative letter-spacing anywhere; tight tracking makes its letterforms collide.
- **Body text is 17px everywhere**, including on phones. Never smaller than 14px for anything a reader needs.
- **Measure:** paragraphs max `65ch`. Headlines max `20ch` on desktop, so they break into two or three balanced lines (`text-wrap: balance` on headings, `text-wrap: pretty` on paragraphs).
- **Prices are always set in JetBrains Mono**, weight 500, with `font-variant-numeric: tabular-nums`, not in the heading font. Phudu's numeral set has no confirmed tabular figures, so this is the default, not a fallback.
- **Headings are `ink`, never green.** Links inside headings are not allowed.
- **Headings are uppercase** (Phudu), matching the home brief. The hero H1 may be two-tone: first phrase in a light grey, the rest in `ink`. Otherwise no all-caps outside the mono `label`.

---

## Layout

### Spacing

Base unit **4px**. Tokens: 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128.

| Context | Phone | Tablet (md) | Desktop (lg+) |
|---|---|---|---|
| Page side gutter | 16px | 24px | 32px |
| Section padding (top and bottom) | 64px | 80px | 96–128px |
| Headline → first content | 24px | 32px | 32px |
| Between cards | 16px | 24px | 24px |
| Card padding | 20px | 24px | 32px |
| Space around a phone mockup | ≥ 24px | ≥ 32px | ≥ 40px |

### Grid

| Breakpoint | Columns | Gutter | Container |
|---|---|---|---|
| Phone (< 768px) | 4 | 16px | Full width minus 16px side gutters |
| Tablet (≥ 768px) | 8 | 24px | Full width minus 24px gutters |
| Desktop (≥ 1024px) | 12 | 24px | Max 1200px, centred |

- Breakpoints (`min-width`): 480 · 768 · 1024 · 1280.
- **No horizontal scrolling at any width**, including tables and phone mockups. Wide tables become stacked cards below 768px.
- Card grids: 1 column on phones, 2 at 768px, 3 at 1024px. The case study grid tops out at 3, and the support plans at 3.

---

## Shape

| Token | Value | Use |
|---|---|---|
| `sm` | 6px | Tags, badges, inputs, table cells |
| `md` | 10px | Buttons |
| `lg` | 16px | Cards, pricing panels, FAQ items |
| `xl` | 24px | Large feature panels, screenshots outside a phone frame |
| `device` | 44px | Outer corner of the phone frame |
| `device-screen` | 34px | Screen corner inside the frame |

- **No pills.** Buttons are rounded rectangles (`md`). This keeps us distinct from Stripe and Apple, which both use pill buttons.
- One radius per component, applied to all four corners.

---

## Elevation

| Level | Value | Use |
|---|---|---|
| Flat | none | Default. Sections, text, buttons, nav |
| `card` | `0 1px 2px` + `0 1px 3px`, ink at 5–6% | Cards on hover (desktop only), the sticky nav once the page scrolls |
| `float` | `0 8px 24px` + `0 2px 6px`, ink at 8% / 4% | Floating panels next to the phone (the hero's build-log card) |
| `device` | `0 28px 56px -16px`, ink at 28% | **Only** under phone mockups |

- Shadows are tinted with `ink` (`rgb(20,32,26)`), never pure black.
- **No shadow on buttons or text.** No inner shadows. No glow.
- Cards rest flat with a 2px `hairline` border, heavy enough to read at a glance without a shadow. Elevation is a hover response, not a default.

---

## Components

### Buttons

**Primary: "Book a Discovery Call"**
- `primary` fill, white label, system font 17px / 600, radius `md`, padding 15px 22px, minimum height 48px.
- **Phones (< 480px):** full width inside hero and CTA bands. In the nav it's compact: 40px tall, 14px / 600, with a 44px tap area (padding extends the hit area).
- **Hover** (only on devices that support it, via `@media (hover: hover)`): background `primary-hover`, over `fast` (120ms).
- **Press:** `transform: scale(0.98)` for 120ms.
- **Focus:** `outline: 3px solid primary; outline-offset: 3px`. Always visible for keyboard users (`:focus-visible`).
- The label never changes. It's "Book a Discovery Call" everywhere.

**Text link (secondary actions)**
- `primary`, 17px / 600, followed by a trailing arrow " →" that nudges 2px right on hover. Examples: "See our work →", "See full pricing →".
- Links inside paragraphs are underlined (1px, `text-underline-offset: 3px`). Standalone links are underlined on hover and focus.
- **No outline or ghost buttons.** A secondary action is always a text link.

### Navigation

- White header, 64px tall, `hairline` bottom border. It picks up the `card` shadow once the page has scrolled.
- **Sticky** on all sizes. It uses `position: sticky` only: no blur, no hide-on-scroll.
- **Desktop:** logo left · Work · Services · Pricing · About · Contact · primary button right.
- **Phone:** logo left · compact primary button · menu button (44 × 44px). The menu opens a full-width white panel below the header, with links at 21px and 56px row height. The panel uses no animation beyond a 200ms fade (none with reduced motion).
- The current page is marked with `aria-current="page"`, shown as `ink` text with a 2px `primary` underline.

### Cards

**Case study card**
- `canvas` background, 2px `hairline`, radius `lg`. Padding 20px on phones and 32px on desktop.
- Contents, in order:
  1. The screen image (radius `xl` at the top, or a phone mockup for the mobile app).
  2. A tag row in mono `label`, e.g. `CLIENT · FLUTTER · 3–4 WEEKS`.
  3. An `h3` title.
  4. One `small` line.
  5. "Read the case study →".
  6. The status badge.
- The whole card is one link, with a single accessible name: the title.
- **Hover (desktop):** border becomes 2px `#C9D3CF`, `card` shadow, no movement.

**Pricing panel**
- Same shell as the case study card.
- The plan name is `h4` (Phudu). The price is set in JetBrains Mono 500 at 32px (phone) / 40px (desktop) with tabular figures. "/month" is in `muted` 15px, system font.
- **No "recommended" plan, no inverted dark card, no discount strike-throughs.**
- **Support plans table:** below 768px, the three plans are stacked cards. At 768px and up, a 3-column table with `tint` on the header row.

**Pricing toggle**
- A two-option switch above the pricing panels: "Build your app" (default) and "After launch".
- **Build your app:** Discovery Sprint ($750, 1 week) and MVP Build (from $6,000), side by side, with the 30-day free-fix line below.
- **After launch:** the three support plans (App Care, Product Care, Full Care), with the "Need more than your plan covers?" line below.
- **Look:** a `surface` track with a 2px `hairline` border, radius `md` (12px). The selected option is `canvas` with a stronger border (`#C9D3CF`) and `ink` text; the unselected option is `muted` text with no fill. Each option is ≥ 44px tall. Full width and stacked side by side on phones; centred and no wider than its content from 480px.
- **Both groups of pricing content stay in the page's HTML at all times, only visually hidden** (`hidden` attribute or `display: none` toggled by state, never removed from the DOM), so search engines and AI answers can read every price regardless of which option is selected.
- **Accessible tab list:** `role="tablist"` on the track, `role="tab"` with `aria-selected` on each option, `role="tabpanel"` on each price group. Left/Right arrow keys move focus and switch the selected tab (standard tabs pattern); Enter/Space also activates. The initial tab (`Build your app`) is focusable by default; the inactive tab has `tabindex="-1"`.

**FAQ**
- Native `<details>` / `<summary>`. The question is `h3`-styled in `ink`, with a 20px plus/minus icon in `primary`.
- Items are separated by `hairline`, with 20px vertical padding.
- Opening is instant with reduced motion. Otherwise the content fades in over 200ms. Never animate height.

**Tags and badges**
- **Tag:** `tint` fill, `primary` text, caption size, radius `sm`.
- **"Live" badge:** `accent` fill, `ink` label in mono, radius `sm`. Only on work that is actually live (Poststeady; EHS Guru's platform).
- **"Delivered · launching soon" badge:** `surface` fill, `muted` text. Access Yourself uses this until it's live.
- **Build label:** mono `label` in `muted`, e.g. `WEEK 3`. No fill.

### Icons

- Line icons, 1.5px stroke, 20px (inline) or 24px (feature rows), square caps.
- Colour: `ink` by default; `primary` for interactive or meaning-carrying icons. `accent` only for decorative marks next to a text label.
- Inline SVG, `aria-hidden="true"` when decorative. **No icon font.**

### Device mockups

- **A neutral phone frame, built in CSS or SVG, not a photo.**
  - Frame in `ink`, 10px bezel, radius `device`; screen radius `device-screen`.
  - Aspect ratio 9 : 19.5.
  - A simple status bar (time, signal, battery) drawn in the screen image.
  - **No model-specific details:** no Dynamic Island, no camera bump, no brand logo. The frame shouldn't read as any one manufacturer's phone.
- **Size:**
  - Phones: 240–280px wide, never wider than 72% of the viewport.
  - Tablet: 300px.
  - Desktop hero: 320–340px.
- **Screens are real app screens with demo data only.** No real names, emails, prices or question-bank content. Each screen is exported as AVIF, with a WebP fallback, at 1× and 2× through `srcset`/`sizes`. Every image has a fixed `aspect-ratio` so nothing shifts on load.
- **Swappable logo layer.** The client logo is never baked into a screenshot. Each screen is exported without the logo, and the logo sits on top as its own positioned layer (SVG or PNG) at a fixed slot in the app bar. Until the client approves their logo, the slot shows a neutral wordmark placeholder: the app name set in the system font. Swapping in the approved logo is a one-file change.
- **One phone per viewport on phones.** A desktop hero can show one phone plus one floating panel. We never show fanned stacks of 3–5 phones.
- The `device` shadow sits under the phone. Nothing else on the page uses it.
- **Store badges:** use the official App Store and Google Play badges, unaltered, at the sizes their guidelines require. Never recoloured green.

### Footer

- `surface` background, 64px padding (48px on phones).
- Columns (stacked on phones):
  - **Studio:** Work, Services, Pricing, About.
  - **Get in touch:** Contact, hello@shipthesis.com.
  - **Legal:** Privacy.
- Text is `muted` 15px. Link rows are 44px tall on phones.

### Cal.com embed

- Light theme, brand colour `#0A7F55`, and the system font if the embed allows it.
- Sits in a `card` shell, with the "Book a Discovery Call" heading above it.
- **Lazy-load the embed script.** Load it when the booking section nears the viewport, or on first interaction, so it doesn't block the Contact page's first paint. Reserve its height to avoid layout shift.

---

## Motion

### Principles

1. **Motion explains progress. It never decorates.** If an animation doesn't show something being built, shipped or revealed, cut it.
2. **No scroll-jacking.** The page always scrolls at the user's speed. Animation progress may *follow* the scroll position, but scrolling is never captured, slowed, snapped or redirected.
3. **Only `transform` and `opacity` animate.** No width, height, top, margin, filter, blur or box-shadow animation. Everything runs on the compositor.
4. **No animation library.** CSS first. Any JavaScript is small, deferred, and does no work per frame.
5. **Respect `prefers-reduced-motion: reduce`** everywhere. The rules below give the reduced version of each effect.

### Timing tokens

| Token | Value | Use |
|---|---|---|
| `fast` | 120ms | Hover, press, link arrow |
| `base` | 200ms | Menu fade, FAQ content fade |
| `reveal` | 320ms | Scroll reveals |
| `ease-out` | `cubic-bezier(0.2, 0, 0, 1)` | Entrances |
| `ease-standard` | `cubic-bezier(0.4, 0, 0.2, 1)` | State changes |

### Signature: the week-by-week hero (Home only)

**Story:** "How your app comes together, week by week." The weeks describe **our process**, not Access Yourself's build history. One phone uses Access Yourself screens (demo data) as the example app, ending at launch. It visualises the promise under the H1: a working build on your phone every week.

**Stage heading** (`h3`, above the phone): "How your app comes together, week by week."
**Stage caption** (`caption`, `muted`, below the phone, always visible): "Screens from Access Yourself, shown with demo data."

**Frames.** Four checkpoints across a typical build, consistent with the brief's 1-week sprint and 6–10 week MVP:

| Frame | Build label | Screen | Caption (one line, `small`) |
|---|---|---|---|
| 1 | `WEEK 1` | Sign-up and login | The first build on your phone. |
| 2 | `WEEK 3` | Exam list and exam detail | Real screens, real navigation. |
| 3 | `WEEK 6` | Timed test with mark-for-review | The core feature, working. |
| 4 | `LAUNCH` | Results screen + launch state | Ready for launch. |

- The labels are sample checkpoints in our process, not a fixed schedule. A new build still reaches the founder's phone every week in between.
- Frame captions live in `docs/copy/home.md` (Hero stage).

**Layout**
- **Phone:** the H1, supporting line and primary button come first, fully static and readable with no animation. Below them sits the hero stage: the phone centred, with a 4-tick progress rail and the build label above it and the caption below.
  - The stage is a `position: sticky` block inside a section about **2 × viewport height** tall (`200svh`), so the frames advance as the user scrolls through normally.
  - The user can scroll past at any speed. If they fling past it, the stage simply ends on frame 4.
- **Desktop (≥ 1024px):** text column left (5 columns), stage right (6 columns). Same sticky behaviour, section height `220vh`. A small `float` panel beside the phone lists the four checkpoints as a build log, and the current one is highlighted with `tint`.

**What animates** (all driven by scroll position)
- **Screen change:** the next screen cross-fades in (opacity 0 → 1) with a 12px upward `translateY`. Screens are stacked, and only opacity and transform change.
- **Progress rail:** four ticks. The current tick fills with `primary` using `transform: scaleX()` on a pre-filled bar.
- **Build label:** swaps text at each frame boundary, with no animation on the text itself.
- **Launch moment (frame 4):**
  - A checkmark in `accent` scales from 0.8 to 1 with opacity 0 → 1 over 320ms.
  - A card slides up 12px under the phone, reading "Ready for launch". **No store badges** until Access Yourself is live (see "Open items").
  - The "Live"-style `accent` badge is **not** used here, because Access Yourself isn't live yet. The launch frame shows *submitted / ready*, never ratings, download counts or a fake store listing.

**Implementation**
- **Progressive enhancement:** use CSS scroll-driven animations (`animation-timeline: view()` on the stage section) where the browser supports them (`@supports (animation-timeline: view())`).
- **Fallback:** a ≤ 2 KB script uses one `IntersectionObserver` on four invisible frame markers to set a `data-frame` attribute on the stage. CSS transitions do the rest, so there's no scroll listener and no per-frame JavaScript.
- **No JavaScript at all:** the stage shows frame 4 (the finished app and the launch card) as a static image.

**Load budget**
- The first paint shows **frame 1 as a normal `<img>`** with `fetchpriority="high"`, a fixed aspect ratio and preloading. It's the LCP candidate, so it isn't hidden or faded in.
- Frames 2–4 and the logo layer load with `loading="lazy"` and `decoding="async"`.
- **Total hero images:** ≤ 220 KB on phones (AVIF, 1× + 2× picked by `sizes`), ≤ 320 KB on desktop.
- **No video, no GIF, no Lottie.**
- The hero must not push Core Web Vitals past the targets below.

**Reduced motion**
- No sticky stage and no cross-fades.
- The hero shows frame 4 (the finished app) in the phone. Below it, a static row of four small labelled thumbnails (`WEEK 1`, `WEEK 3`, `WEEK 6`, `LAUNCH`) tells the same story without movement. The stage heading and caption stay.

### Everywhere else: subtle reveals

- **What:** section headings, cards and phone mockups fade in with `opacity 0 → 1` and `translateY(8px → 0)` over `reveal` (320ms) `ease-out`, **once**, when 15% of the element enters the viewport.
- **Stagger:** up to 3 siblings, 60ms apart. Never stagger more than 3.
- **Never reveal:**
  - the H1 or any above-the-fold content;
  - body paragraphs one by one;
  - prices;
  - buttons;
  - anything the user needs to read before scrolling.
- **Reduced motion:** reveals are off, and everything is visible immediately.
- **No JavaScript:** everything is visible. Reveals are added by a class the script sets, so content is never hidden by default in CSS.

### Never

- Parallax, scroll snapping, scroll-speed changes, horizontal scroll sections.
- Auto-playing carousels, marquees, typewriter text, number count-ups on prices.
- Animated gradients, blurs, glows, 3D tilts, cursor followers.
- Page-transition animations.
- Motion that loops forever.

---

## Performance targets

Measured on a mid-range Android phone over slow 4G:

| Metric | Target |
|---|---|
| LCP | ≤ 2.0s (hard limit 2.5s) |
| CLS | ≤ 0.02 |
| INP | ≤ 150ms |
| JavaScript for design and motion | ≤ 5 KB gzipped (excluding the Cal.com embed on Contact) |
| Webfonts | at most 54 KB total (Phudu, one static weight, ≤ 40 KB + mono subset ≤ 14 KB) |

Every image has explicit dimensions or an `aspect-ratio`. The heading font's fallback is metric-matched.

---

## Accessibility

- **Contrast:** meets WCAG 2.2 AA everywhere (see the contrast table). The `accent` green is never the only carrier of meaning.
- **Touch targets:** ≥ 44 × 44px, with ≥ 8px between adjacent targets.
- **Focus:** visible `:focus-visible` ring on every interactive element (3px `primary`, 3px offset).
- **Text size:** the page works at 200% text zoom and at 320px width, with no horizontal scroll and no clipped text.
- **Images:**
  - App screens get alt text describing what the screen shows, e.g. "Access Yourself timed test screen with a question and a countdown timer".
  - The phone frame is decorative.
  - The hero's build log is real text, not part of an image.
- **Headings:** one `<h1>` per page, and heading levels never skip.
- **Motion:** every animation has the reduced-motion alternative described above.

---

## Do and don't

### Do
- Use `primary` for every action and only for actions.
- Put real app screens in the neutral phone frame, with demo data and a swappable logo layer.
- Alternate `canvas` and `surface` bands to separate sections.
- Set prices with tabular figures.
- Write every rule for a 360px phone first.

### Don't
- Use gradients, dark sections or a dark mode.
- Put `accent` (`#24B47E`) on text, or behind white text.
- Use pill buttons, ghost buttons or more than one filled button per band.
- Use shadows on buttons or text, or the `device` shadow on anything but a phone.
- Show fake store listings, ratings, download counts, "recommended" plans or discounts.
- Load an animation library, GIFs, Lottie or background video.

---

## Open items

1. **Access Yourself logo:** pending client approval. The hero and the case study card use the placeholder wordmark in the swappable logo slot until then.
2. **Launch frame stores:** Access Yourself is launching on Google Play; whether it also launches on the App Store is still to confirm. Either way, the launch card says "Ready for launch" with no store badges until the app is live.
3. **Final hero screens:** placeholders until the demo-data screens are exported.
4. **Phudu file size and glyph coverage:** verify the real static-700 woff2 size against the 40 KB budget, and confirm the Latin subset covers every character used in headings (including the em dash, curly quotes and any accented names in case studies).
5. **Ship Thesis logo:** not designed yet. The header uses a text wordmark ("Ship Thesis" in Phudu 700) until it exists.

---

## Changelog

- v8 (2026-09-26): Marked as a pre-build reference, not binding, now that Impeccable and the taste skill drive the design.
- v7 (2026-09-26): Headings are uppercase Phudu (was: no all-caps), matching the home brief. Two-tone hero H1 allowed.
- v6 (2026-09-26): `muted` darkened from `#55635C` to `#445048` (option B). The old grey read washed out next to heavy Phudu headings; the new one stays lighter than body text but is clearly readable (8.44:1 on white).
- v5 (2026-09-26): Card, pricing-panel and pricing-toggle borders are now 2px, so the edge is visible without relying on a shadow. `surface` darkened from `#F5F7F5` to `#F0F4F1` so section bands read clearly against `canvas`, the way Stripe and Apple pair two tones of one neutral for section separation.
- v3 (2026-09-25): Added the Pricing toggle component (Build your app / After launch), built as an accessible tab list with both price groups always present in the DOM for search and AI answers.
- v2 (2026-09-25): Hero reframed as our process: heading "How your app comes together, week by week.", caption "Screens from Access Yourself, shown with demo data." Checkpoints are Week 1, Week 3, Week 6, Launch (matching the brief's 6–10 week MVP). No store badges until the app is live. `accent` keeps its small-use rules.
- v4 (2026-09-25): Replaced Instrument Sans with Phudu (weight 700 only, no negative tracking) as the heading font. Prices and build labels both run in JetBrains Mono by default, since Phudu has no confirmed tabular figures. Webfont budget raised to 54 KB pending the real file size.
- v1 (2026-09-25): First design system. Light theme; deep green `#0A7F55` for actions, bright `#24B47E` for highlights and launch; Instrument Sans 600 headings, system UI body, JetBrains Mono build labels; neutral phone frames with real Access Yourself screens (demo data, swappable logo); week-by-week scroll-driven hero with reduced-motion and no-JS fallbacks; performance and accessibility targets.
