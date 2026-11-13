"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { BlogPostMeta } from "@/lib/blog-data";
import styles from "./BlogGrid.module.css";

interface BlogGridProps {
  posts: BlogPostMeta[];
  pageSize?: number;
}

export function BlogGrid({ posts, pageSize = 6 }: BlogGridProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [mounted, setMounted] = useState<boolean>(false);

  const totalPages = Math.max(1, Math.ceil(posts.length / pageSize));

  // Sync with ?page= query parameter on initial mount and back/forward navigation
  useEffect(() => {
    setMounted(true);
    const params = new URLSearchParams(window.location.search);
    const pageParam = parseInt(params.get("page") || "1", 10);
    if (!isNaN(pageParam) && pageParam >= 1 && pageParam <= totalPages) {
      setCurrentPage(pageParam);
    }

    const onPopState = () => {
      const p = new URLSearchParams(window.location.search);
      const popPage = parseInt(p.get("page") || "1", 10);
      if (!isNaN(popPage) && popPage >= 1 && popPage <= totalPages) {
        setCurrentPage(popPage);
      }
    };

    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, [totalPages]);

  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages || newPage === currentPage) return;
    setCurrentPage(newPage);

    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      if (newPage === 1) {
        url.searchParams.delete("page");
      } else {
        url.searchParams.set("page", String(newPage));
      }
      window.history.pushState(null, "", url.toString());

      if (containerRef.current) {
        const top =
          containerRef.current.getBoundingClientRect().top +
          window.scrollY -
          80;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }
  };

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, posts.length);
  const displayedPosts = posts.slice(startIndex, endIndex);

  return (
    <div ref={containerRef} className={styles.container}>
      <div className={styles.grid}>
        {displayedPosts.map((post, idx) => {
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
                    priority={idx === 0 && currentPage === 1}
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

      {totalPages > 1 && (
        <nav
          className={styles.paginationWrapper}
          aria-label="Blog post pagination"
        >
          <div className={styles.paginationMeta}>
            Showing {startIndex + 1}–{endIndex} of {posts.length} articles
          </div>

          <div className={styles.paginationControls}>
            <button
              type="button"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={styles.navBtn}
              aria-label="Go to previous page"
            >
              ← Prev
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => {
              const isActive = pageNum === currentPage;
              return (
                <button
                  key={pageNum}
                  type="button"
                  onClick={() => handlePageChange(pageNum)}
                  className={`${styles.pageBtn} ${
                    isActive ? styles.pageBtnActive : ""
                  }`}
                  aria-label={`Go to page ${pageNum}`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {pageNum}
                </button>
              );
            })}

            <button
              type="button"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={styles.navBtn}
              aria-label="Go to next page"
            >
              Next →
            </button>
          </div>
        </nav>
      )}
    </div>
  );
}

