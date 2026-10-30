/* The role map behind the hero field ("I'm a [ role ▾ ] — show me my AIOS") and the
 * section-00 tabs.
 *
 * Reader-facing labels and every role's story live in src/content.ts, per locale.
 * What lives HERE is the machine side: the role ids (stable, used in deep links like
 * `#entrepreneur`), the tab order, the fallback, and the keyword list that maps free
 * text to a role. The keywords are deliberately cross-language (EN / ES / PT) in one
 * list — the visitor on /es may type "dentist", the visitor on / may type "abogada" —
 * so they are not locale content and do not belong in content.ts.
 *
 * Matching is plain: normalise (lowercase, strip accents), score each keyword by
 * containment or prefix, take the best. No match → the fallback, so the field never
 * shows "no results". */

export type RoleId =
  | "entrepreneur"
  | "ceo"
  | "exec"
  | "lawyer"
  | "creator"
  | "developer"
  | "academic"
  | "student"
  | "teams";

/** Tab order on the page, and the order ties break in. */
export const ROLE_ORDER: RoleId[] = [
  "entrepreneur",
  "ceo",
  "exec",
  "lawyer",
  "creator",
  "developer",
  "academic",
  "student",
  "teams",
];

/** Nobody sees "no results": an unknown trade is a small business until proven otherwise. */
export const FALLBACK_ROLE: RoleId = "entrepreneur";

/* One flat list per role. Lowercase, no accents — `normalise()` strips them from the
   input too, so "abogado" and "Abogádo" both land. Short tokens (≤3 chars) only match
   whole words, so "dev" does not fire on "devoted". */
export const ROLE_KEYWORDS: Record<RoleId, string[]> = {
  entrepreneur: [
    "entrepreneur", "small business", "business owner", "owner", "shop", "store", "restaurant", "cafe",
    "bakery", "dentist", "clinic", "doctor", "physician", "therapist", "coach", "agency", "freelancer",
    "freelance", "self-employed", "solopreneur", "founder of a small business", "real estate", "realtor",
    "photographer", "designer", "architect", "plumber", "electrician", "chef", "trainer", "accountant",
    "bookkeeper", "consultancy", "studio", "practice", "merchant", "seller", "retail", "ecommerce",
    "emprendedor", "emprendedora", "empresario", "empresaria", "dueno", "duena", "negocio", "pyme",
    "tienda", "restaurante", "cafeteria", "panaderia", "dentista", "clinica", "medico", "medica",
    "doctora", "terapeuta", "gimnasio", "taller", "agencia", "autonomo", "autonoma", "inmobiliaria",
    "fotografo", "fotografa", "disenador", "disenadora", "arquitecto", "arquitecta", "plomero",
    "electricista", "contador", "contadora", "consultorio", "comerciante", "vendedor", "vendedora",
    "empreendedor", "empreendedora", "dono", "dona", "loja", "pequena empresa", "mei", "corretor",
    "corretora", "designer", "arquiteto", "arquiteta", "encanador", "eletricista", "cozinheiro",
    "cozinheira", "contabilista", "escritorio", "comercio", "lojista",
  ],
  ceo: [
    "ceo", "chief executive", "president", "chairman", "chairwoman", "managing director", "general manager",
    "cofounder", "co-founder", "founder", "board", "executive director",
    "presidente", "presidenta", "director general", "directora general", "gerente general", "cofundador",
    "cofundadora", "fundador", "fundadora", "consejo", "presidente ejecutivo",
    "diretor executivo", "diretora executiva", "diretor geral", "diretora geral", "conselho", "presidente",
  ],
  exec: [
    "executive", "manager", "director", "vp", "vice president", "head of", "team lead", "lead", "supervisor",
    "coordinator", "cfo", "coo", "cmo", "chief", "officer", "principal", "partner",
    "ejecutivo", "ejecutiva", "gerente", "directora", "director", "vicepresidente", "vicepresidenta",
    "jefe", "jefa", "lider", "supervisora", "coordinador", "coordinadora", "socio", "socia",
    "executivo", "executiva", "diretor", "diretora", "chefe", "coordenador", "coordenadora", "supervisor",
    "supervisora",
  ],
  lawyer: [
    "lawyer", "attorney", "counsel", "legal", "notary", "paralegal", "consultant", "advisor", "adviser",
    "auditor", "compliance", "solicitor", "barrister", "jurist",
    "abogado", "abogada", "jurista", "notario", "notaria", "consultor", "consultora", "asesor", "asesora",
    "auditora", "cumplimiento", "legal",
    "advogado", "advogada", "assessor", "assessora", "juridico", "juridica", "conformidade",
  ],
  creator: [
    "creator", "writer", "author", "blogger", "youtuber", "podcaster", "journalist", "content", "influencer",
    "newsletter", "substack", "artist", "musician", "filmmaker", "copywriter", "editor", "poet", "novelist",
    "screenwriter", "streamer",
    "creador", "creadora", "escritor", "escritora", "autor", "autora", "periodista", "contenido",
    "artista", "musico", "musica", "cineasta", "redactor", "redactora", "editora", "poeta", "novelista",
    "guionista",
    "criador", "criadora", "jornalista", "conteudo", "redator", "redatora", "roteirista", "escritor",
  ],
  developer: [
    "developer", "dev", "engineer", "programmer", "software", "coder", "hacker", "devops", "sre", "cto",
    "backend", "frontend", "fullstack", "full stack", "data scientist", "machine learning", "ml", "ai engineer",
    "architect of software", "sysadmin", "it",
    "desarrollador", "desarrolladora", "programador", "programadora", "ingeniero", "ingeniera",
    "cientifico de datos", "cientifica de datos", "informatico", "informatica",
    "desenvolvedor", "desenvolvedora", "engenheiro", "engenheira", "cientista de dados", "programador",
  ],
  academic: [
    "academic", "professor", "teacher", "lecturer", "researcher", "scientist", "phd", "faculty", "school",
    "university", "educator", "tutor", "instructor", "principal of a school", "dean", "postdoc",
    "maestro", "maestra", "profesor", "profesora", "docente", "investigador", "investigadora", "academico",
    "academica", "cientifico", "cientifica", "catedratico", "catedratica", "escuela", "universidad",
    "educador", "educadora", "formador", "formadora", "instructor", "instructora", "doctorado",
    "professor", "professora", "pesquisador", "pesquisadora", "cientista", "universidade", "escola",
    "educador", "docente", "doutorado",
  ],
  student: [
    "student", "learner", "undergrad", "graduate", "grad student", "bachelor", "master", "mba", "apprentice",
    "intern", "pupil", "high school", "college",
    "estudiante", "alumno", "alumna", "universitario", "universitaria", "posgrado", "maestria", "becario",
    "becaria", "aprendiz", "preparatoria", "colegio", "licenciatura",
    "estudante", "aluno", "aluna", "universitario", "pos-graduacao", "mestrado", "estagiario", "estagiaria",
    "faculdade", "ensino medio",
  ],
  teams: [
    "team", "teams", "company", "organization", "organisation", "startup", "department", "firm", "group",
    "staff", "operations", "ops", "hr", "people team", "my company", "we", "us", "enterprise", "corporate",
    "equipo", "empresa", "organizacion", "departamento", "firma", "grupo", "nosotros", "mi empresa",
    "recursos humanos", "operaciones", "corporativo", "corporativa",
    "equipe", "time", "companhia", "organizacao", "minha empresa", "nos", "operacoes", "rh", "empresa",
  ],
};

