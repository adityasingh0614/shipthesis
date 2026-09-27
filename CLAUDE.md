# Studio site — working rules

## Source of truth
- .agents/product-marketing.md (the brand brief) is the single source of truth.
- If any file disagrees with the brief, the brief wins. Fix the other file without asking.
- /pricing owns all price, payment and scope-change details. Other pages give one line and link there.

## Decide these yourself — don't ask
- Wording, grammar, consistency fixes, broken or missing links, outdated headers, version numbers, changelogs.
- Anything the brief already answers.
- Small fixes found during a consistency check: fix them, then report what you changed.

## Always ask me — never guess
- Prices, timelines, client names, results, metrics, testimonials, legal or permission questions.
- Any new claim about our work that isn't in the brief or the case study raw files.

## Design and code: the skills (chosen by me, use them the whole way)
- **`impeccable`**: the main design skill for everything: planning, building, critique, audit, polish. Follow its flow (init → direction → build → finish review). Don't run its downloader script; use its documented fallback (read PRODUCT.md / DESIGN.md directly).
- **`design-taste-frontend`**: run its pre-flight check on every section before showing it to me, and fix what fails.
- **`copywriting`**: any new or changed words.
- Where a skill's default conflicts with my pinned brand commitments (light theme only, green, Phudu headings, JetBrains Mono labels — full list in docs/design/home-brief.md section 0), my commitments win. Everything else about the look is the skills' call.
- Every section heading (the H2 and its subheading) is centred, on every page.
- docs/design/DESIGN.md is an old pre-build reference, not binding. Impeccable writes the real one from the finished build.

## Building the site (section by section)
- Stack: Next.js (App Router, TypeScript) on Vercel. Product facts for the design skills: PRODUCT.md.
- Each section starts from reference screenshots I send. If they aren't enough, open the referenced live site in Chrome and study it. Wait for my first reference before building a section.
- Build one Home section at a time, in the order in docs/design/home-brief.md. The hero animation is built last.
- What each section must say: docs/design/home-brief.md. Facts: the brand brief. Copy: docs/copy/home.md (update it to match what's built).
- Look at each section once at phone and desktop width, fix what's visibly wrong, then show it to me.
- One section per round. Don't start the next section until I've approved the current one.

## How to report
- Do the whole task first. Then give me ONE short report: what you changed, and at the end a single list of questions only I can answer.
- Only show drafts before saving for new pages or new case studies. Edits to existing files: just save and report.
- Never mention Pawgloo. Never publish client prices. No discounts on the site.
