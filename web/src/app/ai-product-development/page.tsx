import type { Metadata } from "next";
import { ServicePageLayout } from "@/components/services/ServicePageLayout";

export const metadata: Metadata = {
  title: "AI Product Development Company | Practical LLM Apps | Ship Thesis",
  description:
    "Applied AI and LLM product engineering for startup founders. Structured data extraction, semantic search (RAG), and deterministic workflows with zero hallucinations.",
  alternates: {
    canonical: "/ai-product-development",
  },
  openGraph: {
    title: "AI Product Development Company | Practical LLM Apps | Ship Thesis",
    description:
      "Applied AI and LLM product engineering for startup founders. Structured data extraction, semantic search (RAG), and deterministic workflows with zero hallucinations.",
    url: "https://www.shipthesis.com/ai-product-development",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Product Development Company | Practical LLM Apps | Ship Thesis",
    description:
      "Applied AI and LLM product engineering for startup founders. Structured data extraction, semantic search (RAG), and deterministic workflows with zero hallucinations.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI Product Development & Integration",
  serviceType: "AI Software Engineering",
  provider: {
    "@type": "Organization",
    name: "Ship Thesis",
    url: "https://www.shipthesis.com",
  },
  areaServed: "Worldwide",
  description:
    "Applied AI product engineering for founders. Build production-grade LLM workflows, structured document extraction, semantic RAG systems, and hallucination guardrails.",
  offers: {
    "@type": "Offer",
    priceCurrency: "USD",
    description: "Fixed-price Applied AI software milestone development",
  },
};

export default function AiProductDevelopmentPage() {
  return (
    <ServicePageLayout
      badge="Applied AI & LLM Systems"
      title="Practical AI Features. Zero Gimmicks. Real ROI."
      lede="Move beyond superficial chatbot wrappers. We engineer high-reliability AI products: structured document parsing, semantic search (RAG), automated data synthesis, and rigorous verification pipelines that never invent facts."
      bookingLocation="services"
      jsonLd={jsonLd}
      metrics={[
        { value: "Strict Schemas", label: "Typed JSON output guarantees" },
        { value: "0% Leak", label: "Customer data never trains models" },
        { value: "Hybrid RAG", label: "Semantic + keyword search" },
        { value: "Deterministic", label: "Verification against hallucination" },
      ]}
      featuresPre="Engineering Pillars"
      featuresTitle="Production AI That Users Can Actually Trust"
      featuresLede="Anyone can call an API endpoint. Making large language models deterministic, cost-efficient, and fast in customer-facing software requires rigorous systems engineering."
      features={[
        {
          title: "Structured Output & Schema Enforcement",
          desc: "We enforce strict Zod / Pydantic schema validation on all LLM responses. If a model generates malformed keys or unexpected fields, automated retry loops heal the output before it hits your database.",
        },
        {
          title: "Hybrid Semantic Retrieval (RAG)",
          desc: "Combine vector embeddings (pgvector) with full-text lexical search and re-ranking models. Retrieve the exact context chunks needed to answer complex domain queries with source citations.",
        },
        {
          title: "Hallucination Defense & Fact Verification",
          desc: "In analytical products, models are forbidden from making ungrounded calculations. All numbers and claims are cross-checked deterministically against raw input records before presentation.",
        },
        {
          title: "Token Optimization & Latency Caching",
          desc: "Semantic prompt caching, intelligent model cascading (routing simple tasks to fast 8B models and complex synthesis to flagship frontiers), reducing API costs by up to 70%.",
        },
        {
          title: "Document Parsing & Unstructured Ingestion",
          desc: "Extract clean tabular data and structured JSON from chaotic real-world inputs: multi-page PDFs, spreadsheets with non-standard column headers, scanned receipts, and audio transcripts.",
        },
        {
          title: "Evaluation Suites & Regression Checks",
          desc: "Automated regression tests ensure that future prompt updates or new model versions don't quietly degrade accuracy or break production customer workflows.",
        },
      ]}
      timelinePre="Milestones"
      timelineTitle="How We Build & Ship AI Products"
      timelineLede="From ground-truth data validation to production guardrails in 4 weeks."
      timeline={[
        {
          step: "Week 01",
          title: "Data Ground Truth & Architecture",
          desc: "Assemble representative test datasets, design system schemas, establish baseline evaluation metrics, and select model providers.",
          deliverable: "Evaluation benchmark suite + architecture specification",
        },
        {
          step: "Week 02",
          title: "Ingestion Pipeline & Retrieval Engine",
          desc: "Build embedding pipelines, chunking strategies, vector database storage, and structured extraction workers.",
          deliverable: "Working extraction pipeline scoring 95%+ on benchmarks",
        },
        {
          step: "Week 03",
          title: "Application Layer & Frontend UX",
          desc: "Streaming responses, optimistic UI updates, source citation popovers, and administrative cost/token tracking dashboard.",
          deliverable: "Full interactive user workflow deployed on staging",
        },
        {
          step: "Week 04",
          title: "Latency Optimization & Guardrails",
          desc: "Setup fallback providers, token rate limiters, automated error handling, and production sign-off.",
          deliverable: "Production release with full telemetry monitoring",
        },
      ]}
      proofPre="Case Study"
      proofTitle="Poststeady: AI Summaries That Never Hallucinate"
      proofLede="How we built an AI reporting engine that quotes only verified figures from messy analytics exports."
      caseStudies={[
        {
          badge: "Applied AI Case Study",
          title: "Poststeady",
          desc: "Our client reporting SaaS needed an AI narrative generator that freelancers could trust in front of clients. We engineered an engine that ingests 175+ column variations, calculates statistical deltas deterministically, and forces the LLM to cite only computed values.",
          href: "/work/poststeady",
          stats: [
            { value: "100%", label: "Fact Grounding" },
            { value: "175+", label: "Dirty Formats Mapped" },
            { value: "< 3s", label: "Report Generation" },
          ],
        },
        {
          badge: "Custom LMS Integration",
          title: "EHS Training Platform",
          desc: "Automated Zoom webinar recording ingestion, transcript indexing, and automated attendance logging for industrial compliance cohorts.",
          href: "/work/ehs-training-platform",
          stats: [
            { value: "Webhook", label: "Event Ingestion" },
            { value: "Zero", label: "Manual Attendance" },
            { value: "Full", label: "Cohort Audits" },
          ],
        },
      ]}
      stackTitle="Modern AI & Data Stack"
      stack={[
        "OpenAI & Anthropic APIs",
        "Google Gemini Models",
        "pgvector (PostgreSQL)",
        "LangChain / LlamaIndex",
        "Zod Schema Enforcement",
        "Next.js Streaming UI",
        "Python / Node.js Backends",
        "Helicone / Langfuse Telemetry",
        "Supabase Edge Functions",
      ]}
      faqTitle="Founder FAQs About AI Product Development"
      faqItems={[
        {
          q: "Will our proprietary business data be used to train external AI models?",
          a: "No, never. We exclusively use commercial enterprise API tiers with explicit zero-data-retention agreements where provider terms prohibit using client prompts or completions for model training. Furthermore, your sensitive data is stored securely in your own dedicated database.",
        },
        {
          q: "How do you prevent the AI from making up false numbers (hallucinations)?",
          a: "We decouple arithmetic and data aggregation from the language model. All mathematical calculations, aggregations, and data joins are executed in deterministic code (SQL/TypeScript). The LLM is only provided the pre-verified values and constrained by strict system prompts and validation schemas.",
        },
        {
          q: "What happens if OpenAI or Anthropic suffers an API outage?",
          a: "We engineer multi-provider fallbacks. If your primary provider experiences downtime or elevated error rates, our routing middleware seamlessly shifts traffic to a fallback provider (e.g. falling back from Claude to Gemini or GPT) with zero downtime for your end users.",
        },
        {
          q: "How do you prevent runway burnout on expensive API tokens?",
          a: "We implement semantic caching, strict maximum token limits, and intelligent routing. Routine text processing is delegated to ultra-fast, low-cost models, reserving expensive reasoning models only for high-value synthesis.",
        },
      ]}
      ctaTitle="Ready to build an AI product that actually delivers value?"
      ctaLede="Schedule a free 20-minute AI architecture call. We'll examine your data inputs, design the verification architecture, and provide a fixed milestone roadmap."
    />
  );
}

