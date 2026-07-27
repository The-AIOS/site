# CLAUDE.md — the-aios.com

Public marketing site for **The-AIOS** framework. Next.js 16 · TypeScript · Tailwind v4 · React 19 · **static export**.

---

## Build & run

```bash
npm run dev        # localhost:3000, HMR
npm run build      # static export → out/
npm run typecheck  # tsc --noEmit — the real gate (see below)
```

There is **no ESLint config** in this repo — `npm run lint` is inherited from the Next template and does nothing useful. `npm run typecheck` is the gate that matters.

> **Check available memory before compiling.** Turbopack spikes several GB and allocates outside the V8 heap, so `NODE_OPTIONS=--max-old-space-size` does not cap it. On a memory-constrained machine, check swap headroom first (`sysctl vm.swapusage` on macOS) — compiling with little swap free can page-thrash the machine into a freeze. Compile one route at a time; don't warm several locales in parallel, and don't stack builds.

## Deploy

`git push origin main` → Vercel builds and deploys. This repo is in a GitHub **org** but is **public**, which is what lets a personal Vercel account git-integrate it.

**Omit `Co-Authored-By` trailers on commits here.** Vercel Hobby gates push-to-deploy on commit identity *including co-authors*, and a bot/no-reply co-author fails the check.

A failed Vercel build leaves the live site standing, so a broken push is recoverable — but never publish something you have not verified renders.

---

## Architecture

### Trilingual content

All reader-facing prose lives in **`src/content.ts`** as three sibling objects — `en`, `es` (LATAM-neutral), `pt` (Brazilian) — exported as `CONTENT[locale]`. The `Content` type enforces structural parity: **a missing key in any locale fails the build.** That IS the parity audit; there is no separate script.

Headlines are `[before, accentWord, after]` triples (type `H`) so the single coral accent word survives translation.

**Stays English in every locale** (by design): the brand name, file names (`CLAUDE.md`), slash commands (`/aios:today`), technical terms (MCP, agent, Claude Code), and "vault" — note ES/PT use *"vault"* rather than a translation; `src/content.ts` is the truth on that.

**Spanish:** `tú` + `ustedes`, never `vos`/`vosotros`. **Portuguese:** `você`, never `tu`; post-1990 orthography.

### Routing — three root layouts, one per locale

`src/app/` has **no root layout**. Instead there are three route groups, each with its own:

```
src/app/
  (en)/layout.tsx   → RootShell lang="en"     · / · /standards · /disruption-index · not-found
  (es)/layout.tsx   → RootShell lang="es"     · /es
  (pt)/layout.tsx   → RootShell lang="pt-BR"  · /pt
  global-not-found.tsx   → the app-wide 404 (produces out/404.html)
  siteMetadata.ts        → shared metadata defaults, incl. metadataBase
  globals.css · icon.svg
```

**Why:** `<html lang>` is server-rendered and only a root layout can render it. The site used to hardcode `lang="en"` and patch it client-side per locale, which React flagged as a hydration mismatch and which served the wrong `lang` to anything that does not run JS. Route groups create **no** path segments, so the URLs are unchanged.

Consequences to respect:
- The shared `<html>`/`<head>`/`<body>` lives in **`src/components/RootShell.tsx`**. Put anything document-wide there, not in the group layouts — those stay three lines each.
- `lang` values come from `LOCALE_HTML_LANG` in `src/messages/types.ts`. Single source of truth.
- Multiple root layouts break a plain `not-found.tsx`, which is why **`global-not-found.tsx`** exists behind `experimental.globalNotFound` in `next.config.ts`. **Those two move together** — if that flag graduates or is renamed on a Next upgrade, update both. Regression check: the 404 must contain the site's own copy and carry `<html lang="en">`, not Next's unstyled default shell.
- Never reintroduce `src/app/layout.tsx`. It would conflict with the groups.

### Graphics

`src/components/deckGraphics.tsx` holds every diagram as **hand-authored inline SVG** — no image files. Every colour is a `var(--color-*)`, so graphics re-theme in light/dark for free. Motion uses `anim-*` classes that fire when the wrapping `<Reveal>` scrolls into view (see `Reveal.tsx` + `globals.css`); all of it is disabled under `prefers-reduced-motion`.

**One accent, always.** Coral `#ff5d4d` is the only accent colour; status is conveyed by weight and position, never by a second hue. No rainbow palettes.

---

## Conventions

- **Measure, don't eyeball.** Two traps that have both bitten here: `document.documentElement.scrollWidth` reads **zero overflow** on a genuinely clipped layout, because `html` is `overflow-x: clip` and sections are `overflow-x: hidden` — compare per-element `getBoundingClientRect().right` against the container instead. And a production build **cannot** reproduce a React hydration *attribute* mismatch, because those warnings are stripped from prod builds — compare the served HTML against the post-hydration DOM.
- **Narrow viewports:** headless Chrome clamps `--window-size` to ~500px, so a 390px screenshot is a left-crop of a 500px layout and shows overflow that is not there. Use CDP `Emulation.setDeviceMetricsOverride`.
- `minmax(400px, 1fr)` keeps a 400px track even in a narrower container. Use `minmax(min(400px, 100%), 1fr)`.
- `trailingSlash: false` means the export writes `out/es.html`, not `out/es/index.html`. Serving `out/` locally needs Vercel's clean-URL fallback reproduced (`path` → `path.html` → `path/index.html`) or every non-root route 404s.
- Apostrophes in JSX need `&apos;`/`&rsquo;`; `→`, `·`, `›` are fine as literals.
