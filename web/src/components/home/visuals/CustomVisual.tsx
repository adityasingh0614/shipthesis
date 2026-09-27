"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";
import { enter, POP, useLoop, useShadow, sceneFade } from "./shared";

/*
 * Custom solutions: an outline of "your business" appears, pieces of
 * different shapes fly in and lock into it, the last green piece snaps in
 * and the outline turns solid: built to fit.
 *   0.02 outline · 0.10-0.34 pieces · 0.44 last piece · 0.58 fitted · reset
 */
type Piece = {
  x: number;
  y: number;
  w: number;
  h: number;
  fill: string;
  from: { x: number; y: number; rotate: number };
  at: number;
  detail: ReactNode;
  last?: boolean;
};

const PIECES: Piece[] = [
  {
    x: 126,
    y: 70,
    w: 90,
    h: 62,
    fill: "var(--surface-alt)",
    at: 0.1,
    from: { x: -60, y: -26, rotate: -8 },
    detail: (
      <>
        <rect x={140} y={86} width={52} height={6} rx={3} fill="var(--green)" />
        <rect x={140} y={100} width={36} height={6} rx={3} fill="var(--line)" />
        <rect x={140} y={114} width={46} height={6} rx={3} fill="var(--line)" />
      </>
    ),
  },
  {
    x: 224,
    y: 70,
    w: 50,
    h: 62,
    fill: "var(--surface)",
    at: 0.18,
    from: { x: 60, y: -34, rotate: 10 },
    detail: (
      <circle
        cx={249}
        cy={101}
        r={11}
        fill="none"
        stroke="var(--line)"
        strokeWidth={4}
      />
    ),
  },
  {
    x: 126,
    y: 140,
    w: 50,
    h: 58,
    fill: "var(--surface)",
    at: 0.26,
    from: { x: -60, y: 34, rotate: 7 },
    detail: (
      <rect
        x={140}
        y={158}
        width={22}
        height={22}
        rx={5}
        fill="none"
        stroke="var(--line)"
        strokeWidth={4}
      />
    ),
  },
  {
    x: 184,
    y: 140,
    w: 90,
    h: 58,
    fill: "var(--green)",
    at: 0.4,
    last: true,
    from: { x: 80, y: 44, rotate: -10 },
    detail: (
      <>
        <rect x={198} y={156} width={44} height={6} rx={3} fill="#fff" />
        <rect
          x={198}
          y={170}
          width={60}
          height={6}
          rx={3}
          fill="#fff"
          opacity={0.6}
        />
      </>
    ),
  },
];

export function CustomVisual() {
  const play = useLoop();
  const shadow = useShadow();

  return (
    <motion.svg
      {...sceneFade(play)}
      viewBox="0 0 400 300"
      width="100%"
      height="100%"
      aria-hidden="true"
    >
      <defs>{shadow.def}</defs>
      {/* the shape of your business: dashed, then solid green once filled */}
      <motion.rect
        x={116}
        y={60}
        width={168}
        height={148}
        rx={18}
        fill="none"
        stroke="var(--line)"
        strokeWidth={2}
        strokeDasharray="5 6"
        {...enter(play, 0.02, { opacity: 0 }, { opacity: 1 })}
      />
      <motion.rect
        x={116}
        y={60}
        width={168}
        height={148}
        rx={18}
        fill="none"
        stroke="var(--green)"
        strokeWidth={2.5}
        {...enter(play, 0.56, { opacity: 0 }, { opacity: 1 }, { d: 0.06 })}
      />

      {PIECES.map((p) => (
        <motion.g
          key={p.at}
          style={{ originX: 0.5, originY: 0.5 }}
          {...enter(
            play,
            p.at,
            { ...p.from, opacity: 0 },
            { x: 0, y: 0, rotate: 0, opacity: 1 },
            { d: p.last ? 0.1 : 0.09, ease: p.last ? POP : undefined },
          )}
        >
          <g filter={shadow.filter}>
            <rect
              x={p.x}
              y={p.y}
              width={p.w}
              height={p.h}
              rx={10}
              fill={p.fill}
              stroke={p.last ? "var(--green)" : "var(--line)"}
              strokeWidth={2}
            />
          </g>
          {p.detail}
        </motion.g>
      ))}

      {/* fitted: a check lands on the corner */}
      <motion.g
        style={{ originX: 0.5, originY: 0.5 }}
        {...enter(play, 0.6, { scale: 0 }, { scale: 1 }, { ease: POP })}
      >
        <circle
          cx={284}
          cy={60}
          r={12}
          fill="var(--green)"
          stroke="var(--surface)"
          strokeWidth={3}
        />
        <path
          d="M278.5,60 l3.5,3.5 l7,-7"
          fill="none"
          stroke="#fff"
          strokeWidth={2.4}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.g>
    </motion.svg>
  );
}
