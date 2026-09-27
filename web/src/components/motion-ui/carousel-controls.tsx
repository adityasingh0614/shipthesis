"use client";

import { motion, useReducedMotion } from "motion/react";
import styles from "./carousel-controls.module.css";

const SPRING = { type: "spring", stiffness: 420, damping: 34 } as const;

/** Position dots; the active one stretches into a pill on a spring. */
export function CarouselDots({
  count,
  index,
  onSelect,
  labels,
}: {
  count: number;
  index: number;
  onSelect: (i: number) => void;
  labels: string[];
}) {
  const reduceMotion = useReducedMotion();
  return (
    <div className={styles.dots}>
      {Array.from({ length: count }, (_, i) => (
        <button
          key={i}
          type="button"
          className={styles.dotHit}
          aria-label={`Show ${labels[i]}`}
          aria-current={i === index ? "true" : undefined}
          onClick={() => onSelect(i)}
        >
          <motion.span
            className={styles.dot}
            initial={false}
            animate={{
              width: i === index ? 40 : 18,
              backgroundColor: i === index ? "#0a7f55" : "#c9d3cc",
            }}
            transition={reduceMotion ? { duration: 0 } : SPRING}
          />
        </button>
      ))}
    </div>
  );
}
