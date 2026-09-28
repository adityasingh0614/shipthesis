import type { CSSProperties } from "react";
import Image from "next/image";
import type { CaseStudy } from "@/content/case-studies";
import styles from "./CaseOpening.module.css";

// Shared hero for every case study (approved design:
// web/public/_design/assess-yourself-v2.html). Text and a facts card on
// the left, the product on the right. The card's label and the stamp
// carry each project's own world (Assess Yourself: an exam admit card).
const d = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

export function CaseOpening({ study }: { study: CaseStudy }) {
  const { title, kicker, line, card, stamp, liveHref, hero } = study;

  return (
    <header className={styles.opening}>
      <div className={styles.text}>
        <p className={`${styles.kicker} ${styles.rise}`}>{kicker}</p>
        <h1 className={`${styles.title} ${styles.rise}`} style={d(80)}>
          <span className={styles.titleAccent}>{title[0]}</span> {title[1]}
        </h1>
        <p className={`${styles.line} ${styles.rise}`} style={d(160)}>
          {line}
        </p>

        <div className={`${styles.card} ${styles.rise}`} style={d(240)}>
          <p className={styles.cardHead}>{card.label}</p>
          <dl className={styles.fields}>
            {card.fields.map(([label, value]) => (
              <div key={label} className={styles.field}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
          <p className={styles.stamp}>
            <span className={styles.visuallyHidden}>Status: </span>
            {liveHref ? (
              <a href={liveHref} target="_blank" rel="noreferrer">
                {stamp.status}
              </a>
            ) : (
              <strong>{stamp.status}</strong>
            )}
            {stamp.note && <small>{stamp.note}</small>}
          </p>
        </div>
      </div>

      <div className={`${styles.shot} ${styles.rise}`} style={d(200)}>
        <Image
          src={hero.src}
          width={hero.width}
          height={hero.height}
          alt={hero.alt}
          sizes="(max-width: 959px) 420px, 560px"
          priority
        />
      </div>
    </header>
  );
}
