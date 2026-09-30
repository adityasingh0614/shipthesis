"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Poststeady.module.css";

// Facts: the Poststeady repo's own five-step wizard (app/reports/new/
// step-1..5, docs/01-product-truth.md §4), then the PDF or share link. Every screen is a placeholder until captured from
// a demo account with made-up clients.
const STEPS = [
  { n: "01", title: "Pick the client and the month", body: "Their logo and brand colour come along automatically.", shot: ["Setup step", "Client and reporting month"] },
  { n: "02", title: "Upload the exports", body: "The files each platform already gives you, no social-account logins. Rows, dates and platform are checked as they land. Add last month's too, for a real comparison.", shot: ["Upload step", "File checks: rows, dates, platform"] },
  { n: "03", title: "Confirm the matches", body: "Columns are pre-matched from 175 known names; you confirm or correct them.", shot: ["Column matching screen", "Pre-filled matches"] },
  { n: "04", title: "Check the numbers", body: "Every imported number, by platform. Fix any value, or hide what this client doesn\u2019t need.", shot: ["Metrics review", "Numbers by platform"] },
  { n: "05", title: "Edit the summary", body: "The AI drafts it from the real figures; you edit any line before it goes out.", shot: ["Review step", "AI summary, editable"] },
  { n: "06", title: "Send it", body: "A branded three-page PDF, or a link the client opens in any browser, with no login.", shot: ["Finished report, page 1", "Branded, made-up client"] },
];

// The browser frame stays pinned while the steps scroll past; the step
// crossing the upper half lights up and the frame's label follows it.
export function Wizard() {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    // Scrollspy: narrowed down to a 1% sliver exactly in the middle of the
    // screen (-49% to -50%). Because the cues are stacked, this ensures
    // only one cue intersects at a time, preventing skips when fast-scrolling.
    const seen = new Set<number>();
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          const i = Number((e.target as HTMLElement).dataset.i);
          if (e.isIntersecting) seen.add(i);
          else seen.delete(i);
        }
        if (seen.size) setActive(Math.min(...seen));
      },
      { rootMargin: "-49% 0px -50% 0px", threshold: 0 },
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
