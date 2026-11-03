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
import type { StandardsCopy } from "@/data/standards-copy/types";

const STEP = 300; // ms between competitor-box reveals

export default function EmptyLane({ copy }: { copy: StandardsCopy["emptyLane"] }) {
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
            <span>{copy.legend.rival}</span>
          </span>
          <span className="eml-lg">
            <span className="eml-sw eml-sw-i" aria-hidden="true" />
            <span>{copy.legend.integration}</span>
          </span>
          <span className="eml-lg">
            <span className="eml-sw eml-sw-w" aria-hidden="true" />
            <span>{copy.legend.watch}</span>
          </span>
        </span>
        <button className="eml-replay" type="button">
          {copy.replay}
        </button>
      </div>

      <div
        className="eml-stage"
        role="img"
        aria-label={copy.aria}
      >
        <div className="eml-grid">
          <div className="eml-box eml-r">
            <span className="eml-name">AAuth</span>
            <span className="eml-role">{copy.roles.aauth}</span>
          </div>
          <div className="eml-box eml-i">
            <span className="eml-name">Entra Agent ID</span>
            <span className="eml-role">{copy.roles.entra}</span>
          </div>
          <div className="eml-box eml-w">
            <span className="eml-name">PIC</span>
            <span className="eml-role">{copy.roles.pic}</span>
          </div>
          <div className="eml-box eml-i">
            <span className="eml-name">agentgateway</span>
            <span className="eml-role">{copy.roles.agentgateway}</span>
          </div>
          <div className="eml-us">
            <span className="eml-ustag">{copy.openLane}</span>
            <span className="eml-chips">
              <span className="eml-chip">{copy.chips[0]}</span>
              <span className="eml-chip">{copy.chips[1]}</span>
              <span className="eml-chip">{copy.chips[2]}</span>
              <span className="eml-chip">{copy.chips[3]}</span>
            </span>
          </div>
          <div className="eml-box eml-i">
            <span className="eml-name">kagent</span>
            <span className="eml-role">{copy.roles.kagent}</span>
          </div>
          <div className="eml-box eml-i">
            <span className="eml-name">agent-substrate</span>
            <span className="eml-role">{copy.roles.substrate}</span>
          </div>
          <div className="eml-box eml-i">
            <span className="eml-name">MCP-auth</span>
            <span className="eml-role">{copy.roles.mcpAuth}</span>
          </div>
          <div className="eml-box eml-w">
            <span className="eml-name">passkeys</span>
            <span className="eml-role">{copy.roles.passkeys}</span>
          </div>
        </div>
      </div>

      <div className="eml-foot">
        <div className="eml-caption">
          <span className="eml-capsq" aria-hidden="true" /> <span>{copy.caption}</span>
        </div>
      </div>
    </div>
  );
}
