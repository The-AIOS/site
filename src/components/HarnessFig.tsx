import type { Locale } from "@/messages";

/* The harness as a technical drawing, hanging on its rope — carved from the
 * workshop deck's "define: AIOS" slide (aios.html) so the page and the room
 * show the same object. Pure SVG + CSS sway; honours prefers-reduced-motion. */
const CAPTION: Record<Locale, string> = { en: "fig. 1 — harness", es: "fig. 1 — arnés", pt: "fig. 1 — arnês" };

const TWIST = Array.from({ length: 25 }, (_, i) => 6.2 + i * 5);

export function HarnessFig({ locale }: { locale: Locale }) {
  return (
    <svg className="sk-hang" viewBox="0 0 120 330" aria-hidden="true">
      <g className="hh-rope">
        <line x1="57.8" y1="-4" x2="57.8" y2="130" />
        <line x1="62.2" y1="-4" x2="62.2" y2="130" />
      </g>
      <g className="hh-twist">
        {TWIST.map((y) => (
          <line key={y} x1="57.8" y1={y} x2="62.2" y2={y - 4.4} />
        ))}
      </g>
      <path className="hh-biner" d="M51 124 L 51 164 Q 51 176 62 176 L 65 176 Q 78 176 76.6 162 L 72.4 131 Q 71.2 123 63 123 Z" />
      <path className="hh-biner-in" d="M54 128 L 54 162 Q 54 172 62 172 L 65 172 Q 74.5 172 73.5 161 L 69.6 132 Q 68.8 126.5 63 126.5 Z" />
      <path className="hh-gate" d="M73.2 135 L 76.4 160" />
      <circle className="hh-hinge" cx="76.4" cy="160.5" r="1.4" />
      <rect className="hh-sleeve" x="73.2" y="143" width="3.4" height="8.5" rx="1" transform="rotate(-7 74.9 147)" />
      <path className="hh-loop" d="M58 170 Q 52.5 190 58.5 212 M62 170 Q 67.5 190 61.5 212" />
      <path className="hh-tack" d="M56.6 188 L 63.4 188 M56.8 194 L 63.2 194" />
      <path className="hh-belt" d="M10 206 Q 60 226 110 206 L 110 226 Q 60 248 10 226 Z" />
      <path className="hh-stitch" d="M16 212 Q 60 231 104 212 M16 221 Q 60 241 104 221" />
      <g transform="rotate(-12 92 217)">
        <rect className="hh-buckle" x="86" y="210" width="12" height="14" rx="1.5" />
        <line className="hh-buckle" x1="92" y1="210" x2="92" y2="224" />
      </g>
      <path className="hh-strap" d="M42 234 L 38 257 M78 234 L 82 257" />
      <ellipse className="hh-leg" cx="36" cy="270" rx="19" ry="12" transform="rotate(-10 36 270)" />
      <ellipse className="hh-leg-in" cx="36" cy="270" rx="14" ry="7.5" transform="rotate(-10 36 270)" />
      <ellipse className="hh-leg" cx="84" cy="270" rx="19" ry="12" transform="rotate(10 84 270)" />
      <ellipse className="hh-leg-in" cx="84" cy="270" rx="14" ry="7.5" transform="rotate(10 84 270)" />
      <text className="hh-fig" x="60" y="312" textAnchor="middle">
        {CAPTION[locale]}
      </text>
    </svg>
  );
}
