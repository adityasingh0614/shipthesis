// A drawn test scene (sky, hills, colour chips, a grey ramp). The landing
// page's demo photo is a film still we can't publish, so this stands in.
export function SceneDefs({ uid }: { uid: string }) {
  const sky = `cl-sky-${uid}`;
  return (
    <g>
      <linearGradient id={sky} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#2f7fd0" />
        <stop offset="1" stopColor="#9fd0f2" />
      </linearGradient>
      <rect width="1600" height="849" fill={`url(#${sky})`} />
      <circle cx="1210" cy="220" r="110" fill="#ffcf6b" />
      <path d="M0 560 C260 430 420 560 700 470 C940 395 1120 520 1600 420 V849 H0Z" fill="#3f8f4a" />
      <path d="M0 650 C300 560 520 690 820 600 C1080 525 1300 640 1600 570 V849 H0Z" fill="#23603a" />
      <g transform="translate(90 660)">
        <rect width="120" height="120" rx="10" fill="#d93a3a" />
        <rect x="135" width="120" height="120" rx="10" fill="#f0a030" />
        <rect x="270" width="120" height="120" rx="10" fill="#f2d94b" />
        <rect x="405" width="120" height="120" rx="10" fill="#e7b48f" />
        <rect x="540" width="120" height="120" rx="10" fill="#8a4fd0" />
      </g>
      <g transform="translate(900 660)">
        <rect width="100" height="120" fill="#ffffff" />
        <rect x="100" width="100" height="120" fill="#c8c8c8" />
        <rect x="200" width="100" height="120" fill="#909090" />
        <rect x="300" width="100" height="120" fill="#585858" />
        <rect x="400" width="100" height="120" fill="#262626" />
        <rect x="500" width="100" height="120" fill="#000000" />
      </g>
    </g>
  );
}
