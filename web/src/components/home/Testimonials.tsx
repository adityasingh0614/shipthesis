"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import styles from "./Testimonials.module.css";

interface TestimonialItem {
  name: string;
  role: string;
  company?: string;
  quote: string;
  initials: string;
  imageSrc?: string;
  caseStudyHref?: string;
}

const TESTIMONIALS: TestimonialItem[] = [
  {
    name: "Valmik",
    role: "Founder",
    company: "Aptellic",
    quote:
      "We had a major headache with timed mock tests on budget Android phones: if a student received a phone call or the battery went into power saver mode, the app would restart and wipe their answers. Ship Thesis built an offline-first SQLite sync engine in Flutter that saved state per question. Delivered in four weeks, directly in our GitHub repo, and tests survive interruptions seamlessly.",
    initials: "V",
    imageSrc: "/logo/ay_logo.webp",
    caseStudyHref: "/work/assess-yourself",
  },
];

export function Testimonials() {
  const reduceMotion = useReducedMotion();

  return (
    <section className={styles.section} aria-labelledby="testimonials-title">
      <div className={styles.inner}>
        <div className={styles.head}>
          <h2 id="testimonials-title" className={styles.title}>
            What founders and builders say
          </h2>
          <p className={styles.lede}>
            Real feedback from products we&apos;ve designed, built, and shipped.
          </p>
        </div>

        <div className={`${styles.grid} ${TESTIMONIALS.length === 1 ? styles.gridSingle : ""}`}>
          {TESTIMONIALS.map((t, i) => (
            <motion.figure
              key={t.name}
              className={styles.quote}
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "150px 0px" }}
              transition={{
                duration: 0.45,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <figcaption className={styles.person}>
                <span className={styles.avatar} aria-hidden="true">
                  {t.imageSrc ? (
                    <Image
                      src={t.imageSrc}
                      alt=""
                      width={44}
                      height={44}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                        padding: "4px",
                        borderRadius: "inherit",
                      }}
                    />
                  ) : (
                    t.initials
                  )}
                </span>
                <span className={styles.personDetails}>
                  <span className={styles.name}>{t.name}</span>
                  <span className={styles.role}>
                    {t.company ? `${t.role} · ${t.company}` : t.role}
                  </span>
                </span>
              </figcaption>

              <blockquote className={styles.body}>
                <span className={styles.mark} aria-hidden="true">
                  &ldquo;
                </span>
                <p className={styles.quoteText}>{t.quote}</p>
              </blockquote>

              <div className={styles.cardFoot}>
                <span className={styles.verifiedBadge}>
                  <span className={styles.verifiedDot} aria-hidden="true" />
                  Verified client build
                </span>
                {t.caseStudyHref && (
                  <Link href={t.caseStudyHref} className={styles.caseStudyLink}>
                    Read case study &rarr;
                  </Link>
                )}
              </div>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
