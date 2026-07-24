/* Deck graphics — redrawn for the-aios.com, with motion.
 *
 * Adapted from the AIOS Grand Arc keynote deck and re-drawn in the product
 * brand — Inter + JetBrains Mono + coral on deep black, ONE accent.
 *
 * Motion: parts carry `anim-*` classes that animate when their <Reveal>
 * wrapper scrolls into view (see Reveal.tsx + globals.css), staggered via
 * inline animationDelay. Coral glows breathe (svg-pulse) and flow lines march
 * (svg-flow) always. All disabled under prefers-reduced-motion.
 */

import type { CSSProperties } from "react";

const INK = "var(--color-ink)";
const MUTED = "var(--color-ink-muted)";
const SUBTLE = "var(--color-ink-subtle)";
const ACCENT = "var(--color-accent)";
const GLOW = "var(--color-accent-glow)";
const HAIR = "var(--color-hairline)";
const SURF = "var(--color-surface-1)";
const MONO = "'JetBrains Mono', monospace";
const SANS = "'Inter', sans-serif";

const svgStyle = (max?: number): CSSProperties => ({
  width: "100%",
  height: "auto",
  display: "block",
  ...(max ? { maxWidth: max, margin: "0 auto" } : {}),
});
const delay = (s: number): CSSProperties => ({ animationDelay: `${s}s` });

/* ---------- 0. Hero constellation (inspired by the nano hero image) ----------
   A weightless, theme-aware agent network drifting in the hero's upper-right —
   coral nodes twinkle, faint links breathe. Native SVG: crisp at any size,
   re-themes for free, animatable. Positioned + masked via .hero-constellation
   (globals.css) so it fades out behind the headline. */
export function HeroConstellation() {
  // Node set + edges mirror the overview deck cover.
  const nodes: { x: number; y: number; r: number; hub?: boolean }[] = [
    { x: 300, y: 60, r: 2 },
    { x: 372, y: 96, r: 2.5 },
    { x: 430, y: 64, r: 2 },
    { x: 408, y: 150, r: 4, hub: true },
    { x: 470, y: 120, r: 2 },
    { x: 524, y: 92, r: 2.5 },
    { x: 348, y: 168, r: 2 },
    { x: 300, y: 128, r: 2 },
    { x: 478, y: 196, r: 2.5 },
    { x: 540, y: 168, r: 2 },
    { x: 420, y: 224, r: 2 },
    { x: 560, y: 230, r: 2 },
    { x: 256, y: 96, r: 1.5 },
    { x: 512, y: 250, r: 1.5 },
    { x: 250, y: 210, r: 2 },
    { x: 330, y: 268, r: 1.5 },
    { x: 580, y: 130, r: 2 },
    { x: 600, y: 64, r: 1.5 },
    { x: 312, y: 320, r: 1.5 },
    { x: 470, y: 300, r: 2 },
    { x: 224, y: 150, r: 1.5 },
  ];
  const edges: [number, number][] = [
    [0, 1], [1, 2], [1, 3], [3, 4], [4, 5], [3, 6], [6, 7], [3, 8], [8, 9],
    [5, 9], [3, 10], [8, 11], [0, 12], [10, 13], [2, 4], [8, 13], [6, 14],
    [14, 15], [10, 15], [5, 16], [16, 17], [11, 16], [15, 18], [10, 19],
    [19, 13], [7, 20], [20, 14],
  ];
  return (
    <svg
      className="hero-constellation"
      viewBox="0 0 600 320"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
      style={{
        position: "absolute",
        top: "1rem",
        right: 0,
        width: "min(900px, 68%)",
        height: "auto",
        zIndex: 0,
        pointerEvents: "none",
      }}
    >
      {edges.map(([a, b], i) => (
        <line
          key={i}
          className="cn-line"
          x1={nodes[a].x} y1={nodes[a].y}
          x2={nodes[b].x} y2={nodes[b].y}
          stroke="var(--color-accent)"
          style={delay((i % 6) * 0.5)}
        />
      ))}
      {nodes.map((n, i) => (
        <circle
          key={i}
          className={n.hub ? "cn-node cn-hub" : "cn-node"}
          cx={n.x} cy={n.y} r={n.r}
          fill="var(--color-accent)"
          style={delay((i % 7) * 0.45)}
        />
      ))}

      {/* Stigmergy easter egg — ants crawl the traces between the co-workers.
         Pure SMIL <animateMotion>; the AIOS mark is itself an ant head (see LogoFlip). */}
      <path id="cn-ant-a" d="M300 60 L372 96 L408 150 L478 196 L512 250 L478 196 L408 150 L372 96 L300 60" fill="none" stroke="none" />
      <path id="cn-ant-b" d="M524 92 L580 130 L600 64 L580 130 L524 92" fill="none" stroke="none" />
      <path id="cn-ant-c" d="M348 168 L250 210 L330 268 L250 210 L348 168" fill="none" stroke="none" />
      <path id="cn-ant-d" d="M408 150 L420 224 L470 300 L420 224 L408 150" fill="none" stroke="none" />
      {ANTS.map(([id, dur, op]) => (
        <g className="cn-ant" key={id} opacity={op}>
          <g>
            <rect x={-3.3} y={-1.2} width={2.4} height={2.4} rx={0.5} fill="var(--color-accent)" />
            <rect x={-0.6} y={-0.7} width={1.4} height={1.4} rx={0.3} fill="var(--color-accent)" />
            <rect x={1.1} y={-1} width={2} height={2} rx={0.45} fill="var(--color-accent)" />
            <animateMotion dur={`${dur}s`} repeatCount="indefinite" rotate="auto">
              <mpath href={`#${id}`} />
            </animateMotion>
          </g>
        </g>
      ))}
    </svg>
  );
}

