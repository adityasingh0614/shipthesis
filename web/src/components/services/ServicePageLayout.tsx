import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { BookingCta } from "@/components/BookingCta";
import styles from "./ServicePage.module.css";

export interface ServiceHeroImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  deviceType: "phone" | "browser";
  browserUrl?: string;
}

export interface ServiceWhoItem {
  title: string;
  desc: string;
}

export interface ServiceWhoBlock {
  for: ServiceWhoItem[];
  notFor: ServiceWhoItem[];
}

export interface ServiceScreenshot {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
}

export interface ServiceCaseStudy {
  client: string;
  clientLabel?: string;
  eyebrow?: string;
  title: string;
  lede: string;
  timeline: string;
  stack: string[];
  metrics: { num: string; label: string }[];
  screenshots: ServiceScreenshot[];
  whatShipped: string[];
  caseStudyHref: string;
}

export interface ServiceDeliverable {
  tag: string;
  title: string;
  desc: string;
}

export interface ServiceFaq {
  q: string;
  a: string;
}

export interface ServicePageProps {
  breadcrumbTitle: string;
  badgeText?: string;
  title: ReactNode;
  lede: string;
  heroImage: ServiceHeroImage;
  who: ServiceWhoBlock;
  caseStudy: ServiceCaseStudy;
  deliverables: ServiceDeliverable[];
  faqs: ServiceFaq[];
  faqLede?: string;
  ctaPrefix?: string;
  ctaTitle?: string;
  ctaLede?: string;
  jsonLd: Record<string, unknown>;
}

