import type { CSSProperties } from "react";
import Image from "next/image";
import type { CaseStudy } from "@/content/case-studies";
import styles from "./CaseOpening.module.css";

// Shared hero for every case study (approved design:
// web/public/_design/assess-yourself-v2.html). Text and a facts card on
// the left, the product on the right. The card's label and the status
// carry each project's own world (Assess Yourself: an exam admit card with
// a stamp; EHS: a session pass with an on-air badge; Poststeady: a proof
// sheet with crop marks and a dateline strip, web/public/_design/*.html).
const d = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

export function CaseOpening({ study }: { study: CaseStudy }) {
  const { title, joined, kicker, line, card, stamp, liveHref, hero } = study;
  const proof = stamp.variant === "dateline";
  const live = stamp.variant === "live" || proof;

  const status = liveHref ? (
    <a href={liveHref} target="_blank" rel="noreferrer">
      {stamp.status}
    </a>
  ) : (
    <strong>{stamp.status}</strong>
  );

  return (
    <header className={`${styles.opening} ${live ? styles.livePass : ""} ${proof ? styles.proof : ""}`}>
      <div className={styles.text}>
        <p className={`${styles.kicker} ${styles.rise}`}>{kicker}</p>
        <h1 className={`${styles.title} ${styles.rise}`} style={d(80)}>
          <span className={styles.titleAccent}>{title[0]}</span>
          {joined ? "" : " "}
          {title[1]}
        </h1>
        <p className={`${styles.line} ${styles.rise}`} style={d(160)}>
          {line}
        </p>

        <div className={`${styles.card} ${styles.rise}`} style={d(240)}>
          {proof && (
            <>
              <span className={styles.cmBl} aria-hidden="true" />
              <span className={styles.cmBr} aria-hidden="true" />
            </>
          )}
          {live ? (
            // EHS: a session pass, its status an on-air badge in the head.
            // Poststeady: the same slot, as a newspaper dateline.
            <p className={styles.cardHead}>
              <span>{card.label}</span>
              <span className={styles.onAir}>
                <i aria-hidden="true" />
                <span className={styles.visuallyHidden}>Status: </span>
                {status}
              </span>
            </p>
          ) : (
            <p className={styles.cardHead}>{card.label}</p>
          )}
          <dl className={styles.fields}>
            {card.fields.map(([label, value]) => (
              <div key={label} className={styles.field}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
          {card.foot && (
            <p className={styles.cardFoot}>
              <span>{card.foot[0]}</span>
              <span>{card.foot[1]}</span>
            </p>
          )}
          {!live && (
            <p className={styles.stamp}>
              <span className={styles.visuallyHidden}>Status: </span>
              {status}
              {stamp.note && <small>{stamp.note}</small>}
            </p>
          )}
        </div>
      </div>

      <div className={`${styles.shot} ${styles.rise}`} style={d(200)}>
        {"src" in hero ? (
          <Image
            src={hero.src}
            width={hero.width}
            height={hero.height}
            alt={hero.alt}
            sizes={live ? "(max-width: 959px) 90vw, 620px" : "(max-width: 959px) 420px, 560px"}
            priority
          />
        ) : (
          // A screen that isn't captured yet; the page is hidden on
          // production while any frame like this exists.
          <div className={styles.shotPh} role="img" aria-label={`Placeholder: ${hero.placeholder}`}>
            {hero.placeholder}
          </div>
        )}
      </div>
    </header>
  );
}