export function normalise(s: string): string {
  return s
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/\s+/g, " ")
    .trim();
}

/** Score one role against normalised input. 0 = no match. */
function score(input: string, keywords: string[]): number {
  let best = 0;
  for (const k of keywords) {
    if (!k) continue;
    if (k.length <= 3) {
      // short tokens: whole-word only, so "it" does not fire inside "writer"
      const re = new RegExp(`(^|[^a-z0-9])${k.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}([^a-z0-9]|$)`);
      if (re.test(input)) best = Math.max(best, k.length + 2);
      continue;
    }
    if (input.includes(k)) best = Math.max(best, k.length + 1);
    else if (input.length >= 3 && k.startsWith(input)) best = Math.max(best, input.length);
    else {
      // the input may be several words; any word that prefixes a keyword counts a little
      for (const w of input.split(" ")) {
        if (w.length >= 4 && k.startsWith(w)) best = Math.max(best, w.length - 1);
      }
    }
  }
  return best;
}

/** Roles that match the text, best first. Empty text → the whole list in tab order. */
export function rankRoles(text: string): RoleId[] {
  const q = normalise(text);
  if (!q) return ROLE_ORDER.slice();
  const scored = ROLE_ORDER.map((id, i) => ({ id, s: score(q, ROLE_KEYWORDS[id]), i }))
    .filter((r) => r.s > 0)
    .sort((a, b) => b.s - a.s || a.i - b.i)
    .map((r) => r.id);
  return scored;
}

/** The one role to open for this text: the best match, or the fallback. Never "no results". */
export function resolveRole(text: string, labels?: Partial<Record<RoleId, string>>): RoleId {
  const q = normalise(text);
  if (!q) return FALLBACK_ROLE;
  // an exact or prefix hit on a localised label wins outright (the visitor picked a chip by typing it)
  if (labels) {
    for (const id of ROLE_ORDER) {
      const l = labels[id];
      if (l && (normalise(l) === q || normalise(l).startsWith(q))) return id;
    }
  }
  const ranked = rankRoles(q);
  return ranked[0] ?? FALLBACK_ROLE;
}

export function isRoleId(s: string): s is RoleId {
  return (ROLE_ORDER as string[]).includes(s);
}

/* Two-letter codes for the orbit in "your team" (section 00, frame 3). The full name sits in
   the node's <title> and aria-label; the code is only the glyph on the circle. Unknown slugs
   fall back to initials. Codes need to be distinct within one role's team, not globally. */
export const AGENT_CODES: Record<string, string> = {
  lawyer: "LW", accountant: "AC", "technical-cofounder": "TC", "lead-generator": "LG", "proposal-writer": "PW",
  "invoice-tracker": "IT", "crm-updater": "CU", "company-analyst": "CA", "meeting-prepper": "MP",
  "decision-journaler": "DJ", "okr-coach": "OK", consultant: "CO", "report-drafter": "RD", "email-drafter": "ED",
  "growth-companion": "GC", "compliance-checker": "CC", "content-writer": "CW", "voice-gate": "VG",
  "kdp-publisher": "KP", "deck-builder": "DB", "content-scheduler": "CS", "brand-monitor": "BM",
  "code-reviewer": "CR", "security-engineer": "SE", "bug-triager": "BT", "code-documenter": "CD",
  "refactor-engineer": "RE", explainer: "EX", "study-buddy": "SB", "journal-prompter": "JP",
  "/company": "CO", "INTENT.md": "IN", "onboarding-aios": "OB", "aios-feedback": "FB",
};

export function agentCode(slug: string): string {
  const known = AGENT_CODES[slug];
  if (known) return known;
  const p = slug.replace(/^\//, "").replace(/\.md$/, "").split(/[-\s]+/).filter(Boolean);
  const two = p.length >= 2 ? p[0].charAt(0) + p[1].charAt(0) : (p[0] ?? "ag").slice(0, 2);
  return two.toUpperCase();
}
