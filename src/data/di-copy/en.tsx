import { EXEMPLARS, SPEED_META, CHANGELOG, type MarketPoint } from "@/data/exemplars";
import { OPPORTUNITIES, LEFT_OUT } from "@/data/opportunities";
import type { DICopy, ExemplarText, MarketText, OpportunityText } from "./types";

/* English is DERIVED from the data files for every company, market, changelog line
   and opportunity — edit the data, not this file. The UI strings and page prose
   below are the source text the ES and PT files translate. */

type E = (typeof EXEMPLARS)[number];
const opt = <K extends string>(o: object, k: K): string | undefined =>
  k in o ? ((o as Record<K, string>)[k]) : undefined;

const exemplars = Object.fromEntries(
  EXEMPLARS.map((e: E) => [e.company, {
    story: e.story, changed: e.changed, date: e.date, note: opt(e, "note"), unplotted: opt(e, "unplotted"),
  }]),
) as DICopy["exemplars"] satisfies Record<string, ExemplarText>;

const markets = Object.fromEntries(
  EXEMPLARS.flatMap((e: E): readonly MarketPoint[] => ("markets" in e ? e.markets : [])).map((m) => [m.ticker, {
    responseWhy: m.responseWhy, caveat: opt(m, "caveat"),
  }]),
) as DICopy["markets"] satisfies Record<string, MarketText>;

const industries = Object.fromEntries(EXEMPLARS.map((e: E) => [e.industry, e.industry])) as DICopy["industries"];

const items = Object.fromEntries(
  OPPORTUNITIES.map((o) => [o.n, {
    title: o.title, verdict: o.verdict, thesis: o.thesis,
    evidence: o.evidence.map((ev) => ev.text),
    inTheIndex: o.inTheIndex,
    oursLabel: "ours" in o ? o.ours.label : undefined,
  }]),
) as DICopy["opportunities"]["items"] satisfies Record<string, OpportunityText>;

