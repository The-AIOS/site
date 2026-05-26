/* Single source of truth for translation shape.
   TypeScript enforces: every locale must export this exact structure.
   A missing key in one locale = build-time error. THAT is the audit. */

export type Locale = "en" | "es" | "pt";

export const LOCALES: Locale[] = ["en", "es", "pt"];
export const DEFAULT_LOCALE: Locale = "en";

export const LOCALE_LABELS: Record<Locale, { code: string; label: string }> = {
  en: { code: "EN", label: "English" },
  es: { code: "ES", label: "Español" },
  pt: { code: "PT", label: "Português" },
};

export const LOCALE_PATHS: Record<Locale, string> = {
  en: "/",
  es: "/es",
  pt: "/pt",
};

export const LOCALE_HTML_LANG: Record<Locale, string> = {
  en: "en",
  es: "es",
  pt: "pt-BR",
};

export type Messages = {
  nav: {
    thesis: string;
    capabilities: string;
    architecture: string;
    agents: string;
    ahead: string;
    getStarted: string;
    github: string;
  };
  hero: {
    eyebrowFramework: string;
    eyebrowSuffix: string;
    headlinePart1: string;
    headlineAccent: string;
    headlinePart2: string;
    lede: string;
    ctaGithub: string;
    ctaGetStarted: string;
  };
  thesis: {
    eyebrow: string;
    headline: string;
    para1: string;
    para2Html: string;
    para3: string;
    pullquote: string;
    attribution: string;
  };
  capabilities: {
    eyebrow: string;
    headline: string;
    body: string;
    tiles: {
      commands: { count: string; noun: string; body: string };
      agents: { count: string; noun: string; body: string };
      skills: { count: string; noun: string; body: string };
      mcps: { count: string; noun: string; body: string };
    };
  };
  architecture: {
    eyebrow: string;
    headline: string;
    body1: string;
    body2Html: string;
    cards: {
      declared: { eyebrow: string; title: string; body: string };
      observed: { eyebrow: string; title: string; body: string };
      intent: { eyebrow: string; title: string; body: string };
    };
  };
  observedLoop: {
    eyebrow: string;
    headline: string;
    body1: string;
    body2Html: string;
  };
  bundles: {
    eyebrow: string;
    headline: string;
    body: string;
    bundleNames: {
      sales: { name: string; body: string };
      strategy: { name: string; body: string };
      financeLegal: { name: string; body: string };
      engineering: { name: string; body: string };
      communication: { name: string; body: string };
      personal: { name: string; body: string };
    };
    fortress: {
      eyebrow: string;
      headline: string;
      body1: string;
      body2: string;
    };
  };
  thinkingAhead: {
    eyebrow: string;
    headline: string;
    para1Html: string;
    para2Html: string;
    para3: string;
    pillars: {
      identity: { label: string; tag: string; question: string; body: string };
      mandates: { label: string; tag: string; question: string; body: string };
      credentials: { label: string; tag: string; question: string; body: string };
    };
    boundaryHtml: string;
  };
  getStarted: {
    eyebrow: string;
    headline: string;
    codeStep1Comment: string;
    codeStep2Comment: string;
    codeStep3Comment: string;
    body: string;
    ctaReadStart: string;
    ctaSetup: string;
  };
  aiAffordance: {
    bodyHtml: string;
  };
  footer: {
    tagline: string;
    license: string;
    sectionRepo: string;
    sectionNarrative: string;
    sectionAi: string;
    copyright: string;
    org: string;
  };
  notFound: {
    eyebrow: string;
    headline: string;
    body: string;
    backCta: string;
  };
  /* Document-level metadata for OpenGraph + Twitter card per-locale */
  meta: {
    title: string;
    description: string;
  };
};
