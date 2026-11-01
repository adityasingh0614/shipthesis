import type { Metadata } from "next";
import { ServicePageLayout } from "@/components/services/ServicePageLayout";

export const metadata: Metadata = {
  title: "SaaS MVP Development for Founders · Full-Stack Web Apps",
  description:
    "Launch your SaaS product in 4 to 6 weeks. Complete with user authentication, custom workflow engines, PostgreSQL with Row-Level Security, and responsive web dashboards.",
  alternates: {
    canonical: "/saas-development",
  },
  openGraph: {
    title: "SaaS MVP Development for Founders · Full-Stack Web Apps",
    description:
      "Launch your SaaS product in 4 to 6 weeks. Complete with user authentication, custom workflow engines, PostgreSQL with Row-Level Security, and responsive web dashboards.",
    url: "https://www.shipthesis.com/saas-development",
  },
  twitter: {
    card: "summary_large_image",
    title: "SaaS MVP Development for Founders · Full-Stack Web Apps",
    description:
      "Launch your SaaS product in 4 to 6 weeks. Complete with user authentication, custom workflow engines, PostgreSQL with Row-Level Security, and responsive web dashboards.",
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
      badgeText="Status: 1 Sprint Slot Open"
      title="SaaS products for founders, built and shipped fast"
      lede="Full-stack web applications with authentication, custom workflow engines, multi-tenant databases, and responsive dashboards. A working build in your browser every week."
      heroImage={{
        src: "/work/safety-training-platform/trainer1.webp",
        alt: "EHS Guru LMS custom training dashboard with Zoom API integration",
        width: 1671,
        height: 941,
        deviceType: "browser",
        browserUrl: "https://app.ehsguru.com/dashboard",
      }}
      who={{
        for: [
          {
            title: "Founders building a web product with logins and workflows",
            desc: "You need a modern full-stack web application with user authentication, role-based dashboards, third-party API integrations, and tenant data isolation.",
          },
          {
            title: "Businesses replacing off-the-shelf software and high seat fees",
            desc: "You currently pay exorbitant monthly SaaS seat fees for rigid software that does not fit your operational workflow, and you want a custom platform you own forever.",
          },
          {
            title: "Teams avoiding no-code dead ends and fragile spaghetti code",
            desc: "You want production software engineered on Next.js, TypeScript, and PostgreSQL with proper database migrations so you never have to rebuild when you scale.",
          },
        ],
        notFor: [
          {
            title: "Simple static brochure marketing websites",
            desc: "If you only need a basic landing page or blog without logins, databases, or user dashboards, a lightweight site generator or CMS is more cost-effective.",
          },
          {
            title: "Speculative multi-year enterprise projects with no validation",
            desc: "We build focused, high-leverage products designed to onboard real paying customers in 4 to 6 weeks, not bloated 18-month committee projects.",
          },
          {
            title: "Teams looking for cheap overseas outsourcing mills",
            desc: "We write clean, typed, modular code with senior founder-led engineering, zero technical debt, and 100% intellectual property ownership from day one.",
          },
        ],
      }}
      caseStudy={{
        client: "EHS Guru",
        title: "EHS Training Platform: Custom Live Learning LMS with Zoom API",
        lede: "A bespoke live learning platform that replaced a bloated off-the-shelf LMS. Built to run one-click Zoom classes, auto-track attendance, and ingest recordings without per-seat software fees.",
        timeline: "4 Weeks",
        stack: ["Next.js 16", "Supabase (PostgreSQL RLS)", "Zoom API", "Tailwind CSS"],
        metrics: [
          { num: "1-Click", label: "Live Zoom Classes" },
          { num: "100%", label: "Attendance Automated" },
          { num: "$0", label: "Monthly Seat Tax" },
        ],
        screenshots: [
          {
            src: "/work/safety-training-platform/trainer1.webp",
            alt: "Trainer dashboard with active class schedules",
            caption: "Trainer command center with 1-click Zoom launcher",
            width: 1671,
            height: 941,
          },
          {
            src: "/work/safety-training-platform/webinars.webp",
            alt: "Webinars and class schedule calendar",
            caption: "Automated webinar calendar and public lead registration",
            width: 1400,
            height: 824,
          },
          {
            src: "/work/safety-training-platform/sessions.webp",
            alt: "Class session attendance logs and rosters",
            caption: "Automated Zoom attendance sync & student verification",
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
          title: "User logins & enterprise security",
          desc: "Secure authentication with passwordless magic links, Google OAuth, session management, and organization role-based access control (Admin, Member, Viewer).",
        },
        {
          tag: "BILLING & APIS",
          title: "Payment engines & 3rd-party integrations",
          desc: "Seamless integration with Stripe/Razorpay billing, Zoom APIs, Resend email workflows, and resilient webhook handlers to manage external system lifecycles.",
        },
        {
          tag: "DASHBOARD & DB",
          title: "Responsive dashboard & Postgres RLS",
          desc: "Fast, mobile-friendly interface with interactive data tables, KPI metric cards, and downloadable PDF/CSV exports built on PostgreSQL with Row-Level Security.",
        },
        {
          tag: "FULL OWNERSHIP",
          title: "100% Code in your GitHub from Day 1",
          desc: "Clean React Server Components and TypeScript types. Private repository created directly in your company GitHub with full IP assignment and no agency lock-in.",
        },
      ]}
      faqs={[
        {
          q: "How do payments and billing work?",
          a: "We integrate official Stripe Checkout and Customer Portal (or Razorpay for Indian/global currency support). Customers can self-serve their subscription tier, update payment methods, download PDF invoices, and cancel accounts. When payments succeed or subscriptions change, background webhooks automatically update user permissions in your database.",
        },
        {
          q: "How do users sign in?",
          a: "We implement secure modern authentication (Supabase Auth, Auth0, or NextAuth). Users can sign in with passwordless email magic links or Google/GitHub OAuth. All user data is guarded by JSON Web Tokens (JWT) with strict Row-Level Security so one customer can never view another organization's data.",
        },
        {
          q: "Can it support many customers / how does it scale?",
          a: "Yes. We build on serverless Next.js edge runtimes and managed PostgreSQL with connection pooling (e.g. Supabase, Neon, or AWS RDS). This architecture easily supports thousands of active users and hundreds of thousands of monthly requests with sub-100ms response times without managing virtual servers.",
        },
        {
          q: "What happens after launch?",
          a: "Every engagement comes with a 30-day post-launch warranty where we fix any unexpected bugs or edge cases at zero additional charge. When you want to iterate or ship new roadmap features, you can retain us for ongoing engineering sprints, or hand the clean, typed codebase over to your in-house hires.",
        },
      ]}
      ctaTitle="Ready to ship your web platform?"
      ctaLede="Book a free 20-minute call to discuss your SaaS feature scope, database architecture, and timeline."
      jsonLd={jsonLd}
    />
  );
}
