"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  EXEMPLARS,
  type Exemplar,
  type MarketPoint,
  type Response,
} from "@/data/exemplars";
import { findInIndex } from "@/components/DisruptionIndex";

/* The quadrant: every listed company in the index, placed by two measured
 * numbers since ChatGPT's launch (30 Nov 2022).
 *   X = revenue change (real disruption: shrinking ← → growing)
 *   Y = share-price change (market fear: punished ↓ ↑ rewarded)
 * Both axes are log-ratio scales, so −50% and +100% sit the same distance
 * from zero — a halving and a doubling are the same size of move. */

type Quadrant = "gone" | "priced" | "credit" | "reinventing";

const QUADRANT_META: Record<Quadrant, { label: string; blurb: string }> = {
  gone: {
    label: "Already gone",
    blurb: "Revenue shrinking, market value punished.",
  },
  priced: {
    label: "Priced for disruption",
    blurb: "Revenue still growing, market value punished: the fear is ahead of the numbers.",
  },
  credit: {
    label: "Restructuring credit",
    blurb: "Revenue shrinking, market value rewarded.",
  },
  reinventing: {
    label: "Reinventing",
    blurb: "Revenue growing, market value rewarded.",
  },
};

const RESPONSE_META: Record<Response, { label: string; title: string }> = {
  reinventing: {
    label: "Reinventing",
    title: "A shipped AI product or pricing model at the core of the business.",
  },
  restructuring: {
    label: "Restructuring",
    title: "Documented cuts, a forced sale, a merger, or bankruptcy since 2022.",
  },
  none: {
    label: "No documented response",
    title: "No response documented in our sources.",
  },
};

interface Dot {
  key: string;
  exemplar: Exemplar;
  m: MarketPoint;
  rev: number; // fractional change, e.g. -0.51
  price: number;
  quadrant: Quadrant;
}

const pct = (r: number) => {
  const v = Math.round(r * 100);
  return `${v > 0 ? "+" : v < 0 ? "−" : ""}${Math.abs(v)}%`;
};

function revenueSymbol(currency: string) {
  if (currency.startsWith("GBP")) return "£";
  if (currency.startsWith("EUR")) return "€";
  return "$";
}

function formatRevenue(millions: number, currency: string) {
  const sym = revenueSymbol(currency);
  return millions >= 1000
    ? `${sym}${(millions / 1000).toFixed(1)}B`
    : `${sym}${Math.round(millions)}M`;
}

function formatPrice(v: number, currency: string) {
  if (currency.includes("GBp")) return `${v.toLocaleString("en-US")}p`;
  const sym = currency.startsWith("EUR") ? "€" : "$";
  return `${sym}${v.toLocaleString("en-US", { maximumFractionDigits: 2 })}`;
}

function formatDate(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  const month = new Date(Date.UTC(y, m - 1, d)).toLocaleString("en-US", {
    month: "short",
    timeZone: "UTC",
  });
  return `${d} ${month} ${y}`;
}

function quadrantOf(rev: number, price: number): Quadrant {
  if (rev < 0) return price < 0 ? "gone" : "credit";
  return price < 0 ? "priced" : "reinventing";
}

const DOTS: Dot[] = EXEMPLARS.flatMap((e) =>
  (e.markets ?? []).map((m) => {
    const rev = m.revenueNow / m.revenueBase - 1;
    const price = m.priceNow / m.priceBase - 1;
    return { key: m.ticker, exemplar: e, m, rev, price, quadrant: quadrantOf(rev, price) };
  })
);

const UNPLOTTED = EXEMPLARS.filter((e) => !e.markets?.length).reduce<
  Record<string, string[]>
>((acc, e) => {
  const why = e.unplotted ?? "No public numbers.";
  (acc[why] ??= []).push(e.company);
  return acc;
}, {});

