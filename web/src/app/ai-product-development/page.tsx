import type { Metadata } from "next";
import { ServicePageLayout } from "@/components/services/ServicePageLayout";

export const metadata: Metadata = {
  title: "Applied AI Product Development for Founders · Zero Hallucinations",
  description:
    "Applied AI and automated workflows for startup founders. Structured data extraction, semantic search, and deterministic workflows with zero hallucinations.",
  alternates: {
    canonical: "/ai-product-development",
  },
  openGraph: {
    title: "Applied AI Product Development for Founders · Zero Hallucinations",
    description:
      "Applied AI and automated workflows for startup founders. Structured data extraction, semantic search, and deterministic workflows with zero hallucinations.",
    url: "https://www.shipthesis.com/ai-product-development",
  },
  twitter: {
    card: "summary_large_image",
    title: "Applied AI Product Development for Founders · Zero Hallucinations",
    description:
      "Applied AI and automated workflows for startup founders. Structured data extraction, semantic search, and deterministic workflows with zero hallucinations.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://www.shipthesis.com/ai-product-development/#service",
      name: "Applied AI Product Development",
      provider: {
        "@type": "Organization",
        name: "Ship Thesis",
        url: "https://www.shipthesis.com",
      },
      serviceType: "AI Software Engineering",
      description:
        "Deterministic applied AI engineering for founders: strict schema extraction, automated report generation, and verified data synthesis without hallucinations.",
      areaServed: "Worldwide",
    },
  ],
};

export default function AiProductDevelopmentPage() {
  return (
    <ServicePageLayout
      breadcrumbTitle="Applied AI Systems"
      badgeText="Status: 1 Sprint Slot Open"
      title="Applied AI products for founders, with zero hallucinations"
      lede="Practical AI features that solve real business problems: structured document parsing, automated reporting workflows, and verified data synthesis without gimmicks."
      heroImage={{
        src: "/work/poststeady/hero.webp",
        alt: "Poststeady automated client reporting SaaS dashboard preview",
        width: 1780,
        height: 883,
        deviceType: "browser",
        browserUrl: "https://app.poststeady.com/reports",
      }}
      who={{
        for: [
          {
            title: "Founders building AI products where accuracy is non-negotiable",
            desc: "Legal, financial, medical, or executive client reporting where a single hallucinated figure destroys trust immediately. You need strict deterministic schemas.",
          },
          {
            title: "Teams automating complex manual parsing workflows",
            desc: "You process multi-page PDFs, messy spreadsheets, or unstructured text, and want automated data extraction piped directly into a structured PostgreSQL database.",
          },
          {
            title: "Founders looking for lean, production-grade AI architecture",
            desc: "You want smart model cascading (using fast, cheap models for extraction and larger reasoning models only where necessary) to keep operating margins high.",
          },
        ],
        notFor: [
          {
            title: "Generic conversational chatbot wrappers",
            desc: "If you only want a generic chat interface with no underlying database, workflow engine, or business logic, open-source templates are cheaper.",
          },
          {
            title: "Speculative foundational model pre-training",
            desc: "We do not train foundation models from scratch on GPU clusters. We engineer high-leverage applied software on commercial APIs (Claude, OpenAI, Gemini).",
          },
          {
            title: "Fragile prompt-only experiments with no test suite",
            desc: "We build typed, schema-validated software with automated regression evaluation suites, not fragile prompts that break when an LLM updates.",
          },
        ],
      }}
      caseStudy={{
        client: "Poststeady",
        title: "Poststeady: Automated Client Reporting from Analytics CSVs",
        lede: "An automated reporting SaaS that ingests raw analytics exports and synthesizes executive performance narratives into branded client PDFs with zero metric hallucinations.",
        timeline: "4 Weeks",
        stack: ["Next.js 16", "PostgreSQL (RLS)", "Puppeteer", "Tailwind CSS", "Stripe"],
        metrics: [
          { num: "100%", label: "Verified Data Accuracy" },
          { num: "100+", label: "Active Agency Users" },
          { num: "< 3s", label: "Executive PDF Build" },
        ],
        screenshots: [
          {
            src: "/work/poststeady/step1.webp",
            alt: "CSV upload and data schema mapping",
            caption: "Multi-format CSV file parser & schema validator",
            width: 1670,
            height: 941,
          },
          {
            src: "/work/poststeady/step2.webp",
            alt: "Metric aggregation and dashboard summary",
            caption: "Automated metric aggregation & KPI computation",
            width: 1670,
            height: 942,
          },
          {
            src: "/work/poststeady/step5.webp",
            alt: "Executive PDF report generation preview",
            caption: "Pixel-perfect client PDF report generator",
            width: 1670,
            height: 941,
          },
        ],
        whatShipped: [
          "Robust multi-source CSV parser with schema validation and sanitization",
          "Headless browser PDF rendering pipeline running in serverless cloud functions",
          "Automated weekly email dispatch engine with tracking and delivery logging",
        ],
        caseStudyHref: "/work/poststeady",
      }}
      deliverables={[
        {
          tag: "STRICT SCHEMAS",
          title: "Deterministic structured output engines",
          desc: "Every AI output is validated against strict Pydantic / Zod schemas. If the model output deviates by even a single character, it is rejected and re-prompted automatically.",
        },
        {
          tag: "DATA PRIVACY",
          title: "Zero-retention commercial API architecture",
          desc: "We route calls exclusively through zero-data-retention commercial enterprise endpoints. Your proprietary client data is never used to train third-party public models.",
        },
        {
          tag: "SMART CASCADING",
          title: "Model cascading & cost-efficient caching",
          desc: "We route high-volume tasks through lightweight models and reserve reasoning models for complex synthesis, drastically reducing API bills by up to 70%.",
        },
        {
          tag: "FULL OWNERSHIP",
          title: "100% Code in your GitHub from Day 1",
          desc: "Clean, documented TypeScript and Python pipelines. Private repository created directly in your company GitHub organization with zero agency lock-in.",
        },
      ]}
      faqs={[
        {
          q: "How do you prevent AI hallucinations?",
          a: "We engineer strict deterministic pipelines. We never allow the language model to invent facts or numbers. Instead, our software computes statistical deltas and metrics deterministically in code first, and provides those exact figures to the model with strict schema boundaries.",
        },
        {
          q: "Will our data be used to train AI models?",
          a: "No. We integrate exclusively with commercial enterprise endpoints (OpenAI, Anthropic, Google Cloud) that have signed data privacy terms prohibiting training on customer API inputs.",
        },
        {
          q: "How do you manage ongoing API token costs?",
          a: "We engineer aggressive prompt optimization, semantic embedding caches, and model cascading. Lightweight tasks run on fast, sub-cent models, and only complex synthesis hits larger reasoning models.",
        },
        {
          q: "What happens after launch?",
          a: "Every engagement includes a 30-day post-launch warranty covering any functional regressions at zero cost. After launch, you can retain us for ongoing feature sprints or manage the clean, typed codebase with your own team.",
        },
      ]}
      ctaTitle="Ready to ship your AI product?"
      ctaLede="Book a free 20-minute call to discuss your AI product concept, evaluation metrics, and technical architecture."
      jsonLd={jsonLd}
    />
  );
}