const ANTS: [string, number, number][] = [
  ["cn-ant-a", 34, 0.8],
  ["cn-ant-b", 19, 0.65],
  ["cn-ant-c", 24, 0.7],
  ["cn-ant-d", 27, 0.6],
];

/* ---------- 1. Compounding timeline (deck slide 13) ---------- */
export function CompoundTimeline() {
  const nodes = [
    { x: 100, top: "DAY 1", bot: "what you told it", glow: false },
    { x: 300, top: "WEEK", bot: "how you operate", glow: false },
    { x: 500, top: "MONTH", bot: "when you’re drifting", glow: false },
    { x: 700, top: "6 MONTHS", bot: "how your thinking evolved", glow: false },
    { x: 900, top: "A YEAR", bot: "who you’re becoming", glow: true },
  ];
  return (
    <svg viewBox="0 0 1000 190" xmlns="http://www.w3.org/2000/svg" style={svgStyle()} aria-label="Context compounds: day one it knows what you said; a year in, who you're becoming">
      <line className="anim-draw" x1="100" y1="92" x2="900" y2="92" stroke={HAIR} strokeWidth="1" />
      {nodes.map((n, i) => (
        <g key={n.top} className="anim-pop" style={delay(0.15 + i * 0.13)}>
          <text x={n.x} y="50" textAnchor="middle" fontFamily={MONO} fontWeight="700" fontSize="11" letterSpacing="1.4" fill={n.glow ? ACCENT : SUBTLE}>{n.top}</text>
          <circle className={n.glow ? "svg-pulse" : undefined} cx={n.x} cy="92" r={n.glow ? 11 : 8} fill={n.glow ? GLOW : SURF} stroke={n.glow ? ACCENT : HAIR} strokeWidth={n.glow ? 2 : 1} />
          <text x={n.x} y="134" textAnchor="middle" fontFamily={SANS} fontStyle="italic" fontSize="12.5" fill={n.glow ? INK : MUTED}>{n.bot}</text>
        </g>
      ))}
    </svg>
  );
}

/* ---------- 2. The daily ritual loop (deck slide 19) ---------- */
export function RitualLoop() {
  return (
    <svg viewBox="0 0 420 300" xmlns="http://www.w3.org/2000/svg" style={svgStyle(380)} aria-label="The daily ritual loop: today, close-session, close-day">
      <defs>
        <marker id="rl-arr" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto">
          <polygon points="0 0, 6 3, 0 6" fill={SUBTLE} />
        </marker>
      </defs>
      <circle cx="210" cy="150" r="118" fill="none" stroke={HAIR} strokeWidth="1" strokeDasharray="3 5" />
      {/* marching-dash arcs */}
      <path className="svg-flow" d="M 140 116 A 118 118 0 0 1 184 70" fill="none" stroke={SUBTLE} strokeWidth="1.5" strokeDasharray="4 6" markerEnd="url(#rl-arr)" />
      <path className="svg-flow" d="M 240 72 A 118 118 0 0 1 290 118" fill="none" stroke={SUBTLE} strokeWidth="1.5" strokeDasharray="4 6" markerEnd="url(#rl-arr)" />
      <path className="svg-flow" d="M 296 188 A 118 118 0 0 1 244 230" fill="none" stroke={SUBTLE} strokeWidth="1.5" strokeDasharray="4 6" markerEnd="url(#rl-arr)" />
      <path className="svg-flow" d="M 174 230 A 118 118 0 0 1 124 186" fill="none" stroke={SUBTLE} strokeWidth="1.5" strokeDasharray="4 6" markerEnd="url(#rl-arr)" />
      {/* work */}
      <g className="anim-pop" style={delay(0.1)}>
        <circle cx="210" cy="46" r="34" fill={SURF} stroke={HAIR} />
        <text x="210" y="51" textAnchor="middle" fontFamily={SANS} fontStyle="italic" fontSize="14" fill={MUTED}>work</text>
      </g>
      {/* close-session */}
      <g className="anim-pop" style={delay(0.22)}>
        <circle cx="314" cy="150" r="36" fill={SURF} stroke={HAIR} />
        <text x="314" y="147" textAnchor="middle" fontFamily={MONO} fontWeight="700" fontSize="9.5" fill={INK}>/close-</text>
        <text x="314" y="160" textAnchor="middle" fontFamily={MONO} fontWeight="700" fontSize="9.5" fill={INK}>session</text>
      </g>
      {/* close-day (glow) */}
      <g className="anim-pop" style={delay(0.34)}>
        <circle className="svg-pulse" cx="210" cy="254" r="38" fill={GLOW} stroke={ACCENT} strokeWidth="2" />
        <text x="210" y="258" textAnchor="middle" fontFamily={MONO} fontWeight="700" fontSize="10.5" fill={ACCENT}>/close-day</text>
      </g>
      {/* today */}
      <g className="anim-pop" style={delay(0.46)}>
        <circle cx="106" cy="150" r="36" fill={SURF} stroke={HAIR} />
        <text x="106" y="154" textAnchor="middle" fontFamily={MONO} fontWeight="700" fontSize="10.5" fill={INK}>/today</text>
      </g>
    </svg>
  );
}

