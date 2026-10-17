import type { Metadata } from "next";
import { LegalLayout, type TocItem } from "@/components/legal/LegalLayout";
import styles from "@/components/legal/LegalPage.module.css";

export const metadata: Metadata = {
  title: "Privacy Policy | Ship Thesis",
  description:
    "How Ship Thesis collects, uses, and safeguards client and visitor information across our website and engineering services.",
  robots: {
    index: false,
    follow: false,
  },
};

const TOC: TocItem[] = [
  { id: "principles", num: "01", title: "Privacy Principles" },
  { id: "collection", num: "02", title: "Information We Collect" },
  { id: "usage", num: "03", title: "How We Use Data" },
  { id: "processors", num: "04", title: "Third-Party Subprocessors" },
  { id: "security", num: "05", title: "Project Data Security" },
  { id: "retention", num: "06", title: "Data Retention" },
  { id: "rights", num: "07", title: "Your Privacy Rights" },
  { id: "cookies", num: "08", title: "Cookies & Tracking" },
  { id: "children", num: "09", title: "Children's Privacy" },
  { id: "contact", num: "10", title: "Policy Updates & Contact" },
];

export default function PrivacyPage() {
  return (
    <LegalLayout
      currentDoc="privacy"
      title="Privacy Policy"
      badgeText="Data & Privacy"
      lede="We respect your privacy and handle founder ideas and company data with strict confidentiality. We do not sell your personal data or track you across the web. Here is exactly what we collect, why we need it, and how it is protected."
      lastUpdated="October 17, 2026"
      effectiveDate="October 17, 2026"
      toc={TOC}
    >
      {/* 01 · Privacy Principles */}
      <section id="principles" className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionNum}>01</span>
          <h2 className={styles.sectionTitle}>Privacy Principles</h2>
        </div>
        <p className={styles.bodyText}>
          At Ship Thesis (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), we believe privacy is fundamental to client trust. As an independent software studio building products for founders worldwide, we approach data protection through three unshakeable rules:
        </p>
        <div className={styles.callout}>
          <div className={styles.calloutBadge}>Zero-Data-Monetization Pledge</div>
          <p className={styles.calloutText}>
            We never sell, rent, monetize, or trade your contact information, startup concepts, or client communications with advertising networks, data brokers, or external third parties.
          </p>
        </div>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <strong>Data Minimization:</strong> We request only the minimal information necessary to evaluate your project, schedule discovery calls, and engineer your application.
          </li>
          <li className={styles.listItem}>
            <strong>Confidentiality First:</strong> Unreleased founder ideas, product wireframes, and customer metrics are treated with high-security confidentiality.
          </li>
          <li className={styles.listItem}>
            <strong>Ownership &amp; Control:</strong> You maintain full ownership over your code, data schemas, and credentials at every phase of our collaboration.
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
          Depending on how you interact with our website and services, we collect information across two categories:
        </p>
        
        <h3 className={styles.subHeading}>A. Information You Provide Directly</h3>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <strong>Discovery Call Scheduling:</strong> When booking a call via our Cal.com integration, you provide your name, email address, time zone, and notes regarding your target product and timeline.
          </li>
          <li className={styles.listItem}>
            <strong>Contact Form &amp; Inquiries:</strong> When reaching out through our contact form or via email, we collect your name, email, company name, and project description.
          </li>
          <li className={styles.listItem}>
            <strong>Client Project Specifications:</strong> In Discovery Sprints or MVP builds, you may share product requirement docs (PRDs), design files (Figma), database structures, and business context.
          </li>
          <li className={styles.listItem}>
            <strong>Billing Details:</strong> For invoice generation, we collect billing contact details, company registration numbers (where applicable for tax compliance), and billing addresses. Payment card numbers are processed directly by our PCI-compliant payment gateways and are never stored on our servers.
          </li>
        </ul>

        <h3 className={styles.subHeading}>B. Technical &amp; Operational Information</h3>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <strong>Server Logs:</strong> Standard HTTP request logs (IP address, browser type, referring URL, timestamp) recorded automatically for server health, DDoS mitigation, and diagnostic integrity.
          </li>
          <li className={styles.listItem}>
            <strong>Privacy-Friendly Analytics:</strong> We use minimal, privacy-centric operational telemetry to understand website performance without tracking individual identity across websites.
          </li>
        </ul>
      </section>

      {/* 03 · How We Use Data */}
      <section id="usage" className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionNum}>03</span>
          <h2 className={styles.sectionTitle}>How We Use Data</h2>
        </div>
        <p className={styles.bodyText}>
          We utilize the data we collect solely for lawful, service-oriented purposes, specifically:
        </p>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <strong>Delivering Engineering Services:</strong> Scoping, architecting, programming, testing, and deploying mobile apps and web platforms requested by you.
          </li>
          <li className={styles.listItem}>
            <strong>Client Communications:</strong> Responding to inbound inquiries, hosting video discovery calls, providing weekly sprint build demos, and offering customer support.
          </li>
          <li className={styles.listItem}>
            <strong>Billing &amp; Financial Compliance:</strong> Generating milestone invoices, processing receipts, and satisfying statutory accounting and taxation duties.
          </li>
          <li className={styles.listItem}>
            <strong>Security &amp; Abuse Prevention:</strong> Guarding our systems and repositories against security vulnerabilities, unauthorized access, spam, and fraud.
          </li>
        </ul>
      </section>

      {/* 04 · Third-Party Processors */}
      <section id="processors" className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionNum}>04</span>
          <h2 className={styles.sectionTitle}>Third-Party Subprocessors</h2>
        </div>
        <p className={styles.bodyText}>
          We collaborate with reputable, security-audited third-party providers who act as data processors to assist in operations:
        </p>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <strong>Cal.com:</strong> Powers discovery call calendar scheduling and time slot booking.
          </li>
          <li className={styles.listItem}>
            <strong>Payment Gateways (Razorpay &amp; Stripe):</strong> Handle secure payment tokenization, card processing, and invoice settlements under strict PCI-DSS Level 1 compliance.
          </li>
          <li className={styles.listItem}>
            <strong>Vercel &amp; GitHub:</strong> Provide high-availability website hosting, content delivery networks (CDNs), and secure Git version control.
          </li>
          <li className={styles.listItem}>
            <strong>Email Services (Resend &amp; Google Workspace):</strong> Deliver inquiry notifications, transactional receipts, and direct client correspondence.
          </li>
        </ul>
        <p className={styles.bodyText}>
          Each subprocessor is contractually bound to process data strictly under our explicit instructions and in compliance with international data privacy standards.
        </p>
      </section>

      {/* 05 · Project Data Security */}
      <section id="security" className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionNum}>05</span>
          <h2 className={styles.sectionTitle}>Project Data Security</h2>
        </div>
        <p className={styles.bodyText}>
          As developers, we understand the technical risks of credential leaks and data breaches. We implement strict operational safeguards:
        </p>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <strong>Zero Hardcoded Secrets:</strong> We enforce an absolute policy against hardcoding production API keys, database credentials, or private certificates. Environment variables and encrypted vaults (e.g., 1Password, Doppler, AWS Secrets Manager) are used exclusively.
          </li>
          <li className={styles.listItem}>
            <strong>Principle of Least Privilege:</strong> Access to Client Git repositories, developer consoles, and staging environments is restricted to active assigned engineers and revoked immediately upon offboarding.
          </li>
          <li className={styles.listItem}>
            <strong>Encryption in Transit &amp; Rest:</strong> All traffic to our site is enforced over HTTPS with TLS 1.3 encryption. Internal developer workstations employ full-disk encryption and mandatory multi-factor authentication (MFA).
          </li>
        </ul>
      </section>

      {/* 06 · Data Retention */}
      <section id="retention" className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionNum}>06</span>
          <h2 className={styles.sectionTitle}>Data Retention</h2>
        </div>
        <p className={styles.bodyText}>
          We retain personal data only for as long as necessary to fulfill the operational purposes described in this policy:
        </p>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <strong>Inquiries &amp; Discovery Notes:</strong> Prospective founder inquiries that do not proceed to a sprint are archived and securely purged after twenty-four (24) months.
          </li>
          <li className={styles.listItem}>
            <strong>Active Client Project Records:</strong> Deliverables, scopes, and communications are preserved throughout the active build and for the duration of any Care retainer or warranty period.
          </li>
          <li className={styles.listItem}>
            <strong>Invoicing &amp; Financial Records:</strong> Retained for statutory periods (typically 7 years) required by tax authorities and commercial regulatory audits.
          </li>
        </ul>
      </section>

      {/* 07 · Privacy Rights */}
      <section id="rights" className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionNum}>07</span>
          <h2 className={styles.sectionTitle}>Your Privacy Rights</h2>
        </div>
        <p className={styles.bodyText}>
          Regardless of your jurisdiction (including the European Union under GDPR, the United Kingdom under UK GDPR, and California under CCPA/CPRA), we grant all visitors and clients the following rights:
        </p>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <strong>Right to Access:</strong> You may request a copy of the personal information we hold about you.
          </li>
          <li className={styles.listItem}>
            <strong>Right to Rectification:</strong> You may request correction of inaccurate, outdated, or incomplete personal data.
          </li>
          <li className={styles.listItem}>
            <strong>Right to Erasure (&ldquo;Right to be Forgotten&rdquo;):</strong> You may request that we delete your personal contact records, subject to statutory retention obligations.
          </li>
          <li className={styles.listItem}>
            <strong>Right to Restrict or Object:</strong> You may object to the processing of your data or request restriction of certain processing activities.
          </li>
        </ul>
        <p className={styles.bodyText}>
          To exercise any of these rights, email us directly at <a href="mailto:hello@shipthesis.com" style={{ color: "var(--green)", fontWeight: 600 }}>hello@shipthesis.com</a>. We respond to all verified requests within thirty (30) days without fees or penalties.
        </p>
      </section>

      {/* 08 · Cookies & Tracking */}
      <section id="cookies" className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionNum}>08</span>
          <h2 className={styles.sectionTitle}>Cookies &amp; Tracking Technologies</h2>
        </div>
        <p className={styles.bodyText}>
          Ship Thesis does not employ cross-site tracking pixels, advertising retargeting beacons (such as Meta Pixel or Google Ads tags), or third-party behavioral profiling scripts.
        </p>
        <p className={styles.bodyText}>
          Our site uses only strictly necessary functional cookies or localized browser storage (such as remembering UI preferences or maintaining session state across embedded scheduling modals). Because we do not run non-essential tracking cookies, you will not encounter invasive cookie consent popups interrupting your reading experience.
        </p>
      </section>

      {/* 09 · Children's Privacy */}
      <section id="children" className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionNum}>09</span>
          <h2 className={styles.sectionTitle}>Children&rsquo;s Privacy</h2>
        </div>
        <p className={styles.bodyText}>
          Our website and software engineering services are intended exclusively for professional founders, business owners, and individuals aged eighteen (18) and older. We do not knowingly solicit or collect personal information from children under eighteen. If we discover that personal data of a minor has been collected inadvertently, we will promptly delete it.
        </p>
      </section>

      {/* 10 · Policy Updates & Contact */}
      <section id="contact" className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionNum}>10</span>
          <h2 className={styles.sectionTitle}>Policy Updates &amp; Contact</h2>
        </div>
        <p className={styles.bodyText}>
          We may update this Privacy Policy periodically to reflect enhancements to our engineering workflows, new regulatory standards, or operational evolutions. Any modifications will be posted directly to this page with an updated &ldquo;Last updated&rdquo; timestamp.
        </p>
        <p className={styles.bodyText}>
          For any privacy inquiries, data subject requests, or security disclosures, please contact our data controller:
        </p>
        <p className={styles.bodyText}>
          <strong>Data Controller: Ship Thesis</strong><br />
          Email: <a href="mailto:hello@shipthesis.com" style={{ color: "var(--green)", fontWeight: 600 }}>hello@shipthesis.com</a><br />
          Inquiries: <a href="https://shipthesis.com/#contact" style={{ color: "var(--ink)", textDecoration: "underline" }}>shipthesis.com/#contact</a>
        </p>
      </section>
    </LegalLayout>
  );
}
