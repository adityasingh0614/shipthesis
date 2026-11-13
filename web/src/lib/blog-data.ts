export interface FaqItem {
  question: string;
  answer: string;
}

export interface TocItem {
  id: string;
  num: string;
  title: string;
}

export interface BlogPostMeta {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  category: "MVP" | "CONTRACTS" | "SAAS" | "MOBILE" | "AI" | "BLOCK";
  datePublished: string;
  dateModified: string;
  readTime: string;
  heroImage: string;
  ogImage: string;
  ogWidth: number;
  ogHeight: number;
}

/**
 * Published blog posts (strictly 3 live posts per release schedule)
 */
export const BLOG_POSTS_METADATA: BlogPostMeta[] = [
  {
    slug: "how-milestone-payments-work",
    title: "How Do Milestone Payments Work When Hiring an MVP Agency?",
    seoTitle: "How Milestone Payments Work When Hiring an MVP Agency",
    description:
      "Learn how the 30/40/30 milestone payment model protects founders when hiring a software agency. Capital releases only after working code is verified in staging.",
    category: "CONTRACTS",
    datePublished: "2026-11-02T00:00:00Z",
    dateModified: "2026-11-03T00:00:00Z",
    readTime: "5 min read",
    heroImage: "/covers/how-milestone-payments-work-illustration.webp",
    ogImage: "/covers/how-milestone-payments-work-og.png",
    ogWidth: 1200,
    ogHeight: 630,
  },
  {
    slug: "what-to-cut-from-v1-mvp",
    title: "What Should You Cut from Your First MVP?",
    seoTitle: "What to Cut from Your V1 MVP: The Three-Screen Rule",
    description:
      "How to cut scope from your first MVP without reducing core utility. Focus on three screens to preserve capital and launch software in weeks.",
    category: "MVP",
    datePublished: "2026-11-02T00:00:00Z",
    dateModified: "2026-11-03T00:00:00Z",
    readTime: "6 min read",
    heroImage: "/covers/what-to-cut-from-v1-mvp-illustration.webp",
    ogImage: "/covers/what-to-cut-from-v1-mvp-og.png",
    ogWidth: 1200,
    ogHeight: 630,
  },
  {
    slug: "code-ownership-hiring-agency",
    title: "How Do You Ensure 100% Code Ownership When Hiring an Agency?",
    seoTitle: "How to Ensure 100% Code Ownership When Hiring an Agency",
    description:
      "Protect your startup with 100% code ownership. Learn why agencies must commit directly to your GitHub and assign IP in writing from day one.",
    category: "CONTRACTS",
    datePublished: "2026-11-02T00:00:00Z",
    dateModified: "2026-11-03T00:00:00Z",
    readTime: "6 min read",
    heroImage: "/covers/code-ownership-hiring-agency-illustration.webp",
    ogImage: "/covers/code-ownership-hiring-agency-og.png",
    ogWidth: 1200,
    ogHeight: 630,
  },
  {
    slug: "why-weekly-working-builds-matter",
    title: "Why Do Weekly Working Builds on Your Phone Matter for an MVP?",
    seoTitle: "Why Weekly Working Builds on Your Phone Matter for an MVP",
    description:
      "Discover why weekly working builds on your physical phone catch bugs early, eliminate agency status-report theater, and prove real engineering velocity.",
    category: "MVP",
    datePublished: "2026-11-09T00:00:00Z",
    dateModified: "2026-11-09T00:00:00Z",
    readTime: "5 min read",
    heroImage: "/covers/why-weekly-working-builds-matter-illustration.webp",
    ogImage: "/covers/why-weekly-working-builds-matter-og.png",
    ogWidth: 1200,
    ogHeight: 630,
  },
  {
    slug: "flutter-vs-react-native-mvp",
    title: "Should You Build Your Mobile MVP in Flutter or React Native?",
    seoTitle: "Flutter vs React Native for a Mobile MVP: Complete Guide",
    description:
      "Compare Flutter vs React Native for your startup mobile MVP. Understand direct canvas rendering, bridge latency, offline persistence, and velocity tradeoffs.",
    category: "MOBILE",
    datePublished: "2026-11-09T00:00:00Z",
    dateModified: "2026-11-09T00:00:00Z",
    readTime: "6 min read",
    heroImage: "/covers/flutter-vs-react-native-mvp-illustration.webp",
    ogImage: "/covers/flutter-vs-react-native-mvp-og.png",
    ogWidth: 1200,
    ogHeight: 630,
  },
  {
    slug: "nextjs-supabase-multi-tenant-rls",
    title: "Next.js and Supabase: Multi-Tenant Architecture with Row-Level Security",
    seoTitle: "Next.js & Supabase Multi-Tenant Auth with Row-Level Security",
    description:
      "Learn how to architect multi-tenant SaaS applications using Next.js App Router and Supabase PostgreSQL Row-Level Security (RLS) for mathematical data isolation.",
    category: "BLOCK",
    datePublished: "2026-11-10T00:00:00Z",
    dateModified: "2026-11-10T00:00:00Z",
    readTime: "6 min read",
    heroImage: "/covers/nextjs-supabase-multi-tenant-rls-illustration.webp",
    ogImage: "/covers/nextjs-supabase-multi-tenant-rls-og.png",
    ogWidth: 1200,
    ogHeight: 630,
  },
  {
    slug: "how-to-vet-software-studios",
    title: "How Do You Vet a Software Development Studio Before Signing an MVP Contract?",
    seoTitle: "How to Vet a Dev Studio: Red Flags Before You Sign an MVP Contract",
    description:
      "Essential technical checkpoints for vetting software studios: day-one GitHub repository governance, milestone payment gates, cloud ownership, and weekly test builds.",
    category: "CONTRACTS",
    datePublished: "2026-11-10T00:00:00Z",
    dateModified: "2026-11-10T00:00:00Z",
    readTime: "6 min read",
    heroImage: "/covers/how-to-vet-software-studios-illustration.webp",
    ogImage: "/covers/how-to-vet-software-studios-og.png",
    ogWidth: 1200,
    ogHeight: 630,
  },
  {
    slug: "integrating-llms-into-saas-mvp",
    title: "How to Build AI Features into Your SaaS MVP Without Over-Engineering",
    seoTitle: "Building AI Features into Your SaaS MVP: Clean Architecture Guide",
    description:
      "Learn how to build AI features into your SaaS MVP with structured outputs, streaming UI, prompt token budgets, and PostgreSQL state persistence.",
    category: "AI",
    datePublished: "2026-11-13T00:00:00Z",
    dateModified: "2026-11-13T00:00:00Z",
    readTime: "6 min read",
    heroImage: "/covers/integrating-llms-into-saas-mvp-illustration.webp",
    ogImage: "/covers/integrating-llms-into-saas-mvp-og.png",
    ogWidth: 1200,
    ogHeight: 630,
  },
  {
    slug: "saas-stripe-webhooks-idempotency",
    title: "How to Handle Stripe Webhooks Reliably in a Next.js SaaS MVP",
    seoTitle: "Handling Stripe Webhooks Reliably in Next.js: Idempotency Guide",
    description:
      "Architect reliable Stripe webhook handlers in Next.js App Router using cryptographic signatures, PostgreSQL idempotency locks, and resilient event ledgers.",
    category: "SAAS",
    datePublished: "2026-11-13T00:00:00Z",
    dateModified: "2026-11-13T00:00:00Z",
    readTime: "6 min read",
    heroImage: "/covers/saas-stripe-webhooks-idempotency-illustration.webp",
    ogImage: "/covers/saas-stripe-webhooks-idempotency-og.png",
    ogWidth: 1200,
    ogHeight: 630,
  },
];

/**
 * Upcoming blog post drafts ready for subsequent release waves
 */
export const UPCOMING_POSTS_METADATA: BlogPostMeta[] = [];

export function getAllPosts(): BlogPostMeta[] {
  return [...BLOG_POSTS_METADATA].sort((a, b) => {
    const timeA = new Date(a.datePublished).getTime();
    const timeB = new Date(b.datePublished).getTime();
    if (timeB !== timeA) {
      return timeB - timeA; // Descending: latest published posts first
    }
    const indexA = BLOG_POSTS_METADATA.indexOf(a);
    const indexB = BLOG_POSTS_METADATA.indexOf(b);
    return indexB - indexA;
  });
}
