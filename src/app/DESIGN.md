---
version: alpha
name: The AIOS
description: Coral on black, Inter throughout, one accent spent sparingly. Dark-first on the product, light-first on social and print. Every value mirrors src/app/globals.css, which stays the source of truth.
colors:
  primary: "#ff5d4d"
  on-primary: "#ffffff"
  canvas: "#0a0a0a"
  surface-1: "#111111"
  surface-2: "#181818"
  surface-3: "#1f1f1f"
  hairline: "#262626"
  ink: "#fafafa"
  ink-muted: "#c4c4c4"
  ink-subtle: "#707070"
  accent: "#ff5d4d"
  accent-glow: "rgba(255, 93, 77, 0.18)"
  accent-soft: "#ffb3a8"
  header-bg: "rgba(10, 10, 10, 0.85)"
  glow: "rgba(255, 93, 77, 0.08)"
  canvas-light: "#f7f7f5"
  surface-1-light: "#ffffff"
  surface-2-light: "#f1f1ee"
  surface-3-light: "#e9e9e5"
  hairline-light: "#e3e3de"
  ink-light: "#0c0c0d"
  ink-muted-light: "#4c4c54"
  ink-subtle-light: "#86868d"
  accent-light: "#ff5d4d"
  accent-glow-light: "rgba(255, 93, 77, 0.12)"
  accent-soft-light: "#d6402c"
  header-bg-light: "rgba(255, 255, 255, 0.82)"
  glow-light: "rgba(255, 93, 77, 0.10)"
typography:
  display-xl:
    fontFamily: Inter
    fontSize: 3.5rem
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: -0.028em
    fontFeature: '"cv11", "ss01", "ss03"'
  display-lg:
    fontFamily: Inter
    fontSize: 2.5rem
    fontWeight: 700
    lineHeight: 1.12
    letterSpacing: -0.022em
    fontFeature: '"cv11", "ss01", "ss03"'
  display-md:
    fontFamily: Inter
    fontSize: 1.625rem
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: -0.012em
    fontFeature: '"cv11", "ss01", "ss03"'
  stat:
    fontFamily: Inter
    fontSize: 3.75rem
    fontWeight: 800
    lineHeight: 1
    letterSpacing: -0.04em
  lede:
    fontFamily: Inter
    fontSize: 1.25rem
    fontWeight: 400
    lineHeight: 1.55
  body-lg:
    fontFamily: Inter
    fontSize: 1.0625rem
    fontWeight: 400
    lineHeight: 1.65
    fontFeature: '"cv11", "ss01", "ss03"'
  body-md:
    fontFamily: Inter
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.6
    fontFeature: '"cv11", "ss01", "ss03"'
  card-title:
    fontFamily: Inter
    fontSize: 1.0625rem
    fontWeight: 600
    letterSpacing: -0.01em
  card-body:
    fontFamily: Inter
    fontSize: 0.9375rem
    fontWeight: 400
    lineHeight: 1.55
  button:
    fontFamily: Inter
    fontSize: 0.875rem
    fontWeight: 600
    letterSpacing: -0.005em
  caption:
    fontFamily: Inter
    fontSize: 0.8125rem
    fontWeight: 400
    letterSpacing: 0.02em
  eyebrow:
    fontFamily: Inter
    fontSize: 0.75rem
    fontWeight: 600
    letterSpacing: 0.14em
  byline:
    fontFamily: Inter
    fontSize: 0.75rem
    fontWeight: 500
    letterSpacing: 0.05em
  ribbon:
    fontFamily: Inter
    fontSize: 0.625rem
    fontWeight: 700
    letterSpacing: 0.07em
  code-block:
    fontFamily: JetBrains Mono
    fontSize: 0.9375rem
    fontWeight: 400
    lineHeight: 1.7
  code-inline:
    fontFamily: JetBrains Mono
    fontSize: 0.8125rem
    fontWeight: 400
  label-mono:
    fontFamily: JetBrains Mono
    fontSize: 0.75rem
    fontWeight: 500
    lineHeight: 1.7
