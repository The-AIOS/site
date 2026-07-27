/* Site-wide metadata defaults, shared by the three locale root layouts.
 *
 * Each locale page overrides title / description / canonical / hreflang /
 * openGraph.locale for itself; what has to be identical across all three root
 * layouts lives here — above all `metadataBase`, which every relative metadata
 * URL on the site resolves against. */

import type { Metadata } from "next";

export const BASE_METADATA: Metadata = {
  title: "The-AIOS — the AI Operating System framework",
  description:
    "Personal context substrate for working with Claude. Make every session start from your actual knowledge instead of from zero. Workflow-first, anti-hype, compounds across sessions.",
  metadataBase: new URL("https://www.the-aios.com"),
  openGraph: {
    title: "The-AIOS",
    description:
      "The AI Operating System framework. Personal context substrate for working with Claude that compounds across sessions.",
    type: "website",
    url: "https://www.the-aios.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "The-AIOS",
    description:
      "The AI Operating System framework. Personal context substrate that compounds across sessions.",
  },
};
