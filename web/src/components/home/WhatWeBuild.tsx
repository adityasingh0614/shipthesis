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
const SERVICES: { name: string; line: ReactNode; visual?: ReactNode }[] = [
  {
    name: "Flutter mobile apps",
    visual: <CrossPlatformVisual />,
    line: <>Built in Flutter, live on both iOS and Android with one codebase. Offline-first, fast, and our primary recommendation for <strong>mobile MVPs</strong>.</>,
  },
  {
    name: "SaaS & web platforms",
    visual: <SaasVisual />,
    line: <>Full-stack Next.js &amp; Supabase web applications with accounts, billing, dashboards, and database design. Proven by the live platforms we run.</>,
  },
  {
    name: "Applied AI features",
    visual: <AiVisual />,
    line: <>Practical <strong>AI integrations</strong> that solve real problems: automated document parsing, data summaries, and workflow automation without gimmicks.</>,
  },
  {
    name: "Desktop & custom software",
    visual: <CustomVisual />,
    line: <>Specialized native Windows utilities (.NET / C#) and bespoke software built around your exact business operational needs.</>,
  },
  {
    name: "Native iOS & Android",
    visual: <NativeVisual />,
    line: "When your product requires deep device hardware access or platform-exclusive SDKs, native Swift and Kotlin builds are also available.",
  },
];

export function WhatWeBuild() {
  return (
    <section id="services" className={styles.section} aria-labelledby="build-title">
      <div className={styles.inner}>
        <div className={styles.head}>
          <h2 id="build-title" className={styles.title}>
            What we build
          </h2>
          <p className={styles.lede}>
            Everything your product needs to go live, built by one team.
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

        <Link href="/#process" className={styles.link}>
          See our weekly build process
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
