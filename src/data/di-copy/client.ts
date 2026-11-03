/* What the two client components receive. Client props must be serializable, so the
 * copy's string functions become templates ("{company}", "{name}"…) here, on the
 * server, by calling each with its placeholder tokens; the components fill them. */

import type { ReactNode } from "react";
import type { DICopy } from "./types";

export type IndexClientCopy = {
  dateLocale: string;
  ui: Omit<DICopy["index"], "movedTitle"> & { movedTitle: string };
  speed: DICopy["speed"];
  signal: DICopy["signal"];
  region: DICopy["region"];
  confidence: DICopy["confidence"];
};

export type QuadrantClientCopy = {
  dateLocale: string;
  eyebrow: string;
  title: ReactNode;
  lede: ReactNode;
  method: ReactNode;
  ui: Omit<DICopy["quadrant"], "eyebrow" | "title" | "lede" | "method" | "showInIndex" | "dotAria" | "detailsAria"> & {
    showInIndex: string;
    dotAria: string;
    detailsAria: string;
  };
};

/** Fill "{key}" placeholders. */
export function fill(template: string, values: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (m, k: string) => (k in values ? String(values[k]) : m));
}

export function indexClientCopy(t: DICopy): IndexClientCopy {
  return {
    dateLocale: t.dateLocale,
    ui: { ...t.index, movedTitle: t.index.movedTitle("{from}") },
    speed: t.speed,
    signal: t.signal,
    region: t.region,
    confidence: t.confidence,
  };
}

export function quadrantClientCopy(t: DICopy, priced: number, total: number): QuadrantClientCopy {
  const { eyebrow, title, lede, method, showInIndex, dotAria, detailsAria, ...rest } = t.quadrant;
  return {
    dateLocale: t.dateLocale,
    eyebrow,
    title,
    lede: lede(priced, total),
    method,
    ui: {
      ...rest,
      showInIndex: showInIndex("{company}"),
      dotAria: dotAria("{name}", "{ticker}", "{rev}", "{price}", "{quadrant}", "{response}"),
      detailsAria: detailsAria("{name}"),
    },
  };
}
