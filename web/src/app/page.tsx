import Link from "next/link";
import { HeroVisual } from "@/components/home/hero/HeroVisual";
import { ProofStrip } from "@/components/home/hero/ProofStrip";
import { HowItWorks } from "@/components/home/HowItWorks";
import { OurWork } from "@/components/home/OurWork";
import { Pricing } from "@/components/home/Pricing";
import { Contact } from "@/components/home/Contact";
import { Faq } from "@/components/home/Faq";
import { FromTheBlog } from "@/components/home/FromTheBlog";
import { Testimonials } from "@/components/home/Testimonials";
import { WhatWeBuild } from "@/components/home/WhatWeBuild";
import { caseStudyHref } from "@/content/case-studies";
import styles from "./page.module.css";

// Cards link to a case study only where its page exists (a page with
// placeholder screens is hidden on production).
const SLUGS = [
  "assess-yourself",
  "safety-training-platform",
  "poststeady",
  "chromalayer",
];

export default function Home() {
  const hrefs = Object.fromEntries(SLUGS.map((s) => [s, caseStudyHref(s)]));
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
          <Link href="/#contact" className={`btn ${styles.primary}`}>
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

        <HeroVisual />
        <ProofStrip />
      </section>
      <OurWork hrefs={hrefs} />
      <HowItWorks />
      <WhatWeBuild />
      <Pricing />
      {/* Placeholders: hidden on the live site until real, approved quotes exist. */}
      {process.env.VERCEL_ENV !== "production" && <Testimonials />}
      {/* Placeholders: hidden on the live site until 3 real posts exist. */}
      {process.env.VERCEL_ENV !== "production" && <FromTheBlog />}
      <Faq />
      <Contact />
    </>
  );
}
