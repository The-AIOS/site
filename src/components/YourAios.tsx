/* YourAios — section 00, before "01 · What". One quiet line names the moment, a mono
 * line switches the role, and the story runs horizontally: six frames, one per step
 * (the pain → your day → your team → the AIOS → Forum → the proof pair), each with
 * little text and a visual that carries it. The section takes about one screen.
 *
 * The track is native horizontal scroll with snap — swipe on a phone, trackpad on a
 * laptop, arrows and dots for everyone, ← → when the track has focus. Under
 * prefers-reduced-motion the CSS turns the track into a plain vertical list and hides
 * the controls. Deep links (`#ceo`, `#entrepreneur`, …) open the role on load and on
 * hashchange and bring the section into view; the hero field dispatches the same
 * `aios:role` event this section listens to.
 *
 * All reader-facing prose comes from CONTENT[locale].roles; agent names stay English
 * in every locale by design. */

"use client";

import { useCallback, useEffect, useId, useRef, useState, type ReactNode } from "react";
import { MOMENT_LINKS, ROLE_ORDER, isRoleId, type RoleId } from "@/data/roles";
import { ROLE_EVENT, ROLE_SECTION_ID } from "./RoleField";
import type { RolesContent, RoleStory } from "@/content";
import "./roles.css";

const MAIL = "mailto:j@the-aios.com?subject=";
const FRAMES = 6;

