import type { Metadata } from "next";
import { ServicePageLayout } from "@/components/services/ServicePageLayout";

export const metadata: Metadata = {
  title: "AI Product Development for Founders",
  description:
    "We build AI features for documents and reporting, where the numbers are calculated in code and checked before they reach your customer.",
  alternates: {
    canonical: "/ai-product-development",
  },
  openGraph: {
    title: "AI Product Development for Founders · Ship Thesis",
    description:
      "We build AI features for documents and reporting, where the numbers are calculated in code and checked before they reach your customer.",
    url: "https://www.shipthesis.com/ai-product-development",
    siteName: "Ship Thesis",
    type: "website",
    images: [
      {
        url: "https://www.shipthesis.com/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Ship Thesis - AI Product Development for Founders",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Product Development for Founders · Ship Thesis",
    description:
      "We build AI features for documents and reporting, where the numbers are calculated in code and checked before they reach your customer.",
    images: ["https://www.shipthesis.com/opengraph-image.png"],
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
        "Deterministic applied AI engineering for founders: document parsing, automated reporting workflows, and checked data synthesis.",
      areaServed: "Worldwide",
    },
  ],
};

export default function AiProductDevelopmentPage() {
  return (
    <ServicePageLayout
      breadcrumbTitle="Applied AI Systems"
      badgeText="Status: 1 Sprint Slot Open"
      title="AI features that get the numbers right"
      lede="We build products that turn messy PDFs, spreadsheets and text into structured data and reports, for founders who can't afford wrong answers. Numbers are calculated in code and checked before they reach your customer; the AI writes the explanation around them."
      ctaPrefix="ai"
      faqLede="Direct, honest answers on document parsing, data accuracy, model privacy, and costs."
      heroImage={{
        src: "/work/poststeady/poststeady_hero_image.webp",
        alt: "Poststeady automated client reporting SaaS dashboard preview",
        width: 779,
        height: 320,
        deviceType: "browser",
        browserUrl: "https://app.poststeady.com/reports",
      }}
      who={{
        for: [
          {
            title: "Products where accuracy matters",
            desc: "Reporting, finance, legal and compliance work, where one wrong figure loses a customer. We keep the numbers out of the model's hands.",
          },
          {
            title: "Teams automating manual document work",
            desc: "You process multi-page PDFs, messy spreadsheets or free text, and want clean, structured data in your database.",
          },
          {
            title: "Founders who want AI without a huge API bill",
            desc: "We use smaller, cheaper models for simple steps and save larger ones for the hard parts.",
          },
        ],
        notFor: [
          {
            title: "A generic chatbot",
            desc: "If you only want a chat window with no data or business rules behind it, an open-source template is cheaper.",
          },
          {
            title: "Training your own model from scratch",
            desc: "We build products on commercial models from providers like Anthropic, OpenAI and Google.",
          },
          {
            title: "Experiments with no testing",
            desc: "We build checked, tested software, not prompts that break when a model updates.",
          },
          {
            title: "The lowest hourly rate",
            desc: "You'll find cheaper hourly developers. We offer a fixed scope, a build every week, and code you own.",
          },
        ],
      }}
      caseStudy={{
        client: "Poststeady (Our own product)",
        clientLabel: "Product",
        title: "Poststeady: Automated Client Reporting from Analytics CSVs",
        lede: "Poststeady, our own product. Agencies spend hours turning analytics exports into client reports. Poststeady turns messy CSV exports into a branded PDF report with the analysis written out. We built it in 4 weeks and run it ourselves, and it has 100+ users.",
        timeline: "4 Weeks",
        stack: ["Next.js", "PostgreSQL (RLS)", "Puppeteer", "Tailwind CSS", "Stripe"],
        metrics: [
          { num: "100+", label: "Active Agency Users" },
          { num: "4 Weeks", label: "Idea to Delivery" },
          { num: "Code-First", label: "Deterministic Metric Engine" },
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
            src: "/work/poststeady/report-preview.webp",
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
          tag: "STRICT FORMATS",
          title: "Checked outputs",
          desc: "Every AI answer is checked against a strict format. If it doesn't fit, it's rejected and retried.",
        },
        {
          tag: "DATA PRIVACY",
          title: "Your data stays yours",
          desc: "We use commercial API endpoints whose official terms prohibit using customer data to train foundation models.",
        },
        {
          tag: "COST CONTROL",
          title: "Costs kept in check",
          desc: "Simple steps run on small models and saved results. Once it's live, we show you what each task costs.",
        },
        {
          tag: "FULL OWNERSHIP",
          title: "Your code from day one",
          desc: "A private repository in your company's GitHub, with all the intellectual property assigned to you.",
        },
      ]}
      faqs={[
        {
          q: "How do you stop the AI from making things up?",
          a: "No model can promise it will never be wrong, so we design around that. Numbers are calculated in regular code first. The model only writes the explanation around those exact figures, and we check its output against a strict format and test it before release.",
        },
        {
          q: "Which AI models and providers do you integrate with?",
          a: "We integrate with current models from Anthropic, OpenAI, and Google. We select the right model and configuration based on your product's exact latency, privacy, and cost requirements.",
        },
        {
          q: "What architecture do you use to ensure accurate data extraction?",
          a: "We use deterministic parsing pipelines with structured outputs (Pydantic and Zod schemas). Calculations and aggregations are performed in standard code (TypeScript / Python), and the LLM is only tasked with summarizing and formatting validated data.",
        },
        {
          q: "Will our data be used to train AI models?",
          a: "Not on the commercial API tiers we use. OpenAI, Anthropic and Google state in their commercial terms that customer data sent through these APIs isn't used to train their models. Providers may keep requests briefly for safety review. If your documents are sensitive, tell us before the project so we can choose a provider and settings that fit.",
        },
        {
          q: "How do you manage API costs?",
          a: "We use small, cheap models for simple steps, reuse saved results where we can, and save larger models for complex work.",
        },
        {
          q: "Do I own all code, custom prompts, and pipelines?",
          a: "Yes, unconditionally. All source code, prompt templates, evaluation scripts, and workflow orchestrations are committed to your company's private GitHub repository, and all intellectual property belongs 100% to you.",
        },
        {
          q: "Do you sign an NDA before reviewing our private documents or data?",
          a: "Yes. We sign a mutual NDA before examining any sample PDFs, spreadsheets, or internal datasets to ensure your proprietary business data remains completely confidential.",
        },
        {
          q: "How does your fixed-price milestone model work for AI projects?",
          a: "We agree on a clear written scope and specification before writing any code. Payments are divided into three milestones: 30% at kickoff, 40% when the halfway build is working in staging, and 30% upon final release. You only release each payment after testing working software, with zero hourly overages.",
        },
        {
          q: "How long does it take?",
          a: "4 to 6 weeks for a focused first version; larger scopes take longer. We start with upfront planning to map schemas and evaluate test documents, and you test working software every week.",
        },
        {
          q: "What happens after launch?",
          a: "Every project includes a 30-day warranty for bugs and unexpected problems, at no cost. After that you can keep us on a maintenance plan, or take the documented codebase in-house.",
        },
      ]}
      ctaTitle="Ready to build your AI product?"
      ctaLede="Book a free 20-minute call and tell us what documents or data you're working with. We'll tell you what's realistic for a first version."
      jsonLd={jsonLd}
    />
  );
}
