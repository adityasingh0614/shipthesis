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
 * One grammar for every service visual, a 5s loop:
 *   0.00-...   pieces build in, each with its own small stagger delay
 *   ...-0.72   short hold on the finished picture
 *   0.72-0.94  pieces float back apart, in the same stagger order they
 *              arrived, mirroring the build; the last one settles by 0.94
 *   0.94-1.00  a beat at rest before the next build starts
 * Because the loop ends exactly where it began, there is no reset to mask:
 * no snap, no scene-wide fade, just the reverse of the build. Off-screen or
 * with reduced motion, the finished picture stands still.
 */
export const DURATION = 5;
const BUILD_END = 0.66; // every piece has landed by here, latest of them
const HOLD_END = 0.72; // short hold before pieces start leaving
const EXIT_END = 0.94; // every piece is back at rest by here
export const OUT = [0.22, 1, 0.36, 1] as const; // ease-out-quint
export const POP = [0.34, 1.56, 0.64, 1] as const; // slight overshoot
const STILL: Transition = { duration: 0 };

type Vals = Record<string, number>;
type Opts = { d?: number; ease?: Easing };

// A piece that entered later leaves later too, same relative order, mapped
// proportionally into the (shorter) exit window.
const mirror = (at: number, d: number) => {
  const start = HOLD_END + (at / BUILD_END) * (EXIT_END - HOLD_END - d);
  return Math.min(start, EXIT_END - d);
};

const loop = (at: number, d: number, ease: Easing): Transition => {
  const back = mirror(at, d);
  return {
    duration: DURATION,
    times: [0, at, at + d, back, back + d, 1],
    ease: ["linear", ease, "linear", ease, "linear"],
    repeat: Infinity,
  };
};

const frames = (a: Vals, b: Vals) => {
  const out: Record<string, number[]> = {};
  for (const k of Object.keys(b)) out[k] = [a[k], a[k], b[k], b[k], a[k], a[k]];
  return out;
};

/** Hidden (`from`) until `at`, built to `to`, holds, then floats back to `from`. */
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

/** Shown until `at`, then leaves to `gone`, and returns to `shown` with the rest. */
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
