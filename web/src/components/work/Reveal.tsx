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
      initial={reduce ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "150px 0px" }}
      transition={{ duration: 0.4, delay: Math.min(delay, 0.2), ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </M>
  );
}