rounded:
  xs: 4px
  sm: 6px
  md: 8px
  lg: 12px
  full: 999px
spacing:
  base: 16px
  xs: 0.375rem
  sm: 0.75rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  card-padding: 1.5rem
  grid-gap-cards: 0.875rem
  grid-gap-content: 2rem
  section: 5rem
  section-tight: 3rem
  section-mobile: 3.5rem
  container: 1100px
  gutter: 1.5rem
  gutter-mobile: 1.25rem
  canvas-grid: 50px
components:
  page:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
  page-light:
    backgroundColor: "{colors.canvas-light}"
    textColor: "{colors.ink-light}"
    typography: "{typography.body-md}"
  header:
    backgroundColor: "{colors.header-bg}"
    textColor: "{colors.ink}"
  header-light:
    backgroundColor: "{colors.header-bg-light}"
    textColor: "{colors.ink-light}"
  hero-glow:
    backgroundColor: "{colors.glow}"
  hero-glow-light:
    backgroundColor: "{colors.glow-light}"
  divider:
    backgroundColor: "{colors.hairline}"
    height: 1px
  divider-light:
    backgroundColor: "{colors.hairline-light}"
    height: 1px
  caption:
    textColor: "{colors.ink-subtle}"
    typography: "{typography.caption}"
  caption-light:
    textColor: "{colors.ink-subtle-light}"
    typography: "{typography.caption}"
  link:
    textColor: "{colors.accent-soft}"
  link-light:
    textColor: "{colors.accent-soft-light}"
  progress-track:
    backgroundColor: "{colors.surface-3}"
    rounded: "{rounded.full}"
    height: 4px
  progress-track-light:
    backgroundColor: "{colors.surface-3-light}"
    rounded: "{rounded.full}"
    height: 4px
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: 0.6875rem 1.25rem
  button-secondary:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: 0.6875rem 1.25rem
  button-secondary-hover:
    textColor: "{colors.accent}"
  nav-cta:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.sm}"
    padding: 0.4375rem 0.875rem
  icon-button:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    size: 36px
  card:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink-muted}"
    rounded: "{rounded.md}"
    padding: 1.5rem
  card-hover:
    backgroundColor: "{colors.surface-2}"
  card-eyebrow:
    textColor: "{colors.accent}"
    typography: "{typography.eyebrow}"
  code-inline:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.accent}"
    typography: "{typography.code-inline}"
    rounded: "{rounded.xs}"
    padding: 0.125rem 0.4375rem
  code-block:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.code-block}"
    rounded: "{rounded.md}"
    padding: 1.25rem 1.5rem
  ribbon-live:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-primary}"
    typography: "{typography.ribbon}"
    rounded: "{rounded.full}"
    padding: 0.1875rem 0.5rem
  ribbon-built:
    backgroundColor: "{colors.accent-glow}"
    textColor: "{colors.accent}"
    typography: "{typography.ribbon}"
    rounded: "{rounded.full}"
    padding: 0.1875rem 0.5rem
  ribbon-in-progress:
    backgroundColor: "rgba(127, 127, 127, 0.12)"
    textColor: "{colors.ink-muted}"
    typography: "{typography.ribbon}"
    rounded: "{rounded.full}"
    padding: 0.1875rem 0.5rem
  card-light:
    backgroundColor: "{colors.surface-1-light}"
    textColor: "{colors.ink-muted-light}"
    rounded: "{rounded.md}"
    padding: 1.5rem
  card-light-hover:
    backgroundColor: "{colors.surface-2-light}"
  ribbon-live-light:
    backgroundColor: "{colors.accent-light}"
    textColor: "{colors.on-primary}"
    typography: "{typography.ribbon}"
    rounded: "{rounded.full}"
    padding: 0.1875rem 0.5rem
  ribbon-built-light:
    backgroundColor: "{colors.accent-glow-light}"
    textColor: "{colors.accent-light}"
    typography: "{typography.ribbon}"
    rounded: "{rounded.full}"
    padding: 0.1875rem 0.5rem
