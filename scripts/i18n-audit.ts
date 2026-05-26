#!/usr/bin/env node
/* i18n audit — runs `tsc` for the structural check (every locale must satisfy
   the Messages type), then walks each locale tree for empty-string + obvious
   untranslated-English checks. Run with: `npm run i18n:audit`. */

import en from "../src/messages/en";
import es from "../src/messages/es";
import pt from "../src/messages/pt";
import { LOCALES } from "../src/messages/types";

type AnyObj = Record<string, unknown>;

function walk(obj: unknown, path: string[] = []): { path: string; value: string }[] {
  const out: { path: string; value: string }[] = [];
  if (typeof obj === "string") {
    out.push({ path: path.join("."), value: obj });
  } else if (obj && typeof obj === "object") {
    for (const [k, v] of Object.entries(obj as AnyObj)) {
      out.push(...walk(v, [...path, k]));
    }
  }
  return out;
}

const flatEn = walk(en);
const flatEs = walk(es);
const flatPt = walk(pt);

const enKeys = new Set(flatEn.map((x) => x.path));
const esKeys = new Set(flatEs.map((x) => x.path));
const ptKeys = new Set(flatPt.map((x) => x.path));

let errors = 0;
let warnings = 0;

function fail(msg: string) {
  console.error(`✗ ${msg}`);
  errors++;
}
function warn(msg: string) {
  console.warn(`⚠ ${msg}`);
  warnings++;
}

console.log(`audit · ${LOCALES.join(", ")}`);
console.log(`· en: ${flatEn.length} string keys`);
console.log(`· es: ${flatEs.length} string keys`);
console.log(`· pt: ${flatPt.length} string keys`);
console.log("");

/* 1. Structural parity — every key in en must exist in es + pt and vice versa. */
console.log("[1/3] structural parity");
for (const k of enKeys) {
  if (!esKeys.has(k)) fail(`es missing key: ${k}`);
  if (!ptKeys.has(k)) fail(`pt missing key: ${k}`);
}
for (const k of esKeys) {
  if (!enKeys.has(k)) fail(`es has extra key not in en: ${k}`);
}
for (const k of ptKeys) {
  if (!enKeys.has(k)) fail(`pt has extra key not in en: ${k}`);
}
if (errors === 0) console.log("  ✓ all keys present in all locales");
console.log("");

/* 2. Empty strings */
console.log("[2/3] non-empty values");
let emptyErrors = 0;
for (const { path, value } of [...flatEn, ...flatEs, ...flatPt]) {
  if (value.trim() === "") {
    fail(`empty string at ${path}`);
    emptyErrors++;
  }
}
if (emptyErrors === 0) console.log("  ✓ no empty strings");
console.log("");

/* 3. Untranslated-English heuristic — for es + pt, flag values identical to en
   *unless* they're proper nouns, code, or short labels expected to be the same. */
console.log("[3/3] untranslated-English heuristic (es + pt vs en)");
const allowedIdentical = new Set([
  // Brand + technical loanwords legitimately kept identical in es + pt
  "nav.github",
  "hero.eyebrowFramework",
  "thesis.attribution",
  "footer.license",
  // numeric counts
  "capabilities.tiles.commands.count",
  "capabilities.tiles.agents.count",
  "capabilities.tiles.skills.count",
  "capabilities.tiles.mcps.count",
  // tags / acronyms
  "thinkingAhead.pillars.identity.tag",
  "thinkingAhead.pillars.credentials.tag",
  // skill noun is a deliberate loanword in es + pt
  "capabilities.tiles.skills.noun",
  "capabilities.tiles.mcps.noun",
  // "Intent" stays untranslated — ties to INTENT.md framework filename (technical term)
  "architecture.cards.intent.eyebrow",
  // "Personal" — same word + meaning in Spanish (es); already translated to "Pessoal" in pt
  "bundles.bundleNames.personal.name",
  // Canonical command — literal text that gets pasted into Claude Code; same across all locales by design
  "getStarted.instruction",
  // Featured commands — slash commands + technical tags don't translate
  "featured.cards.ingest.command",
  "featured.cards.company.command",
  "featured.cards.collaborate.command",
  "featured.cards.ingest.tag",
  "featured.cards.company.tag",
  "featured.cards.collaborate.tag",
  // Brand names
  "footer.org",            // "The AIOS"
  "intro.headlinePart2",   // "The AIOS." (brand)
]);

const enMap = new Map(flatEn.map((x) => [x.path, x.value]));
const esMap = new Map(flatEs.map((x) => [x.path, x.value]));
const ptMap = new Map(flatPt.map((x) => [x.path, x.value]));

for (const [path, enVal] of enMap) {
  // Skip pure-numeric, pure-symbol, or very short strings
  if (enVal.length < 4) continue;
  if (/^[\d\W]+$/.test(enVal)) continue;
  if (allowedIdentical.has(path)) continue;

  const esVal = esMap.get(path) ?? "";
  const ptVal = ptMap.get(path) ?? "";

  if (esVal === enVal) warn(`es value identical to en at ${path}: "${enVal.slice(0, 60)}..."`);
  if (ptVal === enVal) warn(`pt value identical to en at ${path}: "${enVal.slice(0, 60)}..."`);
}
if (warnings === 0) console.log("  ✓ no suspicious identical strings");
console.log("");

/* Summary */
console.log("---");
console.log(`errors:   ${errors}`);
console.log(`warnings: ${warnings}`);
if (errors > 0) {
  console.error("audit FAILED");
  process.exit(1);
} else {
  console.log("audit ✓");
}
