import dynamic from "next/dynamic";
import { HeroVisual } from "@/components/home/hero/HeroVisual";
import { HeroText } from "@/components/home/hero/HeroText";
import { ProofStrip } from "@/components/home/hero/ProofStrip";
import { OurWork } from "@/components/home/OurWork";
import { caseStudyHref } from "@/content/case-studies";
import styles from "./page.module.css";

// Below-the-fold sections dynamically imported for smaller initial JS bundle
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

const homeFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://www.shipthesis.com/#faq",
  mainEntity: [
    {
      "@type": "Question",
      name: "What happens on the free call?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We learn what you're building and whether we're a fit. 20 minutes, no pitch. After the call you get a written scope, timeline and milestones, and leave with a clear next step.",
      },
    },
    {
      "@type": "Question",
      name: "Who writes the code?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You'll talk to the person who builds it. We design and build directly—no outsourced junior contractors, no account managers, and no handoffs.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to build an MVP app?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In weeks, not months. Every project is scoped first, and you test a working build on your phone every week.",
      },
    },
    {
      "@type": "Question",
      name: "How does payment work, and will the price creep?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Every build has an agreed fixed scope and a 30% / 40% / 30% milestone schedule paid as working software is verified. We never bill open-ended hourly rates, so there are no surprise charges on agreed scope. If you choose to add new features mid-build, we scope and quote them separately beforehand.",
      },
    },
    {
      "@type": "Question",
      name: "Do I see progress during the build, or just the finished app?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A new working build on your phone every week, tested before it reaches you.",
      },
    },
    {
      "@type": "Question",
      name: "Will I own the code and be able to hire someone else later?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The code lives in your GitHub organization, and the store and cloud accounts are in your name from day one.",
      },
    },
    {
      "@type": "Question",
      name: "Can you add AI features to my app?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, to any app or SaaS product, wherever they genuinely help: summaries, chat, automation and similar.",
      },
    },
    {
      "@type": "Question",
      name: "What happens after launch when something breaks?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Every build includes 30 days of free fixes for in-scope bugs and store launch support, with optional ongoing care plans available afterwards.",
      },
    },
  ],
};

export default function Home() {
  const hrefs = Object.fromEntries(SLUGS.map((s) => [s, caseStudyHref(s)]));
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeFaqJsonLd) }}
      />
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
