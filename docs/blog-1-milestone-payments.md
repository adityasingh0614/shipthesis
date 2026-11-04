# How Do Milestone Payments Work When Hiring an MVP Agency?

Milestone payments divide an MVP development contract into verifiable deliverable stages where capital is only released after working software is inspected and approved. Rather than paying 100% upfront or open-ended hourly retainers, founders typically use a 30/40/30 structure (deposit, core working architecture, and final production cutover) to eliminate delivery risk.

### The Short Version
* **Capital follows working code**: You never pay for unverified developer promises or elapsed time; payment triggers only when functional software is deployed and tested.
* **Balanced risk distribution**: A 30% deposit initiates the project, 40% releases upon delivery of the core architecture, and the final 30% releases only after production launch and sign-off.
* **Objective acceptance criteria**: Every milestone defines exact verification conditions—such as database migrations running in staging or API endpoints returning expected payloads—preventing subjective payment disputes.

---

## Why Upfront Full Payments and Hourly Billing Burn Founders

Traditional software procurement models consistently misalign incentives between early-stage founders and dev agencies. 

When an agency demands a massive lump sum upfront (such as 50% or 100% before work starts), the financial risk transfers entirely to the founder. If the agency stalls, encounters architectural roadblocks, or assigns junior talent behind the scenes, the founder has already surrendered their leverage. The agency has already collected its revenue, removing the urgency to ship.

Conversely, open-ended hourly billing (time-and-materials) rewards inefficiency. Under an hourly contract, every technical mistake, architectural redesign, or scope misunderstanding inflates the agency’s invoice while bleeding the founder's runway. The agency profits from taking longer, while the founder needs to launch in weeks.

Milestone payments solve this misalignment by converting the relationship into deliverable-driven tranches. The agency is incentivized to maintain momentum and hit milestones promptly to unlock billing, while the founder retains capital until concrete progress is proven in staging.

---

## The 3:4:3 Milestone Structure Explained

The most reliable framework for scoping and delivering an MVP in weeks is the 3:4:3 payment schedule. This model splits the project into three distinct phases:

| Milestone Phase | Percentage Tranche | Trigger Event | Deliverable & Acceptance Gate |
|---|:---:|---|---|
| **Milestone 1: Kickoff & Infrastructure** | **30% Deposit** | Contract signing and repository setup | Initial codebase committed to client's GitHub, cloud accounts provisioned, UI/UX flows approved. |
| **Milestone 2: Core Architecture** | **40% Midway** | Verified working core user loop in staging | Authentication, database schema, and primary value feature functioning and testable on real devices. |
| **Milestone 3: Production Cutover** | **30% Final** | Production deployment and client sign-off | App store submission or production cutover, third-party billing live, final source code handover. |

### 1. Milestone 1: The 30% Commitment Deposit
The initial 30% deposit secures dedicated engineering time and funds foundational setup. During this phase, we establish your development environment, configure cloud infrastructure, and set up the repository. 

Crucially, this deposit should never exceed 30%. Demanding 50% or more upfront indicates poor financial reserves on the agency's part or a lack of confidence in their ability to deliver verifiable work.

### 2. Milestone 2: The 40% Core Working Build
The 40% midway tranche represents the heavy engineering lift. This milestone triggers only when the core hypothesis of your software is functional and testable in a staging environment. 

For a SaaS platform, this means the database migrations run, authentication functions, and the primary data workflow executes end-to-end. For a mobile app, this means an installable build is pushed to your phone where you can tap through real user journeys without simulated mockups.

### 3. Milestone 3: The 30% Final Cutover
The remaining 30% is withheld until the product is deployed to production, third-party integrations (like payment gateways and analytics) are verified live, and administrative ownership is handed over. Holding back the final 30% ensures the agency stays engaged through edge cases, bug fixes, and store review approvals.

---

## What Acceptance Criteria Must Be Verified Before Releasing Payment?

A milestone contract is only as good as its acceptance criteria. Vague terms like "frontend work completed" or "progress on backend" create subjective disputes. Every milestone must be tied to deterministic, observable gates:

1. **Working deployment in a test environment**: You must be able to log in, interact with data, and execute the primary user workflow on a live preview URL or physical phone.
2. **Automated build passes**: All unit tests, TypeScript type checks, and linting rules must pass in CI/CD without fatal errors.
3. **Clean code committed to your GitHub**: All code for that sprint must be pushed directly to your organization's repository, not held on local machines or private agency forks.
4. **Defined review window**: The contract should give you a fixed window (typically 3 to 5 business days) to test the build and report blocking bugs before the invoice is finalized.

---

## How Ship Thesis Structures Milestone Agreements

At Ship Thesis, we build web applications, SaaS platforms, and mobile apps for founders using strict 3:4:3 milestone splits on every project. We never ask for full upfront payment, and we do not bill by the hour.

When we built **Poststeady**, our in-house automated SaaS reporting utility, we followed this exact milestone process. Milestone 1 provisioned the multi-tenant architecture and Next.js foundation. Milestone 2 required the automated report generation engine to ingest real CSV data and output structured written analysis in staging before the midway payment released. Milestone 3 executed production cutover on `poststeady.com`, verified live Stripe billing webhooks, and finalized deployment.

Because code lives in your own GitHub repository from day one, you always retain 100% ownership of everything built during each milestone.

> [Client review to be added once reviews go live on the site]

---

## Frequently Asked Questions

### What happens if an agency fails to deliver a milestone?
If a deliverable fails to meet the agreed acceptance criteria, payment for that tranche is paused without penalty. Because you only paid the initial deposit, your downside is strictly limited, and you retain all source code committed up to that point.

### Can milestone deliverables change during development?
Yes, but requirement changes must be handled through explicit scope adjustments rather than informal feature additions. If a founder wants to add a new workflow midway through development, both parties agree on what secondary feature to swap out to keep the milestone and timeline intact.

### How long should you take to review and approve a milestone?
Founders should complete acceptance testing within 3 to 5 business days of receiving the staging build. Prompt testing keeps the engineering team in context and maintains delivery momentum.

---

## Ready to Scope Your MVP?

If you are planning to build an MVP and want a transparent milestone roadmap with verifiable deliverables, book a call with our team.

We will review your user flow, database requirements, and core screen architecture, and show you exactly how to split your project into predictable 3:4:3 milestones.

[Book a Free 20-Minute Assessment Call]({{BOOKING_URL}})

---
*Author: Ship Thesis · Last Updated: November 2, 2026*

