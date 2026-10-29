import type { ReactNode } from "react";
import Link from "next/link";
import { BookingCta } from "@/components/BookingCta";
import styles from "./ServicePage.module.css";

export interface ServiceMetric {
  value: string;
  label: string;
}

export interface ServiceFeature {
  icon?: ReactNode;
  title: string;
  desc: string;
}

export interface ServiceTimelineStep {
  step: string;
  title: string;
  desc: string;
  deliverable: string;
}

export interface ServiceCaseStudy {
  badge: string;
  title: string;
  desc: string;
  href: string;
  stats: { label: string; value: string }[];
}

export interface ServiceFaq {
  q: string;
  a: string;
}

export interface ServicePageProps {
  badge: string;
  title: string;
  lede: string;
  metrics: ServiceMetric[];
  // Features / Pillars
  featuresPre?: string;
  featuresTitle: string;
  featuresLede: string;
  features: ServiceFeature[];
  // Timeline
  timelinePre?: string;
  timelineTitle: string;
  timelineLede: string;
  timeline: ServiceTimelineStep[];
  // Proof
  proofPre?: string;
  proofTitle: string;
  proofLede: string;
  caseStudies: ServiceCaseStudy[];
  // Tech stack
  stackPre?: string;
  stackTitle: string;
  stack: string[];
  // FAQ
  faqTitle: string;
  faqItems: ServiceFaq[];
  // CTA
  ctaTitle: string;
  ctaLede: string;
  bookingLocation: "services";
  jsonLd: Record<string, unknown>;
}

export function ServicePageLayout({
  badge,
  title,
  lede,
  metrics,
  featuresPre = "Deliverables",
  featuresTitle,
  featuresLede,
  features,
  timelinePre = "Process",
  timelineTitle,
  timelineLede,
  timeline,
  proofPre = "Real Proof",
  proofTitle,
  proofLede,
  caseStudies,
  stackPre = "Tech Stack",
  stackTitle,
  stack,
  faqTitle,
  faqItems,
  ctaTitle,
  ctaLede,
  bookingLocation,
  jsonLd,
}: ServicePageProps) {
  return (
    <article className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.inner}>
          <div className={styles.heroContent}>
            <div className={styles.badge}>
              <span className={styles.badgeDot} />
              {badge}
            </div>
            <h1 className={styles.heroTitle}>{title}</h1>
            <p className={styles.heroLede}>{lede}</p>

            <div className={styles.heroActions}>
              <BookingCta location={bookingLocation}>
                Book a free 20-minute call
              </BookingCta>
              <a href="#milestones" className={styles.secondaryLink}>
                See 4-week timeline &#x2193;
              </a>
            </div>

            <ul className={styles.trustStrip}>
              {metrics.map((m) => (
                <li key={m.label} className={styles.trustItem}>
                  <span className={styles.trustValue}>{m.value}</span>
                  <span className={styles.trustLabel}>{m.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Features & Deliverables */}
      <section className={styles.section} id="deliverables">
        <div className={styles.inner}>
          <div className={styles.sectionHead}>
            <p className={styles.sectionPre}>{featuresPre}</p>
            <h2 className={styles.sectionTitle}>{featuresTitle}</h2>
            <p className={styles.sectionLede}>{featuresLede}</p>
          </div>

          <ul className={styles.featureGrid}>
            {features.map((f) => (
              <li key={f.title} className={styles.featureCard}>
                {f.icon && <div className={styles.cardIcon}>{f.icon}</div>}
                <h3 className={styles.cardTitle}>{f.title}</h3>
                <p className={styles.cardDesc}>{f.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 4-Week Milestone Timeline */}
      <section className={`${styles.section} ${styles.sectionAlt}`} id="milestones">
        <div className={styles.inner}>
          <div className={styles.sectionHead}>
            <p className={styles.sectionPre}>{timelinePre}</p>
            <h2 className={styles.sectionTitle}>{timelineTitle}</h2>
            <p className={styles.sectionLede}>{timelineLede}</p>
          </div>

          <ul className={styles.timelineGrid}>
            {timeline.map((t) => (
              <li key={t.step} className={styles.timelineCard}>
                <span className={styles.timelineStep}>{t.step}</span>
                <h3 className={styles.timelineTitle}>{t.title}</h3>
                <p className={styles.timelineDesc}>{t.desc}</p>
                <div className={styles.timelineDeliverable}>
                  <strong>Deliverable:</strong> {t.deliverable}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Case Study Proof */}
      <section className={styles.section} id="proof">
        <div className={styles.inner}>
          <div className={styles.sectionHead}>
            <p className={styles.sectionPre}>{proofPre}</p>
            <h2 className={styles.sectionTitle}>{proofTitle}</h2>
            <p className={styles.sectionLede}>{proofLede}</p>
          </div>

          <ul className={styles.proofGrid}>
            {caseStudies.map((c) => (
              <li key={c.title} className={styles.proofCard}>
                <span className={styles.proofBadge}>{c.badge}</span>
                <h3 className={styles.proofTitle}>{c.title}</h3>
                <p className={styles.proofDesc}>{c.desc}</p>
                <div className={styles.proofStats}>
                  {c.stats.map((s) => (
                    <div key={s.label}>
                      <div className={styles.proofStatVal}>{s.value}</div>
                      <div className={styles.proofStatLabel}>{s.label}</div>
                    </div>
                  ))}
                </div>
                <Link href={c.href} className={styles.proofLink}>
                  Read detailed case study &#x2192;
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Tech Stack */}
      <section className={`${styles.section} ${styles.sectionAlt}`} id="stack">
        <div className={styles.inner}>
          <div className={styles.sectionHead}>
            <p className={styles.sectionPre}>{stackPre}</p>
            <h2 className={styles.sectionTitle}>{stackTitle}</h2>
            <p className={styles.sectionLede}>
              No fragile no-code lock-in. Clean, typed, industry-standard stacks you can recruit for or scale indefinitely.
            </p>
          </div>

          <div className={styles.stackTags}>
            {stack.map((item) => (
              <span key={item} className={styles.stackTag}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Founder FAQs */}
      <section className={styles.section} id="faq">
        <div className={styles.inner}>
          <div className={styles.sectionHead}>
            <p className={styles.sectionPre}>Transparency</p>
            <h2 className={styles.sectionTitle}>{faqTitle}</h2>
            <p className={styles.sectionLede}>
              Straight answers to the technical and commercial questions founders ask us every week.
            </p>
          </div>

          <div className={styles.faqList}>
            {faqItems.map((item, idx) => (
              <details key={item.q} className={styles.faqItem} open={idx === 0}>
                <summary className={styles.faqSummary}>
                  {item.q}
                  <span aria-hidden="true">&#x2193;</span>
                </summary>
                <div className={styles.faqAnswer}>
                  <p>{item.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final Conversion Banner */}
      <section className={styles.ctaSection}>
        <div className={styles.inner}>
          <div className={styles.ctaInner}>
            <h2 className={styles.ctaTitle}>{ctaTitle}</h2>
            <p className={styles.ctaLede}>{ctaLede}</p>
            <div className={styles.ctaActions}>
              <BookingCta location={bookingLocation}>
                Book a free 20-minute call
              </BookingCta>
            </div>
            <p className={styles.emailDirect}>
              Prefer email? Reach the founder directly at{" "}
              <a href="mailto:hello@shipthesis.com">hello@shipthesis.com</a>
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}

