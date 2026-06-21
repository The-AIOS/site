/* The Disruption Index — dataset.
 *
 * Every exemplar below was researched and verified against public reporting in
 * June 2026. Accuracy is the product: no fabricated facts, no invented numbers.
 * Where a figure is a company's own claim, a third-party estimate, or a
 * multi-causal story, the `confidence` field and `note` say so plainly. If you
 * can't trust the data, the urgency it conveys is worthless.
 *
 * To keep it current: edit this file. Nothing else needs to change.
 */

/** How far AI disruption has progressed for an exemplar. The axis of the index. */
export type Speed = "gone" | "reinventing" | "on-the-clock" | "insulated";

export type Confidence = "high" | "medium" | "low";

export interface Exemplar {
  company: string;
  industry: string;
  speed: Speed;
  /** One punchy sentence — the thing a CEO feels. */
  story: string;
  /** The mechanism: why the moat broke, or held. */
  changed: string;
  /** Approximate period of the inflection. Real periods only; ranges when unsure. */
  date: string;
  confidence: Confidence;
  /** Caveat: contested claim, company-reported figure, multi-causal story, etc. */
  note?: string;
}

/** The speed axis, in canonical order, with display metadata. */
export const SPEED_META: Record<
  Speed,
  { label: string; short: string; blurb: string; color: string }
> = {
  gone: {
    label: "Already gone",
    short: "Gone",
    blurb: "The moat collapsed. The business that charged for it is in freefall or dead.",
    color: "#ff5d4d",
  },
  "on-the-clock": {
    label: "On the clock",
    short: "On the clock",
    blurb: "Disruption is visibly underway. The pressure is real and the outcome isn't settled.",
    color: "#ffae47",
  },
  reinventing: {
    label: "Reinventing now",
    short: "Reinventing",
    blurb: "Disrupted — and moving. An incumbent transforming, or an AI-native that redefined the category.",
    color: "#6ea8ff",
  },
  insulated: {
    label: "Insulated for now",
    short: "Insulated",
    blurb: "Protected — for now — by licensure, liability, or regulation. Note how few entries live here.",
    color: "#6fa389",
  },
};

/** Canonical display order for the speed axis (hot → cool). */
export const SPEED_ORDER: Speed[] = [
  "gone",
  "on-the-clock",
  "reinventing",
  "insulated",
];