/* ---------- 3. INTENT trust ladder (deck slide 29) ---------- */
export function TrustLadder() {
  const steps = [
    { x: 20, y: 158, label: "WEEK 1", body: "everything is a draft", glow: false },
    { x: 80, y: 92, label: "WEEK 3", body: "go — ask on the big calls", glow: false },
    { x: 140, y: 26, label: "MONTH 1", body: "trusted with everything but the disk", glow: true },
  ];
  return (
    <svg viewBox="0 0 460 240" xmlns="http://www.w3.org/2000/svg" style={svgStyle(460)} aria-label="INTENT.md trust ladder: autonomy earns its way up over time">
      {steps.map((s, i) => (
        <g key={s.label} className="anim-rise" style={delay(0.1 + i * 0.16)}>
          <rect className={s.glow ? "svg-pulse" : undefined} x={s.x} y={s.y} width="300" height="58" fill={s.glow ? GLOW : SURF} stroke={s.glow ? ACCENT : HAIR} />
          <text x={s.x + 18} y={s.y + 24} fontFamily={MONO} fontWeight="700" fontSize="10" letterSpacing="1.4" fill={s.glow ? ACCENT : SUBTLE}>{s.label}</text>
          <text x={s.x + 18} y={s.y + 44} fontFamily={SANS} fontStyle="italic" fontSize="13" fill={s.glow ? INK : MUTED}>{s.body}</text>
        </g>
      ))}
    </svg>
  );
}

/* ---------- 4. Inspector vs Orchestrator (deck slide 42) ---------- */
export function OrchestratorShift() {
  const agents = [
    { x: 324, label: "legal you" },
    { x: 488, label: "accountant you" },
    { x: 652, label: "research you" },
    { x: 816, label: "sales you" },
  ];
  return (
    <svg viewBox="0 0 1000 175" xmlns="http://www.w3.org/2000/svg" style={svgStyle()} aria-label="Verticality is dying: the inspector is a bottleneck; the orchestrator conducts a team">
      {/* LEFT — the inspector (fades in as a unit; inner drafts keep descending opacity) */}
      <g className="anim-fade" style={delay(0.1)}>
        <text x="120" y="14" textAnchor="middle" fontFamily={MONO} fontWeight="700" fontSize="10" letterSpacing="1.6" fill={SUBTLE}>THE INSPECTOR</text>
        <rect x="60" y="24" width="120" height="24" fill={SURF} stroke={HAIR} />
        <text x="120" y="40" textAnchor="middle" fontFamily={MONO} fontSize="10" fill={INK}>you</text>
        {[58, 88, 118].map((y, i) => (
          <g key={y} opacity={1 - i * 0.28}>
            <line x1="120" y1={y - 10} x2="120" y2={y} stroke={SUBTLE} />
            <rect x="60" y={y} width="120" height="20" fill={SURF} stroke={HAIR} />
            <text x="120" y={y + 14} textAnchor="middle" fontFamily={MONO} fontSize="8.5" fill={SUBTLE}>{`check draft ${i + 1}${i === 2 ? "…" : ""}`}</text>
          </g>
        ))}
        <text x="120" y="160" textAnchor="middle" fontFamily={SANS} fontStyle="italic" fontSize="12" fill={MUTED}>a bottleneck, descending</text>
      </g>

      <line x1="250" y1="14" x2="250" y2="158" stroke={HAIR} />

      {/* RIGHT — the orchestrator */}
      <text x="640" y="14" textAnchor="middle" fontFamily={MONO} fontWeight="700" fontSize="10" letterSpacing="1.6" fill={ACCENT}>THE ORCHESTRATOR</text>
      <g className="anim-pop" style={delay(0.2)}>
        <rect x="580" y="24" width="120" height="24" fill="var(--color-surface-2)" stroke={ACCENT} />
        <text x="640" y="40" textAnchor="middle" fontFamily={MONO} fontSize="10" fill={INK}>you</text>
      </g>
      {agents.map((a, i) => (
        <g key={a.label} className="anim-pop" style={delay(0.34 + i * 0.1)}>
          {/* dispatch line — marching dash = signals flowing out to the agent */}
          <line className="svg-flow" x1="640" y1="48" x2={a.x + 70} y2="84" stroke={ACCENT} strokeWidth="1.25" strokeDasharray="2 6" opacity="0.85" style={delay(i * 0.18)} />
          <rect x={a.x} y="84" width="140" height="28" fill={SURF} stroke={HAIR} />
          <text x={a.x + 70} y="102" textAnchor="middle" fontFamily={MONO} fontSize="9.5" fill={INK}>{a.label}</text>
          <text className="svg-pulse" x={a.x + 70} y="130" textAnchor="middle" fontFamily={MONO} fontSize="8.5" fill={ACCENT} style={delay(0.6 + i * 0.45)}>sig ✓</text>
        </g>
      ))}
      <text x="640" y="160" textAnchor="middle" fontFamily={SANS} fontStyle="italic" fontSize="12" fill={MUTED}>one human conducts N agents</text>
    </svg>
  );
}

