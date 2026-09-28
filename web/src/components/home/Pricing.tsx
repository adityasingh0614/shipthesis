"use client";

import Link from "next/link";
import { useId, useState, type KeyboardEvent } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import styles from "./Pricing.module.css";

// Facts: .agents/product-marketing.md (Pricing). /pricing owns the full detail;
// each card here is one line. No "recommended" plan, no discounts.
type Plan = {
  name: string;
  from?: boolean;
  price: string;
  per?: string;
  line: string;
};

const TABS: {
  id: "build" | "maintain";
  label: string;
  plans: Plan[];
  note?: string;
}[] = [
  {
    id: "build",
    label: "Get it built",
    plans: [
      {
        name: "Discovery Sprint",
        price: "$750",
        line: "One week to a written scope and a fixed quote. Credited toward your build if you continue.",
      },
      {
        name: "MVP Build",
        from: true,
        price: "$6,000",
        line: "Typically 6-10 weeks, as a fixed quote.",
      },
      {
        name: "After launch",
        price: "Free",
        per: "30 days",
        line: "Fixes for in-scope bugs, before any support plan starts.",
      },
    ],
  },
  {
    id: "maintain",
    label: "Keep it running",
    plans: [
      {
        name: "App Care",
        from: true,
        price: "$300",
        per: "/month",
        line: "Your app kept current: bug fixes, OS updates and store resubmissions.",
      },
      {
        name: "Product Care",
        from: true,
        price: "$550",
        per: "/month",
        line: "Everything in App Care, plus your backend: servers, payments and logins watched.",
      },
      {
        name: "Full Care",
        from: true,
        price: "$900",
        per: "/month",
        line: "Everything in Product Care, plus your admin panel or web app, and a reply within 4 working hours.",
      },
    ],
    note: "Plans start after your 30 days of free fixes.",
  },
];

const EASE = [0.22, 1, 0.36, 1] as const;

export function Pricing() {
  const [active, setActive] = useState(0);
  const reduceMotion = useReducedMotion();
  const id = useId();
  const tab = TABS[active];

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
    e.preventDefault();
    const next =
      (active + (e.key === "ArrowRight" ? 1 : -1) + TABS.length) % TABS.length;
    setActive(next);
    document.getElementById(`${id}-tab-${next}`)?.focus();
  };

  return (
    <section id="pricing" className={styles.section} aria-labelledby="pricing-title">
      <div className={styles.inner}>
        <div className={styles.head}>
          <h2 id="pricing-title" className={styles.title}>
            What it costs
          </h2>
          <p className={styles.lede}>
            The real numbers, before you book a call. Every build ends in a
            fixed quote, and support is priced up front too.
          </p>
        </div>

        {/* Segmented toggle: the pill slides on a spring */}
        <div
          className={styles.toggle}
          role="tablist"
          aria-label="Pricing"
          onKeyDown={onKeyDown}
        >
          {TABS.map((t, i) => (
            <button
              key={t.id}
              id={`${id}-tab-${i}`}
              type="button"
              role="tab"
              aria-selected={i === active}
              aria-controls={`${id}-panel`}
              tabIndex={i === active ? 0 : -1}
              className={styles.tab}
              onClick={() => setActive(i)}
            >
              {i === active && (
                <motion.span
                  layoutId={`${id}-pill`}
                  className={styles.pill}
                  transition={
                    reduceMotion
                      ? { duration: 0 }
                      : { type: "spring", stiffness: 480, damping: 38 }
                  }
                />
              )}
              <span className={styles.tabLabel}>{t.label}</span>
            </button>
          ))}
        </div>

        <div
          id={`${id}-panel`}
          role="tabpanel"
          aria-labelledby={`${id}-tab-${active}`}
          className={styles.panel}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.ul
              key={tab.id}
              className={styles.grid}
              initial="out"
              animate="in"
              exit="gone"
              variants={{
                in: {
                  transition: { staggerChildren: reduceMotion ? 0 : 0.06 },
                },
              }}
            >
              {tab.plans.map((p) => (
                <motion.li
                  key={p.name}
                  className={styles.card}
                  variants={{
                    out: {
                      opacity: 0,
                      y: reduceMotion ? 0 : 14,
                      filter: reduceMotion ? "none" : "blur(4px)",
                    },
                    in: {
                      opacity: 1,
                      y: 0,
                      filter: "blur(0px)",
                      transition: {
                        duration: reduceMotion ? 0 : 0.36,
                        ease: EASE,
                      },
                    },
                    gone: {
                      opacity: 0,
                      y: reduceMotion ? 0 : -8,
                      filter: reduceMotion ? "none" : "blur(4px)",
                      transition: {
                        duration: reduceMotion ? 0 : 0.18,
                        ease: "easeIn",
                      },
                    },
                  }}
                >
                  {/* Border beam: a short green light running around the border on hover */}
                  <svg className={styles.beam} aria-hidden="true">
                    <rect width="100%" height="100%" rx="15" pathLength={100} />
                  </svg>
                  <h3 className={styles.name}>{p.name}</h3>
                  <p className={styles.price}>
                    {p.from && <span className={styles.from}>From</span>}
                    <span className={styles.amount}>{p.price}</span>
                    {p.per && <span className={styles.per}>{p.per}</span>}
                  </p>
                  <p className={styles.line}>{p.line}</p>
                </motion.li>
              ))}
            </motion.ul>
          </AnimatePresence>
          <p className={styles.note} aria-hidden={!tab.note}>
            {tab.note ?? " "}
          </p>
        </div>

        <Link href="/pricing" className={styles.link}>
          See full pricing
          <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
            <path
              d="M3 9h11m-4-4 4 4-4 4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
    </section>
  );
}
