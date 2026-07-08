"use client";

// EmptyLane — the agent-identity landscape as a 3×3 map. Ported from the AIOS
// deck component kit (empty-lane) into React/CSS; styles live in standards.css.
//
// Beat: eight boxes fill in, one by one. Border style stays honest about what
// each occupant is — solid = the one same-layer rival, dashed = integration
// point (not an enemy), dotted = adjacent / watch. The center box stays EMPTY,
// then pulses awake as the open lane, labelling itself with the four
// differentiators no one else combines. A quiet caption resolves last.
// prefers-reduced-motion renders the fully-resolved final state.
import { useEffect, useRef } from "react";

const STEP = 300; // ms between competitor-box reveals

export default function EmptyLane() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = ref.current;
    if (!host) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const boxes = Array.from(host.querySelectorAll<HTMLElement>(".eml-box"));
    const us = host.querySelector<HTMLElement>(".eml-us");
    const chips = Array.from(host.querySelectorAll<HTMLElement>(".eml-chip"));
    const caption = host.querySelector<HTMLElement>(".eml-caption");
    if (!boxes.length || !us || !chips.length || !caption) return;

    const LEAD = 260;
    let timers: number[] = [];
    const at = (ms: number, fn: () => void) => {
      timers.push(window.setTimeout(fn, ms));
    };
    const clearAll = () => {
      timers.forEach((t) => clearTimeout(t));
      timers = [];
    };
    const resetScene = () => {
      host.classList.remove("eml-static");
      boxes.forEach((b) => b.classList.remove("on"));
      chips.forEach((c) => c.classList.remove("on"));
      us.classList.remove("live");
      caption.classList.remove("show");
      void host.offsetWidth; // reflow → animations restart
    };

    if (reduce) {
      host.classList.add("eml-static"); // honest final state, still
      return;
    }

    const play = () => {
      clearAll();
      resetScene();
      boxes.forEach((box, i) => {
        at(LEAD + i * STEP, () => box.classList.add("on")); // the map fills
      });
      const t0 = LEAD + boxes.length * STEP + 420; // a beat on the empty box
      at(t0, () => us.classList.add("live")); // the center pulses awake
      chips.forEach((chip, j) => {
        at(t0 + 350 + j * 150, () => chip.classList.add("on")); // differentiators
      });
      at(t0 + 350 + chips.length * 150 + 500, () => caption.classList.add("show"));
    };
    const park = () => {
      clearAll();
      host.classList.add("eml-static"); // honest finished frame, no timer burn
    };

    let io: IntersectionObserver | null = null;
    if ("IntersectionObserver" in window) {
      io = new IntersectionObserver(
        (ents) => ents.forEach((en) => (en.isIntersecting ? play() : park())),
        { threshold: 0.3 }
      );
      io.observe(host);
    } else {
      play();
    }

    const replay = host.querySelector<HTMLButtonElement>(".eml-replay");
    const onReplay = (e: Event) => {
      e.stopPropagation();
      play();
    };
    replay?.addEventListener("click", onReplay);

    return () => {
      clearAll();
      io?.disconnect();
      replay?.removeEventListener("click", onReplay);
    };
  }, []);

  return (
    <div className="eml" ref={ref} data-eml>
      <div className="eml-cap">
        <span className="eml-legend">
          <span className="eml-lg">
            <span className="eml-sw eml-sw-r" aria-hidden="true" />
            <span>rival</span>
          </span>
          <span className="eml-lg">
            <span className="eml-sw eml-sw-i" aria-hidden="true" />
            <span>integration point</span>
          </span>
          <span className="eml-lg">
            <span className="eml-sw eml-sw-w" aria-hidden="true" />
            <span>adjacent / watch</span>
          </span>
        </span>
        <button className="eml-replay" type="button">
          ↻ replay
        </button>
      </div>

      <div
        className="eml-stage"
        role="img"
        aria-label="A three-by-three map of the agent-identity landscape. Eight boxes fill one by one — AAuth the one same-layer rival, then the integration points Entra Agent ID, agentgateway, kagent, agent-substrate and MCP-auth, plus the adjacent patterns PIC and passkeys. The center box stays empty, then pulses awake as the open lane with four differentiators no one else combines: person-root, offline-verify, cross-org, gov-anchored. The one lane still open."
      >
        <div className="eml-grid">
          <div className="eml-box eml-r">
            <span className="eml-name">AAuth</span>
            <span className="eml-role">rival · DNS-root · 0 prod</span>
          </div>
          <div className="eml-box eml-i">
            <span className="eml-name">Entra Agent ID</span>
            <span className="eml-role">intra-org issuer</span>
          </div>
          <div className="eml-box eml-w">
            <span className="eml-name">PIC</span>
            <span className="eml-role">attenuation pattern</span>
          </div>
          <div className="eml-box eml-i">
            <span className="eml-name">agentgateway</span>
            <span className="eml-role">enforcement layer</span>
          </div>
          <div className="eml-us">
            <span className="eml-ustag">open lane</span>
            <span className="eml-chips">
              <span className="eml-chip">person-root</span>
              <span className="eml-chip">offline-verify</span>
              <span className="eml-chip">cross-org</span>
              <span className="eml-chip">gov-anchored</span>
            </span>
          </div>
          <div className="eml-box eml-i">
            <span className="eml-name">kagent</span>
            <span className="eml-role">runtime</span>
          </div>
          <div className="eml-box eml-i">
            <span className="eml-name">agent-substrate</span>
            <span className="eml-role">runtime</span>
          </div>
          <div className="eml-box eml-i">
            <span className="eml-name">MCP-auth</span>
            <span className="eml-role">OAuth 2.1 render target</span>
          </div>
          <div className="eml-box eml-w">
            <span className="eml-name">passkeys</span>
            <span className="eml-role">adjacent pattern</span>
          </div>
        </div>
      </div>

      <div className="eml-foot">
        <div className="eml-caption">
          <span className="eml-capsq" aria-hidden="true" /> <span>The one lane still open.</span>
        </div>
      </div>
    </div>
  );
}
