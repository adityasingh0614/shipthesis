"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Poststeady.module.css";

// Three real header names (docs/case-studies/poststeady-raw.md §4) get a
// proofreader's strike and merge into the one name the report uses. The
// strikes draw once, when the block scrolls into view. Without JS, or with
// reduced motion, they're simply drawn.
const HEADERS = [
  ["Header in one export", "Amount Spent"],
  ["Header in another", "Cost"],
  ["And another", "Total Spend"],
];

export function SpendMerge() {
  const ref = useRef<HTMLDivElement>(null);
  const [armed, setArmed] = useState(false);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    setArmed(true);
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={styles.spend}
      data-armed={armed}
      data-seen={seen}
    >
      <div className={styles.cells}>
        {HEADERS.map(([note, name], i) => (
          <span key={name} className={styles.cell} style={{ "--i": i } as React.CSSProperties}>
            <small>{note}</small>
            <span className={styles.nm}>{name}</span>
          </span>
        ))}
      </div>
      <svg className={styles.merge} viewBox="0 0 140 240" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 40 C70 40 70 120 140 120" />
        <path d="M0 120 H140" />
        <path d="M0 200 C70 200 70 120 140 120" />
      </svg>
      <span className={`${styles.cell} ${styles.clean}`}>
        <small>In the report</small>
        <b>Spend</b>
      </span>
    </div>
  );
}
