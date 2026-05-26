import Link from "next/link";
import { LOCALE_LABELS, LOCALE_PATHS, LOCALES, type Locale } from "@/messages";

/* Compact code-based switcher (EN · ES · PT) anchored to the right of nav.
   Visual treatment: codes only, separated by · ; active locale uses the accent. */

export function LocaleSwitcher({ current }: { current: Locale }) {
  return (
    <div
      style={{ display: "flex", alignItems: "center", gap: "0.5rem", paddingLeft: "1rem", borderLeft: "1px solid var(--color-hairline)" }}
      aria-label="Language selection"
    >
      {LOCALES.map((loc, i) => {
        const isCurrent = loc === current;
        return (
          <span key={loc} style={{ display: "inline-flex", alignItems: "center" }}>
            <Link
              href={LOCALE_PATHS[loc]}
              hrefLang={loc}
              aria-current={isCurrent ? "true" : undefined}
              title={LOCALE_LABELS[loc].label}
              className="caption"
              style={{
                textDecoration: "none",
                color: isCurrent ? "var(--color-accent)" : "var(--color-ink-subtle)",
                fontWeight: isCurrent ? 700 : 400,
                letterSpacing: "0.08em",
                pointerEvents: isCurrent ? "none" : "auto",
              }}
            >
              {LOCALE_LABELS[loc].code}
            </Link>
            {i < LOCALES.length - 1 && (
              <span style={{ color: "var(--color-ink-subtle)", marginLeft: "0.5rem", marginRight: "0", opacity: 0.5 }}>·</span>
            )}
          </span>
        );
      })}
    </div>
  );
}
