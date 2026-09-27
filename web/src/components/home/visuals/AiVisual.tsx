"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";
import { enter, mono, POP, useLoop, useShadow, sceneFade } from "./shared";

/*
 * AI features, read left to right: your content goes in, the AI reads it,
 * and useful results come out: a summary, a reply, an automation.
 *   0.04-0.22 document read line by line · 0.24 flows into the AI
 *   0.30 AI works (sparkle turns, rings pulse) · 0.42 flows out
 *   0.48 / 0.55 / 0.62 results land
 */
const DOC_LINES = [112, 96, 118, 88, 108, 72];
const SPARKLE =
  "M0,-12 C1.4,-4.2 4.2,-1.4 12,0 C4.2,1.4 1.4,4.2 0,12 C-1.4,4.2 -4.2,1.4 -12,0 C-4.2,-1.4 -1.4,-4.2 0,-12 Z";

const glyph = {
  fill: "none",
  stroke: "#fff",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

// 22px white glyphs, drawn on a green tile, centred on 0,0
const RESULTS: { label: string; bar: number; icon: ReactNode }[] = [
  {
    label: "Summary",
    bar: 72,
    icon: (
      <g {...glyph}>
        <path d="M-5,-4 H5 M-5,0 H5 M-5,4 H1" />
      </g>
    ),
  },
  {
    label: "Reply",
    bar: 56,
    icon: (
      <g {...glyph}>
        <path d="M-6,-5 H6 V3 H-1 L-4,6 V3 H-6 Z" />
      </g>
    ),
  },
  {
    label: "Automation",
    bar: 64,
    icon: <path d="M1.5,-7 L-4,1 H0 L-1.5,7 L4,-1 H0 Z" fill="#fff" />,
  },
];

const card = { fill: "var(--surface)", stroke: "var(--line)", strokeWidth: 2 };
const wire = {
  fill: "none",
  strokeWidth: 2.5,
  strokeLinecap: "round" as const,
};

export function AiVisual() {
  const play = useLoop();
  const shadow = useShadow();

  return (
    <motion.svg
      {...sceneFade(play)}
      viewBox="0 0 560 260"
      width="100%"
      height="100%"
      aria-hidden="true"
    >
      <defs>{shadow.def}</defs>
      {/* wires: dashed track, green draws over it */}
      <path
        d="M188,130 H236"
        {...wire}
        stroke="var(--line)"
        strokeWidth={2}
        strokeDasharray="3 5"
      />
      <path
        d="M324,130 H372"
        {...wire}
        stroke="var(--line)"
        strokeWidth={2}
        strokeDasharray="3 5"
      />
      <motion.path
        d="M188,130 H236"
        {...wire}
        stroke="var(--green)"
        {...enter(play, 0.24, { pathLength: 0 }, { pathLength: 1 })}
      />
      <motion.path
        d="M324,130 H372"
        {...wire}
        stroke="var(--green)"
        {...enter(play, 0.42, { pathLength: 0 }, { pathLength: 1 })}
      />

      {/* your content: a long document, read line by line */}
      <g filter={shadow.filter}>
        <rect x={40} y={42} width={148} height={176} rx={12} {...card} />
      </g>
      <rect
        x={56}
        y={58}
        width={48}
        height={8}
        rx={4}
        fill="var(--surface-alt)"
      />
      {DOC_LINES.map((w, i) => (
        <g key={i}>
          <rect
            x={56}
            y={80 + i * 20}
            width={w}
            height={7}
            rx={3.5}
            fill="var(--line)"
          />
          <motion.rect
            x={56}
            y={80 + i * 20}
            width={w}
            height={7}
            rx={3.5}
            fill="var(--green-bright)"
            style={{ originX: 0 }}
            {...enter(
              play,
              0.04 + i * 0.03,
              { scaleX: 0, opacity: 0.9 },
              { scaleX: 1, opacity: 0.55 },
              { d: 0.05 },
            )}
          />
        </g>
      ))}

      {/* the AI */}
      {[46, 60].map((r, i) => (
        <motion.circle
          key={r}
          cx={280}
          cy={130}
          r={r}
          fill="none"
          stroke="var(--green-bright)"
          strokeWidth={2}
          style={{ originX: 0.5, originY: 0.5 }}
          {...enter(
            play,
            0.3 + i * 0.05,
            { scale: 0.7, opacity: 0.7 },
            { scale: 1.15, opacity: 0 },
            { d: 0.14 },
          )}
        />
      ))}
      <g filter={shadow.filter}>
        <rect
          x={248}
          y={98}
          width={64}
          height={64}
          rx={18}
          fill="var(--green)"
        />
      </g>
      <motion.g
        style={{ originX: 0.5, originY: 0.5 }}
        {...enter(
          play,
          0.28,
          { rotate: -90, scale: 0.8 },
          { rotate: 0, scale: 1 },
          { d: 0.14, ease: POP },
        )}
      >
        <path
          d={SPARKLE}
          transform="translate(280 130) scale(1.35)"
          fill="#fff"
        />
      </motion.g>
      <text
        x={280}
        y={186}
        textAnchor="middle"
        fontSize={12}
        fontWeight={700}
        fill="var(--green)"
        style={mono}
      >
        AI
      </text>

      {/* useful results */}
      <g filter={shadow.filter}>
        <rect x={372} y={42} width={148} height={176} rx={12} {...card} />
      </g>
      {RESULTS.map((r, i) => {
        const y = 60 + i * 52;
        return (
          <motion.g
            key={r.label}
            {...enter(
              play,
              0.48 + i * 0.07,
              { opacity: 0, x: -10 },
              { opacity: 1, x: 0 },
              { ease: POP },
            )}
          >
            <rect
              x={386}
              y={y}
              width={30}
              height={30}
              rx={9}
              fill="var(--green)"
            />
            <g transform={`translate(401 ${y + 15})`}>{r.icon}</g>
            <text
              x={426}
              y={y + 12}
              fontSize={11}
              fontWeight={600}
              fill="var(--ink)"
              style={mono}
            >
              {r.label}
            </text>
            <rect
              x={426}
              y={y + 20}
              width={r.bar}
              height={6}
              rx={3}
              fill="var(--line)"
            />
          </motion.g>
        );
      })}
    </motion.svg>
  );
}
