"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import styles from "./HowItWorks.module.css";

// Copy: docs/design/home-brief.md §3. Design, Development and Testing repeat weekly.
const STEPS = [
  {
    label: "Discovery call",
    when: "Day 1 - 30 minutes",
    body: "We learn what you're building, what you need, and whether we're the right fit. Then we turn it into a clear scope, wireframes, timeline, and milestones.",
    img: "/How it works/step1.webp",
    imgAlt: "Discovery call illustration",
  },
  {
    label: "Design",
    when: "Before each screen is built",
    body: "We design the screens your users will see, then get your approval before development begins.",
    weekly: true,
    img: "/How it works/step2.webp",
    imgAlt: "Design step illustration",
  },
  {
    label: "Development",
    when: "Weeks 2 onward - Every week",
    body: "You get a new working build on your phone every week, with progress tied to the agreed milestones.",
    weekly: true,
    img: "/How it works/step3.webp",
    imgAlt: "Development step illustration",
  },
  {
    label: "Testing",
    when: "Every week + before submission",
    body: "Every build is tested before it reaches you, with full end-to-end testing before submission.",
    weekly: true,
    img: "/How it works/step4.webp",
    imgAlt: "Testing step illustration",
  },
  {
    label: "Store submission",
    when: "End of build",
    body: "We handle the App Store and Play Store submission, including the review process.",
    img: "/How it works/step5.webp",
    imgAlt: "Store submission step illustration",
  },
  {
    label: "Launch",
    when: "Launch day",
    body: "Your app, live on the App Store and Play Store.",
    img: "/How it works/step6.webp",
    imgAlt: "Launch step illustration",
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
            From the first call to launch, design, development, and testing move
            in weekly cycles until your product is ready to ship.
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
              {step.img ? (
                <div className={`${styles.visual} ${styles.hasImg}`}>
                  <div className={styles.frame}>
                    <Image
                      src={step.img}
                      alt={step.imgAlt ?? ""}
                      width={1672}
                      height={941}
                      sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 380px"
                      className={styles.shot}
                    />
                  </div>
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
              ) : (
                <div className={styles.visual}>
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
              )}

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



