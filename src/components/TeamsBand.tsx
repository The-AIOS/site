"use client";

/* The teams band under the hero (AIOS 0.8.19): one sentence becomes a team.
 *
 * The motion is a story in three beats, played once when the band scrolls into view:
 *   1. the visitor's sentence types itself into the "You" card,
 *   2. the line reaches Approve and the button lights,
 *   3. the team's pill appears and its three members arrive one by one.
 *
 * Everything is real HTML. The typed sentence is aria-hidden and a screen-reader copy holds
 * the whole sentence, so assistive tech never hears it letter by letter. The server render is
 * the finished state (no JS, no motion: still complete); the client rewinds to the start only
 * when motion is allowed, and `prefers-reduced-motion` keeps the finished state with no motion. */

import { useEffect, useRef, useState } from "react";
import type { Content } from "@/content";

type T = Content["teams"];
const DONE = 6; // phases: 0 idle · 1 typing · 2 approved · 3 group · 4–6 members

export function TeamsBand({ t }: { t: T }) {
  const root = useRef<HTMLElement>(null);
  const [phase, setPhase] = useState(DONE);
  const [typed, setTyped] = useState(t.ask.length);
  // The team pill folds the crew into itself and opens it back out.
  const [open, setOpen] = useState(true);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;

    setPhase(0);
    setTyped(0);
    const timers: number[] = [];
    const at = (ms: number, fn: () => void) => timers.push(window.setTimeout(fn, ms));

    const io = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        io.disconnect();
        const per = 42; // ms per character
        const start = 350;
        at(start, () => setPhase(1));
        for (let i = 1; i <= t.ask.length; i++) at(start + i * per, () => setTyped(i));
        let tEnd = start + t.ask.length * per + 350;
        at(tEnd, () => setPhase(2));
        at((tEnd += 750), () => setPhase(3));
        for (const p of [4, 5, 6]) at((tEnd += 380), () => setPhase(p));
      },
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      timers.forEach(clearTimeout);
    };
  }, [t.ask]);

  const [pre, accent, post] = t.h;

  return (
    <section ref={root} className="section teams-band" data-phase={phase} aria-labelledby="teams-h">
      <div className="container">
        <h2 id="teams-h" className="display-lg" style={{ marginBottom: "1rem" }}>
          {pre}
          <span className="accent">{accent}</span>
          {post}
        </h2>
        <p className="lede" style={{ maxWidth: "52ch", marginBottom: "2.5rem" }}>
          {t.sub}
        </p>

        <div className="teams-flow">
          <div className="teams-ask">
            <div className="teams-label">{t.you}</div>
            <p className="teams-sentence">
              <span className="teams-sr">“{t.ask}”</span>
              <span aria-hidden="true">
                “{t.ask.slice(0, typed)}
                {typed >= t.ask.length ? "”" : <span className="teams-caret" />}
              </span>
            </p>
          </div>

          <div className="teams-link teams-link-1" aria-hidden="true" />

          <div className="teams-approve" aria-hidden="true">
            <svg width="16" height="16" viewBox="0 0 20 20">
              <path d="M4 10.5l4 4 8-9" stroke="currentColor" strokeWidth="2.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {t.approve}
          </div>

          <div className="teams-link teams-link-2" aria-hidden="true" />

          <div className="teams-team" data-open={open}>
            <button
              type="button"
              className="teams-group"
              aria-expanded={open}
              aria-controls="teams-cards"
              disabled={phase < 3}
              onClick={() => setOpen((o) => !o)}
            >
              <span className="teams-dot" />
              {t.group}
              <svg className="teams-chev" width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
                <path d="M3 4.5l3 3 3-3" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div className="teams-cards-wrap">
            <ul className="teams-cards" id="teams-cards">
              {t.members.map((m, i) => (
                <li key={m.handle} className={`teams-card${i === 0 ? " is-lead" : ""}`} data-n={i + 4}>
                  <div className="teams-tab">
                    <span className="teams-dot" />
                    <span className="teams-prompt" aria-hidden="true">&gt;_</span> {m.handle}
                  </div>
                  <div className="teams-fig">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={m.img} alt={m.alt} loading="lazy" decoding="async" />
                  </div>
                  <div className="teams-role">
                    <b>{m.role}</b>
                    <span>{m.does}</span>
                  </div>
                </li>
              ))}
            </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
