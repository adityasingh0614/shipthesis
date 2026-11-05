"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import styles from "./Testimonials.module.css";

interface TestimonialItem {
  name: string;
  role: string;
  company: string;
  product: string;
  href: string;
  quote: string;
  initials: string;
  metric: string;
}

const TESTIMONIALS: TestimonialItem[] = [
  {
    name: "Rohit Nair",
    role: "Co-Founder & Head of Product",
    company: "Aptellic",
    product: "Assess Yourself",
    href: "/work/assess-yourself",
    quote:
      "Our biggest worry was test integrity on Android — students would take a phone call mid-exam, and other apps would wipe their progress. Ship Thesis built the local SQLite engine so the timer and every selected answer survive app kills, reboots, and zero connectivity. Over 4,000 papers submitted with zero dropped sessions.",
    initials: "RN",
    metric: "4,000+ test papers submitted",
  },
  {
    name: "Claire Vance",
    role: "Independent Social Media Strategist",
    company: "Vance Studio",
    product: "Poststeady",
    href: "/work/poststeady",
    quote:
      "End-of-month reporting was easily the worst part of my studio. I spent 6 to 8 hours downloading conflicting CSVs from Meta and LinkedIn, wrestling formulas in Sheets, and pasting charts into Canva until 2am. With Poststeady, I drop the raw export files in and get a clean, client-ready deck in under a minute. Gave me my weekends back.",
    initials: "CV",
    metric: "8 hrs → 20 mins monthly reporting",
  },
  {
    name: "Marcus Lind",
    role: "Technical Artist & Colorist",
    company: "Freelance",
    product: "ChromaLayer",
    href: "/work/chromalayer",
    quote:
      "Most Windows tools that touch display curves crash during driver updates or get wiped out after sleep. ChromaLayer just runs silently in the tray, applies my color temperature and vibrance curves on logon, and actually persists through sleep and monitor disconnects without hogging CPU. It does exactly what it promises.",
    initials: "ML",
    metric: "7 display controls persisted",
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
            Real feedback from products we&apos;ve designed, built, and launched.
          </p>
        </div>

        <div className={styles.grid}>
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
                  {t.initials}
                </span>
                <span className={styles.personDetails}>
                  <span className={styles.name}>{t.name}</span>
                  <span className={styles.role}>
                    {t.role} · {t.company}
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
                <span className={styles.metricBadge}>
                  <span className={styles.metricDot} aria-hidden="true" />
                  {t.metric}
                </span>
                <Link href={t.href} className={styles.projectLink}>
                  <span>{t.product}</span>
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
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
