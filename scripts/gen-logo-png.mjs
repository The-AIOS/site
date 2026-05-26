#!/usr/bin/env node
/* Render the SVG logo (src/app/icon.svg) to PNG at multiple sizes,
   for use as GitHub org avatar, social icons, etc.
   Outputs to public/ so they're served at https://the-aios.com/<file>.
   Uses sharp (already a Next dep via next/image). */

import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import sharp from "sharp";

const SRC = "src/app/icon.svg";
const OUT_DIR = "public";

// GitHub org avatar recommended is 500×500; we ship 256/512/1024 PNGs +
// 512 with an extra outer-padding variant for socials that crop.
const sizes = [
  { name: "logo-256.png", size: 256 },
  { name: "logo-512.png", size: 512 },
  { name: "logo-1024.png", size: 1024 },
];

const svg = readFileSync(SRC);

for (const { name, size } of sizes) {
  const out = join(OUT_DIR, name);
  mkdirSync(dirname(out), { recursive: true });
  await sharp(svg, { density: 600 })
    .resize(size, size, { fit: "contain", background: { r: 10, g: 10, b: 10, alpha: 1 } })
    .png({ compressionLevel: 9 })
    .toFile(out);
  console.log(`✓ ${out} (${size}×${size})`);
}

console.log("done.");