/* ---------- 5. Two machines, one wall (deck slide 24) ---------- */
export function TwoMachines() {
  return (
    <svg viewBox="0 0 1000 270" xmlns="http://www.w3.org/2000/svg" style={svgStyle()} aria-label="The Fortress: two machines separated by an OS-level firewall">
      <defs>
        <marker id="tm-arr" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto">
          <polygon points="0 0, 6 3, 0 6" fill={SUBTLE} />
        </marker>
      </defs>
      {/* MacBook */}
      <g className="anim-fade" style={delay(0.1)}>
        <rect x="30" y="70" width="300" height="150" fill={SURF} stroke={HAIR} />
        <text x="180" y="112" textAnchor="middle" fontFamily={MONO} fontWeight="700" fontSize="13" letterSpacing="1.4" fill={INK}>MACBOOK · MAIN</text>
        <text x="180" y="142" textAnchor="middle" fontFamily={SANS} fontStyle="italic" fontSize="13" fill={MUTED}>day-driver</text>
        <text x="180" y="166" textAnchor="middle" fontFamily={SANS} fontStyle="italic" fontSize="13" fill={SUBTLE}>closes the lid · travels</text>
      </g>
      {/* firewall (breathing) */}
      <line className="svg-pulse" x1="500" y1="40" x2="500" y2="250" stroke={ACCENT} strokeWidth="2.5" strokeDasharray="6 5" />
      <text x="500" y="30" textAnchor="middle" fontFamily={MONO} fontWeight="700" fontSize="10" letterSpacing="1.6" fill={ACCENT}>FIREWALL (pf)</text>
      {/* Mac mini */}
      <g className="anim-fade" style={delay(0.25)}>
        <rect x="670" y="70" width="300" height="150" fill={SURF} stroke={HAIR} />
        <text x="820" y="112" textAnchor="middle" fontFamily={MONO} fontWeight="700" fontSize="13" letterSpacing="1.4" fill={INK}>MAC MINI · AGENT HOST</text>
        <text x="820" y="142" textAnchor="middle" fontFamily={SANS} fontStyle="italic" fontSize="13" fill={MUTED}>always-on</text>
        <text x="820" y="166" textAnchor="middle" fontFamily={SANS} fontStyle="italic" fontSize="13" fill={SUBTLE}>never sleeps</text>
      </g>
      {/* flows (marching dash) */}
      <line className="svg-flow" x1="332" y1="120" x2="668" y2="120" stroke={SUBTLE} strokeWidth="1.5" strokeDasharray="4 6" markerEnd="url(#tm-arr)" />
      <text x="500" y="110" textAnchor="middle" fontFamily={MONO} fontSize="10" letterSpacing="1" fill={SUBTLE}>SSH · git pull — manage</text>
      <line className="svg-flow" x1="668" y1="172" x2="332" y2="172" stroke={SUBTLE} strokeWidth="1.5" strokeDasharray="4 6" markerEnd="url(#tm-arr)" />
      <text x="500" y="192" textAnchor="middle" fontFamily={MONO} fontSize="10" letterSpacing="1" fill={SUBTLE}>git push → GitHub — results only</text>
    </svg>
  );
}

/* ---------- 6. What an OS is made of — shared spine + extension layer ----------
   From the overview deck: the six building blocks every operator shares, and
   the three-tier extension model that never collides. */
export function OsAnatomy() {
  const spine: [string, string][] = [
    ["VAULT", "the second brain"],
    ["AGENTS", "a team of specialists"],
    ["SKILLS", "capabilities on demand"],
    ["COMMANDS", "the daily rituals"],
    ["MCPs", "hands into your stack"],
    ["HOOKS", "reflexes that fire on their own"],
  ];
  const ext: [string, string, boolean][] = [
    ["aios/", "shipped to everyone", false],
    ["custom/", "only yours · survives updates", false],
    ["<company>/", "mounted · inherited by your team", true],
  ];
  return (
    <svg viewBox="0 0 1000 256" xmlns="http://www.w3.org/2000/svg" style={svgStyle()} aria-label="What the operating system is made of: the shared spine and the extension layer">
      {/* THE SHARED SPINE */}
      <text x="20" y="18" fontFamily={MONO} fontWeight="700" fontSize="11" letterSpacing="1.8" fill={SUBTLE}>THE SHARED SPINE</text>
      {spine.map(([k, v], i) => {
        const y = 36 + i * 34;
        return (
          <g key={k} className="anim-rise" style={delay(0.1 + i * 0.07)}>
            <rect x="20" y={y} width="600" height="30" rx="3" fill={SURF} stroke={HAIR} />
            <text x="40" y={y + 20} fontFamily={MONO} fontWeight="600" fontSize="13" letterSpacing="1" fill={INK}>{k}</text>
            <text x="600" y={y + 20} textAnchor="end" fontFamily={SANS} fontStyle="italic" fontSize="12" fill={SUBTLE}>{v}</text>
          </g>
        );
      })}
      {/* divider */}
      <line x1="690" y1="28" x2="690" y2="238" stroke={HAIR} strokeWidth="1" />
      {/* THE EXTENSION LAYER */}
      <text x="720" y="18" fontFamily={MONO} fontWeight="700" fontSize="11" letterSpacing="1.8" fill={ACCENT}>THE EXTENSION LAYER</text>
      {ext.map(([k, v, hot], i) => {
        const y = 40 + i * 68;
        return (
          <g key={k} className="anim-pop" style={delay(0.25 + i * 0.1)}>
            <rect x="720" y={y} width="260" height="56" rx="6" fill={SURF} stroke={hot ? ACCENT : HAIR} />
            <text x="740" y={y + 25} fontFamily={MONO} fontWeight="600" fontSize="13" fill={hot ? ACCENT : INK}>{k}</text>
            <text x="740" y={y + 43} fontFamily={SANS} fontStyle="italic" fontSize="11.5" fill={SUBTLE}>{v}</text>
          </g>
        );
      })}
    </svg>
  );
}