export function ServicePageLayout({
  breadcrumbTitle,
  badgeText,
  title,
  lede,
  heroImage,
  who,
  caseStudy,
  deliverables,
  faqs,
  faqLede = "Direct, honest answers on tech choices, scope, timelines, and post-launch maintenance.",
  ctaPrefix = "services",
  ctaTitle = "Ready to ship your next product?",
  ctaLede = "Book a free 20-minute call to get an honest technical assessment of your idea and a timeline for your first build.",
  jsonLd,
}: ServicePageProps) {
  // Assemble comprehensive Schema.org graph for SEO, AEO, and GEO
  const existingGraph = Array.isArray(jsonLd?.["@graph"])
    ? (jsonLd["@graph"] as Record<string, unknown>[])
    : [];
  const serviceEntity = existingGraph.find((item) => item["@type"] === "Service");
  const rawId = (serviceEntity?.["@id"] as string) || "";
  const pageUrl = rawId ? rawId.replace(/#.*$/, "") : `https://www.shipthesis.com/${ctaPrefix}-development`;

  const webPageEntity = {
    "@type": "WebPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: typeof title === "string" ? title : breadcrumbTitle,
    description: lede,
    inLanguage: "en-US",
    dateModified: "2026-11-01",
    isPartOf: {
      "@id": "https://www.shipthesis.com/#website",
    },
    breadcrumb: {
      "@id": `${pageUrl}#breadcrumb`,
    },
  };

  const breadcrumbEntity = {
    "@type": "BreadcrumbList",
    "@id": `${pageUrl}#breadcrumb`,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.shipthesis.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: "https://www.shipthesis.com/#services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: breadcrumbTitle,
        item: pageUrl,
      },
    ],
  };

  const faqEntity = {
    "@type": "FAQPage",
    "@id": `${pageUrl}#faq`,
    description: faqLede,
    isPartOf: {
      "@id": `${pageUrl}#webpage`,
    },
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  const enrichedService = serviceEntity
    ? {
        ...serviceEntity,
        provider: {
          "@type": "Organization",
          "@id": "https://www.shipthesis.com/#organization",
          name: "Ship Thesis",
          url: "https://www.shipthesis.com",
        },
        termsOfService: "https://www.shipthesis.com/terms",
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: `${breadcrumbTitle} Deliverables`,
          itemListElement: deliverables.map((d, idx) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: d.title,
              description: d.desc,
            },
            position: idx + 1,
          })),
        },
      }
    : null;

  const otherEntities = existingGraph.filter(
    (item) =>
      item["@type"] !== "Service" &&
      item["@type"] !== "FAQPage" &&
      item["@type"] !== "BreadcrumbList" &&
      item["@type"] !== "WebPage"
  );

  const fullSchema = {
    "@context": "https://schema.org",
    "@graph": [
      webPageEntity,
      breadcrumbEntity,
      ...(enrichedService ? [enrichedService] : []),
      faqEntity,
      ...otherEntities,
    ],
  };

  return (
    <article className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(fullSchema) }}
      />

      {/* 01. Hero Section (Zero background box around phone, matches home design) */}
      <section className={styles.hero}>
        <div className={styles.inner}>
          <div className={styles.breadcrumbRow}>
            <nav aria-label="Breadcrumb" className={styles.breadcrumbs}>
              <Link href="/" className={styles.breadcrumbLink}>
                Ship Thesis
              </Link>
              <span className={styles.breadcrumbSep} aria-hidden="true">/</span>
              <Link href="/#services" className={styles.breadcrumbLink}>
                Services
              </Link>
              <span className={styles.breadcrumbSep} aria-hidden="true">/</span>
              <span className={styles.breadcrumbCurrent} aria-current="page">
                {breadcrumbTitle}
              </span>
            </nav>

            {badgeText && (
              <div className={styles.statusBadge}>
                <span className={styles.statusDot} aria-hidden="true" />
                <span>{badgeText}</span>
              </div>
            )}
          </div>

          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <h1 className={styles.heroTitle}>{title}</h1>
              <p className={styles.heroLede}>{lede}</p>

              <div className={styles.heroActions}>
                <BookingCta location={`${ctaPrefix}-hero`}>
                  Book a free 20-minute call
                </BookingCta>
                <a href="#case-study" className={styles.secondaryAction}>
                  <span>See real case study</span>
                  <span aria-hidden="true">&darr;</span>
                </a>
              </div>

              <p className={styles.heroReassurance}>
                20 minutes &middot; No pitch &middot; You speak directly with our engineering team.
              </p>


            </div>

            <div className={styles.heroVisualWrap}>
              {heroImage.deviceType === "phone" ? (
                <div className={styles.phoneHeroWrap}>
                  <Image
                    src={heroImage.src}
                    alt={heroImage.alt}
                    width={heroImage.width}
                    height={heroImage.height}
                    priority
                    className={styles.phoneHeroImg}
                  />
                </div>
              ) : (
                <div className={styles.laptopHeroWrap}>
                  <Image
                    src={heroImage.src}
                    alt={heroImage.alt}
                    width={heroImage.width}
                    height={heroImage.height}
                    priority
                    className={styles.laptopHeroImg}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 02. Target Fit: Who It's For & NOT For */}
      <section className={styles.section} id="who">
        <div className={styles.inner}>
          <div className={styles.sectionHead}>
            <span className={styles.sectionEyebrow}>Target Fit</span>
            <h2 className={styles.sectionTitle}>Built for specific founder needs</h2>
            <p className={styles.sectionLede}>
              We do not try to be everything for everyone. We do our best work when project requirements match our exact architectural focus.
            </p>
          </div>

          <div className={styles.whoGrid}>
            {/* Who It's For */}
            <div className={`${styles.whoCard} ${styles.whoForCard}`}>
              <div className={styles.whoHeader}>
                <div className={styles.whoBadgeFor}>
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M3.5 8.5l3 3 6-6" />
                  </svg>
                  <span>Who this is for</span>
                </div>
                <h3 className={styles.whoTitle}>Ideal fit for your project</h3>
              </div>
              <ul className={styles.whoList}>
                {who.for.map((item) => (
                  <li key={item.title} className={styles.whoItem}>
                    <span className={styles.whoIconCheck} aria-hidden="true">
                      <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3.5 8.5l3 3 6-6" />
                      </svg>
                    </span>
                    <div>
                      <strong className={styles.whoItemTitle}>{item.title}</strong>
                      <p className={styles.whoItemDesc}>{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Who It's NOT For */}
            <div className={`${styles.whoCard} ${styles.whoNotForCard}`}>
              <div className={styles.whoHeader}>
                <div className={styles.whoBadgeNotFor}>
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M4 4l8 8m0-8l-8 8" />
                  </svg>
                  <span>Who this is not for</span>
                </div>
                <h3 className={styles.whoTitle}>When we recommend alternatives</h3>
              </div>
              <ul className={styles.whoList}>
                {who.notFor.map((item) => (
                  <li key={item.title} className={styles.whoItem}>
                    <span className={styles.whoIconCross} aria-hidden="true">
                      <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4l8 8m0-8l-8 8" />
                      </svg>
                    </span>
                    <div>
                      <strong className={styles.whoItemTitle}>{item.title}</strong>
                      <p className={styles.whoItemDesc}>{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 03. Production Case Study (No hover jump on screenshots) */}
      <section className={`${styles.section} ${styles.sectionAlt}`} id="case-study">
        <div className={styles.inner}>
          <div className={styles.sectionHead}>
            <span className={styles.sectionEyebrow}>{caseStudy.eyebrow || "Case Study"}</span>
            <h2 className={styles.sectionTitle}>{caseStudy.title}</h2>
            <p className={styles.sectionLede}>{caseStudy.lede}</p>
          </div>

          <div className={styles.caseStudyCard}>
            {/* Meta Row */}
            <div className={styles.caseMetaBar}>
              <div className={styles.caseMetaGroup}>
                <span className={styles.caseMetaLabel}>{caseStudy.clientLabel || "Client"}:</span>
                <span className={styles.caseMetaValue}>{caseStudy.client}</span>
              </div>
              <div className={styles.caseMetaGroup}>
                <span className={styles.caseMetaLabel}>Timeline:</span>
                <span className={styles.caseMetaValue}>{caseStudy.timeline}</span>
              </div>
              <div className={styles.caseMetaGroup}>
                <span className={styles.caseMetaLabel}>Stack:</span>
                <div className={styles.caseStackPills}>
                  {caseStudy.stack.map((tech) => (
                    <span key={tech} className={styles.caseStackPill}>{tech}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Metrics Row */}
            <div className={styles.caseMetricsRow}>
              {caseStudy.metrics.map((m) => (
                <div key={m.label} className={styles.caseMetricBox}>
                  <span className={styles.caseMetricNum}>{m.num}</span>
                  <span className={styles.caseMetricLabel}>{m.label}</span>
                </div>
              ))}
            </div>

            {/* Real Screenshots Gallery (Static, clean, no hover effect) */}
            <div className={styles.screenshotsGrid}>
              {caseStudy.screenshots.map((s, idx) => (
                <div key={s.caption} className={styles.screenshotItem}>
                  <div className={styles.screenshotFrame}>
                    <Image
                      src={s.src}
                      alt={s.alt}
                      width={s.width}
                      height={s.height}
                      className={styles.screenshotImg}
                    />
                  </div>
                  <div className={styles.screenshotCaption}>
                    <span className={styles.screenshotIndex}>0{idx + 1}</span>
                    <span>{s.caption}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* What Shipped Deliverables */}
            <div className={styles.whatShippedBlock}>
              <h3 className={styles.whatShippedTitle}>Delivered in this build:</h3>
              <ul className={styles.whatShippedList}>
                {caseStudy.whatShipped.map((item) => (
                  <li key={item} className={styles.whatShippedItem}>
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M3.5 8.5l3 3 6-6" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.caseStudyFooter}>
              <Link href={caseStudy.caseStudyHref} className={styles.caseStudyLink}>
                <span>Read the technical case paper</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M3 8h10m-4-4 4 4-4 4" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 04. What You Get (Deliverables) */}
      <section className={styles.section} id="deliverables">
        <div className={styles.inner}>
          <div className={styles.sectionHead}>
            <span className={styles.sectionEyebrow}>What You Get</span>
            <h2 className={styles.sectionTitle}>Everything you need to launch with confidence</h2>
            <p className={styles.sectionLede}>
              No endless slide decks or vague wireframes. You receive tested, production-grade software and full intellectual property ownership.
            </p>
          </div>

          <div className={styles.deliverablesGrid}>
            {deliverables.map((d) => (
              <div key={d.title} className={styles.deliverableCard}>
                <span className={styles.deliverableTag}>{d.tag}</span>
                <h3 className={styles.deliverableTitle}>{d.title}</h3>
                <p className={styles.deliverableDesc}>{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 05. Frequently Asked Questions */}
      <section className={`${styles.section} ${styles.sectionAlt}`} id="faq">
        <div className={styles.inner}>
          <div className={styles.sectionHead}>
            <span className={styles.sectionEyebrow}>Transparency</span>
            <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
            <p className={styles.sectionLede}>
              {faqLede}
            </p>
          </div>

          <ul className={styles.faqList}>
            {faqs.map((faq, idx) => (
              <li key={faq.q}>
                <details className={styles.faqItem} open={idx === 0}>
                  <summary className={styles.faqSummary}>
                    <span>{faq.q}</span>
                    <span className={styles.faqChevron} aria-hidden="true">&darr;</span>
                  </summary>
                  <div className={styles.faqAnswer}>
                    <p>{faq.a}</p>
                  </div>
                </details>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 06. Call Band: High-converting action-green moment from the case studies */}
      <section id="contact" className={styles.callBand} aria-labelledby="call-title">
        <div className={styles.callWrap}>
          <h2 id="call-title" className={styles.callTitle}>
            {ctaTitle}
          </h2>
          <p className={styles.callLede}>{ctaLede}</p>
          <div className={styles.callActions}>
            <BookingCta location={`${ctaPrefix}-callband`} variant="button" className={styles.callBtn} />
          </div>
        </div>
      </section>
    </article>
  );
}
