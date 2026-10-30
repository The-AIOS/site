/* YourAios — section 00, before "01 · What". It opens on "You already have a team." and
 * a quiet role switcher; the story runs horizontally, seven frames per role (the pain →
 * your day → your team → the AIOS → Forum → the proof pair → compounding), a line or two
 * of text per frame and a small animated SVG that carries it.
 *
 * The track continues: after a role's last frame comes the NEXT role's first frame,
 * wrapping from the last role to the first. The window rendered is the current role's
 * seven frames plus that next first frame; when the visitor crosses into it the
 * section hands off (the role switches, the track resets to its frame 1, the counter
 * restarts at 01 / 07). Frame 1 of every role carries a loud marker — the role name
 * large, a break in the track — so a new role is unmistakable.
 *
 * Native horizontal scroll with snap: swipe on a phone, trackpad on a laptop, arrows and
 * dots for everyone, ← → when the track has focus. prefers-reduced-motion turns the
 * track into a plain list, hides the controls, and freezes every SVG. Deep links
 * (`#ceo`, `#entrepreneur`, …) open that role at its frame 1 and bring the section into
 * view; the hero field dispatches the same `aios:role` event.
 *
 * All reader-facing prose comes from CONTENT[locale].roles; agent names stay English in
 * every locale by design. The SVGs are hand-drawn here in the site's own tokens. */

"use client";

import { useCallback, useEffect, useId, useLayoutEffect, useRef, useState, type ReactNode } from "react";
import { ROLE_ORDER, isRoleId, type RoleId } from "@/data/roles";
import { ROLE_EVENT, ROLE_SECTION_ID } from "./RoleField";
import type { RolesContent, RoleStory } from "@/content";
import "./roles.css";

const MAIL = "mailto:j@the-aios.com?subject=";
const FRAMES = 7;

