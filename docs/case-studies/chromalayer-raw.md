# ChromaLayer — Case Study (Raw)

> Raw material for a portfolio case study. Every point is tagged **[EVIDENCE: path]** (read in the repo on 2026-09-24) or **[INFERRED]** (our reading, not stated in the repo). Items only the founder can answer are marked **[NEEDS FOUNDER]**.
>
> **Read this first:** ChromaLayer is **not a mobile app.** It's a **Windows desktop app** (it sits in the system tray) built in C#/.NET with WPF. The mobile-specific questions below are answered honestly, which mostly means "not applicable" plus the nearest desktop equivalent. It still works as a case study for a mobile-app buyer because the hard parts carry over: an app that has to survive an operating system that keeps undoing its work, paid licensing, installers and updates, and a release process. It is not proof of App Store or Play Store experience. **[EVIDENCE: `src/ChromaLayer.App/ChromaLayer.App.csproj`, `docs/product-truth.md` §1]**
>
> **Client status is unknown.** The repo talks about a "project owner" making decisions but never says whether this was client work or our own product. Wherever the answer matters, this file writes **[CLIENT]** and marks it **[NEEDS FOUNDER]**. **[EVIDENCE: `docs/PROJECT-STATUS.md` §2.1 item 5, `docs/HANDOFF.md` §3.1]**

---

## 1. One-line description

A small Windows tray app that gives laptop owners (especially those with Intel graphics) seven richer color controls for their screen, such as vibrancy, warmth and contrast, and keeps those settings applied after restarts, sleep and sign-in, where Windows and Intel's own tools keep resetting them. **[EVIDENCE: `docs/product-truth.md` §1, `docs/positioning-and-market.md` §2.1]**

---

## 2. Platforms and live status

| Item | Value | Tag |
|---|---|---|
| iOS | **No** | [EVIDENCE: `src/` has no iOS project] |
| Android | **No** | [EVIDENCE: `src/` has no Android project] |
| Actual platform | Windows 10/11, 64-bit (x64), desktop tray app | [EVIDENCE: `docs/product-truth.md` §2, `ChromaLayer.App.csproj` `RuntimeIdentifier=win-x64`] |
| App Store / Play Store links | None. Distributed as an installer through **GitHub Releases** (`chromalayerlab/ChromaLayer-Releases`), installed and updated with Velopack | [EVIDENCE: `docs/product-truth.md` §2 Commercial, `docs/HANDOFF.md` §3.3] |
| Bundle ID / package name equivalent | Velopack package ID `ChromaLayer` (release packages in `dist/` named `ChromaLayer-<version>-full.nupkg`) | [EVIDENCE: `dist/` listing, `scripts/build_release.ps1`] |
| Versions shipped | Git tags `v1.0.0`, `v1.0.1`. The csproj is now at `1.0.5`. `dist/` holds packages for 1.0.0, 1.0.4, 1.0.5, 1.0.6 | [EVIDENCE: `git tag`, `ChromaLayer.App.csproj`, `dist/`] |
| Live? | Partly. A commit records "clients on 1.0.0 and 1.0.2 are offered 1.0.4" from the live update feed, so installed copies exist. Whether there are paying customers is unknown. The repo states **zero** beta users as of 2026-09-02 | [EVIDENCE: commit `d8b4e02`; `docs/product-truth.md` §3 "Never publish"] |
| Public status | **[NEEDS FOUNDER]** Is it on sale today? Has the checkout been completed end to end? (As of the docs, it had not.) | [EVIDENCE: `docs/product-truth.md` §4 item 3] |

---

## 3. Exact stack

**What it's built with, first: native Windows desktop in C# / .NET with WPF. Not Flutter, not Swift, not Kotlin, not React Native.**

