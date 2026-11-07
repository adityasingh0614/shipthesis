"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import styles from "./LoadingScreen.module.css";

export function LoadingScreen() {
  const [mounted, setMounted] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [percent, setPercent] = useState(0);

  const startIntro = useCallback(() => {
    setIsActive(true);
    setPercent(0);

    const startTime = performance.now();
    const duration = 1150; // 1.15s kinetic sequence

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(1, elapsed / duration);
      // Smooth cubic deceleration curve towards 100%
      const eased = 1 - Math.pow(1 - progress, 3);
      setPercent(Math.round(eased * 100));

      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        // Pause briefly at 100% ready state before curtain wipe
        setTimeout(() => {
          setIsActive(false);
          try {
            sessionStorage.setItem("shipthesis_intro_seen", "true");
          } catch {}
        }, 280);
      }
    };

    requestAnimationFrame(tick);
  }, []);

  useEffect(() => {
    setMounted(true);

    let forceDemo = false;
    try {
      const params = new URLSearchParams(window.location.search);
      forceDemo = params.get("demo") === "loader" || params.get("intro") === "1";
    } catch {}

    let alreadySeen = false;
    try {
      alreadySeen = sessionStorage.getItem("shipthesis_intro_seen") === "true";
    } catch {}

    if (!alreadySeen || forceDemo) {
      startIntro();
    }
  }, [startIntro]);

  if (!mounted) return null;

  const statusLabel =
    percent < 40 ? "Assembling" : percent < 85 ? "Calibrating" : "Ready";

  return (
    <>
      <AnimatePresence>
        {isActive && (
          <motion.div
            className={styles.overlay}
            initial={{ y: 0 }}
            exit={{
              y: "-100%",
              transition: { duration: 0.72, ease: [0.76, 0, 0.24, 1] },
            }}
            aria-label="Loading Ship Thesis"
            role="status"
          >
            {/* Architectural Grid & Radiant Emerald Aura */}
            <div className={styles.grid} aria-hidden="true" />
            <motion.div
              className={styles.glow}
              initial={{ scale: 0.75, opacity: 0 }}
              animate={{
                scale: [0.75, 1.25, 1],
                opacity: [0, 0.65, 0.35],
              }}
              transition={{ duration: 1.3, ease: "easeOut" }}
            />

            <div className={styles.content}>
              {/* The Quantum Monolith Kinetic Assembly */}
              <div className={styles.markWrap}>
                <motion.svg
                  className={styles.markSvg}
                  viewBox="0 0 256 256"
                  xmlns="http://www.w3.org/2000/svg"
                  initial={{ scale: 0.85 }}
                  animate={{ scale: [0.85, 1.05, 1] }}
                  transition={{ duration: 1.15, ease: [0.16, 1, 0.3, 1] }}
                >
                  <defs>
                    <linearGradient id="monolithSheen" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#34D399" />
                      <stop offset="50%" stopColor="#10B981" />
                      <stop offset="100%" stopColor="#059669" />
                    </linearGradient>
                  </defs>

                  {/* Upper Kinetic Wing (Draws Stroke + Accelerates In from Top-Right) */}
                  <motion.path
                    d="M 128 36 L 220 128 L 164 128 L 128 92 L 92 128 L 64 100 Z"
                    fill="url(#monolithSheen)"
                    stroke="#10B981"
                    strokeWidth="3.5"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    initial={{
                      pathLength: 0,
                      fillOpacity: 0,
                      x: 52,
                      y: -52,
                      rotate: -15,
                    }}
                    animate={{
                      pathLength: [0, 1, 1],
                      fillOpacity: [0, 0, 1],
                      x: [52, 0, 0],
                      y: [-52, 0, 0],
                      rotate: [-15, 0, 0],
                    }}
                    transition={{
                      duration: 0.85,
                      times: [0, 0.65, 1],
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  />

                  {/* Lower Kinetic Wing (Draws Stroke + Accelerates In from Bottom-Left) */}
                  <motion.path
                    d="M 128 220 L 36 128 L 92 128 L 128 164 L 164 128 L 192 156 Z"
                    fill="url(#monolithSheen)"
                    stroke="#10B981"
                    strokeWidth="3.5"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    initial={{
                      pathLength: 0,
                      fillOpacity: 0,
                      x: -52,
                      y: 52,
                      rotate: -15,
                    }}
                    animate={{
                      pathLength: [0, 1, 1],
                      fillOpacity: [0, 0, 1],
                      x: [-52, 0, 0],
                      y: [52, 0, 0],
                      rotate: [-15, 0, 0],
                    }}
                    transition={{
                      duration: 0.85,
                      times: [0, 0.65, 1],
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  />

                  {/* Central Diamond Portal Ignition */}
                  <motion.polygon
                    points="128,92 164,128 128,164 92,128"
                    fill="#34D399"
                    initial={{ opacity: 0, scale: 0.3 }}
                    animate={{
                      opacity: [0, 0.95, 0],
                      scale: [0.3, 1.3, 1],
                    }}
                    transition={{
                      delay: 0.62,
                      duration: 0.45,
                      ease: "easeOut",
                    }}
                  />
                </motion.svg>
              </div>

              {/* Editorial Brand Lockup */}
              <motion.div
                className={styles.brandGroup}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.55,
                  delay: 0.28,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <h1 className={styles.brandTitle}>Ship Thesis</h1>
                <span className={styles.brandSub}>Product Engineering Studio</span>
              </motion.div>

              {/* Monospace Progress Tracker */}
              <motion.div
                className={styles.progressBox}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.38 }}
              >
                <div className={styles.track}>
                  <div
                    className={styles.bar}
                    style={{ width: `${percent}%` }}
                  />
                </div>
                <div className={styles.metaRow}>
                  <span className={styles.statusText}>{statusLabel}</span>
                  <span className={styles.percentText}>
                    {percent.toString().padStart(3, "0")}%
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Demo Replay Pill */}
      {!isActive && (
        <button
          type="button"
          onClick={startIntro}
          className={styles.demoPill}
          title="Replay intro animation demo"
          aria-label="Replay Intro Demo"
        >
          <span className={styles.demoPillDot} aria-hidden="true" />
          <span>Demo Intro</span>
        </button>
      )}
    </>
  );
}
