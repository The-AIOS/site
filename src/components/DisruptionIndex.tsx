"use client";

import { useEffect, useMemo, useRef, useState } from "react";
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

/* ---------- Filtering ---------- */

/** The quadrant (and anything else) can point the index at one company. */
export const FIND_EVENT = "di:find";

export function findInIndex(company: string) {
  window.dispatchEvent(new CustomEvent<string>(FIND_EVENT, { detail: company }));
}

const fold = (s: string) =>
  s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "");

// Words of each entry's searchable text; a query word matches the start of a
// word, so "leg" finds "Legal" but not "alleging".
const WORDS = new Map(
  EXEMPLARS.map((e) => [
    e,
    fold([e.company, e.industry, e.region, e.story, e.changed].join(" "))
      .split(/[^a-z0-9&]+/)
      .filter(Boolean),
  ])
);

function matchesQuery(e: Exemplar, q: string) {
  const query = fold(q).split(/[^a-z0-9&]+/).filter(Boolean);
  if (query.length === 0) return true;
  const words = WORDS.get(e) ?? [];
  return query.every((w) => words.some((x) => x.startsWith(w)));
}

interface Filters {
  query: string;
  industry: string | null;
  speed: Speed | null;
  region: Region | null;
  signal: Signal | null;
}

const NO_FILTERS: Filters = { query: "", industry: null, speed: null, region: null, signal: null };

function applyFilters(f: Filters, skip?: keyof Filters) {
  return EXEMPLARS.filter(
    (e) =>
      (skip === "query" || matchesQuery(e, f.query)) &&
      (skip === "industry" || !f.industry || e.industry === f.industry) &&
      (skip === "speed" || !f.speed || e.speed === f.speed) &&
      (skip === "region" || !f.region || e.region === f.region) &&
      (skip === "signal" || !f.signal || e.signal === f.signal)
  );
}

const INDUSTRY_COUNTS = EXEMPLARS.reduce<Record<string, number>>((m, e) => {
  m[e.industry] = (m[e.industry] ?? 0) + 1;
  return m;
}, {});

type Suggestion =
  | { kind: "industry"; value: string; count: number }
  | { kind: "company"; value: string; industry: string; speed: Speed };

function suggestionsFor(q: string): Suggestion[] {
  const f = fold(q.trim());
  if (!f) return [];
  const inds: Suggestion[] = ALL_INDUSTRIES.filter((i) => fold(i).includes(f)).map((i) => ({
    kind: "industry",
    value: i,
    count: INDUSTRY_COUNTS[i],
  }));
  const cos: Suggestion[] = EXEMPLARS.filter((e) => fold(e.company).includes(f))
    .slice(0, 6)
    .map((e) => ({ kind: "company", value: e.company, industry: e.industry, speed: e.speed }));
  return [...inds, ...cos];
}

/* ---------- The search combobox ---------- */

