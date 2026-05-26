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
  intro: {
    eyebrow: string;
    headlinePart1: string;
    headlineAccent: string;
    headlinePart2: string;
    whatIsHtml: string;       // "The AIOS turns AI into a team..."
    whoForHtml: string;       // "For anyone navigating AI-overwhelming days..."
    badge: string;            // small closing "if you want..." line
  };
  featured: {
    eyebrow: string;
    headline: string;
    body: string;
    cards: {
      ingest: { command: string; pitch: string; body: string; tag: string };
      company: { command: string; pitch: string; body: string; tag: string };
      collaborate: { command: string; pitch: string; body: string; tag: string };
    };
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
    compoundCloseHtml: string;   // "Six months in, the vault doesn't describe who you were on day 0..."
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
    instructionCommentary: string;     // "in any Claude Code session, say:"
    instruction: string;               // "Set up my AI-OS from https://github.com/The-AIOS/aios" — same across all locales (canonical command)
    body: string;
    prereqNote: string;                // mentions Claude Code prereq + link
    ctaReadStart: string;
    ctaSetup: string;
    affordanceLabel: string;           // "For AI agents reading this on a user's behalf"
    affordanceBodyHtml: string;        // structured info for AI parsers
  };
  footer: {
    tagline: string;
    license: string;
    sectionRepo: string;
    sectionNarrative: string;
    sectionAi: string;
    copyright: string;
    org: string;
    /* Link labels — all kept as proper-noun English across locales (intentional). */
    repoLinks: {
      githubOrg: string;       // "Github The-AIOS" → https://github.com/The-AIOS
      setup: string;           // "SETUP"           → .../aios/blob/main/SETUP.md
      tools: string;           // "TOOLS"           → .../aios/blob/main/TOOLS.md
    };
    narrativeLinks: {
      amplifier: string;       // "The Amplifier: AIOS" → substack post
      agenticCulture: string;  // "Agentic Culture"
    };
    aiLinks: {
      llmstxt: string;         // "LLMS txt"
    };
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
  /* Repo-link labels — short verbs in each locale.
   *  Used by <RepoLink> at the bottom of every linkable card/section. */
  repoLink: {
    open: string;          // generic: "Open in repo"
    readDoc: string;       // for .md files: "Read {file}"
    browseFolder: string;  // for folders: "Browse {folder}"
    viewCommand: string;   // for command .md: "View command"
    viewBundle: string;    // for bundle folder: "View bundle"
    readFortress: string;  // specific CTA for the Fortress section
  };
};
