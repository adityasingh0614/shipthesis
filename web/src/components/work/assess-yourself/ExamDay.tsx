"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
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

// The analytics phone stays pinned while the steps scroll past; the step
// crossing the middle of the screen fills its answer-sheet bubble.
export function ExamDay() {
  const [active, setActive] = useState(0);
  const listRef = useRef<HTMLOListElement | null>(null);

  useEffect(() => {
    let raf = 0;

    const update = () => {
      raf = 0;
      const list = listRef.current;
      if (!list) return;
      const r = list.getBoundingClientRect();
      const line = window.innerHeight * 0.5;
      const p = (line - r.top) / r.height;
      const idx = Math.min(STEPS.length - 1, Math.max(0, Math.floor(p * STEPS.length)));
      setActive(idx);
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className={styles.day}>
      <div className={styles.pin}>
        <Image
          src="/work/assess-yourself/analytics.webp"
          width={964}
          height={1990}
          alt="Analytics after a test: tests taken, average rank, accuracy, percentile and time per question"
          sizes="300px"
        />
      </div>
      <ol className={styles.steps} ref={listRef}>
        {STEPS.map((s, i) => (
          <li
            key={s.key}
            className={`${styles.step} ${i <= active ? styles.done : ""} ${i === active ? styles.active : ""}`}
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
      </ol>
    </div>
  );
}
