"use client";

import { useState } from "react";
import {
  ListChecks,
  ArrowsClockwise,
  Clock,
  CurrencyDollar,
  GithubLogo,
  Sparkle,
  Lifebuoy,
  PhoneCall,
  UserCheck,
} from "@phosphor-icons/react/dist/ssr";
import { BookingCta } from "@/components/BookingCta";
import styles from "./Faq.module.css";

const ITEMS = [
  {
    icon: ListChecks,
    q: "How do I know you'll actually finish?",
    a: "You own the code and the store and cloud accounts from day one, so you're never locked in. You see a working build every week, and payments follow working builds.",
  },
  {
    icon: CurrencyDollar,
    q: "How much does it cost?",
    a: "Every project is scoped first, then quoted as a fixed price in writing after a free 20-minute call. No hourly billing.",
  },
  {
    icon: PhoneCall,
    q: "What happens on the free call?",
    a: "We learn what you're building and whether we're a fit. 20 minutes, no pitch. After the call you get a written scope, timeline and milestones, and leave with a clear next step.",
  },
  {
    icon: UserCheck,
    q: "Who writes the code?",
    a: "You'll talk to the person who builds it. We design and build directly—no outsourced junior contractors, no account managers, and no handoffs.",
  },
  {
    icon: Clock,
    q: "How long does it take to build an MVP app?",
    a: "MVPs typically take 6-10 weeks; a tightly scoped build (Assess Yourself) shipped in 3-4. In all cases, you test a working build on your phone every week.",
  },
  {
    icon: CurrencyDollar,
    q: "How does payment work, and will the price creep?",
    a: "Every build has an agreed fixed scope and a 30% / 40% / 30% milestone schedule paid as working software is verified. We never bill open-ended hourly rates, so there are no surprise charges on agreed scope. If you choose to add new features mid-build, we scope and quote them separately beforehand.",
  },
  {
    icon: ArrowsClockwise,
    q: "Do I see progress during the build, or just the finished app?",
    a: "A new working build on your phone every week, tested before it reaches you.",
  },
  {
    icon: GithubLogo,
    q: "Will I own the code and be able to hire someone else later?",
    a: "Yes. The code lives in your GitHub organization, and the store and cloud accounts are in your name from day one.",
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

        <div className={styles.endCta}>
          <BookingCta
            location="faq"
            variant="text"
            prefix="Still have questions? "
          />
        </div>
      </div>
    </section>
  );
}
