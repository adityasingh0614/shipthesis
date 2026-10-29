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
    title: study.seo.title,
    description: study.seo.description,
    alternates: {
      canonical: `/work/${study.slug}`,
    },
    openGraph: {
      title: study.seo.title,
      description: study.seo.description,
      url: `https://www.shipthesis.com/work/${study.slug}`,
      images: "src" in study.hero ? [study.hero.src] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: study.seo.title,
      description: study.seo.description,
    },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const study = getVisibleCaseStudy((await params).slug);
  if (!study) notFound();
  const Body = BODIES[study.slug];

  const studyJsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    headline: study.seo.title,
    description: study.seo.description,
    image:
      "src" in study.hero
        ? `https://www.shipthesis.com${study.hero.src}`
        : undefined,
    url: `https://www.shipthesis.com/work/${study.slug}`,
    author: {
      "@type": "Organization",
      name: "Ship Thesis",
      url: "https://www.shipthesis.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Ship Thesis",
      url: "https://www.shipthesis.com",
    },
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