function initials(agent: string): string {
  const p = agent.replace(/^\//, "").replace(/\.md$/, "").split(/[-\s]+/).filter(Boolean);
  return ((p[0] ?? "a").charAt(0) + (p[1] ? p[1].charAt(0) : "")).toUpperCase();
}

/* ---------- the two hand-drawn visuals ---------- */

/** 04 · the AIOS: context · rituals · agents, as three layers. */
function Stack({ c }: { c: RolesContent }) {
  return (
    <div className="yo-stack" role="img" aria-label={c.stackAlt}>
      {c.stack.map((l, i) => (
        <div key={l[0]} className={i === 2 ? "yo-layer hot" : "yo-layer"}>
          <span className="k">{l[0]}</span>
          <div><b>{l[1]}</b><span>{l[2]}</span></div>
        </div>
      ))}
    </div>
  );
}

/** 06 · the proof pair: human → mandate → agent → receipt. */
function Chain({ c }: { c: RolesContent }) {
  const n = c.chain; // [human, mandate, agent, receipt]
  return (
    <svg viewBox="0 0 560 190" role="img" aria-label={c.chainAlt}>
      <g fill="none" stroke="var(--color-hairline)" strokeWidth="2">
        <path d="M92 100 L150 100 M232 100 L290 100 M372 100 L430 100" />
      </g>
      <g fontFamily="var(--font-display)" fontSize="13" fontWeight="600" fill="var(--color-ink)" textAnchor="middle">
        <circle cx="58" cy="100" r="34" fill="var(--color-surface-2)" stroke="var(--color-hairline)" strokeWidth="2" />
        <text x="58" y="104">{n[0]}</text>
        <circle cx="191" cy="100" r="34" fill="var(--color-surface-2)" stroke="var(--color-ink-subtle)" strokeWidth="2" strokeDasharray="4 5" />
        <text x="191" y="104">{n[1]}</text>
        <circle cx="331" cy="100" r="34" fill="var(--color-accent-glow)" stroke="var(--color-accent)" strokeWidth="2.4" />
        <text x="331" y="104">{n[2]}</text>
        <circle cx="471" cy="100" r="34" fill="var(--color-surface-2)" stroke="var(--color-ink-subtle)" strokeWidth="2" />
        <text x="471" y="104">{n[3]}</text>
      </g>
      <g fontFamily="var(--font-mono)" fontSize="10" letterSpacing="1.5" fill="var(--color-ink-subtle)" textAnchor="middle">
        <text x="191" y="38">{c.before}</text>
        <text x="471" y="38">{c.after}</text>
      </g>
      <g fill="none" stroke="var(--color-hairline)" strokeWidth="1.5">
        <path d="M130 46 L130 42 L252 42 L252 46 M410 46 L410 42 L532 42 L532 46" />
      </g>
      <text x="280" y="170" fontFamily="var(--font-display)" fontSize="11.5" fill="var(--color-ink-subtle)" textAnchor="middle">{c.chainNote}</text>
    </svg>
  );
}

/* ---------- a frame ---------- */

function Frame({ n, label, title, visual, children, uid }: { n: number; label: string; title: string; visual: ReactNode; children: ReactNode; uid: string }) {
  return (
    <div className="yo-frame" role="group" aria-roledescription="slide" aria-label={`${n} / ${FRAMES} · ${label}`} id={`${uid}-f${n}`}>
      <div>
        <p className="yo-frame-n"><b>{String(n).padStart(2, "0")}</b>{label}</p>
        <h3>{title}</h3>
        {children}
      </div>
      <div className="yo-visual">{visual}</div>
    </div>
  );
}

/* ---------- the section ---------- */

export function YourAios({ c, num = "00" }: { c: RolesContent; num?: string }) {
  const uid = useId();
  const byId = useRef(new Map(c.items.map((r) => [r.id, r])));
  const ids = ROLE_ORDER.filter((id) => byId.current.has(id));
  const [cur, setCur] = useState<RoleId>(ids[0] ?? "entrepreneur");
  const [frame, setFrame] = useState(0);
  const trackRef = useRef<HTMLDivElement | null>(null);

  const goFrame = useCallback((i: number, smooth = true) => {
    const t = trackRef.current;
    const n = Math.max(0, Math.min(FRAMES - 1, i));
    setFrame(n);
    if (!t) return;
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    t.scrollTo({ left: n * t.clientWidth, behavior: smooth && !reduce ? "smooth" : "auto" });
  }, []);

  const select = useCallback((id: RoleId) => {
    setCur(id);
    goFrame(0, false);
  }, [goFrame]);

  /* deep links + the hero field's event */
  useEffect(() => {
    const fromHash = (scroll: boolean) => {
      const h = (location.hash || "").replace(/^#/, "");
      if (isRoleId(h) && byId.current.has(h)) {
        select(h);
        if (scroll) document.getElementById(ROLE_SECTION_ID)?.scrollIntoView({ block: "start" });
      }
    };
    fromHash(true);
    const onHash = () => fromHash(true);
    const onEvent = (e: Event) => { const id = (e as CustomEvent<RoleId>).detail; if (isRoleId(id)) select(id); };
    window.addEventListener("hashchange", onHash);
    window.addEventListener(ROLE_EVENT, onEvent);
    return () => { window.removeEventListener("hashchange", onHash); window.removeEventListener(ROLE_EVENT, onEvent); };
  }, [select]);

  /* keep the dots honest when the visitor swipes or drags */
  useEffect(() => {
    const t = trackRef.current;
    if (!t) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const n = Math.round(t.scrollLeft / Math.max(1, t.clientWidth));
        setFrame((f) => (f === n ? f : n));
      });
    };
    t.addEventListener("scroll", onScroll, { passive: true });
    const onResize = () => { t.scrollTo({ left: frame * t.clientWidth, behavior: "auto" }); };
    window.addEventListener("resize", onResize);
    return () => { t.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onResize); cancelAnimationFrame(raf); };
  }, [frame]);

  const onTrackKey = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowRight") { e.preventDefault(); goFrame(frame + 1); }
    else if (e.key === "ArrowLeft") { e.preventDefault(); goFrame(frame - 1); }
    else if (e.key === "Home") { e.preventDefault(); goFrame(0); }
    else if (e.key === "End") { e.preventDefault(); goFrame(FRAMES - 1); }
  };

  const onSwitchKey = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const i = ids.indexOf(cur);
    let next: RoleId | null = null;
    if (e.key === "ArrowRight") next = ids[(i + 1) % ids.length];
    else if (e.key === "ArrowLeft") next = ids[(i - 1 + ids.length) % ids.length];
    else if (e.key === "Home") next = ids[0];
    else if (e.key === "End") next = ids[ids.length - 1];
    if (next) {
      e.preventDefault();
      try { history.replaceState(null, "", `#${next}`); } catch { /* ignore */ }
      select(next);
      document.getElementById(`${uid}-r-${next}`)?.focus();
    }
  };

  const r: RoleStory = byId.current.get(cur) ?? c.items[0];
  const mail = (subject: string) => MAIL + encodeURIComponent(subject);
  const steps = [c.steps.pain, c.steps.day, c.steps.team, c.steps.aios, c.steps.forum, c.steps.proof];

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
        <p className="yo-moment">
          {c.moment.pre}
          <a href={MOMENT_LINKS.mckinsey} target="_blank" rel="noreferrer">{c.moment.mckinsey}</a>
          {c.moment.mid}
          <a href={MOMENT_LINKS.blackOctober} target="_blank" rel="noreferrer">{c.moment.black}</a>
          {c.moment.post}
        </p>

        {/* the quiet switcher */}
        <div className="yo-switch" role="tablist" aria-label={c.tabsLabel} onKeyDown={onSwitchKey}>
          <span className="yo-switch-k" aria-hidden="true">{c.switchLabel}</span>
          {ids.map((id) => {
            const on = id === cur;
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
                onClick={() => { try { history.replaceState(null, "", `#${id}`); } catch { /* ignore */ } select(id); }}
              >
                {byId.current.get(id)!.label}
              </button>
            );
          })}
        </div>

        {/* the track */}
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
            {/* 01 · the pain */}
            <Frame n={1} label={steps[0]} title={r.painTitle} uid={uid} visual={<p className="yo-pain">{r.painBig[0]}<span className="accent">{r.painBig[1]}</span>{r.painBig[2]}</p>}>
              <p>{r.pain}</p>
            </Frame>

            {/* 02 · your day */}
            <Frame n={2} label={steps[1]} title={r.dayTitle} uid={uid} visual={
              <div className="yo-beats">
                {r.day.map((d, i) => (
                  <div key={d[0]} className={i === 1 ? "yo-beat hot" : "yo-beat"}>
                    <span className="t">{d[0]}</span><b>{d[1]}</b><span>{d[2]}</span>
                  </div>
                ))}
              </div>
            }>
              <p>{r.dayLede}</p>
            </Frame>

            {/* 03 · your team */}
            <Frame n={3} label={steps[2]} title={r.teamTitle} uid={uid} visual={
              <div className="yo-team">
                {r.team.map((m) => (
                  <div key={m[1]} className="yo-member">
                    <i aria-hidden="true">{initials(m[1])}</i>
                    <b>{m[0]}</b>
                    <code>{m[1]}</code>
                    <span>{m[2]}</span>
                  </div>
                ))}
              </div>
            }>
              <p>{r.teamLede}</p>
              <p className="caption" style={{ textTransform: "none", letterSpacing: 0, maxWidth: "44ch" }}>{c.know}</p>
            </Frame>

            {/* 04 · the AIOS */}
            <Frame n={4} label={steps[3]} title={c.aiosTitle} uid={uid} visual={<Stack c={c} />}>
              <p>{c.aiosLede}</p>
              <p>{r.aios}</p>
            </Frame>

            {/* 05 · Forum */}
            <Frame n={5} label={steps[4]} title={c.forumTitle} uid={uid} visual={
              <div className="yo-room" role="img" aria-label={c.roomAlt}>
                <div className="rh"><b>{c.room.name}</b><span>{c.room.meta}</span><span className="live">{c.room.live}</span></div>
                {c.room.msgs.map((m, i) => (
                  <div key={i} className={m[3] ? "yo-msg them" : "yo-msg"}>
                    <i aria-hidden="true">{m[0]}</i>
                    <div><div className="who"><b>{m[1]}</b></div><p>{m[2]}</p>{m[4] && <div className="sys">{m[4]}</div>}</div>
                  </div>
                ))}
              </div>
            }>
              <p>{c.forumLede}</p>
              <p>{r.forum}</p>
            </Frame>

            {/* 06 · the proof pair — the ending */}
            <Frame n={6} label={steps[5]} title={c.proofTitle} uid={uid} visual={<Chain c={c} />}>
              <p>{r.proof}</p>
              {r.story && (
                <details className="yo-story">
                  <summary>{r.story.label} · {r.story.title}</summary>
                  <p>{r.story.body}</p>
                  {r.story.cite && <p className="cite">{r.story.cite}</p>}
                </details>
              )}
              <div className="yo-cta">
                <a href={mail(r.next.subject)} className="btn-primary">{r.next.cta}</a>
                <a href="https://www.the-aios.org/proof-pair/" className="repo-link-inline" target="_blank" rel="noreferrer">{c.spec}</a>
              </div>
            </Frame>
          </div>

          <div className="yo-ctl">
            <ul className="yo-dots" aria-label={c.trackLabel}>
              {steps.map((s, i) => (
                <li key={s}>
                  <button type="button" className="yo-dot" aria-current={i === frame} aria-label={`${i + 1} / ${FRAMES} · ${s}`} onClick={() => goFrame(i)} />
                </li>
              ))}
            </ul>
            <span className="yo-where" aria-hidden="true">{String(frame + 1).padStart(2, "0")} / {String(FRAMES).padStart(2, "0")} · {steps[frame]}</span>
            <div className="yo-arrows">
              <button type="button" className="icon-btn" aria-label={c.prev} onClick={() => goFrame(frame - 1)} disabled={frame === 0}>
                <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true"><path d="M9 2.5L4.5 7 9 11.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </button>
              <button type="button" className="icon-btn" aria-label={c.next} onClick={() => goFrame(frame + 1)} disabled={frame === FRAMES - 1}>
                <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true"><path d="M5 2.5L9.5 7 5 11.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
