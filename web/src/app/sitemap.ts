import type { MetadataRoute } from "next";
import { CASE_STUDIES, isVisible } from "@/content/case-studies";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.shipthesis.com";
  const now = new Date();

  const servicePages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/mvp-development`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.95,
    },
    {
      url: `${baseUrl}/saas-development`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.95,
    },
    {
      url: `${baseUrl}/flutter-app-development`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.95,
    },
    {
      url: `${baseUrl}/ai-product-development`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.95,
    },
  ];

  const caseStudyUrls: MetadataRoute.Sitemap = CASE_STUDIES.filter(isVisible).map((study) => ({
    url: `${baseUrl}/work/${study.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  return [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
    ...servicePages,
    ...caseStudyUrls,
  ];
}
