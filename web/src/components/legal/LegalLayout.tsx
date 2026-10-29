"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { BookingCta } from "@/components/BookingCta";
import styles from "./LegalPage.module.css";

export interface TocItem {
  id: string;
  num: string;
  title: string;
}

interface LegalLayoutProps {
  currentDoc: "terms" | "privacy";
  title: string;
  badgeText?: string;
  lede: string;
  lastUpdated: string;
  effectiveDate: string;
  toc: TocItem[];
  children: React.ReactNode;
}

export function LegalLayout({
  currentDoc,
  title,
  badgeText = "Legal & Policies",
  lede,
  lastUpdated,
  effectiveDate,
  toc,
  children,
}: LegalLayoutProps) {
  const [activeId, setActiveId] = useState<string>(toc[0]?.id || "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Find visible sections
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          // Set the first visible section as active
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: "-80px 0px -60% 0px",
        threshold: 0,
      }
    );

    toc.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [toc]);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <nav aria-label="Breadcrumb" className={styles.breadcrumbs}>
          <Link href="/" className={styles.breadcrumbLink}>
            Ship Thesis
          </Link>
          <span className={styles.breadcrumbSep} aria-hidden="true">
            /
          </span>
          <span className={styles.breadcrumbSep}>Legal</span>
          <span className={styles.breadcrumbSep} aria-hidden="true">
            /
          </span>
          <span aria-current="page">{title}</span>
        </nav>

        <div className={styles.badge}>
          <span>{badgeText}</span>
        </div>

        <h1 className={styles.title}>{title}</h1>
        <p className={styles.lede}>{lede}</p>

        <div className={styles.metaRow}>
          <span>Last updated: {lastUpdated}</span>
          <span aria-hidden="true">·</span>
          <span>Effective: {effectiveDate}</span>
          <span aria-hidden="true">·</span>
          <span>Ship Thesis Studio</span>
        </div>

        <div className={styles.switcher} role="tablist" aria-label="Legal documents">
          <Link
            href="/terms"
            role="tab"
            aria-selected={currentDoc === "terms"}
            className={`${styles.switchTab} ${
              currentDoc === "terms" ? styles.switchTabActive : ""
            }`}
          >
            Terms of Service
          </Link>
          <Link
            href="/privacy"
            role="tab"
            aria-selected={currentDoc === "privacy"}
            className={`${styles.switchTab} ${
              currentDoc === "privacy" ? styles.switchTabActive : ""
            }`}
          >
            Privacy Policy
          </Link>
        </div>
      </header>

      {/* Mobile Table of Contents Accordion */}
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
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </summary>
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
      </details>

      <div className={styles.layout}>
        {/* Desktop Sticky Sidebar */}
        <aside className={styles.sidebar} aria-label="Page navigation">
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

          <div className={styles.helpCard}>
            <h3 className={styles.helpTitle}>Have a legal question?</h3>
            <p className={styles.helpDesc}>
              We aim for plain English, transparent partnerships, and zero hidden clauses.
            </p>
            <a href="mailto:hello@shipthesis.com" className={styles.helpEmail}>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </svg>
              hello@shipthesis.com
            </a>
          </div>
        </aside>

        {/* Main Document Content */}
        <main className={styles.content}>{children}</main>
      </div>

      {/* Document Bottom Footer Card */}
      <div className={styles.docFooter}>
        <div className={styles.docFooterText}>
          <h3>Need a custom NDA or bespoke agreement?</h3>
          <p>
            For enterprise engagements or regulated domains, we are happy to review your standard NDA prior to discovery.
          </p>
        </div>
        <a
          href="https://cal.com/aditya-kumar-singh/20min"
          data-cal-link="aditya-kumar-singh/20min"
          data-cal-config='{"layout":"month_view"}'
          className="btn"
        >
          Book a free 20-minute call
        </a>
      </div>
    </div>
  );
}
