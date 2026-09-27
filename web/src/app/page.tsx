import Link from "next/link";
import { HowItWorks } from "@/components/home/HowItWorks";
import { OurWork } from "@/components/home/OurWork";
import { WhatWeBuild } from "@/components/home/WhatWeBuild";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <section className={styles.hero} aria-labelledby="hero-title">
        <h1 id="hero-title" className={styles.title}>
          <span className={styles.titleMuted}>From first idea</span>{" "}
          <span className={styles.titleLine}>to a live product.</span>
        </h1>
        <p className={styles.sub}>
          AI-powered mobile apps and SaaS for founders: a new build on your
          phone every week, and code you own.
        </p>
        <div className={styles.actions}>
          <Link href="/contact" className="btn">
            Book a Discovery Call
          </Link>
          <Link href="/work" className={styles.link}>
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

        {/* Hero animation slot: undecided, built last (home-brief §1). */}
        <div className={styles.stage} aria-hidden="true">
          <span>Hero animation</span>
        </div>
      </section>
      <OurWork />
      <HowItWorks />
      <WhatWeBuild />
    </>
  );
}