export const en: DICopy = {
  dateLocale: "en-US",
  meta: {
    title: "The Disruption Index — industries ranked by the speed of AI disruption",
    description:
      "A live, browsable index of industries by how fast AI is disrupting them — paired with the real companies that died, reinvented, or rode the wave. Built to make AI urgency undeniable.",
    ogTitle: "The Disruption Index",
  },
  nav: { back: "← Back to home" },

  hero: {
    eyebrow: "The speed of AI disruption · live index · last updated",
    h1: <>Some industries already lost.{" "}<span className="accent">Yours is on this map somewhere.</span></>,
    lede: (
      <>
        A browsable index of industries by{" "}
        <strong style={{ color: "var(--color-ink)" }}>how fast AI is disrupting them</strong> — paired with the real
        companies that died, reinvented, or rode the wave. Filter by your industry. Find your closest analog. Then
        ask how long you have.
      </>
    ),
    stats: { exemplars: "verified exemplars", industries: "industries", gone: "already gone", insulated: "truly insulated" },
  },
  changelogLabel: "Index changelog",
  changelog: Object.fromEntries(CHANGELOG.map((c) => [c.date, c.summary])) as DICopy["changelog"],
  footer: {
    lead: "Accuracy is the point.",
    body: (
      <>
        Every entry was researched against public reporting, links its sources, and carries a confidence rating.
        Where a number is a company&apos;s own claim, an estimate, or part of a multi-causal story, the card&apos;s
        note says so plainly. Disruption stories are messy — overstating them would cost the one thing that makes
        urgency land: <em>being true</em>.
      </>
    ),
    kept: "Curated, not crowd-fed. Kept current by AIOS research agents — itself an example of the speed it describes.",
    first: "First researched June 2026; every entry re-verified 13 Nov 2026.",
  },

  speed: Object.fromEntries(
    Object.entries(SPEED_META).map(([k, v]) => [k, { label: v.label, short: v.short, blurb: v.blurb }]),
  ) as DICopy["speed"],
  signal: {
    revenue: { label: "Revenue", title: "The speed rests on revenue won or lost." },
    jobs: { label: "Jobs", title: "The speed rests on jobs cut, not hired, or redeployed." },
    market: { label: "Market fear", title: "The speed rests on a market repricing that hasn't shown up in revenue yet." },
  },
  region: { US: "US", LATAM: "LATAM", Europe: "Europe", Asia: "Asia", Global: "Global" },
  confidence: {
    high: { label: "high", title: "High confidence — well-corroborated across public sources." },
    medium: {
      label: "medium",
      title: "Medium confidence — some figures are company-reported, estimated, or part of a multi-causal story. See note.",
    },
    low: { label: "low", title: "Low confidence — directional only; treat specifics as unverified." },
  },
  industries,
  exemplars,
  markets,

  index: {
    whatChanged: "What changed",
    note: "Note —",
    source: "source",
    sources: "sources",
    verified: "verified",
    movedFrom: "Moved from",
    movedTitle: (from) => `Moved from "${from}" in the last update`,
    to: "to",
    findPlaceholder: "Find your industry or company…",
    findAria: "Find your industry or company",
    clearSearch: "Clear search",
    suggestions: "Suggestions",
    kindIndustry: "Industry",
    kindCompany: "Company",
    speedAria: "Speed of disruption",
    everySpeed: "Every speed",
    all: "All",
    filters: "Filters",
    region: "Region",
    signal: "Signal",
    sort: "Sort",
    bySpeed: "By speed",
    byIndustry: "By industry",
    az: "A–Z",
    of: "of",
    activeFilters: "Active filters",
    removeFilter: "Remove filter:",
    clearAll: "Clear all",
    emptyPre: "Nothing matches yet — that gap is itself a signal. Try a broader word, or",
    emptyBtn: "clear all filters",
    company: "company",
    companies: "companies",
  },

  quadrant: {
    eyebrow: "Since ChatGPT launched · 30 Nov 2022 → Oct 2026",
    title: <>Growing revenue didn&apos;t save them.{" "}<span className="accent">The market priced the disruption first.</span></>,
    lede: (priced, total) => (
      <>
        Every listed company in the index, placed by two measured numbers since ChatGPT&apos;s launch: how its{" "}
        <b>revenue</b> changed (real disruption) and how its <b>share price</b> changed (market fear).{" "}
        <b>{priced}</b> of {total} still grew revenue and were punished anyway. Hover, tap, or tab to a dot.
      </>
    ),
    chartAria: "Quadrant chart: revenue change versus share-price change since 30 November 2022",
    xAxis: "Revenue change · shrinking ← → growing",
    yAxis: "Share price · punished ↓ ↑ rewarded",
    closeDetails: "Close details",
    revenue: "Revenue",
    sharePrice: "Share price",
    response: "Response",
    sourcesLead: "Sources:",
    revenueSource: "revenue",
    priceSource: "price",
    showInIndex: (company) => `Show ${company} in the index →`,
    dotAria: (name, ticker, rev, price, quadrant, response) =>
      `${name} (${ticker}): revenue ${rev}, share price ${price} since 30 Nov 2022. ${quadrant}. ${response}.`,
    detailsAria: (name) => `${name} details`,
    legend: "Legend",
    method: (
      <>
        <b>How to read it.</b> Baseline: closing share price on 30 Nov 2022, the day ChatGPT launched, against the
        latest close (12 Nov 2026); revenue for the fiscal year containing that date against the latest full fiscal
        year reported. Prices are split-adjusted and exclude dividends; revenue is in each company&apos;s reporting
        currency. Both axes are log scales, so a halving and a doubling sit the same distance from zero. Marker shape
        is the company&apos;s response: <b>restructuring</b> (documented cuts, a forced sale, a merger, or
        bankruptcy) wins over <b>reinventing</b> (a shipped AI product or pricing model at the core of the business);
        everything else is <b>no documented response</b>. Only companies with public numbers are plotted: missing
        stays missing.
      </>
    ),
    tableSummary: "The chart as a table, with sources",
    th: { company: "Company", revenue: "Revenue", sharePrice: "Share price", quadrant: "Quadrant", response: "Response", sources: "Sources" },
    revenueLink: "Revenue",
    priceLink: "Price",
    unplottedTitle: "Not plotted, and why",
    unplottedDefault: "No public numbers.",
    meta: {
      gone: { label: "Already gone", blurb: "Revenue shrinking, market value punished." },
      priced: { label: "Priced for disruption", blurb: "Revenue still growing, market value punished: the fear is ahead of the numbers." },
      credit: { label: "Restructuring credit", blurb: "Revenue shrinking, market value rewarded." },
      reinventing: { label: "Reinventing", blurb: "Revenue growing, market value rewarded." },
    },
    responses: {
      reinventing: { label: "Reinventing", title: "A shipped AI product or pricing model at the core of the business." },
      restructuring: { label: "Restructuring", title: "Documented cuts, a forced sale, a merger, or bankruptcy since 2022." },
      none: { label: "No documented response", title: "No response documented in our sources." },
    },
  },

  opportunities: {
    eyebrow: "#BlackOctober · what the disruption opens up",
    title: "Emergent business opportunities",
    lede: (
      <>
        Around 19–22 Oct 2026 a cluster of separate security events landed within days of each other: critical PHP
        flaws that{" "}
        <a
          href="https://www.cisa.gov/news-events/alerts/2026/10/21/critical-vulnerabilities-php-require-immediate-patching"
          target="_blank"
          rel="noopener noreferrer"
        >
          CISA
        </a>{" "}
        told organizations to patch immediately, a poisoned AI-gateway release, a cloud platform&apos;s secrets
        breach, and a certificate authority with broken keys. The press called it #BlackOctober. It was not one
        campaign, and it is not disruption by itself. What it exposed is where the next businesses get built. The
        four opportunities below are <b>as framed by Google&apos;s AI Mode, 30 Oct 2026</b>; the evidence under each
        is ours, checked against primary sources.
      </>
    ),
    inTheIndex: "In the index:",
    leftOutTitle: "What we left out",
    leftOutLede: "Google's answer cited these; we could not verify them, so they are not evidence here.",
    items,
    leftOut: [...LEFT_OUT] as DICopy["opportunities"]["leftOut"],
  },
};
