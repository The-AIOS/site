import type { ReactNode } from "react";

/* Emphasis helpers for the /standards copy, so every locale renders the same styles. */

/** Bold in full ink — the page's main emphasis. */
export const B = ({ children }: { children: ReactNode }) => (
  <strong style={{ color: "var(--color-ink)" }}>{children}</strong>
);
/** Bold that inherits colour (inside already-emphasised lines). */
export const S = ({ children }: { children: ReactNode }) => <strong>{children}</strong>;
/** The coral accent. */
export const A = ({ children }: { children: ReactNode }) => <span className="accent">{children}</span>;
/** Italic. */
export const I = ({ children }: { children: ReactNode }) => <em>{children}</em>;
/** The literal [TBD-verify] marker, styled as code. */
export const TBD = () => (
  <code style={{ fontSize: "0.85em", color: "var(--color-ink-subtle)" }}>[TBD-verify]</code>
);
