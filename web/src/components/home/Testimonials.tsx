"use client";

import { motion, useReducedMotion } from "motion/react";
import styles from "./Testimonials.module.css";

interface TestimonialItem {
  name: string;
  role: string;
  company?: string;
  quote: string;
  initials: string;
}

const TESTIMONIALS: TestimonialItem[] = [
  {
    name: "Claude Bernard",
    role: "Freelance Social Media Manager",
    company: "Poststeady",
    quote:
      "Monthly client reporting used to take me most of a weekend, downloading messy CSVs from Meta and LinkedIn and copying numbers into Canva slides. With Poststeady I just drop the raw analytics exports in and have a clean, branded PDF report in a couple of minutes. Huge time saver for my client work.",
    initials: "CB",
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
                  {t.initials}
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
                <div className={styles.rating} aria-label="Rated 5.0 out of 5 stars">
                  <span className={styles.ratingScore}>5.0</span>
                  <span className={styles.stars} aria-hidden="true">
                    ★★★★★
                  </span>
                </div>
              </div>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
