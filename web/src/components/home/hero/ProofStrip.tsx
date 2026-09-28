import Link from "next/link";
import type { CSSProperties } from "react";
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
    href: "/work/poststeady",
  },
  {
    name: "EHS Training Platform",
    mark: "EHS",
    color: "#00674C",
    type: "Web platform",
    status: "Live",
    href: "/work/safety-training-platform",
  },
  {
    name: "ChromaLayer",
    mark: "C",
    color: "#030d26",
    type: "Windows app",
    status: "Live",
    href: "/work/chromalayer",
  },
  {
    name: "Assess Yourself",
    mark: "AY",
    color: "#283593",
    type: "Mobile app",
    status: "Delivered, launching soon",
    href: "/work/assess-yourself",
  },
];

export function ProofStrip() {
  return (
    <div className={styles.strip}>
      <p className={styles.label}>Built &amp; shipped by Ship Thesis</p>
      <ul className={styles.row}>
        {APPS.map((a) => {
          const tip = `tip-${a.mark}`;
          return (
            <li key={a.name}>
              <Link
                href={a.href}
                className={styles.tile}
                aria-describedby={tip}
              >
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
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
