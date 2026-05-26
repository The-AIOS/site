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
npm run dev          # http://localhost:3000
npm run build        # static export to ./out
npm run typecheck
npm run i18n:audit   # structural + empty-string + untranslated-en heuristic check
```

## Internationalization

Three locales ship at launch — English (default at `/`), Spanish LatAm-neutral (`/es`), Brazilian Portuguese (`/pt`). Hand-rolled TypeScript-typed messages — no `next-intl` runtime dependency, no `[locale]` dynamic segment.

### Architecture

```
src/messages/
├── types.ts      # Messages type; LOCALES / DEFAULT_LOCALE / LOCALE_LABELS / LOCALE_PATHS
├── en.ts         # English (canonical content; default locale)
├── es.ts         # Spanish — LatAm neutral: "tú", "ustedes"; never "vos"/"vosotros"
├── pt.ts         # Portuguese — Brazilian: "você"; post-1990 orthography
└── index.ts      # MESSAGES record + getMessages(locale) helper
```

Each locale must export a `Messages` value. TypeScript enforces structural sameness at compile time — **a missing key anywhere = build failure**. That IS the primary audit.

### Adding a new key

1. Add the field to `Messages` in `src/messages/types.ts`.
2. Add a value in `en.ts`, then `es.ts`, then `pt.ts`. TypeScript will error on the locales until each has the new key.
3. Reference the key in `src/components/HomePage.tsx` (or wherever the section lives).
4. `npm run i18n:audit` to confirm clean state.
5. `npm run build` to verify.

### Voice + tone (translations)

- **Spanish (es):** LatAm-neutral register. `tú` for "you" singular; `ustedes` for plural (never `vos`/`vosotros`). Technical loanwords kept where they're term-of-art in LatAm tech: `framework`, `trustless`, `anti-hype`, `workflow`. The English word **vault** → translated to **bóveda** (the right Spanish word for the concept).
- **Portuguese (pt):** Brazilian (`você`, not `tu`). Post-1990 orthographic rules. Loanwords confidently used where natural in BR tech. **Vault** → **cofre**.
- **Both:** match the AIOS register — anti-hype, workflow-first, direct. Not literal English translations. Read aloud — if it sounds like Google Translate, rewrite.

### What stays in English across all locales (intentional)

- Brand name: **The-AIOS** (never translated)
- File names: `CLAUDE.md`, `INTENT.md`, `session-insights.md`, `preferences.md`, etc. (canonical framework terms)
- Slash commands: `/aios:today`, `/aios:close-day`, etc.
- Technical terms: `MCP`, `framework`, `Git`, `Claude Code`, `agent`, `agents/custom/`
- Quote attribution: `— The Agentic Culture` (essay title)

### The `i18n:audit` script

Runs three checks beyond what TS does:
1. **Structural parity** — every key present in every locale (also enforced by TS, but explicit here)
2. **Non-empty values** — no whitespace-only strings
3. **Untranslated-English heuristic** — flags ES + PT values identical to EN, with an allowed-identical list for intentional cases (brand names, numbers, framework filenames)

Run: `npm run i18n:audit`. Exit code 1 on errors; warnings are non-blocking but should be reviewed.

## Structure

```
src/
├── app/
│   ├── globals.css          # design tokens + typography primitives
│   ├── layout.tsx           # root layout, font preload, AI affordance HTML comment
│   ├── page.tsx             # / (English homepage — default)
│   ├── es/page.tsx          # /es (Spanish homepage)
│   ├── pt/page.tsx          # /pt (Portuguese homepage)
│   └── not-found.tsx
├── components/
│   ├── HomePage.tsx         # shared homepage component, accepts (messages, locale)
│   ├── LocaleSwitcher.tsx   # EN · ES · PT chip in the header
│   └── diagrams.tsx         # hand-authored SVG diagrams (3-layer, observed-loop, fortress)
└── messages/                # i18n surface — see § Internationalization
    ├── types.ts
    ├── en.ts
    ├── es.ts
    ├── pt.ts
    └── index.ts

public/
└── llms.txt                 # structured AI-readable framework info (llmstxt.org convention)

scripts/
└── i18n-audit.ts            # structural + empty + untranslated-en audit
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
