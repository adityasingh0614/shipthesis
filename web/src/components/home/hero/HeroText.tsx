import Link from "next/link";
import styles from "./HeroText.module.css";

export function HeroText() {
  return (
    <>
      <h1 id="hero-title" className={styles.title}>
        <span className={styles.titleMuted}>From first idea</span>{" "}
        <span className={styles.titleLine}>to a live product.</span>
      </h1>
      <p className={styles.sub}>
        Mobile apps and SaaS with intelligent AI features built in. A new
        working build on your phone every week, from kickoff to app stores.
      </p>
      <div className={styles.actions}>
        <a
          href="https://cal.com/shipthesis/discovery"
          data-cal-link="shipthesis/discovery"
          data-cal-config='{"layout":"month_view"}'
          className="btn"
        >
          Book a free 20-minute call
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
        </a>
        <Link href="/#work" className={`btn ${styles.secondary}`}>
          See our work
        </Link>
      </div>
      <p className={styles.trustLine}>
        <span>✓ 100% code you own</span>
        <span className={styles.trustDot}>•</span>
        <span>✓ Weekly working builds</span>
        <span className={styles.trustDot}>•</span>
        <span>✓ Fixed-scope milestones</span>
      </p>
    </>
  );
}
