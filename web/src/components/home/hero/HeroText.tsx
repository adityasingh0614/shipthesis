import Link from "next/link";
import { BookingCta } from "@/components/BookingCta";
import styles from "./HeroText.module.css";

export function HeroText() {
  return (
    <>
      <h1 id="hero-title" className={styles.title}>
        <span className={styles.titleMuted}>From first idea</span>{" "}
        <span className={styles.titleLine}>to a live product.</span>
      </h1>
      <p className={styles.sub}>
        Mobile apps and SaaS for early-stage founders. A working build on your
        phone every week, and code you own.
      </p>

      <div className={styles.actions}>
        <BookingCta location="hero" variant="button" />
        <Link href="/#work" className={`btn ${styles.secondary}`}>
          See our work
          <svg
            className={styles.secondaryArrow}
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M3 8h10m-4-4 4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>

      <p className={styles.underButton}>
        20 minutes. No pitch. You leave with a clear next step.
      </p>

      <div className={styles.trustCapsule} role="list" aria-label="Key guarantees">
        <div className={styles.trustItem} role="listitem">
          <span className={styles.checkBadge} aria-hidden="true">
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
              <path
                d="m3.5 8.5 3 3 6-6"
                stroke="var(--green)"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span className={styles.trustLabel}>100% code you own</span>
        </div>

        <span className={styles.trustDivider} aria-hidden="true" />

        <div className={styles.trustItem} role="listitem">
          <span className={styles.checkBadge} aria-hidden="true">
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
              <path
                d="m3.5 8.5 3 3 6-6"
                stroke="var(--green)"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span className={styles.trustLabel}>Weekly working builds</span>
        </div>

        <span className={styles.trustDivider} aria-hidden="true" />

        <div className={styles.trustItem} role="listitem">
          <span className={styles.checkBadge} aria-hidden="true">
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
              <path
                d="m3.5 8.5 3 3 6-6"
                stroke="var(--green)"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span className={styles.trustLabel}>Fixed-scope milestones</span>
        </div>
      </div>

      {/* TODO(owner): confirm both user counts are real and defined. */}
      <div className={styles.proofBadge}>
        <span className={styles.pulseDot} aria-hidden="true" />
        <span>
          Two live products with 100+ users each, and a client platform running paid live classes.
        </span>
      </div>
    </>
  );
}
