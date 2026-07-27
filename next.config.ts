import type { NextConfig } from "next";

const config: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: false,
  /* Needed because the site has three root layouts (one per locale route
     group), which leaves no app-root layout for a plain not-found.tsx to render
     inside — without this, out/404.html is Next's unstyled default shell.
     Pairs with src/app/global-not-found.tsx; remove both together. */
  experimental: { globalNotFound: true },
};

export default config;
