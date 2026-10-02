"use client";

import { motion } from "motion/react";
import { siKotlin, siSwift } from "simple-icons";
import { Logo, POP, enter, mono, useLoop, useShadow } from "./shared";

/*
 * Native iOS & Android: the phone's chip powers up, then each hardware
 * capability wires in, then Swift and Kotlin land underneath.
 *   0.03 chip · 0.10-0.40 capabilities · 0.50 languages · hold · reset
 */
const ink = {
  fill: "none",
  stroke: "var(--ink)",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

// Hand-drawn 20px icons, centred on 0,0, one stroke weight.
const ICONS = {
  camera: (
    <g {...ink}>
      <rect x={-9} y={-6} width={18} height={13} rx={3} />
      <circle cx={0} cy={0.5} r={3.5} />
      <path d="M-3,-6 l1.5,-2.5 h3 l1.5,2.5" />
    </g>
  ),
  location: (
    <g {...ink}>
      <path d="M0,9 C-5,3.5 -6.5,0 -6.5,-2.5 A6.5,6.5 0 0 1 6.5,-2.5 C6.5,0 5,3.5 0,9 Z" />
      <circle cx={0} cy={-2.5} r={2.2} />
    </g>
  ),
  sensor: (
    <g {...ink}>
      <circle cx={0} cy={0} r={1.6} fill="var(--ink)" />
      <path d="M-4.5,-4.5 A6.4,6.4 0 0 0 -4.5,4.5 M4.5,-4.5 A6.4,6.4 0 0 1 4.5,4.5" />
      <path d="M-8,-8 A11.3,11.3 0 0 0 -8,8 M8,-8 A11.3,11.3 0 0 1 8,8" />
    </g>
  ),
  bolt: (
    <g {...ink}>
      <path
        d="M2,-9 L-5,1.5 H0 L-2,9 L5,-1.5 H0 Z"
        fill="var(--green)"
        stroke="var(--green)"
      />
    </g>
  ),
};

const NODES = [
  { cx: 84, cy: 84, icon: ICONS.camera, wire: "M104,84 C134,84 134,98 164,98" },
  {
    cx: 316,
    cy: 84,
    icon: ICONS.sensor,
    wire: "M296,84 C266,84 266,98 236,98",
  },
  {
    cx: 84,
    cy: 144,
    icon: ICONS.location,
    wire: "M104,144 C134,144 134,130 164,130",
  },
  {
    cx: 316,
    cy: 144,
    icon: ICONS.bolt,
    wire: "M296,144 C266,144 266,130 236,130",
  },
];

const LANGS = [
  { icon: siSwift, label: "Swift", x: 92, at: 0.5 },
  { icon: siKotlin, label: "Kotlin", x: 204, at: 0.55 },
];

export function NativeVisual() {
  const play = useLoop();
  const shadow = useShadow();

  return (
    <svg viewBox="0 0 400 300" width="100%" height="100%" aria-hidden="true">
      <defs>{shadow.def}</defs>
      {/* wires: dashed track, green line draws over it */}
      {NODES.map((n, i) => (
        <g key={n.wire}>
          <path
            d={n.wire}
            fill="none"
            stroke="var(--line)"
            strokeWidth={2}
            strokeDasharray="3 5"
            strokeLinecap="round"
          />
          <motion.path
            d={n.wire}
            fill="none"
            stroke="var(--green)"
            strokeWidth={2.5}
            strokeLinecap="round"
            {...enter(
              play,
              0.4 + i * 0.1,
              { pathLength: 0 },
              { pathLength: 1 },
            )}
          />
        </g>
      ))}

      {/* phone + chip */}
      <motion.g
        {...enter(
          play,
          0.1,
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0 },
          { d: 0.1, ease: POP },
        )}
      >
        <g filter={shadow.filter}>
          <rect
            x={164}
            y={46}
            width={72}
            height={132}
            rx={16}
            fill="var(--surface)"
            stroke="var(--line)"
            strokeWidth={2}
          />
        </g>
      <rect x={190} y={53} width={20} height={5} rx={2.5} fill="var(--line)" />

      {/* its chip powering up */}
      <g style={{ transformOrigin: "200px 112px" }}>
        <rect
          x={186}
          y={98}
          width={28}
          height={28}
          rx={6}
          fill="var(--green)"
        />
        <rect
          x={194}
          y={106}
          width={12}
          height={12}
          rx={2}
          fill="none"
          stroke="#fff"
          strokeWidth={1.6}
        />
        {[102, 112, 122].map((y) => (
          <g
            key={y}
            stroke="var(--green)"
            strokeWidth={2}
            strokeLinecap="round"
          >
            <line x1={180} y1={y} x2={184} y2={y} />
            <line x1={216} y1={y} x2={220} y2={y} />
          </g>
        ))}
      </g>
      </motion.g>

      {/* capabilities */}
      {NODES.map((n, i) => (
        <motion.g
          key={n.cx + "-" + n.cy}
          style={{ originX: 0.5, originY: 0.5 }}
          {...enter(
            play,
            0.5 + i * 0.1,
            { scale: 0, opacity: 0 },
            { scale: 1, opacity: 1 },
            { ease: POP },
          )}
        >
          <g filter={shadow.filter}>
            <circle
              cx={n.cx}
              cy={n.cy}
              r={20}
              fill="var(--surface)"
              stroke="var(--line)"
              strokeWidth={2}
            />
          </g>
          <g transform={`translate(${n.cx} ${n.cy})`}>{n.icon}</g>
        </motion.g>
      ))}

      {/* built natively in */}
      {LANGS.map((l, i) => (
        <motion.g
          key={l.label}
          {...enter(play, 0.9 + i * 0.05, { opacity: 0, y: 12 }, { opacity: 1, y: 0 })}
        >
          <g filter={shadow.filter}>
            <rect
              x={l.x}
              y={206}
              width={104}
              height={34}
              rx={17}
              fill="var(--surface)"
              stroke="var(--line)"
              strokeWidth={2}
            />
          </g>
          <Logo icon={l.icon} x={l.x + 16} y={215} size={16} />
          <text
            x={l.x + 40}
            y={228}
            fontSize={13}
            fontWeight={600}
            fill="var(--ink)"
            style={mono}
          >
            {l.label}
          </text>
        </motion.g>
      ))}
    </svg>
  );
}
