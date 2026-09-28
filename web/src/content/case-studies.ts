// Case study content shared by every page: the hero and SEO. Facts:
// .agents/product-marketing.md, then docs/case-studies/*-raw.md
// ([EVIDENCE]/[FOUNDER] only). Everything below the hero is bespoke per
// project (each page has its own world), so it lives with that page's
// components in components/work/<slug>/.

export type Shot = { src: string; width: number; height: number; alt: string };

export type CaseStudy = {
  slug: string;
  /** Rendered on one line: [accent part, ink part], space-joined. */
  title: [string, string];
  /** Project accent: art direction only, never buttons. */
  accent: string;
  /** Small mono line above the title. */
  kicker: string;
  line: string;
  /** The hero's facts card, labelled in the project's own world. Industry
      and Service are global (2026-09-28): every case study has both. */
  card: { label: string; fields: [string, string][] };
  /** Stamped on the card: status, plus a short note. */
  stamp: { status: string; note?: string };
  liveHref?: string;
  /** A single pre-composed hero shot (the product's own promo render). */
  hero: Shot;
  seo: { title: string; description: string };
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "assess-yourself",
    title: ["Assess", "Yourself"],
    accent: "#283593",
    kicker: "Case study · Mobile app",
    line: "An exam-prep app that takes students from finding the right government exam to sitting a timed paper.",
    card: {
      label: "Admit card · Case study 01",
      fields: [
        ["Client", "Aptellic"],
        ["Platform", "Mobile app, Flutter"],
        ["Industry", "Education, exam preparation"],
        ["Service", "Mobile app design and development"],
        ["Stack", "Flutter · Node.js · Firebase"],
        ["Timeline", "3-4 weeks"],
      ],
    },
    stamp: { status: "Delivered", note: "Launching soon" },
    hero: {
      src: "/work/assess-yourself/hero.webp",
      width: 1400,
      height: 1496,
      alt: "Assess Yourself: student corner exam list next to the app's splash screen, \"Your Ultimate Exam Preparation Companion\"",
    },
    seo: {
      title: "Assess Yourself: an exam-prep app for government exams | Ship Thesis case study",
      description:
        "How we built Assess Yourself for Aptellic in 3-4 weeks: exam discovery, timed tests that survive interruptions, and question banks imported from Excel.",
    },
  },
];

export function getCaseStudy(slug: string) {
  return CASE_STUDIES.find((c) => c.slug === slug);
}
