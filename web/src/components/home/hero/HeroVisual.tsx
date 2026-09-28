"use client";

import { useEffect, useRef, type ReactNode } from "react";
import {
  animate,
  cubicBezier,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "motion/react";
import { siFlutter, siKotlin, siSwift, type SimpleIcon } from "simple-icons";
import { AWS_LOGO } from "./aws-logo";
import styles from "./HeroVisual.module.css";

/*
 * "Exploded phone": Idea, Design, Build and Ship as four flat layers on one
 * isometric axis. Every layer is drawn flat in 2D and pushed through the
 * same isometric matrix, so size, angle and alignment match by construction.
 * Design and Build are the same screen: its wireframe, then the real thing.
 *
 * One 7s master clock (t: 0 -> 1):
 *   0.00-0.08  spread apart
 *   0.08-0.21  Idea eases down onto Design, dissolving into it as it lands
 *   0.23-0.36  Design eases down onto Build, same
 *   0.38-0.51  Build settles into the phone
 *   0.50-0.56  the merged layers show as edges on the phone
 *   0.54-0.59  "Shipped" pops, hold to 0.80
 *   0.80-0.94  layers float apart again
 * Scroll compresses the stack a little. Reduced motion: assembled, still.
 */
const LOOP = 7;
const GAP = 104; // screen-space distance between spread layers
const LAND = 4; // a layer comes to rest just above the one below
const ISO = "matrix(0.745 0.43 -0.745 0.43 0 0)"; // 30deg isometric, scaled
const OX = 280;
const OY = 330;
const ASSEMBLED = 0.66; // clock position shown with reduced motion

const SETTLE = cubicBezier(0.45, 0, 0.15, 1); // eases in, slows into place
const DRIFT = cubicBezier(0.45, 0, 0.55, 1); // ease-in-out
const POP = cubicBezier(0.34, 1.56, 0.64, 1);
const L = (v: number) => v; // linear

// Screen-space right corners (local (112,14) of a panel, (120,0) of the body)
const PANEL_CORNER = { x: 73, y: 54.2 };
const BODY_CORNER = { x: 89.4, y: 51.6 };
const LABEL_X = 150;

// Palette: brand neutrals; green only on the button, chart and the finish.
const line = "var(--line)";
const soft = "#eef2ef";
const mid = "#dfe6e1";
const dash = "#9aa59e";
const pencil = "#5f5a45";
const paper = "#fbf6e6";
const paperEdge = "#e6dcb8";

/* ---------- layer art: flat local coords, body 120 x 240, screen 104 x 196 ---------- */

function Panel({
  fill,
  edge,
  children,
}: {
  fill: string;
  edge: string;
  children?: ReactNode;
}) {
  return (
    <>
      <g transform="translate(0 3)">
        <rect
          transform={ISO}
          x={8}
          y={14}
          width={104}
          height={196}
          rx={12}
          fill={edge}
        />
      </g>
      <g transform={ISO}>
        <rect
          x={8}
          y={14}
          width={104}
          height={196}
          rx={12}
          fill={fill}
          stroke={edge}
          strokeWidth={1.4}
        />
        {children}
      </g>
    </>
  );
}

const hand = {
  fill: "none",
  stroke: pencil,
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const IdeaArt = (
  <Panel fill={paper} edge={paperEdge}>
    {/* handwritten title + underline */}
    <path
      d="M20,34 c3,-5 6,4 9,0 s5,-5 8,0 s6,4 9,-1 s5,-3 8,1"
      {...hand}
      strokeWidth={2}
    />
    <path d="M20,41 q20,3 36,-1" {...hand} strokeWidth={1.2} opacity={0.6} />
    {/* bullets */}
    {[
      { y: 58, w: 44 },
      { y: 72, w: 52 },
      { y: 86, w: 34 },
    ].map((b) => (
      <g key={b.y}>
        <circle cx={23} cy={b.y} r={1.8} fill={pencil} />
        <path
          d={`M30,${b.y} q${b.w / 4},-3 ${b.w / 2},0 t${b.w / 2},0`}
          {...hand}
          opacity={0.8}
        />
      </g>
    ))}
    {/* lightbulb doodle */}
    <g {...hand} strokeWidth={1.4}>
      <circle cx={92} cy={62} r={8} />
      <path d="M89,70 v4 h6 v-4 M90,77 h4" />
      <path
        d="M92,48 v-4 M102,52 l3,-3 M82,52 l-3,-3 M106,62 h4"
        opacity={0.7}
      />
    </g>
    {/* mini flow sketch: screen -> screen -> done */}
    <g {...hand} strokeWidth={1.4}>
      <rect x={20} y={112} width={22} height={30} rx={4} />
      <path d="M46,127 q8,-6 16,0 m-4,-4 l4,4 l-5,2" />
      <rect x={64} y={112} width={22} height={30} rx={4} />
      <path d="M69,127 l4,4 l8,-9" stroke="var(--green)" strokeWidth={1.8} />
    </g>
    {/* small sticky note */}
    <g transform="rotate(5 82 176)">
      <rect x={62} y={156} width={40} height={38} rx={3} fill="#fde68a" />
      <path d="M102,184 l-10,10 h10 z" fill="#f2cf5b" />
      <path
        d="M68,168 q7,-3 14,0 t12,0 M68,178 q6,-3 12,0"
        {...hand}
        strokeWidth={1.4}
      />
    </g>
    <path
      d="M20,162 q10,-4 20,0 t18,0 M20,174 q8,-3 16,0"
      {...hand}
      opacity={0.55}
    />
  </Panel>
);

// The same screen, box for box: Design draws it dashed, Build fills it in.
const BARS = [16, 26, 20, 34, 28];

const DesignArt = (
  <Panel fill="#ffffff" edge={mid}>
    <g fill="none" stroke={dash} strokeWidth={1.2} strokeDasharray="3 3">
      <line x1={18} y1={21} x2={102} y2={21} />
      <circle cx={25} cy={36} r={6} />
      <rect x={36} y={32} width={44} height={8} rx={3} />
      <circle cx={97} cy={36} r={5} />
      <rect x={18} y={50} width={84} height={58} rx={6} />
      {BARS.map((h, i) => (
        <rect key={i} x={28 + i * 14} y={100 - h} width={8} height={h} rx={2} />
      ))}
      {[18, 47, 76].map((x) => (
        <rect key={x} x={x} y={118} width={26} height={10} rx={5} />
      ))}
      {[136, 158].map((y) => (
        <g key={y}>
          <rect x={18} y={y} width={84} height={16} rx={4} />
          <circle cx={27} cy={y + 8} r={4} />
        </g>
      ))}
      <rect x={18} y={178} width={84} height={20} rx={7} />
    </g>
    {/* redline: spacing measured on the card */}
    <g stroke="var(--ink-muted)" strokeWidth={0.9}>
      <path d="M108,50 V108 M105.5,50 h5 M105.5,108 h5" />
    </g>
    {/* comment pin + cursor */}
    <circle
      cx={18}
      cy={50}
      r={5}
      fill="var(--green-bright)"
      stroke="#fff"
      strokeWidth={1.5}
    />
    <path
      d="M86,184 l0,12 l3,-3 l3,6 l2,-1 l-3,-6 l4,0 z"
      fill="var(--ink)"
      stroke="#fff"
      strokeWidth={0.8}
    />
  </Panel>
);

const BuildArt = (
  <Panel fill="#ffffff" edge={mid}>
    {/* status bar */}
    <rect x={18} y={19} width={12} height={4} rx={2} fill="#9aa59e" />
    <rect x={90} y={19} width={12} height={4} rx={2} fill="#9aa59e" />
    {/* header */}
    <circle cx={25} cy={36} r={6} fill="#cfe3d8" />
    <rect
      x={36}
      y={33}
      width={44}
      height={6}
      rx={3}
      fill="#3b4640"
      opacity={0.8}
    />
    <circle cx={97} cy={36} r={5} fill={mid} />
    {/* chart card */}
    <rect
      x={18}
      y={50}
      width={84}
      height={58}
      rx={6}
      fill={soft}
      stroke="#e1e8e3"
    />
    <rect x={26} y={56} width={24} height={4} rx={2} fill="#b8c3bc" />
    {BARS.map((h, i) => (
      <rect
        key={i}
        x={28 + i * 14}
        y={100 - h}
        width={8}
        height={h}
        rx={2}
        fill={i === 3 ? "var(--green)" : "#cfd8d2"}
      />
    ))}
    {/* tabs */}
    <rect x={18} y={118} width={26} height={10} rx={5} fill="#d6ebe0" />
    <rect x={47} y={118} width={26} height={10} rx={5} fill={soft} />
    <rect x={76} y={118} width={26} height={10} rx={5} fill={soft} />
    {/* list */}
    {[136, 158].map((y, i) => (
      <g key={y}>
        <rect x={18} y={y} width={84} height={16} rx={4} fill={soft} />
        <circle cx={27} cy={y + 8} r={4} fill={i ? "#cfd8d2" : "#cfe3d8"} />
        <rect
          x={36}
          y={y + 6}
          width={i ? 36 : 48}
          height={4}
          rx={2}
          fill="#b8c3bc"
        />
      </g>
    ))}
    {/* the one green button */}
    <rect x={18} y={178} width={84} height={20} rx={7} fill="var(--green)" />
    <rect x={44} y={186} width={32} height={4} rx={2} fill="#fff" />
    <rect x={46} y={203} width={28} height={3} rx={1.5} fill="#cfd8d2" />
  </Panel>
);

// The phone: body, home screen of apps, dock. Build lands into its screen.
const ICON_TINTS = ["#dfe6e1", "#e8ede9", "#d9e3dc", "#e3e9e5"];
const ShipBody = (
  <g transform={ISO}>
    <rect
      x={0}
      y={0}
      width={120}
      height={240}
      rx={20}
      fill="#ffffff"
      stroke={line}
      strokeWidth={2}
    />
    {/* side buttons */}
    <rect x={-2.5} y={52} width={3} height={14} rx={1.5} fill={line} />
    <rect x={-2.5} y={72} width={3} height={24} rx={1.5} fill={line} />
    <rect x={119.5} y={64} width={3} height={30} rx={1.5} fill={line} />
    {/* screen: home screen of apps */}
    <rect x={8} y={14} width={104} height={196} rx={12} fill={soft} />
    <rect x={46} y={19} width={28} height={7} rx={3.5} fill="#1b2420" />
    {Array.from({ length: 16 }, (_, i) => (
      <rect
        key={i}
        x={18 + (i % 4) * 23}
        y={36 + Math.floor(i / 4) * 26}
        width={16}
        height={16}
        rx={4.5}
        fill={ICON_TINTS[(i * 3) % 4]}
      />
    ))}
    <rect x={14} y={172} width={92} height={28} rx={9} fill="#e3e9e5" />
    {[0, 1, 2, 3].map((i) => (
      <rect
        key={i}
        x={22 + i * 22}
        y={178}
        width={16}
        height={16}
        rx={4.5}
        fill="#d2dbd5"
      />
    ))}
  </g>
);

/* ---------- labels ---------- */

function Label({
  text,
  note,
  corner,
}: {
  text: string;
  note: string;
  corner: { x: number; y: number };
}) {
  return (
    <g style={{ fontFamily: "var(--font-mono)" }}>
      <line
        x1={corner.x + 6}
        y1={corner.y}
        x2={LABEL_X - 8}
        y2={corner.y}
        stroke="#b8c3bc"
        strokeWidth={1}
      />
      <circle cx={corner.x + 6} cy={corner.y} r={2} fill="#b8c3bc" />
      <text
        x={LABEL_X}
        y={corner.y + 4.5}
        fontSize={13}
        fontWeight={700}
        fill="var(--ink)"
      >
        {text}
      </text>
      <text
        x={LABEL_X}
        y={corner.y + 20}
        fontSize={10.5}
        fill="var(--ink-muted)"
      >
        {note}
      </text>
    </g>
  );
}

// Upright, readable stack chips beside the Ship label (not skewed onto the phone)
function TechChip({
  x,
  y,
  children,
}: {
  x: number;
  y: number;
  children: ReactNode;
}) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={26}
        height={26}
        rx={7}
        fill="#fff"
        stroke={line}
        strokeWidth={1.2}
      />
      {children}
    </g>
  );
}
const logo = (icon: SimpleIcon, x: number, y: number) => (
  <path
    d={icon.path}
    fill={`#${icon.hex}`}
    transform={`translate(${x + 6} ${y + 6}) scale(${14 / 24})`}
  />
);

