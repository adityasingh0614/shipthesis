"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useMotionValueEvent } from "motion/react";
import styles from "./AssessYourself.module.css";

// Facts: docs/case-studies/acessyourself_raw.md (test engine, interrupted
// test recovery, instant analysis and history).
const STEPS = [
  { key: "A", when: "Before", title: "Pick a paper", body: "A previous-year paper, a practice test, or a live test that opens and closes on schedule." },
  { key: "B", when: "0:00", title: "Start the clock", body: "Up to 60+ questions against a strict time limit." },
  { key: "C", when: "Mid-paper", title: "Mark for review", body: "Flag a question, move on, and come back to it before submitting." },
  { key: "D", when: "The worst moment", title: "The app gets closed", body: "Android kills it, the phone crashes, or a thumb slips." },
  { key: "E", when: "Reopen", title: "Carry on", body: "Answers, review marks and the time already spent come back exactly as they were." },
  { key: "F", when: "Submit", title: "Instant analysis", body: "Score, rank, accuracy and time per question straight away, with every past test kept in the history." },
];

export function ExamDay() {
  const [active, setActive] = useState(0);
  const pinRef = useRef<HTMLDivElement>(null);
  const last = STEPS.length - 1;

  const { scrollYProgress } = useScroll({
    target: pinRef,
    offset: ["start start", "end end"],
  });

  const progress = useTransform(scrollYProgress, [0.08, 0.92], [0, 1], {
    clamp: true,
  });

  useMotionValueEvent(progress, "change", (p) =>
    setActive(Math.round(p * last)),
  );

  return (
    <div className={styles.day} ref={pinRef} style={{ height: `${100 + last * 90}vh` }}>
      <div className={styles.sticky}>
        <div className={styles.pin}>
          <Image
            src="/work/assess-yourself/analytics.webp"
            width={964}
            height={1990}
            alt="Analytics after a test: tests taken, average rank, accuracy, percentile and time per question"
            sizes="300px"
          />
        </div>
        <div className={styles.track}>
          <motion.ol
            className={styles.steps}
            animate={{ y: `calc(${-active * 100}% - ${active * 18}px)` }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
          >
            {STEPS.map((s, i) => (
              <li
                key={s.key}
                className={`${styles.step} ${i === active ? styles.active : ""}`}
              >
                <span className={styles.bubble} aria-hidden="true">
                  {s.key}
                </span>
                <div>
                  <small>{s.when}</small>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </div>
              </li>
            ))}
          </motion.ol>
        </div>
      </div>
    </div>
  );
}
