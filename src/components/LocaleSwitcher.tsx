import { LOCALE_LABELS, LOCALE_PATHS, LOCALES, type Locale } from "@/messages";

/* Single icon-button (equivalent to the theme toggle): shows the current locale
   code and cycles EN → ES → PT → EN on click (navigates to that route).

   A plain <a>, NEVER next/link. Each locale is its own root layout, so switching
   is always a full document load — a <Link> gains nothing, but its viewport
   prefetch fetches the target URL, Vercel serves that from cache with no
   `Vary: RSC`, and navigating to the exact prefetched URL crashed Chrome 153's
   renderer ("Aw, Snap!") every time. Measured: only the prefetched target
   crashed; the same navigation from a page without a <Link> never did. */

export function LocaleSwitcher({ current }: { current: Locale }) {
  const idx = LOCALES.indexOf(current);
  const next = LOCALES[(idx + 1) % LOCALES.length];
  return (
    <a
      href={LOCALE_PATHS[next]}
      hrefLang={next}
      className="icon-btn"
      aria-label={`Language: ${LOCALE_LABELS[current].label} — switch to ${LOCALE_LABELS[next].label}`}
      title={`Switch to ${LOCALE_LABELS[next].label}`}
      style={{
        fontFamily: "var(--font-mono)",
        fontSize: "0.72rem",
        fontWeight: 600,
        letterSpacing: "0.03em",
        color: "var(--color-ink)",
        textDecoration: "none",
      }}
    >
      {LOCALE_LABELS[current].code}
    </a>
  );
}
