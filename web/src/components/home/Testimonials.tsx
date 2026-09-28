"use client";

import { motion, useReducedMotion } from "motion/react";
import styles from "./Testimonials.module.css";

// Placeholders only (docs/design/home-brief.md §6): no testimonials on record.
// page.tsx keeps this section off the live site until real, approved quotes
// replace these. Never swap in sample quotes that look real.
type Card = { kind: "quote" } | { kind: "video"; tall?: boolean };

const COLUMNS: Card[][] = [
  [{ kind: "quote" }, { kind: "video", tall: true }],
  [{ kind: "video", tall: true }, { kind: "quote" }],
  [{ kind: "quote" }, { kind: "video", tall: true }],
];

export function Testimonials() {
  const reduceMotion = useReducedMotion();

  return (
    <section className={styles.section} aria-labelledby="testimonials-title">
      <div className={styles.inner}>
        <div className={styles.head}>
          <h2 id="testimonials-title" className={styles.title}>
            What our clients say
          </h2>
          <p className={styles.lede}>
            Founders we&apos;ve built for, on what it was like to work with us.
          </p>
        </div>

        <div className={styles.grid}>
          {COLUMNS.map((column, c) => (
            <div key={c} className={styles.column}>
              {column.map((card, r) => (
                <motion.figure
                  key={r}
                  className={card.kind === "quote" ? styles.quote : styles.video}
                  data-tall={card.kind === "video" && card.tall ? "" : undefined}
                  initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{
                    duration: 0.5,
                    delay: c * 0.08 + r * 0.14,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {card.kind === "quote" ? <QuoteCard /> : <VideoCard />}
                </motion.figure>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Person() {
  return (
    <figcaption className={styles.person}>
      <span className={styles.avatar} aria-hidden="true" />
      <span>
        <span className={styles.name}>Client name</span>
        <span className={styles.role}>Role, Company</span>
      </span>
    </figcaption>
  );
}

function QuoteCard() {
  return (
    <>
      <Person />
      <blockquote className={styles.body}>
        <span className={styles.mark} aria-hidden="true">
          &ldquo;
        </span>
        <p>
          Placeholder. A short, approved quote from a real client goes here,
          three lines at most.
        </p>
      </blockquote>
    </>
  );
}

function VideoCard() {
  return (
    <>
      {/* Placeholder frame until a real client video (with poster) arrives. */}
      <div className={styles.frame}>
        <span className={styles.frameLabel}>Video testimonial</span>
        <span className={styles.play} aria-hidden="true">
          <svg width="18" height="18" viewBox="0 0 18 18">
            <path d="M5 3.5v11l9-5.5z" fill="currentColor" />
          </svg>
        </span>
      </div>
      <Person />
    </>
  );
}
