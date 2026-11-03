import type { Locale } from "@/messages";
import { EXEMPLARS, type Exemplar } from "@/data/exemplars";
import { OPPORTUNITIES } from "@/data/opportunities";
import type { DICopy } from "./types";
import { en } from "./en";
import { es } from "./es";
import { pt } from "./pt";

export const DI_COPY: Record<Locale, DICopy> = { en, es, pt };

export const DI_PATHS: Record<Locale, string> = {
  en: "/disruption-index",
  es: "/es/disruption-index",
  pt: "/pt/disruption-index",
};

/** The exemplars with every translatable field in the locale's language. Company names,
 *  tickers, numbers, sources and dates stay as they are. Runs on the server; the client
 *  components receive only the result, so each page ships one language. */
export function localizedExemplars(locale: Locale): Exemplar[] {
  const t = DI_COPY[locale];
  return EXEMPLARS.map((e) => {
    const x = t.exemplars[e.company];
    const out: Exemplar = {
      ...e,
      industry: t.industries[e.industry],
      story: x.story,
      changed: x.changed,
      date: x.date,
      note: "note" in e ? x.note : undefined,
      unplotted: "unplotted" in e ? x.unplotted : undefined,
      markets: "markets" in e
        ? e.markets.map((m) => ({ ...m, responseWhy: t.markets[m.ticker].responseWhy, caveat: "caveat" in m ? t.markets[m.ticker].caveat : undefined }))
        : undefined,
    };
    return out;
  });
}

/** Build-time guard: every locale must translate each opportunity's evidence one-for-one. */
for (const [loc, t] of Object.entries(DI_COPY)) {
  for (const o of OPPORTUNITIES) {
    if (t.opportunities.items[o.n].evidence.length !== o.evidence.length) {
      throw new Error(`di-copy/${loc}: opportunity ${o.n} has ${t.opportunities.items[o.n].evidence.length} evidence lines, data has ${o.evidence.length}`);
    }
  }
}
