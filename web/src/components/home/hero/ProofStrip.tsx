import Link from "next/link";
import { caseStudyHref } from "@/content/case-studies";
import type { CSSProperties, ReactNode } from "react";
import styles from "./ProofStrip.module.css";

// Facts: .agents/product-marketing.md; colours match the Our work cards.
// Monogram tiles until the real app icons arrive.
const APPS = [
  {
    name: "Poststeady",
    mark: "P",
    color: "#1A5BFA",
    type: "SaaS",
    status: "Live",
    slug: "poststeady",
  },
  {
    name: "EHS Training Platform",
    mark: "EHS",
    color: "#00674C",
    type: "Web platform",
    status: "Live",
    slug: "safety-training-platform",
  },
  {
    name: "ChromaLayer",
    mark: "C",
    color: "#1c2450",
    type: "Windows app",
    status: "Live",
    slug: "chromalayer",
  },
  {
    name: "Assess Yourself",
    mark: "AY",
    color: "#283593",
    type: "Mobile app",
    status: "Delivered, launching soon",
    slug: "assess-yourself",
  },
];

/** A link when the case study exists; otherwise a focusable tile so the
    type and status tip still shows on hover and keyboard focus. */
function Tile({
  href,
  tip,
  children,
}: {
  href?: string;
  tip: string;
  children: ReactNode;
}) {
  return href ? (
    <Link href={href} className={styles.tile} aria-describedby={tip}>
      {children}
    </Link>
  ) : (
    <span className={styles.tile} tabIndex={0} aria-describedby={tip}>
      {children}
    </span>
  );
}

export function ProofStrip() {
  return (
    <div className={styles.strip}>
      <p className={styles.label}>Built &amp; shipped by Ship Thesis</p>
      <ul className={styles.row}>
        {APPS.map((a) => {
          const tip = `tip-${a.mark}`;
          const href = caseStudyHref(a.slug);
          return (
            <li key={a.name}>
              <Tile href={href} tip={tip}>
                <span
                  className={styles.icon}
                  style={{ "--app": a.color } as CSSProperties}
                  aria-hidden="true"
                >
                  {a.mark}
                </span>
                <span className={styles.name}>{a.name}</span>
                <span id={tip} role="tooltip" className={styles.tip}>
                  {a.type} · {a.status}
                </span>
              </Tile>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
