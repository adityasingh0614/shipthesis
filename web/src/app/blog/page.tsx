import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
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

        <div className={styles.grid}>
          {posts.map((post, idx) => {
            const formattedDate = new Date(post.datePublished).toLocaleDateString(
              "en-US",
              { month: "short", day: "numeric", year: "numeric" }
            );

            return (
              <article key={post.slug} className={styles.card}>
                <Link href={`/blog/${post.slug}`} className={styles.cardLink}>
                  <div className={styles.cardCover}>
                    <Image
                      src={post.heroImage}
                      alt={post.title}
                      width={1200}
                      height={675}
                      priority={idx === 0}
                      sizes="(max-width: 768px) 100vw, 720px"
                    />
                  </div>
                  <div className={styles.cardBody}>
                    <div className={styles.metaRow}>
                      <span className={styles.category}>{post.category}</span>
                      <span className={styles.metaDot} aria-hidden="true">
                        ·
                      </span>
                      <span className={styles.date}>{formattedDate}</span>
                      <span className={styles.metaDot} aria-hidden="true">
                        ·
                      </span>
                      <span>{post.readTime}</span>
                    </div>
                    <h2 className={styles.postTitle}>{post.title}</h2>
                    <p className={styles.excerpt}>{post.description}</p>
                  </div>
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
