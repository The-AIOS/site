/* robots.txt — allow everything and point crawlers at the sitemap.
 * Unlisted pages are kept out of search by their own noindex tags, never by a
 * Disallow line here: a Disallow would publish their paths. */

import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://www.the-aios.com/sitemap.xml",
  };
}
