import Image from "next/image";
import Link from "next/link";
import styles from "./WhatWeBuild.module.css";
import { BookingCta } from "@/components/BookingCta";

const SERVICES = [
  {
    title: "Mobile apps and MVPs",
    href: "/flutter-app-development",
    image: "/work/assess-yourself/card.webp",
    alt: "AssessYourself offline-first mobile app preview on phone",
    text: "iOS and Android from one Flutter codebase. A working build on your phone every week, and code you own.",
    tags: "Flutter · iOS · Android · Offline-first",
    linkText: "Explore mobile apps & MVPs",
  },
  {
    title: "SaaS and web platforms",
    href: "/saas-development",
    image: "/work/safety-training-platform/card.webp",
    alt: "EHS Guru training platform dashboard preview on laptop",
    text: "Full-stack web products with accounts, billing and dashboards. Built on Next.js and Supabase.",
    tags: "Next.js · Supabase · Billing",
    linkText: "Explore SaaS & web platforms",
  },
];

export function WhatWeBuild() {
  return (
    <section id="services" className={styles.section} aria-labelledby="build-title">
      <div className={styles.inner}>
        <div className={styles.head}>
          <h2 id="build-title" className={styles.title}>
            What we build
          </h2>
          <p className={styles.lede}>
            Everything your product needs to go live.
          </p>
        </div>

        <ul className={styles.grid}>
          {SERVICES.map((s) => (
            <li key={s.title} className={styles.cell}>
              <div className={styles.card}>
                <div className={styles.visual}>
                  <Image
                    src={s.image}
                    alt={s.alt}
                    width={1920}
                    height={1080}
                    className={styles.cardImage}
                    priority
                    unoptimized
                  />
                </div>
                <div className={styles.copy}>
                  <div className={styles.tags}>{s.tags}</div>
                  <h3 className={styles.name}>{s.title}</h3>
                  <p className={styles.line}>{s.text}</p>
                  <Link href={s.href} className={styles.cardLink}>
                    <span>{s.linkText}</span>
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path
                        d="M3 8h10m-4-4 4 4-4 4"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>

        {/* Visible row directly under the cards for MVP & AI */}
        <div className={styles.subServicesRow}>
          <span className={styles.subServicesLabel}>Also:</span>
          <Link href="/mvp-development" className={styles.subServiceLink}>
            Launch an MVP in weeks <span aria-hidden="true">&rarr;</span>
          </Link>
          <span className={styles.subServiceDot} aria-hidden="true">&middot;</span>
          <Link href="/ai-product-development" className={styles.subServiceLink}>
            AI features for documents and reports <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>

        <p className={styles.includedNote}>
          UX/UI design and App Store submission come with every build. After launch, maintenance is available as a plan.
        </p>

        <div className={styles.bottomNote}>
          <span className={styles.notePrefix}>
            Need something else, like desktop software or internal tools?{" "}
          </span>
          <BookingCta
            location="services"
            variant="text"
            showArrow={false}
            className={styles.noteLink}
          >
            Tell us what you&apos;re building on a free 20-minute call &rarr;
          </BookingCta>
        </div>
      </div>
    </section>
  );
}
