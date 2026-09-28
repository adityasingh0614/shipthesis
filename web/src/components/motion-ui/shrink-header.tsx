"use client";

import {
  createContext,
  useContext,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "motion/react";
import { navHideLock } from "./nav-hide-lock";

/** Scroll distance (px) over which the header condenses. */
const CONDENSE_RANGE = 96;

const CondenseContext = createContext<MotionValue<number> | null>(null);

/** 0 at the top of the page, 1 once scrolled past CONDENSE_RANGE. */
export function useCondenseProgress(): MotionValue<number> {
  const ctx = useContext(CondenseContext);
  if (!ctx) {
    throw new Error("useCondenseProgress must be used within a ShrinkHeader");
  }
  return ctx;
}

/** Past this scroll depth the header hides on scroll down, returns on scroll up. */
const HIDE_AFTER = 240;
/** Ignore scroll jitter smaller than this (px). */
const DIRECTION_THRESHOLD = 6;
/** Far enough to clear the condensed row plus its shadow. */
const HIDDEN_OFFSET = -120;

export function ShrinkHeader({
  children,
  className,
  style,
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}) {
  const { scrollY } = useScroll();
  const ref = useRef<HTMLElement>(null);
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => {
    const delta = y - (scrollY.getPrevious() ?? 0);
    // Never hide at the top, while the mobile menu is open, or while a
    // section below is driving its own scroll (Our work's carousel).
    if (y < HIDE_AFTER || ref.current?.querySelector("details[open]")) {
      setHidden(false);
    } else if (navHideLock.current) {
      // frozen: leave `hidden` exactly as it was
    } else if (delta > DIRECTION_THRESHOLD) {
      setHidden(true);
    } else if (delta < -DIRECTION_THRESHOLD) {
      setHidden(false);
    }
  });

  const rawCondense = useTransform(scrollY, [0, CONDENSE_RANGE], [0, 1], {
    clamp: true,
  });
  // Light smoothing: the raw value follows every scroll event (touchpads and
  // some mice fire dozens per frame), which reads as jittery once height and
  // opacity are riding on it. This settles it to one clean value per frame.
  const scrollCondense = useSpring(rawCondense, {
    stiffness: 700,
    damping: 60,
    mass: 0.2,
  });
  // Reduced motion: skip the scroll-driven animation and settle condensed
  // (solid, compact) so the header never shifts size under the user.
  const settled = useMotionValue(1);
  const reduceMotion = useReducedMotion();
  const condense = reduceMotion ? settled : scrollCondense;

  return (
    <CondenseContext.Provider value={condense}>
      <motion.header
        ref={ref}
        className={className}
        style={{ position: "sticky", top: 0, zIndex: 40, ...style }}
        animate={{ y: hidden ? HIDDEN_OFFSET : 0 }}
        transition={
          reduceMotion
            ? { duration: 0 }
            : { duration: 0.35, ease: [0.22, 1, 0.36, 1] }
        }
        // Keyboard users tabbing into a hidden header bring it back.
        onFocusCapture={() => setHidden(false)}
      >
        {children}
      </motion.header>
    </CondenseContext.Provider>
  );
}

/**
 * Absolutely-positioned backdrop that fades in behind the row as it
 * condenses. Only `opacity` is scroll-driven: a fixed border and shadow that
 * fade in with it look identical to animating their own colour/blur every
 * scroll pixel, without the per-frame string interpolation and blur repaint
 * that made the header feel laggy.
 */
export function ShrinkHeaderFill({ className }: { className?: string }) {
  const condense = useCondenseProgress();
  const opacity = useTransform(condense, [0, 1], [0, 1]);

  return (
    <motion.div
      aria-hidden
      className={className}
      style={{
        position: "absolute",
        inset: 0,
        background: "var(--surface)",
        opacity,
        borderBottom: "1px solid #c9d3cc",
        boxShadow: "0 8px 24px -14px rgb(15 26 20 / 0.35)",
        pointerEvents: "none",
      }}
    />
  );
}

export function ShrinkHeaderRow({
  children,
  className,
  fullHeight = 76,
  condensedHeight = 60,
}: {
  children: ReactNode;
  className?: string;
  fullHeight?: number;
  condensedHeight?: number;
}) {
  const condense = useCondenseProgress();
  const height = useTransform(condense, [0, 1], [fullHeight, condensedHeight]);

  return (
    <motion.div
      className={className}
      // will-change hints the browser to promote this to its own layer
      // before the animation starts, instead of on the first scroll frame.
      style={{ height, position: "relative", zIndex: 1, willChange: "height" }}
    >
      {children}
    </motion.div>
  );
}
