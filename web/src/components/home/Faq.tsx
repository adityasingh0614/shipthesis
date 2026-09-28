"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ListChecks,
  ArrowsClockwise,
  Clock,
  Compass,
  CurrencyDollar,
  GithubLogo,
  Rocket,
  Sparkle,
  Lifebuoy,
} from "@phosphor-icons/react/dist/ssr";
import styles from "./Faq.module.css";

// Facts: .agents/product-marketing.md (Objections, Pricing, AI capability).
// Answers are the brief's own wording, lightly tightened for the page voice.
const ITEMS = [
  {
    icon: ListChecks,
    q: "How do I know you'll actually finish?",
    a: "Fixed milestones, and a working build on your phone every week.",
  },
  {
    icon: ArrowsClockwise,
    q: "Do I see progress during the build, or just the finished app?",
    a: "A new working build on your phone every week, tested before it reaches you.",
  },
  {
    icon: Clock,
    q: "How long does it take to build an MVP app?",
    a: "Typically 6-10 weeks, delivered as a fixed quote after the Discovery Sprint.",
  },
  {
    icon: Compass,
    q: "What happens during the Discovery Sprint?",
    a: "One week, $750: a written scope, a feature list split into version one and later, wireframes, a stack plan, and a fixed quote with milestones. Credited toward your build if you continue.",
  },
  {
    icon: CurrencyDollar,
    q: "What will it really cost, and will the price creep?",
    a: "A fixed quote after a one-week, $750 Discovery Sprint, credited toward your build if you continue. MVP builds start from $6,000.",
  },
  {
    icon: GithubLogo,
    q: "Will I own the code and be able to hire someone else later?",
    a: "Yes. The code lives in your GitHub, and the store and cloud accounts are in your name from day one.",
  },
  {
    icon: Rocket,
    q: "Can a small studio handle this?",
    a: "We ship our own products, Poststeady and ChromaLayer, both live, and run EHS Guru's live training platform. Judge us by live work, not headcount.",
  },
  {
    icon: Sparkle,
    q: "Can you add AI features to my app?",
    a: "Yes, to any app or SaaS product, wherever they genuinely help: summaries, chat, automation and similar.",
  },
  {
    icon: Lifebuoy,
    q: "What happens after launch when something breaks?",
    a: "30 days of free fixes for in-scope bugs, then support plans from $300/month.",
  },
];

const VISIBLE = 5; // top 5 shown by default; the rest are behind "Show more"

export function Faq() {
  const [showAll, setShowAll] = useState(false);
  const items = showAll ? ITEMS : ITEMS.slice(0, VISIBLE);

  return (
    <section className={styles.section} aria-labelledby="faq-title">
      <div className={styles.inner}>
        <div className={styles.head}>
          <h2 id="faq-title" className={styles.title}>
            Questions founders ask
          </h2>
          <p className={styles.lede}>
            The things people usually want to know before they book a call.
            Can&apos;t find yours? <Link href="#contact">Talk to us</Link>.
          </p>
        </div>

        <div className={styles.list}>
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <details key={item.q} className={styles.item} open={i === 0}>
                <summary className={styles.question}>
                  <span className={styles.icon} aria-hidden="true">
                    <Icon size={20} weight="regular" />
                  </span>
                  <span className={styles.questionText}>{item.q}</span>
                  <svg
                    className={styles.chevron}
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    aria-hidden="true"
                  >
                    <path
                      d="M4.5 7 9 11.5 13.5 7"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </summary>
                <p className={styles.answer}>{item.a}</p>
              </details>
            );
          })}
        </div>

        {!showAll && ITEMS.length > VISIBLE && (
          <button
            type="button"
            className={styles.more}
            onClick={() => setShowAll(true)}
          >
            Show {ITEMS.length - VISIBLE} more questions
          </button>
        )}
      </div>
    </section>
  );
}
