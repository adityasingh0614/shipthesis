// The ChromaLayer colour maths, for the case study's live before/after. A
// copy of chromalayerlab/ChromaLayer_web public/home.js (itself a port of the
// desktop app's transforms: ITU-R BT.709 luma, Tanner Helland's kelvin
// curve). Presets are the desktop app's own values
// (ChromaLayer.Application/PresetDefinitions.cs), not the landing page's.

type M = number[][];
export type Profile = { vib: number; temp: number; bri: number; con: number; hue: number; blk: number; wp: number };

const clamp = (v: number, lo: number, hi: number) => Math.min(Math.max(v, lo), hi);

function matmul(a: M, b: M): M {
  const o: M = [];
  for (let i = 0; i < 5; i++) {
    o[i] = [];
    for (let j = 0; j < 5; j++) {
      let s = 0;
      for (let k = 0; k < 5; k++) s += a[i][k] * b[k][j];
      o[i][j] = s;
    }
  }
  return o;
}

const LR = 0.2126;
const LG = 0.7152;
const LB = 0.0722;

// Vibrancy keeps the neutral axis: black, grey and white do not shift.
function mVib(v: number): M {
  const n = (v - 100) / 100;
  const sat = n >= 0 ? 1 + 0.6 * Math.pow(n, 1.4) : 1 + n;
  const inv = 1 - sat;
  const r = LR * inv;
  const g = LG * inv;
  const b = LB * inv;
  return [
    [r + sat, r, r, 0, 0],
    [g, g + sat, g, 0, 0],
    [b, b, b + sat, 0, 0],
    [0, 0, 0, 1, 0],
    [0, 0, 0, 0, 1],
  ];
}

const lowB = (t: number) => [
  1,
  clamp((99.4708025861 * Math.log(t) - 161.1195681661) / 255, 0, 1),
  t <= 19 ? 0 : clamp((138.5177312231 * Math.log(t - 10) - 305.0447927307) / 255, 0, 1),
];
const highB = (t: number) => [
  clamp((329.698727446 * Math.pow(t - 60, -0.1332047592)) / 255, 0, 1),
  clamp((288.1221695283 * Math.pow(t - 60, -0.0755148492)) / 255, 0, 1),
  1,
];
function k2rgb(k: number) {
  const t = k / 100;
  if (t <= 65) return lowB(t);
  if (t >= 67) return highB(t);
  const f = (t - 65) / 2;
  const l = lowB(t);
  const h = highB(t);
  return l.map((v, i) => v * (1 - f) + h[i] * f);
}
function mTemp(k: number): M {
  const [r, g, b] = k2rgb(k);
  const [dr, dg, db] = k2rgb(6500);
  let a = r / dr;
  let c = g / dg;
  let d = b / db;
  const m = Math.max(a, c, d);
  if (m > 1) {
    a /= m;
    c /= m;
    d /= m;
  }
  return [
    [a, 0, 0, 0, 0],
    [0, c, 0, 0, 0],
    [0, 0, d, 0, 0],
    [0, 0, 0, 1, 0],
    [0, 0, 0, 0, 1],
  ];
}

const sc = (s: number, o: number): M => [
  [s, 0, 0, 0, 0],
  [0, s, 0, 0, 0],
  [0, 0, s, 0, 0],
  [0, 0, 0, 1, 0],
  [o, o, o, 0, 1],
];
const mBri = (v: number) => sc(1, (v / 100) * 0.25);
const mBlk = (v: number) => {
  const o = (v / 30) * 0.15;
  return sc(1 - o, o);
};
const mCon = (v: number) => {
  const s = 1 + ((v - 100) / 100) * 0.5;
  return sc(s, 0.5 * (1 - s));
};
const mWp = (v: number) => sc(0.7 + (v / 100) * 0.3, 0);
function mHue(d: number): M {
  const r = (d * Math.PI) / 180;
  const c = Math.cos(r);
  const s = Math.sin(r);
  return [
    [LR + c * (1 - LR) - s * LR, LR - c * LR + s * 0.143, LR - c * LR - s * (1 - LR), 0, 0],
    [LG - c * LG - s * LG, LG + c * (1 - LG) + s * 0.14, LG - c * LG + s * LG, 0, 0],
    [LB - c * LB + s * (1 - LB), LB - c * LB - s * 0.283, LB + c * (1 - LB) + s * LB, 0, 0],
    [0, 0, 0, 1, 0],
    [0, 0, 0, 0, 1],
  ];
}

// The seven controls become one matrix, in the app's own order.
function compose(p: Profile) {
  let m = mVib(p.vib);
  m = matmul(m, mHue(p.hue));
  m = matmul(m, mTemp(p.temp));
  m = matmul(m, mCon(p.con));
  m = matmul(m, mBri(p.bri));
  m = matmul(m, mBlk(p.blk));
  return matmul(m, mWp(p.wp));
}

/** SVG feColorMatrix values (20 numbers) for a profile. */
export function feValues(p: Profile) {
  const m = compose(p);
  const o: number[] = [];
  for (let j = 0; j < 4; j++) o.push(m[0][j], m[1][j], m[2][j], m[3][j], m[4][j]);
  return o.map((v) => v.toFixed(5)).join(" ");
}

export const IDENTITY = "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0";

export const PRESETS = {
  natural: { vib: 100, temp: 6500, bri: 0, con: 100, hue: 0, blk: 0, wp: 100 },
  vivid: { vib: 140, temp: 7000, bri: -20, con: 120, hue: 0, blk: 0, wp: 100 },
  cinema: { vib: 120, temp: 5500, bri: -5, con: 110, hue: 0, blk: 10, wp: 90 },
  gaming: { vib: 150, temp: 7000, bri: -10, con: 120, hue: 0, blk: 0, wp: 100 },
  night: { vib: 80, temp: 3500, bri: -20, con: 90, hue: 0, blk: 0, wp: 100 },
} satisfies Record<string, Profile>;
export type PresetName = keyof typeof PRESETS;

/** Real control ranges (ColorProfile.cs). */
export const DIALS: { key: keyof Profile; name: string; lo: number; hi: number; range: string; fmt: (v: number) => string }[] = [
  { key: "vib", name: "Vibrancy", lo: 0, hi: 200, range: "0–200", fmt: (v) => `${v}` },
  { key: "temp", name: "Warmth", lo: 2700, hi: 10000, range: "2700–10000 K", fmt: (v) => `${v} K` },
  { key: "bri", name: "Brightness", lo: -100, hi: 100, range: "±100", fmt: (v) => `${v > 0 ? "+" : ""}${v}` },
  { key: "con", name: "Contrast", lo: 0, hi: 200, range: "0–200", fmt: (v) => `${v}` },
  { key: "hue", name: "Hue", lo: -180, hi: 180, range: "±180°", fmt: (v) => `${v}°` },
  { key: "blk", name: "Black level", lo: 0, hi: 30, range: "0–30", fmt: (v) => `${v}` },
  { key: "wp", name: "White point", lo: 70, hi: 100, range: "70–100", fmt: (v) => `${v}` },
];
