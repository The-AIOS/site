/* The quadrant's maths, shared by the server page (which needs the counts for the
 * localized intro) and the client chart. Pure functions over an exemplar list.
 *   X = revenue change (real disruption: shrinking ← → growing)
 *   Y = share-price change (market fear: punished ↓ ↑ rewarded)
 * Both are measured since ChatGPT's launch (30 Nov 2022). */

import type { Exemplar, MarketPoint } from "@/data/exemplars";
import type { Quadrant } from "@/data/di-copy/types";

export interface Dot {
  key: string;
  exemplar: Exemplar;
  m: MarketPoint;
  rev: number; // fractional change, e.g. -0.51
  price: number;
  quadrant: Quadrant;
}

export function quadrantOf(rev: number, price: number): Quadrant {
  if (rev < 0) return price < 0 ? "gone" : "credit";
  return price < 0 ? "priced" : "reinventing";
}

export function dotsOf(items: readonly Exemplar[]): Dot[] {
  return items.flatMap((e) =>
    (e.markets ?? []).map((m) => {
      const rev = m.revenueNow / m.revenueBase - 1;
      const price = m.priceNow / m.priceBase - 1;
      return { key: m.ticker, exemplar: e, m, rev, price, quadrant: quadrantOf(rev, price) };
    }),
  );
}

export function quadrantCounts(dots: readonly Dot[]): Record<Quadrant, number> {
  const c: Record<Quadrant, number> = { gone: 0, priced: 0, credit: 0, reinventing: 0 };
  for (const d of dots) c[d.quadrant]++;
  return c;
}
