import Link from "next/link";
import type { ReactNode } from "react";
import styles from "./WhatWeBuild.module.css";
import { AiVisual } from "./visuals/AiVisual";
import { CrossPlatformVisual } from "./visuals/CrossPlatformVisual";
import { CustomVisual } from "./visuals/CustomVisual";
import { NativeVisual } from "./visuals/NativeVisual";
import { SaasVisual } from "./visuals/SaasVisual";
import { VisualsLoop } from "./visuals/shared";

// Copy: docs/copy/home.md §4 (facts from .agents/product-marketing.md).
const SERVICES: { name: string; line: string; visual?: ReactNode }[] = [
  {
    name: "Cross-platform apps",
    visual: <CrossPlatformVisual />,
    line: "Built once in Flutter, live on both the App Store and Play Store. Our default for most MVPs.",
  },
  {
    name: "Native iOS & Android",
    visual: <NativeVisual />,
    line: "When your app needs everything the phone can do, we build it natively in Swift and Kotlin.",
  },
  {
    name: "Custom solutions",
    visual: <CustomVisual />,
    line: "Bespoke products tailored to your unique business needs and goals.",
  },
  {
    name: "SaaS apps & platforms",
    visual: <SaasVisual />,
    line: "Customer-facing web apps with accounts, billing, dashboards and the systems behind them. It's the kind of product we build and run ourselves.",
  },
  {
    name: "AI features",
    visual: <AiVisual />,
    line: "AI added where it makes the product better: summaries, chat, automation and more. Not as a gimmick.",
  },
];

export function WhatWeBuild() {
  return (
    <section className={styles.section} aria-labelledby="build-title">
      <div className={styles.inner}>
        <div className={styles.head}>
          <h2 id="build-title" className={styles.title}>
            What we build
          </h2>
          <p className={styles.lede}>
            Everything your product needs to go live, from the app in the store
            to the systems behind it, built by one team.
          </p>
        </div>

        <VisualsLoop>
          <ul className={styles.grid}>
            {SERVICES.map((s) => (
              <li key={s.name} className={styles.cell}>
                <div className={styles.card}>
                  <div className={styles.visual}>
                    {s.visual ?? <span>{s.name} visual</span>}
                  </div>
                  <div className={styles.copy}>
                    <h3 className={styles.name}>{s.name}</h3>
                    <p className={styles.line}>{s.line}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </VisualsLoop>

        <Link href="/services" className={styles.link}>
          See how each one works
          <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
            <path
              d="M3 9h11m-4-4 4 4-4 4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
    </section>
  );
}
