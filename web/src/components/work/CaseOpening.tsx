import type { CSSProperties } from "react";
import Image from "next/image";
import type { CaseStudy } from "@/content/case-studies";
import styles from "./CaseOpening.module.css";

// Shared hero for every case study (approved design:
// web/public/_design/assess-yourself-v2.html). Text and a facts card on
// the left, the product on the right. The card's label and the status
// carry each project's own world (Assess Yourself: an exam admit card with
// a stamp; EHS: a session pass with an on-air badge; Poststeady: a proof
// sheet with crop marks and a dateline strip; ChromaLayer: a test pattern
// with an on-screen-display readout, web/public/_design/*.html).
const d = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

export function CaseOpening({ study }: { study: CaseStudy }) {
  const { title, joined, line, card, stamp, liveHref, hero, heroCaption } = study;
  const proof = stamp.variant === "dateline";
  const osd = stamp.variant === "osd";
  const admit = stamp.variant === "admit";
  const live = stamp.variant === "live" || proof || osd || admit;

  const status = liveHref ? (
    <a href={liveHref} target="_blank" rel="noreferrer">
      {stamp.status}
    </a>
  ) : (
    <strong>{stamp.status}</strong>
  );

  return (
    <header className={`${styles.opening} ${live ? styles.livePass : ""} ${proof ? styles.proof : ""} ${osd ? styles.osd : ""} ${admit ? styles.admit : ""}`}>
      <div className={styles.text}>
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
              <span className={styles.cardLabel}>{card.label}</span>
              <span className={`${styles.onAir} ${osd ? styles.osdBadge : ""}`}>
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
          {card.more && (
            <a className={styles.more} href="#brief-title">
              {card.more.map(([k]) => k).join(" and ")}: see the brief <span aria-hidden="true">{"\u2193"}</span>
            </a>
          )}
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

      <div className={`${styles.shot} ${osd ? styles.bench : ""} ${styles.rise}`} style={d(200)}>
        {"src" in hero ? (
          <Image
            src={hero.src}
            width={hero.width}
            height={hero.height}
            alt={hero.alt}
            sizes="100vw"
            priority
          />
        ) : (
          // A screen that isn't captured yet; the page is hidden on
          // production while any frame like this exists.
          <div className={styles.shotPh} role="img" aria-label={`Placeholder: ${hero.placeholder}`}>
            {hero.placeholder}
          </div>
        )}
        {heroCaption && <p className={styles.benchCaption}>{heroCaption}</p>}
      </div>
    </header>
  );
}
