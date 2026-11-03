"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { SPEED_META, SPEED_ORDER, type Exemplar, type Region, type Signal, type Speed } from "@/data/exemplars";
import { fill, type IndexClientCopy } from "@/data/di-copy/client";

/* The interactive index. `items` arrives already localized from the server (one
   language per page); `copy` carries every UI string. Colours and order stay in
   SPEED_META / SPEED_ORDER. Company names are identical in every locale, which is
   what lets the quadrant's findInIndex(company) work on any language's page. */

type SortKey = "speed" | "industry" | "company";
type T = IndexClientCopy;

const REGION_ORDER: Region[] = ["US", "LATAM", "Europe", "Asia", "Global"];
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

function formatVerified(iso: string, locale: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  const month = new Date(Date.UTC(y, m - 1, d || 1)).toLocaleString(locale, {
    month: "short",
    timeZone: "UTC",
  });
  return d ? `${d} ${month} ${y}` : `${month} ${y}`;
}

function SpeedBadge({ speed, was, t }: { speed: Speed; was?: Speed; t: T }) {
  return (
    <span className="di-badge-wrap">
      {was && (
        <span
          className="di-moved"
          style={{ ["--was-color" as string]: SPEED_META[was].color }}
          title={fill(t.ui.movedTitle, { from: t.speed[was].label })}
        >
          <span className="sr-only">{t.ui.movedFrom} </span>
          <s>{t.speed[was].short}</s>
          <span aria-hidden="true"> →</span>
          <span className="sr-only"> {t.ui.to} </span>
        </span>
      )}
      <span className="di-badge" style={{ ["--speed-color" as string]: SPEED_META[speed].color }}>
        <span className="dot" />
        {t.speed[speed].short}
      </span>
    </span>
  );
}

function Card({ e, t }: { e: Exemplar; t: T }) {
  const color = SPEED_META[e.speed].color;
  return (
    <article id={slugOf(e.company)} className="di-card" style={{ ["--speed-color" as string]: color }}>
      <div className="di-card-top">
        <div>
          <h3>{e.company}</h3>
          <span className="di-industry">
            {e.industry} · {t.region[e.region]}
          </span>
        </div>
        <SpeedBadge speed={e.speed} was={e.was} t={t} />
      </div>

      <p className="di-story">{e.story}</p>
      <p className="di-changed">
        <b>{t.ui.whatChanged}</b>
        {e.changed}
      </p>

      <div className="di-card-foot">
        <span className="di-date">{e.date}</span>
        <span className="di-signal" title={t.signal[e.signal].title}>
          {t.signal[e.signal].label}
        </span>
        <span className="di-confidence" data-level={e.confidence} title={t.confidence[e.confidence].title}>
          <span className="bars">
            <i />
            <i />
            <i />
          </span>
          {t.confidence[e.confidence].label}
        </span>
      </div>

      {e.note && (
        <p className="di-note">
          <b>{t.ui.note}</b> {e.note}
        </p>
      )}

      <details className="di-sources">
        <summary>
          {e.sources.length} {e.sources.length === 1 ? t.ui.source : t.ui.sources} · {t.ui.verified}{" "}
          {formatVerified(e.verified, t.dateLocale)}
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

interface Filters {
  query: string;
  industry: string | null;
  speed: Speed | null;
  region: Region | null;
  signal: Signal | null;
}

const NO_FILTERS: Filters = { query: "", industry: null, speed: null, region: null, signal: null };

type Suggestion =
  | { kind: "industry"; value: string; count: number }
  | { kind: "company"; value: string; industry: string; speed: Speed };

/** Everything derived from the item list, computed once per page. */
function useIndexModel(items: Exemplar[], t: T) {
  return useMemo(() => {
    const allIndustries = Array.from(new Set(items.map((e) => e.industry))).sort((a, b) =>
      a.localeCompare(b, t.dateLocale),
    );
    const allRegions = REGION_ORDER.filter((r) => items.some((e) => e.region === r));
    // Words of each entry's searchable text; a query word matches the start of a
    // word, so "leg" finds "Legal" but not "alleging". Both the localized region
    // name and its code are searchable.
    const words = new Map(
      items.map((e) => [
        e,
        fold([e.company, e.industry, e.region, t.region[e.region], e.story, e.changed].join(" "))
          .split(/[^a-z0-9&]+/)
          .filter(Boolean),
      ]),
    );
    const matchesQuery = (e: Exemplar, q: string) => {
      const query = fold(q).split(/[^a-z0-9&]+/).filter(Boolean);
      if (query.length === 0) return true;
      const w = words.get(e) ?? [];
      return query.every((x) => w.some((y) => y.startsWith(x)));
    };
    const applyFilters = (f: Filters, skip?: keyof Filters) =>
      items.filter(
        (e) =>
          (skip === "query" || matchesQuery(e, f.query)) &&
          (skip === "industry" || !f.industry || e.industry === f.industry) &&
          (skip === "speed" || !f.speed || e.speed === f.speed) &&
          (skip === "region" || !f.region || e.region === f.region) &&
          (skip === "signal" || !f.signal || e.signal === f.signal),
      );
    const industryCounts = items.reduce<Record<string, number>>((m, e) => {
      m[e.industry] = (m[e.industry] ?? 0) + 1;
      return m;
    }, {});
    const suggestionsFor = (q: string): Suggestion[] => {
      const f = fold(q.trim());
      if (!f) return [];
      const inds: Suggestion[] = allIndustries
        .filter((i) => fold(i).includes(f))
        .map((i) => ({ kind: "industry", value: i, count: industryCounts[i] }));
      const cos: Suggestion[] = items
        .filter((e) => fold(e.company).includes(f))
        .slice(0, 6)
        .map((e) => ({ kind: "company", value: e.company, industry: e.industry, speed: e.speed }));
      return [...inds, ...cos];
    };
    return { allRegions, applyFilters, suggestionsFor };
  }, [items, t]);
}

/* ---------- The search combobox ---------- */

function FindField({
  query,
  setQuery,
  onPickIndustry,
  inputRef,
  suggestionsFor,
  t,
}: {
  query: string;
  setQuery: (q: string) => void;
  onPickIndustry: (i: string) => void;
  inputRef: React.RefObject<HTMLInputElement | null>;
  suggestionsFor: (q: string) => Suggestion[];
  t: T;
}) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(-1);
  const options = useMemo(() => suggestionsFor(query), [query, suggestionsFor]);
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
        placeholder={t.ui.findPlaceholder}
        aria-label={t.ui.findAria}
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
          aria-label={t.ui.clearSearch}
          onClick={() => {
            setQuery("");
            inputRef.current?.focus();
          }}
        >
          ×
        </button>
      )}
      {showList && (
        <ul id={listId} role="listbox" className="di-find-list" aria-label={t.ui.suggestions}>
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
                  <span className="di-find-kind">{t.ui.kindIndustry}</span>
                  <span className="di-find-val">{s.value}</span>
                  <span className="di-find-meta">{s.count}</span>
                </>
              ) : (
                <>
                  <span className="di-find-kind">{t.ui.kindCompany}</span>
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
  t,
}: {
  value: Speed | null;
  onChange: (s: Speed | null) => void;
  counts: Record<string, number>;
  total: number;
  t: T;
}) {
  const items: (Speed | null)[] = [null, ...SPEED_ORDER];
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const idx = items.indexOf(value);
  return (
    <div className="di-seg" role="radiogroup" aria-label={t.ui.speedAria}>
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
            title={s ? t.speed[s].blurb : t.ui.everySpeed}
            onClick={() => onChange(s)}
            onKeyDown={(ev) => {
              const step =
                ev.key === "ArrowRight" || ev.key === "ArrowDown" ? 1 : ev.key === "ArrowLeft" || ev.key === "ArrowUp" ? -1 : 0;
              if (!step) return;
              ev.preventDefault();
              const next = (idx + step + items.length) % items.length;
              onChange(items[next]);
              refs.current[next]?.focus();
            }}
          >
            {s && <span className="di-swatch" />}
            {s ? t.speed[s].short : t.ui.all}
            <span className="di-count">{s ? counts[s] ?? 0 : total}</span>
          </button>
        );
      })}
    </div>
  );
}

