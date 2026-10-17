import type { Metadata } from "next";
import { LegalLayout, type TocItem } from "@/components/legal/LegalLayout";
import styles from "@/components/legal/LegalPage.module.css";

export const metadata: Metadata = {
  title: "Terms of Service | Ship Thesis",
  description:
    "Standard terms of service, intellectual property assignment, payment milestones, and warranty terms for Ship Thesis software engineering engagements.",
  robots: {
    index: false,
    follow: false,
  },
};

const TOC: TocItem[] = [
  { id: "services", num: "01", title: "Engagement Models & Scope" },
  { id: "ownership", num: "02", title: "IP & Work Made For Hire" },
  { id: "payments", num: "03", title: "Fees & Payment Milestones" },
  { id: "acceptance", num: "04", title: "Review & Deemed Acceptance" },
  { id: "scope-changes", num: "05", title: "Scope Evolution & Swaps" },
  { id: "client-accounts", num: "06", title: "Client Accounts & Access" },
  { id: "warranty", num: "07", title: "30-Day Launch Warranty" },
  { id: "support-plans", num: "08", title: "Ongoing Care Retainers" },
  { id: "confidentiality", num: "09", title: "Mutual Confidentiality & NDA" },
  { id: "liability", num: "10", title: "Liability & Platform Carve-Outs" },
  { id: "contractor", num: "11", title: "Independent Contractor Status" },
  { id: "disputes", num: "12", title: "Dispute Resolution & Law" },
];

