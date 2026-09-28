"use client";

import type { CSSProperties, ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

// Staggered entrance for case study content: fades and rises once as it
// scrolls into view. Static with reduced motion.
export function Reveal({
  children,
  delay = 0,
  as = "div",
  className,
  style,
}: {
  children: ReactNode;
  /** Seconds, for staggering siblings. */
  delay?: number;
  as?: "div" | "li";
  className?: string;
  style?: CSSProperties;
}) {
  const reduce = useReducedMotion();
  const M = as === "li" ? motion.li : motion.div;
  return (
    <M
      className={className}
      style={style}
      initial={reduce ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </M>
  );
}