| Layer | Technology / version | Tag |
|---|---|---|
| Language / runtime | C#, **.NET 10** (`net10.0`, `net10.0-windows`), SDK `10.0.100` pinned with `rollForward: latestFeature` | [EVIDENCE: `global.json`, all `*.csproj`] |
| UI framework | WPF (`UseWPF=true`) | [EVIDENCE: `ChromaLayer.App.csproj`] |
| App host / DI | Microsoft.Extensions.Hosting 10.0.9, Microsoft.Extensions.Http 10.0.9 | [EVIDENCE: `ChromaLayer.App.csproj`] |
| Installer + auto-update | Velopack 1.2.0 (`vpk` CLI) | [EVIDENCE: `ChromaLayer.App.csproj`, `scripts/build_release.ps1`] |
| Windows APIs | Magnification API (`MagSetFullscreenColorEffect`) via P/Invoke; System.Management 10.0.12 (WMI) | [EVIDENCE: `TRD.md` §6, `ChromaLayer.Platform.Windows.csproj`] |
| Local encryption | System.Security.Cryptography.ProtectedData 10.0.12 (DPAPI) | [EVIDENCE: `ChromaLayer.Infrastructure.csproj`] |
| Tests | xUnit 2.9.3, Microsoft.NET.Test.Sdk 17.8.0, coverlet 10.0.1 | [EVIDENCE: `tests/*/*.csproj`] |
| Backend | Cloudflare Worker, TypeScript ^5.0.4, Wrangler ^3.0.0, Workers KV | [EVIDENCE: `src/ChromaLayer.Serverless/package.json`, `wrangler.toml`] |
| Payments / licensing | Dodo Payments public license API (activate / validate / deactivate) | [EVIDENCE: `docs/HANDOFF.md` §2 item 4] |
| Feedback | Formspree form, in-app with browser fallback | [EVIDENCE: `docs/product-truth.md` §2] |

> **Doc/code drift to fix before publishing:** `AGENTS.md`, `docs/product-truth.md` and `docs/HANDOFF.md` still say **.NET 8 / SDK 8.0.422 / version 1.0.0**. The code moved to .NET 10 in commit `b873ebc` (2026-09-12). Quote the code. **[EVIDENCE: `git log -S net10.0`]**

---

## 4. Mobile specifics (answered for a desktop app)

- **Minimum iOS / Android versions:** Not applicable. The desktop minimum is **Windows 10 or 11, 64-bit.** HDR, multiple monitors and ARM devices are blocked on purpose in v1. **[EVIDENCE: `docs/product-truth.md` §2, `docs/PROJECT-STATUS.md` §2.2]**
- **State management and architecture:** Clean layered architecture across five projects. Dependencies point one way only (`App → Platform.Windows / Infrastructure / Application → ColorEngine`), and the color-math core has no Windows references, so it can be tested on its own and could later be ported. The UI has a `ViewModels/` folder alongside code-behind. **[EVIDENCE: `AGENTS.md` §3.2–3.3, `src/ChromaLayer.App/ViewModels/`]**
- **Platform-specific native code:** Yes, all of it Windows. Magnification API calls, global hotkeys, a Task Scheduler / registry startup hook, session/power/display event hooks, and a named-event channel for a single running copy of the app. **[EVIDENCE: `src/ChromaLayer.Platform.Windows/*.cs`, commits `80d6d44`, `207eca5`]**
- **Offline support, storage, caching:** Works fully offline. Settings are stored as local JSON written atomically (write a temp file, then swap it in). The license is stored encrypted with Windows DPAPI in `license.dat`. A paid install keeps working for **3 days** with no network. **[EVIDENCE: `docs/product-truth.md` §2, `docs/PROJECT-STATUS.md` §1]**
- **Push notifications, deep links:** None. The closest equivalent is a tray balloon message when the app gives up fighting another program for control of the screen colors. **[EVIDENCE: commit `13572fc`]**
- **In-app purchases / subscriptions:** One-time **$5.99** license, 14-day full trial, 1 device per license, payment handled by Dodo Payments with the key delivered by email. No subscription. **[EVIDENCE: `docs/product-truth.md` §2 Commercial]**
- **Crash reporting and analytics:** No third-party crash reporting or analytics SDK. The app writes a local file log (`FileLog.cs`), puts the screen colors back on a crash, and sends nothing without the user taking an action. **[EVIDENCE: `src/ChromaLayer.App/FileLog.cs`, `docs/proof-inventory.md` §4]**
- **Release process:** `scripts/build_release.ps1` reads the version from the csproj (one source of truth), cleans the build, publishes a self-contained single file, runs `vpk pack`, and uploads to GitHub Releases when `GITHUB_TOKEN` is set. There's no CI pipeline in the repo (no `.github/`). Packaging went Inno Setup → Velopack → Inno Setup → Velopack (see §10). **The installer is unsigned**, so Windows SmartScreen warns on first download. **[EVIDENCE: `scripts/build_release.ps1`, commits `93cc499`, `94ad7ae`, `d8b4e02`; `docs/product-truth.md` §4]**

