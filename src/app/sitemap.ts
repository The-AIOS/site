/* sitemap.xml — the public, indexable pages only.
 *
 * Unlisted pages (/climb, /install and their locales, /co-create,
 * /avatar-seeds) carry noindex and stay out of here on purpose: listing them
 * would reveal them. URLs use the www host, which is the canonical one (the
 * apex 308-redirects to it), so every entry matches its page's canonical tag. */

import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const BASE = "https://www.the-aios.com";

const LOCALIZED = ["", "/standards", "/disruption-index"];
const PREFIXES = ["", "/es", "/pt"];
const EN_ONLY = ["/privacy", "/terms"];

export default function sitemap(): MetadataRoute.Sitemap {
  const localized = LOCALIZED.flatMap((path) =>
    // The English home is "/" (matching its canonical); every other URL has no trailing slash.
    PREFIXES.map((prefix) => ({ url: `${BASE}${prefix}${path || (prefix ? "" : "/")}` })),
  );
  const enOnly = EN_ONLY.map((path) => ({ url: `${BASE}${path}` }));
  return [...localized, ...enOnly];
}
