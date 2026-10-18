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
        <Link href="/#work" className={styles.seeWorkLink}>
          See our work &#x2192;
        </Link>
      </div>
      <p className={styles.underButton}>
        20 minutes. No pitch. You leave with a clear next step.
      </p>
      {/* TODO(owner): confirm both user counts are real and defined. */}
      <p className={styles.proofLine}>
        Two live products with 100+ users each, and a client platform running paid live classes.
      </p>
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
