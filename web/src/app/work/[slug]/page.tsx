import type { CSSProperties, ComponentType } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseOpening } from "@/components/work/CaseOpening";
import { AssessYourselfBody } from "@/components/work/assess-yourself/AssessYourselfBody";
import { SafetyTrainingBody } from "@/components/work/safety-training-platform/SafetyTrainingBody";
import { CASE_STUDIES, getCaseStudy } from "@/content/case-studies";

type Props = { params: Promise<{ slug: string }> };

// Every case study shares the hero; below it each project has its own
// bespoke world (docs/design/case-study-brief.md).
const BODIES: Record<string, ComponentType> = {
  "assess-yourself": AssessYourselfBody,
  "safety-training-platform": SafetyTrainingBody,
};

// Only slugs in the content file exist; anything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return CASE_STUDIES.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const study = getCaseStudy((await params).slug);
  if (!study) return {};
  return {
    title: study.seo.title,
    description: study.seo.description,
    openGraph: { images: [study.hero.src] },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const study = getCaseStudy((await params).slug);
  if (!study) notFound();
  const Body = BODIES[study.slug];

  return (
    <article style={{ "--accent": study.accent } as CSSProperties}>
      <CaseOpening study={study} />
      {Body && <Body />}
    </article>
  );
}
