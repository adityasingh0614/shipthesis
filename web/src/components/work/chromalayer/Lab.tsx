"use client";

import { useId, useState } from "react";
import { DIALS, PRESETS, feValues, type PresetName } from "./engine";
import { SceneDefs } from "./Scene";
import styles from "./ChromaLayer.module.css";

const SWATCH: Record<PresetName, string> = {
  natural: "#c0c0c0",
  vivid: "#c000c0",
  cinema: "#c0c000",
  gaming: "#00c000",
  night: "#c00000",
};
const NAMES = Object.keys(PRESETS) as PresetName[];

// The centrepiece: the app's own colour maths on a drawn scene, with the
// seven dials read out for the chosen preset. Labelled as an illustration.
export function Lab() {
  const uid = useId().replace(/:/g, "");
  const [preset, setPreset] = useState<PresetName>("vivid");
  const [x, setX] = useState(50);
  const p = PRESETS[preset];
  const filter = `cl-after-${uid}`;

  return (
    <div className={styles.lab}>
      <div>
        <div className={styles.compare} style={{ "--x": `${x}%` } as React.CSSProperties}>
          <svg viewBox="0 0 1600 849" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
            <SceneDefs uid={`${uid}a`} />
          </svg>
          <svg className={styles.after} viewBox="0 0 1600 849" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
            <defs>
              <filter id={filter} colorInterpolationFilters="sRGB">
                <feColorMatrix type="matrix" values={feValues(p)} />
              </filter>
            </defs>
            <g filter={`url(#${filter})`}>
              <SceneDefs uid={`${uid}b`} />
            </g>
          </svg>
          <span className={styles.divider} aria-hidden="true" />
          <span className={`${styles.tag} ${styles.tagA}`}>Before</span>
          <span className={`${styles.tag} ${styles.tagB}`}>
            After · {preset[0].toUpperCase() + preset.slice(1)}
          </span>
          <input
            type="range"
            min={0}
            max={100}
            value={x}
            onChange={(e) => setX(Number(e.target.value))}
            aria-label="Before and after divider. Use the arrow keys to move it."
          />
        </div>
        <div className={styles.chips} role="group" aria-label="Preset">
          {NAMES.map((n) => (
            <button
              key={n}
              type="button"
              className={styles.chip}
              aria-pressed={n === preset}
              style={{ "--sw": SWATCH[n] } as React.CSSProperties}
              onClick={() => setPreset(n)}
            >
              <i />
              {n[0].toUpperCase() + n.slice(1)}
            </button>
          ))}
        </div>
        <p className={styles.note}>
          A drawn test scene, rendered in your browser with the app&apos;s own
          colour maths and preset values. The app itself changes your whole
          screen.
        </p>
      </div>
      <ul className={styles.dials}>
        {DIALS.map((d) => (
          <li key={d.key}>
            <b>{d.name}</b>
            <output>{d.fmt(p[d.key])}</output>
            <span className={styles.meter}>
              <i style={{ "--p": `${((p[d.key] - d.lo) / (d.hi - d.lo)) * 100}%` } as React.CSSProperties} />
            </span>
            <small>{d.range}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}