function MenuSelect<V extends string>({
  label,
  value,
  onChange,
  options,
  all,
}: {
  label: string;
  value: V | null;
  onChange: (v: V | null) => void;
  options: { value: V; label: string; count: number }[];
  all: string;
}) {
  return (
    <label className="di-menu" data-set={value !== null}>
      <span className="di-menu-label">{label}</span>
      <select className="di-menu-select" value={value ?? ""} onChange={(ev) => onChange((ev.target.value || null) as V | null)}>
        <option value="">{all}</option>
        {options.map((o) => (
          <option key={o.value} value={o.value} disabled={o.count === 0}>
            {o.label} ({o.count})
          </option>
        ))}
      </select>
    </label>
  );
}

export default function DisruptionIndex({ items, copy: t }: { items: Exemplar[]; copy: T }) {
  const [f, setF] = useState<Filters>(NO_FILTERS);
  const [sort, setSort] = useState<SortKey>("speed");
  const [panelOpen, setPanelOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLElement>(null);
  const set = <K extends keyof Filters>(k: K, v: Filters[K]) => setF((prev) => ({ ...prev, [k]: v }));
  const { allRegions, applyFilters, suggestionsFor } = useIndexModel(items, t);

  // A dot in the quadrant can point the index at its company.
  useEffect(() => {
    const onFind = (ev: Event) => {
      const company = (ev as CustomEvent<string>).detail;
      setF({ ...NO_FILTERS, query: company });
      requestAnimationFrame(() => resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }));
    };
    window.addEventListener(FIND_EVENT, onFind);
    return () => window.removeEventListener(FIND_EVENT, onFind);
  }, []);

  // Each control's counts respect every *other* filter, so the numbers stay honest.
  const speedCounts = useMemo(() => {
    const m: Record<string, number> = {};
    for (const e of applyFilters(f, "speed")) m[e.speed] = (m[e.speed] ?? 0) + 1;
    return m;
  }, [f, applyFilters]);
  const speedTotal = useMemo(() => applyFilters(f, "speed").length, [f, applyFilters]);
  const regionOptions = useMemo(() => {
    const base = applyFilters(f, "region");
    return allRegions.map((r) => ({ value: r, label: t.region[r], count: base.filter((e) => e.region === r).length }));
  }, [f, applyFilters, allRegions, t]);
  const signalOptions = useMemo(() => {
    const base = applyFilters(f, "signal");
    return SIGNAL_ORDER.map((sg) => ({ value: sg, label: t.signal[sg].label, count: base.filter((e) => e.signal === sg).length }));
  }, [f, applyFilters, t]);

  const filtered = useMemo(() => applyFilters(f), [f, applyFilters]);

  const sorted = useMemo(() => {
    const arr = [...filtered];
    const cmp = (a: string, b: string) => a.localeCompare(b, t.dateLocale);
    if (sort === "company") {
      arr.sort((a, b) => cmp(a.company, b.company));
    } else if (sort === "industry") {
      arr.sort((a, b) => cmp(a.industry, b.industry) || SPEED_ORDER.indexOf(a.speed) - SPEED_ORDER.indexOf(b.speed));
    } else {
      arr.sort((a, b) => SPEED_ORDER.indexOf(a.speed) - SPEED_ORDER.indexOf(b.speed) || cmp(a.industry, b.industry));
    }
    return arr;
  }, [filtered, sort, t]);

  const chips: { key: keyof Filters; label: string }[] = [];
  if (f.query.trim()) chips.push({ key: "query", label: `“${f.query.trim()}”` });
  if (f.industry) chips.push({ key: "industry", label: f.industry });
  if (f.speed) chips.push({ key: "speed", label: t.speed[f.speed].label });
  if (f.region) chips.push({ key: "region", label: t.region[f.region] });
  if (f.signal) chips.push({ key: "signal", label: t.signal[f.signal].label });
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
              suggestionsFor={suggestionsFor}
              t={t}
            />
            <button
              type="button"
              className="di-fb-toggle"
              aria-expanded={panelOpen}
              aria-controls="di-fb-more"
              onClick={() => setPanelOpen((o) => !o)}
            >
              {t.ui.filters}
              {menuFilterCount > 0 && <span className="di-count">{menuFilterCount}</span>}
            </button>
            <div className="di-fb-more" id="di-fb-more" data-open={panelOpen}>
              <SpeedSegments value={f.speed} onChange={(s) => set("speed", s)} counts={speedCounts} total={speedTotal} t={t} />
              <div className="di-fb-menus">
                <MenuSelect label={t.ui.region} value={f.region} onChange={(v) => set("region", v)} options={regionOptions} all={t.ui.all} />
                <MenuSelect label={t.ui.signal} value={f.signal} onChange={(v) => set("signal", v)} options={signalOptions} all={t.ui.all} />
                <label className="di-menu">
                  <span className="di-menu-label">{t.ui.sort}</span>
                  <select className="di-menu-select" value={sort} onChange={(ev) => setSort(ev.target.value as SortKey)}>
                    <option value="speed">{t.ui.bySpeed}</option>
                    <option value="industry">{t.ui.byIndustry}</option>
                    <option value="company">{t.ui.az}</option>
                  </select>
                </label>
              </div>
            </div>
          </div>

          <div className="di-fb-status">
            <p className="di-fb-count" aria-live="polite">
              <b>{sorted.length}</b> {t.ui.of} {items.length}
            </p>
            {chips.length > 0 && (
              <ul className="di-fb-chips" aria-label={t.ui.activeFilters}>
                {chips.map((c) => (
                  <li key={c.key}>
                    <button
                      type="button"
                      className="di-fb-chip"
                      aria-label={`${t.ui.removeFilter} ${c.label}`}
                      onClick={() => set(c.key, c.key === "query" ? "" : null)}
                    >
                      {c.label}
                      <span aria-hidden="true">×</span>
                    </button>
                  </li>
                ))}
                <li>
                  <button type="button" className="di-reset" onClick={() => setF(NO_FILTERS)}>
                    {t.ui.clearAll}
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
              {t.ui.emptyPre}{" "}
              <button type="button" className="di-linkbtn" onClick={() => setF(NO_FILTERS)}>
                {t.ui.emptyBtn}
              </button>
              .
            </p>
          )}

          {grouped ? (
            SPEED_ORDER.map((s) => {
              const group = sorted.filter((e) => e.speed === s);
              if (group.length === 0) return null;
              return (
                <div key={s}>
                  <div className="di-group-head">
                    <span className="bar" style={{ background: SPEED_META[s].color }} />
                    <h2>{t.speed[s].label}</h2>
                    <p className="blurb">{t.speed[s].blurb}</p>
                    <span className="gcount">
                      {group.length} {group.length === 1 ? t.ui.company : t.ui.companies}
                    </span>
                  </div>
                  <div className="di-grid">
                    {group.map((e) => (
                      <Card key={e.company} e={e} t={t} />
                    ))}
                  </div>
                </div>
              );
            })
          ) : (
            <div className="di-grid">
              {sorted.map((e) => (
                <Card key={e.company} e={e} t={t} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