---

## 5. Why this domain was hard

- **The operating system keeps undoing your work.** Windows' desktop compositor (DWM) quietly resets screen color effects 15–25 seconds after sign-in, unlocking, waking from sleep or a display change, and again when the secure UAC prompt appears. An app that sets colors once looks broken within a minute. **[EVIDENCE: `TRD.md` §8.2, commit `8cf5540`]**
- **There's no official hook for this on Intel laptops.** Intel's own control panels reset on reboot and have no color-temperature slider. The only tool that works without admin rights or a driver is an accessibility API that was never designed for this. **[EVIDENCE: `docs/positioning-and-market.md` §3, `docs/product-truth.md` §2]**
- **Getting it wrong can leave someone's screen unusable.** If the app crashes with a bad color matrix applied, the user may not be able to read their screen. Restoring the original colors has to work every time, whatever the license, network or crash state. **[EVIDENCE: `AGENTS.md` §3.3 rule 2, `docs/HANDOFF.md` §2 item 5]**
- **Color math that "looks right" is easy to get subtly wrong.** Boosting vibrancy or shifting hue tints greys and whites unless the math is built to keep them neutral. **[EVIDENCE: `TRD.md` line ~278, `docs/product-truth.md` §2 Engineering credibility]**
- **Selling cheap desktop software invites piracy.** A $5.99 trial needs to be hard to reset without ever punishing honest users. **[EVIDENCE: `docs/HANDOFF.md` §2 items 1–2]**

---

## 6. Before / after for the end user

| Before | With ChromaLayer | Tag |
|---|---|---|
| Intel laptop screen looks washed out, and Intel's control panel settings reset after reboot or driver updates | Seven controls plus five presets (Natural, Vivid, Cinema, Gaming, Night) that come back after reboot, sleep and sign-in | [EVIDENCE: `docs/positioning-and-market.md` §2.1, `docs/product-truth.md` §2] |
| No simple way to warm up *or* cool down the screen (health apps only warm it) | A two-direction warmth control | [EVIDENCE: `docs/positioning-and-market.md` §4] |
| Afraid to change display settings in case they can't get back | Hold `Ctrl+Shift+C` to compare with the original; `Ctrl+Shift+Alt+R` restores it instantly | [EVIDENCE: `docs/product-truth.md` §2] |
| How long users spent fixing their screen before, and how often | [NEEDS FOUNDER] | — |
| Real user reactions or quotes | [NEEDS FOUNDER]. The repo records **none**, and the docs forbid inventing them | [EVIDENCE: `docs/proof-inventory.md` §3] |

---

## 7. Scope delivered vs time and team

- **Timeline:** first commit **2026-07-06**, latest **2026-09-15**. About 10 weeks, 122 commits. Most active days: 2026-07-28 (12 commits) and 2026-08-25 (15, a security and reliability hardening pass). **[EVIDENCE: `git log`]**
- **Team:** two human commit authors, plus AI-assisted commits (co-authored-by trailers). Roles and hours: **[NEEDS FOUNDER]**. **[EVIDENCE: `git shortlog -sn`; commit trailers on `0229f9a`, `d8b4e02`]**
- **Screens / windows:** Main window (sliders and presets), three-screen onboarding, License window (activation, device limit reached, offline grace used up, release device), Feedback dialog, Update dialog, a custom message box, and the tray menu (Open · Restore Baseline · Exit). **[EVIDENCE: `src/ChromaLayer.App/*.xaml`, `docs/PROJECT-STATUS.md` §1]**
- **Features:** 7 color controls, 5 presets, live preview, hold-to-compare, emergency restore hotkey, background watchdog, recovery after sign-in/sleep/display changes, start with Windows, single running copy, 14-day trial with tamper resistance, paid licensing with in-app device release, in-app updates, in-app feedback. **[EVIDENCE: `docs/product-truth.md` §2, `docs/PROJECT-STATUS.md` §1]**
- **Integrations:** Dodo Payments (licensing), Formspree (feedback), GitHub Releases + Velopack (distribution and updates), Cloudflare Workers + KV (trial sync). **[EVIDENCE: `docs/HANDOFF.md`, `src/ChromaLayer.Serverless/`]**
- **Tests:** 290 passing, 1 skipped by design, across four suites (106 color engine, 139 application, 41 infrastructure, 4 platform), last recorded 2026-09-02 on .NET 8. **Not re-run for this document**, and the framework has since moved to .NET 10. Re-run before quoting. **[EVIDENCE: `docs/product-truth.md` §2]**
- **Also designed but not built:** macOS/Linux port plan (Avalonia) and multi-monitor spec (Phase 7). An untracked `tools/DisplaySpike/` suggests the multi-monitor spike has started. **[EVIDENCE: `docs/agents/multiplatform/README.md`, `docs/agents/multidisplay/README.md`; git status]**