function FindField({
  query,
  setQuery,
  onPickIndustry,
  inputRef,
}: {
  query: string;
  setQuery: (q: string) => void;
  onPickIndustry: (i: string) => void;
  inputRef: React.RefObject<HTMLInputElement | null>;
}) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(-1);
  const options = useMemo(() => suggestionsFor(query), [query]);
  const listId = "di-find-list";
  const showList = open && options.length > 0;

  const pick = (s: Suggestion) => {
    if (s.kind === "industry") {
      onPickIndustry(s.value);
      setQuery("");
    } else {
      setQuery(s.value);
    }
    setOpen(false);
    setActive(-1);
  };

  return (
    <div className="di-find">
      <svg className="di-find-icon" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
        <circle cx="7" cy="7" r="5" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <path d="M11 11l3.5 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
      <input
        ref={inputRef}
        type="search"
        className="di-find-input"
        placeholder="Find your industry or company…"
        aria-label="Find your industry or company"
        role="combobox"
        aria-autocomplete="list"
        aria-expanded={showList}
        aria-controls={listId}
        aria-activedescendant={showList && active >= 0 ? `di-find-opt-${active}` : undefined}
        autoComplete="off"
        spellCheck={false}
        value={query}
        onChange={(ev) => {
          setQuery(ev.target.value);
          setOpen(true);
          setActive(-1);
        }}
        onFocus={() => setOpen(true)}
        onBlur={() => setTimeout(() => setOpen(false), 120)}
        onKeyDown={(ev) => {
          if (ev.key === "ArrowDown" && options.length) {
            ev.preventDefault();
            setOpen(true);
            setActive((a) => (a + 1) % options.length);
          } else if (ev.key === "ArrowUp" && options.length) {
            ev.preventDefault();
            setActive((a) => (a <= 0 ? options.length - 1 : a - 1));
          } else if (ev.key === "Enter" && showList && active >= 0) {
            ev.preventDefault();
            pick(options[active]);
          } else if (ev.key === "Escape") {
            if (showList) setOpen(false);
            else setQuery("");
          }
        }}
      />
      {query && (
        <button
          type="button"
          className="di-find-clear"
          aria-label="Clear search"
          onClick={() => {
            setQuery("");
            inputRef.current?.focus();
          }}
        >
          ×
        </button>
      )}
      {showList && (
        <ul id={listId} role="listbox" className="di-find-list" aria-label="Suggestions">
          {options.map((s, i) => (
            <li
              key={`${s.kind}:${s.value}`}
              id={`di-find-opt-${i}`}
              role="option"
              aria-selected={i === active}
              className="di-find-opt"
              data-active={i === active}
              onMouseDown={(ev) => {
                ev.preventDefault();
                pick(s);
              }}
              onMouseEnter={() => setActive(i)}
            >
              {s.kind === "industry" ? (
                <>
                  <span className="di-find-kind">Industry</span>
                  <span className="di-find-val">{s.value}</span>
                  <span className="di-find-meta">{s.count}</span>
                </>
              ) : (
                <>
                  <span className="di-find-kind">Company</span>
                  <span className="di-find-val">{s.value}</span>
                  <span className="di-find-meta">
                    <span className="di-swatch" style={{ background: SPEED_META[s.speed].color }} />
                    {s.industry}
                  </span>
                </>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

/* ---------- Speed: a segmented control that doubles as the legend ---------- */

function SpeedSegments({
  value,
  onChange,
  counts,
  total,
}: {
  value: Speed | null;
  onChange: (s: Speed | null) => void;
  counts: Record<string, number>;
  total: number;
}) {
  const items: (Speed | null)[] = [null, ...SPEED_ORDER];
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const idx = items.indexOf(value);
  return (
    <div className="di-seg" role="radiogroup" aria-label="Speed of disruption">
      {items.map((s, i) => {
        const checked = s === value;
        return (
          <button
            key={s ?? "all"}
            ref={(el) => {
              refs.current[i] = el;
            }}
            type="button"
            role="radio"
            aria-checked={checked}
            tabIndex={checked ? 0 : -1}
            className="di-seg-btn"
            style={s ? { ["--speed-color" as string]: SPEED_META[s].color } : undefined}
            title={s ? SPEED_META[s].blurb : "Every speed"}
            onClick={() => onChange(s)}
            onKeyDown={(ev) => {
              const step = ev.key === "ArrowRight" || ev.key === "ArrowDown" ? 1 : ev.key === "ArrowLeft" || ev.key === "ArrowUp" ? -1 : 0;
              if (!step) return;
              ev.preventDefault();
              const next = (idx + step + items.length) % items.length;
              onChange(items[next]);
              refs.current[next]?.focus();
            }}
          >
            {s && <span className="di-swatch" />}
            {s ? SPEED_META[s].short : "All"}
            <span className="di-count">{s ? counts[s] ?? 0 : total}</span>
          </button>
        );
      })}
    </div>
  );
}

function MenuSelect<T extends string>({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: T | null;
  onChange: (v: T | null) => void;
  options: { value: T; label: string; count: number }[];
}) {
  return (
    <label className="di-menu" data-set={value !== null}>
      <span className="di-menu-label">{label}</span>
      <select
        className="di-menu-select"
        value={value ?? ""}
        onChange={(ev) => onChange((ev.target.value || null) as T | null)}
      >
        <option value="">All</option>
        {options.map((o) => (
          <option key={o.value} value={o.value} disabled={o.count === 0}>
            {o.label} ({o.count})
          </option>
        ))}
      </select>
    </label>
  );
}

export default function DisruptionIndex() {
  const [f, setF] = useState<Filters>(NO_FILTERS);
  const [sort, setSort] = useState<SortKey>("speed");
  const [panelOpen, setPanelOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLElement>(null);
  const set = <K extends keyof Filters>(k: K, v: Filters[K]) => setF((prev) => ({ ...prev, [k]: v }));

  // A dot in the quadrant can point the index at its company.
  useEffect(() => {
    const onFind = (ev: Event) => {
      const company = (ev as CustomEvent<string>).detail;
      setF({ ...NO_FILTERS, query: company });
      requestAnimationFrame(() =>
        resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
      );
    };
    window.addEventListener(FIND_EVENT, onFind);
    return () => window.removeEventListener(FIND_EVENT, onFind);
  }, []);

  // Each control's counts respect every *other* filter, so the numbers stay honest.
  const speedCounts = useMemo(() => {
    const m: Record<string, number> = {};
    for (const e of applyFilters(f, "speed")) m[e.speed] = (m[e.speed] ?? 0) + 1;
    return m;
  }, [f]);
  const speedTotal = useMemo(() => applyFilters(f, "speed").length, [f]);
  const regionOptions = useMemo(() => {
    const base = applyFilters(f, "region");
    return ALL_REGIONS.map((r) => ({
      value: r,
      label: r,
      count: base.filter((e) => e.region === r).length,
    }));
  }, [f]);
  const signalOptions = useMemo(() => {
    const base = applyFilters(f, "signal");
    return SIGNAL_ORDER.map((sg) => ({
      value: sg,
      label: SIGNAL_META[sg].label,
      count: base.filter((e) => e.signal === sg).length,
    }));
  }, [f]);

  const filtered = useMemo(() => applyFilters(f), [f]);

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

  const chips: { key: keyof Filters; label: string }[] = [];
  if (f.query.trim()) chips.push({ key: "query", label: `“${f.query.trim()}”` });
  if (f.industry) chips.push({ key: "industry", label: f.industry });
  if (f.speed) chips.push({ key: "speed", label: SPEED_META[f.speed].label });
  if (f.region) chips.push({ key: "region", label: f.region });
  if (f.signal) chips.push({ key: "signal", label: SIGNAL_META[f.signal].label });
  const menuFilterCount = [f.speed, f.region, f.signal].filter(Boolean).length;

  const grouped = sort === "speed";

  return (
    <>
      {/* ---------- Filter bar ---------- */}
      <div className="di-controls">
        <div className="container">
          <div className="di-fb">
            <FindField
              query={f.query}
              setQuery={(q) => set("query", q)}
              onPickIndustry={(i) => set("industry", i)}
              inputRef={inputRef}
            />
            <button
              type="button"
              className="di-fb-toggle"
              aria-expanded={panelOpen}
              aria-controls="di-fb-more"
              onClick={() => setPanelOpen((o) => !o)}
            >
              Filters{menuFilterCount > 0 && <span className="di-count">{menuFilterCount}</span>}
            </button>
            <div className="di-fb-more" id="di-fb-more" data-open={panelOpen}>
              <SpeedSegments
                value={f.speed}
                onChange={(s) => set("speed", s)}
                counts={speedCounts}
                total={speedTotal}
              />
              <div className="di-fb-menus">
                <MenuSelect label="Region" value={f.region} onChange={(v) => set("region", v)} options={regionOptions} />
                <MenuSelect label="Signal" value={f.signal} onChange={(v) => set("signal", v)} options={signalOptions} />
                <label className="di-menu">
                  <span className="di-menu-label">Sort</span>
                  <select
                    className="di-menu-select"
                    value={sort}
                    onChange={(ev) => setSort(ev.target.value as SortKey)}
                  >
                    <option value="speed">By speed</option>
                    <option value="industry">By industry</option>
                    <option value="company">A–Z</option>
                  </select>
                </label>
              </div>
            </div>
          </div>

          <div className="di-fb-status">
            <p className="di-fb-count" aria-live="polite">
              <b>{sorted.length}</b> of {EXEMPLARS.length}
            </p>
            {chips.length > 0 && (
              <ul className="di-fb-chips" aria-label="Active filters">
                {chips.map((c) => (
                  <li key={c.key}>
                    <button
                      type="button"
                      className="di-fb-chip"
                      aria-label={`Remove filter: ${c.label}`}
                      onClick={() => set(c.key, c.key === "query" ? "" : null)}
                    >
                      {c.label}
                      <span aria-hidden="true">×</span>
                    </button>
                  </li>
                ))}
                <li>
                  <button type="button" className="di-reset" onClick={() => setF(NO_FILTERS)}>
                    Clear all
                  </button>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>

      {/* ---------- Results ---------- */}
      <section className="di-results" ref={resultsRef}>
        <div className="container">
          {sorted.length === 0 && (
            <p className="di-empty">
              Nothing matches yet — that gap is itself a signal. Try a broader word, or{" "}
              <button type="button" className="di-linkbtn" onClick={() => setF(NO_FILTERS)}>
                clear all filters
              </button>
              .
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
