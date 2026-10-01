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
        AI-powered mobile apps and SaaS for founders: a new build on your
        phone every week, and code you own.
      </p>
      <div className={styles.actions}>
        <Link href="/#contact" className="btn">
          Book a Discovery Call
        </Link>
        <Link href="/#work" className={`btn ${styles.secondary}`}>
          See our work
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
    </>
  );
}
