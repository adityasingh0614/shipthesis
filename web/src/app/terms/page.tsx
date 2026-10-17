import type { Metadata } from "next";
import { LegalLayout, type TocItem } from "@/components/legal/LegalLayout";
import styles from "@/components/legal/LegalPage.module.css";

export const metadata: Metadata = {
  title: "Terms of Service | Ship Thesis",
  description:
    "Terms and conditions for Ship Thesis software design, MVP engineering, and ongoing support services.",
  robots: {
    index: false,
    follow: false,
  },
};

const TOC: TocItem[] = [
  { id: "services", num: "01", title: "Services & Studio Scope" },
  { id: "ownership", num: "02", title: "Code Ownership & IP" },
  { id: "payments", num: "03", title: "Fees & Payment Milestones" },
  { id: "scope-changes", num: "04", title: "Scope Adjustments" },
  { id: "client-accounts", num: "05", title: "Client Accounts & Access" },
  { id: "warranty", num: "06", title: "30-Day Launch Warranty" },
  { id: "support-plans", num: "07", title: "Ongoing Care & Retainers" },
  { id: "confidentiality", num: "08", title: "Confidentiality & NDA" },
  { id: "liability", num: "09", title: "Warranties & Liability" },
  { id: "termination", num: "10", title: "Termination & Offboarding" },
  { id: "general", num: "11", title: "Governing Law & Contact" },
];

