import type { ReactNode } from "react";
import styles from "./WhatWeBuild.module.css";
import { CrossPlatformVisual } from "./visuals/CrossPlatformVisual";
import { SaasVisual } from "./visuals/SaasVisual";
import { VisualsLoop } from "./visuals/shared";
import { BookingCta } from "@/components/BookingCta";

const SERVICES: { name: string; line: ReactNode; visual?: ReactNode }[] = [
  {
    name: "Flutter mobile apps",
    visual: <CrossPlatformVisual />,
    line: (
      <>
        Built in Flutter, live on both iOS and Android with one codebase. Offline-first, fast, and our primary recommendation for <strong>mobile MVPs</strong>.
      </>
    ),
  },
  {
    name: "SaaS & web platforms",
    visual: <SaasVisual />,
    line: (
      <>
        Full-stack Next.js &amp; Supabase web applications with accounts, billing, dashboards, and database design. Proven by the live platforms we run.
      </>
    ),
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
            Everything your product needs to go live.
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

        <p className={styles.alsoAvailable}>
          Also available: AI features and custom solutions.
        </p>

        <div className={styles.bottomCta}>
          <BookingCta
            location="services"
            variant="text"
            prefix="Not sure what you need? "
          />
        </div>
      </div>
    </section>
  );
}
