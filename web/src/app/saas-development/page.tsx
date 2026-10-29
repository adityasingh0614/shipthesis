import type { Metadata } from "next";
import { ServicePageLayout } from "@/components/services/ServicePageLayout";

export const metadata: Metadata = {
  title: "SaaS MVP Development Company | Full-Stack Web Apps | Ship Thesis",
  description:
    "Full-stack SaaS MVP development for modern founders. Next.js, Supabase, multi-tenant architecture, Stripe billing, and automated background jobs shipped in weeks.",
  alternates: {
    canonical: "/saas-development",
  },
  openGraph: {
    title: "SaaS MVP Development Company | Full-Stack Web Apps | Ship Thesis",
    description:
      "Full-stack SaaS MVP development for modern founders. Next.js, Supabase, multi-tenant architecture, Stripe billing, and automated background jobs shipped in weeks.",
    url: "https://www.shipthesis.com/saas-development",
  },
  twitter: {
    card: "summary_large_image",
    title: "SaaS MVP Development Company | Full-Stack Web Apps | Ship Thesis",
    description:
      "Full-stack SaaS MVP development for modern founders. Next.js, Supabase, multi-tenant architecture, Stripe billing, and automated background jobs shipped in weeks.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "SaaS MVP Development Company",
  serviceType: "SaaS Development",
  provider: {
    "@type": "Organization",
    name: "Ship Thesis",
    url: "https://www.shipthesis.com",
  },
  areaServed: "Worldwide",
  description:
    "Production-grade SaaS application development for B2B and consumer founders. Multi-tenant database architecture, billing webhooks, auth, and automated background jobs.",
  offers: {
    "@type": "Offer",
    priceCurrency: "USD",
    description: "Fixed-scope SaaS MVP milestone development",
  },
};

export default function SaasDevelopmentPage() {
  return (
    <ServicePageLayout
      badge="Full-Stack SaaS Engineering"
      title="Production-Ready SaaS MVPs Built for Scale."
      lede="Build a B2B or consumer SaaS that actually turns visitors into paying subscribers. We engineer high-performance web applications with Next.js, robust multi-tenant PostgreSQL, automated billing, and zero architectural debt."
      bookingLocation="services"
      jsonLd={jsonLd}
      metrics={[
        { value: "Next.js 16", label: "App Router & React Server" },
        { value: "Multi-Tenant", label: "Row-Level Security (RLS)" },
        { value: "Automated", label: "Stripe & Razorpay Billing" },
        { value: "Weekly", label: "Staging environments updated" },
      ]}
      featuresPre="SaaS Architecture"
      featuresTitle="Everything Your Software Needs to Charge Customers"
      featuresLede="We don't just build pretty UI wrappers. We engineer the mission-critical plumbing required to operate a reliable subscription business."
      features={[
        {
          title: "Multi-Tenant Database Architecture",
          desc: "Strict tenant isolation using PostgreSQL Row-Level Security (RLS). Ensure user data cannot leak between organizations, even during complex queries.",
        },
        {
          title: "Enterprise Auth & Role-Based Access",
          desc: "Social logins, magic link authentication, session management, organization team invites, and granular role permissions (Admin, Editor, Viewer).",
        },
        {
          title: "Recurring Billing & Webhook Engines",
          desc: "Full Stripe or Razorpay subscription lifecycle management: customer portals, usage tiers, trial periods, prorated upgrades, and failed-payment retries.",
        },
        {
          title: "Automated Background Workers & Cron",
          desc: "Reliable async queue processing for batch emails, heavy data transformations, document generation, and periodic metric rollups.",
        },
        {
          title: "Analytics & Executive Dashboards",
          desc: "Responsive, high-density data tables, real-time KPI charting, CSV/PDF data exports, and audit logging built for decision makers.",
        },
        {
          title: "Hardened Security & Edge Routing",
          desc: "Strict Content Security Policies, rate limiting, automated database backups, secret rotation via environment variables, and zero client token leaks.",
        },
      ]}
      timelinePre="Delivery Roadmap"
      timelineTitle="From Architecture to First Customer Charge"
      timelineLede="Our 4 to 6-week SaaS development sequence guarantees rock-solid stability before public traffic arrives."
      timeline={[
        {
          step: "Phase 01",
          title: "Data Modeling & Tenant Architecture",
          desc: "Entity-relationship diagrams, database migration scripts, auth policies, and component design systems.",
          deliverable: "PostgreSQL schema + RLS policies + UI layout system",
        },
        {
          step: "Phase 02",
          title: "Core SaaS Workflows & Dashboard",
          desc: "Authenticated team workspaces, primary workflow CRUD, file uploads, and state management.",
          deliverable: "Interactive staging deployment with real database state",
        },
        {
          step: "Phase 03",
          title: "Monetization & Webhook Hardening",
          desc: "Stripe/Razorpay billing portal, subscription webhook event listeners, invoice history, and email triggers.",
          deliverable: "End-to-end sandbox checkout and billing entitlement loop",
        },
        {
          step: "Phase 04",
          title: "Performance & Production Launch",
          desc: "Edge caching, database query indexing, Core Web Vitals optimization, custom domain DNS, and production sign-off.",
          deliverable: "Live production SaaS application on custom domain",
        },
      ]}
      proofPre="Proven Track Record"
      proofTitle="SaaS Platforms We've Engineered & Run"
      proofLede="We build and operate our own software products, giving us first-hand empathy for billing churn, uptime, and database performance."
      caseStudies={[
        {
          badge: "Analytics SaaS",
          title: "Poststeady",
          desc: "An automated reporting SaaS designed for marketing agencies and freelancers. Ingests raw CSV exports from Google, Meta, and LinkedIn, matches 175+ dirty columns, and generates branded PDF summaries.",
          href: "/work/poststeady",
          stats: [
            { value: "175+", label: "CSV Columns Parsed" },
            { value: "Zero", label: "Manual Data Entry" },
            { value: "PDF & Web", label: "Automated Reports" },
          ],
        },
        {
          badge: "Education LMS SaaS",
          title: "EHS Training Platform",
          desc: "A custom live learning management SaaS for occupational health and safety professionals. Integrates Zoom API webhooks for automated attendance tracking, cohorts, and certification workflows.",
          href: "/work/ehs-training-platform",
          stats: [
            { value: "Zoom API", label: "Direct Integration" },
            { value: "100%", label: "Automated Attendance" },
            { value: "Multi-Cohort", label: "LMS Engine" },
          ],
        },
      ]}
      stackTitle="Production-Ready SaaS Stack"
      stack={[
        "Next.js App Router",
        "React Server Components",
        "TypeScript",
        "Supabase (PostgreSQL)",
        "Prisma / Drizzle ORM",
        "Stripe Billing & Webhooks",
        "Razorpay Payments",
        "Tailwind CSS",
        "Resend Transactional Email",
        "Vercel Edge Network",
      ]}
      faqTitle="Founder FAQs About SaaS Development"
      faqItems={[
        {
          q: "Why choose Next.js and Supabase for a new SaaS MVP?",
          a: "This stack provides the fastest time-to-market without locking you into expensive proprietary platforms. Next.js offers server-side rendering and edge routing for instant load times and perfect SEO, while Supabase delivers an enterprise-grade PostgreSQL database with built-in row-level security and authentication.",
        },
        {
          q: "How do you handle multi-tenancy and data isolation?",
          a: "We implement PostgreSQL Row-Level Security (RLS) directly at the database layer. Every single database query is automatically scoped to the authenticated organization ID, ensuring that customers can never see or modify another account's records.",
        },
        {
          q: "What payment gateways do you support?",
          a: "We support both Stripe and Razorpay, including recurring subscriptions, seat-based billing, usage meters, one-time fees, multi-currency support, and dunning workflows for failed payment cards.",
        },
        {
          q: "Can our future internal team take over the codebase easily?",
          a: "Absolutely. Everything is written in clean, strictly-typed TypeScript with comprehensive linting rules, structured database migration files, and modular component directories. We also provide architecture documentation and conduct a walkthrough session before sign-off.",
        },
      ]}
      ctaTitle="Ready to build a SaaS that customers pay for?"
      ctaLede="Schedule a free 20-minute architecture review. We will inspect your requirements, recommend the most cost-effective stack, and outline a fixed milestone plan."
    />
  );
}

