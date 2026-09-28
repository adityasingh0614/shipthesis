"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Poststeady.module.css";

// Facts: docs/case-studies/poststeady-raw.md §5 (the five-step wizard, then
// the PDF or share link). Every screen is a placeholder until captured from
// a demo account with made-up clients.
const UPLOAD = ["Upload step", "File checks: row counts, date range, platform detected"];
const STEPS = [
  { n: "01", title: "Download what you already have", body: "The exports each platform already gives you. No social-account logins.", shot: UPLOAD },
  { n: "02", title: "Upload, checked on arrival", body: "Row counts, the date range and the platform, detected as the files land.", shot: UPLOAD },
  { n: "03", title: "Confirm the matches", body: "Column names are pre-filled from 175 known aliases; you confirm or correct them.", shot: ["Column matching screen", "Pre-filled matches"] },
  { n: "04", title: "Check the numbers", body: "Headline metrics are editable before anything is written or sent.", shot: ["Metrics review", "Editable headline cards"] },
  { n: "05", title: "The summary, drafted for you", body: "An AI-written summary you edit, with month-over-month comparisons.", shot: ["AI summary editor"] },
  { n: "06", title: "Send it", body: "A branded PDF, or a share link the client opens without logging in.", shot: ["Finished report, page 1", "Branded, made-up client"] },
];

// The browser frame stays pinned while the steps scroll past; the step
// crossing the upper half lights up and the frame's label follows it.
export function Wizard() {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    // Same scrollspy as Exam Day and Go Live: the lowest step still
    // crossing the upper half wins, so a fast scroll can't skip one.
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

  const [head, sub] = STEPS[active].shot;

  return (
    <div className={styles.wizard}>
      <div className={styles.pin}>
        <div
          className={`${styles.ph} ${styles.phBrowser}`}
          role="img"
          aria-label={`Placeholder: ${STEPS[active].shot.join(", ")}`}
        >
          <span>
            {head}
            {sub && <br />}
            {sub && `(${sub})`}
          </span>
        </div>
      </div>
      <ol className={styles.steps}>
        {STEPS.map((s, i) => (
          <li
            key={s.n}
            ref={(el) => {
              refs.current[i] = el;
            }}
            data-i={i}
            className={`${styles.step} ${i === active ? styles.on : ""}`}
          >
            <span className={styles.sn}>{s.n}</span>
            <div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