function initials(agent: string): string {
  const p = agent.replace(/^\//, "").replace(/\.md$/, "").split(/[-\s]+/).filter(Boolean);
  return ((p[0] ?? "a").charAt(0) + (p[1] ? p[1].charAt(0) : "")).toUpperCase();
}

/* ============================================================================
   The seven visuals. Tokens only (var(--color-*)); motion is CSS classes defined
   in roles.css (yv-pop, yv-draw, yv-flow, yv-float, yv-grow, yv-ride) and every one
   of them is switched off under prefers-reduced-motion, leaving the final state.
   ============================================================================ */

const INK = "var(--color-ink)", MUTED = "var(--color-ink-muted)", SUBTLE = "var(--color-ink-subtle)",
  HAIR = "var(--color-hairline)", ACC = "var(--color-accent)", GLOW = "var(--color-accent-glow)",
  S2 = "var(--color-surface-2)", S3 = "var(--color-surface-3)";
const MONO = "var(--font-mono)", SANS = "var(--font-display)";

/** 01 · the pain: one person, the work piling up. */
function PainViz({ alt }: { alt: string }) {
  const piles = [0, 1, 2, 3, 4, 5, 6];
  return (
    <svg viewBox="0 0 320 200" className="yv" role="img" aria-label={alt}>
      <circle cx="70" cy="86" r="22" fill={S3} stroke={HAIR} strokeWidth="2" />
      <path d="M38 160 C 38 128, 102 128, 102 160 Z" fill={S3} stroke={HAIR} strokeWidth="2" />
      <circle className="yv-float" cx="70" cy="86" r="5" fill={ACC} style={{ transformOrigin: "70px 86px" }} />
      {piles.map((i) => {
        const col = i % 3, row = Math.floor(i / 3);
        const x = 150 + col * 54, y = 150 - row * 34;
        return (
          <g key={i} className="yv-pop" style={{ animationDelay: `${0.25 + i * 0.22}s`, transformOrigin: `${x + 22}px ${y + 12}px` }}>
            <rect x={x} y={y} width="44" height="24" rx="5" fill={S2} stroke={HAIR} strokeWidth="1.5" />
            <rect x={x + 8} y={y + 10} width={18 + (i % 3) * 5} height="3" rx="1.5" fill={SUBTLE} />
          </g>
        );
      })}
      <line x1="30" y1="166" x2="290" y2="166" stroke={HAIR} strokeWidth="2" />
    </svg>
  );
}

/** 02 · your day: a sun rides the arc; three stops light up as it passes. */
function DayViz({ beats, alt }: { beats: [string, string, string][]; alt: string }) {
  const stops = [[62, 113], [160, 60], [258, 113]];
  return (
    <svg viewBox="0 0 320 200" className="yv" role="img" aria-label={alt}>
      <path d="M40 140 Q 160 -20 280 140" fill="none" stroke={HAIR} strokeWidth="2" strokeDasharray="4 7" />
      <circle className="yv-ride" r="9" fill={ACC} style={{ offsetPath: "path('M40 140 Q 160 -20 280 140')" } as React.CSSProperties} />
      {stops.map(([x, y], i) => (
        <g key={i}>
          <circle className="yv-pop" cx={x} cy={y} r="6" fill={i === 1 ? ACC : S3} stroke={i === 1 ? ACC : SUBTLE} strokeWidth="2" style={{ animationDelay: `${0.4 + i * 0.6}s`, transformOrigin: `${x}px ${y}px` }} />
          <text x={x} y={y + 24} textAnchor="middle" fontFamily={MONO} fontSize="9" letterSpacing="1" fill={SUBTLE}>{(beats[i]?.[0] ?? "").toUpperCase()}</text>
          <text x={x} y={y + 40} textAnchor="middle" fontFamily={SANS} fontSize="10.5" fontWeight="600" fill={INK}>{beats[i]?.[1] ?? ""}</text>
        </g>
      ))}
      <line x1="30" y1="166" x2="290" y2="166" stroke={HAIR} strokeWidth="2" />
    </svg>
  );
}

/** 03 · your team: you in the middle, the people you couldn't hire connecting in. */
function TeamViz({ team, alt }: { team: [string, string, string][]; alt: string }) {
  const n = Math.min(team.length, 7);
  const cx = 160, cy = 100, R = 72;
  return (
    <svg viewBox="0 0 320 200" className="yv" role="img" aria-label={alt}>
      {team.slice(0, n).map((m, i) => {
        const a = (-90 + (360 / n) * i) * (Math.PI / 180);
        const x = cx + R * Math.cos(a), y = cy + R * Math.sin(a);
        return (
          <g key={m[1]}>
            <line className="yv-draw" x1={cx} y1={cy} x2={x} y2={y} stroke={HAIR} strokeWidth="1.5" style={{ animationDelay: `${0.15 + i * 0.12}s` }} />
            <g className="yv-pop" style={{ animationDelay: `${0.35 + i * 0.12}s`, transformOrigin: `${x}px ${y}px` }}>
              <circle cx={x} cy={y} r="14" fill={S2} stroke={HAIR} strokeWidth="1.5" />
              <text x={x} y={y + 3.5} textAnchor="middle" fontFamily={MONO} fontSize="9" fontWeight="600" fill={INK}>{initials(m[1])}</text>
            </g>
          </g>
        );
      })}
      <circle className="yv-float" cx={cx} cy={cy} r="20" fill={GLOW} stroke={ACC} strokeWidth="2" style={{ transformOrigin: `${cx}px ${cy}px` }} />
      <text x={cx} y={cy + 4} textAnchor="middle" fontFamily={SANS} fontSize="11" fontWeight="700" fill={INK}>you</text>
    </svg>
  );
}

/** 04 · the AIOS: three layers, and the loop that compounds. */
function AiosViz({ layers, alt }: { layers: [string, string, string][]; alt: string }) {
  return (
    <svg viewBox="0 0 320 200" className="yv" role="img" aria-label={alt}>
      {layers.map((l, i) => {
        const y = 30 + i * 50;
        return (
          <g key={l[0]} className="yv-pop" style={{ animationDelay: `${0.2 + i * 0.25}s`, transformOrigin: `160px ${y + 20}px` }}>
            <rect x="64" y={y} width="192" height="40" rx="8" fill={i === 2 ? GLOW : S2} stroke={i === 2 ? ACC : HAIR} strokeWidth={i === 2 ? 2 : 1.5} />
            <text x="78" y={y + 15} fontFamily={MONO} fontSize="7.5" letterSpacing="1.2" fill={ACC}>{l[0].toUpperCase()}</text>
            <text x="78" y={y + 31} fontFamily={SANS} fontSize="10.5" fontWeight="600" fill={INK}>{l[1]}</text>
          </g>
        );
      })}
      <path className="yv-flow" d="M268 50 C 306 50, 306 150, 268 150" fill="none" stroke={ACC} strokeWidth="2" strokeDasharray="5 7" />
      <path d="M272 146 L 268 150 L 274 152" fill="none" stroke={ACC} strokeWidth="2" strokeLinecap="round" />
      <path className="yv-flow" d="M52 150 C 14 150, 14 50, 52 50" fill="none" stroke={ACC} strokeWidth="2" strokeDasharray="5 7" />
      <path d="M48 54 L 52 50 L 46 48" fill="none" stroke={ACC} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

/** 05 · Forum: two teams, a signed exchange. */
function ForumViz({ pair, alt }: { pair: [string, string]; alt: string }) {
  return (
    <svg viewBox="0 0 320 200" className="yv" role="img" aria-label={alt}>
      <circle cx="70" cy="100" r="34" fill={GLOW} stroke={ACC} strokeWidth="2" />
      <text x="70" y="104" textAnchor="middle" fontFamily={SANS} fontSize="10.5" fontWeight="700" fill={INK}>{pair[0]}</text>
      <circle cx="250" cy="100" r="34" fill={S2} stroke={HAIR} strokeWidth="2" />
      <text x="250" y="104" textAnchor="middle" fontFamily={SANS} fontSize="10.5" fontWeight="700" fill={INK}>{pair[1]}</text>
      <path d="M106 90 C 160 60, 160 60, 214 90" fill="none" stroke={HAIR} strokeWidth="1.5" />
      <path d="M214 110 C 160 140, 160 140, 106 110" fill="none" stroke={HAIR} strokeWidth="1.5" />
      <rect className="yv-ride" x="-7" y="-5" width="14" height="10" rx="2" fill={ACC} style={{ offsetPath: "path('M106 90 C 160 60, 160 60, 214 90')" } as React.CSSProperties} />
      <rect className="yv-ride yv-ride-b" x="-7" y="-5" width="14" height="10" rx="2" fill={SUBTLE} style={{ offsetPath: "path('M214 110 C 160 140, 160 140, 106 110')" } as React.CSSProperties} />
      <g className="yv-pop" style={{ animationDelay: "1.1s", transformOrigin: "160px 42px" }}>
        <circle cx="160" cy="42" r="11" fill={S2} stroke={ACC} strokeWidth="1.5" />
        <path d="M154.5 42.5 L158.5 46 L166 38.5" fill="none" stroke={ACC} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <g className="yv-pop" style={{ animationDelay: "2.3s", transformOrigin: "160px 158px" }}>
        <circle cx="160" cy="158" r="11" fill={S2} stroke={ACC} strokeWidth="1.5" />
        <path d="M154.5 158.5 L158.5 162 L166 154.5" fill="none" stroke={ACC} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  );
}

/** 06 · the proof pair: mandate in, receipt out. */
function ProofViz({ chain, before, after, alt }: { chain: [string, string, string, string]; before: string; after: string; alt: string }) {
  const xs = [44, 122, 200, 278];
  return (
    <svg viewBox="0 0 320 200" className="yv" role="img" aria-label={alt}>
      <text x="122" y="40" textAnchor="middle" fontFamily={MONO} fontSize="8.5" letterSpacing="1.2" fill={SUBTLE}>{before}</text>
      <text x="278" y="40" textAnchor="middle" fontFamily={MONO} fontSize="8.5" letterSpacing="1.2" fill={SUBTLE}>{after}</text>
      <path d="M84 52 L84 48 L160 48 L160 52 M240 52 L240 48 L316 48 L316 52" fill="none" stroke={HAIR} strokeWidth="1.2" />
      {[0, 1, 2].map((i) => (
        <line key={i} className="yv-draw" x1={xs[i] + 24} y1="100" x2={xs[i + 1] - 24} y2="100" stroke={HAIR} strokeWidth="2" style={{ animationDelay: `${0.3 + i * 0.4}s` }} />
      ))}
      {chain.map((label, i) => (
        <g key={label} className="yv-pop" style={{ animationDelay: `${0.15 + i * 0.4}s`, transformOrigin: `${xs[i]}px 100px` }}>
          <circle cx={xs[i]} cy="100" r="24" fill={i === 2 ? GLOW : S2} stroke={i === 2 ? ACC : i === 1 ? SUBTLE : HAIR} strokeWidth={i === 2 ? 2.2 : 1.8} strokeDasharray={i === 1 ? "4 4" : undefined} />
          <text x={xs[i]} y="104" textAnchor="middle" fontFamily={SANS} fontSize="10" fontWeight="600" fill={INK}>{label}</text>
        </g>
      ))}
      <g className="yv-pop" style={{ animationDelay: "1.9s", transformOrigin: "278px 100px" }}>
        <circle cx="296" cy="82" r="9" fill={ACC} />
        <path d="M291.5 82.5 L295 86 L301 79" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  );
}

/** 07 · compounding: the curve, and three marks on it. */
function CompoundViz({ horizon, alt }: { horizon: [string, string, string]; alt: string }) {
  const marks = [[86, 156], [166, 137], [268, 46]];
  return (
    <svg viewBox="0 0 320 200" className="yv" role="img" aria-label={alt}>
      <line x1="40" y1="160" x2="290" y2="160" stroke={HAIR} strokeWidth="2" />
      <line x1="40" y1="160" x2="40" y2="30" stroke={HAIR} strokeWidth="2" />
      <path d="M40 160 C 120 156, 180 140, 230 100 C 250 82, 262 62, 268 46 L 268 160 Z" fill={GLOW} className="yv-fade" />
      <path className="yv-draw yv-draw-long" d="M40 160 C 120 156, 180 140, 230 100 C 250 82, 262 62, 268 46" fill="none" stroke={ACC} strokeWidth="2.5" strokeLinecap="round" />
      {marks.map(([x, y], i) => (
        <g key={i} className="yv-pop" style={{ animationDelay: `${0.6 + i * 0.5}s`, transformOrigin: `${x}px ${y}px` }}>
          <circle cx={x} cy={y} r="6" fill={i === 2 ? ACC : S3} stroke={ACC} strokeWidth="2" />
          <text x={x} y="182" textAnchor="middle" fontFamily={MONO} fontSize="9" letterSpacing="1" fill={SUBTLE}>{horizon[i].toUpperCase()}</text>
        </g>
      ))}
    </svg>
  );
}

/* ============================================================================ */

function Frame({ n, label, title, visual, first, peek, roleLabel, markerLabel, children }: {
  n: number; label: string; title: string; visual: ReactNode; first?: boolean; peek?: boolean; roleLabel?: string; markerLabel?: string; children: ReactNode;
}) {
  const cls = ["yo-frame", first ? "yo-frame--first" : "", peek ? "yo-peek" : ""].filter(Boolean).join(" ");
  return (
    <div className={cls} role="group" aria-roledescription="slide" aria-label={`${roleLabel ? roleLabel + " · " : ""}${n} / ${FRAMES} · ${label}`}>
      {first && (
        <div className="yo-marker" aria-hidden="true">
          <span className="yo-marker-k">{markerLabel}</span>
          <span className="yo-marker-name">{roleLabel}</span>
        </div>
      )}
      <div className="yo-frame-text">
        <p className="yo-frame-n"><b>{String(n).padStart(2, "0")}</b>{label}</p>
        <h3>{title}</h3>
        {children}
      </div>
      <div className="yo-visual">{visual}</div>
    </div>
  );
}

function RoleFrames({ r, c }: { r: RoleStory; c: RolesContent }) {
  const mail = (subject: string) => MAIL + encodeURIComponent(subject);
  const s = c.steps;
  return (
    <>
      <Frame n={1} label={s.pain} title={r.painTitle} first roleLabel={r.label} markerLabel={c.marker} visual={<PainViz alt={c.alts.pain} />}>
        <p>{r.pain}</p>
      </Frame>
      <Frame n={2} label={s.day} title={r.dayTitle} visual={<DayViz beats={r.day} alt={c.alts.day} />}>
        <p>{r.dayLede}</p>
      </Frame>
      <Frame n={3} label={s.team} title={r.teamTitle} visual={<TeamViz team={r.team} alt={c.alts.team} />}>
        <p>{r.teamLede}</p>
        <ul className="yo-chips" aria-label={s.team}>
          {r.team.map((m) => <li key={m[1]} title={m[2]}><b>{m[0]}</b><code>{m[1]}</code></li>)}
        </ul>
      </Frame>
      <Frame n={4} label={s.aios} title={c.aiosTitle} visual={<AiosViz layers={c.stack} alt={c.alts.aios} />}>
        <p>{c.aiosLede}</p>
        <p>{r.aios}</p>
      </Frame>
      <Frame n={5} label={s.forum} title={c.forumTitle} visual={<ForumViz pair={c.forumPair} alt={c.alts.forum} />}>
        <p>{r.forum}</p>
      </Frame>
      <Frame n={6} label={s.proof} title={c.proofTitle} visual={<ProofViz chain={c.chain} before={c.before} after={c.after} alt={c.alts.proof} />}>
        <p>{r.proof}</p>
        {r.story && (
          <details className="yo-story">
            <summary>{r.story.label} · {r.story.title}</summary>
            <p>{r.story.body}</p>
            {r.story.cite && <p className="cite">{r.story.cite}</p>}
          </details>
        )}
      </Frame>
      <Frame n={7} label={s.compound} title={r.compound.title} visual={<CompoundViz horizon={c.horizon} alt={c.alts.compound} />}>
        <p>{r.compound.lede}</p>
        <ul className="yo-marks">
          {r.compound.marks.map((m, i) => <li key={i}><span>{c.horizon[i]}</span>{m}</li>)}
        </ul>
        <div className="yo-cta">
          <a href={mail(r.next.subject)} className="btn-primary">{r.next.cta}</a>
          <a href="https://www.the-aios.org/proof-pair/" className="repo-link-inline" target="_blank" rel="noreferrer">{c.spec}</a>
        </div>
      </Frame>
    </>
  );
}

/* ============================================================================ */

export function YourAios({ c, num = "00" }: { c: RolesContent; num?: string }) {
  const uid = useId();
  const byId = useRef(new Map(c.items.map((r) => [r.id, r])));
  const ids = ROLE_ORDER.filter((id) => byId.current.has(id));
  const [cur, setCur] = useState<RoleId>(ids[0] ?? "entrepreneur");
  const [frame, setFrame] = useState(0);           // 0..6 this role; 7 = standing on the next role's marker
  const trackRef = useRef<HTMLDivElement | null>(null);
  const pending = useRef<number | null>(null);     // where to land after a role handoff

  const nextOf = useCallback((id: RoleId, d: 1 | -1): RoleId => ids[(ids.indexOf(id) + d + ids.length) % ids.length], [ids]);

  /* "instant" on purpose: the track's CSS scroll-behavior is smooth, and "auto" would inherit it */
  const scrollTo = useCallback((i: number, smooth: boolean) => {
    const t = trackRef.current;
    if (!t) return;
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    t.scrollTo({ left: i * t.clientWidth, behavior: smooth && !reduce ? "smooth" : "instant" });
  }, []);

  /* after a handoff the DOM holds the new role's frames: land on the right one before paint */
  useLayoutEffect(() => {
    if (pending.current == null) return;
    const i = pending.current; pending.current = null;
    setFrame(i); scrollTo(i, false);
  }, [cur, scrollTo]);

  const select = useCallback((id: RoleId, landAt = 0) => {
    if (id === cur) { setFrame(landAt); scrollTo(landAt, false); return; }
    pending.current = landAt;
    setCur(id);
  }, [cur, scrollTo]);

  /* the handoff: the visitor is standing on the next role's marker → that role takes over at its frame 1 */
  const handoff = useCallback(() => {
    if (pending.current != null) return;
    const id = nextOf(cur, 1);
    try { history.replaceState(null, "", `#${id}`); } catch { /* ignore */ }
    select(id, 0);
  }, [cur, nextOf, select]);

  const goFrame = useCallback((i: number) => {
    if (i < 0) { select(nextOf(cur, -1), FRAMES - 1); return; }   // back past frame 1 → previous role's last frame
    if (i > FRAMES) return;
    setFrame(i); scrollTo(i, true);                                // i === FRAMES scrolls onto the marker; the scroll settling hands off
  }, [cur, nextOf, select, scrollTo]);

  /* deep links + the hero field's event */
  useEffect(() => {
    const fromHash = (scroll: boolean) => {
      const h = (location.hash || "").replace(/^#/, "");
      if (isRoleId(h) && byId.current.has(h)) {
        select(h, 0);
        if (scroll) document.getElementById(ROLE_SECTION_ID)?.scrollIntoView({ block: "start" });
      }
    };
    fromHash(true);
    const onHash = () => fromHash(true);
    const onEvent = (e: Event) => { const id = (e as CustomEvent<RoleId>).detail; if (isRoleId(id)) select(id, 0); };
    window.addEventListener("hashchange", onHash);
    window.addEventListener(ROLE_EVENT, onEvent);
    return () => { window.removeEventListener("hashchange", onHash); window.removeEventListener(ROLE_EVENT, onEvent); };
  }, [select]);

  /* keep the counter honest on swipe; once the scroll settles on the marker, hand off */
  useEffect(() => {
    const t = trackRef.current;
    if (!t) return;
    let raf = 0, settle = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const w = Math.max(1, t.clientWidth);
        const n = Math.min(FRAMES, Math.round(t.scrollLeft / w));
        setFrame((f) => (f === n ? f : n));
      });
      clearTimeout(settle);
      settle = window.setTimeout(() => {
        const w = Math.max(1, t.clientWidth);
        if (t.scrollLeft >= FRAMES * w - 2) handoff();
      }, 120);
    };
    t.addEventListener("scroll", onScroll, { passive: true });
    const onResize = () => { t.scrollTo({ left: Math.min(frame, FRAMES - 1) * t.clientWidth, behavior: "instant" }); };
    window.addEventListener("resize", onResize);
    return () => { t.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onResize); cancelAnimationFrame(raf); clearTimeout(settle); };
  }, [frame, handoff]);

  const onTrackKey = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowRight") { e.preventDefault(); goFrame(frame + 1); }
    else if (e.key === "ArrowLeft") { e.preventDefault(); goFrame(frame - 1); }
    else if (e.key === "Home") { e.preventDefault(); goFrame(0); }
    else if (e.key === "End") { e.preventDefault(); goFrame(FRAMES - 1); }
  };

  const onSwitchKey = (e: React.KeyboardEvent<HTMLDivElement>) => {
    let next: RoleId | null = null;
    if (e.key === "ArrowRight") next = nextOf(cur, 1);
    else if (e.key === "ArrowLeft") next = nextOf(cur, -1);
    else if (e.key === "Home") next = ids[0];
    else if (e.key === "End") next = ids[ids.length - 1];
    if (next) {
      e.preventDefault();
      try { history.replaceState(null, "", `#${next}`); } catch { /* ignore */ }
      select(next, 0);
      document.getElementById(`${uid}-r-${next}`)?.focus();
    }
  };

  const r: RoleStory = byId.current.get(cur) ?? c.items[0];
  const peek: RoleStory = byId.current.get(nextOf(cur, 1)) ?? c.items[0];
  const steps = [c.steps.pain, c.steps.day, c.steps.team, c.steps.aios, c.steps.forum, c.steps.proof, c.steps.compound];
  const atPeek = frame >= FRAMES;                 // standing on the marker: the counter already reads the next role, 01 / 07
  const shown = atPeek ? 0 : frame;
  const who = atPeek ? peek : r;

  return (
    <section id={ROLE_SECTION_ID} className="section hero-glow">
      <div className="container">
        <div className="section-label">
          <span className="num">{num}</span>
          <span className="eyebrow">{c.eyebrow}</span>
        </div>
        <h2 className="display-lg" style={{ marginBottom: "1rem", maxWidth: "18ch" }}>
          {c.h[0]}<span className="accent">{c.h[1]}</span>{c.h[2]}
        </h2>

        {/* the quiet switcher */}
        <div className="yo-switch" role="tablist" aria-label={c.tabsLabel} onKeyDown={onSwitchKey}>
          <span className="yo-switch-k" aria-hidden="true">{c.switchLabel}</span>
          {ids.map((id) => {
            const on = id === who.id;
            return (
              <button
                key={id}
                id={`${uid}-r-${id}`}
                type="button"
                role="tab"
                aria-selected={on}
                aria-controls={`${uid}-panel`}
                tabIndex={on ? 0 : -1}
                className="yo-role"
                onClick={() => { try { history.replaceState(null, "", `#${id}`); } catch { /* ignore */ } select(id, 0); }}
              >
                {byId.current.get(id)!.label}
              </button>
            );
          })}
        </div>

        {/* the track: this role's seven frames, then the next role's first */}
        <div className="yo-stage" id={`${uid}-panel`} role="tabpanel" aria-label={r.label}>
          <div
            className="yo-track"
            ref={trackRef}
            tabIndex={0}
            role="group"
            aria-roledescription="carousel"
            aria-label={`${r.label} · ${c.trackLabel}`}
            onKeyDown={onTrackKey}
          >
            <RoleFrames key={r.id} r={r} c={c} />
            {/* the peek: the next role's frame 1 with its marker; settling on it hands the track over */}
            <Frame n={1} label={c.steps.pain} title={peek.painTitle} first peek roleLabel={peek.label} markerLabel={c.marker} visual={<PainViz alt={c.alts.pain} />}>
              <p>{peek.pain}</p>
            </Frame>
          </div>

          <div className="yo-ctl">
            <ul className="yo-dots" aria-label={c.trackLabel}>
              {steps.map((s, i) => (
                <li key={s}>
                  <button type="button" className="yo-dot" aria-current={i === shown} aria-label={`${i + 1} / ${FRAMES} · ${s}`} onClick={() => goFrame(i)} />
                </li>
              ))}
            </ul>
            <span className="yo-where" aria-hidden="true">{who.label} · {String(shown + 1).padStart(2, "0")} / {String(FRAMES).padStart(2, "0")} · {steps[shown]}</span>
            <div className="yo-arrows">
              <button type="button" className="icon-btn" aria-label={c.prev} onClick={() => goFrame(frame - 1)}>
                <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true"><path d="M9 2.5L4.5 7 9 11.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </button>
              <button type="button" className="icon-btn" aria-label={frame >= FRAMES - 1 ? `${c.next} · ${peek.label}` : c.next} onClick={() => goFrame(frame + 1)}>
                <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true"><path d="M5 2.5L9.5 7 5 11.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