/* ---------- geometry ---------- */
const W = 760;
const H = 520;
const PAD = { l: 56, r: 24, t: 24, b: 48 };
const X_DOMAIN = [Math.log(0.4), Math.log(3.2)]; // −60% … +220%
const Y_DOMAIN = [Math.log(0.004), Math.log(4)]; // −99.6% … +300%
const X_TICKS = [-0.5, 0, 0.5, 1, 2];
const Y_TICKS = [-0.99, -0.9, -0.5, 0, 1, 2];

const sx = (r: number) =>
  PAD.l +
  ((Math.log(1 + r) - X_DOMAIN[0]) / (X_DOMAIN[1] - X_DOMAIN[0])) * (W - PAD.l - PAD.r);
const sy = (r: number) =>
  H -
  PAD.b -
  ((Math.log(1 + r) - Y_DOMAIN[0]) / (Y_DOMAIN[1] - Y_DOMAIN[0])) * (H - PAD.t - PAD.b);

/* Greedy label placement: try right, left, above, below each dot and take the
 * first spot that collides with no other dot or already-placed label. */
type Anchor = "start" | "end" | "middle";
const LABELS: Record<string, { x: number; y: number; anchor: Anchor }> = (() => {
  const CH = 6.2; // approx. width of one 10px mono glyph
  const LH = 10;
  const boxes: { x0: number; y0: number; x1: number; y1: number }[] = DOTS.map((d) => {
    const x = sx(d.rev);
    const y = sy(d.price);
    return { x0: x - 7, y0: y - 7, x1: x + 7, y1: y + 7 };
  });
  const out: Record<string, { x: number; y: number; anchor: Anchor }> = {};
  const order = [...DOTS].sort((a, b) => sy(a.price) - sy(b.price) || sx(a.rev) - sx(b.rev));
  for (const d of order) {
    const x = sx(d.rev);
    const y = sy(d.price);
    const w = d.m.ticker.length * CH;
    const tries: { x: number; y: number; anchor: Anchor }[] = [
      { x: x + 10, y: y + 3.5, anchor: "start" },
      { x: x - 10, y: y + 3.5, anchor: "end" },
      { x, y: y - 11, anchor: "middle" },
      { x, y: y + 19, anchor: "middle" },
      { x: x + 10, y: y - 9, anchor: "start" },
      { x: x - 10, y: y - 9, anchor: "end" },
      { x: x + 10, y: y + 15, anchor: "start" },
      { x: x - 10, y: y + 15, anchor: "end" },
    ];
    const boxOf = (t: (typeof tries)[number]) => {
      const x0 = t.anchor === "start" ? t.x : t.anchor === "end" ? t.x - w : t.x - w / 2;
      return { x0: x0 - 1, y0: t.y - LH + 1, x1: x0 + w + 1, y1: t.y + 2 };
    };
    const free = (b: { x0: number; y0: number; x1: number; y1: number }) =>
      b.x1 < W - PAD.r + 20 &&
      boxes.every((o) => b.x1 <= o.x0 || b.x0 >= o.x1 || b.y1 <= o.y0 || b.y0 >= o.y1);
    const pick = tries.find((t) => free(boxOf(t))) ?? tries[0];
    boxes.push(boxOf(pick));
    out[d.key] = pick;
  }
  return out;
})();

function Mark({ response, x, y, active }: { response: Response; x: number; y: number; active: boolean }) {
  const r = active ? 8 : 6;
  if (response === "restructuring") {
    return (
      <rect
        x={x - r}
        y={y - r}
        width={r * 2}
        height={r * 2}
        rx={1.5}
        className="dq-mark dq-mark-restructuring"
      />
    );
  }
  return (
    <circle
      cx={x}
      cy={y}
      r={r}
      className={response === "reinventing" ? "dq-mark dq-mark-reinventing" : "dq-mark dq-mark-none"}
    />
  );
}