export const EXEMPLARS: Exemplar[] = [
  // ---------- Education ----------
  {
    company: "Chegg",
    industry: "Education",
    speed: "gone",
    story:
      "A free chatbot wiped out a homework-help business worth ~$14B at its peak — and the CEO had to say so on an earnings call.",
    changed:
      "Chegg's moat was a paywalled library of textbook solutions and on-demand Q&A. ChatGPT answered the same questions for free, instantly, with no subscription — the value Chegg charged for became a commodity overnight.",
    date: "May 2023 onward (stock fell ~48% in a day on May 2, 2023)",
    confidence: "high",
    note: "Often cited as the first public company to formally blame AI for revenue damage. Its own OpenAI-powered 'CheggMate' failed to stem the loss; subscribers kept falling through 2024–2025.",
  },
  {
    company: "Duolingo",
    industry: "Education",
    speed: "reinventing",
    story:
      "The language-learning app went 'AI-first,' generating course content that used to require human contractors.",
    changed:
      "Sentences, translations, and error review that once needed human contractors can now be generated and checked with LLMs, so Duolingo rebuilt content production around AI and cut contractor roles.",
    date: "Late 2023–2024",
    confidence: "high",
    note: "Cut ~10% of its contractor workforce (translators/writers hit hardest) starting late 2023; CEO later issued an 'AI-first' memo. A reinventor that also displaced workers — note the dual lens.",
  },
  {
    company: "Coursera",
    industry: "Education",
    speed: "reinventing",
    story:
      "Instead of being eaten by AI, the course platform turned 'learn AI' into its single biggest growth driver.",
    changed:
      "Demand shifted toward learning how to use AI itself. Coursera leaned in with hundreds of new GenAI courses and an AI coaching layer, making AI a tailwind rather than a threat.",
    date: "2023–2024",
    confidence: "medium",
    note: "Reported ~3M new GenAI enrollments in 2024 with 450+ new GenAI courses from partners. Framing as 'reinventing' is directional — the long-term threat of LLMs as substitute tutors remains unresolved.",
  },

  // ---------- Media & Publishing ----------
  {
    company: "BuzzFeed",
    industry: "Media & Publishing",
    speed: "gone",
    story:
      "The viral-content king bet its future on AI-written articles and instead wrote its own obituary.",
    changed:
      "Commodity listicle/quiz content lost its scarcity once AI could generate it for free. BuzzFeed shut its Pulitzer-winning news division, pivoted to AI content, and kept losing audience and advertisers.",
    date: "2023 (AI pivot Jan 2023; BuzzFeed News closed April 2023)",
    confidence: "high",
    note: "By 2025 the company disclosed 'substantial doubt' about its ability to continue as a going concern. Decline is multi-causal (digital-ad collapse) — AI was the failed turnaround bet, not the sole killer.",
  },

  // ---------- Translation ----------
  {
    company: "DeepL",
    industry: "Translation",
    speed: "reinventing",
    story:
      "An AI-native translation startup out-translated Big Tech and became the localization industry's default tool.",
    changed:
      "DeepL built neural-MT quality that professionals rated above Google Translate, then sold it as a B2B product — capturing the enterprise translation market incumbents and human agencies once held.",
    date: "2023–2024 (raised $300M at a ~$2B valuation, May 2024)",
    confidence: "high",
    note: "Reported ~$185M ARR for 2024, up from ~$141M in 2023.",
  },
  {
    company: "Human translation & localization workforce",
    industry: "Translation",
    speed: "on-the-clock",
    story:
      "Freelance translators watched rates and volume crater as clients switched to AI with light human editing.",
    changed:
      "Generative AI made 'good enough' translation nearly free, so agencies and localization studios cut rates, moved to AI-plus-post-editing workflows, and reduced staff — squeezing professional translators' income.",
    date: "2023–2025",
    confidence: "medium",
    note: "A 2024 UK Society of Authors survey found over a third of translators had lost work to GenAI. Larger figures circulating (e.g. '80% income drop') are anecdotal — treat as directional.",
  },

  // ---------- Stock Photography ----------
  {
    company: "Getty Images",
    industry: "Stock Photography",
    speed: "on-the-clock",
    story:
      "The stock-photo giant is fighting AI image generators in court while racing to ship its own 'commercially safe' tool.",
    changed:
      "Text-to-image models now generate on-demand visuals that substitute for licensed stock photos. Getty sued Stability AI over training data and launched its own licensed generative tool to defend the franchise.",
    date: "Lawsuit filed early 2023; UK ruling Nov 2025",
    confidence: "high",
    note: "Getty alleged unauthorized scraping of ~12M images. In the UK High Court ruling (Nov 2025) it largely lost on copyright and won only a narrow trademark point.",
  },
  {
    company: "Shutterstock",
    industry: "Stock Photography",
    speed: "reinventing",
    story:
      "Rather than just defend against AI, Shutterstock sold its library as training data and built generation into its platform.",
    changed:
      "It turned its image archive into a new revenue stream by licensing it to AI labs for model training, and integrated text-to-image generation for customers, with a fund to compensate contributors.",
    date: "2022–2023 (OpenAI partnership expanded 2023)",
    confidence: "high",
    note: "Later reported its AI/data-licensing business generating roughly $100M+ in a year; exact figures vary by reporting period.",
  },

  // ---------- Software & IT Services ----------
  {
    company: "Cursor (Anysphere)",
    industry: "Software & IT Services",
    speed: "reinventing",
    story:
      "An AI-native code editor went from zero to ~$100M ARR in about two years and redefined what a developer tool is.",
    changed:
      "Instead of autocomplete bolted onto an IDE, Cursor made the LLM the primary interface for writing and editing code — a new category that incumbents had to chase.",
    date: "Inflection ~Jan 2025; scaled further through 2025–2026",
    confidence: "medium",
    note: "ARR and valuation figures come from press reports, not audited filings — treat the exact numbers as approximate. The 'AI-native reinventor of the category' claim is well-supported.",
  },
  {
    company: "Globant",
    industry: "Software & IT Services",
    speed: "on-the-clock",
    story:
      "A flagship Latin American IT-services firm lost roughly two-thirds of its market value as clients questioned whether they still needed billable headcount.",
    changed:
      "The staff-augmentation model prices on hours and headcount; AI coding tools compress the hours. The firm is racing to reprice around AI 'Pods' and subscriptions before the old model erodes.",
    date: "Stock peak ~Feb 2025 to roughly a third of that by Aug 2025; repositioning ongoing",
    confidence: "high",
    note: "Stock decline is verifiable; the AI-pricing pivot is real but unproven. Securities suits also allege broader LatAm demand problems, so AI is a major but not sole driver.",
  },
  {
    company: "Indian IT outsourcing (TCS, Infosys et al.)",
    industry: "Software & IT Services",
    speed: "on-the-clock",
    story:
      "The vast Indian outsourcing engine began shedding tens of thousands of jobs as AI took on the entry-level coding, testing, and support it was built to staff.",
    changed:
      "The model sold scale of cheap labor for routine dev/test/support work; AI now does much of that, so 'more people = more revenue' is breaking and hiring is being structurally cut.",
    date: "2024–2025 (TCS announced ~12,000 cuts in 2025)",
    confidence: "medium",
    note: "Layoff figures are press/analyst-sourced and partly attributed to AI plus macro/efficiency pressure — multi-causal. Treated as a sector exemplar, not one company.",
  },

  // ---------- Design & Creative ----------
  {
    company: "Midjourney",
    industry: "Design & Creative",
    speed: "reinventing",
    story:
      "A tiny self-funded team turned text prompts into pro-grade imagery and built a nine-figure business with no outside investors.",
    changed:
      "Custom commercial imagery used to require a skilled illustrator or photographer and hours of work. Midjourney collapsed that to a prompt and seconds, redefining the bottom of the commercial-art market.",
    date: "Launched July 2022; scaled rapidly 2023–2025",
    confidence: "medium",
    note: "Founding date and 'no VC' are well-established. Revenue figures are third-party estimates, not disclosed financials — treat as approximate.",
  },
  {
    company: "Adobe (Firefly / Creative Cloud)",
    industry: "Design & Creative",
    speed: "on-the-clock",
    story:
      "The category owner shipped its own generative AI fast, yet still saw its stock cut sharply as the market doubted AI would protect its subscription moat.",
    changed:
      "Adobe's moat was a near-monopoly on professional creative tooling. It embedded Firefly across Photoshop and Illustrator to defend it, but commoditized generation and AI-native rivals (Figma, Canva) put premium pricing in question.",
    date: "Firefly launched Mar 2023; stock peaked ~Mar 2025 and fell ~40%+ into 2026",
    confidence: "medium",
    note: "Firefly adoption and launch date are solid. The stock decline is verifiable; attributing it specifically to AI fear is the consensus narrative but not the only factor. Defending strongly — 'on the clock,' not 'gone.'",
  },

  // ---------- Customer Support ----------
  {
    company: "Klarna AI Assistant (with OpenAI)",
    industry: "Customer Support",
    speed: "on-the-clock",
    story:
      "Klarna said one AI assistant did the work of 700 agents in its first month — then admitted it had cut human support too far and started rehiring.",
    changed:
      "Tier-1 contact-center work (refunds, order status, cancellations) is largely scripted and automatable; the AI handled ~two-thirds of chats faster than humans, but quality limits on edge cases forced a rebalance toward premium human support.",
    date: "Launched Feb 2024; CEO acknowledged over-cutting ~May 2025",
    confidence: "high",
    note: "The '700 agents' / '$40M' figures are Klarna's own marketing claims (the $40M was largely avoided hiring, not pure layoffs). The 2025 walk-back is the credible part — this is NOT a clean 'AI replaced everyone' case.",
  },
  {
    company: "Sierra",
    industry: "Customer Support",
    speed: "reinventing",
    story:
      "Two ex-Big-Tech execs built an AI-agent company for customer service that reached ~$100M ARR in under two years and a multi-billion valuation.",
    changed:
      "AI agents now resolve customer issues end-to-end (refunds, account actions), so enterprises buy outcomes instead of seats of human-staffed contact centers — a new AI-native category challenging the old CX/BPO stack.",
    date: "Founded Feb 2024; ~$100M ARR reported ~Nov 2025",
    confidence: "medium",
    note: "ARR and valuation are press-reported, not audited — approximate. Decagon is a comparable AI-native reinventor in the same space.",
  },

  // ---------- Legal ----------
  {
    company: "Harvey AI",
    industry: "Legal",
    speed: "reinventing",
    story:
      "A two-year-old startup became the default AI layer for elite law firms before incumbents could ship a credible competitor.",
    changed:
      "GPT-class models plus a forward-deployed, ex-lawyer change-management model let Harvey embed legal research, drafting, and review into BigLaw workflows; roughly half of the Am Law 100 are customers and the category formed around it.",
    date: "2023 launch; inflection 2025–early 2026",
    confidence: "high",
    note: "Valuation and ARR figures are company-reported and rising fast; treat point figures as as-of-date snapshots.",
  },
  {
    company: "Thomson Reuters (CoCounsel / Casetext)",
    industry: "Legal",
    speed: "reinventing",
    story:
      "The legal-research incumbent bought its way into the AI era for $650M rather than be disrupted by a GPT-4 startup.",
    changed:
      "Casetext's CoCounsel — a GPT-4-powered assistant for research, document review, and deposition prep — proved generative AI could compress hours of associate work to minutes. Thomson Reuters acquired it to defend its Westlaw franchise.",
    date: "Acquisition announced June 2023",
    confidence: "high",
  },
  {
    company: "Law-firm junior associates & paralegals",
    industry: "Legal",
    speed: "insulated",
    story:
      "AI ate the grunt work, but licensure and liability kept the profession's core billing intact — for now.",
    changed:
      "Document review, first-draft contracts, and research are increasingly automated, yet unauthorized-practice rules, malpractice liability, and ABA Formal Opinion 512 (2024) keep a licensed human in the loop. The visible shift is firms hiring fewer juniors, not mass replacement.",
    date: "2024–2025 (ABA Op. 512 issued 2024)",
    confidence: "medium",
    note: "'Insulated' applies to the licensed-judgment layer; the entry-level training pipeline is genuinely under pressure — insulated-but-eroding.",
  },

  // ---------- Finance ----------
  {
    company: "JPMorgan COiN (Contract Intelligence)",
    industry: "Finance",
    speed: "reinventing",
    story:
      "A bank's internal tool did in seconds the loan-agreement review that consumed 360,000 lawyer/loan-officer hours a year.",
    changed:
      "Machine learning extracted ~150 attributes from 12,000 commercial credit agreements in seconds and cut interpretation errors sharply — showing core document-heavy finance work could be automated in-house years before generative AI.",
    date: "Deployed mid-2016; widely reported Feb 2017",
    confidence: "high",
    note: "An early, pre-LLM exemplar. The 360,000-hours figure is JPMorgan's own and often cited.",
  },
  {
    company: "Wall Street sell-side equity research",
    industry: "Finance",
    speed: "on-the-clock",
    story:
      "Analyst pay fell and the ranks thinned as AI, passive investing, and unbundling squeezed the research desk.",
    changed:
      "AI now drafts the models, summaries, and first-pass analysis junior analysts once produced; combined with MiFID II unbundling and the shift to passive, the economic case for large research teams collapsed.",
    date: "Reported Jan 2025; trend building 2023–2025",
    confidence: "high",
    note: "Bloomberg Intelligence projected banks could cut up to ~200,000 jobs over 3–5 years. AI is one of several compounding forces, not the sole cause.",
  },
  {
    company: "Big Four audit & tax (Deloitte, EY, KPMG, PwC)",
    industry: "Finance",
    speed: "on-the-clock",
    story:
      "The firms whose pyramid runs on armies of junior reviewers are racing to automate the very work those juniors do.",
    changed:
      "Agentic audit/tax platforms now do first-pass document review, data collection, and tax compliance, threatening the leverage-pyramid economics — but liability, regulation, and audit sign-off keep humans accountable.",
    date: "2024–2025 platform rollouts",
    confidence: "medium",
    note: "Reinvention is active and self-inflicted; net headcount/economic impact isn't yet resolved — hence on-the-clock rather than gone.",
  },
  {
    company: "H&R Block",
    industry: "Finance",
    speed: "on-the-clock",
    story:
      "Free and cheap AI-assisted self-filing is quietly shaving the addressable market for paid human tax prep, season by season.",
    changed:
      "Self-prepared returns are rising while professionally-prepared returns flatten; AI chatbots in DIY software lower the perceived need to pay a preparer, eroding the core — though those chatbots have themselves been faulted for inaccurate advice.",
    date: "2023–2025",
    confidence: "medium",
    note: "AI accelerates a long-running DIY shift rather than being the sole driver.",
  },

  // ---------- Recruiting ----------
  {
    company: "HeyMilo",
    industry: "Recruiting",
    speed: "reinventing",
    story:
      "An AI voice agent now sources, screens, and interviews thousands of candidates a day — work that used to need a team of recruiters.",
    changed:
      "Conversational AI agents conduct adaptive voice/video/phone/SMS interviews in 20+ languages, 24/7, reading job specs from the ATS and scoring candidates — redefining high-volume screening.",
    date: "$2.2M seed announced March 2025",
    confidence: "medium",
    note: "Early-stage; throughput and CSAT figures are company/customer-reported, not independently audited.",
  },
  {
    company: "LinkedIn Hiring Assistant",
    industry: "Recruiting",
    speed: "on-the-clock",
    story:
      "The platform recruiters live in shipped an AI agent that automates the sourcing, ranking, and outreach that defined the recruiter job.",
    changed:
      "Hiring Assistant writes job descriptions, identifies and ranks candidates, runs InMail Q&A, and pre-vets applicants — LinkedIn estimates it cuts recruiter admin time by ~70%, putting routine sourcing under pressure from the incumbent itself.",
    date: "Limited launch Oct 2024; global English availability Sept 2025",
    confidence: "high",
    note: "The 70% admin-reduction figure is LinkedIn's own estimate.",
  },

  // ---------- Marketing ----------
  {
    company: "Jasper AI",
    industry: "Marketing",
    speed: "on-the-clock",
    story:
      "The marketing-copy darling raised $125M at a $1.5B valuation, then watched a free ChatGPT commoditize its core product almost overnight.",
    changed:
      "Jasper was a UX wrapper on GPT-3; once OpenAI shipped ChatGPT (free) and the API directly, the value-add collapsed and Jasper had to pivot from copy generation to enterprise marketing workflows and brand controls.",
    date: "Nov 2022 (ChatGPT launch) → mid/late 2023 (layoffs + ~20% internal valuation cut)",
    confidence: "high",
    note: "Survived by repositioning toward enterprise teams; not dead, but the original moat is gone.",
  },
  {
    company: "AI/SEO content farms (Google's Helpful Content Update)",
    industry: "Marketing",
    speed: "gone",
    story:
      "Sites that scaled thin AI content to farm Google traffic were wiped out when Google's algorithm specifically targeted unhelpful, search-first content.",
    changed:
      "AI made mass content production nearly free, flooding search. Google responded with the Helpful Content Update (2022–2023, folded into core ranking in Mar 2024), and many AI-heavy sites lost 90%+ of organic traffic.",
    date: "Dec 2022 → Mar 2024",
    confidence: "high",
    note: "The same AI that lowered content cost triggered the platform response that destroyed the arbitrage. Kept general rather than naming individual victim sites.",
  },

  // ---------- Logistics & Freight ----------
  {
    company: "Convoy",
    industry: "Logistics & Freight",
    speed: "gone",
    story:
      "The best-funded digital freight broker automated ~90% of brokerage tasks, then shut down — proving automation alone didn't beat the economics.",
    changed:
      "Convoy's automation cut the cost of matching loads and carriers, but a freight-market downturn plus heavy cash burn killed it; Flexport bought the remnants.",
    date: "Shut down Oct 2023",
    confidence: "high",
    note: "Primary cause was the freight recession and burn rate, NOT AI displacement. Included as the cautionary 'automation isn't a moat' case rather than pure AI disruption.",
  },
  {
    company: "Uber Freight (Insights AI / agent network)",
    industry: "Logistics & Freight",
    speed: "on-the-clock",
    story:
      "Freight brokerage's human-relationship middle is being squeezed as incumbents deploy fleets of AI agents to price lanes, vet carriers, and book loads.",
    changed:
      "Uber Freight launched an LLM-backed network of 30+ AI agents that handle pricing, carrier reliability scoring, and booking — the routine cognitive work that justified traditional brokers' margins.",
    date: "2024–2025 (agent rollouts)",
    confidence: "medium",
    note: "Disruption is visibly underway but unresolved; Uber Freight itself remained unprofitable, so the economics aren't settled.",
  },

  // ---------- Transcription ----------
  {
    company: "Rev (Rev.com / Reverb)",
    industry: "Transcription",
    speed: "reinventing",
    story:
      "A human-transcription marketplace turned the AI that threatened it into its own weapon — releasing an open-weight model that beats OpenAI's Whisper.",
    changed:
      "Rev used the data exhaust of its human transcribers — 200,000+ hours of human-transcribed speech — to train Reverb, an open-weight model with materially lower word error rate than Whisper large-v3. The human workforce became the training-data moat.",
    date: "Reverb open-weight release Oct 2024",
    confidence: "high",
    note: "Reinvention came at the cost of its human transcribers (fewer jobs, lower pay) even as the company moved up-market.",
  },
  {
    company: "Otter.ai",
    industry: "Transcription",
    speed: "reinventing",
    story:
      "An AI-native entrant redefined transcription from a service you ordered into ambient meeting intelligence baked into every call.",
    changed:
      "Instead of per-minute transcription, Otter embedded directly in Zoom/Meet/Teams as an always-on notetaker, then layered in chat and agents — redefining the category around real-time meeting intelligence.",
    date: "2023 → 2025 (~$100M ARR, 25M+ users reported)",
    confidence: "high",
    note: "A category-redefining new entrant, not an incumbent's turnaround.",
  },

  // ---------- Sales ----------
  {
    company: "11x (AI SDR — 'Alice' / 'Mike')",
    industry: "Sales",
    speed: "on-the-clock",
    story:
      "The poster child for 'AI replaces sales-development reps' got hit by an investigation alleging fake logos, inflated ARR, and heavy churn.",
    changed:
      "11x sold autonomous AI SDRs to automate prospecting and outreach and raised from top VCs, but a Mar 2025 investigation alleged it listed non-customers and counted trials as annual revenue — undercutting the 'AI fully replaces the SDR' narrative.",
    date: "Mar 2025 (investigation published)",
    confidence: "medium",
    note: "Claims are CONTESTED; the CEO disputed the report and investors backed the company. Included to show the AI-SDR category is real but full SDR replacement remains unproven — do not state the allegations as established fact.",
  },
];