export default function TermsPage() {
  return (
    <LegalLayout
      currentDoc="terms"
      title="Terms of Service"
      badgeText="Legal Agreement"
      lede="We build software with clear boundaries, fixed pricing, and full intellectual property ownership. When you partner with Ship Thesis, you own your code, your repository, and your product from day one. Here are the ground rules for our engagements."
      lastUpdated="October 17, 2026"
      effectiveDate="October 17, 2026"
      toc={TOC}
    >
      {/* 01 · Services & Scope */}
      <section id="services" className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionNum}>01</span>
          <h2 className={styles.sectionTitle}>Engagement Models &amp; Scope</h2>
        </div>
        <p className={styles.bodyText}>
          These Terms of Service (&ldquo;Terms&rdquo;) govern all design, architecture, engineering, and consulting services provided by <strong>Ship Thesis Studio</strong> (&ldquo;Ship Thesis&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;Studio&rdquo;) to the startup founder, company, or legal entity entering into an engagement (&ldquo;Client&rdquo; or &ldquo;you&rdquo;).
        </p>
        <p className={styles.bodyText}>
          We deliver services strictly under written, mutually approved Statements of Work (SOWs) or sprint agreements across three standardized models:
        </p>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <strong>Discovery Sprint (1 week):</strong> An intensive, fixed-fee exploratory sprint delivering a written product specification, feature taxonomy (&ldquo;version one&rdquo; vs. &ldquo;future roadmap&rdquo;), user journey wireframes, system architecture plan, and a binding fixed quote with milestone timelines.
          </li>
          <li className={styles.listItem}>
            <strong>MVP Build (typically 6–10 weeks):</strong> End-to-end design, database modeling, and production-grade software development with weekly testable builds delivered directly to Client devices for verification.
          </li>
          <li className={styles.listItem}>
            <strong>Product &amp; App Care:</strong> Recurring monthly retainers providing proactive dependency upgrades, operating system target compliance (iOS/Android), vulnerability patching, uptime monitoring, and continuous minor feature iterations.
          </li>
        </ul>
      </section>

      {/* 02 · Code Ownership & Work Made For Hire */}
      <section id="ownership" className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionNum}>02</span>
          <h2 className={styles.sectionTitle}>Intellectual Property &amp; Work Made For Hire</h2>
        </div>
        <div className={styles.callout}>
          <div className={styles.calloutBadge}>100% Client Ownership Guarantee</div>
          <p className={styles.calloutText}>
            You own all custom source code, design systems, application assets, and database schemas created for your project. We hold zero proprietary vendor lock-in and charge no ongoing software licensing fees.
          </p>
        </div>
        <p className={styles.bodyText}>
          <strong>Statutory Assignment:</strong> To the fullest extent permitted by applicable law (including 17 U.S.C. &sect; 101 for United States clients), all bespoke deliverables created specifically for Client shall be deemed &ldquo;work made for hire.&rdquo; To the extent any deliverable does not qualify as work made for hire, Ship Thesis hereby unconditionally and irrevocably assigns, transfers, and conveys to Client all worldwide right, title, and interest in and to such deliverables, including all copyrights, patents, trade secrets, and proprietary rights.
        </p>
        <p className={styles.bodyText}>
          <strong>Payment Condition Precedent:</strong> Full assignment of intellectual property rights for each respective milestone is strictly conditioned upon receipt of full payment of all fees due for that specific milestone. Prior to full milestone payment, Client holds a revocable, non-exclusive internal evaluation license.
        </p>
        <p className={styles.bodyText}>
          <strong>Studio Pre-Existing Tooling:</strong> Ship Thesis retains ownership of its internal starter scaffolds, general utility libraries, build scripts, and general engineering know-how (&ldquo;Background IP&rdquo;). To the extent Background IP is embedded in Client deliverables, Ship Thesis grants Client a perpetual, irrevocable, worldwide, royalty-free, fully paid-up license to use, modify, compile, and distribute such Background IP solely as integrated within Client&rsquo;s application.
        </p>
        <p className={styles.bodyText}>
          <strong>Permissive Open Source:</strong> Components leveraging standard open-source libraries (e.g., Flutter SDK, React, Next.js, MIT/Apache-2.0 packages) remain governed by their applicable permissive licenses.
        </p>
      </section>

      {/* 03 · Payments & Milestones */}
      <section id="payments" className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionNum}>03</span>
          <h2 className={styles.sectionTitle}>Fees, Currency &amp; Payment Milestones</h2>
        </div>
        <p className={styles.bodyText}>
          All quotes and invoices are denominated and payable in <strong>United States Dollars (USD)</strong> via approved electronic payment methods (Stripe, Razorpay, or wire transfer). We operate on fixed, predictable milestones:
        </p>
        <ul className={styles.numList}>
          <li className={styles.numItem}>
            <span className={styles.numBadge}>1</span>
            <div>
              <strong>Discovery Sprint:</strong> Fixed fee of $750, due prior to sprint kickoff. If Client commissions the full MVP Build within thirty (30) days of sprint completion, 100% of the $750 fee is credited toward the build cost. If Client elects not to continue, Client retains all Discovery deliverables unconditionally.
            </div>
          </li>
          <li className={styles.numItem}>
            <span className={styles.numBadge}>2</span>
            <div>
              <strong>MVP Build Milestone Schedule:</strong>
              <ul className={styles.list}>
                <li className={styles.listItem}><strong>30% Kickoff Deposit:</strong> Due prior to sprint scheduling, design system initialization, and repository setup.</li>
                <li className={styles.listItem}><strong>40% Mid-Build Milestone:</strong> Invoiced upon delivery of the interactive mid-stage test build demonstrating core user authentication and primary feature flows.</li>
                <li className={styles.listItem}><strong>30% Handover &amp; Submission:</strong> Invoiced upon submission to the Apple App Store / Google Play Console or production web release.</li>
              </ul>
            </div>
          </li>
          <li className={styles.numItem}>
            <span className={styles.numBadge}>3</span>
            <div>
              <strong>Payment Terms &amp; Sprint Continuity:</strong> Invoices are payable within seven (7) business days of issuance. If an invoice remains unpaid past fourteen (14) days, Ship Thesis reserves the right to pause active development sprints without incurring project delay penalties until the account is brought current.
            </div>
          </li>
        </ul>
      </section>

      {/* 04 · Milestone Review & Deemed Acceptance */}
      <section id="acceptance" className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionNum}>04</span>
          <h2 className={styles.sectionTitle}>Milestone Review &amp; Deemed Acceptance</h2>
        </div>
        <p className={styles.bodyText}>
          To maintain engineering momentum and protect both parties against open-ended drift, milestone deliverables follow a clear verification protocol:
        </p>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <strong>Review Window:</strong> Client shall have <strong>seven (7) business days</strong> following delivery of each milestone build to test and inspect the deliverable against the written scope specifications.
          </li>
          <li className={styles.listItem}>
            <strong>Defect Notification:</strong> If Client identifies reproducible functional defects or deviations from the agreed scope, Client must submit a consolidated written defect report before the review window closes. Ship Thesis will promptly remediate verified defects at no additional charge.
          </li>
          <li className={styles.listItem}>
            <strong>Deemed Acceptance:</strong> If Client does not submit a written defect notice within the seven (7) business day review window, or deploys the build to public/commercial use, the deliverable shall be deemed irrevocably accepted and the milestone achieved.
          </li>
        </ul>
      </section>

      {/* 05 · Scope Evolution & Swaps */}
      <section id="scope-changes" className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionNum}>05</span>
          <h2 className={styles.sectionTitle}>Scope Evolution &amp; Agile Swapping</h2>
        </div>
        <p className={styles.bodyText}>
          Building an early-stage startup requires rapid learning. We accommodate product evolution without predatory billing:
        </p>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <strong>In-Sprint Micro-Adjustments:</strong> Routine UI copy updates, micro-interaction tweaks, and minor workflow refinements that do not alter core architecture are absorbed directly into the active sprint.
          </li>
          <li className={styles.listItem}>
            <strong>Equivalent Feature Swapping:</strong> If testing reveals a planned feature is redundant, Client may substitute an alternative feature of comparable technical complexity at zero additional cost, provided engineering on the replaced feature has not already been completed.
          </li>
          <li className={styles.listItem}>
            <strong>Material Scope Additions:</strong> Substantial new capabilities or third-party integrations outside the original scope are quoted upfront with transparent fixed pricing and timeline adjustments before work commences.
          </li>
        </ul>
      </section>

      {/* 06 · Client Accounts & Infrastructure */}
      <section id="client-accounts" className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionNum}>06</span>
          <h2 className={styles.sectionTitle}>Client Accounts &amp; Access</h2>
        </div>
        <p className={styles.bodyText}>
          To guarantee long-term operational autonomy and protect Client valuation during investor due diligence, all third-party platforms remain registered directly under Client ownership:
        </p>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <strong>Developer Consoles:</strong> Client holds direct accounts with the Apple Developer Program ($99/year) and Google Play Console ($25 one-time).
          </li>
          <li className={styles.listItem}>
            <strong>Cloud Infrastructure:</strong> Cloud hosting (Supabase, AWS, Vercel, Firebase) and API providers (OpenAI, Resend, payment gateways) are billed directly to Client&rsquo;s corporate payment card.
          </li>
          <li className={styles.listItem}>
            <strong>Credential Security:</strong> Administrative or developer access granted to Ship Thesis must be transmitted via end-to-end encrypted vaults (e.g., 1Password, Bitwarden). Neither party will send plaintext secrets over email or unencrypted chat.
          </li>
          <li className={styles.listItem}>
            <strong>Timely Approvals:</strong> Client agrees to provide necessary account invitations, domain verifications, and App Store review materials in a timely manner. Delays in third-party account provisioning automatically extend project timelines proportionally.
          </li>
        </ul>
      </section>

      {/* 07 · 30-Day Launch Warranty */}
      <section id="warranty" className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionNum}>07</span>
          <h2 className={styles.sectionTitle}>30-Day Launch Warranty</h2>
        </div>
        <div className={styles.callout}>
          <div className={styles.calloutBadge}>Complimentary Bug Warranty</div>
          <p className={styles.calloutText}>
            Every custom MVP build includes thirty (30) consecutive calendar days of complimentary post-launch bug remediation starting immediately upon production deployment or mobile store release.
          </p>
        </div>
        <p className={styles.bodyText}>
          During the warranty period, Ship Thesis will investigate and resolve, at zero additional charge, any verified software defects or functional regressions representing deviations from the approved written scope.
        </p>
        <p className={styles.bodyText}>
          <strong>Warranty Exclusions:</strong> The warranty does not cover: (a) issues arising from direct modifications to the codebase made by Client or third-party developers; (b) breaking changes or deprecations introduced by third-party APIs (e.g., Apple Store guideline changes or LLM API version sunsets); or (c) server outages caused by third-party cloud hosts.
        </p>
      </section>

      {/* 08 · Ongoing Care Retainers */}
      <section id="support-plans" className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionNum}>08</span>
          <h2 className={styles.sectionTitle}>Ongoing Care Retainers</h2>
        </div>
        <p className={styles.bodyText}>
          Following the 30-day warranty, Client may retain dedicated engineering bandwidth through monthly Care retainers:
        </p>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <strong>App Care (from $300/mo):</strong> Routine framework dependency upgrades, iOS/Android SDK target compliance, security vulnerability remediation, and priority incident diagnostics.
          </li>
          <li className={styles.listItem}>
            <strong>Product Care (from $550/mo):</strong> Includes all App Care benefits plus monthly feature optimizations, minor workflow iterations, and database index tuning.
          </li>
          <li className={styles.listItem}>
            <strong>Full Care (from $900/mo):</strong> Dedicated engineering bandwidth, expedited response SLAs, continuous UX improvements, and architectural advisory.
          </li>
        </ul>
        <p className={styles.bodyText}>
          Care plans are billed monthly in advance and may be canceled by either party with fourteen (14) days&rsquo; written notice prior to the start of the next billing cycle.
        </p>
      </section>

      {/* 09 · Mutual Confidentiality & NDA */}
      <section id="confidentiality" className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionNum}>09</span>
          <h2 className={styles.sectionTitle}>Mutual Confidentiality &amp; NDA</h2>
        </div>
        <p className={styles.bodyText}>
          Both parties agree that all non-public technical, financial, business, and strategic information disclosed during the engagement constitutes Confidential Information. This includes startup pitch decks, unreleased designs, algorithms, financial projections, customer data, and source code.
        </p>
        <p className={styles.bodyText}>
          Each party shall protect the other&rsquo;s Confidential Information with the same degree of care it uses for its own confidential data (and not less than reasonable care). Confidential Information shall not be disclosed to any third party without prior written consent.
        </p>
        <p className={styles.bodyText}>
          <strong>Public Attribution &amp; Portfolio Rights:</strong> Unless Client explicitly requests a private white-label engagement in writing prior to project kickoff, Ship Thesis reserves the right to display non-confidential UI screenshots, descriptive case summaries, and public metrics in its portfolio and marketing materials <em>only after the product has launched publicly</em>.
        </p>
      </section>

      {/* 10 · Liability & Platform Disclaimers */}
      <section id="liability" className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionNum}>10</span>
          <h2 className={styles.sectionTitle}>Limitation of Liability &amp; Disclaimers</h2>
        </div>
        <p className={styles.bodyText}>
          Ship Thesis warrants that services will be performed in a professional, workmanlike manner adhering to modern software engineering standards. Except as expressly stated herein, all deliverables are provided &ldquo;as is&rdquo;, without warranty of any kind, whether express, statutory, or implied.
        </p>
        <p className={styles.bodyText}>
          <strong>Consequential Damages Waiver:</strong> To the maximum extent permitted by applicable law, neither party shall be liable to the other for any indirect, incidental, special, punitive, or consequential damages (including loss of profits, revenue, data, business goodwill, or cost of substitute goods), even if advised of the possibility of such damages.
        </p>
        <p className={styles.bodyText}>
          <strong>Absolute Liability Cap:</strong> In no event shall Ship Thesis&rsquo;s aggregate cumulative liability arising out of or related to an engagement exceed the total fees actually received by Ship Thesis from Client under the applicable Statement of Work in the three (3) months preceding the event giving rise to liability.
        </p>
        <p className={styles.bodyText}>
          <strong>Platform &amp; Store Approval Carve-Out:</strong> While Ship Thesis designs and packages mobile apps in strict accordance with Apple App Store Review Guidelines and Google Play Developer Policies, final approval is within the sole discretion of Apple Inc. and Google LLC. Ship Thesis shall not be liable for store review queue delays or arbitrary platform policy changes beyond reasonable developer control.
        </p>
      </section>

      {/* 11 · Independent Contractor & Non-Solicitation */}
      <section id="contractor" className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionNum}>11</span>
          <h2 className={styles.sectionTitle}>Independent Contractor Status &amp; Non-Solicitation</h2>
        </div>
        <p className={styles.bodyText}>
          <strong>Independent Contractor:</strong> Ship Thesis performs all services as an independent contractor. Nothing in these Terms shall be construed to create an employment, partnership, joint venture, agency, or fiduciary relationship between the parties. Neither party has authority to bind or obligate the other.
        </p>
        <p className={styles.bodyText}>
          <strong>Mutual Non-Solicitation:</strong> During the active engagement and for a period of twelve (12) months following project completion, neither party shall directly or indirectly solicit, recruit, or hire any engineer, designer, or core contractor of the other party without prior written agreement and payment of an agreed placement fee.
        </p>
      </section>

      {/* 12 · Termination, Governing Law & Disputes */}
      <section id="disputes" className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionNum}>12</span>
          <h2 className={styles.sectionTitle}>Termination, Governing Law &amp; Dispute Resolution</h2>
        </div>
        <p className={styles.bodyText}>
          <strong>Termination:</strong> Either party may terminate an ongoing engagement for convenience upon fourteen (14) days&rsquo; prior written notice, or immediately in the event of an uncured material breach by the other party after seven (7) days&rsquo; written notice. Upon termination, Client shall pay for all milestone work performed up to the termination date, and Ship Thesis shall promptly deliver all completed deliverables, source code, and credentials paid for.
        </p>
        <p className={styles.bodyText}>
          <strong>Informal Negotiation:</strong> In the event of any controversy, claim, or dispute arising out of or related to these Terms, the parties agree to first attempt to resolve the dispute through good-faith executive consultation for thirty (30) days.
        </p>
        <p className={styles.bodyText}>
          <strong>Binding Arbitration:</strong> If the dispute cannot be resolved informally, it shall be finally settled by binding commercial arbitration conducted in English under the International Arbitration Rules (e.g., SIAC or UNCITRAL), with proceedings conducted remotely/virtually. The arbitral award shall be final and enforceable in any court of competent jurisdiction.
        </p>
        <p className={styles.bodyText}>
          <strong>Governing Law:</strong> These Terms shall be construed and governed in accordance with international commercial principles and applicable statutory laws, excluding conflict-of-law doctrines.
        </p>
        <p className={styles.bodyText}>
          <strong>Notices &amp; Contact:</strong> Official legal inquiries or contractual notices may be submitted to:
        </p>
        <p className={styles.bodyText}>
          <strong>Ship Thesis Studio</strong><br />
          Email: <a href="mailto:hello@shipthesis.com" style={{ color: "var(--green)", fontWeight: 600 }}>hello@shipthesis.com</a><br />
          Web: <a href="https://shipthesis.com" style={{ color: "var(--ink)", textDecoration: "underline" }}>shipthesis.com</a>
        </p>
      </section>
    </LegalLayout>
  );
}