/* ---------- 7. Glass — clickable surfaces above, the framework below ---------- */
export function GlassPanel() {
  const buttons = [
    { x: 62, w: 100, label: "Plan day" },
    { x: 178, w: 100, label: "Spawn" },
    { x: 294, w: 104, label: "Sync now" },
  ];
  return (
    <svg viewBox="0 0 460 300" xmlns="http://www.w3.org/2000/svg" style={svgStyle(440)} aria-label="Glass: clickable surfaces above, the framework running below">
      <g className="anim-fade" style={delay(0.15)}>
        <rect x="40" y="16" width="380" height="104" rx="10" fill="var(--color-accent-glow)" stroke={ACCENT} strokeWidth="1.5" />
        <text x="62" y="40" fontFamily={MONO} fontSize="9" letterSpacing="1.6" fill={ACCENT}>AIOS GLASS</text>
      </g>
      {buttons.map((b, i) => (
        <g key={b.label} className="anim-pop" style={delay(0.35 + i * 0.12)}>
          <rect x={b.x} y="56" width={b.w} height="34" rx="17" fill="var(--color-surface-2)" stroke={HAIR} />
          <text x={b.x + b.w / 2} y="77" textAnchor="middle" fontFamily={SANS} fontWeight="600" fontSize="11" fill={INK}>{b.label}</text>
        </g>
      ))}
      {[112, 228, 346].map((x, i) => (
        <line key={x} className="svg-flow" x1={x} y1="96" x2={x} y2="186" stroke={ACCENT} strokeWidth="1.25" strokeDasharray="2 6" opacity="0.85" style={delay(i * 0.25)} />
      ))}
      <g className="anim-fade" style={delay(0.5)}>
        <rect x="40" y="190" width="380" height="74" rx="8" fill={SURF} stroke={HAIR} />
        <text x="62" y="218" fontFamily={MONO} fontSize="10.5" fill={SUBTLE}><tspan fill={ACCENT}>›</tspan> /aios:today</text>
        <text x="62" y="240" fontFamily={MONO} fontSize="10.5" fill={SUBTLE}><tspan fill={ACCENT}>›</tspan> spawn lawyer · git sync</text>
      </g>
      <text className="anim-fade" x="230" y="288" textAnchor="middle" fontFamily={SANS} fontStyle="italic" fontSize="11.5" fill={MUTED} style={delay(0.8)}>clicks above — the framework runs below</text>
    </svg>
  );
}

/* ---------- 9. Skills beam — describe the work, the right capability wakes ---------- */
export function SkillsBeam() {
  const chips = [
    { x: 14, w: 98, label: "tdd" },
    { x: 124, w: 118, label: "frontend-design" },
    { x: 254, w: 86, label: "pdf" },
    { x: 352, w: 96, label: "debugging" },
  ];
  // each chip's bottom-center beams to the mark (centered ~230,192)
  const beams = [63, 183, 297, 400];
  return (
    <svg viewBox="0 0 460 330" xmlns="http://www.w3.org/2000/svg" style={svgStyle(420)} aria-label="Skills load on demand: describe the work and the right capability wakes">
      {chips.map((c, i) => (
        <g key={c.label} className="anim-pop" style={delay(0.1 + i * 0.12)}>
          <rect x={c.x} y="14" width={c.w} height="26" rx="4" fill={SURF} stroke={HAIR} />
          <text x={c.x + c.w / 2} y="31" textAnchor="middle" fontFamily={MONO} fontSize="9" fill={MUTED}>{c.label}</text>
        </g>
      ))}
      {beams.map((x, i) => (
        <line key={x} className="svg-flow" x1={x} y1="44" x2={208 + i * 14} y2={170} stroke={ACCENT} strokeWidth="1.25" strokeDasharray="2 6" opacity="0.85" style={delay(i * 0.2)} />
      ))}
      <g className="anim-pop" style={delay(0.5)}>
        <rect x="206" y="168" width="48" height="48" rx="6" fill="none" stroke={ACCENT} strokeWidth="2.5" />
        <rect className="svg-pulse" x="230" y="171" width="18" height="18" rx="3" fill={ACCENT} />
      </g>
      <text className="anim-fade" x="230" y="262" textAnchor="middle" fontFamily={SANS} fontWeight="600" fontStyle="italic" fontSize="16" fill={INK} style={delay(0.9)}>&ldquo;I know kung fu.&rdquo;</text>
      <text className="anim-fade" x="230" y="288" textAnchor="middle" fontFamily={SANS} fontStyle="italic" fontSize="11.5" fill={SUBTLE} style={delay(1.1)}>describe the work — the right capability wakes</text>
    </svg>
  );
}

/* ---------- 8. Team mount — one repo, every teammate inherits ---------- */
export function TeamMount() {
  return (
    <svg viewBox="0 0 1000 150" xmlns="http://www.w3.org/2000/svg" style={svgStyle()} aria-label="One mount, every teammate's Claude inherits the venture">
      <g className="anim-pop" style={delay(0.1)}>
        <rect x="40" y="50" width="200" height="50" rx="6" fill="var(--color-surface-2)" stroke={ACCENT} strokeWidth="1.5" />
        <text x="140" y="71" textAnchor="middle" fontFamily={MONO} fontWeight="700" fontSize="11" fill={INK}>company repo</text>
        <text x="140" y="89" textAnchor="middle" fontFamily={SANS} fontStyle="italic" fontSize="10.5" fill={SUBTLE}>the venture&rsquo;s brain</text>
      </g>
      {[26, 75, 124].map((y2, i) => (
        <line key={y2} className="svg-flow" x1="246" y1={62 + i * 13} x2="700" y2={y2} stroke={ACCENT} strokeWidth="1.25" strokeDasharray="2 6" opacity="0.85" style={delay(i * 0.3)} />
      ))}
      {[10, 59, 108].map((y2, i) => (
        <g key={y2} className="anim-pop" style={delay(0.4 + i * 0.15)}>
          <rect x="706" y={y2} width="190" height="32" rx="5" fill={SURF} stroke={HAIR} />
          <text x="801" y={y2 + 20} textAnchor="middle" fontFamily={MONO} fontSize="10" fill={INK}>teammate&rsquo;s claude ✓</text>
        </g>
      ))}
    </svg>
  );
}