---

## 8. Backend

- **What powers it:** mostly the desktop app itself. Licensing goes straight to **Dodo Payments'** public license endpoints, which need no secret key. A small **Cloudflare Worker** built in this project adds `/api/trial/start`, `/api/trial/status` and `/api/release-seats`, storing trial data in Workers KV. **[EVIDENCE: `src/ChromaLayer.Serverless/src/index.ts` lines 38–46, `wrangler.toml`]**
- **Built as part of this project?** Yes, the Worker is in this repo (commit `207053a` "feat: phase 2 cloudflare edge trial synchronization", 2026-08-19), and was later hardened with rate limits, no wildcard CORS and input checks (2026-08-25). Whether it's deployed in production today: **[NEEDS FOUNDER]**. **[EVIDENCE: `git log` 2026-08-19, 2026-08-25]**
- **Rule held throughout:** no merchant secret key ever goes into the desktop binary. **[EVIDENCE: `docs/HANDOFF.md` §2 item 4]**

---

## 9. Key technical decisions

| Decision | Why | Tag |
|---|---|---|
| Use the Windows **Magnification API**, not a graphics driver or screen overlay | Runs without admin rights or a kernel driver, and it's the same mechanism as Windows' built-in color filters. Protected video still plays | [EVIDENCE: `docs/product-truth.md` §2, `docs/positioning-and-market.md` §4] |
| Combine all 7 controls into **one 5×5 matrix**, applied with one call | One native call per user action, and the controls can't fight each other | [EVIDENCE: `TRD.md` line ~198] |
| Keep **color math in its own project with no Windows code** | Unit-testable (106 tests) and portable to macOS/Linux later | [EVIDENCE: `AGENTS.md` §3.3, `docs/product-truth.md` §2] |
| A **watchdog** that checks every 5 s (every 0.5 s during the first 30 s after boot) and reapplies on drift | DWM drops the effect without warning; checking is the only reliable signal | [EVIDENCE: `src/ChromaLayer.Platform.Windows/ColorEffectWatchdog.cs` lines 25–27] |
| **Timed recovery checkpoints** from 0 to 25 s after every sign-in, unlock, wake and display change | Matches when DWM actually resets (15–25 s later) | [EVIDENCE: `WindowsEventMonitor.cs` line 42, `TRD.md` §8.2] |
| **Restore always works**, kept separate from licensing | A licensing bug must never trap someone with a broken screen | [EVIDENCE: `AGENTS.md` §3.3 rule 2] |
| **Watchdog gives up after 5 conflicts and tells the user** | Better than silently fighting another app forever | [EVIDENCE: commit `13572fc`, `docs/product-truth.md` §2] |
| **Trial anchors in four places**, signed, with **3 strikes, not 1** | A dead CMOS battery or dual-boot clock causes real clock rollbacks, and honest users shouldn't be locked out | [EVIDENCE: `docs/HANDOFF.md` §2 item 2, `LicensingOptions.cs` line 27] |
| **Device identity = physical disk serial + BIOS UUID**, not Windows' MachineGuid | MachineGuid changes when Windows is reset, which would eat a paid license slot | [EVIDENCE: `docs/PROJECT-STATUS.md` §3] |
| **Self-contained single-file** build | Users don't need .NET installed | [EVIDENCE: `ChromaLayer.App.csproj`] |
| **Raw API error text never reaches the UI** | Error copy is written for people; the raw text is logged | [EVIDENCE: `docs/HANDOFF.md` §2 item 6] |