function Tooltip({ d, onClose, pinned }: { d: Dot; onClose: () => void; pinned: boolean }) {
  const { m, exemplar: e } = d;
  return (
    <div className="dq-tip-inner">
      <div className="dq-tip-head">
        <div>
          <strong>{m.name}</strong>
          <span className="dq-tip-ticker">
            {m.ticker} · {m.exchange}
          </span>
        </div>
        {pinned && (
          <button className="dq-tip-close" onClick={onClose} aria-label="Close details">
            ×
          </button>
        )}
      </div>
      <p className="dq-tip-quadrant">{QUADRANT_META[d.quadrant].label}</p>
      <p className="dq-tip-blurb">{QUADRANT_META[d.quadrant].blurb}</p>
      <dl>
        <dt>Revenue</dt>
        <dd>
          {formatRevenue(m.revenueBase, m.currency)} <span className="dq-tip-period">{m.revenueBasePeriod}</span>{" "}
          → {formatRevenue(m.revenueNow, m.currency)}{" "}
          <span className="dq-tip-period">{m.revenueNowPeriod}</span>{" "}
          <b>{pct(d.rev)}</b>
        </dd>
        <dt>Share price</dt>
        <dd>
          {formatPrice(m.priceBase, m.currency)}{" "}
          <span className="dq-tip-period">{formatDate(m.priceBaseDate)}</span> →{" "}
          {formatPrice(m.priceNow, m.currency)}{" "}
          <span className="dq-tip-period">{formatDate(m.priceNowDate)}</span> <b>{pct(d.price)}</b>
        </dd>
        <dt>Response</dt>
        <dd>
          {RESPONSE_META[m.response].label}: {m.responseWhy}
        </dd>
      </dl>
      {m.caveat && <p className="dq-tip-caveat">{m.caveat}</p>}
      <p className="dq-tip-sources">
        Sources:{" "}
        <a href={m.revenueSource.url} target="_blank" rel="noopener noreferrer">
          revenue ({m.revenueSource.label})
        </a>{" "}
        ·{" "}
        <a href={m.priceSource.url} target="_blank" rel="noopener noreferrer">
          price ({m.priceSource.label})
        </a>
      </p>
      <button type="button" className="dq-tip-card" onClick={() => findInIndex(e.company)}>
        Show {e.company} in the index →
      </button>
    </div>
  );
}

