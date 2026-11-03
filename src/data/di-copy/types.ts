/* The Disruption Index, per locale (/disruption-index, /es/disruption-index, /pt/disruption-index).
 *
 * English text for every company, market and opportunity lives in the data files
 * (src/data/exemplars.ts, src/data/opportunities.ts) and research keeps it current
 * there; en.tsx derives from them. es.tsx and pt.tsx translate them, keyed by
 * company / industry / ticker / opportunity / changelog date — closed unions, so a
 * company added to the data without its translation fails the build.
 *
 * Stays English in every locale: "The Disruption Index", company names, tickers,
 * exchanges, fiscal-period labels (FY2022, H1 2026…), source/document titles,
 * product names (ChatGPT, CoCounsel…), "#BlackOctober", URLs. */

import type { ReactNode } from "react";
import type {
  Company, Industry, Ticker, ChangelogDate, Speed, Signal, Region, Confidence, Response,
} from "@/data/exemplars";
import type { OpportunityId } from "@/data/opportunities";

export type Quadrant = "gone" | "priced" | "credit" | "reinventing";

export type ExemplarText = { story: string; changed: string; date: string; note?: string; unplotted?: string };
export type MarketText = { responseWhy: string; caveat?: string };
export type OpportunityText = {
  title: string; verdict: string; thesis: string;
  evidence: string[]; // one per evidence item in src/data/opportunities.ts, same order
  inTheIndex: string;
  oursLabel?: string;
};

export type DICopy = {
  /** BCP-47 tag used for every date and number on the page. */
  dateLocale: string;
  meta: { title: string; description: string; ogTitle: string };
  nav: { back: string };

  hero: {
    eyebrow: string; // "The speed of AI disruption · live index · last updated"
    h1: ReactNode;
    lede: ReactNode;
    stats: { exemplars: string; industries: string; gone: string; insulated: string };
  };
  changelogLabel: string;
  changelog: Record<ChangelogDate, string>;
  footer: { lead: string; body: ReactNode; kept: string; first: string };

  speed: Record<Speed, { label: string; short: string; blurb: string }>;
  signal: Record<Signal, { label: string; title: string }>;
  region: Record<Region, string>;
  confidence: Record<Confidence, { label: string; title: string }>;
  industries: Record<Industry, string>;
  exemplars: Record<Company, ExemplarText>;
  markets: Record<Ticker, MarketText>;

  index: {
    whatChanged: string;
    note: string; // "Note —"
    source: string; sources: string; verified: string;
    movedFrom: string; // "Moved from"
    movedTitle: (from: string) => string; // `Moved from "${from}" in the last update`
    to: string;
    findPlaceholder: string; findAria: string; clearSearch: string; suggestions: string;
    kindIndustry: string; kindCompany: string;
    speedAria: string; everySpeed: string; all: string;
    filters: string; region: string; signal: string; sort: string;
    bySpeed: string; byIndustry: string; az: string;
    of: string; // "{n} of {total}"
    activeFilters: string; removeFilter: string; clearAll: string;
    emptyPre: string; emptyBtn: string;
    company: string; companies: string;
  };

  quadrant: {
    eyebrow: string;
    title: ReactNode;
    lede: (priced: number, total: number) => ReactNode;
    chartAria: string;
    xAxis: string; yAxis: string;
    closeDetails: string;
    revenue: string; sharePrice: string; response: string;
    sourcesLead: string; revenueSource: string; priceSource: string;
    showInIndex: (company: string) => string;
    dotAria: (name: string, ticker: string, rev: string, price: string, quadrant: string, response: string) => string;
    detailsAria: (name: string) => string;
    legend: string;
    method: ReactNode;
    tableSummary: string;
    th: { company: string; revenue: string; sharePrice: string; quadrant: string; response: string; sources: string };
    revenueLink: string; priceLink: string;
    unplottedTitle: string;
    unplottedDefault: string;
    meta: Record<Quadrant, { label: string; blurb: string }>;
    responses: Record<Response, { label: string; title: string }>;
  };

  opportunities: {
    eyebrow: string;
    title: string;
    lede: ReactNode;
    inTheIndex: string;
    leftOutTitle: string;
    leftOutLede: string;
    items: Record<OpportunityId, OpportunityText>;
    leftOut: [string, string, string];
  };
};