/* ---------- clock ---------- */

type Ease = (v: number) => number;
function useTrack(
  t: MotionValue<number>,
  times: number[],
  values: number[],
  ease: Ease[],
) {
  return useTransform(t, times, values, { ease });
}

export function HeroVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const inView = useInView(ref);
  const t = useMotionValue(ASSEMBLED);

  // One master clock; paused off-screen, parked assembled for reduced motion.
  useEffect(() => {
    if (reduceMotion) {
      t.set(ASSEMBLED);
      return;
    }
    const controls = animate(t, [0, 1], {
      duration: LOOP,
      ease: "linear",
      repeat: Infinity,
    });
    if (!inView) controls.pause();
    return () => controls.stop();
  }, [reduceMotion, inView, t]);

  const G = GAP;
  // Each layer eases down and settles; it dissolves over the last stretch of
  // its descent, so it has merged into the layer below as it touches.
  const ideaY = useTrack(
    t,
    [0, 0.08, 0.21, 0.8, 0.94, 1],
    [-3 * G, -3 * G, -2 * G - LAND, -2 * G - LAND, -3 * G, -3 * G],
    [L, SETTLE, L, DRIFT, L],
  );
  const ideaO = useTrack(
    t,
    [0, 0.16, 0.21, 0.84, 0.9, 1],
    [1, 1, 0, 0, 1, 1],
    [L, L, L, L, L],
  );
  const designY = useTrack(
    t,
    [0, 0.23, 0.36, 0.8, 0.94, 1],
    [-2 * G, -2 * G, -G - LAND, -G - LAND, -2 * G, -2 * G],
    [L, SETTLE, L, DRIFT, L],
  );
  const designO = useTrack(
    t,
    [0, 0.31, 0.36, 0.84, 0.9, 1],
    [1, 1, 0, 0, 1, 1],
    [L, L, L, L, L],
  );
  const buildY = useTrack(
    t,
    [0, 0.38, 0.51, 0.8, 0.94, 1],
    [-G, -G, -2, -2, -G, -G],
    [L, SETTLE, L, DRIFT, L],
  );
  // Labels leave as soon as their layer starts to move, so they never overlap
  // the label below; they return once the layers have floated apart.
  const ideaLabelO = useTrack(
    t,
    [0, 0.08, 0.11, 0.9, 0.95, 1],
    [1, 1, 0, 0, 1, 1],
    [L, L, L, L, L],
  );
  const designLabelO = useTrack(
    t,
    [0, 0.23, 0.26, 0.9, 0.95, 1],
    [1, 1, 0, 0, 1, 1],
    [L, L, L, L, L],
  );
  const buildLabelO = useTrack(
    t,
    [0, 0.38, 0.41, 0.9, 0.95, 1],
    [1, 1, 0, 0, 1, 1],
    [L, L, L, L, L],
  );
  // the three merged layers show as thin edges on the finished phone
  const edge1 = useTrack(
    t,
    [0, 0.5, 0.52, 0.8, 0.84, 1],
    [0, 0, 1, 1, 0, 0],
    [L, L, L, L, L],
  );
  const edge2 = useTrack(
    t,
    [0, 0.52, 0.54, 0.8, 0.84, 1],
    [0, 0, 1, 1, 0, 0],
    [L, L, L, L, L],
  );
  const edge3 = useTrack(
    t,
    [0, 0.54, 0.56, 0.8, 0.84, 1],
    [0, 0, 1, 1, 0, 0],
    [L, L, L, L, L],
  );
  const pill = useTrack(
    t,
    [0, 0.54, 0.59, 0.8, 0.84, 1],
    [0, 0, 1, 1, 0, 0],
    [L, POP, L, DRIFT, L],
  );

  // Scroll: the stack compresses a little as the hero scrolls away.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const squeeze = useTransform(
    scrollYProgress,
    [0, 1],
    [1, reduceMotion ? 1 : 0.7],
  );
  const iy = useTransform(() => ideaY.get() * squeeze.get());
  const dy = useTransform(() => designY.get() * squeeze.get());
  const by = useTransform(() => buildY.get() * squeeze.get());

  const chipsY = BODY_CORNER.y + 30;
  const pillY = BODY_CORNER.y + 70;

  return (
    <div ref={ref} className={styles.wrap}>
      <svg
        viewBox="0 0 640 560"
        className={styles.svg}
        role="img"
        aria-label="An idea, its design and the built screen stacking into one phone, shipped to the App Store and Play Store."
      >
        <defs>
          <pattern
            id="iso-dots"
            width={34.64}
            height={20}
            patternUnits="userSpaceOnUse"
          >
            {[
              [0, 0],
              [17.32, 10],
              [34.64, 0],
              [0, 20],
              [34.64, 20],
            ].map(([cx, cy]) => (
              <circle
                key={`${cx}-${cy}`}
                cx={cx}
                cy={cy}
                r={1.3}
                fill="#c9d3cc"
              />
            ))}
          </pattern>
          <radialGradient id="dots-fade">
            <stop offset="0.35" stopColor="#fff" />
            <stop offset="1" stopColor="#000" />
          </radialGradient>
          <mask id="dots-mask">
            <rect width={640} height={560} fill="url(#dots-fade)" />
          </mask>
          <filter id="hero-shadow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation={10} />
          </filter>
          <filter id="pill-shadow" x="-30%" y="-40%" width="160%" height="200%">
            <feDropShadow
              dx={0}
              dy={4}
              stdDeviation={5}
              floodColor="#0f1a14"
              floodOpacity={0.14}
            />
          </filter>
        </defs>

        {/* faint isometric dot grid, fading at the edges */}
        <rect
          width={640}
          height={560}
          fill="url(#iso-dots)"
          mask="url(#dots-mask)"
        />

        <g transform={`translate(${OX} ${OY})`}>
          {/* one soft shadow, under the whole stack */}
          <g
            transform="translate(0 34)"
            opacity={0.16}
            filter="url(#hero-shadow)"
          >
            <rect
              transform={ISO}
              x={0}
              y={0}
              width={120}
              height={240}
              rx={20}
              fill="#0f1a14"
            />
          </g>

          {/* merged layers, as thin edges (deepest first) */}
          {[
            { y: 17, fill: "#ffffff", o: edge3 },
            { y: 14, fill: "#e6ece8", o: edge2 },
            { y: 11, fill: paperEdge, o: edge1 },
          ].map((e) => (
            <motion.g key={e.y} style={{ opacity: e.o }}>
              <g transform={`translate(0 ${e.y})`}>
                <rect
                  transform={ISO}
                  x={0}
                  y={0}
                  width={120}
                  height={240}
                  rx={20}
                  fill={e.fill}
                  stroke={line}
                  strokeWidth={1}
                />
              </g>
            </motion.g>
          ))}
          {/* phone thickness */}
          <g transform="translate(0 8)">
            <rect
              transform={ISO}
              x={0}
              y={0}
              width={120}
              height={240}
              rx={20}
              fill="#d5ddd8"
            />
          </g>

          {/* 4. Ship */}
          {ShipBody}
          <Label
            text="Ship"
            note="App Store & Play Store"
            corner={BODY_CORNER}
          />
          <TechChip x={LABEL_X} y={chipsY}>
            {logo(siFlutter, LABEL_X, chipsY)}
          </TechChip>
          <TechChip x={LABEL_X + 32} y={chipsY}>
            {logo(siSwift, LABEL_X + 32, chipsY)}
          </TechChip>
          <TechChip x={LABEL_X + 64} y={chipsY}>
            {logo(siKotlin, LABEL_X + 64, chipsY)}
          </TechChip>
          <TechChip x={LABEL_X + 96} y={chipsY}>
            <g
              transform={`translate(${LABEL_X + 99} ${chipsY + 3}) scale(${20 / 128})`}
            >
              {AWS_LOGO.map((p) => (
                <path key={p.fill} d={p.d} fill={p.fill} />
              ))}
            </g>
          </TechChip>

          {/* 3. Build */}
          <motion.g style={{ y: by }}>
            {BuildArt}
            <motion.g style={{ opacity: buildLabelO }}>
              <Label
                text="Build"
                note="a build every week"
                corner={PANEL_CORNER}
              />
            </motion.g>
          </motion.g>

          {/* 2. Design */}
          <motion.g style={{ y: dy, opacity: designO }}>
            {DesignArt}
            <motion.g style={{ opacity: designLabelO }}>
              <Label
                text="Design"
                note="screens you approve"
                corner={PANEL_CORNER}
              />
            </motion.g>
          </motion.g>

          {/* 1. Idea */}
          <motion.g style={{ y: iy, opacity: ideaO }}>
            {IdeaArt}
            <motion.g style={{ opacity: ideaLabelO }}>
              <Label text="Idea" note="your sketch" corner={PANEL_CORNER} />
            </motion.g>
          </motion.g>

          {/* ✓ Shipped (unchanged) */}
          <motion.g
            style={{ opacity: pill, scale: pill, originX: 0, originY: 0.5 }}
          >
            <g filter="url(#pill-shadow)">
              <rect
                x={LABEL_X}
                y={pillY}
                width={112}
                height={32}
                rx={16}
                fill="var(--green)"
              />
            </g>
            <path
              d={`M${LABEL_X + 14},${pillY + 16} l4,4 l8,-8`}
              fill="none"
              stroke="#fff"
              strokeWidth={2.4}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <text
              x={LABEL_X + 34}
              y={pillY + 21}
              fontSize={13}
              fontWeight={700}
              fill="#fff"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Shipped
            </text>
          </motion.g>
        </g>
      </svg>
    </div>
  );
}
