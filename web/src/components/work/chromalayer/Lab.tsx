"use client";

import { useId, useState } from "react";
import { DIALS, PRESETS, feValues, type PresetName, type Profile } from "./engine";
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
  const [p, setP] = useState<Profile>({ ...PRESETS.vivid });
  const [x, setX] = useState(50);
  const [held, setHeld] = useState(false);
  // A preset button is lit only while the sliders still match it exactly.
  const preset = NAMES.find((n) => DIALS.every((d) => PRESETS[n][d.key] === p[d.key]));
  const filter = `cl-after-${uid}`;

  return (
    <div className={styles.lab}>
      <div>
        <div className={styles.compare} style={{ "--x": `${x}%` } as React.CSSProperties}>
          {/* Before: the scene unfiltered */}
          <svg viewBox="0 0 1600 849" aria-hidden="true">
            <defs>
              <filter id={filter} colorInterpolationFilters="sRGB">
                <feColorMatrix type="matrix" values={feValues(p)} />
              </filter>
            </defs>
            <image href="/logo/scene-source.jpg" width="1600" height="849" />
          </svg>
          {/* After: same scene with the colour filter applied, clipped to the right of the divider */}
          <svg
            viewBox="0 0 1600 849"
            className={styles.after}
            style={held ? { clipPath: "inset(0 0 0 100%)" } : undefined}
            aria-label={`After · ${preset ? preset[0].toUpperCase() + preset.slice(1) : "Custom"}`}
          >
            <image href="/logo/scene-source.jpg" width="1600" height="849" filter={`url(#${filter})`} />
          </svg>
          <span className={styles.divider} aria-hidden="true" />
          <span className={`${styles.tag} ${styles.tagA}`}>Before</span>
          <span className={`${styles.tag} ${styles.tagB}`}>
            {held ? "Original" : `After \u00b7 ${preset ? preset[0].toUpperCase() + preset.slice(1) : "Custom"}`}
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
              onClick={() => setP({ ...PRESETS[n] })}
            >
              <i />
              {n[0].toUpperCase() + n.slice(1)}
            </button>
          ))}
        </div>
        <button
          type="button"
          className={styles.hold}
          aria-pressed={held}
          onPointerDown={() => setHeld(true)}
          onPointerUp={() => setHeld(false)}
          onPointerLeave={() => setHeld(false)}
          onPointerCancel={() => setHeld(false)}
          onBlur={() => setHeld(false)}
          onKeyDown={(e) => (e.key === " " || e.key === "Enter") && setHeld(true)}
          onKeyUp={(e) => (e.key === " " || e.key === "Enter") && setHeld(false)}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M1.5 12S5.5 5 12 5s10.5 7 10.5 7-4 7-10.5 7S1.5 12 1.5 12Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
            <circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" strokeWidth="2" />
          </svg>
          Hold to compare
        </button>
        <p className={styles.note}>
          A drawn test scene, rendered in your browser with the app&apos;s own
          colour maths and preset values. Move any dial to make your own. The
          app itself changes your whole screen.
        </p>
      </div>
      <ul className={styles.dials}>
        {DIALS.map((d) => (
          <li key={d.key}>
            <label htmlFor={`${uid}-${d.key}`}>{d.name}</label>
            <output htmlFor={`${uid}-${d.key}`}>{d.fmt(p[d.key])}</output>
            <input
              id={`${uid}-${d.key}`}
              type="range"
              min={d.lo}
              max={d.hi}
              step={d.key === "temp" ? 100 : 1}
              value={p[d.key]}
              onChange={(e) => setP({ ...p, [d.key]: Number(e.target.value) })}
              style={{ "--p": `${((p[d.key] - d.lo) / (d.hi - d.lo)) * 100}%` } as React.CSSProperties}
            />
            <small>{d.range}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}
