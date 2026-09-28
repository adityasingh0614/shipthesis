// Case study content shared by every page: the hero and SEO. Facts:
// .agents/product-marketing.md, then docs/case-studies/*-raw.md
// ([EVIDENCE]/[FOUNDER] only). Everything below the hero is bespoke per
// project (each page has its own world), so it lives with that page's
// components in components/work/<slug>/.

export type Shot = { src: string; width: number; height: number; alt: string };
/** A dashed, labelled frame standing in for a screen that isn't captured yet. */
export type HeroPlaceholder = { placeholder: string };

export type CaseStudy = {
  slug: string;
  /** Rendered on one line: [accent part, ink part], space-joined. */
  title: [string, string];
  /** The two title parts run together with no space (Post + steady). */
  joined?: boolean;
  /** Project accent: art direction only, never buttons. */
  accent: string;
  /** Small mono line above the title. */
  kicker: string;
  line: string;
  /** The hero's facts card, labelled in the project's own world. Industry
      and Service are global (2026-09-28): every case study has both. */
  card: {
    label: string;
    fields: [string, string][];
    /** Optional strip along the card's foot (EHS: the pass's tear-off). */
    foot?: [string, string];
  };
  /** The status, dressed in the project's world: a rotated stamp (Assess
      Yourself) or a pulsing on-air badge in the card head (EHS). */
  stamp: { status: string; note?: string; variant?: "stamp" | "live" | "dateline" };
  liveHref?: string;
  /** A single pre-composed hero shot (the product's own promo render). */
  hero: Shot | HeroPlaceholder;
  /** Placeholder frames stand in for screens, so the page is hidden on
      production until real ones replace them (case-study-brief §0). */
  hiddenOnProduction?: boolean;
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
  {
    slug: "safety-training-platform",
    title: ["EHS Training", "Platform"],
    accent: "#00674C",
    kicker: "Case study · Web platform",
    line: "A custom training platform for EHS Guru, a safety-training company that teaches live classes on Zoom.",
    card: {
      label: "Session pass · Case study 02",
      fields: [
        ["Client", "EHS Guru"],
        ["Platform", "Web app, any browser"],
        ["Industry", "Corporate safety training"],
        ["Service", "Web platform design and development"],
        ["Stack", "Next.js · Supabase · Zoom"],
        ["Timeline", "About 2 months to live"],
      ],
      foot: ["Access: admin · trainer · learner · guest", "On our maintenance plan"],
    },
    stamp: { status: "Live since May 2026", variant: "live" },
    hero: {
      src: "/work/safety-training-platform/hero.webp",
      width: 699,
      height: 265,
      alt: "EHS Training Platform: an admin cohort page, the trainer dashboard and the class calendar",
    },
    seo: {
      title: "EHS Training Platform: live Zoom classes on their own platform | Ship Thesis case study",
      description:
        "How we built EHS Guru's custom training platform in about 2 months: one-click Zoom classes, automatic attendance, every class recorded, and free webinars that bring in new learners.",
    },
  },
  {
    slug: "poststeady",
    title: ["Post", "steady"],
    joined: true,
    accent: "#1A5BFA",
    kicker: "Case study · Own product",
    line: "A web app that turns the analytics files social media freelancers already download into a branded monthly report for their clients.",
    card: {
      label: "Proof · Case study 03",
      fields: [
        ["Type", "Our own product"],
        ["Platform", "Web app"],
        ["Industry", "Social media marketing"],
        ["Service", "Product design, build and launch"],
        ["Stack", "Next.js · Supabase · Gemini"],
        ["Timeline", "11 weeks"],
      ],
    },
    stamp: { status: "Live · poststeady.com", variant: "dateline" },
    liveHref: "https://www.poststeady.com",
    hero: {
      placeholder:
        "Finished report, page 1, fanned over the upload screen (made-up client, once captured)",
    },
    hiddenOnProduction: true,
    seo: {
      title: "Poststeady: client reports from the files freelancers already export | Ship Thesis case study",
      description:
        "How we built Poststeady, our own product, in 11 weeks: 175 column names matched to the right metric, an AI summary that quotes only real figures, and a branded PDF or share link.",
    },
  },
];

export function getCaseStudy(slug: string) {
  return CASE_STUDIES.find((c) => c.slug === slug);
}

/** Pages with placeholder frames don't exist on production. */
export function isVisible(study: CaseStudy) {
  return !(study.hiddenOnProduction && process.env.VERCEL_ENV === "production");
}

/** For links between case studies: undefined while a page is hidden. */
export function getVisibleCaseStudy(slug: string) {
  const study = getCaseStudy(slug);
  return study && isVisible(study) ? study : undefined;
}
