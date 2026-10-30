/* YourAios — section 00, before "01 · What". A quiet line names the moment (McKinsey
 * to CEOs in October; the agents that got in the same month), then the role tabs. Each
 * role tells one story in six steps: the pain → your day → your team (the people you
 * couldn't hire, each with the agent underneath) → the AIOS → Forum → the proof pair,
 * which is the ending and carries the one next step.
 *
 * Tabs are real tabs (tablist / tab / tabpanel, arrow keys, Home/End). Deep links:
 * `#entrepreneur`, `#ceo`, … open the matching tab on load and on hashchange — so a
 * keynote slide can point at exactly one role. The hero field dispatches the same
 * `aios:role` event this section listens to.
 *
 * All reader-facing prose comes from CONTENT[locale].roles. The agent names under each
 * person are technical surfaces and stay English in every locale by design. */

"use client";

import { useCallback, useEffect, useId, useRef, useState, type ReactNode } from "react";
import { ROLE_ORDER, isRoleId, type RoleId } from "@/data/roles";
import { ROLE_EVENT, ROLE_SECTION_ID } from "./RoleField";
import type { RolesContent, RoleStory } from "@/content";
import "./roles.css";

const MAIL = "mailto:j@the-aios.com?subject=";

function initials(agent: string): string {
  const p = agent.replace(/^\//, "").replace(/\.md$/, "").split(/[-\s]+/).filter(Boolean);
  return ((p[0] ?? "a").charAt(0) + (p[1] ? p[1].charAt(0) : "")).toUpperCase();
}

function Step({ n, label, title, children }: { n: string; label: string; title: string; children: ReactNode }) {
  return (
    <div className="yo-step">
      <div className="yo-step-n"><b>{n}</b>{label}</div>
      <div>
        <h3>{title}</h3>
        {children}
      </div>
    </div>
  );
}

function Panel({ r, c, uid, swap }: { r: RoleStory; c: RolesContent; uid: string; swap: boolean }) {
  const mail = (subject: string) => MAIL + encodeURIComponent(subject);
  return (
    <div
      id={`${uid}-panel-${r.id}`}
      role="tabpanel"
      aria-labelledby={`${uid}-tab-${r.id}`}
      tabIndex={0}
      className={swap ? "role-panel yo-swap" : "role-panel"}
    >
      {/* 01 · the pain */}
      <Step n="01" label={c.steps.pain} title={r.painTitle}>
        <p className="yo-lede">{r.pain}</p>
      </Step>

      {/* 02 · your day */}
      <Step n="02" label={c.steps.day} title={r.dayTitle}>
        <div className="yo-day">
          {r.day.map((d) => (
            <div key={d[0]} className="yo-beat">
              <span className="t">{d[0]}</span>
              <div><h4>{d[1]}</h4><p>{d[2]}</p></div>
            </div>
          ))}
        </div>
      </Step>

      {/* 03 · your team */}
      <Step n="03" label={c.steps.team} title={r.teamTitle}>
        <p className="yo-lede">{r.teamLede}</p>
        <div className="yo-team">
          {r.team.map((m) => (
            <div key={m[1]} className="yo-member">
              <i aria-hidden="true">{initials(m[1])}</i>
              <b>{m[0]}</b>
              <span>{m[2]}</span>
              <code>{m[1]}</code>
            </div>
          ))}
        </div>
        <p className="yo-know">{c.know}</p>
      </Step>

      {/* 04 · the AIOS */}
      <Step n="04" label={c.steps.aios} title={c.aiosTitle}>
        <p className="yo-lede">{c.aiosLede}</p>
        <div className="card">
          <div className="card-eyebrow">{c.aiosEyebrow}</div>
          <p>{r.aios}</p>
        </div>
      </Step>

      {/* 05 · Forum */}
      <Step n="05" label={c.steps.forum} title={c.forumTitle}>
        <p className="yo-lede">{c.forumLede}</p>
        <div className="card">
          <div className="card-eyebrow">{c.forumEyebrow}</div>
          <p>{r.forum}</p>
        </div>
      </Step>

      {/* 06 · the proof pair — the ending */}
      <Step n="06" label={c.steps.proof} title={c.proofTitle}>
        <p className="yo-lede">{c.proofLede}</p>
        <div className="yo-end">
          <div className="card">
            <div className="card-eyebrow">{c.proofEyebrow}</div>
            <p>{r.proof}</p>
          </div>
          <div className="card">
            <div className="card-eyebrow">{c.whyEyebrow}</div>
            <p>{r.why}</p>
          </div>
        </div>
        {r.story && (
          <div className="card" style={{ marginBottom: "1.5rem" }}>
            <span className="tag-pill yo-story-label">{r.story.label}</span>
            <h4>{r.story.title}</h4>
            <p>{r.story.body}</p>
            {r.story.cite && <p className="caption" style={{ marginTop: "0.75rem", textTransform: "none", letterSpacing: 0 }}>{r.story.cite}</p>}
          </div>
        )}
        <div className="yo-next">
          <a href="https://the-aios.com" className="btn-primary">{c.install}</a>
          <a href={mail(r.next.subject)} className="btn-secondary">{r.next.cta}</a>
          <a href="https://www.the-aios.org/proof-pair/" className="repo-link-inline" target="_blank" rel="noreferrer">{c.spec}</a>
        </div>
      </Step>
    </div>
  );
}

export function YourAios({ c, num = "00" }: { c: RolesContent; num?: string }) {
  const uid = useId();
  const byId = useRef(new Map(c.items.map((r) => [r.id, r])));
  const [cur, setCur] = useState<RoleId>(c.items[0]?.id ?? "entrepreneur");
  const [swap, setSwap] = useState(false);
  const tabsRef = useRef<HTMLDivElement | null>(null);

  const select = useCallback((id: RoleId, focus: boolean) => {
    setCur((prev) => {
      if (prev !== id) setSwap(true);
      return id;
    });
    if (focus) {
      const el = document.getElementById(`${uid}-tab-${id}`);
      el?.focus();
    }
  }, [uid]);

  /* deep links on load + hashchange; the hero field's event */
  useEffect(() => {
    const fromHash = () => {
      const h = (location.hash || "").replace(/^#/, "");
      if (isRoleId(h) && byId.current.has(h)) setCur(h);
    };
    fromHash();
    const onHash = () => fromHash();
    const onEvent = (e: Event) => {
      const id = (e as CustomEvent<RoleId>).detail;
      if (isRoleId(id)) select(id, false);
    };
    window.addEventListener("hashchange", onHash);
    window.addEventListener(ROLE_EVENT, onEvent);
    return () => { window.removeEventListener("hashchange", onHash); window.removeEventListener(ROLE_EVENT, onEvent); };
  }, [select]);

  useEffect(() => {
    if (!swap) return;
    const t = setTimeout(() => setSwap(false), 400);
    return () => clearTimeout(t);
  }, [swap, cur]);

  const onTabKey = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const ids = ROLE_ORDER.filter((id) => byId.current.has(id));
    const i = ids.indexOf(cur);
    let next: RoleId | null = null;
    if (e.key === "ArrowRight") next = ids[(i + 1) % ids.length];
    else if (e.key === "ArrowLeft") next = ids[(i - 1 + ids.length) % ids.length];
    else if (e.key === "Home") next = ids[0];
    else if (e.key === "End") next = ids[ids.length - 1];
    if (next) {
      e.preventDefault();
      try { history.replaceState(null, "", `#${next}`); } catch { /* ignore */ }
      select(next, true);
    }
  };

  const role = byId.current.get(cur) ?? c.items[0];

  return (
    <section id={ROLE_SECTION_ID} className="section hero-glow">
      <div className="container">
        <div className="section-label">
          <span className="num">{num}</span>
          <span className="eyebrow">{c.eyebrow}</span>
        </div>
        <h2 className="display-lg" style={{ marginBottom: "1.5rem", maxWidth: "18ch" }}>
          {c.h[0]}<span className="accent">{c.h[1]}</span>{c.h[2]}
        </h2>
        <p className="yo-moment">{c.momentPre}<b>{c.momentBold}</b>{c.momentPost}</p>

        <div className="role-tabs" role="tablist" aria-label={c.tabsLabel} ref={tabsRef} onKeyDown={onTabKey}>
          {ROLE_ORDER.filter((id) => byId.current.has(id)).map((id) => {
            const r = byId.current.get(id)!;
            const on = id === cur;
            return (
              <button
                key={id}
                id={`${uid}-tab-${id}`}
                type="button"
                role="tab"
                aria-selected={on}
                aria-controls={`${uid}-panel-${id}`}
                tabIndex={on ? 0 : -1}
                className="role-tab"
                onClick={() => { try { history.replaceState(null, "", `#${id}`); } catch { /* ignore */ } select(id, false); }}
              >
                {r.label}
              </button>
            );
          })}
        </div>

        <Panel key={role.id} r={role} c={c} uid={uid} swap={swap} />
      </div>
    </section>
  );
}
