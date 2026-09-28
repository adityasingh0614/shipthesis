"use client";

import Link from "next/link";
import { motion, useTransform } from "motion/react";
import {
  ShrinkHeader,
  ShrinkHeaderFill,
  ShrinkHeaderRow,
  useCondenseProgress,
} from "@/components/motion-ui/shrink-header";
import styles from "./SiteHeader.module.css";

const NAV = [
  { href: "/#work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

function HeaderContents() {
  const condense = useCondenseProgress();
  const wordmarkScale = useTransform(condense, [0, 1], [1, 0.86]);
  const clusterScale = useTransform(condense, [0, 1], [1, 0.94]);

  return (
    <>
      <Link href="/" className={styles.wordmark} aria-label="Ship Thesis, home">
        <motion.span style={{ scale: wordmarkScale }} className={styles.wordmarkText}>
          Ship Thesis
        </motion.span>
      </Link>

      <motion.div style={{ scale: clusterScale }} className={styles.cluster}>
        <nav aria-label="Main" className={styles.nav}>
          {NAV.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <Link href="/#contact" className={`btn ${styles.cta}`}>
          Book a Discovery Call
        </Link>
      </motion.div>

      {/* ponytail: native <details> menu, no JS; swap for a dialog if it needs focus trapping */}
      <details className={styles.menu}>
        <summary aria-label="Menu">
          <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true">
            <path d="M3 7h16M3 15h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </summary>
        <nav aria-label="Main" className={styles.menuPanel}>
          {NAV.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
          <Link href="/#contact" className="btn">
            Book a Discovery Call
          </Link>
        </nav>
      </details>
    </>
  );
}

export function SiteHeader() {
  return (
    <ShrinkHeader className={styles.header}>
      <ShrinkHeaderFill />
      <ShrinkHeaderRow className={styles.inner}>
        <HeaderContents />
      </ShrinkHeaderRow>
    </ShrinkHeader>
  );
}
