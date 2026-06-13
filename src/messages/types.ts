/* Locale machinery for the site.
 *
 * The site rebuild (2026-06) ships EN content inline in the components — the
 * fastest surface for live taste iteration and the "very simple" north star.
 * The route structure (/  ·  /es  ·  /pt), the LocaleSwitcher, and the SEO
 * hreflang wiring all stay live, so ES/PT content can be reintroduced later
 * without touching the routing. When that happens, reintroduce a typed
 * Messages map here and a parity audit under scripts/. Until then, /es and /pt
 * render the EN page (parked, not stale). */

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
