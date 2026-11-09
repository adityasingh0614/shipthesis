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
];

/**
 * Upcoming blog post drafts ready for subsequent release waves
 */
export const UPCOMING_POSTS_METADATA: BlogPostMeta[] = [];

export function getAllPosts(): BlogPostMeta[] {
  return BLOG_POSTS_METADATA;
}