/* GlassWorkspace — AIOS Glass living inside the editor: the vault EXPLORER on
 * the left, the Glass panel (rituals + a live running-sessions card) on the
 * right. On-brand: one accent — a working session's dot is coral (breathing),
 * idle dots are subtle grey; no rainbow status palette. */
export function GlassWorkspace() {
  const tree: [string, number, boolean][] = [
    ["▾ 00 - notes", 0, false],
    ["projects", 1, false],
    ["context", 1, false],
    ["infra-aios-glass.md", 1, true],
    ["▾ 01 - calendar", 0, false],
    ["▸ 03 - export", 0, false],
  ];
  const rituals = [
    { x: 172, w: 74, label: "Plan day" },
    { x: 254, w: 66, label: "Spawn" },
    { x: 328, w: 60, label: "Sync" },
  ];
  const sessions: [string, string, boolean][] = [
    ["coordinator", "idle", false],
    ["designer", "working", true],
    ["accountant", "idle", false],
  ];
  return (
    <svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg" style={svgStyle(440)} aria-label="AIOS Glass inside the editor: the vault explorer on the left, the Glass panel with rituals and a live running-sessions card on the right.">
      {/* window chrome */}
      <g className="anim-fade" style={delay(0.1)}>
        <rect x="8" y="8" width="464" height="284" rx="10" fill={SURF} stroke={HAIR} />
        <circle cx="26" cy="26" r="3.5" fill={HAIR} />
        <circle cx="38" cy="26" r="3.5" fill={HAIR} />
        <circle cx="50" cy="26" r="3.5" fill={HAIR} />
        <text x="66" y="29" fontFamily={MONO} fontSize="8.5" fill={SUBTLE}>antigravity — the-aios</text>
        <line x1="8" y1="42" x2="472" y2="42" stroke={HAIR} />
        <line x1="152" y1="42" x2="152" y2="292" stroke={HAIR} />
      </g>
      {/* explorer */}
      <g className="anim-fade" style={delay(0.25)}>
        <text x="22" y="60" fontFamily={MONO} fontSize="8" letterSpacing="1.2" fill={SUBTLE}>EXPLORER</text>
        {tree.map(([t, d, on], i) => (
          <text key={t} x={22 + d * 12} y={80 + i * 20} fontFamily={MONO} fontSize="9.5" fill={on ? ACCENT : MUTED}>{t}</text>
        ))}
      </g>
      {/* glass header */}
      <text className="anim-fade" x="172" y="60" fontFamily={MONO} fontSize="9" letterSpacing="1.6" fill={ACCENT} style={delay(0.35)}>AIOS GLASS</text>
      {/* rituals */}
      {rituals.map((b, i) => (
        <g key={b.label} className="anim-pop" style={delay(0.5 + i * 0.1)}>
          <rect x={b.x} y="72" width={b.w} height="26" rx="13" fill="var(--color-surface-2)" stroke={HAIR} />
          <text x={b.x + b.w / 2} y="89" textAnchor="middle" fontFamily={SANS} fontWeight="600" fontSize="10" fill={INK}>{b.label}</text>
        </g>
      ))}
      {/* running-sessions card */}
      <g className="anim-rise" style={delay(0.7)}>
        <rect x="166" y="116" width="298" height="150" rx="8" fill="var(--color-surface-2)" stroke={HAIR} />
        <text x="180" y="138" fontFamily={MONO} fontSize="8.5" letterSpacing="1.2" fill={SUBTLE}>RUNNING · 3</text>
        {sessions.map(([n, s, working], i) => (
          <g key={n}>
            <circle cx="186" cy={160 + i * 28} r="4" fill={working ? ACCENT : SUBTLE} className={working ? "svg-pulse" : undefined} />
            <text x="200" y={164 + i * 28} fontFamily={MONO} fontSize="11" fill={INK}>{n}</text>
            <text x="448" y={164 + i * 28} textAnchor="end" fontFamily={SANS} fontSize="9.5" fill={SUBTLE}>{s}</text>
          </g>
        ))}
        <line x1="166" y1="244" x2="464" y2="244" stroke={HAIR} />
        <text x="180" y="259" fontFamily={SANS} fontSize="9.5" fill={MUTED}>Spawn · Resume · Message · Close all</text>
      </g>
    </svg>
  );
}

/* CommandBusFlow — the spawn-inbox command bus as a 20-second conversation loop
 * (inline SVG + SMIL, all synced to one 20s clock; every color a CSS var so it
 * re-themes). A coordinator spawns a designer and an accountant THROUGH Glass,
 * briefs the designer to build a hero, then asks the accountant to invoice the
 * work — every message routes through the trusted surface, and each reply rides
 * the rail back into the coordinator. Self-contained → lifts straight into a
 * deck slide (mirror lives at export/decks/_components/command-bus.html). */
