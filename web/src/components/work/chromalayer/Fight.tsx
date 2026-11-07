"use client";

import { useEffect, useId, useRef, useState, useCallback } from "react";
import { IDENTITY, PRESETS, feValues } from "./engine";
import { SceneDefs } from "./Scene";
import styles from "./ChromaLayer.module.css";

// The nine planned re-checks after every sign-in, unlock, wake and display
// change (ChromaLayer.Platform.Windows/WindowsEventMonitor.cs).
const CHECKPOINTS = [0, 0.25, 1, 2.5, 5, 10, 15, 20, 25];
const MINOR = new Set([0.25, 1, 2.5]);

interface StepData {
  id: string;
  n: string;
  badge: string;
  title: string;
  body: string;
  on: boolean;
  hit: number[];
  timeVal: number;
  osd: string;
  diag: string;
  state: "applied" | "reset" | "recovering" | "secured";
}

const STEPS: StepData[] = [
  {
    id: "step-0",
    n: "0 s",
    badge: "0s · BOOT",
    title: "You sign in",
    body: "Your colours go on the moment the desktop appears, then get checked again a quarter-second and one second later.",
    on: true,
    hit: [0, 0.25, 1],
    timeVal: 0,
    osd: "● VIVID APPLIED · 0 s",
    diag: "Desktop Shell Mounted · Applying ChromaLayer Profile",
    state: "applied",
  },
  {
    id: "step-1",
    n: "15-25 s",
    badge: "~18s · RESET",
    title: "Windows quietly resets them",
    body: "Some time between 15 and 25 seconds after you sign in, Windows rebuilds part of its display pipeline and wipes the colours. Most tools lose here.",
    on: false,
    hit: [0, 0.25, 1, 2.5, 5, 10, 15],
    timeVal: 18,
    osd: "⚠ COLOURS RESET BY WINDOWS · ~18 s",
    diag: "DWM Pipeline Rebuilt · LUT Cleared to System Default",
    state: "reset",
  },
  {
    id: "step-2",
    n: "Every ½ s",
    badge: "20s · WATCHDOG",
    title: "The app notices",
    body: "For the first 30 seconds it checks twice a second whether the screen still shows your settings. After that, every 5 seconds.",
    on: false,
    hit: [0, 0.25, 1, 2.5, 5, 10, 15, 20],
    timeVal: 20,
    osd: "⟳ MISMATCH FOUND · RE-APPLYING",
    diag: "Watchdog Thread Polling (500ms) · Calibration Matrix Diff > 0",
    state: "recovering",
  },
  {
    id: "step-3",
    n: "25 s",
    badge: "25s · SECURED",
    title: "Colours back, and they hold",
    body: "Nine planned re-checks cover the whole window, after every sign-in, unlock, wake from sleep and display change.",
    on: true,
    hit: CHECKPOINTS,
    timeVal: 25,
    osd: "✓ VIVID APPLIED · HOLDING · 25 s",
    diag: "9/9 Checkpoints Verified · Profile Locked & Holding",
    state: "secured",
  },
];

