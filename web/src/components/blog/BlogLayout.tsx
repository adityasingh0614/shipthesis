"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { BookingCta } from "@/components/BookingCta";
import type { TocItem } from "@/lib/blog-data";
import styles from "./BlogLayout.module.css";

interface BlogLayoutProps {
  title: string;
  category: string;
  datePublished: string;
  readTime: string;
  heroImage: string;
  toc: TocItem[];
  children: React.ReactNode;
}

export function BlogLayout({
  title,
  category,
  datePublished,
  readTime,
  heroImage,
  toc,
  children,
}: BlogLayoutProps) {
  const [activeId, setActiveId] = useState<string>(toc[0]?.id || "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: "-90px 0px -55% 0px",
        threshold: 0,
      }
    );

    toc.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [toc]);

  const formattedDate = new Date(datePublished).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className={styles.container}>
      {/* Header & Breadcrumbs */}
      <header className={styles.header}>
        <nav aria-label="Breadcrumb" className={styles.breadcrumbs}>
          <Link href="/" className={styles.breadcrumbLink}>
            Ship Thesis
          </Link>
          <span className={styles.breadcrumbSep} aria-hidden="true">
            /
          </span>
          <Link href="/blog" className={styles.breadcrumbLink}>
            Blog
          </Link>
          <span className={styles.breadcrumbSep} aria-hidden="true">
            /
          </span>
          <span className={styles.categoryName}>{category}</span>
        </nav>

        <h1 className={styles.title}>{title}</h1>

        <div className={styles.metaRow}>
          <span>Published: {formattedDate}</span>
          <span aria-hidden="true">·</span>
          <span>{readTime}</span>
          <span aria-hidden="true">·</span>
          <span>Ship Thesis Studio</span>
        </div>
      </header>

      {/* Mobile Table of Contents Accordion */}
      {toc.length > 0 && (
        <details className={styles.mobileToc}>
          <summary>
            <span>Table of Contents ({toc.length} sections)</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </summary>
          <ul className={styles.mobileTocList}>
            {toc.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`${styles.tocLink} ${
                    activeId === item.id ? styles.tocLinkActive : ""
                  }`}
                >
                  <span className={styles.tocNum}>{item.num}</span>
                  <span>{item.title}</span>
                </a>
              </li>
            ))}
          </ul>
        </details>
      )}

      {/* 2-Column Grid Layout (like TOS page) */}
      <div className={styles.layout}>
        {/* Desktop Sticky Sidebar */}
        <aside className={styles.sidebar} aria-label="Article navigation">
          {toc.length > 0 && (
            <nav className={styles.tocCard} aria-label="Table of contents">
              <h2 className={styles.tocTitle}>Table of contents</h2>
              <ul className={styles.tocList}>
                {toc.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className={`${styles.tocLink} ${
                        activeId === item.id ? styles.tocLinkActive : ""
                      }`}
                    >
                      <span className={styles.tocNum}>{item.num}</span>
                      <span>{item.title}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          )}

          <div className={styles.sidebarCta}>
            <h3 className={styles.sidebarCtaTitle}>Discuss Your Build</h3>
            <p className={styles.sidebarCtaText}>
              20-minute architecture review. Fixed milestone pricing, working software every week.
            </p>
            <BookingCta
              location="blog_sidebar"
              variant="button"
              className={styles.sidebarBtn}
            >
              Book an assessment
            </BookingCta>
          </div>
        </aside>

        {/* Main Article Content */}
        <article className={styles.contentColumn}>
          {heroImage && (
            <div className={styles.heroImage}>
              <img
                src={heroImage}
                alt={title}
                width={1600}
                height={900}
                fetchPriority="high"
              />
            </div>
          )}

          <div className={styles.body}>{children}</div>

          {/* End-of-article Conversion Section */}
          <section className={styles.endArticleCta} aria-label="Build your MVP">
            <div className={styles.endArticleCtaInner}>
              <span className={styles.endArticleCtaTag}>NEXT STEP</span>
              <h3 className={styles.endArticleCtaTitle}>
                Build your MVP with predictable milestones &amp; verified code.
              </h3>
              <p className={styles.endArticleCtaText}>
                We talk through your core workflows, establish transparent 30/40/30 release gates, and deliver working builds to your device every week.
              </p>
              <div className={styles.endArticleCtaAction}>
                <BookingCta
                  location="blog_bottom"
                  variant="button"
                  className={styles.ctaButton}
                >
                  Book a free 20-minute call
                </BookingCta>
              </div>
            </div>
          </section>

          <div className={styles.footerNav}>
            <Link href="/blog" className={styles.backLink}>
              ← Back to all posts
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
}
