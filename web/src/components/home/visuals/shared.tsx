"use client";

import {
  createContext,
  useContext,
  useId,
  useRef,
  type ReactNode,
} from "react";
import {
  useInView,
  useReducedMotion,
  type Easing,
  type Transition,
} from "motion/react";
import type { SimpleIcon } from "simple-icons";

/*
 * One grammar for every service visual, a 6s loop:
 *   0.00-0.05  scene fades in while the first pieces start building
 *   ...-0.84   pieces land, then the finished picture holds
 *   0.84-0.92  the whole scene fades out as one layer
 *   0.92-1.00  fully hidden: pieces snap back and the loop wraps here,
 *              so the restart is never on screen
 * Off-screen or with reduced motion, the finished picture stands still.
 */
export const DURATION = 6;
const FADED_IN = 0.05;
const BUILT_BY = 0.84; // every piece has landed by here
const FADED = 0.92; // scene fully hidden
const SNAP = 0.94; // pieces jump back to their start, unseen
export const OUT = [0.22, 1, 0.36, 1] as const; // ease-out-quint
export const POP = [0.34, 1.56, 0.64, 1] as const; // slight overshoot
const STILL: Transition = { duration: 0 };

type Vals = Record<string, number>;
type Opts = { d?: number; ease?: Easing };

const loop = (at: number, d: number, ease: Easing): Transition => ({
  duration: DURATION,
  times: [0, at, Math.min(at + d, BUILT_BY), SNAP, SNAP + 0.005, 1],
  ease: ["linear", ease, "linear", "linear", "linear"],
  repeat: Infinity,
});

const frames = (a: Vals, b: Vals) => {
  const out: Record<string, number[]> = {};
  for (const k of Object.keys(b)) out[k] = [a[k], a[k], b[k], b[k], a[k], a[k]];
  return out;
};

/** Hidden (`from`) until `at`, then `to` until the reset. Still: `to`. */
export function enter(
  play: boolean,
  at: number,
  from: Vals,
  to: Vals,
  { d = 0.08, ease = OUT }: Opts = {},
) {
  return play
    ? {
        initial: false as const,
        animate: frames(from, to),
        transition: loop(at, d, ease),
      }
    : { initial: false as const, animate: to, transition: STILL };
}

/** Shown until `at`, then `gone` until the reset. Still: `gone`. */
export function leave(
  play: boolean,
  at: number,
  shown: Vals,
  gone: Vals,
  { d = 0.06, ease = OUT }: Opts = {},
) {
  return play
    ? {
        initial: false as const,
        animate: frames(shown, gone),
        transition: loop(at, d, ease),
      }
    : { initial: false as const, animate: gone, transition: STILL };
}

/**
 * Spread on the visual's root <motion.svg>: the one calm exit. Fading the
 * whole <svg> (a single GPU layer) keeps the drop shadows from flickering.
 */
export function sceneFade(play: boolean) {
  return play
    ? {
        initial: { opacity: 0 },
        animate: { opacity: [0, 1, 1, 0, 0] },
        transition: {
          duration: DURATION,
          times: [0, FADED_IN, BUILT_BY, FADED, 1],
          ease: "easeInOut" as const,
          repeat: Infinity,
        },
        style: { willChange: "opacity" },
      }
    : { initial: false as const, animate: { opacity: 1 }, transition: STILL };
}

const PlayContext = createContext(false);

/**
 * One clock for every visual in the section: they all start together when
 * the section scrolls into view, so they build, hold and exit in sync.
 */
export function VisualsLoop({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.15 });
  const reduceMotion = useReducedMotion();
  return (
    <PlayContext.Provider value={inView && !reduceMotion}>
      <div ref={ref}>{children}</div>
    </PlayContext.Provider>
  );
}

/** True while the section's shared loop is running. */
export function useLoop() {
  return useContext(PlayContext);
}

/** A soft, offset drop shadow, unique per SVG. */
export function useShadow() {
  const id = `shadow-${useId().replace(/:/g, "")}`;
  const def = (
    <filter id={id} x="-30%" y="-30%" width="160%" height="170%">
      <feDropShadow
        dx="0"
        dy="6"
        stdDeviation="7"
        floodColor="#0f1a14"
        floodOpacity="0.1"
      />
    </filter>
  );
  return { filter: `url(#${id})`, def };
}

export function Logo({
  icon,
  x,
  y,
  size,
  fill,
}: {
  icon: SimpleIcon;
  x: number;
  y: number;
  size: number;
  fill?: string;
}) {
  return (
    <path
      d={icon.path}
      fill={fill ?? `#${icon.hex}`}
      transform={`translate(${x} ${y}) scale(${size / 24})`}
    />
  );
}

export const mono = { fontFamily: "var(--font-mono)" };
