import type { Metadata } from "next";
import { ServicePageLayout } from "@/components/services/ServicePageLayout";

export const metadata: Metadata = {
  title: "MVP Development for Startups | Fixed 4-Week Scope | Ship Thesis",
  description:
    "Ship a production-ready mobile or SaaS MVP in 3-4 weeks. Weekly working builds on your phone or web, fixed-price milestones, and 100% code ownership.",
  alternates: {
    canonical: "/mvp-development",
  },
  openGraph: {
    title: "MVP Development for Startups | Fixed 4-Week Scope | Ship Thesis",
    description:
      "Ship a production-ready mobile or SaaS MVP in 3-4 weeks. Weekly working builds on your phone or web, fixed-price milestones, and 100% code ownership.",
    url: "https://www.shipthesis.com/mvp-development",
  },
  twitter: {
    card: "summary_large_image",
    title: "MVP Development for Startups | Fixed 4-Week Scope | Ship Thesis",
    description:
      "Ship a production-ready mobile or SaaS MVP in 3-4 weeks. Weekly working builds on your phone or web, fixed-price milestones, and 100% code ownership.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "MVP Development for Startups",
  serviceType: "MVP Development",
  provider: {
    "@type": "Organization",
    name: "Ship Thesis",
    url: "https://www.shipthesis.com",
  },
  areaServed: "Worldwide",
  description:
    "Fast, fixed-scope MVP development for startup founders. Deliver working software in 3-4 weeks with weekly builds and full code ownership.",
  offers: {
    "@type": "Offer",
    priceCurrency: "USD",
    description: "Fixed-price 3-4 week MVP milestone development",
  },
};

export default function MvpDevelopmentPage() {
  return (
    <ServicePageLayout
      badge="MVP Development for Founders"
      title="Ship Your MVP in 4 Weeks. Weekly Working Builds."
      lede="Stop losing months to bloated agencies and flakey freelancers. We scope, design, and build production-grade mobile and SaaS MVPs with weekly testable releases and complete intellectual property ownership."
      bookingLocation="services"
      jsonLd={jsonLd}
      metrics={[
        { value: "3-4 Wks", label: "Average MVP delivery" },
        { value: "Weekly", label: "Working builds tested" },
        { value: "100%", label: "Code & IP ownership" },
        { value: "30/40/30", label: "Milestone-backed pricing" },
      ]}
      featuresPre="The Foundation"
      featuresTitle="Built for Real Validation, Not Throwaway Prototypes"
      featuresLede="Every MVP we build uses modern, scalable codebases designed to handle paying customers and future feature additions seamlessly."
      features={[
        {
          title: "Rigorous Scope Architecture",
          desc: "We cut through feature creep to identify the one core workflow your early adopters will actually pay for. No bloated specs, just high-conviction execution.",
        },
        {
          title: "Senior Founder-Led Engineering",
          desc: "You collaborate directly with the senior engineer building your product. No junior handoffs, no middle management, and no communication latency.",
        },
        {
          title: "Weekly Phone & Web Releases",
          desc: "Every Friday, a functional build lands on your phone or staging domain. You see real progress and test live features every 7 days.",
        },
        {
          title: "Production Infrastructure & Auth",
          desc: "Complete authentication (OAuth, magic links), database architecture, security headers, and continuous integration configured from Day 1.",
        },
        {
          title: "Payments & Monetization Ready",
          desc: "Stripe or Razorpay subscription billing, one-time checkout webhooks, and automated customer access provisioned before you launch.",
        },
        {
          title: "Clean Handoff & Zero Lock-In",
          desc: "Code lives in your GitHub organization, cloud infrastructure is in your name, and typed documentation ensures your future hires hit the ground running.",
        },
      ]}
      timelinePre="Timeline"
      timelineTitle="How We Ship in 4 Weeks"
      timelineLede="A predictable, battle-tested milestone schedule so you always know what is being built, tested, and shipped."
      timeline={[
        {
          step: "Week 01",
          title: "Architecture & UX Prototype",
          desc: "We finalize the exact user stories, database schemas, API contracts, and interactive clickable prototypes.",
          deliverable: "Approved clickable Figma + DB schema + GitHub repository",
        },
        {
          step: "Week 02",
          title: "Core Workflow & Data Layer",
          desc: "We build the primary application engine, persistent database models, authentication, and core business logic.",
          deliverable: "First live test build on phone or staging web URL",
        },
        {
          step: "Week 03",
          title: "Integrations & Payment Flows",
          desc: "Integration with third-party APIs, transactional emails, payment webhooks, and administrative metrics.",
          deliverable: "Complete end-to-end user loop with billing enabled",
        },
        {
          step: "Week 04",
          title: "Hardening, Polish & Store Release",
          desc: "Edge-case crash testing, cross-browser verification, responsive tuning, and submission to Apple App Store / Google Play / Vercel.",
          deliverable: "Production release + full repository handover",
        },
      ]}
      proofPre="Case Studies"
      proofTitle="Recent MVPs We've Shipped"
      proofLede="Real software built for real founders, tested under production conditions."
      caseStudies={[
        {
          badge: "Mobile MVP · Flutter",
          title: "Assess Yourself",
          desc: "An offline-first exam prep and testing mobile app built for Aptellic in 3-4 weeks. Features crash-resilient timed test recovery, Excel question ingestion, and one-time payment unlock.",
          href: "/work/assess-yourself",
          stats: [
            { value: "3-4 Wks", label: "Turnaround" },
            { value: "100%", label: "Offline-First" },
            { value: "iOS + Android", label: "Single Codebase" },
          ],
        },
        {
          badge: "SaaS MVP · Next.js",
          title: "Poststeady",
          desc: "An automated client reporting SaaS that ingests 175+ dirty CSV column formats, verifies numerical metrics, generates AI executive summaries, and renders branded PDFs.",
          href: "/work/poststeady",
          stats: [
            { value: "Next.js", label: "Full Stack" },
            { value: "Supabase", label: "Multi-Tenant" },
            { value: "Automated", label: "PDF Reports" },
          ],
        },
      ]}
      stackTitle="Modern, Battle-Tested Engineering Stack"
      stack={[
        "Next.js 16",
        "React",
        "TypeScript",
        "Flutter & Dart",
        "Supabase & PostgreSQL",
        "Tailwind CSS",
        "Node.js",
        "Stripe & Razorpay",
        "Vercel & Supabase Cloud",
      ]}
      faqTitle="Founder FAQs About MVP Development"
      faqItems={[
        {
          q: "Do I actually own 100% of the code and intellectual property?",
          a: "Yes, completely. From day one, the repository is created in your GitHub organization, and all third-party services (Vercel, Supabase, Apple Developer, Google Play) are set up under your own accounts. You never have to buy out your own code.",
        },
        {
          q: "How does fixed-price milestone pricing work?",
          a: "We agree on a clear, written scope before writing any code. The investment is split into three milestones: 30% to kick off, 40% when the core working build is delivered mid-way, and 30% upon final acceptance and deployment. No hourly rate creep.",
        },
        {
          q: "What if I need to change features mid-build?",
          a: "Because we ship working builds every Friday, you see reality quickly. If you discover a critical change, we swap out equivalent scope or provide a transparent, fixed addendum quote. You are always in control.",
        },
        {
          q: "What happens after the MVP launches?",
          a: "Every project includes a 30-day post-launch warranty where we fix any unexpected bugs or edge cases for free. Afterward, we can either support your next feature sprint or cleanly hand off documentation to your in-house engineering hires.",
        },
      ]}
      ctaTitle="Ready to ship your MVP in weeks, not quarters?"
      ctaLede="Book a free 20-minute architecture session with our founder. We'll review your scope, identify technical risks, and provide a fixed quote."
    />
  );
}
