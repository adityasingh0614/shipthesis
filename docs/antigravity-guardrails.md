# Antigravity Guardrails and Fix List
Draft v1 · November 3, 2026 · Saved as /docs/antigravity-guardrails.md

## 1. What went wrong
This was not deliberate. Antigravity writes plausible text to fill gaps, then checks its own work with a weak checker. Four patterns caused the problems:
1. **It fills gaps with invented detail.** The page template asks for one real project detail, and the ledger holds only a few facts, so it invents the rest. Examples: Assess Yourself being "built around three primary screens," weekly device testing being "central to delivery," and "we guide you through creating your accounts."
2. **Its lint cannot catch claims.** All four pages scored 100/100, yet "10,000+ students" appears in pages 2 and 4 and is not in the ledger. The lint checks banned words and word counts only.
3. **It writes absolutes with confidence.** Examples: "almost every successful software product began as a three-screen workflow," "any competent engineer can start immediately," and a physical phone hides "nothing."
4. **Its advice can contradict your own Terms.** Page 3 tells founders to demand IP assignment on creation and all committed code on termination. By Antigravity's own reading, your Terms tie IP assignment to payment and return what has been paid for. A reader could point that out.

---

## 2. Guardrails (follow for all content work)
Read this before any content task. If a rule blocks the task, stop and ask.
1. **Every claim carries an ID.** Give each ledger entry an ID (for example BILL-1, OWN-1, BUILD-1, AY-1). Every sentence about Ship Thesis, its projects, process, stack or numbers ends with a tag like `{{c:BILL-1}}`. The build strips the tags. A sentence about us with no ID fails lint.
2. **Never fill a gap.** If the ledger lacks a detail, write the section without it or insert `{{NEEDS-FACT: what is missing}}`. Never invent a story, process, tool, number, date or outcome. Lint fails on any `NEEDS-FACT` left in a page.
3. **Numbers about Ship Thesis must be in the ledger, with a source:** students served, screens, days, percentages. Generic advice numbers (for example a 20-minute Friday check) are fine.
4. **No unsourced absolutes.** Lint flags: *always, never, every, almost every, any competent, nothing, zero, completely, guarantee, immediately*, and hype words (*ruthless, bulletproof, battle-tested, predatory, catastrophic*). The 30/40/30 split and any ledger-backed "100%" are exceptions.
5. **Contract and legal statements must match our Terms.** Quote the Terms sentence behind every statement about our contract. Advice to founders must never demand more than our own Terms give. Keep the "general information, not legal advice" line.
6. **No jabs at other agencies.** No "agency bloat," "sales fronts" or similar. Describe what we do.
7. **Technical facts must be accurate.** Say only what a named tool does, and check its documentation. If unsure, delete the sentence.
8. **Verify in a separate pass.** After drafting, produce a table of every Ship Thesis claim with its ledger ID and, for contract claims, the Terms quote. Use a different model or a fresh session if possible. A page cannot go to review without this table.
9. **Make lint honest.** Lint prints the exact failing sentences, not a score. Before relying on it, test it with a deliberately bad page (a fake claim, a number not in the ledger, a leftover NEEDS-FACT) and show that it fails.
10. **Report plainly.** Label each item "verified" (with the quote) or "assumed." Do not write "verified" or "100/100" without listing the checks.
11. **Do not change what is approved.** Visuals, slugs, ledger claims and decisions stay as they are unless I say so. Ask first.
12. **Per-page assets and dates.** Every page gets its own cover, and a check fails if the cover filename does not match the slug. The last-updated date is set at publish time. The booking link must resolve in the rendered HTML.
13. **A tag is not proof.** A tagged sentence may contain only facts that appear in the cited ledger entry. Split ledger entries into one fact each.
14. **Project proof sentences must be copied from the ledger entry with grammar changes only.** Never invent what happened during a build. In-house products (Poststeady, ChromaLayer) have no clients and no milestone payments.
15. **Claims about contract outcomes must quote our Terms or be removed.** Never recommend clauses that favor the studio in a founder checklist.
16. **Advice numbers must not contradict our Terms.**

---

## 3. Fix list

### Claims ledger
* Remove "ruthlessly," "agency bloat" and "sales-front reselling."
* Remove "Zero proprietary agency wrapper frameworks or vendor lock-in" unless Adiya confirms it.
* Use the Terms wording for milestones: 30% kickoff deposit due before sprint scheduling and repository setup, 40% on the interactive mid-stage test build, 30% on handover and submission. Remove "client sign-off" unless the Terms say it.
* Remove "app store accounts belong directly to the client" unless a Terms sentence supports it.
* Add "serves 10,000+ students" for Assess Yourself only after Adiya confirms it, with a source.
* Replace "removed per founder directive" with "not offered on the site yet."
* Give every entry an ID.

### Page 1
* Remove or fill the review placeholder.
* Match the IP wording to the Terms.
* Check the final booking link and date.

### Page 2
* Delete "Almost every successful software product began as a three-screen workflow."
* Rewrite the Assess Yourself section using only ledger facts (offline-first, timed state survives OS kills, phone calls and battery savers, Excel importer with row-level validation). Delete "built around three primary screens," "within weeks" and the screen-by-screen list unless confirmed.
* Delete "10,000+" unless it is added to the ledger.
* Delete "without agency bloat." Soften "production-grade."

### Page 3
* Make the IP checklist match our Terms (assignment tied to payment, deliverables that have been paid for).
* Delete "We guide you through creating your GitHub organization..." and "We walk founders through this setup" unless Adiya confirms them.
* Soften "start shipping features immediately."
* Give the page its own cover set. It currently uses page 1's images.

### Page 4
* Delete "weekly testing on physical devices was central to delivery" and the sentence claiming it allowed us to verify offline persistence, unless confirmed.
* Delete "Friday afternoon" (the ledger says Friday).
* Fix the TestFlight FAQ: internal testing groups are for App Store Connect team members, so say investors can be invited as external testers.
* Change the table cell "Nothing" to something accurate.
* Cut the Fastlane and CI/CD section or keep it clearly generic.
* Delete "10,000+" unless confirmed.

### Diagram and build
* Remove "7 business days" from card 2. Quote a Terms sentence for every other line or delete it.
* Remove /blog/example-post.

---

## 4. Message to paste to Antigravity
Read /docs/antigravity-guardrails.md fully and follow it from now on.
1. Add IDs to the claims ledger and apply the ledger fixes in section 3.
2. Rebuild blog:lint to enforce guardrails 1 to 4, 9 and 12. Test it with a deliberately wrong page and show that it fails.
3. Apply the page fixes in section 3 to pages 1 to 4. Make no visual changes.
4. Produce the verification table from guardrail 8 for all four pages, with ledger IDs and Terms quotes.
5. Show me the final text of any page you changed. Do not deploy.