---

## 10. Dead ends and deliberate "not built" choices

- **"Display Clarity" / sharpening. Built, then removed.** Added 2026-07-11, turned off the same day, brought back 07-18, removed from the UI 07-27. A Direct3D "spatial sharpening" engine was built and wired in on 07-27 and removed the same day. **[EVIDENCE: commits `beb4324`, `d123fd3`, `5a19a51`, `a0a17ff`, `f292222`, `292b64f`, `5e35191`]** Why: [INFERRED] a color matrix changes each pixel on its own and can't blur or sharpen by looking at neighboring pixels, so real sharpening would need a full-screen overlay, which conflicts with the no-overlay approach. **[NEEDS FOUNDER] to confirm.**
- **Start-with-Windows went through five approaches.** Registry Run key → elevated scheduled task via XML (07-08) → back to Run key, because it needed no admin rights (07-09) → logon scheduled task, because Explorer staggers Run-key apps by several seconds and delays colors at boot (08-05) → task + Run key together with self-repair (09-08) → current code uses **the Run key only, with self-repair on every launch**, after a merge picked that approach. **[EVIDENCE: commits `10ca1ea`, `eb539b4`, `f681bd0`, `18dc9d8`; `src/ChromaLayer.Platform.Windows/RegistryStartupRegistrar.cs`; `App.xaml.cs` line 346]**
  > Docs drift: `product-truth.md` still claims the two-mechanism autostart. Code says Run key. Fix the docs or the code before publishing this claim.
- **Installer went Inno Setup → Velopack → Inno Setup → Velopack.** The Inno Setup move (2026-08-31) accidentally removed the auto-updater, so installs on 1.0.2 couldn't update. Velopack came back on 2026-09-09, because Inno Setup can't produce the update feed Velopack needs. **[EVIDENCE: commit `d8b4e02` body]**
- **Explicitly not built for v1:** HDR, multiple monitors, ARM, ICC calibration, game-detection auto-switching, a server-side trial anchor, and a self-serve "release my seats" web page. **[EVIDENCE: `docs/PROJECT-STATUS.md` §2.2, `AGENTS.md` §3.3 rule 4]**
- **Stubbed on purpose:** detecting conflicts with f.lux or Night Light. The app gives advice rather than claiming it can detect them. **[EVIDENCE: `docs/product-truth.md` §4 item 5]**
- **Positioning chosen against:** no "eye health" or "blue light" framing and no "calibrated" claims. It's a tool for making the screen look better. **[EVIDENCE: `docs/product-truth.md` §3]**

---

## 11. Before / after numbers (only what's written in the repo)

