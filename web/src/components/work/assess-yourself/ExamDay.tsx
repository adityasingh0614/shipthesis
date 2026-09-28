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
  const refs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    // Scrollspy: a step is "intersecting" from the moment its top crosses
    // the upper half of the viewport until it scrolls fully past the top.
    // That's a tall window, so a fast scroll can't jump past a step without
    // it ever registering. The active step is the last (lowest) one still
    // intersecting, not just whichever the callback happened to see last.
    const seen = new Set<number>();
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          const i = Number((e.target as HTMLElement).dataset.i);
          if (e.isIntersecting) seen.add(i);
          else seen.delete(i);
        }
        if (seen.size) setActive(Math.max(...seen));
      },
      { rootMargin: "0px 0px -45% 0px", threshold: 0 },
    );
    refs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
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
      <ol className={styles.steps}>
        {STEPS.map((s, i) => (
          <li
            key={s.key}
            ref={(el) => {
              refs.current[i] = el;
            }}
            data-i={i}
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
      </ol>
    </div>
  );
}
