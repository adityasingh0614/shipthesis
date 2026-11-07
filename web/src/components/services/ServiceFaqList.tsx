"use client";

import { useState } from "react";
import type { ServiceFaq } from "./ServicePageLayout";
import styles from "./ServicePage.module.css";

const INITIAL_VISIBLE = 5;

export function ServiceFaqList({ faqs }: { faqs: ServiceFaq[] }) {
  const [showAll, setShowAll] = useState(false);

  return (
    <>
      <ul className={styles.faqList}>
        {faqs.map((faq, idx) => {
          const isHidden = !showAll && idx >= INITIAL_VISIBLE;
          return (
            <li
              key={faq.q}
              className={isHidden ? styles.faqHiddenItem : undefined}
            >
              <details className={styles.faqItem} open={idx === 0}>
                <summary className={styles.faqSummary}>
                  <span className={styles.faqQuestionText}>{faq.q}</span>
                  <svg
                    className={styles.faqChevron}
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
                <div className={styles.faqAnswer}>
                  <p>{faq.a}</p>
                </div>
              </details>
            </li>
          );
        })}
      </ul>

      {!showAll && faqs.length > INITIAL_VISIBLE && (
        <button
          type="button"
          className={styles.faqMore}
          onClick={() => setShowAll(true)}
          aria-expanded={showAll}
        >
          Show {faqs.length - INITIAL_VISIBLE} more questions
        </button>
      )}
    </>
  );
}

