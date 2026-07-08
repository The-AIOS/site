"use client";

// ReceiptChain — the Proof Pair, animated. Ported from the AIOS deck component
// kit (receipt-chain-live) into React/CSS; styles live in standards.css.
//
// Beat: a mandate credential slides issuer → agent, the agent acts, and every
// act stamps a signed receipt onto a growing hash-chain. Three cycles; the
// chain visibly grows; it ends with the full three-receipt chain glowing.
// Hashes are ABSTRACT glyph blocks — deliberately not realistic, no fabricated
// data. prefers-reduced-motion renders the fully-resolved final state.
import { useEffect, useRef } from "react";

const CYCLE = 1500;
const LEAD = 260;

export default function ReceiptChain() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = ref.current;
    if (!host) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mandate = host.querySelector<HTMLElement>(".rcl-mandate");
    const agent = host.querySelector<HTMLElement>(".rcl-node-agent");
    const action = host.querySelector<HTMLElement>(".rcl-action");
    const chainEl = host.querySelector<HTMLElement>(".rcl-chain");
    const caption = host.querySelector<HTMLElement>(".rcl-caption");
    const receipts = Array.from(host.querySelectorAll<HTMLElement>(".rcl-receipt"));
    const links = Array.from(host.querySelectorAll<HTMLElement>(".rcl-linkw"));
    if (!mandate || !agent || !action || !chainEl || !caption) return;
    const N = receipts.length;

    let timers: number[] = [];
    const at = (ms: number, fn: () => void) => {
      timers.push(window.setTimeout(fn, ms));
    };
    const clearAll = () => {
      timers.forEach((t) => clearTimeout(t));
      timers = [];
    };
    const repop = (el: HTMLElement, cls: string) => {
      el.classList.remove(cls);
      void el.offsetWidth; // reflow → restart the animation
      el.classList.add(cls);
    };
    const resetScene = () => {
      host.classList.remove("rcl-static");
      mandate.classList.remove("go");
      agent.classList.remove("rx");
      action.classList.remove("fire");
      receipts.forEach((r) => r.classList.remove("on"));
      links.forEach((l) => l.classList.remove("on"));
      chainEl.classList.remove("done");
      caption.classList.remove("show");
      void host.offsetWidth;
    };

    if (reduce) {
      host.classList.add("rcl-static"); // honest final state, still
      return;
    }

    const play = () => {
      clearAll();
      resetScene();
      for (let i = 0; i < N; i++) {
        const base = LEAD + i * CYCLE;
        at(base, () => repop(mandate, "go")); // mandate issued
        at(base + CYCLE * 0.32, () => repop(agent, "rx")); // agent receives
        at(base + CYCLE * 0.45, () => repop(action, "fire")); // action fires
        at(base + CYCLE * 0.66, () => receipts[i].classList.add("on")); // stamp
        if (i > 0) at(base + CYCLE * 0.82, () => links[i - 1].classList.add("on")); // link back
      }
      at(LEAD + N * CYCLE + 150, () => {
        chainEl.classList.add("done");
        caption.classList.add("show");
      });
    };
    const park = () => {
      clearAll();
      host.classList.add("rcl-static"); // honest finished frame, no timer burn
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

    const replay = host.querySelector<HTMLButtonElement>(".rcl-replay");
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
    <div className="rcl" ref={ref} data-rcl>
      <div className="rcl-cap">
        <span className="rcl-flow">
          <span className="rcl-f1">mandate</span>
          &nbsp;→&nbsp;
          <span className="rcl-f2">action</span>
          &nbsp;→&nbsp;
          <span className="rcl-f3">receipt</span>
        </span>
        <button className="rcl-replay" type="button">
          ↻ replay
        </button>
      </div>

      <div
        className="rcl-stage"
        role="img"
        aria-label="A mandate credential travels from issuer to agent; each action the agent takes stamps a signed receipt onto a growing hash chain. Three receipts link up; the finished chain glows."
      >
        <div className="rcl-toprow">
          <div className="rcl-node rcl-node-issuer">
            <span className="rcl-nodec">
              <span className="rcl-idot" />
            </span>
            <span className="rcl-nodelabel">Issuer</span>
          </div>
          <div className="rcl-track">
            <span className="rcl-rail" />
            <div className="rcl-mandate">
              <span className="rcl-mtitle">Mandate</span>
              <span className="rcl-mglyph">▘▞▚▗</span>
            </div>
          </div>
          <div className="rcl-node rcl-node-agent">
            <span className="rcl-nodec">
              <span className="rcl-amark" />
            </span>
            <span className="rcl-nodelabel">Agent</span>
          </div>
        </div>

        <div className="rcl-actionrow">
          <span className="rcl-action">
            <span className="rcl-ring" />
            <svg className="rcl-bolt" viewBox="0 0 12 14" aria-hidden="true">
              <path d="M6.8 1 L2.2 8 H5.4 L4.6 13 L9.8 5.6 H6.2 Z" />
            </svg>
            <span>Action</span>
          </span>
        </div>

        <div className="rcl-chain">
          <div className="rcl-receipt">
            <span className="rcl-seal">
              <svg viewBox="0 0 12 12">
                <path d="M2.7 6.3 L5 8.6 L9.3 3.6" pathLength={1} />
              </svg>
            </span>
            <span className="rcl-rtitle">Receipt</span>
            <span className="rcl-rhash">▚▞▖▝</span>
            <span className="rcl-rprev">‹ ····</span>
          </div>
          <span className="rcl-linkw">
            <svg viewBox="0 0 34 14">
              <rect x="1.2" y="3.4" width="18.4" height="7.2" rx="3.6" pathLength={1} />
              <rect x="14.4" y="3.4" width="18.4" height="7.2" rx="3.6" pathLength={1} />
            </svg>
          </span>
          <div className="rcl-receipt">
            <span className="rcl-seal">
              <svg viewBox="0 0 12 12">
                <path d="M2.7 6.3 L5 8.6 L9.3 3.6" pathLength={1} />
              </svg>
            </span>
            <span className="rcl-rtitle">Receipt</span>
            <span className="rcl-rhash">▞▚▝▘</span>
            <span className="rcl-rprev">‹ ▚▞▖▝</span>
          </div>
          <span className="rcl-linkw">
            <svg viewBox="0 0 34 14">
              <rect x="1.2" y="3.4" width="18.4" height="7.2" rx="3.6" pathLength={1} />
              <rect x="14.4" y="3.4" width="18.4" height="7.2" rx="3.6" pathLength={1} />
            </svg>
          </span>
          <div className="rcl-receipt">
            <span className="rcl-seal">
              <svg viewBox="0 0 12 12">
                <path d="M2.7 6.3 L5 8.6 L9.3 3.6" pathLength={1} />
              </svg>
            </span>
            <span className="rcl-rtitle">Receipt</span>
            <span className="rcl-rhash">▖▚▞▗</span>
            <span className="rcl-rprev">‹ ▞▚▝▘</span>
          </div>
        </div>
      </div>

      <div className="rcl-foot">
        <div className="rcl-caption">
          <span className="rcl-capcheck" aria-hidden="true">
            ✓
          </span>{" "}
          <span>Every action, provably traced</span>
        </div>
      </div>
    </div>
  );
}
