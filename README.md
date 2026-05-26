# the-aios/site

Public marketing + docs site for **The-AIOS** — the AI Operating System framework. Source for [the-aios.com](https://the-aios.com).

## Stack

- **Next.js 16** (App Router, static export)
- **TypeScript 5.7**
- **Tailwind v4** (CSS-only `@theme` block, no JS config)
- **React 19**

Static-generation-first. No database, no auth, no server runtime — designed for fast-to-edge deployment on Vercel, Cloudflare Pages, Netlify, or any static host.

## Design

**Calm Editorial** — single chromatic accent (`#b8946f` warm bronze) used sparingly over a deep-black canvas. Serif display (Playfair) + serif body (Source Serif Pro) + sans labels (Inter). Hairline rules + accent rules for structure. Distinct from Sovra blue and ChuyCepeda Bricolage palettes — this is the framework brand.

Reference: lifted recipe shape from `vault/02 - assets/refs/calm-editorial-deck-reference.html` (an EO Boston keynote deck), with bronze accent + warm ink tuned specifically for "AI Operating System framework" tone.

## Development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export to ./out
npm run typecheck
```

## Structure

```
src/
├── app/
│   ├── globals.css      # design tokens + typography primitives
│   ├── layout.tsx       # root layout, font preload, AI affordance HTML comment
│   ├── page.tsx         # homepage — Hero · Thesis · Capabilities · Architecture · Loop · Bundles · Get Started · AI affordance · Footer
│   └── not-found.tsx
└── components/
    └── diagrams.tsx     # hand-authored SVG diagrams (3-layer, observed-loop, fortress)

public/
└── llms.txt             # structured AI-readable framework info (llmstxt.org convention)
```

## The `/llms.txt` affordance

This site is designed to be **AI-readable** — when a Claude session does `WebFetch(the-aios.com)` on a user's behalf, the response embeds enough structured guidance for Claude to auto-configure the operator's vault without asking. Three layers:

1. **`/llms.txt`** at site root — structured markdown following the [llmstxt.org](https://llmstxt.org/) convention. Names the canonical repo URL, install command sequence, key concepts, file structure.
2. **Inline AI-affordance block** — visible on the homepage (`<AiAffordance />`). Plain prose explaining the setup sequence for AI agents.
3. **HTML source comment** — at the top of `<body>` in `layout.tsx`, signposting `/llms.txt` for any agent that scrapes raw HTML.

When you edit content, keep these three layers consistent — they are load-bearing infrastructure for the framework's discoverability.

## Deployment

Not yet deployed. Build target (Vercel / Cloudflare Pages / Netlify) decided by operator. The static export at `./out` is portable across any static host. DNS for [the-aios.com](https://the-aios.com) wired separately at GoDaddy once deploy target is selected.

## License

The site code: MIT (matches The-AIOS organization defaults).
The framework it documents: GPL-2.0-or-later (see [github.com/The-AIOS/aios](https://github.com/The-AIOS/aios)).
