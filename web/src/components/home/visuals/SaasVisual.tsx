"use client";

import { motion } from "motion/react";
import { enter, POP, useLoop, useShadow, sceneFade } from "./shared";

/*
 * SaaS apps & platforms: a web app window builds its dashboard, then the
 * systems around it float in: billing, accounts, growth.
 *   0.02 window · 0.10 sidebar · 0.16 tiles · 0.24-0.44 bars
 *   0.46-0.56 billing / account tiles · 0.60 growth line · reset
 * Shapes only: no words, no fake data.
 */
const BARS = [34, 52, 44, 70, 58, 86];

export function SaasVisual() {
  const play = useLoop();
  const shadow = useShadow();
  const card = {
    fill: "var(--surface)",
    stroke: "var(--line)",
    strokeWidth: 2,
  };

  return (
    <motion.svg
      {...sceneFade(play)}
      viewBox="0 0 560 260"
      width="100%"
      height="100%"
      aria-hidden="true"
    >
      <defs>{shadow.def}</defs>
      {/* the web app */}
      <motion.g
        {...enter(play, 0.02, { opacity: 0, y: 12 }, { opacity: 1, y: 0 })}
      >
        <g filter={shadow.filter}>
          <rect x={150} y={24} width={262} height={212} rx={12} {...card} />
        </g>
        <line
          x1={150}
          y1={50}
          x2={412}
          y2={50}
          stroke="var(--line)"
          strokeWidth={1.5}
        />
        {[166, 178, 190].map((cx, i) => (
          <circle
            key={cx}
            cx={cx}
            cy={37}
            r={3.5}
            fill={i === 0 ? "var(--green)" : "var(--line)"}
          />
        ))}
        <rect
          x={210}
          y={32}
          width={128}
          height={11}
          rx={5.5}
          fill="var(--surface-alt)"
        />
      </motion.g>

      {/* sidebar */}
      <motion.g
        {...enter(play, 0.1, { opacity: 0, x: -8 }, { opacity: 1, x: 0 })}
      >
        <rect
          x={162}
          y={62}
          width={50}
          height={162}
          rx={8}
          fill="var(--surface-alt)"
        />
        <rect x={172} y={76} width={30} height={6} rx={3} fill="var(--green)" />
        <rect x={172} y={92} width={24} height={6} rx={3} fill="var(--line)" />
        <rect x={172} y={108} width={28} height={6} rx={3} fill="var(--line)" />
      </motion.g>

      {/* two stat tiles */}
      {[220, 312].map((x, i) => (
        <motion.g
          key={x}
          {...enter(
            play,
            0.16 + i * 0.04,
            { opacity: 0, y: 8 },
            { opacity: 1, y: 0 },
          )}
        >
          <rect x={x} y={62} width={i ? 88 : 84} height={40} rx={8} {...card} />
          <circle
            cx={x + 16}
            cy={82}
            r={6}
            fill={i ? "var(--surface-alt)" : "var(--green)"}
          />
          <rect
            x={x + 28}
            y={74}
            width={36}
            height={6}
            rx={3}
            fill="var(--line)"
          />
          <rect
            x={x + 28}
            y={86}
            width={i ? 44 : 30}
            height={6}
            rx={3}
            fill="var(--ink)"
            opacity={0.75}
          />
        </motion.g>
      ))}

      {/* chart */}
      <motion.rect
        x={220}
        y={112}
        width={180}
        height={112}
        rx={8}
        {...card}
        {...enter(play, 0.2, { opacity: 0 }, { opacity: 1 })}
      />
      {BARS.map((h, i) => (
        <motion.rect
          key={i}
          x={236 + i * 26}
          y={212 - h}
          width={16}
          height={h}
          rx={4}
          fill={i === BARS.length - 1 ? "var(--green)" : "var(--line)"}
          style={{ originY: 1 }}
          {...enter(play, 0.24 + i * 0.035, { scaleY: 0 }, { scaleY: 1 })}
        />
      ))}

      {/* billing */}
      <motion.g
        {...enter(
          play,
          0.46,
          { opacity: 0, x: -16 },
          { opacity: 1, x: 0 },
          { ease: POP },
        )}
      >
        <g filter={shadow.filter}>
          <rect
            x={36}
            y={78}
            width={100}
            height={64}
            rx={10}
            fill="var(--green)"
          />
        </g>
        <rect
          x={50}
          y={92}
          width={18}
          height={13}
          rx={3}
          fill="#fff"
          opacity={0.85}
        />
        <rect
          x={50}
          y={120}
          width={56}
          height={6}
          rx={3}
          fill="#fff"
          opacity={0.85}
        />
        <rect
          x={50}
          y={130}
          width={30}
          height={5}
          rx={2.5}
          fill="#fff"
          opacity={0.5}
        />
      </motion.g>

      {/* accounts */}
      <motion.g
        {...enter(
          play,
          0.52,
          { opacity: 0, x: 16 },
          { opacity: 1, x: 0 },
          { ease: POP },
        )}
      >
        <g filter={shadow.filter}>
          <rect x={428} y={40} width={100} height={56} rx={10} {...card} />
        </g>
        <circle cx={452} cy={68} r={13} fill="var(--surface-alt)" />
        <circle cx={452} cy={64} r={4.5} fill="var(--green)" />
        <path d="M444,76 a8,6 0 0 1 16,0" fill="var(--green)" />
        <rect
          x={472}
          y={60}
          width={42}
          height={6}
          rx={3}
          fill="var(--ink)"
          opacity={0.75}
        />
        <rect x={472} y={72} width={30} height={6} rx={3} fill="var(--line)" />
      </motion.g>

      {/* growth */}
      <motion.g
        {...enter(play, 0.56, { opacity: 0, x: 16 }, { opacity: 1, x: 0 })}
      >
        <g filter={shadow.filter}>
          <rect x={428} y={112} width={100} height={78} rx={10} {...card} />
        </g>
        <line
          x1={440}
          y1={176}
          x2={516}
          y2={176}
          stroke="var(--line)"
          strokeWidth={1.5}
        />
      </motion.g>
      <motion.path
        d="M442,168 L460,156 L476,162 L494,142 L514,130"
        fill="none"
        stroke="var(--green)"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...enter(
          play,
          0.62,
          { pathLength: 0, opacity: 0 },
          { pathLength: 1, opacity: 1 },
          { d: 0.1 },
        )}
      />
    </motion.svg>
  );
}