---

# The AIOS — Design

This file describes the AIOS look in the [DESIGN.md format](https://github.com/google-labs-code/design.md), so any person or agent can build something that looks like it belongs here. **`globals.css` next to this file is the source of truth.** Every token above was read from it; token names are the site's own, minus the `--color-` prefix. When the CSS changes, update this file in the same pull request.

## Overview

Coral on black, Inter throughout, one accent spent sparingly. It should read as a product with a point of view, not a template: confident, calm, plain-spoken, never hyped. Hierarchy comes from size, weight and space, so the page stays quiet and the one coral element is where the eye goes.

The product (this site, the App, Glass) is **dark-first**, with a light theme the visitor can choose. Social images, printed pages and documents are **light-first**: the warm near-white canvas with a faint 50px grid.

## Colors

One chromatic accent and two neutral ladders, one per theme.

- **Coral (`accent`, #ff5d4d):** the only colour. It means "there is something here for you": the main action, one live element, the mark, a highlight in a headline. Use it **3 to 5 times per page**. Spending it on decoration is what makes a page look templated. `primary` is the same coral, named for tools that expect a primary colour.
- **Surfaces (`canvas` → `surface-3`, `hairline`):** deep black steps on dark (#0a0a0a → #1f1f1f), warm near-white steps on light (#f7f7f5 → #e9e9e5). Depth comes from stepping up this ladder, never from a new hue.
- **Ink (`ink`, `ink-muted`, `ink-subtle`):** headings and key text, body text, quiet labels.
- **Coral as text on light (`accent-soft-light`, #d6402c):** coral words on a light background use this deeper coral. #ff5d4d stays for fills, the mark and dark backgrounds.

The light theme is a flip of the same names: `html[data-theme="light"]` in the CSS, the `-light` tokens here. Never give a colour its only definition inside one theme.

**There are no success, warning or error colours,** on purpose. A green, amber, red set would break the one-accent rule. Status is shown by shape instead (see Components).

**Contrast, measured (WCAG 2.x).** Ink on canvas is 18:1 in both themes; `ink-muted` is 11:1 on dark and 7.9:1 on light; coral on the dark canvas is 6.5:1. Three pairs fall below AA for small text:

- White on coral (`button-primary`, `nav-cta`, `ribbon-live`): **3.0:1**. It passes for large text only.
- `accent-soft-light` #d6402c on the light canvas: **4.2:1**. On a white card it reaches 4.5:1 and passes.
- `ink-subtle` captions and labels: **4.0:1** on dark, **3.4:1** on light.
- The dashed-coral "built" ribbon on light: coral on its pale glow is **2.7:1**. On dark it is 4.9:1.

Translucent fills (the glows, the ribbon backgrounds) are measured here over the surface they sit on; a linter that reads them without that surface reports lower numbers than a reader sees. Until the CSS changes, keep coral text on light inside white cards, and keep `ink-subtle` for labels that repeat information shown elsewhere.

## Typography

**Inter for everything**: display, body and labels. Hierarchy comes from weight and size, never a second family. **JetBrains Mono** is for code and technical labels only (commands, file names, eyebrows on figures, URLs in footers).

- Base text is 16px at 1.6 line height, antialiased, with Inter's alternates `cv11`, `ss01` and `ss03` on.
- **Letter-spacing tightens as size grows**: −0.012em at `display-md`, −0.022em at `display-lg`, −0.028em at `display-xl`, −0.04em on stat numerals. Large headlines on social images and print go to −0.035em. This relationship is the typographic signature; keep it when adding a step.
- Small labels go the other way: uppercase with wide tracking (`eyebrow` 0.14em, `byline` 0.05em).
- The site's display sizes are fluid. The tokens above give the largest size; the CSS uses `clamp()`: `display-xl` from 1.875rem to 3.5rem, `display-lg` from 1.625rem to 2.5rem, `display-md` from 1.25rem to 1.625rem, `stat` from 2.75rem to 3.75rem.
- Fonts load from Google Fonts with exactly these weights: Inter 400, 500, 600, 700, 800 and JetBrains Mono 400, 500, 600.

## Layout

- **Container:** 1100px wide, 1.5rem side gutter (1.25rem on mobile).
- **Sections:** 5rem of vertical space each (3.5rem under 900px), separated by a 1px hairline.
- **Grid gaps:** 0.875rem between cards, 2–3rem between content columns, 5rem between section columns on desktop.
- **Breakpoints:** 900px is the main one (grids collapse, the nav becomes a menu); 640px and 560px turn dense grids into one column; decorative layers hide below 680–700px rather than crowd the content.
- **Print and social:** the light canvas carries a faint 50px hairline grid, and a 2px coral rule closes the page above the footer.

## Elevation & Depth

The product is dark-first, so depth is **surface contrast plus hairline borders**, not drop shadows. A card sits one step up the surface ladder; hover moves it one more step and turns its border coral. The only real shadows are the small floating speech bubbles in the hero. A soft radial coral glow (`glow`) may sit behind a hero, once per page.

**Motion:** 0.15–0.18s ease for hover and focus; 0.6–0.7s `cubic-bezier(0.2, 0.7, 0.2, 1)` for fade-up on scroll, with a 0.08s stagger across card grids. **Every animation has a `prefers-reduced-motion` off switch**, including ambient SVG.

## Shapes

- **Corners:** 4px for inline code, 6px for buttons, 8px for cards, code blocks and terminals, 10–12px for large panels, fully round (999px) for pills and status ribbons. Printed figures use 14px on cards at their larger scale.
- **The mark:** a rounded square tile with a coral corner block in its top-right. On dark it is a black tile with a coral border; on light, a white tile with a coral border. Its geometry is fixed (see `icon.svg`). On the site it crossfades into an ant head now and then; that is deliberate.
- **Clear space** around the mark equals the coral corner block on every side. **Minimum size:** 16px on screen, 5mm in print; the wordmark (mark plus "The AIOS") at least 96px wide, 25mm in print.

## Components

The site's own classes. Reuse them before inventing new ones.

- **Buttons:** `.btn-primary` is coral with white text and lifts 1px on hover. `.btn-secondary` is transparent with a hairline border that turns coral on hover. `.nav-cta` is the coral header pill. `.icon-btn` is a 36px square.
- **Cards:** `.card` is `surface-1`, a hairline border and 8px corners; on hover the border turns coral and the fill steps to `surface-2`. `.card-eyebrow` is the coral uppercase label at the top.
- **Code:** `.mono` (inline, coral on `surface-2`), `.code-block`, `.code-chip`, and `.terminal`.
- **Editorial:** `.pullquote` (2px coral left rule), `.accent-rule` (a 64×2px coral line), `.hairline`, `.section-label` with a coral mono number, `.stat` (800-weight numerals).
- **Status, without colour:** the `.rm-ribbon` trio and `.tag-pill`.
  - **Filled coral** (`ribbon-live`): it exists and you can have it today.
  - **Dashed coral** (`ribbon-built`): built, not yet yours.
  - **Dashed neutral** (`ribbon-in-progress`): being built in the open. Not coral at all, because there is nothing here for you yet.

## Do's and Don'ts

- Do spend coral 3–5 times per page, on what the reader should act on or notice.
- Do show status with filled, dashed-coral and dashed-neutral shapes.
- Do keep the headline-tracking relationship: bigger type, tighter spacing.
- Do style both themes for anything you add, and give every animation a reduced-motion off switch.
- Don't add a second accent, a gradient palette, or green, amber and red states.
- Don't add a second typeface. JetBrains Mono is for code and technical labels only.
- Don't recolour, stretch, rotate, outline or add effects to the mark, and don't place it on coral or on a busy photo.
- Don't use coral #ff5d4d for small text on a light background; use #d6402c on a white card.
- Don't use drop shadows for depth on the product; step up the surface ladder instead.
