import type { CSSProperties, ComponentType } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseOpening } from "@/components/work/CaseOpening";
import { AssessYourselfBody } from "@/components/work/assess-yourself/AssessYourselfBody";
import { ChromaLayerBody } from "@/components/work/chromalayer/ChromaLayerBody";
import { PoststeadyBody } from "@/components/work/poststeady/PoststeadyBody";
import { SafetyTrainingBody } from "@/components/work/safety-training-platform/SafetyTrainingBody";
import { CASE_STUDIES, getVisibleCaseStudy, isVisible } from "@/content/case-studies";

type Props = { params: Promise<{ slug: string }> };

// Every case study shares the hero; below it each project has its own
// bespoke world (docs/design/case-study-brief.md).
const BODIES: Record<string, ComponentType> = {
  "assess-yourself": AssessYourselfBody,
  "safety-training-platform": SafetyTrainingBody,
  poststeady: PoststeadyBody,
  chromalayer: ChromaLayerBody,
};

// Only visible slugs in the content file exist; anything else (including a
// page with placeholder frames, on production) is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return CASE_STUDIES.filter(isVisible).map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const study = getVisibleCaseStudy((await params).slug);
  if (!study) return {};
  return {
    title: {
      absolute: study.seo.title,
    },
    description: study.seo.description,
    alternates: {
      canonical: `/work/${study.slug}`,
    },
    openGraph: {
      title: study.seo.title,
      description: study.seo.description,
      url: `https://www.shipthesis.com/work/${study.slug}`,
      siteName: "Ship Thesis",
      type: "article",
      images:
        "src" in study.hero && study.hero.width >= 1200
          ? [
              {
                url: `https://www.shipthesis.com${study.hero.src}`,
                width: study.hero.width,
                height: study.hero.height,
                alt: study.hero.alt,
              },
            ]
          : [
              {
                url: "https://www.shipthesis.com/opengraph-image.png",
                width: 1200,
                height: 630,
                alt: study.seo.title,
              },
            ],
    },
    twitter: {
      card: "summary_large_image",
      title: study.seo.title,
      description: study.seo.description,
      images:
        "src" in study.hero && study.hero.width >= 1200
          ? [`https://www.shipthesis.com${study.hero.src}`]
          : ["https://www.shipthesis.com/opengraph-image.png"],
    },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const study = getVisibleCaseStudy((await params).slug);
  if (!study) notFound();
  const Body = BODIES[study.slug];

  const pageUrl = `https://www.shipthesis.com/work/${study.slug}`;
  const fullTitle = `${study.title[0]}${study.joined ? "" : " "}${study.title[1]}`;

  const studyJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: study.seo.title,
        description: study.seo.description,
        isPartOf: {
          "@id": "https://www.shipthesis.com/#website",
        },
        breadcrumb: {
          "@id": `${pageUrl}#breadcrumb`,
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
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
            name: "Our Work",
            item: "https://www.shipthesis.com/#work",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: fullTitle,
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "TechArticle",
        "@id": `${pageUrl}#article`,
        headline: study.seo.title,
        description: study.seo.description,
        url: pageUrl,
        image:
          "src" in study.hero
            ? `https://www.shipthesis.com${study.hero.src}`
            : undefined,
        isPartOf: {
          "@id": `${pageUrl}#webpage`,
        },
        author: {
          "@type": "Organization",
          "@id": "https://www.shipthesis.com/#organization",
          name: "Ship Thesis",
          url: "https://www.shipthesis.com",
        },
        publisher: {
          "@type": "Organization",
          "@id": "https://www.shipthesis.com/#organization",
          name: "Ship Thesis",
          url: "https://www.shipthesis.com",
        },
        inLanguage: "en-US",
      },
    ],
  };

  return (
    <article style={{ "--accent": study.accent } as CSSProperties}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(studyJsonLd) }}
      />
      <CaseOpening study={study} />
      {Body && <Body />}
    </article>
  );
}