export default function DisruptionQuadrant() {
  const [hover, setHover] = useState<string | null>(null);
  const [pinned, setPinned] = useState<string | null>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const activeKey = pinned ?? hover;
  const active = DOTS.find((d) => d.key === activeKey) ?? null;

  useEffect(() => {
    if (!pinned) return;
    const onKey = (ev: KeyboardEvent) => {
      if (ev.key === "Escape") setPinned(null);
    };
    const onClick = (ev: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(ev.target as Node)) setPinned(null);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("mousedown", onClick);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("mousedown", onClick);
    };
  }, [pinned]);

  const counts = useMemo(() => {
    const c: Record<Quadrant, number> = { gone: 0, priced: 0, credit: 0, reinventing: 0 };
    for (const d of DOTS) c[d.quadrant]++;
    return c;
  }, []);

  const x0 = sx(0);
  const y0 = sy(0);
  // Tooltip position as a share of the chart box, so it scales with the SVG.
  const tipStyle = active
    ? {
        left: `${(sx(active.rev) / W) * 100}%`,
        top: `${(sy(active.price) / H) * 100}%`,
      }
    : undefined;
  const tipFlipX = active ? sx(active.rev) > W * 0.55 : false;
  const tipFlipY = active ? sy(active.price) > H * 0.55 : false;

  return (
    <section className="dq" aria-labelledby="dq-title">
      <div className="container">
        <p className="eyebrow">
          <span className="accent">●</span> Since ChatGPT launched · 30 Nov 2022 → Oct 2026
        </p>
        <h2 id="dq-title" className="dq-title">
          Growing revenue didn&apos;t save them.{" "}
          <span className="accent">The market priced the disruption first.</span>
        </h2>
        <p className="dq-lede">
          Every listed company in the index, placed by two measured numbers since ChatGPT&apos;s
          launch: how its <b>revenue</b> changed (real disruption) and how its{" "}
          <b>share price</b> changed (market fear). <b>{counts.priced}</b> of {DOTS.length} still grew
          revenue and were punished anyway. Hover, tap, or tab to a dot.
        </p>

        <div className="dq-figure" ref={wrapRef}>
          <svg
            viewBox={`0 0 ${W} ${H}`}
            className="dq-svg"
            role="group"
            aria-label="Quadrant chart: revenue change versus share-price change since 30 November 2022"
          >
            {/* quadrant fills */}
            <rect x={PAD.l} y={y0} width={x0 - PAD.l} height={H - PAD.b - y0} className="dq-q dq-q-gone" />
            <rect x={x0} y={y0} width={W - PAD.r - x0} height={H - PAD.b - y0} className="dq-q dq-q-priced" />

            {/* gridlines + ticks */}
            {X_TICKS.map((t) => (
              <g key={`x${t}`}>
                <line x1={sx(t)} x2={sx(t)} y1={PAD.t} y2={H - PAD.b} className={t === 0 ? "dq-axis0" : "dq-grid"} />
                <text x={sx(t)} y={H - PAD.b + 18} className="dq-tick" textAnchor="middle">
                  {pct(t)}
                </text>
              </g>
            ))}
            {Y_TICKS.map((t) => (
              <g key={`y${t}`}>
                <line x1={PAD.l} x2={W - PAD.r} y1={sy(t)} y2={sy(t)} className={t === 0 ? "dq-axis0" : "dq-grid"} />
                <text x={PAD.l - 8} y={sy(t) + 4} className="dq-tick" textAnchor="end">
                  {pct(t)}
                </text>
              </g>
            ))}

            {/* axis titles */}
            <text x={(PAD.l + W - PAD.r) / 2} y={H - 8} className="dq-axis-title" textAnchor="middle">
              Revenue change · shrinking ← → growing
            </text>
            <text
              x={14}
              y={(PAD.t + H - PAD.b) / 2}
              className="dq-axis-title"
              textAnchor="middle"
              transform={`rotate(-90 14 ${(PAD.t + H - PAD.b) / 2})`}
            >
              Share price · punished ↓ ↑ rewarded
            </text>

            {/* quadrant labels */}
            <text x={PAD.l + 10} y={H - PAD.b - 12} className="dq-qlabel">
              {QUADRANT_META.gone.label} · {counts.gone}
            </text>
            <text x={W - PAD.r - 10} y={H - PAD.b - 12} className="dq-qlabel dq-qlabel-hot" textAnchor="end">
              {QUADRANT_META.priced.label} · {counts.priced}
            </text>
            <text x={PAD.l + 10} y={PAD.t + 16} className="dq-qlabel">
              {QUADRANT_META.credit.label} · {counts.credit}
            </text>
            <text x={W - PAD.r - 10} y={PAD.t + 16} className="dq-qlabel" textAnchor="end">
              {QUADRANT_META.reinventing.label} · {counts.reinventing}
            </text>

            {/* dots */}
            {DOTS.map((d) => {
              const x = sx(d.rev);
              const y = sy(d.price);
              const isActive = d.key === activeKey;
              return (
                <g
                  key={d.key}
                  className="dq-dot"
                  data-active={isActive}
                  tabIndex={0}
                  role="button"
                  aria-pressed={pinned === d.key}
                  aria-label={`${d.m.name} (${d.m.ticker}): revenue ${pct(d.rev)}, share price ${pct(
                    d.price
                  )} since 30 Nov 2022. ${QUADRANT_META[d.quadrant].label}. ${RESPONSE_META[d.m.response].label}.`}
                  onMouseEnter={() => setHover(d.key)}
                  onMouseLeave={() => setHover((h) => (h === d.key ? null : h))}
                  onFocus={() => setHover(d.key)}
                  onBlur={() => setHover((h) => (h === d.key ? null : h))}
                  onClick={() => setPinned((p) => (p === d.key ? null : d.key))}
                  onKeyDown={(ev) => {
                    if (ev.key === "Enter" || ev.key === " ") {
                      ev.preventDefault();
                      setPinned((p) => (p === d.key ? null : d.key));
                    }
                  }}
                >
                  <circle cx={x} cy={y} r={14} className="dq-hit" />
                  <Mark response={d.m.response} x={x} y={y} active={isActive} />
                  <text
                    x={LABELS[d.key].x}
                    y={LABELS[d.key].y}
                    textAnchor={LABELS[d.key].anchor}
                    className="dq-label"
                  >
                    {d.m.ticker}
                  </text>
                </g>
              );
            })}
          </svg>

          {active && (
            <div
              className="dq-tip"
              data-flip-x={tipFlipX}
              data-flip-y={tipFlipY}
              style={tipStyle}
              role={pinned ? "dialog" : "tooltip"}
              aria-label={`${active.m.name} details`}
            >
              <Tooltip d={active} pinned={pinned === active.key} onClose={() => setPinned(null)} />
            </div>
          )}
        </div>

        <div className="dq-legend" aria-label="Legend">
          {(Object.keys(RESPONSE_META) as Response[]).map((r) => (
            <span key={r} className="dq-legend-item" title={RESPONSE_META[r].title}>
              <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
                <Mark response={r} x={7} y={7} active={false} />
              </svg>
              {RESPONSE_META[r].label}
            </span>
          ))}
        </div>

        <p className="dq-method">
          <b>How to read it.</b> Baseline: closing share price on 30 Nov 2022, the day ChatGPT launched,
          against the latest close (29 Oct 2026); revenue for the fiscal year containing that date
          against the latest full fiscal year reported. Prices are split-adjusted and exclude dividends;
          revenue is in each company&apos;s reporting currency. Both axes are log scales, so a halving and
          a doubling sit the same distance from zero. Marker shape is the company&apos;s response:{" "}
          <b>restructuring</b> (documented cuts, a forced sale, a merger, or bankruptcy) wins over{" "}
          <b>reinventing</b> (a shipped AI product or pricing model at the core of the business); everything
          else is <b>no documented response</b>. Only companies with public numbers are plotted: missing
          stays missing.
        </p>

        <details className="dq-table-wrap">
          <summary>The chart as a table, with sources</summary>
          <div className="dq-table-scroll">
            <table className="dq-table">
              <thead>
                <tr>
                  <th scope="col">Company</th>
                  <th scope="col">Revenue</th>
                  <th scope="col">Share price</th>
                  <th scope="col">Quadrant</th>
                  <th scope="col">Response</th>
                  <th scope="col">Sources</th>
                </tr>
              </thead>
              <tbody>
                {[...DOTS]
                  .sort((a, b) => a.price - b.price)
                  .map((d) => (
                    <tr key={d.key}>
                      <th scope="row">
                        {d.m.name} <span className="dq-tip-ticker">{d.m.ticker}</span>
                      </th>
                      <td>
                        {formatRevenue(d.m.revenueBase, d.m.currency)} → {formatRevenue(d.m.revenueNow, d.m.currency)}{" "}
                        <b>{pct(d.rev)}</b>
                        <br />
                        <span className="dq-tip-period">
                          {d.m.revenueBasePeriod} → {d.m.revenueNowPeriod}
                        </span>
                      </td>
                      <td>
                        {formatPrice(d.m.priceBase, d.m.currency)} → {formatPrice(d.m.priceNow, d.m.currency)}{" "}
                        <b>{pct(d.price)}</b>
                      </td>
                      <td>{QUADRANT_META[d.quadrant].label}</td>
                      <td>{RESPONSE_META[d.m.response].label}</td>
                      <td>
                        <a href={d.m.revenueSource.url} target="_blank" rel="noopener noreferrer">
                          Revenue
                        </a>{" "}
                        ·{" "}
                        <a href={d.m.priceSource.url} target="_blank" rel="noopener noreferrer">
                          Price
                        </a>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </details>

        <div className="dq-unplotted">
          <h3>Not plotted, and why</h3>
          <ul>
            {Object.entries(UNPLOTTED).map(([why, names]) => (
              <li key={why}>
                <b>{why}</b> {names.join(" · ")}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
