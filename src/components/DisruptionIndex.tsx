"use client";

import { useMemo, useState } from "react";
import {
  EXEMPLARS,
  SPEED_META,
  SPEED_ORDER,
  type Exemplar,
  type Region,
  type Signal,
  type Speed,
} from "@/data/exemplars";

type SortKey = "speed" | "industry" | "company";

const ALL_INDUSTRIES = Array.from(
  new Set(EXEMPLARS.map((e) => e.industry))
).sort((a, b) => a.localeCompare(b));

const REGION_ORDER: Region[] = ["US", "LATAM", "Europe", "Asia", "Global"];
const ALL_REGIONS = REGION_ORDER.filter((r) => EXEMPLARS.some((e) => e.region === r));

export const SIGNAL_META: Record<Signal, { label: string; title: string }> = {
  revenue: {
    label: "Revenue",
    title: "The speed rests on revenue won or lost.",
  },
  jobs: {
    label: "Jobs",
    title: "The speed rests on jobs cut, not hired, or redeployed.",
  },
  market: {
    label: "Market fear",
    title: "The speed rests on a market repricing that hasn't shown up in revenue yet.",
  },
};
const SIGNAL_ORDER: Signal[] = ["revenue", "jobs", "market"];

export function slugOf(company: string): string {
  return (
    "di-" +
    company
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "")
  );
}

function formatVerified(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  const month = new Date(Date.UTC(y, m - 1, d || 1)).toLocaleString("en-US", {
    month: "short",
    timeZone: "UTC",
  });
  return d ? `${d} ${month} ${y}` : `${month} ${y}`;
}

const CONFIDENCE_TITLE: Record<Exemplar["confidence"], string> = {
  high: "High confidence — well-corroborated across public sources.",
  medium:
    "Medium confidence — some figures are company-reported, estimated, or part of a multi-causal story. See note.",
  low: "Low confidence — directional only; treat specifics as unverified.",
};

function SpeedBadge({ speed, was }: { speed: Speed; was?: Speed }) {
  const meta = SPEED_META[speed];
  return (
    <span className="di-badge-wrap">
      {was && (
        <span
          className="di-moved"
          style={{ ["--was-color" as string]: SPEED_META[was].color }}
          title={`Moved from "${SPEED_META[was].label}" in the last update`}
        >
          <span className="sr-only">Moved from </span>
          <s>{SPEED_META[was].short}</s>
          <span aria-hidden="true"> →</span>
          <span className="sr-only"> to </span>
        </span>
      )}
      <span className="di-badge" style={{ ["--speed-color" as string]: meta.color }}>
        <span className="dot" />
        {meta.short}
      </span>
    </span>
  );
}

function Card({ e }: { e: Exemplar }) {
  const color = SPEED_META[e.speed].color;
  return (
    <article
      id={slugOf(e.company)}
      className="di-card"
      style={{ ["--speed-color" as string]: color }}
    >
      <div className="di-card-top">
        <div>
          <h3>{e.company}</h3>
          <span className="di-industry">
            {e.industry} · {e.region}
          </span>
        </div>
        <SpeedBadge speed={e.speed} was={e.was} />
      </div>

      <p className="di-story">{e.story}</p>
      <p className="di-changed">
        <b>What changed</b>
        {e.changed}
      </p>

      <div className="di-card-foot">
        <span className="di-date">{e.date}</span>
        <span className="di-signal" title={SIGNAL_META[e.signal].title}>
          {SIGNAL_META[e.signal].label}
        </span>
        <span
          className="di-confidence"
          data-level={e.confidence}
          title={CONFIDENCE_TITLE[e.confidence]}
        >
          <span className="bars">
            <i />
            <i />
            <i />
          </span>
          {e.confidence}
        </span>
      </div>

      {e.note && (
        <p className="di-note">
          <b>Note —</b> {e.note}
        </p>
      )}

      <details className="di-sources">
        <summary>
          {e.sources.length} {e.sources.length === 1 ? "source" : "sources"} · verified{" "}
          {formatVerified(e.verified)}
        </summary>
        <ul>
          {e.sources.map((src) => (
            <li key={src.url}>
              <a href={src.url} target="_blank" rel="noopener noreferrer">
                {src.label}
              </a>
            </li>
          ))}
        </ul>
      </details>
    </article>
  );
}

