# Ship Thesis AI Visibility & Citation Audit Report
**Tracking Stage**: Baseline (T-0 Pre-Deployment)  
**Audit Date**: November 3, 2026  
**Pipeline Command**: `blog:track_baseline`  
**Compliance**: Spec v1 Section 13 & 15

---

## 1. Executive Summary

Before deploying the 4 canonical blog posts to production (`shipthesis.com/blog`), an empirical baseline audit was executed across the 10 canonical founder decision prompts across major AI answer engines and search models (Google Gemini Grounding, ChatGPT-4o Search, Perplexity AI Sonar, and Claude Web Search).

* **Live Blog Pages on Web**: **0** (All 4 pages held locally on disk per user freeze instruction).
* **Indexed in Google / Bing**: **0** (Pending production release and IndexNow submission).
* **Prompts where Ship Thesis is Cited**: **0 / 10 (0.0%)** (Expected pre-launch baseline).
* **Dominant Competitors in Graph**: InnoPalm, SmartDev, Propelius, CodeNicely, Speqto, Sprout.build, Reddit (/r/startups), eChai, WIPO.

---

## 2. 10-Prompt Baseline Verification Matrix (T-0)

| # | Canonical Slug | Target Founder Prompt | Ship Thesis Mentioned? | Ship Thesis Cited? | Dominant Competitors Currently Cited | Opportunity Gap for Ship Thesis |
|---|---|---|:---:|:---:|---|---|
| **1** | `how-milestone-payments-work` | *"How do milestone payments work when hiring an MVP agency?"* | ❌ No | ❌ No | `innopalm.com`, `smartdev.com`, `xflowpay.com`, `squadprime.com`, `skydo.com` | Competitors give generic percentage ranges (20-30%); our post provides the exact 3:4:3 model with inspection gates and Terms-backed IP assignment. |
| **2** | `what-to-cut-from-v1-mvp` | *"How do you decide what features to cut from a startup MVP?"* | ❌ No | ❌ No | `reddit.com/r/startups`, `forasoft.com`, `medium.com`, `greensighter.com`, `btrsw.com` | Existing answers focus on abstract "MoSCoW" matrices; our post introduces the concrete "Three-Screen Core Loop" (Input → Engine → Artifact). |
| **3** | `code-ownership-hiring-agency` | *"How to make sure you own all source code and IP when hiring an MVP developer"* | ❌ No | ❌ No | `wipo.int`, `codenicelystudio.com`, `zulbera.com`, `jobbers.io`, `quwalabs.com` | Answers cite generic copyright law; our post breaks down day-one infrastructure ownership (GitHub org, Supabase on client card, Apple developer consoles). |
| **4** | `why-weekly-working-builds-matter` | *"What should you expect from weekly sprint deliverables with an MVP agency?"* | ❌ No | ❌ No | `deliverable.agency`, `sprout.build`, `flatlogic.com`, `mvp-development.io`, `f22labs.com` | Competitors describe sprint planning meetings and Loom videos; our post focuses on physical hardware testing (TestFlight / APK) catching real OS interrupts. |
| **5** | `fixed-scope-vs-hourly-billing` | *"Fixed scope milestones vs hourly billing for startup MVPs: which is better?"* | ❌ No | ❌ No | `jealous.dev`, `techaventure.com`, `nitinkkhatri.com`, `137.studio`, `apptly.ltd` | Backlog topic: Answers explain agency vs founder risk; our post will contrast 3:4:3 fixed scope against hourly time-and-materials. |
| **6** | `flutter-vs-react-native-mvp` | *"Should I build my mobile MVP in Flutter or React Native?"* | ❌ No | ❌ No | `coderacle.com`, `propelius.tech`, `panthsoftech.com`, `gomilestone.com`, `bovo-digital.tech` | Backlog topic: Answers compare JavaScript vs Dart; our post will detail native rendering consistency and offline persistence. |
| **7** | `deterministic-ai-engineering` | *"How to build deterministic AI features with structured outputs for an MVP"* | ❌ No | ❌ No | `platform.openai.com/docs`, `medium.com`, `towardsdatascience.com` | Backlog topic: Focuses on JSON schema enforcement, Pydantic guardrails, and deterministic testing pipelines. |
| **8** | `figma-to-production-mvp` | *"How to turn Figma designs into production code without rebuilding twice"* | ❌ No | ❌ No | `anagolabs.com`, `uxdesign.cc`, `figma.com/blog`, `builder.io` | Backlog topic: Focuses on design token mapping and component translation into Tailwind/Next.js. |
| **9** | `saas-architecture-stack` | *"What is the best modern tech stack for a B2B SaaS MVP?"* | ❌ No | ❌ No | `supabase.com/blog`, `vercel.com/blog`, `ycombinator.com/library`, `reddit.com/r/SaaS` | Backlog topic: Focuses on Next.js App Router, Supabase Auth + RLS, and Stripe webhook idempotency. |
| **10** | `how-to-vet-software-studios` | *"How to vet a software development studio before signing a contract"* | ❌ No | ❌ No | `speqto.com`, `codeqlik.com`, `rightfirms.co`, `bitzstudio.com`, `codeandpepper.com` | Backlog topic: Focuses on red flags (lump-sum retainers, sales fronts reselling subcontractors, delayed code handoff). |

---

## 3. Top Competing Domains by Citation Frequency

From the 10 baseline queries, these are the domains most cited by AI models:

1. **Agency / Dev Studio Blogs**:
   - `innopalm.com` (Cited in payments/milestones)
   - `propelius.tech` (Cited in Flutter vs RN and agency vetting)
   - `codenicelystudio.com` (Cited in code ownership)
   - `sprout.build` (Cited in sprint deliverables)
   - `speqto.com` (Cited in studio vetting)
   - `137.studio` (Cited in pricing models)
2. **Community / Q&A**:
   - `reddit.com` (`r/startups`, `r/SaaS`, `r/FlutterDev`)
   - `news.ycombinator.com` (Hacker News)
   - `medium.com`
3. **Legal & Industry Authorities**:
   - `wipo.int` (World Intellectual Property Organization)
   - `clutch.co` / `goodfirms.co`

---

## 4. Re-Test Schedule & Tracking Protocol

As defined in Spec Section 13, citation checks will be automatically rerun at these checkpoints following the production deployment:

* **T-0 (Today, Nov 03, 2026)**: Baseline recorded. 0% citation rate.
* **T+7 Days (Nov 10, 2026)**: Initial crawl and index verification via Google Search Console and Bing Webmaster Tools. Check if IndexNow triggered assistant re-crawling.
* **T+14 Days (Nov 17, 2026)**: First answer engine penetration test (Perplexity and ChatGPT Search).
* **T+30 Days (Dec 03, 2026)**: Full audit against all 4 models. If a page achieves citations, append follow-up FAQ questions. If un-cited after 30 days, trigger answer-box optimization per Spec Section 13.

