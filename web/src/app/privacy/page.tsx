import type { Metadata } from "next";
import { LegalLayout, type TocItem } from "@/components/legal/LegalLayout";
import styles from "@/components/legal/LegalPage.module.css";

export const metadata: Metadata = {
  title: "Privacy Policy | Ship Thesis",
  description:
    "Privacy policy, CCPA/GDPR compliance disclosures, subprocessor list, and data security standards for Ship Thesis software engineering services.",
  robots: {
    index: false,
    follow: false,
  },
};

const TOC: TocItem[] = [
  { id: "principles", num: "01", title: "Privacy Principles" },
  { id: "collection", num: "02", title: "Information We Collect" },
  { id: "usage", num: "03", title: "How We Use Information" },
  { id: "ai-privacy", num: "04", title: "AI & Model Training Safeguards" },
  { id: "processors", num: "05", title: "Third-Party Subprocessors" },
  { id: "security", num: "06", title: "Security & Secret Management" },
  { id: "retention", num: "07", title: "Data Retention Protocol" },
  { id: "us-rights", num: "08", title: "US & California Rights (CCPA)" },
  { id: "gdpr-rights", num: "09", title: "GDPR & International Rights" },
  { id: "cookies", num: "10", title: "Cookies & Zero-Tracking" },
  { id: "contact", num: "11", title: "Data Controller & Contact" },
];

