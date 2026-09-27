"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import styles from "./HowItWorks.module.css";

// Copy: docs/design/home-brief.md §3. Design, Development and Testing repeat weekly.
const STEPS = [
  {
    label: "Discovery call",
    when: "Day 1, 30 minutes",
    body: "A straight answer on fit, plus a Discovery Sprint: a written scope, wireframes and a fixed quote with timeline and milestones.",
  },
  {
    label: "Design",
    when: "Before each screen is built",
    body: "Designs for your app's screens, which you see and approve before we build them.",
    weekly: true,
  },
  {
    label: "Development",
    when: "Weeks 2 onward",
    body: "A new build on your phone every week, against the milestones in your quote.",
    weekly: true,
  },
  {
    label: "Testing",
    when: "Every week, and before submission",
    body: "Each weekly build is tested before it reaches your phone, and the whole app is checked end to end before store submission.",
    weekly: true,
  },
  {
    label: "Store submission",
    when: "End of build",
    body: "We handle App Store and Play Store submission and review.",
  },
  {
    label: "Launch",
    when: "Launch day",
    body: "Your app, live, on accounts in your name.",
  },
];

export function HowItWorks() {
  const reduceMotion = useReducedMotion();

  return (
    <section className={styles.section} aria-labelledby="how-title">
      <div className={styles.inner}>
        <div className={styles.head}>
          <h2 id="how-title" className={styles.title}>
            How it works
          </h2>
          <p className={styles.lede}>
            From the first call to launch, with design, development and testing
            repeating every week until your app ships.
          </p>
        </div>

        <ol className={styles.grid}>
          {STEPS.map((step, i) => (
            <motion.li
              key={step.label}
              className={styles.step}
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.5,
                delay: (i % 3) * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {/* Placeholder until real visuals arrive. */}
              <div className={styles.visual}>
                <span>{step.label} visual</span>
                {i % 3 !== 2 && (
                  <svg
                    className={styles.arrow}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      d="M4 12h15m-5-5 5 5-5 5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </div>

              <span className={styles.badge}>
                Step {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className={styles.label}>{step.label}</h3>
              <p className={styles.body}>{step.body}</p>

              <p className={styles.meta}>
                <span className={styles.metaItem}>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <rect
                      x="3"
                      y="4.5"
                      width="14"
                      height="12.5"
                      rx="2"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    />
                    <path
                      d="M3 8.5h14M7 2.5v4M13 2.5v4"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                  </svg>
                  {step.when}
                </span>
                {step.weekly && (
                  <span className={styles.metaItem}>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path
                        d="M16 10a6 6 0 1 1-1.8-4.3M16 3.5v3.2h-3.2"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Every week
                  </span>
                )}
              </p>
            </motion.li>
          ))}
        </ol>

        <Link href="/services" className={styles.link}>
          What each stage includes
          <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
            <path
              d="M3 9h11m-4-4 4 4-4 4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
    </section>
  );
}
