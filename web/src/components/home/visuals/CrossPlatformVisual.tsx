"use client";

import { motion } from "motion/react";
import { siAndroid, siApple, siFlutter, type SimpleIcon } from "simple-icons";
import {
  enter,
  Logo,
  mono,
  POP,
  useLoop,
  useShadow,
  sceneFade,
} from "./shared";

/*
 * Cross-platform apps: one Flutter codebase is written, the build branches,
 * and both stores go live.
 *   0.02-0.22 code types · 0.24 build lines · 0.40 phones land · 0.52 checks
 */
// Indented like real code: [indent, width, accent]
const CODE = [
  [0, 70, true],
  [12, 96, false],
  [12, 64, false],
  [0, 30, true],
] as const;

const card = { fill: "var(--surface)", stroke: "var(--line)", strokeWidth: 2 };

export function CrossPlatformVisual() {
  const play = useLoop();
  const shadow = useShadow();

  const branch = (d: string) => (
    <>
      <path
        d={d}
        fill="none"
        stroke="var(--line)"
        strokeWidth={2}
        strokeDasharray="3 5"
        strokeLinecap="round"
      />
      <motion.path
        d={d}
        fill="none"
        stroke="var(--green)"
        strokeWidth={2.5}
        strokeLinecap="round"
        {...enter(
          play,
          0.24,
          { pathLength: 0 },
          { pathLength: 1 },
          { d: 0.16 },
        )}
      />
    </>
  );

  const phone = (
    cx: number,
    icon: SimpleIcon,
    label: string,
    lag: number,
    logoFill?: string,
  ) => {
    const x = cx - 32;
    return (
      <>
        <motion.g
          {...enter(
            play,
            0.4 + lag,
            { opacity: 0, y: 10 },
            { opacity: 1, y: 0 },
            { d: 0.1, ease: POP },
          )}
        >
          <g filter={shadow.filter}>
            <rect x={x} y={160} width={64} height={116} rx={14} {...card} />
          </g>
          <rect
            x={cx - 10}
            y={167}
            width={20}
            height={5}
            rx={2.5}
            fill="var(--line)"
          />
          <Logo icon={icon} x={cx - 13} y={204} size={26} fill={logoFill} />
          <text
            x={cx}
            y={258}
            textAnchor="middle"
            fontSize={11}
            fontWeight={600}
            fill="var(--ink-soft)"
            style={mono}
          >
            {label}
          </text>
        </motion.g>
        {/* live in the store */}
        <motion.g
          style={{ originX: 0.5, originY: 0.5 }}
          {...enter(
            play,
            0.52 + lag,
            { scale: 0 },
            { scale: 1 },
            { ease: POP },
          )}
        >
          <circle
            cx={x + 62}
            cy={162}
            r={10}
            fill="var(--green)"
            stroke="var(--surface)"
            strokeWidth={2.5}
          />
          <path
            d={`M${x + 57.5},162 l3,3 l6,-6`}
            fill="none"
            stroke="#fff"
            strokeWidth={2.2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.g>
      </>
    );
  };

  return (
    <motion.svg
      {...sceneFade(play)}
      viewBox="0 0 400 300"
      width="100%"
      height="100%"
      aria-hidden="true"
    >
      <defs>{shadow.def}</defs>
      {branch("M200,112 C200,140 118,132 118,158")}
      {branch("M200,112 C200,140 282,132 282,158")}

      {/* the one codebase */}
      <g filter={shadow.filter}>
        <rect x={116} y={20} width={168} height={92} rx={12} {...card} />
      </g>
      <Logo icon={siFlutter} x={130} y={31} size={13} />
      <text
        x={149}
        y={41.5}
        fontSize={11}
        fontWeight={600}
        fill="var(--ink-soft)"
        style={mono}
      >
        main.dart
      </text>
      <line
        x1={116}
        y1={52}
        x2={284}
        y2={52}
        stroke="var(--line)"
        strokeWidth={1.5}
      />
      {CODE.map(([indent, w, accent], i) => (
        <motion.rect
          key={i}
          x={132 + indent}
          y={62 + i * 11}
          width={w}
          height={5}
          rx={2.5}
          fill={accent ? "var(--green)" : "var(--line)"}
          style={{ originX: 0 }}
          {...enter(
            play,
            0.02 + i * 0.05,
            { scaleX: 0 },
            { scaleX: 1 },
            { d: 0.06 },
          )}
        />
      ))}

      {phone(118, siApple, "iOS", 0, "var(--ink)")}
      {phone(282, siAndroid, "Android", 0.04)}
    </motion.svg>
  );
}
