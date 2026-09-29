"use client";

import { useEffect, useId, useRef, useState } from "react";
import { IDENTITY, PRESETS, feValues } from "./engine";
import { SceneDefs } from "./Scene";
import styles from "./ChromaLayer.module.css";

// The nine planned re-checks after every sign-in, unlock, wake and display
// change (ChromaLayer.Platform.Windows/WindowsEventMonitor.cs).
const CHECKPOINTS = [0, 0.25, 1, 2.5, 5, 10, 15, 20, 25];
const MINOR = new Set([0.25, 1, 2.5]);

const STEPS = [
  { n: "0 s", title: "You sign in", body: "Your colours go on the moment the desktop appears, then get checked again a quarter-second and one second later.", on: true, hit: [0, 0.25, 1], osd: "● VIVID APPLIED · 0 s" },
  { n: "15-25 s", title: "Windows quietly resets them", body: "Some time between 15 and 25 seconds after you sign in, Windows rebuilds part of its display pipeline and wipes the colours. Most tools lose here.", on: false, hit: [0, 0.25, 1, 2.5, 5, 10, 15], osd: "● COLOURS RESET BY WINDOWS · ~18 s" },
  { n: "Every ½ s", title: "The app notices", body: "For the first 30 seconds it checks twice a second whether the screen still shows your settings. After that, every 5 seconds.", on: false, hit: [0, 0.25, 1, 2.5, 5, 10, 15, 20], osd: "● MISMATCH FOUND · RE-APPLYING" },
  { n: "25 s", title: "Colours back, and they hold", body: "Nine planned re-checks cover the whole window, after every sign-in, unlock, wake from sleep and display change.", on: true, hit: CHECKPOINTS, osd: "● VIVID APPLIED · HOLDING · 25 s" },
];

// Pinned test screen and a 0-25 s ruler; the step crossing the upper half
// decides whether the screen shows the colours or the reset, and lights the
// checkpoints reached so far. Same scrollspy as Wizard/Go Live.
export function Fight() {
  const uid = useId().replace(/:/g, "");
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLLIElement | null)[]>([]);
  const filter = `cl-scr-${uid}`;

  useEffect(() => {
    const seen = new Set<number>();
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          const i = Number((e.target as HTMLElement).dataset.i);
          if (e.isIntersecting) seen.add(i);
          else seen.delete(i);
        }
        if (seen.size) setActive(Math.max(...seen));
      },
      { rootMargin: "0px 0px -45% 0px", threshold: 0 },
    );
    refs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  const s = STEPS[active];

  return (
    <div className={styles.fight}>
      <div className={styles.pin}>
        <div className={`${styles.screen} ${s.on ? "" : styles.lost}`} role="img" aria-label={s.osd.replace("● ", "")}>
          <svg viewBox="0 0 1600 849" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
            <defs>
              <filter id={filter} colorInterpolationFilters="sRGB">
                <feColorMatrix type="matrix" values={s.on ? feValues(PRESETS.vivid) : IDENTITY} />
              </filter>
            </defs>
            <g filter={`url(#${filter})`}>
              <SceneDefs uid={uid} />
            </g>
          </svg>
          <span className={styles.osdLine}>{s.osd}</span>
        </div>
        <div className={styles.ruler} aria-hidden="true">
          {CHECKPOINTS.map((t) => (
            <span
              key={t}
              className={`${styles.tick} ${s.hit.includes(t) ? styles.hit : ""} ${MINOR.has(t) ? styles.minor : ""}`}
              style={{ left: `${(t / 25) * 100}%` }}
            >
              <em>{t}s</em>
            </span>
          ))}
        </div>
      </div>
      <ol className={styles.steps}>
        {STEPS.map((st, i) => (
          <li
            key={st.n}
            ref={(el) => {
              refs.current[i] = el;
            }}
            data-i={i}
            className={`${styles.step} ${i === active ? styles.on : ""}`}
          >
            <span className={styles.sn}>{st.n}</span>
            <div>
              <h3>{st.title}</h3>
              <p>{st.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