export default function TermsPage() {
  return (
    <LegalLayout
      currentDoc="terms"
      title="Terms of Service"
      badgeText="Legal Agreement"
      lede="We build software with clear boundaries, fixed pricing, and full intellectual property ownership. When you partner with Ship Thesis, you own your code, your repository, and your product from day one."
      lastUpdated="October 17, 2026"
      effectiveDate="October 17, 2026"
      toc={TOC}
    >
      {/* 01 · Services & Scope */}
      <section id="services" className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionNum}>01</span>
          <h2 className={styles.sectionTitle}>Services & Studio Scope</h2>
        </div>
        <p className={styles.bodyText}>
          Ship Thesis (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;Studio&rdquo;) is an independent product engineering studio that designs, architectures, and builds mobile applications, web platforms, and SaaS products for startup founders and growing companies (&ldquo;Client&rdquo; or &ldquo;you&rdquo;).
        </p>
        <p className={styles.bodyText}>
          Our services are provided strictly under mutually agreed scopes of work across three core engagement models:
        </p>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <strong>Discovery Sprint (1 week):</strong> A structured exploratory engagement producing written feature requirements, user flows, architecture decisions, and a fixed-price roadmap for version one.
          </li>
          <li className={styles.listItem}>
            <strong>MVP Build (typically 6–10 weeks):</strong> End-to-end design and milestone-driven software development with weekly testable builds delivered directly to your device.
          </li>
          <li className={styles.listItem}>
            <strong>Product &amp; App Care:</strong> Ongoing monthly retainers providing proactive dependency maintenance, bug resolution, infrastructure monitoring, and minor feature iterations post-launch.
          </li>
        </ul>
      </section>

      {/* 02 · Code Ownership & IP */}
      <section id="ownership" className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionNum}>02</span>
          <h2 className={styles.sectionTitle}>Code Ownership &amp; Intellectual Property</h2>
        </div>
        <div className={styles.callout}>
          <div className={styles.calloutBadge}>Core Founder Guarantee</div>
          <p className={styles.calloutText}>
            You own 100% of your product, custom source code, UI designs, and database schemas. We do not charge licensing fees, retain proprietary vendor lock-ins, or hold repositories hostage.
          </p>
        </div>
        <p className={styles.bodyText}>
          Upon receipt of full payment for each respective milestone, Ship Thesis irrevocably assigns to Client all right, title, and interest in and to all custom deliverables created specifically for Client during that milestone, including source code, design assets, and architectural documentation.
        </p>
        <p className={styles.bodyText}>
          <strong>Client Repositories:</strong> Development is conducted directly within Client-owned or Client-accessible Git repositories (e.g., GitHub, GitLab) or transferred cleanly upon milestone completion.
        </p>
        <p className={styles.bodyText}>
          <strong>Open-Source &amp; Third-Party Components:</strong> To maximize velocity and reliability, deliverables may incorporate battle-tested open-source libraries (e.g., Flutter framework, Next.js, standard MIT/Apache-2.0 dependencies). Such components remain governed by their respective permissive open-source licenses.
        </p>
      </section>

      {/* 03 · Payments & Milestones */}
      <section id="payments" className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionNum}>03</span>
          <h2 className={styles.sectionTitle}>Fees &amp; Payment Milestones</h2>
        </div>
        <p className={styles.bodyText}>
          We operate on transparent, fixed milestone billing so there are never surprise hourly overages:
        </p>
        <ul className={styles.numList}>
          <li className={styles.numItem}>
            <span className={styles.numBadge}>1</span>
            <div>
              <strong>Discovery Sprint:</strong> Fixed fee of $750, payable upfront. If Client continues with the full MVP Build, this entire $750 fee is credited toward the build cost. If Client elects not to continue, Client retains all deliverables, architectures, and roadmaps unconditionally.
            </div>
          </li>
          <li className={styles.numItem}>
            <span className={styles.numBadge}>2</span>
            <div>
              <strong>MVP Build Schedule:</strong> Billed across three clear milestones:
              <ul className={styles.list}>
                <li className={styles.listItem}><strong>30% Kickoff Deposit:</strong> Paid before sprint planning and initial repository setup.</li>
                <li className={styles.listItem}><strong>40% Mid-Build Milestone:</strong> Invoiced upon delivery of the interactive mid-stage test build demonstrating core flows.</li>
                <li className={styles.listItem}><strong>30% Store Submission / Handover:</strong> Invoiced upon submission to the iOS App Store / Google Play Console or production web deployment.</li>
              </ul>
            </div>
          </li>
          <li className={styles.numItem}>
            <span className={styles.numBadge}>3</span>
            <div>
              <strong>Payment Processing:</strong> Invoices are payable via approved digital payment processors (e.g., Razorpay, Stripe) or bank wire transfer within seven (7) business days of issuance.
            </div>
          </li>
        </ul>
      </section>

      {/* 04 · Scope Adjustments */}
      <section id="scope-changes" className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionNum}>04</span>
          <h2 className={styles.sectionTitle}>Scope Adjustments &amp; Flexibility</h2>
        </div>
        <p className={styles.bodyText}>
          Building an early-stage product requires flexibility. We handle evolving ideas with an honest, structured approach:
        </p>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <strong>Small UX/UI refinements:</strong> Routine visual polishes, copy adjustments, and minor flow optimizations discovered during weekly testing builds are absorbed directly into the sprint cadence without paperwork.
          </li>
          <li className={styles.listItem}>
            <strong>Feature swaps:</strong> If you discover mid-build that a planned feature is no longer needed, we can swap it for an alternative feature of comparable engineering complexity at no extra cost.
          </li>
          <li className={styles.listItem}>
            <strong>Material additions:</strong> Any substantial feature additions beyond the agreed Discovery scope are documented in writing with a clear, fixed price and timeline adjustment before any work begins.
          </li>
        </ul>
      </section>

      {/* 05 · Client Accounts */}
      <section id="client-accounts" className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionNum}>05</span>
          <h2 className={styles.sectionTitle}>Client Accounts &amp; Access</h2>
        </div>
        <p className={styles.bodyText}>
          To preserve your autonomy and prevent vendor lock-in, all third-party cloud infrastructure and developer accounts must be created and owned directly by Client:
        </p>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <strong>Developer Program Accounts:</strong> Apple Developer Program ($99/yr) and Google Play Console ($25 one-time) accounts are registered in Client&rsquo;s name or company entity.
          </li>
          <li className={styles.listItem}>
            <strong>Cloud &amp; API Infrastructure:</strong> Hosting (Vercel, Supabase, Firebase, AWS) and third-party APIs (OpenAI, Resend, payment processors) are billed directly to Client&rsquo;s payment card.
          </li>
          <li className={styles.listItem}>
            <strong>Credentials Sharing:</strong> Client agrees to grant Ship Thesis limited administrative or developer access using secure password management tools (e.g., 1Password, Bitwarden). Secret keys must never be shared over insecure channels.
          </li>
        </ul>
      </section>

      {/* 06 · 30-Day Warranty */}
      <section id="warranty" className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionNum}>06</span>
          <h2 className={styles.sectionTitle}>30-Day Launch Warranty</h2>
        </div>
        <div className={styles.callout}>
          <div className={styles.calloutBadge}>Peace of Mind Guarantee</div>
          <p className={styles.calloutText}>
            Every custom MVP build includes thirty (30) consecutive calendar days of complimentary post-launch bug warranty starting from production deployment or store submission.
          </p>
        </div>
        <p className={styles.bodyText}>
          During this warranty period, Ship Thesis will promptly investigate and resolve, at zero additional charge, any software defects, functional errors, or crashes that represent deviations from the agreed project specifications.
        </p>
        <p className={styles.bodyText}>
          The warranty excludes defects caused by Client modifications to the codebase, changes made by third-party developers, breaking changes introduced by third-party platform APIs after launch, or hardware/OS failures outside reasonable developer control.
        </p>
      </section>

      {/* 07 · Ongoing Care Plans */}
      <section id="support-plans" className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionNum}>07</span>
          <h2 className={styles.sectionTitle}>Ongoing Care &amp; Support Retainers</h2>
        </div>
        <p className={styles.bodyText}>
          Following the initial 30-day warranty, Client may subscribe to an ongoing monthly Care plan to ensure continuous maintenance, operational health, and fast response times:
        </p>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <strong>App Care (from $300/mo):</strong> Essential mobile dependency updates, iOS/Android SDK target compliance, security vulnerability patches, and emergency crash diagnostics.
          </li>
          <li className={styles.listItem}>
            <strong>Product Care (from $550/mo):</strong> Includes all App Care services plus monthly minor feature additions, UI optimizations, and database maintenance.
          </li>
          <li className={styles.listItem}>
            <strong>Full Care (from $900/mo):</strong> Dedicated engineering bandwidth, high-priority SLAs, continuous iterations, and proactive performance tuning.
          </li>
        </ul>
        <p className={styles.bodyText}>
          Care plans are billed monthly in advance and may be canceled by either party with fourteen (14) days&rsquo; written notice prior to the next billing cycle.
        </p>
      </section>

      {/* 08 · Confidentiality & NDA */}
      <section id="confidentiality" className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionNum}>08</span>
          <h2 className={styles.sectionTitle}>Confidentiality &amp; Mutual Non-Disclosure</h2>
        </div>
        <p className={styles.bodyText}>
          We take founder confidentiality with the utmost seriousness. Both parties agree that any proprietary information, business metrics, customer lists, technical architectures, and unpublished concept designs shared during the relationship shall remain strictly confidential.
        </p>
        <p className={styles.bodyText}>
          Neither party will disclose confidential information to any third party without prior written authorization, except as required by applicable law.
        </p>
        <p className={styles.bodyText}>
          <strong>Portfolio &amp; Public Attribution:</strong> Unless Client explicitly requests a private/white-label engagement in writing before project kickoff, Ship Thesis reserves the right to display high-level non-confidential visual previews, design case studies, and summary metrics once Client has launched the product publicly.
        </p>
      </section>

      {/* 09 · Warranties & Liability */}
      <section id="liability" className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionNum}>09</span>
          <h2 className={styles.sectionTitle}>Warranties, Disclaimers &amp; Limitation of Liability</h2>
        </div>
        <p className={styles.bodyText}>
          Ship Thesis warrants that services will be performed in a professional, workmanlike manner conforming to prevailing industry engineering standards.
        </p>
        <p className={styles.bodyText}>
          Except as explicitly set forth herein, all deliverables are provided &ldquo;as is&rdquo;. To the maximum extent permitted by applicable law, Ship Thesis disclaims all other warranties, whether express, statutory, or implied, including merchantability, fitness for a particular purpose, or non-infringement.
        </p>
        <p className={styles.bodyText}>
          <strong>Cap on Liability:</strong> In no event shall either party be liable for any indirect, special, incidental, consequential, or punitive damages (including loss of profits, data, or business interruption). Ship Thesis&rsquo;s cumulative liability under any engagement shall not exceed the total fees paid by Client for the specific phase or milestone giving rise to the claim.
        </p>
      </section>

      {/* 10 · Termination & Offboarding */}
      <section id="termination" className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionNum}>10</span>
          <h2 className={styles.sectionTitle}>Termination &amp; Offboarding</h2>
        </div>
        <p className={styles.bodyText}>
          Either party may terminate an engagement for convenience by providing fourteen (14) days&rsquo; prior written notice, or immediately in the event of a material breach not cured within seven (7) days of notice.
        </p>
        <p className={styles.bodyText}>
          Upon termination:
        </p>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            Client is liable only for fees earned through the termination date based on completed milestones or agreed sprint progress.
          </li>
          <li className={styles.listItem}>
            Ship Thesis will deliver to Client all completed source code, design files, credentials, and assets paid for up to the effective termination date.
          </li>
          <li className={styles.listItem}>
            Ship Thesis will immediately surrender or securely destroy all Client credentials and confidential materials in its possession.
          </li>
        </ul>
      </section>

      {/* 11 · Governing Law & Contact */}
      <section id="general" className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionNum}>11</span>
          <h2 className={styles.sectionTitle}>Governing Law &amp; Contact</h2>
        </div>
        <p className={styles.bodyText}>
          These Terms of Service and any associated agreements shall be governed by and construed in accordance with the laws of India, without regard to conflicts of law principles. The parties agree to resolve any dispute in good faith through informal negotiation before seeking formal arbitration or legal remedy.
        </p>
        <p className={styles.bodyText}>
          For legal inquiries, scope clarifications, or contract inquiries, please reach out directly:
        </p>
        <p className={styles.bodyText}>
          <strong>Ship Thesis Studio</strong><br />
          Email: <a href="mailto:hello@shipthesis.com" style={{ color: "var(--green)", fontWeight: 600 }}>hello@shipthesis.com</a><br />
          Website: <a href="https://shipthesis.com" style={{ color: "var(--ink)", textDecoration: "underline" }}>shipthesis.com</a>
        </p>
      </section>
    </LegalLayout>
  );
}
