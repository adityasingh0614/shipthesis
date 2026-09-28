import type { CSSProperties, ComponentType } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseOpening } from "@/components/work/CaseOpening";
import { AssessYourselfBody } from "@/components/work/assess-yourself/AssessYourselfBody";
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
    openGraph: { images: "src" in study.hero ? [study.hero.src] : [] },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const study = getVisibleCaseStudy((await params).slug);
  if (!study) notFound();
  const Body = BODIES[study.slug];

  return (
    <article style={{ "--accent": study.accent } as CSSProperties}>
      <CaseOpening study={study} />
      {Body && <Body />}
    </article>
  );
}
