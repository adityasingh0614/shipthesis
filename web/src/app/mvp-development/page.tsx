import type { Metadata } from "next";
import { ServicePageLayout } from "@/components/services/ServicePageLayout";

export const metadata: Metadata = {
  title: "MVP Development for Startups | Fixed Scope, Built in Weeks",
  description:
    "We build your MVP in weeks for a fixed price. Upfront planning, weekly working builds, milestone payments, and code in your GitHub from day one.",
  alternates: {
    canonical: "/mvp-development",
  },
  openGraph: {
    title: "MVP Development for Startups | Fixed Scope, Built in Weeks · Ship Thesis",
    description:
      "We build your MVP in weeks for a fixed price. Upfront planning, weekly working builds, milestone payments, and code in your GitHub from day one.",
    url: "https://www.shipthesis.com/mvp-development",
    siteName: "Ship Thesis",
    type: "website",
    images: [
      {
        url: "https://www.shipthesis.com/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Ship Thesis - MVP Development for Startups",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MVP Development for Startups | Fixed Scope, Built in Weeks · Ship Thesis",
    description:
      "We build your MVP in weeks for a fixed price. Upfront planning, weekly working builds, milestone payments, and code in your GitHub from day one.",
    images: ["https://www.shipthesis.com/opengraph-image.png"],
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
        "Fixed-scope MVP delivery for startup founders in weeks with upfront planning, weekly working builds, milestone billing, and complete code ownership.",
      areaServed: "Worldwide",
    },
  ],
};

export default function MvpDevelopmentPage() {
  return (
    <ServicePageLayout
      breadcrumbTitle="MVP Development"
      badgeText="Status: 1 Sprint Slot Open"
      title="Production MVPs for founders, shipped in weeks"
      lede="Turn your product idea into software real customers can use. Test a working build every Friday, pay by milestone, and own the code from day one."
      ctaPrefix="mvp"
      faqLede="Direct, honest answers on scope, weekly builds, intellectual property, and warranties."
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
            title: "Founders testing a real idea",
            desc: "You've talked to customers, have pre-orders or a pilot lined up, and need working software in front of them soon, without spending months of runway.",
          },
          {
            title: "Founders burned by slow agencies",
            desc: "You want to talk to the person writing your code, agree the scope in writing, and see a working build every Friday instead of status reports.",
          },
          {
            title: "Startups heading into a demo or pilot",
            desc: "You need real logins, payments and a secure database, so the product holds up in an investor demo or a customer's technical review.",
          },
        ],
        notFor: [
          {
            title: "Hourly or open-ended work",
            desc: "We work on a fixed scope and a fixed price, agreed in writing before we start.",
          },
          {
            title: "Everything in version one",
            desc: "We'll help you cut features until the first version can launch in weeks, not quarters.",
          },
          {
            title: "Equity-only or no-budget deals",
            desc: "Our projects are paid by milestone, and you own 100% of the code.",
          },
          {
            title: "Projects with no one to make weekly decisions",
            desc: "A weekly build only works if someone can review it and decide quickly.",
          },
          {
            title: "The lowest hourly rate",
            desc: "You'll find cheaper hourly developers. We offer a fixed price, a build every week, and code you own.",
          },
        ],
      }}
      caseStudy={{
        client: "Aptellic",
        title: "Assess Yourself: A Mobile MVP for Aptellic",
        lede: "An exam-prep app. Students need practice tests to keep working with a weak signal or a dead battery, so the app saves progress on the phone and restores a timed test exactly where it stopped. Delivered in 3 to 4 weeks.",
        timeline: "3–4 Weeks",
        stack: ["Flutter", "Node.js", "Firebase", "Offline SQLite"],
        metrics: [
          { num: "3 to 4 wks", label: "Idea to Delivery" },
          { num: "iOS & Android", label: "One Codebase" },
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
          "System architecture, database schema design, and interactive prototype",
          "Production mobile build with crash-proof offline SQLite database layer",
          "Dual submission setup for Apple App Store and Google Play Store",
        ],
        caseStudyHref: "/work/assess-yourself",
      }}
      deliverables={[
        {
          tag: "SCOPE DISCIPLINE",
          title: "A fixed price in writing",
          desc: "Payments in three milestones: 30% at kickoff, 40% when the halfway build works, 30% at final release. No hourly billing.",
        },
        {
          tag: "WEEKLY BUILDS",
          title: "A working build every Friday",
          desc: "Test real software on your phone or in your browser every Friday, not static slides.",
        },
        {
          tag: "FULL OWNERSHIP",
          title: "Your code from day one",
          desc: "A private repository in your company's GitHub. All the intellectual property belongs unconditionally to you.",
        },
        {
          tag: "PRODUCTION READY",
          title: "Ready for real customers",
          desc: "Secure logins, payments, a protected database and automatic backups, set up for launch.",
        },
      ]}
      faqs={[
        {
          q: "What's included in the MVP build?",
          a: "Everything needed to put a first version in front of customers: upfront planning, technical architecture, approved screens, the app or web product (Flutter or Next.js), a backend with logins, payment setup, and store submission or deployment.",
        },
        {
          q: "How long does it take?",
          a: "In weeks, not months. Every project is scoped first, and you test a working build on your phone or web every week.",
        },
        {
          q: "How does the fixed-price milestone model work?",
          a: "We agree a written scope before any work starts. You pay in three milestones, 30% at kickoff, 40% when the halfway build works, and 30% at final release, and you only release each payment after testing working software.",
        },
        {
          q: "What if my scope changes?",
          a: "Small adjustments within a milestone are fine. If a change adds work, we tell you what it does to the time and price in writing before we do it, and you decide.",
        },
        {
          q: "Do I own all the code and IP?",
          a: "Yes, 100%. We build in your company's GitHub from day one, and our contract assigns all intellectual property to you.",
        },
        {
          q: "Do you sign an NDA?",
          a: "Yes. We can sign yours before you share your idea in detail, or send ours.",
        },
        {
          q: "How do I pay you?",
          a: "In US dollars, by invoice, in milestones tied to working builds.",
        },
        {
          q: "Can you build from my designer's Figma?",
          a: "Yes. We build to your design and flag anything that won't work on mobile or web before we start.",
        },
        {
          q: "Where are you based, and how do we communicate?",
          a: "We work remotely from India. Calls are scheduled in your time zone, with a private Slack Connect channel and a weekly video demo.",
        },
        {
          q: "What happens after launch?",
          a: "Every MVP includes a 30-day warranty for bugs and unexpected problems, at no cost. After that you can keep us on a maintenance plan for new features, or hand the documented codebase to your own team.",
        },
      ]}
      ctaTitle="Ready to get your MVP built?"
      ctaLede="Book a free 20-minute call. Tell us what you want to build, and we'll tell you honestly what fits a first version. After the call you get a written scope, planning breakdown, and milestones."
      jsonLd={jsonLd}
    />
  );
}
