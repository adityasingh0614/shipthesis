import type { Metadata } from "next";
import { ServicePageLayout } from "@/components/services/ServicePageLayout";

export const metadata: Metadata = {
  title: "SaaS MVP Development for Founders",
  description:
    "We build SaaS products with logins, billing and dashboards in weeks. Upfront planning, weekly working builds, and code in your GitHub.",
  alternates: {
    canonical: "/saas-development",
  },
  openGraph: {
    title: "SaaS MVP Development for Founders · Ship Thesis",
    description:
      "We build SaaS products with logins, billing and dashboards in weeks. Upfront planning, weekly working builds, and code in your GitHub.",
    url: "https://www.shipthesis.com/saas-development",
    siteName: "Ship Thesis",
    type: "website",
    images: [
      {
        url: "https://www.shipthesis.com/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Ship Thesis - SaaS MVP Development for Founders",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SaaS MVP Development for Founders · Ship Thesis",
    description:
      "We build SaaS products with logins, billing and dashboards in weeks. Upfront planning, weekly working builds, and code in your GitHub.",
    images: ["https://www.shipthesis.com/opengraph-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://www.shipthesis.com/saas-development/#service",
      name: "SaaS MVP Development",
      provider: {
        "@type": "Organization",
        name: "Ship Thesis",
        url: "https://www.shipthesis.com",
      },
      serviceType: "SaaS Software Engineering",
      description:
        "Full-stack SaaS application development for startup founders. Includes authentication, third-party API integration, multi-tenant databases, background jobs, and responsive dashboards.",
      areaServed: "Worldwide",
    },
  ],
};

export default function SaasDevelopmentPage() {
  return (
    <ServicePageLayout
      breadcrumbTitle="SaaS & Web Platforms"
      title="Custom SaaS for founders, live in weeks"
      lede="Web apps with logins, billing and dashboards, built around how your business actually works. A working build in your browser every week, and code you own."
      ctaPrefix="saas"
      faqLede="Direct, honest answers on tech stack, billing architecture, permissions, and scaling."
      heroImage={{
        src: "/work/safety-training-platform/sessions.webp",
        alt: "EHS Guru LMS custom training dashboard with live sessions and attendance",
        width: 1400,
        height: 824,
        deviceType: "browser",
        browserUrl: "https://app.ehsguru.com/sessions",
      }}
      who={{
        for: [
          {
            title: "Founders building a web product",
            desc: "You need user accounts, roles, workflows, payments and connections to other tools, built properly the first time.",
          },
          {
            title: "Businesses replacing software that doesn't fit",
            desc: "You pay per-seat fees for software that doesn't match how you work. We build only what you use, and you own it, with no per-seat fees.",
          },
          {
            title: "Teams that want a solid base, not a patchwork",
            desc: "A properly built codebase with database migrations and typed schemas, so you aren't forced to rebuild when you grow.",
          },
        ],
        notFor: [
          {
            title: "A simple brochure website",
            desc: "If you only need a basic landing page or blog without logins or dashboards, a website builder is cheaper and faster.",
          },
          {
            title: "Multi-year projects with no early customers",
            desc: "We build focused products meant to reach real paying users in weeks, not committee projects.",
          },
          {
            title: "The lowest hourly rate",
            desc: "You'll find cheaper hourly developers. We offer a fixed scope, a build every week, and code you own.",
          },
        ],
      }}
      caseStudy={{
        client: "EHS Guru",
        title: "EHS Training Platform: Custom Web Platform for EHS Guru",
        lede: "EHS Guru was paying for a bloated off-the-shelf learning system. We built a simple platform with only what they use: one-click Zoom classes, automatic attendance tracking, and recordings in the student dashboard. Built in 4 weeks, live since May 2026, and now on our maintenance plan.",
        timeline: "4 Weeks",
        stack: ["Next.js", "Supabase (PostgreSQL RLS)", "Zoom API", "Tailwind CSS"],
        metrics: [
          { num: "4 Weeks", label: "Idea to Delivery" },
          { num: "Live May '26", label: "In Active Production" },
          { num: "Zero Seat Fees", label: "Owned Infrastructure" },
        ],
        screenshots: [
          {
            src: "/work/safety-training-platform/sessions.webp",
            alt: "Class session attendance logs and rosters",
            caption: "Automated Zoom attendance sync & student verification",
            width: 1400,
            height: 824,
          },
          {
            src: "/work/safety-training-platform/webinars.webp",
            alt: "Webinars and class schedule calendar",
            caption: "Automated webinar calendar and public lead registration",
            width: 1400,
            height: 824,
          },
          {
            src: "/work/safety-training-platform/users.webp",
            alt: "User management and roles",
            caption: "Role-based user management for admins, trainers, and learners",
            width: 1400,
            height: 824,
          },
        ],
        whatShipped: [
          "Automated Zoom meeting generation with attendance webhook synchronization",
          "Role-based permissions for Admins, Trainers, Learners, and Corporate Guests",
          "Cloud class recording ingestion with instant student dashboard playback",
        ],
        caseStudyHref: "/work/safety-training-platform",
      }}
      deliverables={[
        {
          tag: "AUTH & ACCESS",
          title: "Logins and permissions",
          desc: "Sign in with an email link or Google. Roles such as Admin, Member and Viewer decide who sees what.",
        },
        {
          tag: "BILLING & APIS",
          title: "Billing and integrations",
          desc: "Stripe subscriptions and invoices, plus tools like Zoom and email. Failed or changed payments update accounts automatically.",
        },
        {
          tag: "DASHBOARD & DB",
          title: "Dashboards and exports",
          desc: "Clear tables and key numbers that work on a phone, with PDF and CSV downloads. Built on PostgreSQL with Row-Level Security.",
        },
        {
          tag: "FULL OWNERSHIP",
          title: "Your code from day one",
          desc: "A private repository in your company's GitHub, with all the intellectual property assigned to you.",
        },
      ]}
      faqs={[
        {
          q: "What tech stack do you use for SaaS builds?",
          a: "We build SaaS applications primarily with Next.js (React), TypeScript, and PostgreSQL (via Supabase or Neon) with Row-Level Security (RLS) for multi-tenant data isolation. For styling we use CSS modules or Tailwind, and integrate Stripe for recurring subscriptions and automated invoicing.",
        },
        {
          q: "How long does it take?",
          a: "In weeks, not months. We start with upfront planning to lock the database models and workflows, and you test a working build in your browser every week.",
        },
        {
          q: "How does the fixed-price milestone payment model work?",
          a: "We agree on a clear, written scope and architecture specification before any development begins. Payments are split into three milestones: 30% at kickoff, 40% when the halfway build is working in staging, and 30% upon final release. You only release payment after testing working software.",
        },
        {
          q: "How do payments and billing work?",
          a: "We set up Stripe so customers can pick a plan, update their card, download invoices and cancel on their own. When a payment succeeds or a subscription changes, their account permissions update automatically.",
        },
        {
          q: "How do users sign in?",
          a: "With a passwordless email link or Google or GitHub sign-in. Each customer's data is separated at the database level with Row-Level Security, so one customer can never see another's.",
        },
        {
          q: "Do I own 100% of the SaaS code and intellectual property?",
          a: "Yes, unconditionally. All code is committed directly to your company's private GitHub repository from day one. Our contract legally assigns all intellectual property, database schemas, and documentation to you.",
        },
        {
          q: "Do you sign an NDA before we discuss our product?",
          a: "Yes. We regularly sign mutual NDAs before reviewing proprietary workflows, customer data, or product specifications. We can sign your company NDA or provide our standard mutual agreement.",
        },
        {
          q: "Can it handle many customers?",
          a: "Yes. We build on managed services that handle thousands of users, size the setup for your launch, and tell you honestly when it needs more.",
        },
        {
          q: "Where are you based, and how do we communicate?",
          a: "We work remotely from India. Calls are scheduled in your time zone, with a dedicated Slack Connect channel, GitHub pull requests, and a weekly live video demo every Friday.",
        },
        {
          q: "What happens after launch?",
          a: "Every project includes a 30-day warranty for bugs and unexpected problems, at no cost. After that you can keep us on a maintenance plan for new features, or hand the documented codebase to your own team.",
        },
      ]}
      ctaTitle="Ready to build your web platform?"
      ctaLede="Book a free 20-minute call and tell us the problem you're solving. We'll tell you what a first version should include and how long it would take."
      jsonLd={jsonLd}
    />
  );
}
