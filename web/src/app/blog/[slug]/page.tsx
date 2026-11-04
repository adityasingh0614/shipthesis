import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import {
  MilestoneTimelineDiagram,
  ThreeScreenMvpDiagram,
  CodeOwnershipPillarsDiagram,
  WeeklyBuildRhythmDiagram,
} from "@/components/blog/InlineDiagram";
import { BlogLayout } from "@/components/blog/BlogLayout";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPosts().map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  const pageUrl = `https://www.shipthesis.com/blog/${post.slug}`;
  const ogImageUrl = `https://www.shipthesis.com${post.ogImage}`;

  return {
    title: {
      absolute: post.seoTitle,
    },
    description: post.description,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.seoTitle,
      description: post.description,
      url: pageUrl,
      siteName: "Ship Thesis",
      type: "article",
      publishedTime: post.datePublished,
      modifiedTime: post.dateModified,
      images: [
        {
          url: ogImageUrl,
          width: post.ogWidth,
          height: post.ogHeight,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.seoTitle,
      description: post.description,
      images: [ogImageUrl],
    },
  };
}

function splitAtHeading(html: string, headingText: string): [string, string] | null {
  const regex = new RegExp(`(<h[23][^>]*>[^<]*${headingText.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}[^<]*<\\/h[23]>)`, "i");
  const match = html.match(regex);
  if (!match || match.index === undefined) return null;
  const before = html.slice(0, match.index);
  const after = html.slice(match.index);
  return [before, after];
}

function renderContentWithDiagram(slug: string, contentHtml: string) {
  switch (slug) {
    case "how-milestone-payments-work": {
      const split = splitAtHeading(contentHtml, "1. Milestone 1:");
      if (split) {
        return (
          <>
            <div dangerouslySetInnerHTML={{ __html: split[0] }} />
            <MilestoneTimelineDiagram />
            <div dangerouslySetInnerHTML={{ __html: split[1] }} />
          </>
        );
      }
      return <div dangerouslySetInnerHTML={{ __html: contentHtml }} />;
    }
    case "what-to-cut-from-v1-mvp": {
      const split = splitAtHeading(contentHtml, "What to Cut vs. What to Keep in v1");
      if (split) {
        return (
          <>
            <div dangerouslySetInnerHTML={{ __html: split[0] }} />
            <ThreeScreenMvpDiagram />
            <div dangerouslySetInnerHTML={{ __html: split[1] }} />
          </>
        );
      }
      return <div dangerouslySetInnerHTML={{ __html: contentHtml }} />;
    }
    case "code-ownership-hiring-agency": {
      const split = splitAtHeading(contentHtml, "1. The GitHub Repository Pillar");
      if (split) {
        return (
          <>
            <div dangerouslySetInnerHTML={{ __html: split[0] }} />
            <CodeOwnershipPillarsDiagram />
            <div dangerouslySetInnerHTML={{ __html: split[1] }} />
          </>
        );
      }
      return <div dangerouslySetInnerHTML={{ __html: contentHtml }} />;
    }
    case "why-weekly-working-builds-matter": {
      const split = splitAtHeading(contentHtml, "Automated CI/CD: How Modern Development Teams Distribute Builds");
      if (split) {
        return (
          <>
            <div dangerouslySetInnerHTML={{ __html: split[0] }} />
            <WeeklyBuildRhythmDiagram />
            <div dangerouslySetInnerHTML={{ __html: split[1] }} />
          </>
        );
      }
      return <div dangerouslySetInnerHTML={{ __html: contentHtml }} />;
    }
    default:
      return <div dangerouslySetInnerHTML={{ __html: contentHtml }} />;
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const pageUrl = `https://www.shipthesis.com/blog/${post.slug}`;
  const ogImageUrl = `https://www.shipthesis.com${post.ogImage}`;

  // JSON-LD schemas
  const jsonLdGraph: Record<string, unknown>[] = [
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: post.seoTitle,
      description: post.description,
      inLanguage: "en-US",
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.shipthesis.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blog",
            item: "https://www.shipthesis.com/blog",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: post.title,
            item: pageUrl,
          },
        ],
      },
    },
    {
      "@type": "BlogPosting",
      "@id": `${pageUrl}#article`,
      url: pageUrl,
      headline: post.title,
      description: post.description,
      articleSection: post.category,
      inLanguage: "en-US",
      image: [ogImageUrl],
      datePublished: post.datePublished,
      dateModified: post.dateModified,
      mainEntityOfPage: pageUrl,
      author: {
        "@type": "Organization",
        name: "Ship Thesis",
        url: "https://www.shipthesis.com",
      },
      publisher: {
        "@type": "Organization",
        name: "Ship Thesis",
        url: "https://www.shipthesis.com",
        logo: {
          "@type": "ImageObject",
          url: "https://www.shipthesis.com/icon.svg",
        },
      },
    },
  ];

  if (post.faqs.length > 0) {
    jsonLdGraph.push({
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: post.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    });
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": jsonLdGraph,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogLayout
        title={post.title}
        category={post.category}
        datePublished={post.datePublished}
        readTime={post.readTime}
        heroImage={post.heroImage}
        toc={post.toc}
      >
        {renderContentWithDiagram(post.slug, post.contentHtml)}
      </BlogLayout>
    </>
  );
}
