import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { BlogGrid } from "@/components/blog/BlogGrid";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Blog · Software Engineering & MVP Notes",
  description:
    "Engineering notes, architecture blueprints, milestone payment breakdowns, and tactical MVP lessons from the team at Ship Thesis.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog · Software Engineering & MVP Notes",
    description:
      "Engineering notes, architecture blueprints, milestone payment breakdowns, and tactical MVP lessons from the team at Ship Thesis.",
    url: "https://www.shipthesis.com/blog",
    siteName: "Ship Thesis",
    type: "website",
    images: [
      {
        url: "https://www.shipthesis.com/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Ship Thesis Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog · Software Engineering & MVP Notes",
    description:
      "Engineering notes, architecture blueprints, milestone payment breakdowns, and tactical MVP lessons from the team at Ship Thesis.",
    images: ["https://www.shipthesis.com/opengraph-image.png"],
  },
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <nav aria-label="Breadcrumb" className={styles.breadcrumbs}>
            <Link href="/" className={styles.breadcrumbLink}>
              Ship Thesis
            </Link>
            <span className={styles.breadcrumbSep} aria-hidden="true">
              /
            </span>
            <span className={styles.currentCrumb}>Blog</span>
          </nav>
          <h1 className={styles.title}>From the Blog</h1>
          <p className={styles.lede}>
            Practical software engineering, milestone contracts, architecture
            decisions, and scope management for startup founders.
          </p>
        </header>

        <BlogGrid posts={posts} pageSize={6} />
      </div>
    </section>
  );
}