export default function PrivacyPage() {
  return (
    <LegalLayout
      currentDoc="privacy"
      title="Privacy Policy"
      badgeText="Data & Privacy"
      lede="We respect your privacy and handle founder ideas, project specifications, and codebase data with rigorous confidentiality. We never sell your personal data or track you across the web. Here is our full privacy and data governance framework."
      lastUpdated="October 17, 2026"
      effectiveDate="October 17, 2026"
      toc={TOC}
    >
      {/* 01 · Privacy Principles */}
      <section id="principles" className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionNum}>01</span>
          <h2 className={styles.sectionTitle}>Privacy Principles &amp; Commitments</h2>
        </div>
        <p className={styles.bodyText}>
          At <strong>Ship Thesis Studio</strong> (&ldquo;Ship Thesis&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), we recognize that startup founders and engineering teams share sensitive strategic plans, architectural designs, and proprietary concepts with us. We protect this trust through four institutional commitments:
        </p>
        <div className={styles.callout}>
          <div className={styles.calloutBadge}>Absolute Zero-Monetization Pledge</div>
          <p className={styles.calloutText}>
            We never sell, rent, monetize, or trade your personal data, contact information, codebase contents, or startup ideas to data brokers, advertising networks, or external third parties under any circumstances.
          </p>
        </div>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <strong>Data Minimization:</strong> We collect only the information strictly necessary to evaluate project feasibility, schedule discovery meetings, and engineer your application.
          </li>
          <li className={styles.listItem}>
            <strong>Strict Confidentiality:</strong> Unreleased founder ideas, design wireframes, financial projections, and database structures are treated as privileged confidential material.
          </li>
          <li className={styles.listItem}>
            <strong>Client Sovereignty:</strong> You retain complete ownership and control over your customer data, repository access, and production infrastructure.
          </li>
          <li className={styles.listItem}>
            <strong>Transparent Processing:</strong> No hidden background telemetry, cross-site trackers, or surprise third-party integrations.
          </li>
        </ul>
      </section>

      {/* 02 · Information We Collect */}
      <section id="collection" className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionNum}>02</span>
          <h2 className={styles.sectionTitle}>Information We Collect</h2>
        </div>
        <p className={styles.bodyText}>
          We collect and process personal data across distinct operational categories:
        </p>

        <h3 className={styles.subHeading}>A. Information You Voluntarily Provide</h3>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <strong>Discovery Call Scheduling:</strong> When booking a discovery call via our Cal.com integration, you submit your name, corporate email address, time zone, target platform (iOS, Android, Web), and notes regarding your product concept.
          </li>
          <li className={styles.listItem}>
            <strong>Inquiries &amp; Scoping Questionnaires:</strong> When reaching out via our contact form or direct email, we collect your name, email, company entity, and written project parameters.
          </li>
          <li className={styles.listItem}>
            <strong>Project &amp; Technical Assets:</strong> During active Discovery Sprints and MVP builds, Client may provide access to user journey wireframes, Figma designs, technical requirement documents, API documentation, and staging credentials.
          </li>
          <li className={styles.listItem}>
            <strong>Invoicing &amp; Billing Records:</strong> For statutory accounting and contract execution, we collect legal entity names, billing addresses, tax registration identifiers (e.g., GSTIN or VAT numbers where applicable), and payment contact details. Payment card credentials are tokenized directly by our PCI-compliant payment gateways and are never accessible to our servers.
          </li>
        </ul>

        <h3 className={styles.subHeading}>B. Technical &amp; Operational Information</h3>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <strong>Standard Server Diagnostics:</strong> Like virtually all websites, our infrastructure automatically logs basic HTTP request headers (IP address, browser user-agent, referring URL, timestamp) solely to monitor server health, diagnose 404 errors, and mitigate DDoS attacks.
          </li>
          <li className={styles.listItem}>
            <strong>Zero Invasive Profiling:</strong> We do not deploy fingerprinting scripts, behavioral trackers, or third-party marketing beacons (such as Meta Pixel, Google Ads remarketing, or LinkedIn Insight tags).
          </li>
        </ul>
      </section>

      {/* 03 · How We Use Information */}
      <section id="usage" className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionNum}>03</span>
          <h2 className={styles.sectionTitle}>How We Use Your Information</h2>
        </div>
        <p className={styles.bodyText}>
          We process personal and project data strictly for legitimate business and contract performance purposes:
        </p>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <strong>Contract Performance:</strong> Delivering Discovery Sprints, designing user interfaces, writing clean source code, conducting automated testing, and deploying mobile builds to Client accounts.
          </li>
          <li className={styles.listItem}>
            <strong>Direct Communication:</strong> Conducting scheduled video discovery calls, delivering weekly interactive sprint builds, and providing ongoing engineering updates via email or Slack.
          </li>
          <li className={styles.listItem}>
            <strong>Financial Administration:</strong> Generating fixed-quote milestone invoices, processing receipts, and maintaining records in compliance with corporate taxation statutes.
          </li>
          <li className={styles.listItem}>
            <strong>Security &amp; Legal Compliance:</strong> Safeguarding our systems against fraudulent activities, protecting intellectual property rights, and fulfilling regulatory obligations.
          </li>
        </ul>
      </section>

      {/* 04 · AI & Model Training Safeguards */}
      <section id="ai-privacy" className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionNum}>04</span>
          <h2 className={styles.sectionTitle}>AI &amp; Model Training Safeguards</h2>
        </div>
        <div className={styles.callout}>
          <div className={styles.calloutBadge}>Codebase Privacy Guarantee</div>
          <p className={styles.calloutText}>
            Your proprietary source code, database structures, business algorithms, and client data are NEVER shared with public AI models or used to train external commercial machine learning systems.
          </p>
        </div>
        <p className={styles.bodyText}>
          As an engineering studio building AI-powered mobile apps and SaaS products, we adhere to strict AI governance:
        </p>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <strong>Zero Training on Client IP:</strong> We contractually configure all enterprise developer tooling (e.g., GitHub Copilot Enterprise, OpenAI API, Anthropic API) with zero-data-retention (ZDR) and no-training flags enabled.
          </li>
          <li className={styles.listItem}>
            <strong>No Public Cloud Leakage:</strong> Client proprietary assets are isolated within dedicated repository workspaces and never contributed to open repositories without explicit authorization.
          </li>
        </ul>
      </section>

      {/* 05 · Third-Party Subprocessors */}
      <section id="processors" className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionNum}>05</span>
          <h2 className={styles.sectionTitle}>Third-Party Subprocessors</h2>
        </div>
        <p className={styles.bodyText}>
          We engage industry-standard, SOC 2 and ISO 27001 audited service providers to facilitate infrastructure operations:
        </p>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <strong>Cal.com:</strong> Powers discovery meeting scheduling and calendar synchronization.
          </li>
          <li className={styles.listItem}>
            <strong>Vercel Inc.:</strong> High-availability edge hosting, global CDN, and frontend serverless deployment.
          </li>
          <li className={styles.listItem}>
            <strong>GitHub Inc. (Microsoft):</strong> Secure private source code version control, CI/CD automated test pipelines, and issue tracking.
          </li>
          <li className={styles.listItem}>
            <strong>Stripe Inc. &amp; Razorpay Software:</strong> Secure electronic invoice billing and payment processing under PCI-DSS Level 1 compliance.
          </li>
          <li className={styles.listItem}>
            <strong>Resend Inc. &amp; Google Workspace:</strong> Transactional notification delivery, discovery confirmations, and encrypted client correspondence.
          </li>
        </ul>
        <p className={styles.bodyText}>
          Each subprocessor is bound by rigorous Data Processing Agreements (DPAs) requiring adherence to international privacy and security standards.
        </p>
      </section>

      {/* 06 · Security & Secret Management */}
      <section id="security" className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionNum}>06</span>
          <h2 className={styles.sectionTitle}>Security &amp; Secret Management</h2>
        </div>
        <p className={styles.bodyText}>
          We take code and credential security seriously. We enforce strict institutional engineering safeguards:
        </p>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <strong>Zero Hardcoded Secrets Policy:</strong> We strictly prohibit hardcoding API keys, database connection strings, or cloud tokens in source code. All runtime secrets are managed via encrypted environment variables or dedicated secret managers (e.g., Doppler, AWS Secrets Manager, 1Password Secrets).
          </li>
          <li className={styles.listItem}>
            <strong>Least-Privilege Access:</strong> Access to Client Git repositories, Apple Developer teams, and cloud staging accounts is granted only to assigned project engineers and revoked immediately upon project offboarding.
          </li>
          <li className={styles.listItem}>
            <strong>Encryption Standards:</strong> All website traffic is secured using TLS 1.3 encryption. Workstation drives are fully encrypted (FileVault / BitLocker) with mandatory hardware multi-factor authentication (MFA).
          </li>
          <li className={styles.listItem}>
            <strong>Pre-Commit Git Auditing:</strong> Repositories employ pre-commit scanning tools to prevent accidental secret or credential leakage.
          </li>
        </ul>
      </section>

      {/* 07 · Data Retention Protocol */}
      <section id="retention" className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionNum}>07</span>
          <h2 className={styles.sectionTitle}>Data Retention Protocol</h2>
        </div>
        <p className={styles.bodyText}>
          We retain personal data only for as long as required to accomplish the legitimate business purposes outlined in this policy:
        </p>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <strong>Inquiries &amp; Discovery Calls:</strong> Unconverted lead records and exploratory project notes are archived and permanently purged after twenty-four (24) months.
          </li>
          <li className={styles.listItem}>
            <strong>Client Project Deliverables:</strong> Completed deliverables and documentation are retained during the active development period, 30-day warranty, and any subsequent Care retainer period.
          </li>
          <li className={styles.listItem}>
            <strong>Financial Invoices &amp; Accounting:</strong> Statutory financial records and milestone invoices are retained for seven (7) years in accordance with tax and corporate governance laws.
          </li>
          <li className={styles.listItem}>
            <strong>Credential Offboarding:</strong> Client credentials and temporary administrative access tokens are securely purged within seven (7) business days of final project sign-off.
          </li>
        </ul>
      </section>

      {/* 08 · US & California Rights (CCPA/CPRA) */}
      <section id="us-rights" className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionNum}>08</span>
          <h2 className={styles.sectionTitle}>US &amp; California Privacy Rights (CCPA / CPRA)</h2>
        </div>
        <p className={styles.bodyText}>
          This section provides disclosures required under the California Consumer Privacy Act (CCPA) as amended by the California Privacy Rights Act (CPRA), and extends to residents of Virginia, Colorado, Connecticut, Utah, and other US states with comprehensive privacy legislation:
        </p>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <strong>No Sale or Sharing:</strong> We do not sell personal information, nor do we share personal information for cross-context behavioral advertising. We have not sold or shared any personal information in the preceding twelve (12) months.
          </li>
          <li className={styles.listItem}>
            <strong>Right to Know / Access:</strong> You have the right to request disclosure of the specific pieces and categories of personal information we have collected about you.
          </li>
          <li className={styles.listItem}>
            <strong>Right to Delete:</strong> You may request deletion of personal information collected from you, subject to legal and statutory recordkeeping exceptions.
          </li>
          <li className={styles.listItem}>
            <strong>Right to Correct:</strong> You have the right to request correction of inaccurate personal information maintained by us.
          </li>
          <li className={styles.listItem}>
            <strong>Non-Discrimination:</strong> We will never discriminate against you, alter service pricing, or deny services for exercising any of your statutory privacy rights.
          </li>
        </ul>
        <p className={styles.bodyText}>
          To exercise your California or US privacy rights, email <a href="mailto:hello@shipthesis.com" style={{ color: "var(--green)", fontWeight: 600 }}>hello@shipthesis.com</a> with the subject &ldquo;CCPA Data Request.&rdquo;
        </p>
      </section>

      {/* 09 · GDPR & International Rights */}
      <section id="gdpr-rights" className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionNum}>09</span>
          <h2 className={styles.sectionTitle}>GDPR &amp; International Rights</h2>
        </div>
        <p className={styles.bodyText}>
          For visitors and clients situated in the European Economic Area (EEA), the United Kingdom, or Switzerland, processing of personal data is governed by the General Data Protection Regulation (GDPR) and UK Data Protection Act 2018:
        </p>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <strong>Lawful Bases:</strong> We process data based on: (a) performance of a contract to deliver software engineering; (b) our legitimate interests in operating and securing our studio; (c) compliance with legal obligations; and (d) your consent when voluntarily submitting inquiries.
          </li>
          <li className={styles.listItem}>
            <strong>Data Subject Rights:</strong> You hold the right to access, rectify, erase, restrict processing, object to processing, and request data portability for your personal data.
          </li>
          <li className={styles.listItem}>
            <strong>International Data Transfers:</strong> Where data is transferred internationally, we ensure appropriate safeguards including standard contractual clauses (SCCs) approved by the European Commission.
          </li>
          <li className={styles.listItem}>
            <strong>Supervisory Authority:</strong> You have the right to lodge a complaint with your local data protection supervisory authority if you believe our processing violates applicable law.
          </li>
        </ul>
      </section>

      {/* 10 · Cookies & Zero-Tracking */}
      <section id="cookies" className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionNum}>10</span>
          <h2 className={styles.sectionTitle}>Cookies &amp; Zero-Tracking Architecture</h2>
        </div>
        <p className={styles.bodyText}>
          We reject the modern surveillance web. Our website is engineered with a zero-tracking philosophy:
        </p>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <strong>No Third-Party Advertising Cookies:</strong> We do not place ad-retargeting cookies or tracking pixels on your machine.
          </li>
          <li className={styles.listItem}>
            <strong>Essential Session Storage Only:</strong> We use only strictly necessary local storage items required to maintain user UI state or embed our Cal.com booking modal.
          </li>
          <li className={styles.listItem}>
            <strong>No Cookie Banner Clutter:</strong> Because we do not run non-essential advertising or tracking cookies, we do not subject you to intrusive cookie consent modals.
          </li>
          <li className={styles.listItem}>
            <strong>Do-Not-Track (DNT) Signals:</strong> Our website respects universal opt-out and Do-Not-Track signals transmitted by modern browsers.
          </li>
        </ul>
      </section>

      {/* 11 · Data Controller & Contact */}
      <section id="contact" className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionNum}>11</span>
          <h2 className={styles.sectionTitle}>Data Controller &amp; Contact Information</h2>
        </div>
        <p className={styles.bodyText}>
          The data controller responsible for personal data processed under this Privacy Policy is:
        </p>
        <p className={styles.bodyText}>
          <strong>Ship Thesis Studio</strong><br />
          Data Governance &amp; Privacy Officer<br />
          Email: <a href="mailto:hello@shipthesis.com" style={{ color: "var(--green)", fontWeight: 600 }}>hello@shipthesis.com</a><br />
          Web: <a href="https://shipthesis.com" style={{ color: "var(--ink)", textDecoration: "underline" }}>shipthesis.com</a>
        </p>
        <p className={styles.bodyText}>
          We respond to all verified privacy, data access, and deletion requests within thirty (30) business days without cost or penalty.
        </p>
      </section>
    </LegalLayout>
  );
}
