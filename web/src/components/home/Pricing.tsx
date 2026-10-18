"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import styles from "./Pricing.module.css";

const MILESTONES = [
  {
    percent: "30%",
    phase: "Milestone 01",
    heading: "Kickoff & Scope",
    body: "Define the requirements, approve the initial specifications and wireframes, and agree on the delivery plan.",
  },
  {
    percent: "40%",
    phase: "Milestone 02",
    heading: "Working Software",
    body: "Review the core functionality in a working build on your device, with progress demonstrated at agreed intervals.",
  },
  {
    percent: "30%",
    phase: "Milestone 03",
    heading: "Final Delivery & Handover",
    body: "Complete the agreed deliverables, prepare and manage applicable app-store submissions, and transfer project intellectual property in accordance with the contract after final payment.",
  },
];

export function Pricing() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="pricing" className={styles.section} aria-labelledby="pricing-title">
      <div className={styles.inner}>
        <div className={styles.head}>
          <span className={styles.eyebrow}>Transparent Milestone Pricing</span>
          <h2 id="pricing-title" className={styles.title}>
            Pricing &amp; Milestones
          </h2>
          <p className={styles.lede}>
            We don&apos;t bill open-ended hourly rates or force your product into a one-size-fits-all package. Every project receives a written scope, agreed deliverables, timeline, and fixed quote before development begins.
          </p>
        </div>

        {/* 3 Milestone Cards */}
        <div className={styles.grid}>
          {MILESTONES.map((m, i) => (
            <motion.div
              key={m.phase}
              className={styles.card}
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.45,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className={styles.cardTop}>
                <span className={styles.percent}>{m.percent}</span>
                <span className={styles.phase}>{m.phase}</span>
              </div>
              <h3 className={styles.heading}>{m.heading}</h3>
              <p className={styles.body}>{m.body}</p>
            </motion.div>
          ))}
        </div>

        {/* Trust Summary Strip */}
        <div className={styles.trustStrip}>
          <p className={styles.trustText}>
            Clear ownership. Defined scope. No unapproved extra charges.
          </p>
        </div>

        {/* Discovery Call Action Box */}
        <div className={styles.discoveryBox}>
          <div className={styles.discoveryContent}>
            <p className={styles.discoveryText}>
              Every project starts with a free 30-minute discovery call to discuss your concept, technical requirements, and suitability for a fixed-scope engagement.
            </p>
            <Link href="/#contact" className={`btn ${styles.ctaBtn}`}>
              Book a Free Discovery Call
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
