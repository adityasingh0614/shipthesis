import type { Metadata } from "next";
import { ServicePageLayout } from "@/components/services/ServicePageLayout";

export const metadata: Metadata = {
  title: "MVP Development for Startups · Fixed 4–6 Week Scope",
  description:
    "Ship a production-ready mobile or SaaS MVP in 4 to 6 weeks. Weekly working builds on your phone or web, fixed-price milestones, and 100% code ownership.",
  alternates: {
    canonical: "/mvp-development",
  },
  openGraph: {
    title: "MVP Development for Startups · Fixed 4–6 Week Scope",
    description:
      "Ship a production-ready mobile or SaaS MVP in 4 to 6 weeks. Weekly working builds on your phone or web, fixed-price milestones, and 100% code ownership.",
    url: "https://www.shipthesis.com/mvp-development",
  },
  twitter: {
    card: "summary_large_image",
    title: "MVP Development for Startups · Fixed 4–6 Week Scope",
    description:
      "Ship a production-ready mobile or SaaS MVP in 4 to 6 weeks. Weekly working builds on your phone or web, fixed-price milestones, and 100% code ownership.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://www.shipthesis.com/mvp-development/#service",
      name: "MVP Development for Startups",
      provider: {
        "@type": "Organization",
        name: "Ship Thesis",
        url: "https://www.shipthesis.com",
      },
      serviceType: "Software Engineering & MVP Development",
      description:
        "Fixed-scope MVP delivery for startup founders in 4 to 6 weeks with weekly working builds, milestone billing, and complete code ownership.",
      areaServed: "Worldwide",
    },
  ],
};

export default function MvpDevelopmentPage() {
  return (
    <ServicePageLayout
      breadcrumbTitle="MVP Development"
      badgeText="Status: 1 Sprint Slot Open"
      title="Production MVPs for founders, shipped in 4 to 6 weeks"
      lede="Turn your product idea into real, usable software. Weekly working builds on your phone or web, fixed-price milestone billing, and code you own from day one."
      heroImage={{
        src: "/work/assess-yourself/hero.webp",
        alt: "AssessYourself production MVP preview",
        width: 1400,
        height: 1496,
        deviceType: "phone",
      }}
      who={{
        for: [
          {
            title: "Early-stage founders validating real market demand",
            desc: "You have customer interviews, pre-orders, or domain insights, and you need a working software build in market fast without burning months of runway.",
          },
          {
            title: "Founders burned by slow agencies or junior dev shops",
            desc: "You want to talk directly to the senior engineer writing your code, with a strict milestone scope and a physical working build delivered every Friday.",
          },
          {
            title: "Startups preparing for investor demos or commercial pilots",
            desc: "You need rock-solid production infrastructure (authentication, billing, database security) that looks expensive and passes technical due diligence.",
          },
        ],
        notFor: [
          {
            title: "Indefinite open-ended hourly consulting",
            desc: "We work strictly on fixed-scope, fixed-price milestone sprints where deliverables and acceptance criteria are locked upfront.",
          },
          {
            title: "Unvalidated feature-stuffed multi-year scopes",
            desc: "We help founders ruthlessly cut non-essential features so you ship a lean, high-leverage product in weeks rather than quarters.",
          },
          {
            title: "Non-technical founders looking for equity-only co-founders",
            desc: "We operate as an elite engineering partner with transparent milestone payment schedules and 100% intellectual property assignment to your company.",
          },
        ],
      }}
      caseStudy={{
        client: "Aptellic",
        title: "AssessYourself: Production Mobile MVP Delivered in 3-4 Weeks",
        lede: "An offline-first mobile testing app for competitive exams, engineered from scratch and approved on both iOS and Android stores within 4 weeks.",
        timeline: "3–4 Weeks",
        stack: ["Flutter", "Node.js", "Firebase", "Offline SQLite"],
        metrics: [
          { num: "3-4 Wks", label: "Idea to Store" },
          { num: "10,000+", label: "Verified Users" },
          { num: "100%", label: "Code Owned by Client" },
        ],
        screenshots: [
          {
            src: "/work/assess-yourself/exam-categories.webp",
            alt: "Exam categories and discovery interface",
            caption: "Curated exam discovery and syllabus indexing",
            width: 1000,
            height: 2068,
          },
          {
            src: "/work/assess-yourself/exam-list.webp",
            alt: "Full paper examination catalogue",
            caption: "Full exam catalogue and offline question papers",
            width: 1000,
            height: 2064,
          },
          {
            src: "/work/assess-yourself/analytics.webp",
            alt: "Student performance analytics and score breakdown",
            caption: "Instant student analytics & performance breakdown",
            width: 964,
            height: 1990,
          },
        ],
        whatShipped: [
          "1-week discovery architecture, schema design, and interactive prototype",
          "Production mobile build with crash-proof offline SQLite database layer",
          "Dual submission to Apple App Store and Google Play Store with full approval",
        ],
        caseStudyHref: "/work/assess-yourself",
      }}
      deliverables={[
        {
          tag: "SCOPE DISCIPLINE",
          title: "Fixed-price milestone contracts",
          desc: "Clear upfront statement of work with milestone billing (30% kickoff / 40% halfway working build / 30% final release). Zero hourly billing surprises.",
        },
        {
          tag: "WEEKLY BUILDS",
          title: "Working builds on your device every Friday",
          desc: "Every Friday, you test real running software via TestFlight, Android APK, or staging URL. You judge progress by using the software, not reading slide decks.",
        },
        {
          tag: "FULL OWNERSHIP",
          title: "100% Code in your GitHub from Day 1",
          desc: "Private repository created in your GitHub organization. All intellectual property, assets, and database migrations belong unconditionally to your company.",
        },
        {
          tag: "PRODUCTION READY",
          title: "Hardened auth, payments & cloud deployment",
          desc: "Production-grade authentication, database Row-Level Security, automated backups, and billing engine pre-configured for immediate commercial launch.",
        },
      ]}
      faqs={[
        {
          q: "What is included in the 4 to 6 week MVP build?",
          a: "Everything needed to launch and collect revenue: product architecture, responsive UI design, frontend application (Flutter or Next.js), backend database with authentication, payment integration (Stripe/Razorpay), and store submission or production deployment.",
        },
        {
          q: "How does the fixed-price milestone model work?",
          a: "We agree on a strict written scope before any work begins. Payments are split across verified delivery milestones (typically 30% kickoff, 40% midway working build, 30% launch). You only release milestone payments after testing real working software.",
        },
        {
          q: "Do I own all the intellectual property and code?",
          a: "Yes, 100%. We create the private repository directly in your company GitHub organization from day one. Our contract includes explicit work-for-hire and statutory IP assignment clauses. Zero proprietary studio lock-in.",
        },
        {
          q: "What happens after the MVP is launched?",
          a: "Every MVP includes a 30-day post-launch warranty covering any bugs or unexpected edge cases at zero cost. After launch, you can keep us on a flexible maintenance retainer for ongoing sprints, or hand the clean, documented codebase over to your in-house team.",
        },
      ]}
      ctaTitle="Ready to ship your MVP?"
      ctaLede="Book a free 20-minute call to discuss your product idea, target timeline, and scope boundaries."
      jsonLd={jsonLd}
    />
  );
}