| Metric | Before | After | Tag |
|---|---|---|---|
| Boot delay before colors apply | Run-key launch waits for Explorer's startup stagger ("randomized, often several seconds") | Scheduled task launches at logon "with no Explorer stagger" (later replaced, see §10) | [EVIDENCE: commit `eb539b4`] |
| Boot blocked by license network call | Up to **10 s** (HttpClient timeout) before the main window showed | Not waited on at boot anymore | [EVIDENCE: commit `0229f9a`] |
| First color apply at boot | One failed try meant colors never came back that session | Up to **5 retries, 400 ms apart**, with no added delay when the first try works | [EVIDENCE: commit `0229f9a`] |
| Recovery window after sign-in/wake | Effect could be lost for up to **25 s** | Checkpoints to 25 s cover it | [EVIDENCE: `docs/product-truth.md` §2] |
| Duplicate tray icons | Up to **7** stacked icons from leftover processes | Leftovers cleaned up at startup (later limited to the app's own exe path) | [EVIDENCE: commits `80d6d44`, `13572fc`] |
| Scroll smoothness | Stutter from WPF software-drawing the whole window on every frame | Normal DWM compositing. The commit gives no fps figure | [EVIDENCE: commit `a98a305`] |
| Test count | 282 (stale) | 290 passing, 1 skipped (2026-09-02) | [EVIDENCE: `docs/proof-inventory.md` §4] |
| App size | ~200 MB self-contained vs ~5 MB framework-dependent, a trade accepted so users don't need .NET installed | — | [EVIDENCE: `ChromaLayer.App.csproj` comment] |

No crash rates, install counts, conversion rates or startup timings in milliseconds are recorded. Don't quote any.

---

## 12. Hard problems solved

1. **Keeping an effect alive that the OS keeps killing:** watchdog plus timed recovery checkpoints, and reinitializing the Magnification session after fast user switching kills it. **[EVIDENCE: `TRD.md` line ~359, `ColorEffectWatchdog.cs`]**
2. **A silent boot failure:** if the very first color apply failed, the watchdog had nothing to enforce for the rest of the session. Fixed with a retry at boot. **[EVIDENCE: commit `0229f9a`]**
3. **A security hole in startup registration**, found and closed: a predictable temp file was handed to an elevated process, and another program could have swapped it to run code at logon. Fixed with random names, file permissions, hash checks before and after, and escaped XML. **[EVIDENCE: commit `48c1ba7`]**
4. **Safe upgrades over a running copy:** force-killing the app could leave the screen colors stuck. So a graceful-exit signal was added, and the app restores the screen before the installer replaces it. **[EVIDENCE: commit `207eca5`]**
5. **Wrong matrix layout for the Windows API:** hue rotation had rows and columns swapped, which tinted greys. Rebuilt so greys stay neutral at every angle. **[EVIDENCE: commit `ac9d4a1`, `TRD.md` line ~278]**
6. **A visible jump in the warmth slider** at 6600 K, smoothed with blending while keeping neutral white exact. **[EVIDENCE: commit `8cf5540`]**
7. **Update install handshake timing:** WPF's generated `Main()` ran too late for Velopack. Moved to a hand-written `Program.Main()`. **[EVIDENCE: commit `e9a6f9f`]**

---

## 13. Screenshots and diagrams

| # | Screen | Where | Flag |
|---|---|---|---|
| 1 | Onboarding, welcome screen | `src/ChromaLayer.App/OnboardingWindow.xaml` | Product branding only |
| 2 | Main window with sliders and presets (show "Vivid" selected) | `src/ChromaLayer.App/MainWindow.xaml` | — |
| 3 | Hold-to-compare, before and after | `Ctrl+Shift+C` in the running app | **Must be captured on real hardware.** Screen-capture tools may not show the color effect, so a phone photo of the screen may be needed. Docs forbid simulated before/after images, and no Intel capture exists yet | 
| 4 | Tray menu (Open · Restore Baseline · Exit) | System tray | — |
| 5 | License window (trial / activate) | `src/ChromaLayer.App/LicenseWindow.xaml` | **Hide any license key and email** |
| 6 | Update dialog with progress | `src/ChromaLayer.App/UpdateDialog.xaml` | — |

**Architecture diagram to draw:** User → Tray app (WPF) → Application layer (profiles, licensing) → ColorEngine (7 transforms → one 5×5 matrix) → Platform.Windows (Magnification API ← watchdog + event monitor) → screen. On the side: Infrastructure (settings JSON, DPAPI license) → Dodo Payments API; Cloudflare Worker + KV (trial sync); GitHub Releases (Velopack updates). A Mermaid starting point exists in `ARCHITECTURE.md`. **[EVIDENCE: `ARCHITECTURE.md`, `AGENTS.md` §3.2]**

Client-branding flag: the app name and logo are the product's own. If this was a **[CLIENT]** product, all six screens show client branding. **[NEEDS FOUNDER]**

---

## 14. Reusable lessons

- **Write down what's true in one file.** `docs/product-truth.md` holds every public claim, plus a "never publish" list. It stopped made-up numbers from reaching marketing. **[EVIDENCE: `docs/product-truth.md` §3]**
- **Record the rules that look like mistakes.** HANDOFF §2 lists deliberate choices (keep trial anchors on uninstall, 3 strikes, asymmetric error mappers) so the next developer doesn't "tidy" them back into bugs. **[EVIDENCE: `docs/HANDOFF.md` §2]**
- **Keep the pure logic free of platform code.** It made the logic testable and makes a port realistic. The same approach applies to a shared core in a mobile app. **[INFERRED]**
- **Make the safety path unconditional.** Restoring the screen never depends on licensing or network. The mobile equivalent: a user can always get out of a paywall or broken state. **[INFERRED]**
- **Prove the update path before launch.** The updater was lost once during an installer switch. Test a real 1.0.0 → 1.0.1 upgrade before release. **[EVIDENCE: commit `d8b4e02`, `docs/proof-inventory.md` §5]**
- **Never block startup on the network.** **[EVIDENCE: commit `0229f9a`]**
- **Treat release scripts that "succeed" without doing the job as bugs.** The script skips the upload with a warning when the token is missing. **[EVIDENCE: `docs/HANDOFF.md` §3.3]**

---

## 15. Positioning suggestion (suggestion only)

[INFERRED] Best fit: founders building **utility apps that sit on top of an operating system and have to keep working while the OS works against them.** Think background or always-on behavior, device settings, accessibility-adjacent tools, or apps with licensing, trials and self-updating installs. Also desktop companion apps next to a mobile product. For a pure mobile buyer, frame it as evidence of reliability engineering and careful commercial plumbing, **not** App Store experience. Pair it with a mobile case study (e.g. existing entries in `studio-site/docs/case-studies/`).

---

## 16. Technical appendix

**Solution layout** [EVIDENCE: `AGENTS.md` §3.2]
- `ChromaLayer.ColorEngine`: `Matrix5x5`, one `*Transform` per control, `TransformComposer`, `CompatibilityAnalyzer` (Intel supported; AMD/NVIDIA experimental; HDR/multi-display/ARM blocked).
- `ChromaLayer.Application`: `IColorEffectApplier`, `IProfileService`, `ISettingsStore`, `Licensing/` (trial anchors, `LicenseManager`, `LicensingOptions`).
- `ChromaLayer.Platform.Windows`: `ColorEffectApplier`, `ColorEffectWatchdog`, `GlobalHotkeyService`, `RegistryStartupRegistrar`, `WindowsEventMonitor`, `DeviceCompatibilityService`.
- `ChromaLayer.Infrastructure`: `SettingsStore` (atomic `.tmp` + `File.Move(overwrite: true)`), `DpapiLicenseStore`, `DodoLicenseGateway`.
- `ChromaLayer.App`: WPF, `Program.Main()` runs `VelopackApp.Build().Run()` first, then hosting/DI.
- `ChromaLayer.Serverless`: Cloudflare Worker (`/api/trial/start`, `/api/trial/status`, `/api/release-seats`), KV binding `TRIAL_DATA`.
- `tools/`: `ColorSpike` (hardware validation console), `ReadLog` (event-log reader), `DisplaySpike` (untracked, multi-display discovery).

**Color math** [EVIDENCE: `TRD.md` §§5–6, `docs/product-truth.md` §2]
- Row-vector 5×5 matrices, multiplied left to right; 5th row holds additive offsets (±0.25 max for brightness).
- ITU-R BT.709 luminance weights; Tanner Helland's Planckian-locus approximation for temperature, blended across the 6600 K piecewise boundary.
- Vibrancy and hue rotation keep the grey axis fixed by construction.
- Ranges: Vibrancy 0–200, Temperature 2700–10000 K, Brightness ±100, Contrast 0–200, Hue ±180°, Black Level 0–30, White Point 70–100.

**Persistence** [EVIDENCE: `ColorEffectWatchdog.cs`, `WindowsEventMonitor.cs`]
- Watchdog: 500 ms polling for the first 30 s after boot, then 5 s; reapplies on any element mismatch > 0.001; gives up after 5 consecutive unexplained conflicts → `ProtectionLost` → tray balloon.
- Event checkpoints: `[0, 250, 1000, 2500, 5000, 10000, 15000, 20000, 25000] ms`.
- A failed `MagSetFullscreenColorEffect` clears the init flag, so the next apply calls `MagInitialize` again.
- Restore on `OnExit`, `AppDomain.UnhandledException`, `DispatcherUnhandledException`.

**Licensing** [EVIDENCE: `LicensingOptions.cs`, `docs/HANDOFF.md` §2]
- `TrialDays = 14`, `MaxTamperStrikes = 3`, 24 h clock-rollback tolerance, 3-day offline grace, device cap 1 (enforced server-side by Dodo; dashboard limit was **not yet set** per docs).
- Four trial anchors (file, registry, machine-wide directory), HMAC-SHA256 signed; kept on uninstall on purpose.
- Dodo 422 → `ActivationResult.DeviceCapExceeded` → device-limit dialog; separate failure mappers for activate/validate vs deactivate.

**Release** [EVIDENCE: `scripts/build_release.ps1`]
- Version from csproj → clean → `dotnet publish` (self-contained, single-file, win-x64) → `vpk pack --noPortable true` → `vpk upload github` if `GITHUB_TOKEN` is set.
- Unsigned. No CI config in the repo.

**Security hardening pass (2026-08-25)** [EVIDENCE: `git log` 2026-08-25]
- Startup task TOCTOU + XML injection fix; process identity check before killing leftover copies; Worker rate limits / no wildcard CORS / input checks; profile range re-validation on load; xUnit/coverlet bumped to clear vulnerable transitive packages.

**Known open gaps as documented** [EVIDENCE: `docs/product-truth.md` §4]
- No Intel before/after capture; unsigned installer; checkout never completed end to end; Dodo activation limit not set; conflict detection stubbed.

---

## 17. Questions for the founder

1. Was this a **[CLIENT]** project or our own product? If client, can we name it, show the UI, or must it be anonymized?
2. Is ChromaLayer on sale today? Has anyone completed a purchase? (Answer yes/no only; we won't publish counts without permission.)
3. Who did what, and roughly how many hours or weeks went in? Git shows ~10 weeks and two authors.
4. Why were Display Clarity and the sharpening engine dropped? Is our inference (a color matrix can't sharpen) right?
5. Which autostart approach is intended: Run key only (current code) or task + Run key (current docs)?
6. Is the Cloudflare Worker deployed and used in production?
7. Has an Intel before/after been captured on real hardware? We need one for screenshot #3.
8. Is there any user feedback (Formspree submissions) we're allowed to quote?
9. Was code signing bought, or is the product still shipping unsigned?
10. Did the 1.0.x → 1.0.4 / 1.0.5 updates reach real users through the feed as the 2026-09-09 commit suggests?
11. Is the Windows angle useful for the mobile-focused site, or should this case study sit under "desktop / utility apps"?

---

## 18. Founder answers and public README (2026-09-29)

**Why we built it [FOUNDER]:** Intel's colour-changing software was poor and very frustrating; there was no full control over the screen itself. The aim was a tool that works for both Intel and AMD.

**Decisions [FOUNDER]:** skip the test count (no test number on the page). The before/after photo will be a phone photo of a real laptop screen, taken by the founder. The ChromaLayer source repo is in the `chromalayerlab` organisation (not yet visible to this session; only the public `ChromaLayer-Releases` repo is).

**Public `ChromaLayer-Releases` README, compared with the notes above:**
- README says "Any GPU (Intel, AMD, NVIDIA), no vendor-specific dependencies". The code notes (§16) say `CompatibilityAnalyzer`: **Intel supported; AMD/NVIDIA experimental**. **[NEEDS FOUNDER]** Has it been tested on AMD? Until confirmed, the page says "built for Intel laptops, designed to work on any GPU", never "works on AMD".
- README is stale on presets: it lists Gaming, Movie Night, Reading, Night Mode; the code notes list Natural, Vivid, Cinema, Gaming, Night. Use the code's list.
- README says "game-safe / avoids anti-cheat conflicts": not backed by the repo notes. Do not publish.
- README roadmap mentions Display Clarity / sharpening for v2. Do not mention on the page (it was built then removed).
- README license, contact and roadmap lines are unfinished placeholders.

**Correction [FOUNDER, 2026-09-29]:** ChromaLayer is not sold as an Intel-only tool. Intel's tool is the origin story only; the product is for any Windows laptop. The page says "any Windows laptop"; any named-GPU claim (Intel, AMD) waits until `CompatibilityAnalyzer` in the source repo is checked, or the founder confirms testing.


## 19. Founder answers, 2026-09-29 (later)

- **GPU support [FOUNDER]:** ChromaLayer supports all the main graphics makers (Intel, AMD, NVIDIA), and it is tested on them. This supersedes the product repo's "Intel supported, AMD/NVIDIA experimental" wording (`CompatibilityAnalyzer`, `docs/product-truth.md`), which should be updated in that repo. The case study says "Intel, AMD and NVIDIA graphics, tested on each".
- **Build time [FOUNDER]:** 3 weeks. **Not shown on the site:** the founder decided no project states a timeline except Assess Yourself.