export function CommandBusFlow() {
  return (
    <svg viewBox="0 0 760 440" xmlns="http://www.w3.org/2000/svg" style={svgStyle(820)} aria-label="A coordinator session spawns a designer and an accountant through AIOS Glass, briefs the designer to build a hero, then asks the accountant to invoice the work — every message routes through Glass, and replies route back.">
      <defs>
        <path id="cbToDesigner" d="M 152 220 L 380 220 L 664 130" fill="none" />
        <path id="cbToAccountant" d="M 152 220 L 380 220 L 664 320" fill="none" />
        <path id="cbFromDesigner" d="M 664 130 L 380 220 L 152 220" fill="none" />
        <path id="cbFromAccountant" d="M 664 320 L 380 220 L 152 220" fill="none" />
      </defs>

      {/* rails */}
      <g strokeWidth="1.25">
        <path d="M 152 220 L 286 220" stroke={HAIR} />
        <path d="M 474 196 L 604 132" stroke={HAIR} />
        <path d="M 474 244 L 604 316" stroke={HAIR} />
        <g stroke={ACCENT} strokeDasharray="2 7" opacity="0.45">
          <path d="M 152 220 L 286 220"><animate attributeName="stroke-dashoffset" values="18;0" dur="1.3s" repeatCount="indefinite" /></path>
          <path d="M 474 196 L 604 132"><animate attributeName="stroke-dashoffset" values="18;0" dur="1.3s" repeatCount="indefinite" /></path>
          <path d="M 474 244 L 604 316"><animate attributeName="stroke-dashoffset" values="18;0" dur="1.3s" repeatCount="indefinite" /></path>
        </g>
      </g>

      {/* coordinator */}
      <g>
        <circle cx="92" cy="220" r="30" fill="none" stroke={ACCENT} strokeWidth="2" opacity="0">
          <animate attributeName="r" values="30;30;52;52" keyTimes="0;0.63;0.70;1" dur="20s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0;0;0.8;0;0" keyTimes="0;0.63;0.645;0.70;1" dur="20s" repeatCount="indefinite" />
        </circle>
        <circle cx="92" cy="220" r="30" fill="none" stroke={ACCENT} strokeWidth="2" opacity="0">
          <animate attributeName="r" values="30;30;52;52" keyTimes="0;0.95;1;1" dur="20s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0;0;0.8;0" keyTimes="0;0.95;0.985;1" dur="20s" repeatCount="indefinite" />
        </circle>
        <rect x="32" y="192" width="120" height="56" rx="11" fill="var(--color-surface-2)" stroke={HAIR} />
        <text x="92" y="217" textAnchor="middle" fontFamily={MONO} fontWeight="600" fontSize="13" fill={INK}>coordinator</text>
        <text x="92" y="233" textAnchor="middle" fontFamily={SANS} fontSize="9.5" fill={SUBTLE}>your session</text>
      </g>

      {/* designer */}
      <g opacity="0">
        <animate attributeName="opacity" values="0;0;1;1;0" keyTimes="0;0.13;0.17;0.97;1" dur="20s" repeatCount="indefinite" />
        <circle cx="664" cy="130" r="30" fill="none" stroke={ACCENT} strokeWidth="2" opacity="0">
          <animate attributeName="r" values="30;30;52;52" keyTimes="0;0.13;0.21;1" dur="20s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0;0.8;0;0" keyTimes="0;0.14;0.21;1" dur="20s" repeatCount="indefinite" />
        </circle>
        <circle cx="664" cy="130" r="30" fill="none" stroke={ACCENT} strokeWidth="2" opacity="0">
          <animate attributeName="r" values="30;30;52;52" keyTimes="0;0.46;0.54;1" dur="20s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0;0;0.8;0;0" keyTimes="0;0.46;0.475;0.54;1" dur="20s" repeatCount="indefinite" />
        </circle>
        <rect x="604" y="102" width="120" height="56" rx="11" fill="var(--color-surface-2)" stroke={ACCENT} strokeWidth="1.3" />
        <text x="664" y="127" textAnchor="middle" fontFamily={MONO} fontWeight="600" fontSize="13" fill={INK}>designer</text>
        <text x="664" y="143" textAnchor="middle" fontFamily={SANS} fontSize="9.5" fill={SUBTLE}>spawned worker</text>
      </g>

      {/* accountant */}
      <g opacity="0">
        <animate attributeName="opacity" values="0;0;1;1;0" keyTimes="0;0.28;0.32;0.97;1" dur="20s" repeatCount="indefinite" />
        <circle cx="664" cy="320" r="30" fill="none" stroke={ACCENT} strokeWidth="2" opacity="0">
          <animate attributeName="r" values="30;30;52;52" keyTimes="0;0.28;0.36;1" dur="20s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0;0.8;0;0" keyTimes="0;0.29;0.36;1" dur="20s" repeatCount="indefinite" />
        </circle>
        <circle cx="664" cy="320" r="30" fill="none" stroke={ACCENT} strokeWidth="2" opacity="0">
          <animate attributeName="r" values="30;30;52;52" keyTimes="0;0.78;0.86;1" dur="20s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0;0;0.8;0;0" keyTimes="0;0.78;0.795;0.86;1" dur="20s" repeatCount="indefinite" />
        </circle>
        <rect x="604" y="292" width="120" height="56" rx="11" fill="var(--color-surface-2)" stroke={ACCENT} strokeWidth="1.3" />
        <text x="664" y="317" textAnchor="middle" fontFamily={MONO} fontWeight="600" fontSize="13" fill={INK}>accountant</text>
        <text x="664" y="333" textAnchor="middle" fontFamily={SANS} fontSize="9.5" fill={SUBTLE}>spawned worker</text>
      </g>

      {/* card 1 · spawn designer */}
      <g opacity="0">
        <animateMotion dur="20s" repeatCount="indefinite" calcMode="linear" keyTimes="0;0.02;0.13;1" keyPoints="0;0;1;1"><mpath href="#cbToDesigner" /></animateMotion>
        <animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;0.02;0.045;0.13;0.16;1" dur="20s" repeatCount="indefinite" />
        <rect x="-68" y="-14" width="136" height="28" rx="14" fill="var(--color-surface-3)" stroke={ACCENT} strokeWidth="1.2" />
        <circle cx="-52" cy="0" r="3.5" fill={ACCENT} />
        <text x="8" y="4" textAnchor="middle" fontFamily={MONO} fontSize="11" fill={INK}>spawn designer</text>
      </g>
      {/* card 2 · spawn accountant */}
      <g opacity="0">
        <animateMotion dur="20s" repeatCount="indefinite" calcMode="linear" keyTimes="0;0.17;0.28;1" keyPoints="0;0;1;1"><mpath href="#cbToAccountant" /></animateMotion>
        <animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;0.17;0.195;0.28;0.31;1" dur="20s" repeatCount="indefinite" />
        <rect x="-74" y="-14" width="148" height="28" rx="14" fill="var(--color-surface-3)" stroke={ACCENT} strokeWidth="1.2" />
        <circle cx="-58" cy="0" r="3.5" fill={ACCENT} />
        <text x="8" y="4" textAnchor="middle" fontFamily={MONO} fontSize="11" fill={INK}>spawn accountant</text>
      </g>
      {/* card 3 · brief the designer */}
      <g opacity="0">
        <animateMotion dur="20s" repeatCount="indefinite" calcMode="linear" keyTimes="0;0.35;0.46;1" keyPoints="0;0;1;1"><mpath href="#cbToDesigner" /></animateMotion>
        <animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;0.35;0.375;0.46;0.49;1" dur="20s" repeatCount="indefinite" />
        <rect x="-72" y="-14" width="144" height="28" rx="14" fill="var(--color-surface-3)" stroke={SUBTLE} strokeWidth="1.2" />
        <circle cx="-56" cy="0" r="3.5" fill={MUTED} />
        <text x="8" y="4" textAnchor="middle" fontFamily={MONO} fontSize="11" fill={INK}>design the hero</text>
      </g>
      {/* card 4 · designer reply (rides back) */}
      <g opacity="0">
        <animateMotion dur="20s" repeatCount="indefinite" calcMode="linear" keyTimes="0;0.52;0.63;1" keyPoints="0;0;1;1"><mpath href="#cbFromDesigner" /></animateMotion>
        <animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;0.52;0.545;0.63;0.66;1" dur="20s" repeatCount="indefinite" />
        <rect x="-60" y="-14" width="120" height="28" rx="14" fill={GLOW} stroke={ACCENT} strokeWidth="1.4" />
        <circle cx="-46" cy="0" r="3.5" fill={ACCENT} />
        <text x="6" y="4" textAnchor="middle" fontFamily={MONO} fontSize="11" fill={ACCENT}>hero.svg ✓</text>
      </g>
      {/* card 5 · ask the accountant to invoice */}
      <g opacity="0">
        <animateMotion dur="20s" repeatCount="indefinite" calcMode="linear" keyTimes="0;0.67;0.78;1" keyPoints="0;0;1;1"><mpath href="#cbToAccountant" /></animateMotion>
        <animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;0.67;0.695;0.78;0.81;1" dur="20s" repeatCount="indefinite" />
        <rect x="-74" y="-14" width="148" height="28" rx="14" fill="var(--color-surface-3)" stroke={SUBTLE} strokeWidth="1.2" />
        <circle cx="-58" cy="0" r="3.5" fill={MUTED} />
        <text x="8" y="4" textAnchor="middle" fontFamily={MONO} fontSize="11" fill={INK}>invoice the work</text>
      </g>
      {/* card 6 · accountant reply (rides back) */}
      <g opacity="0">
        <animateMotion dur="20s" repeatCount="indefinite" calcMode="linear" keyTimes="0;0.84;0.95;1" keyPoints="0;0;1;1"><mpath href="#cbFromAccountant" /></animateMotion>
        <animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;0.84;0.865;0.95;0.98;1" dur="20s" repeatCount="indefinite" />
        <rect x="-66" y="-14" width="132" height="28" rx="14" fill={GLOW} stroke={ACCENT} strokeWidth="1.4" />
        <circle cx="-52" cy="0" r="3.5" fill={ACCENT} />
        <text x="6" y="4" textAnchor="middle" fontFamily={MONO} fontSize="11" fill={ACCENT}>invoice.pdf ✓</text>
      </g>

      {/* Glass (centre, trusted surface) — inbox as a pill inside · drawn last */}
      <g>
        <ellipse cx="380" cy="220" rx="118" ry="92" fill={GLOW} opacity="0.45">
          <animate attributeName="opacity" values="0.3;0.55;0.3" dur="3.4s" repeatCount="indefinite" />
        </ellipse>
        <rect x="286" y="150" width="188" height="140" rx="14" fill={GLOW} stroke={ACCENT} strokeWidth="1.5" />
        <path d="M 286 196 L 474 168" stroke={ACCENT} strokeWidth="0.75" opacity="0.35" />
        <text x="380" y="182" textAnchor="middle" fontFamily={MONO} fontSize="11" letterSpacing="1.8" fill={ACCENT}>AIOS GLASS</text>
        <text x="380" y="200" textAnchor="middle" fontFamily={SANS} fontSize="10.5" fill={MUTED}>the trusted surface</text>
        <rect x="336" y="214" width="88" height="26" rx="13" fill="var(--color-surface-2)" stroke={HAIR} />
        <circle cx="356" cy="227" r="3" fill={ACCENT} />
        <text x="386" y="231" textAnchor="middle" fontFamily={MONO} fontSize="10.5" fill={INK}>inbox</text>
        <text x="380" y="262" textAnchor="middle" fontFamily={SANS} fontSize="9.5" fill={SUBTLE}>watches · fulfils natively</text>
      </g>
    </svg>
  );
}
