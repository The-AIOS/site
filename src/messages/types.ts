/* Locale machinery for the site.
 *
 * Reader-facing prose is trilingual and lives in `src/content.ts` (EN / ES-LATAM
 * / PT-BR), keyed by these locales; the `Content` type enforces structural
 * parity across all three at compile time, so a missing string fails the build.
 * That IS the parity audit.
 *
 * Routing: three route groups — `(en)` · `(es)` · `(pt)` — each with its own
 * root layout, so `<html lang>` is server-rendered per locale from
 * LOCALE_HTML_LANG below. Route groups don't create path segments, so the URLs
 * stay `/` · `/es` · `/pt`. */

export type Locale = "en" | "es" | "pt";

export const LOCALES: Locale[] = ["en", "es", "pt"];
export const DEFAULT_LOCALE: Locale = "en";

export const LOCALE_LABELS: Record<Locale, { code: string; label: string }> = {
  en: { code: "EN", label: "English" },
  es: { code: "ES", label: "Español" },
  pt: { code: "PT", label: "Português" },
};

export const LOCALE_PATHS: Record<Locale, string> = {
  en: "/",
  es: "/es",
  pt: "/pt",
};

export const LOCALE_HTML_LANG: Record<Locale, string> = {
  en: "en",
  es: "es",
  pt: "pt-BR",
};