export default function DisruptionIndex() {
  const [industries, setIndustries] = useState<Set<string>>(new Set());
  const [speeds, setSpeeds] = useState<Set<Speed>>(new Set());
  const [regions, setRegions] = useState<Set<Region>>(new Set());
  const [signals, setSignals] = useState<Set<Signal>>(new Set());
  const [sort, setSort] = useState<SortKey>("speed");

  const toggle = <T,>(set: Set<T>, val: T): Set<T> => {
    const next = new Set(set);
    if (next.has(val)) next.delete(val);
    else next.add(val);
    return next;
  };

  // Counts respect the *other* axis's filter so the numbers stay honest.
  const speedCounts = useMemo(() => {
    const base = industries.size
      ? EXEMPLARS.filter((e) => industries.has(e.industry))
      : EXEMPLARS;
    const m: Record<string, number> = {};
    for (const e of base) m[e.speed] = (m[e.speed] ?? 0) + 1;
    return m;
  }, [industries]);

  const industryCounts = useMemo(() => {
    const base = speeds.size
      ? EXEMPLARS.filter((e) => speeds.has(e.speed))
      : EXEMPLARS;
    const m: Record<string, number> = {};
    for (const e of base) m[e.industry] = (m[e.industry] ?? 0) + 1;
    return m;
  }, [speeds]);

  const filtered = useMemo(() => {
    return EXEMPLARS.filter(
      (e) =>
        (industries.size === 0 || industries.has(e.industry)) &&
        (speeds.size === 0 || speeds.has(e.speed)) &&
        (regions.size === 0 || regions.has(e.region)) &&
        (signals.size === 0 || signals.has(e.signal))
    );
  }, [industries, speeds, regions, signals]);

  const sorted = useMemo(() => {
    const arr = [...filtered];
    if (sort === "company") {
      arr.sort((a, b) => a.company.localeCompare(b.company));
    } else if (sort === "industry") {
      arr.sort(
        (a, b) =>
          a.industry.localeCompare(b.industry) ||
          SPEED_ORDER.indexOf(a.speed) - SPEED_ORDER.indexOf(b.speed)
      );
    } else {
      arr.sort(
        (a, b) =>
          SPEED_ORDER.indexOf(a.speed) - SPEED_ORDER.indexOf(b.speed) ||
          a.industry.localeCompare(b.industry)
      );
    }
    return arr;
  }, [filtered, sort]);

  const grouped = sort === "speed";
  const hasFilters =
    industries.size > 0 || speeds.size > 0 || regions.size > 0 || signals.size > 0;

  return (
    <>
      {/* ---------- Controls ---------- */}
      <div className="di-controls">
        <div className="container">
          <div className="di-controls-row">
            <div className="di-group">
              <span className="di-control-label">Speed</span>
              {SPEED_ORDER.map((s) => {
                const meta = SPEED_META[s];
                return (
                  <button
                    key={s}
                    className="di-chip"
                    data-active={speeds.has(s)}
                    onClick={() => setSpeeds(toggle(speeds, s))}
                    aria-pressed={speeds.has(s)}
                  >
                    <span className="di-swatch" style={{ background: meta.color }} />
                    {meta.label}
                    <span className="di-count">{speedCounts[s] ?? 0}</span>
                  </button>
                );
              })}
            </div>

            <div className="di-group">
              <span className="di-control-label">Sort</span>
              <select
                className="di-select"
                value={sort}
                onChange={(ev) => setSort(ev.target.value as SortKey)}
                aria-label="Sort by"
              >
                <option value="speed">By speed of disruption</option>
                <option value="industry">By industry</option>
                <option value="company">By company (A–Z)</option>
              </select>
            </div>

            {hasFilters && (
              <button
                className="di-reset"
                onClick={() => {
                  setIndustries(new Set());
                  setSpeeds(new Set());
                  setRegions(new Set());
                  setSignals(new Set());
                }}
              >
                Clear filters
              </button>
            )}
          </div>

          <div className="di-controls-row" style={{ marginTop: "0.75rem" }}>
            <div className="di-group">
              <span className="di-control-label">Region</span>
              {ALL_REGIONS.map((r) => (
                <button
                  key={r}
                  className="di-chip"
                  data-active={regions.has(r)}
                  onClick={() => setRegions(toggle(regions, r))}
                  aria-pressed={regions.has(r)}
                >
                  {r}
                  <span className="di-count">
                    {EXEMPLARS.filter((e) => e.region === r).length}
                  </span>
                </button>
              ))}
            </div>
            <div className="di-group">
              <span className="di-control-label">Signal</span>
              {SIGNAL_ORDER.map((sg) => (
                <button
                  key={sg}
                  className="di-chip"
                  data-active={signals.has(sg)}
                  onClick={() => setSignals(toggle(signals, sg))}
                  aria-pressed={signals.has(sg)}
                  title={SIGNAL_META[sg].title}
                >
                  {SIGNAL_META[sg].label}
                  <span className="di-count">
                    {EXEMPLARS.filter((e) => e.signal === sg).length}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="di-group" style={{ marginTop: "0.75rem" }}>
            <span className="di-control-label">Industry</span>
            {ALL_INDUSTRIES.map((ind) => (
              <button
                key={ind}
                className="di-chip"
                data-active={industries.has(ind)}
                onClick={() => setIndustries(toggle(industries, ind))}
                aria-pressed={industries.has(ind)}
              >
                {ind}
                <span className="di-count">{industryCounts[ind] ?? 0}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ---------- Results ---------- */}
      <section className="di-results">
        <div className="container">
          <p className="di-result-meta">
            Showing <b>{sorted.length}</b> of {EXEMPLARS.length} exemplars
            {industries.size > 0 && ` · ${Array.from(industries).join(", ")}`}
            {speeds.size > 0 &&
              ` · ${Array.from(speeds)
                .map((s) => SPEED_META[s].label)
                .join(", ")}`}
            {regions.size > 0 && ` · ${Array.from(regions).join(", ")}`}
            {signals.size > 0 &&
              ` · ${Array.from(signals)
                .map((sg) => SIGNAL_META[sg].label)
                .join(", ")}`}
          </p>

          {sorted.length === 0 && (
            <p className="di-empty">
              No exemplars match this combination yet — that gap is itself a
              signal. Clear a filter to keep exploring.
            </p>
          )}

          {grouped ? (
            SPEED_ORDER.map((s) => {
              const items = sorted.filter((e) => e.speed === s);
              if (items.length === 0) return null;
              const meta = SPEED_META[s];
              return (
                <div key={s}>
                  <div className="di-group-head">
                    <span className="bar" style={{ background: meta.color }} />
                    <h2>{meta.label}</h2>
                    <p className="blurb">{meta.blurb}</p>
                    <span className="gcount">
                      {items.length}{" "}
                      {items.length === 1 ? "company" : "companies"}
                    </span>
                  </div>
                  <div className="di-grid">
                    {items.map((e) => (
                      <Card key={e.company} e={e} />
                    ))}
                  </div>
                </div>
              );
            })
          ) : (
            <div className="di-grid">
              {sorted.map((e) => (
                <Card key={e.company} e={e} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
