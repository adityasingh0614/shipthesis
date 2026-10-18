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

      const triggerLine = window.innerHeight * 0.45;
      const items = Array.from(list.children) as HTMLElement[];
      let closestIdx = 0;
      let minDistance = Infinity;

      items.forEach((item, i) => {
        const rect = item.getBoundingClientRect();
        const itemCenter = rect.top + rect.height * 0.5;
        const distance = Math.abs(itemCenter - triggerLine);
        if (distance < minDistance) {
          minDistance = distance;
          closestIdx = i;
        }
      });

      setActive(closestIdx);
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

  const handleStepClick = (idx: number) => {
    const list = listRef.current;
    if (!list) return;
    const item = list.children[idx] as HTMLElement;
    if (item) {
      item.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

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
            onClick={() => handleStepClick(i)}
            className={`${styles.step} ${i === active ? styles.active : ""}`}
            tabIndex={0}
            role="button"
            aria-current={i === active ? "step" : undefined}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handleStepClick(i);
              }
            }}
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
