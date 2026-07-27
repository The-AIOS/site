/* App-wide 404 — this is what produces `out/404.html`, the page Vercel serves
 * for any unmatched path.
 *
 * WHY IT EXISTS: a plain `not-found.tsx` is resolved against a single root
 * layout. This site now has three (one per locale route group), so there is no
 * app-root layout left to wrap it, and Next falls back to its own unstyled
 * shell — an unbranded 404 with no `lang`. `global-not-found` is the convention
 * built for exactly that case: it renders the whole document itself. Enabled by
 * `experimental.globalNotFound` in next.config.ts; both move together. */

import type { Metadata } from "next";
import "./globals.css";
import { RootShell } from "@/components/RootShell";
import { NotFoundBody } from "@/components/NotFoundBody";
import { LOCALE_HTML_LANG } from "@/messages";

export const metadata: Metadata = {
  title: "404 — not found · The-AIOS",
  description: "The page you were looking for doesn't exist on the-aios.com.",
};

export default function GlobalNotFound() {
  /* English: an unmatched URL has no locale to read. */
  return (
    <RootShell lang={LOCALE_HTML_LANG.en}>
      <NotFoundBody />
    </RootShell>
  );
}