export function Fight() {
  const uid = useId().replace(/:/g, "");
  const [active, setActive] = useState(0);
  const [isSimulating, setIsSimulating] = useState(false);
  const listRef = useRef<HTMLOListElement | null>(null);
  const isClickingRef = useRef(false);
  const simTimerRef = useRef<NodeJS.Timeout | null>(null);
  const filter = `cl-scr-${uid}`;

  // Robust ScrollSpy that guarantees the last step triggers cleanly at the bottom
  useEffect(() => {
    let raf = 0;

    const update = () => {
      raf = 0;
      if (isClickingRef.current || isSimulating) return;

      const list = listRef.current;
      if (!list) return;

      const items = Array.from(list.children) as HTMLElement[];
      if (!items.length) return;

      const triggerLine = window.innerHeight * 0.48;
      const listRect = list.getBoundingClientRect();

      // If user reached the bottom region of the step container, activate the final step
      if (listRect.bottom <= window.innerHeight * 0.8) {
        setActive(items.length - 1);
        return;
      }

      // Check which step's top has crossed the triggerLine
      let activeIdx = 0;
      items.forEach((item, i) => {
        const rect = item.getBoundingClientRect();
        if (rect.top <= triggerLine) {
          activeIdx = i;
        }
      });

      setActive(activeIdx);
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [isSimulating]);

  // Clean step navigation on click with programmatic scroll locking
  const handleStepClick = useCallback((idx: number) => {
    setIsSimulating(false);
    if (simTimerRef.current) clearTimeout(simTimerRef.current);

    setActive(idx);
    isClickingRef.current = true;

    const list = listRef.current;
    if (list) {
      const item = list.children[idx] as HTMLElement;
      if (item) {
        item.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }

    setTimeout(() => {
      isClickingRef.current = false;
    }, 600);
  }, []);

  // Jump by clicking checkpoint tick
  const handleTickClick = useCallback((tickTime: number) => {
    if (tickTime <= 1) handleStepClick(0);
    else if (tickTime <= 18) handleStepClick(1);
    else if (tickTime <= 20) handleStepClick(2);
    else handleStepClick(3);
  }, [handleStepClick]);

  // Simulation runner: plays through 0s -> 18s -> 20s -> 25s
  const runSimulation = useCallback(() => {
    if (isSimulating) {
      setIsSimulating(false);
      if (simTimerRef.current) clearTimeout(simTimerRef.current);
      return;
    }

    setIsSimulating(true);
    setActive(0);

    // Timeline pacing: 0s -> 18s after 1.8s -> 20s after 1.8s -> 25s after 1.6s
    simTimerRef.current = setTimeout(() => {
      setActive(1);
      simTimerRef.current = setTimeout(() => {
        setActive(2);
        simTimerRef.current = setTimeout(() => {
          setActive(3);
          simTimerRef.current = setTimeout(() => {
            setIsSimulating(false);
          }, 2400);
        }, 1800);
      }, 1900);
    }, 1700);
  }, [isSimulating]);

  useEffect(() => {
    return () => {
      if (simTimerRef.current) clearTimeout(simTimerRef.current);
    };
  }, []);

  const s = STEPS[active];
  const progressPercent = (s.timeVal / 25) * 100;

  return (
    <div className={styles.fight}>
      {/* Pinned Hardware Display & Timeline Controller */}
      <div className={styles.pin}>
        {/* Quick Simulator Bar */}
        <div className={styles.simControls}>
          <div className={styles.simMeta}>
            <span className={styles.simLabel}>25s Sign-in Cycle</span>
            <span className={styles.simActiveTime}>{s.n}</span>
          </div>

          <button
            type="button"
            className={`${styles.simBtn} ${isSimulating ? styles.simBtnActive : ""}`}
            onClick={runSimulation}
            title={isSimulating ? "Pause boot simulation" : "Auto-play 25s sign-in cycle"}
            aria-label={isSimulating ? "Pause simulation" : "Play boot cycle simulation"}
          >
            <span className={styles.simIcon} aria-hidden="true">
              {isSimulating ? "⏸" : "▶"}
            </span>
            <span>{isSimulating ? "Simulating..." : "Simulate Cycle"}</span>
          </button>
        </div>

        {/* Double-Bezel Precision Laptop Chassis */}
        <div className={styles.chassis}>
          {/* Subtle Top Bezel Webcam Notch */}
          <div className={styles.chassisTopNotch} aria-hidden="true">
            <span className={styles.webcamLens} />
          </div>

          <div
            className={`${styles.screen} ${s.on ? "" : styles.lost} ${
              s.state === "recovering" ? styles.recovering : ""
            } ${s.state === "secured" ? styles.secured : ""}`}
            role="img"
            aria-label={s.osd.replace("● ", "")}
          >
            {/* Top Display HUD */}
            <div className={styles.displayHudTop} aria-hidden="true">
              <span className={styles.hudBadge}>
                <span className={styles.hudDot} />
                Windows 11 DWM
              </span>
              <span className={styles.hudSpec}>2560×1600 · 120Hz · BT.709</span>
            </div>

            {/* Test Image SVG Scene with Dynamic Color Matrix Filter */}
            <svg
              className={styles.screenSvg}
              viewBox="0 0 1600 849"
              preserveAspectRatio="xMidYMid slice"
              aria-hidden="true"
            >
              <defs>
                <filter id={filter} colorInterpolationFilters="sRGB">
                  <feColorMatrix
                    type="matrix"
                    values={s.on ? feValues(PRESETS.vivid) : IDENTITY}
                  />
                </filter>
              </defs>
              <g filter={`url(#${filter})`}>
                <SceneDefs uid={uid} />
              </g>
            </svg>

            {/* Visual Overlays for State Feedback */}
            {!s.on && (
              <div
                className={`${styles.resetOverlay} ${
                  s.state === "reset" ? styles.flickerAnim : ""
                }`}
                aria-hidden="true"
              />
            )}
            {s.state === "recovering" && (
              <div className={styles.scanline} aria-hidden="true" />
            )}
            {s.state === "secured" && (
              <div className={styles.securedFlash} aria-hidden="true" />
            )}

            {/* Bottom Display HUD */}
            <div className={styles.displayHudBottom}>
              <div
                className={`${styles.osdBadge} ${
                  !s.on ? styles.osdLost : styles.osdOk
                } ${s.state === "recovering" ? styles.osdWatchdog : ""}`}
              >
                {s.osd}
              </div>
              <div className={styles.diagTicker} aria-hidden="true">
                {s.diag}
              </div>
            </div>
          </div>
        </div>

        {/* 0-25s Precision Timeline Scrubber */}
        <div className={styles.rulerWrap}>
          <div className={styles.rulerTrack} aria-hidden="true">
            {/* Active progress fill */}
            <div
              className={`${styles.rulerFill} ${
                !s.on ? styles.rulerFillWarning : ""
              }`}
              style={{ width: `${progressPercent}%` }}
            />
            {/* Moving Playhead Marker */}
            <div
              className={styles.playhead}
              style={{ left: `${progressPercent}%` }}
            >
              <span className={styles.playheadDiamond} />
            </div>
          </div>

          <div className={styles.ruler} role="group" aria-label="Timeline checkpoints 0 to 25 seconds">
            {CHECKPOINTS.map((t) => {
              const isHit = s.hit.includes(t);
              const isMinor = MINOR.has(t);
              const isCurrent = s.timeVal >= t;
              return (
                <button
                  type="button"
                  key={t}
                  onClick={() => handleTickClick(t)}
                  className={`${styles.tick} ${isHit ? styles.hit : ""} ${
                    isMinor ? styles.minor : ""
                  } ${isCurrent ? styles.tickCurrent : ""}`}
                  style={{ left: `${(t / 25) * 100}%` }}
                  title={`Checkpoint ${t}s · click to jump`}
                  aria-label={`Jump to checkpoint ${t} seconds`}
                >
                  <span className={styles.tickPin} />
                  <em>{t}s</em>
                </button>
              );
            })}
          </div>
        </div>

        {/* Step Selector Pills (One-touch navigation for desktop & mobile) */}
        <div className={styles.stepPills} role="tablist" aria-label="Sign-in story stages">
          {STEPS.map((st, i) => (
            <button
              type="button"
              key={st.id}
              role="tab"
              aria-selected={i === active}
              className={`${styles.pillBtn} ${i === active ? styles.pillBtnActive : ""} ${
                i < active ? styles.pillBtnDone : ""
              }`}
              onClick={() => handleStepClick(i)}
            >
              <span className={styles.pillIndex}>{st.badge}</span>
              <span className={styles.pillTitle}>{st.title}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Story Steps List */}
      <ol className={styles.steps} ref={listRef}>
        {STEPS.map((st, i) => (
          <li
            key={st.n}
            onClick={() => handleStepClick(i)}
            className={`${styles.step} ${i <= active ? styles.done : ""} ${
              i === active ? styles.on : ""
            }`}
            tabIndex={0}
            role="button"
            aria-current={i === active ? "step" : undefined}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handleStepClick(i);
              }
            }}
          >
            <div className={styles.snWrap}>
              <span className={styles.sn}>{st.n}</span>
              <div className={styles.snConnector} aria-hidden="true" />
            </div>
            <div className={styles.stepContent}>
              <div className={styles.stepMetaRow}>
                <span className={styles.stepBadge}>{st.badge}</span>
                {i === active && (
                  <span className={styles.liveIndicator}>
                    <span className={styles.livePulse} />
                    Active View
                  </span>
                )}
              </div>
              <h3>{st.title}</h3>
              <p>{st.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}