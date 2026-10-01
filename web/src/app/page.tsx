
import { HeroVisual } from "@/components/home/hero/HeroVisual";
import { HeroText } from "@/components/home/hero/HeroText";
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
        <HeroText />
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
