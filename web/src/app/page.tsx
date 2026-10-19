import dynamic from "next/dynamic";
import { HeroVisual } from "@/components/home/hero/HeroVisual";
import { HeroText } from "@/components/home/hero/HeroText";
import { ProofStrip } from "@/components/home/hero/ProofStrip";
import { caseStudyHref } from "@/content/case-studies";
import styles from "./page.module.css";

// Below-the-fold sections dynamically imported for full lazy loading and smaller initial JS bundle
const OurWork = dynamic(() =>
  import("@/components/home/OurWork").then((mod) => mod.OurWork)
);
const HowItWorks = dynamic(() =>
  import("@/components/home/HowItWorks").then((mod) => mod.HowItWorks)
);
const WhatWeBuild = dynamic(() =>
  import("@/components/home/WhatWeBuild").then((mod) => mod.WhatWeBuild)
);
const Testimonials = dynamic(() =>
  import("@/components/home/Testimonials").then((mod) => mod.Testimonials)
);
const FromTheBlog = dynamic(() =>
  import("@/components/home/FromTheBlog").then((mod) => mod.FromTheBlog)
);
const Faq = dynamic(() =>
  import("@/components/home/Faq").then((mod) => mod.Faq)
);
const Contact = dynamic(() =>
  import("@/components/home/Contact").then((mod) => mod.Contact)
);

// Cards link to a case study only where its page exists (a page with
// placeholder screens is hidden on production).
const SLUGS = [
  "safety-training-platform",
  "poststeady",
  "chromalayer",
  "assess-yourself",
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
      {/* Placeholders: hidden on the live site until real, approved quotes exist. */}
      {process.env.VERCEL_ENV !== "production" && <Testimonials />}
      {/* Placeholders: hidden on the live site until 3 real posts exist. */}
      {process.env.VERCEL_ENV !== "production" && <FromTheBlog />}
      <Faq />
      <Contact />
    </>
  );
}
