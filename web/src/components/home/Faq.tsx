"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ListChecks,
  ArrowsClockwise,
  Clock,
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
    a: "Three built-in safeguards: all code and cloud accounts are in your name from day one (meaning you retain full IP and can walk away at any time), payments are milestone-based (30/40/30) released only as working software lands, and you test an updated build on your physical device every week.",
  },
  {
    icon: ArrowsClockwise,
    q: "Do I see progress during the build, or just the finished app?",
    a: "A new working build on your phone every week, tested before it reaches you.",
  },
  {
    icon: Clock,
    q: "How long does it take to build an MVP app?",
    a: "Typically 6 to 10 weeks for a complete production MVP. Tightly scoped mobile MVPs ship even faster — for instance, our Assess Yourself Flutter app shipped in 3–4 weeks. In all cases, you test working builds every week rather than waiting until the end.",
  },
  {
    icon: CurrencyDollar,
    q: "How does payment work, and will the price creep?",
    a: "Every build has an agreed fixed scope and a 30% / 40% / 30% milestone schedule paid as working software is verified. We never bill open-ended hourly rates, so there are no surprise charges on agreed scope. If you choose to add new features mid-build, we scope and quote them separately beforehand.",
  },
  {
    icon: GithubLogo,
    q: "Will I own the code and be able to hire someone else later?",
    a: "Yes. The code lives in your GitHub organization, and the store and cloud accounts are in your name from day one.",
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
    a: "Every build includes 30 days of free fixes for in-scope bugs and store launch support, with optional ongoing care plans available afterwards.",
  },
];

const VISIBLE = 5; // top 5 shown by default; the rest are behind "Show more"

export function Faq() {
  const [showAll, setShowAll] = useState(false);
  const items = showAll ? ITEMS : ITEMS.slice(0, VISIBLE);

  return (
    <section id="faq" className={styles.section} aria-labelledby="faq-title">
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
