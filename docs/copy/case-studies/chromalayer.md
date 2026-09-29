# ChromaLayer

> Matches the built page `/work/chromalayer` (ported from the approved design `web/public/_design/chromalayer.html`, 2026-09-29). World: "The Colour Lab" (`docs/design/case-study-brief.md` §5). Facts: the product repo `chromalayerlab/Chromalayer` (`docs/product-truth.md`, verified against the code) and `docs/case-studies/chromalayer-raw.md`. **Hidden on production** until the real-hardware before/after photo and a real testimonial exist.

**Page accent:** `#030d26` (near-ink; the only colour on the page is swatches: preset chips, stat and fact card tops. No colour-strip underlines or bars (founder, 2026-09-29)).

## Opening

**Kicker:** Case study · Own product
**Title:** CHROMALAYER 
**Line:** A Windows app that gives a laptop's built-in screen seven colour controls, and keeps them applied after every restart, sleep and sign-in.

**Test pattern · Case study 04** (OSD readout: ● LIVE · chromalayer.app, linking to https://chromalayer.app)
Type Our own product · Platform Windows 10 and 11 laptops · Industry Consumer software, display tools · Service Product design, build and release · Stack C# · .NET · WPF

**Hero:** the real app window (`/work/chromalayer/hero.webp`, the Display Studio screenshot from the landing-page repo), on a test-card grid.

**Marquee:** Vibrancy ✱ Warmth ✱ Brightness ✱ Contrast ✱ Hue ✱ Black level ✱ White point

## 01 · The brief: "A laptop screen that stays how you set it"

Calibration report (ChromaLayer │ Subject: built-in laptop screens):
- **Why we built it.** Changing colours with Intel's own software was frustrating, and it never gave full control over the screen. We wanted one tool that works on Intel, AMD and NVIDIA, not just one brand of graphics. (Founder, 2026-09-29.)
- **What we observed.** Colours look washed out or too yellow, Windows has no proper colour controls for the built-in screen, and the settings that do exist quietly reset after a restart.
- **What shipped.** Seven colour controls and five presets, from one small window in the system tray, on Intel, AMD and NVIDIA graphics, re-applied after every restart, sleep, sign-in and display change.

Stats: **7** colour controls, combined into one · **5** ready-made presets · **9** re-checks in the 25 seconds after each sign-in · **0** admin rights or drivers needed

## 02 · Seven dials, one picture

Live before/after on a **drawn test scene** (not a photo; the landing page's photo is a film still we can't publish). Uses the app's own colour maths and its real preset values (`PresetDefinitions.cs`): Natural, Vivid, Cinema, Gaming, Night. The seven dials are **live sliders** (move any one and the picture changes; the tag reads "Custom" once they no longer match a preset), with real ranges: Vibrancy 0–200 · Warmth 2700–10000 K · Brightness ±100 · Contrast 0–200 · Hue ±180° · Black level 0–30 · White point 70–100. Note: "A drawn test scene, rendered in your browser with the app's own colour maths and preset values. Move any dial to make your own. The app itself changes your whole screen."

## 03 · Sign in, and Windows resets you

Pinned test screen and a 0–25 s ruler (checkpoints 0, 0.25, 1, 2.5, 5, 10, 15, 20, 25 s; `WindowsEventMonitor.cs`). Steps: You sign in (0 s) → Windows quietly resets them (15–25 s) → The app notices (every ½ s for 30 s, then every 5 s; `ColorEffectWatchdog.cs`) → Colours back, and they hold (25 s).

## 04 · Lab notes

- **Greys stay grey.** Vibrancy is built so black, grey and white never shift.
- **Restore always works.** Shortcut, tray menu or main window; restored on exit and on a crash.
- **Startup never waits.** The window used to wait up to 10 s on the licence check; now it doesn't, and the first colour apply retries up to 5 times, 400 ms apart.
- Big number: **25 s**.

## Mid-page CTA

**Want an app that just keeps working?** Book a Discovery Call → `/#contact`

## 05 · What we left out, on purpose

No overlay, no driver (same built-in Windows feature as its accessibility colour filters) · One screen, done well (no HDR, multiple monitors or ARM in version one) · No health claims (no "eye health", no "calibrated").

## 06 · Result

**LIVE** (centred), "Our own Windows app, running today.", then four fact cards in a row with a colour swatch on top: Live at chromalayer.app · Works on Intel, AMD and NVIDIA graphics, tested on each (founder, 2026-09-29) · Built in: a 14-day free trial and licensing · Updates through its own release channel. Off production only: a placeholder for the real-hardware before/after photo.

## Under the hood (open by default)

Tray app (WPF) → Settings and licensing → Colour maths (ColorEngine, one 5×5 matrix) → The screen (Windows Magnification API). Side: Licence check on Cloudflare Workers · Updates via GitHub Releases + Velopack. Decisions: one combined change per adjustment · colour maths kept apart from Windows · never block startup on the network · settings saved in one step (atomic write).

## 07 · In their words (hidden on production)

Placeholder photo and quote until a real, approved testimonial exists.

## 08 · Conclusion (07 on production)

**Why a Windows app is on a mobile studio's site**, set as the final reading: i. Staying right is the hard part · ii. We design for the real system · iii. We ship updates safely. Then the shared line (a fixed quote after a one-week Discovery Sprint, a new build every week, code you own) and Book a Discovery Call / See pricing.

## Deliberately left out

Price ($5.99), the unsigned installer and its download link, user or sales numbers, the test count (founder skipped it), "calibrated" / "eye health" / "driver-level" claims, and any timeline (founder: only Assess Yourself shows one). The founder confirmed (2026-09-29) that it works on Intel, AMD and NVIDIA, tested on each, so the page says so; the product repo's docs still label AMD/NVIDIA "experimental" and should be updated.

## Next project

**Assess Yourself**, in its own indigo (`#283593`), with its real phone hero image → `/work/assess-yourself`.
