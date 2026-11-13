/* The Disruption Index — dataset.
 *
 * Every exemplar below was researched and verified against public reporting in
 * June 2026, and re-verified (with additions and removals) in October 2026, then every two weeks
 * (latest: 13 November 2026).
 * Every entry carries its sources and the date it was last verified.
 * Accuracy is the product: no fabricated facts, no invented numbers.
 * Where a figure is a company's own claim, a third-party estimate, or a
 * multi-causal story, the `confidence` field and `note` say so plainly. If you
 * can't trust the data, the urgency it conveys is worthless.
 *
 * To keep it current: edit this file. Nothing else needs to change.
 */

/** How far AI disruption has progressed for an exemplar. The axis of the index. */
export type Speed = "gone" | "reinventing" | "on-the-clock" | "insulated";

export type Confidence = "high" | "medium" | "low";

/** What the speed rests on: lost or won revenue, jobs, or a market repricing that hasn't hit revenue yet. */
export type Signal = "revenue" | "jobs" | "market";

export type Region = "US" | "LATAM" | "Europe" | "Asia" | "Global";

export interface Source {
  label: string;
  url: string;
}

/** How a plotted company has responded. Restructuring = documented cuts, a forced sale, a merger, or bankruptcy since 2022; reinventing = a shipped AI product or pricing model at the core of the business; none = no response documented in our sources. Where both apply, restructuring wins. */
export type Response = "reinventing" | "restructuring" | "none";

/** One listed company's numbers for the quadrant chart. Baseline: 30 Nov 2022, ChatGPT's launch. */
export interface MarketPoint {
  ticker: string;
  name: string;
  exchange: string;
  currency: string;
  /** Total revenue, in millions of the reporting currency. */
  revenueBase: number;
  revenueBasePeriod: string;
  revenueNow: number;
  revenueNowPeriod: string;
  revenueSource: Source;
  /** Split-adjusted closing share price, in the listing currency. */
  priceBase: number;
  priceBaseDate: string;
  priceNow: number;
  priceNowDate: string;
  priceSource: Source;
  response: Response;
  responseWhy: string;
  caveat?: string;
}

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
  /** Where the facts on the card come from. */
  sources: readonly Source[];
  /** When the entry was last checked against its sources (YYYY-MM-DD). */
  verified: string;
  /** The speed this entry had before its last move, if it moved. */
  was?: Speed;
  signal: Signal;
  region: Region;
  /** Listed companies only: the numbers behind the quadrant chart. */
  markets?: readonly MarketPoint[];
  /** Why an entry is not on the quadrant chart. */
  unplotted?: string;
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
export const SPEED_ORDER: readonly Speed[] = [
  "gone",
  "on-the-clock",
  "reinventing",
  "insulated",
];

// `as const satisfies` keeps company, industry and ticker literal, so the ES/PT copy
// (src/data/di-copy/) is keyed by them and a missing translation fails the build.
export const EXEMPLARS = [
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
    note: "Often cited as the first public company to formally blame AI for revenue damage. Its own OpenAI-powered 'CheggMate' failed to stem the loss. It cut ~45% of staff in Oct 2025 citing 'new realities of AI'. In July 2026 it received an NYSE notice for trading below $1. Q3 2026 revenue fell 40% year on year to $46.5M; it has repaid its debt and is repositioning around an employability platform. Its CEO: 'AI hit our business hard.'",
    sources: [
      { label: "Chegg Q3 2026 results, Nov 2026", url: "https://finviz.com/news/414232/chegg-reports-third-quarter-2026-earnings" },
      { label: "NYSE listing notice, Jul 2026", url: "https://lasvegassun.com/news/2026/jul/24/chegg-receives-continued-listing-standard-notice-f/" },
      { label: "45% layoff, Oct 2025 (TechStartups)", url: "https://techstartups.com/2025/10/30/chegg-lays-off-45-of-workforce-blames-new-realities-of-ai-and-plunging-traffic/" },
    ],
    verified: "2026-11-13",
    signal: "revenue",
    region: "US",
    markets: [
      {
        ticker: "CHGG",
        name: "Chegg",
        exchange: "NYSE",
        currency: "USD",
        revenueBase: 766.9,
        revenueBasePeriod: "FY2022",
        revenueNow: 376.91,
        revenueNowPeriod: "FY2025",
        revenueSource: { label: "stockanalysis.com (compiled from annual reports)", url: "https://stockanalysis.com/stocks/chgg/financials/" },
        priceBase: 29.84,
        priceBaseDate: "2022-11-30",
        priceNow: 0.59,
        priceNowDate: "2026-11-12",
        priceSource: { label: "Yahoo Finance daily closes", url: "https://finance.yahoo.com/quote/CHGG/history/" },
        response: "restructuring",
        responseWhy: "Cut ~45% of staff (Oct 2025) after its AI tutor failed to stem losses",
      },
    ],
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
    note: "Cut ~10% of its contractor workforce (translators/writers hit hardest) starting late 2023; CEO later issued an 'AI-first' memo. A reinventor that also displaced workers — note the dual lens. By Q3 2026 users were still growing (DAUs +29%, to 64.9M) and it was rolling its AI Video Call feature out to all top-tier subscribers, while the stock had fallen sharply on fears that general-purpose AI tutors compete directly.",
    sources: [
      { label: "Duolingo Q3 2026 shareholder letter (SEC)", url: "https://www.sec.gov/Archives/edgar/data/0001562088/000162828026069474/q3fy26duolingo9-30x26share.htm" },
      { label: "Motley Fool, Jul 2026", url: "https://www.fool.com/investing/2026/07/24/why-duolingo-stock-plunged-10-this-week/" },
    ],
    verified: "2026-11-13",
    signal: "jobs",
    region: "US",
    markets: [
      {
        ticker: "DUOL",
        name: "Duolingo",
        exchange: "NASDAQ",
        currency: "USD",
        revenueBase: 369.5,
        revenueBasePeriod: "FY2022",
        revenueNow: 1038,
        revenueNowPeriod: "FY2025",
        revenueSource: { label: "stockanalysis.com (compiled from annual reports)", url: "https://stockanalysis.com/stocks/duol/financials/" },
        priceBase: 69.67,
        priceBaseDate: "2022-11-30",
        priceNow: 157.42,
        priceNowDate: "2026-11-12",
        priceSource: { label: "Yahoo Finance daily closes", url: "https://finance.yahoo.com/quote/DUOL/history/" },
        response: "reinventing",
        responseWhy: "Rebuilt content production around AI ('AI-first')",
      },
    ],
  },
  {
    company: "Coursera",
    industry: "Education",
    speed: "on-the-clock",
    story:
      "The course platform turned 'learn AI' into a growth driver — then merged with its biggest rival as like-for-like revenue started to shrink.",
    changed:
      "Demand shifted toward learning how to use AI itself. Coursera leaned in with hundreds of new GenAI courses and an AI coaching layer, making AI a tailwind rather than a threat.",
    date: "2023–2024",
    confidence: "medium",
    note: "Reported ~3M new GenAI enrollments in 2024 with 450+ new GenAI courses from partners. Merged with Udemy (closed May 2026); by Q3 2026 combined revenue was down ~3% like-for-like, with consumer demand softening. Moved from 'reinventing' in Oct 2026: the AI-course tailwind is real, but the consolidation looks like defense as much as reinvention.",
    sources: [
      { label: "Coursera Q2 2026 10-Q (SEC)", url: "https://www.sec.gov/Archives/edgar/data/0001651562/000165156226000063/cour-20260630.htm" },
      { label: "Coursera Q3 2026 shareholder letter (SEC)", url: "https://www.sec.gov/Archives/edgar/data/0001651562/000165156226000068/cour-20260930xshareholde.htm" },
    ],
    verified: "2026-11-13",
    was: "reinventing",
    signal: "revenue",
    region: "US",
    markets: [
      {
        ticker: "COUR",
        name: "Coursera",
        exchange: "NYSE",
        currency: "USD",
        revenueBase: 523.76,
        revenueBasePeriod: "FY2022",
        revenueNow: 757.5,
        revenueNowPeriod: "FY2025",
        revenueSource: { label: "stockanalysis.com (compiled from annual reports)", url: "https://stockanalysis.com/stocks/cour/financials/" },
        priceBase: 13.94,
        priceBaseDate: "2022-11-30",
        priceNow: 3.56,
        priceNowDate: "2026-11-12",
        priceSource: { label: "Yahoo Finance daily closes", url: "https://finance.yahoo.com/quote/COUR/history/" },
        response: "restructuring",
        responseWhy: "Merged with Udemy (closed May 2026)",
        caveat: "FY2025 revenue is Coursera alone; the Udemy merger closed May 2026.",
      },
    ],
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
    note: "Disclosed 'substantial doubt' about continuing as a going concern (2025, repeated 2026); in May 2026 Allen Family Digital bought ~52% control for $120M, followed by a ~35% workforce cut. Q3 2026 revenue fell 44% year on year to $26M, and the company deferred its financial outlook. Decline is multi-causal (digital-ad collapse) — AI was the failed turnaround bet, not the sole killer.",
    sources: [
      { label: "Axios, May 2026", url: "https://axios.com/2026/05/12/byron-allen-buzzfeed-deal-ceo" },
      { label: "Bloomberg Law, Jul 2026", url: "https://news.bloomberglaw.com/daily-labor-report/buzzfeed-to-cut-about-35-of-workforce-in-restructuring" },
      { label: "BuzzFeed Q3 2026 results (SEC)", url: "https://www.sec.gov/Archives/edgar/data/0001828972/000182897226000162/exhibit991q32026earnings.htm" },
    ],
    verified: "2026-11-13",
    signal: "revenue",
    region: "US",
    markets: [
      {
        ticker: "BZFD",
        name: "BuzzFeed",
        exchange: "NASDAQ",
        currency: "USD",
        revenueBase: 325.78,
        revenueBasePeriod: "FY2022",
        revenueNow: 185.27,
        revenueNowPeriod: "FY2025",
        revenueSource: { label: "stockanalysis.com (compiled from annual reports)", url: "https://stockanalysis.com/stocks/bzfd/financials/" },
        priceBase: 4.6,
        priceBaseDate: "2022-11-30",
        priceNow: 0.405,
        priceNowDate: "2026-11-12",
        priceSource: { label: "Yahoo Finance daily closes", url: "https://finance.yahoo.com/quote/BZFD/history/" },
        response: "restructuring",
        responseWhy: "Control sold (May 2026), then ~35% workforce cut",
        caveat: "Baseline price adjusted for the 1:4 reverse split of May 2024.",
      },
    ],
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
    note: "Reported ~$185M ARR for 2024, up from ~$141M in 2023. Bloomberg reported it exploring a US IPO at up to ~$5B (Oct 2025). In May 2026 it announced cuts of about 250 jobs (~25% of staff), saying AI demands 'smaller teams with greater impact'; in June 2026 it bought Mixhalo to push into live-event voice translation. Even the disruptor is reorganizing around AI.",
    sources: [
      { label: "Bloomberg, Oct 2025", url: "https://www.bloomberg.com/news/articles/2025-10-02/google-translate-rival-deepl-is-said-to-explore-us-ipo" },
      { label: "TechCrunch, Jun 2026", url: "https://techcrunch.com/2026/06/17/deepl-acquires-mixhalo-for-live-event-audio-streaming-and-translation" },
      { label: "Yahoo Finance/GuruFocus, May 2026 (25% cut)", url: "https://finance.yahoo.com/sectors/technology/articles/deepl-cut-25-workforce-ai-182445900.html" },
      { label: "GIGAZINE, May 2026", url: "https://gigazine.net/gsc_news/en/20260508-deepl-lay-off-250" },
    ],
    verified: "2026-11-13",
    signal: "revenue",
    region: "Europe",
    unplotted: "Private company: no public revenue or market value.",
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
    sources: [
      { label: "The Guardian, Apr 2024 (Society of Authors survey)", url: "https://www.pressreader.com/usa/the-guardian-usa/20240417/282093461783334" },
    ],
    verified: "2026-11-13",
    signal: "jobs",
    region: "Global",
    unplotted: "A category, not one listed company.",
  },

  // ---------- Stock Photography ----------
  {
    company: "Getty Images",
    industry: "Stock Photography",
    speed: "gone",
    story:
      "The stock-photo giant fought AI image generators in court and shipped its own 'commercially safe' tool — and its shareholders were still wiped out in bankruptcy.",
    changed:
      "Text-to-image models now generate on-demand visuals that substitute for licensed stock photos. Getty sued Stability AI over training data and launched its own licensed generative tool to defend the franchise.",
    date: "Lawsuit filed early 2023; UK ruling Nov 2025; Chapter 11 Oct 2026",
    confidence: "high",
    note: "Getty alleged unauthorized scraping of ~12M images. In the UK High Court ruling (Nov 2025) it largely lost on copyright and won only a narrow trademark point. In 2026 its Shutterstock merger collapsed and it filed a prepackaged Chapter 11 (Oct 2026) that wipes out public shareholders. The business continues under new owners (Getty-family entities and Koch Equity Development) after more than $500M of debt is cut. Revenue was down only modestly, so the collapse is debt-driven, with AI as pressure, not the sole cause.",
    sources: [
      { label: "Getty Q2 2026 results", url: "https://newsroom.gettyimages.com/en/getty-images/getty-images-reports-second-quarter-2026-results" },
      { label: "Getty 8-K, Aug 2026 (SEC)", url: "https://www.sec.gov/Archives/edgar/data/0001898496/000121390026095778/ea0304109-8k_getty.htm" },
      { label: "Octus: prepackaged Chapter 11 filed", url: "https://octus.com/resources/articles/update-1-getty-images-files-for-prepackaged-chapter-11/" },
    ],
    verified: "2026-11-13",
    was: "on-the-clock",
    signal: "market",
    region: "US",
    markets: [
      {
        ticker: "GETYQ",
        name: "Getty Images",
        exchange: "OTC (delisted from NYSE Oct 2026)",
        currency: "USD",
        revenueBase: 926.24,
        revenueBasePeriod: "FY2022",
        revenueNow: 981.29,
        revenueNowPeriod: "FY2025",
        revenueSource: { label: "stockanalysis.com (compiled from annual reports)", url: "https://stockanalysis.com/stocks/gety/financials/" },
        priceBase: 5.87,
        priceBaseDate: "2022-11-30",
        priceNow: 0.02,
        priceNowDate: "2026-11-12",
        priceSource: { label: "Yahoo Finance daily closes", url: "https://finance.yahoo.com/quote/GETYQ/history/" },
        response: "restructuring",
        responseWhy: "Prepackaged Chapter 11 (Oct 2026); public shares to be cancelled",
        caveat: "Delisted from NYSE in Oct 2026; the current price is a thinly traded OTC quote, and the shares are to be cancelled.",
      },
    ],
  },
  {
    company: "Shutterstock",
    industry: "Stock Photography",
    speed: "gone",
    story:
      "It sold its library as AI training data and built generation into its platform — then the data revenue collapsed, the merger meant to save it fell through, and the dividend stopped.",
    changed:
      "It turned its image archive into a new revenue stream by licensing it to AI labs for model training, and integrated text-to-image generation for customers, with a fund to compensate contributors.",
    date: "2022–2023 (OpenAI partnership expanded 2023); strategic review 2026",
    confidence: "high",
    note: "AI/data licensing once ran roughly $100M+ a year. In Q3 2026 that data segment fell 76% year on year, total revenue fell 33%, and goodwill impairments reached $377M for the year so far. The Getty merger collapsed in July, the dividend was suspended to prioritize debt reduction, and the founder returned as CEO in October. Still operating — 'gone' describes the moat, not the company.",
    sources: [
      { label: "Shutterstock Q3 2026 results (SEC)", url: "https://www.sec.gov/Archives/edgar/data/0001549346/000114036126042037/ef20084945_ex99-1.htm" },
      { label: "Dividend suspension, Jul 2026 (SEC)", url: "https://www.sec.gov/Archives/edgar/data/0001549346/000114036126029293/ef20078341_ex99-1.htm" },
      { label: "Leadership change, Oct 2026 (SEC)", url: "https://www.sec.gov/Archives/edgar/data/0001549346/000114036126041191/ef20084541_ex99-1.htm" },
    ],
    verified: "2026-11-13",
    was: "reinventing",
    signal: "revenue",
    region: "US",
    markets: [
      {
        ticker: "SSTK",
        name: "Shutterstock",
        exchange: "NYSE",
        currency: "USD",
        revenueBase: 827.83,
        revenueBasePeriod: "FY2022",
        revenueNow: 989.93,
        revenueNowPeriod: "FY2025",
        revenueSource: { label: "stockanalysis.com (compiled from annual reports)", url: "https://stockanalysis.com/stocks/sstk/financials/" },
        priceBase: 53.82,
        priceBaseDate: "2022-11-30",
        priceNow: 2.67,
        priceNowDate: "2026-11-12",
        priceSource: { label: "Yahoo Finance daily closes", url: "https://finance.yahoo.com/quote/SSTK/history/" },
        response: "restructuring",
        responseWhy: "Merger collapsed, dividend suspended, strategic review (2026)",
      },
    ],
  },

  // ---------- Software & IT Services ----------
  {
    company: "Cursor (Anysphere)",
    industry: "Software & IT Services",
    speed: "reinventing",
    story:
      "An AI-native code editor went from zero to a reported $4B+ in annualized revenue in about three years — then sold for $60B.",
    changed:
      "Instead of autocomplete bolted onto an IDE, Cursor made the LLM the primary interface for writing and editing code — a new category that incumbents had to chase.",
    date: "Inflection ~Jan 2025; acquired by SpaceX Aug 2026",
    confidence: "medium",
    note: "Revenue figures come from press reports, not audited filings — treat them as approximate. Acquired by SpaceX in a ~$60B all-stock deal (announced June, closed Aug 2026). The 'AI-native reinventor of the category' claim is well-supported.",
    sources: [
      { label: "Quartz, Jun 2026", url: "https://qz.com/spacex-buying-cursor-anysphere-60-billion-deal-061626" },
      { label: "Advisor Perspectives, Aug 2026 (deal closed)", url: "https://hooks.advisorperspectives.com/articles/2026/08/14/spacex-completes-60-billion-cursor-acquisition" },
      { label: "Dealroom, Jun 2026", url: "https://dealroom.co/news/134107-cursor-tops-4b-annualized-revenue/" },
    ],
    verified: "2026-11-13",
    signal: "revenue",
    region: "US",
    unplotted: "Private until SpaceX bought it in 2026: no market value at the baseline.",
  },
  {
    company: "Globant",
    industry: "Software & IT Services",
    speed: "on-the-clock",
    story:
      "A flagship Latin American IT-services firm lost most of its market value as clients questioned whether they still needed billable headcount.",
    changed:
      "The staff-augmentation model prices on hours and headcount; AI coding tools compress the hours. The firm is racing to reprice around AI 'Pods' and subscriptions before the old model erodes.",
    date: "Stock peak ~Feb 2025; decade lows by mid-2026; repositioning ongoing",
    confidence: "high",
    note: "Stock decline is verifiable; the AI-pricing pivot is real but unproven. Securities suits also allege broader LatAm demand problems, so AI is a major but not sole driver. In Aug 2026 it cut its 2026 revenue guidance; AI Pods were ~2% of revenue (company figure).",
    sources: [
      { label: "Globant Q2 2026 results (SEC 6-K)", url: "https://www.sec.gov/Archives/edgar/data/0001557860/000110465926095916/tm2623064d1_ex99-1.htm" },
      { label: "Bloomberg Línea, Aug 2026", url: "https://www.bloomberglinea.com/latinoamerica/argentina/globant-recorta-prevision-de-facturacion-en-2026-y-se-desploman-sus-acciones-en-wall-street/" },
    ],
    verified: "2026-11-13",
    signal: "market",
    region: "LATAM",
    markets: [
      {
        ticker: "GLOB",
        name: "Globant",
        exchange: "NYSE",
        currency: "USD",
        revenueBase: 1780,
        revenueBasePeriod: "FY2022",
        revenueNow: 2455,
        revenueNowPeriod: "FY2025",
        revenueSource: { label: "stockanalysis.com (compiled from annual reports)", url: "https://stockanalysis.com/stocks/glob/financials/" },
        priceBase: 187.38,
        priceBaseDate: "2022-11-30",
        priceNow: 45.75,
        priceNowDate: "2026-11-12",
        priceSource: { label: "Yahoo Finance daily closes", url: "https://finance.yahoo.com/quote/GLOB/history/" },
        response: "reinventing",
        responseWhy: "Repricing services around AI 'Pods' and subscriptions",
      },
    ],
  },
  {
    company: "Indian IT outsourcing (TCS, Infosys et al.)",
    industry: "Software & IT Services",
    speed: "on-the-clock",
    story:
      "The vast Indian outsourcing engine began shedding tens of thousands of jobs as AI took on the entry-level coding, testing, and support it was built to staff.",
    changed:
      "The model sold scale of cheap labor for routine dev/test/support work; AI now does much of that, so 'more people = more revenue' is breaking.",
    date: "2024–2026 (TCS announced ~12,000 cuts in 2025; FY26 brought the sector's first net headcount drop in about 20 years)",
    confidence: "medium",
    note: "Layoff figures are press/analyst-sourced and partly attributed to AI plus macro/efficiency pressure — multi-causal. Treated as a sector exemplar, not one company. Headcount partly recovered at TCS and Infosys in mid-2026, so the break is real but not a straight line.",
    sources: [
      { label: "Gulf News, Jul 2025 (TCS cuts)", url: "https://gulfnews.com/business/markets/ai-overhaul-indias-tcs-to-cut-12000-jobs-this-year-after-growth-slows-in-q1-1.500212931" },
      { label: "Forkast, 2026", url: "https://forkast.news/indias-it-giants-are-cutting-jobs-for-the-first-time-in-20-years-ai-agents-are-eating-the-model-that-built-them/" },
      { label: "Business Today, Oct 2026", url: "https://www.businesstoday.in/markets/stocks/story/tcs-adds-4258-employees-in-q2-marks-third-quarter-of-headcount-addition-560460-2026-10-08" },
    ],
    verified: "2026-11-13",
    signal: "jobs",
    region: "Asia",
    unplotted: "A category, not one listed company.",
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
    sources: [
      { label: "Bloomberg Law, Jul 2026", url: "https://news.bloomberglaw.com/private-equity/ai-lab-midjourney-buys-astrology-startup-co-star-plans-new-apps" },
    ],
    verified: "2026-11-13",
    signal: "revenue",
    region: "US",
    unplotted: "Private company: no public revenue or market value.",
  },
  {
    company: "Adobe (Firefly / Creative Cloud)",
    industry: "Design & Creative",
    speed: "on-the-clock",
    story:
      "The category owner shipped its own generative AI fast, yet still saw its stock cut sharply as the market doubted AI would protect its subscription moat.",
    changed:
      "Adobe's moat was a near-monopoly on professional creative tooling. It embedded Firefly across Photoshop and Illustrator to defend it, and in Nov 2026 turned Firefly into an agent-driven studio that also offers rival AI models. But commoditized generation and AI-native rivals (Figma, Canva) put premium pricing in question.",
    date: "Firefly launched Mar 2023; stock fell ~40% to a mid-2026 low, partly recovered by Oct 2026",
    confidence: "medium",
    note: "Firefly adoption and launch date are solid. The stock decline is verifiable; attributing it specifically to AI fear is the consensus narrative but not the only factor. Defending strongly — 'on the clock,' not 'gone.' Record revenue and fast-growing AI ARR (company claim, Q3 FY26) have not restored the multiple.",
    sources: [
      { label: "Adobe Q3 FY26 results (SEC)", url: "https://www.sec.gov/Archives/edgar/data/0000796343/000079634326000147/adbeex991q326.htm" },
      { label: "Motley Fool, Jun 2026", url: "https://www.fool.com/investing/2026/06/24/should-you-buy-adobe-after-its-40-drop/" },
      { label: "Motley Fool, Sep 2026", url: "https://www.fool.com/investing/2026/09/07/is-adobe-s-stock-heading-for-300/" },
      { label: "Adobe MAX, Nov 2026 (company)", url: "https://news.adobe.com/news/2026/11/adobe-firefly-expands" },
    ],
    verified: "2026-11-13",
    signal: "market",
    region: "US",
    markets: [
      {
        ticker: "ADBE",
        name: "Adobe",
        exchange: "NASDAQ",
        currency: "USD",
        revenueBase: 17606,
        revenueBasePeriod: "FY2022 (to Dec 2022)",
        revenueNow: 23769,
        revenueNowPeriod: "FY2025 (to Nov 2025)",
        revenueSource: { label: "stockanalysis.com (compiled from annual reports)", url: "https://stockanalysis.com/stocks/adbe/financials/" },
        priceBase: 344.93,
        priceBaseDate: "2022-11-30",
        priceNow: 238.54,
        priceNowDate: "2026-11-12",
        priceSource: { label: "Yahoo Finance daily closes", url: "https://finance.yahoo.com/quote/ADBE/history/" },
        response: "reinventing",
        responseWhy: "Shipped Firefly generative AI across its creative tools",
      },
    ],
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
    note: "The '700 agents' / '$40M' figures are Klarna's own marketing claims (the $40M was largely avoided hiring, not pure layoffs). The 2025 walk-back is the credible part — this is NOT a clean 'AI replaced everyone' case. By Nov 2025 Klarna claimed '853 agents' and $60M saved (also its own figures), while customer-service costs still rose year on year.",
    sources: [
      { label: "CX Dive, Nov 2025", url: "https://www.customerexperiencedive.com/news/klarna-says-ai-agent-work-853-employees/" },
    ],
    verified: "2026-11-13",
    signal: "jobs",
    region: "Europe",
    unplotted: "Klarna listed in Sept 2025: no market value at the 2022 baseline.",
  },
  {
    company: "Sierra",
    industry: "Customer Support",
    speed: "reinventing",
    story:
      "Two ex-Big-Tech execs built an AI-agent company for customer service that passed $150M ARR in about two years and a $15.8B valuation.",
    changed:
      "AI agents now resolve customer issues end-to-end (refunds, account actions), so enterprises buy outcomes instead of seats of human-staffed contact centers — a new AI-native category challenging the old CX/BPO stack.",
    date: "Founded Feb 2024; ~$100M ARR Nov 2025; $15.8B valuation May 2026",
    confidence: "medium",
    note: "ARR and valuation are press-reported, not audited — approximate. Decagon is a comparable AI-native reinventor in the same space.",
    sources: [
      { label: "TechCrunch, Nov 2025", url: "https://techcrunch.com/2025/11/21/bret-taylors-sierra-reaches-100m-arr-in-under-two-years/" },
      { label: "Idlen (citing TechCrunch/CNBC), May 2026", url: "https://www.idlen.io/news/sierra-950-million-series-e-15-8-billion-valuation-bret-taylor-tiger-global-may-2026" },
    ],
    verified: "2026-11-13",
    signal: "revenue",
    region: "US",
    unplotted: "Private company: no public revenue or market value.",
  },

  // ---------- Legal ----------
  {
    company: "Harvey AI",
    industry: "Legal",
    speed: "reinventing",
    story:
      "A two-year-old startup became the default AI layer for elite law firms before incumbents could ship a credible competitor.",
    changed:
      "GPT-class models plus a forward-deployed, ex-lawyer change-management model let Harvey embed legal research, drafting, and review into BigLaw workflows; Harvey says ~80% of the Am Law 100 now use it, and the category formed around it.",
    date: "2023 launch; inflection 2025–2026 ($15.5B valuation Sep 2026)",
    confidence: "high",
    note: "Valuation and ARR figures are company-reported and rising fast; treat point figures as as-of-date snapshots.",
    sources: [
      { label: "Harvey, Sep 2026 (company)", url: "https://www.harvey.ai/blog/harvey-raises-dollar550m-at-a-dollar155b-valuation-to-help-legal-teams-own-their-intelligence" },
    ],
    verified: "2026-11-13",
    signal: "revenue",
    region: "US",
    unplotted: "Private company: no public revenue or market value.",
  },
  {
    company: "Thomson Reuters (CoCounsel / Casetext)",
    industry: "Legal",
    speed: "reinventing",
    story:
      "The legal-research incumbent bought its way into the AI era for $650M rather than be disrupted by a GPT-4 startup.",
    changed:
      "Casetext's CoCounsel — a GPT-4-powered assistant for research, document review, and deposition prep — proved generative AI could compress hours of associate work to minutes. Thomson Reuters acquired it to defend its Westlaw franchise.",
    date: "Acquisition announced June 2023; agentic CoCounsel Legal launched Aug 2026",
    confidence: "high",
    note: "In Aug 2026 it launched an agentic CoCounsel Legal, which it says 'one million professionals' use. In Q3 2026 its Legal Professionals revenue grew 9%, which it credits partly to CoCounsel Legal, and it raised its full-year outlook (Nov 2026). Usage and growth figures are company-reported. Its shares fell ~16% on Feb 3, 2026, when an AI lab shipped a legal plug-in for its assistant: the reinvention is real, and so is the market's doubt.",
    sources: [
      { label: "Thomson Reuters, Aug 2026 (company)", url: "https://www.thomsonreuters.com/en/press-releases/2026/august/thomson-reuters-launches-next-generation-of-cocounsel-legal-the-ai-ecosystem-built-for-legal-professionals" },
      { label: "Dow Jones via Morningstar, Feb 2026", url: "https://www.morningstar.com/news/dow-jones/202602037872/thomson-reuters-shares-slide-after-anthropic-unveils-ai-tool-targeting-legal-workflow-business" },
      { label: "Thomson Reuters Q3 2026 results, Nov 2026 (company, via Finviz)", url: "https://finviz.com/news/413999/thomson-reuters-reports-third-quarter-2026-results" },
    ],
    verified: "2026-11-13",
    signal: "revenue",
    region: "Global",
    markets: [
      {
        ticker: "TRI",
        name: "Thomson Reuters",
        exchange: "NYSE",
        currency: "USD",
        revenueBase: 6627,
        revenueBasePeriod: "FY2022",
        revenueNow: 7476,
        revenueNowPeriod: "FY2025",
        revenueSource: { label: "stockanalysis.com (compiled from annual reports)", url: "https://stockanalysis.com/stocks/tri/financials/" },
        priceBase: 122.24,
        priceBaseDate: "2022-11-30",
        priceNow: 109.25,
        priceNowDate: "2026-11-12",
        priceSource: { label: "Yahoo Finance daily closes", url: "https://finance.yahoo.com/quote/TRI/history/" },
        response: "reinventing",
        responseWhy: "Bought Casetext; launched agentic CoCounsel Legal (Aug 2026)",
        caveat: "Baseline price adjusted for the June 2023 share consolidation.",
      },
    ],
  },
  {
    company: "Law-firm junior associates & paralegals",
    industry: "Legal",
    speed: "on-the-clock",
    story:
      "Licensure still protects the lawyer who signs, but firms are hiring fewer of the juniors who used to do the grunt work.",
    changed:
      "Document review, first-draft contracts, and research are increasingly automated, yet unauthorized-practice rules, malpractice liability, and ABA Formal Opinion 512 (2024) keep a licensed human in the loop. The visible shift is hiring: Big Law first-year intake fell 7.5% in 2025, and two-thirds of large firms surveyed expect fewer first-years by 2028.",
    date: "2024–2026 (ABA Op. 512 issued 2024; first-year hiring falling from the 2024 peak)",
    confidence: "medium",
    note: "Moved from 'insulated' in Oct 2026: the licensed-judgment layer still holds, but the training pipeline is visibly eroding. Hiring data from NALP and a Citi survey of 57 firms. Counter-evidence exists: some firms are expanding summer classes, industry billable hours were still rising in early 2026, and as of Nov 2026 no firm had been reported cutting first-years specifically because of AI.",
    sources: [
      { label: "Bloomberg Law, Sep 2026", url: "https://news.bloomberglaw.com/business-and-practice/big-law-first-year-hiring-set-to-plunge-as-history-ai-collide" },
      { label: "Legal Cheek, Jun 2026 (counter-evidence)", url: "https://www.legalcheek.com/2026/06/white-collar-jobpocalypse-is-ai-really-going-to-cut-trainee-lawyer-numbers-or-might-it-end-up-boosting-them/" },
      { label: "Best Law Firms, Nov 2026 (counter-evidence)", url: "https://www.bestlawfirms.com/articles/big-law-partner-hiring-first-year-classes-shrinking/8616" },
    ],
    verified: "2026-11-13",
    was: "insulated",
    signal: "jobs",
    region: "US",
    unplotted: "A category, not one listed company.",
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
    note: "An early, pre-LLM exemplar. The 360,000-hours figure is JPMorgan's own and often cited. By mid-2026 the bank said AI had let it cut jobs sharply in some discrete teams, with most staff redeployed (its own statement).",
    sources: [
      { label: "The Next Web, Jul 2026", url: "https://thenextweb.com/news/jpmorgan-dimon-ai-jobs-cuts-margins-q2-earnings" },
    ],
    verified: "2026-11-13",
    signal: "jobs",
    region: "US",
    unplotted: "A product or unit inside a larger listed company.",
  },
  {
    company: "Wall Street sell-side equity research",
    industry: "Finance",
    speed: "on-the-clock",
    story:
      "The research desk is thinning: hundreds of mid-tier analysts have left since 2023 as AI, passive investing, and unbundling squeezed the business.",
    changed:
      "AI now drafts the models, summaries, and first-pass analysis junior analysts once produced; combined with MiFID II unbundling and the shift to passive, the economic case for large research teams collapsed.",
    date: "Trend building 2023–2026; Bloomberg Intelligence bank-jobs forecast Jan 2025",
    confidence: "medium",
    note: "Substantive Research counts 736 mid-tier analysts leaving the market between 2023 and 2026, and says 70% of asset managers it surveyed expect routine 'maintenance' research to become AI-generated. Separately, Bloomberg Intelligence projected (Jan 2025) that global banks could cut up to ~200,000 jobs over 3–5 years, mostly in back and middle office, not research. AI is one of several compounding forces, not the sole cause.",
    sources: [
      { label: "Markets Media, May 2026", url: "https://www.marketsmedia.com/substantive-research-launches-data-riven-analyst-rankings/" },
      { label: "Fortune, Jan 2025", url: "https://fortune.com/2025/01/13/wall-street-ai-job-losses/" },
    ],
    verified: "2026-11-13",
    signal: "jobs",
    region: "US",
    unplotted: "A category, not one listed company.",
  },
  {
    company: "Big Four audit & tax (Deloitte, EY, KPMG, PwC)",
    industry: "Finance",
    speed: "on-the-clock",
    story:
      "The firms whose pyramid runs on armies of junior reviewers are racing to automate the very work those juniors do.",
    changed:
      "Agentic audit/tax platforms now do first-pass document review, data collection, and tax compliance, threatening the leverage-pyramid economics — but liability, regulation, and audit sign-off keep humans accountable. Firms have begun talking about moving audit pricing off the hour.",
    date: "2024–2026 platform rollouts (agentic audit at scale 2026)",
    confidence: "medium",
    note: "Reinvention is active and self-inflicted; net headcount/economic impact isn't yet resolved — hence on-the-clock rather than gone.",
    sources: [
      { label: "ACCA AB Magazine, Aug 2026", url: "https://abmagazine.accaglobal.com/global/articles/2026/aug/practice/audit-s-not-so-secret-agents.html" },
      { label: "Bloomberg Law, Apr 2026", url: "https://news.bloomberglaw.com/esg/kpmg-to-test-advanced-ai-agents-in-next-phase-for-audits" },
      { label: "Accountancy Today, Jun 2025", url: "https://www.accountancytoday.co.uk/2025/06/24/big-four-firms-cut-grad-jobs-in-favour-of-ai/" },
    ],
    verified: "2026-11-13",
    signal: "jobs",
    region: "Global",
    unplotted: "Private partnerships: no public market value.",
  },
  {
    company: "H&R Block",
    industry: "Finance",
    speed: "on-the-clock",
    story:
      "Free and cheap AI-assisted self-filing is quietly shaving the addressable market for paid human tax prep, season by season.",
    changed:
      "Self-prepared returns are rising while professionally-prepared returns flatten; AI chatbots in DIY software lower the perceived need to pay a preparer, eroding the core — though those chatbots have themselves been faulted for inaccurate advice.",
    date: "2023–2026",
    confidence: "medium",
    note: "AI accelerates a long-running DIY shift rather than being the sole driver. FY2026 revenue still grew ~5% on flat assisted volume, while the stock fell ~40% in the year to Feb 2026.",
    sources: [
      { label: "H&R Block FY2026 10-K (SEC)", url: "https://www.sec.gov/Archives/edgar/data/0000012659/000001265926000026/hrb-20260630.htm" },
      { label: "Motley Fool via Yahoo, Mar 2026", url: "https://finance.yahoo.com/news/h-r-block-stock-down-024303387.html" },
    ],
    verified: "2026-11-13",
    signal: "market",
    region: "US",
    markets: [
      {
        ticker: "HRB",
        name: "H&R Block",
        exchange: "NYSE",
        currency: "USD",
        revenueBase: 3463,
        revenueBasePeriod: "FY2022 (to Jun 2022)",
        revenueNow: 3945,
        revenueNowPeriod: "FY2026 (to Jun 2026)",
        revenueSource: { label: "stockanalysis.com (compiled from annual reports)", url: "https://stockanalysis.com/stocks/hrb/financials/" },
        priceBase: 43.71,
        priceBaseDate: "2022-11-30",
        priceNow: 50.73,
        priceNowDate: "2026-11-12",
        priceSource: { label: "Yahoo Finance daily closes", url: "https://finance.yahoo.com/quote/HRB/history/" },
        response: "none",
        responseWhy: "No AI repositioning documented in our sources",
      },
    ],
  },

  // ---------- Recruiting ----------
  {
    company: "LinkedIn Hiring Assistant",
    industry: "Recruiting",
    speed: "on-the-clock",
    story:
      "The platform recruiters live in shipped an AI agent that automates the sourcing, ranking, and outreach that defined the recruiter job.",
    changed:
      "Hiring Assistant writes job descriptions, identifies and ranks candidates, runs InMail Q&A, and pre-vets applicants — LinkedIn estimates it cuts recruiter admin time by ~70%, putting routine sourcing under pressure from the incumbent itself.",
    date: "Limited launch Oct 2024; global English availability Sept 2025; agentic hiring past $450M run rate Apr 2026; Hiring Assistant 2 rolling out Nov 2026",
    confidence: "high",
    note: "The 70% admin-reduction figure is LinkedIn's own estimate, as is its report that agentic hiring products passed a $450M annual revenue run rate (Apr 2026). LinkedIn also says over 20,000 companies use them (Sept 2026). The incumbent is monetizing the agent; the pressure lands on recruiters.",
    sources: [
      { label: "LinkedIn Q3 FY26 highlights (company)", url: "https://news.linkedin.com/2026/Q3-Earnings-Highlights" },
      { label: "LinkedIn, Hiring Assistant 2 announcement, Sept 2026 (company)", url: "https://news.linkedin.com/2026/hiring-assistant-2" },
    ],
    verified: "2026-11-13",
    signal: "revenue",
    region: "Global",
    unplotted: "A product or unit inside a larger listed company.",
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
    sources: [
      { label: "Built In company profile, 2026", url: "https://www.builtinaustin.com/company/jasper/faq/innovation-technology-agility" },
    ],
    verified: "2026-11-13",
    signal: "revenue",
    region: "US",
    unplotted: "Private company: no public revenue or market value.",
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
    sources: [
      { label: "GSQi spam-update case studies, 2026", url: "https://gsqi.com/marketing-blog/august-2026-google-spam-update-case-studies/" },
    ],
    verified: "2026-11-13",
    signal: "revenue",
    region: "Global",
    unplotted: "A category, not one listed company.",
  },

  // ---------- Logistics & Freight ----------
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
    note: "Disruption is visibly underway but unresolved; Uber Freight grew gross bookings 35% in Q3 2026 but was still loss-making, so the economics aren't settled.",
    sources: [
      { label: "Uber Q3 2026 10-Q (SEC)", url: "https://www.sec.gov/Archives/edgar/data/1543151/000154315126000041/uber-20260930.htm" },
    ],
    verified: "2026-11-13",
    signal: "market",
    region: "US",
    unplotted: "A product or unit inside a larger listed company.",
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
    sources: [
      { label: "LawNext, Mar 2025", url: "https://www.lawnext.com/2025/03/revs-smartdepo-acquisition-powers-next-generation-ai-for-testimony-analysis.html" },
    ],
    verified: "2026-11-13",
    signal: "jobs",
    region: "US",
    unplotted: "Private company: no public revenue or market value.",
  },
  {
    company: "Otter.ai",
    industry: "Transcription",
    speed: "reinventing",
    story:
      "An AI-native entrant redefined transcription from a service you ordered into ambient meeting intelligence baked into every call.",
    changed:
      "Instead of per-minute transcription, Otter embedded directly in Zoom/Meet/Teams as an always-on notetaker, then layered in chat and agents — redefining the category around real-time meeting intelligence.",
    date: "2023 → 2026 (~$100M ARR reported 2025; 40M+ users and $320M growth financing Oct 2026)",
    confidence: "high",
    note: "A category-redefining new entrant, not an incumbent's turnaround. User and ARR figures are company-reported. A privacy class action over recording consent survived a motion to dismiss in Aug 2026 (allegations, not findings).",
    sources: [
      { label: "SiliconANGLE, Oct 2026", url: "https://siliconangle.com/2026/10/20/otter-ai-raises-320m-in-funding-for-its-ai-meeting-assistant/" },
      { label: "Baird Holm, Aug 2026 (privacy suit)", url: "https://www.bairdholm.com/blog/core-privacy-claims-against-ai-note-taking-platform-survive-dismissal/" },
    ],
    verified: "2026-11-13",
    signal: "revenue",
    region: "US",
    unplotted: "Private company: no public revenue or market value.",
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
    note: "Claims are CONTESTED; the then-CEO disputed the report and investors backed the company, and in May 2025 he stepped back to chairman as the CTO took over. Included to show the AI-SDR category is real but full SDR replacement remains unproven — do not state the allegations as established fact.",
    sources: [
      { label: "TechCrunch, Mar 2025", url: "https://techcrunch.com/2025/03/24/a16z-and-benchmark-backed-11x-has-been-claiming-customers-it-doesnt-have" },
      { label: "Bloomberg, May 2025", url: "https://www.bloomberg.com/news/articles/2025-05-05/ceo-of-andreessen-horowitz-backed-ai-startup-11x-steps-down" },
    ],
    verified: "2026-11-13",
    signal: "market",
    region: "US",
    unplotted: "Private company: no public revenue or market value.",
  },

  // ---------- Added October 2026 ----------

  // Customer Support (incumbents and LATAM)
  {
    company: "Mercado Libre",
    industry: "Customer Support",
    speed: "reinventing",
    story:
      "Latin America's biggest marketplace now lets an AI assistant settle most of its fintech customers' questions without a human.",
    changed:
      "Mercado Pago's AI assistant handled 9M+ inquiries in Q4 2025 and resolved 87% with no human operator; by Q2 2026 AI solved more than half of Help Portal requests on its own. In Q3 2026 the company said about 7,000 support staff handle a volume that would otherwise need a multiple of that, and its assistant held 19M conversations in September alone.",
    date: "Assistant launched Oct 2025; Q4 2025 → Q3 2026",
    confidence: "medium",
    note: "All figures are company claims from shareholder letters filed with the SEC. An incumbent reinventing itself, not a company being displaced. The first Latin American reinventor in the index.",
    sources: [
      { label: "Mercado Libre Q4 2025 results (company)", url: "https://www.businesswire.com/news/home/20260224265595/en/" },
      { label: "Mercado Libre Q2 2026 letter (SEC)", url: "https://www.sec.gov/Archives/edgar/data/0001099590/000109959026000021/meli-20260805xex991.htm" },
      { label: "Mercado Libre Q3 2026 letter (SEC)", url: "https://www.sec.gov/Archives/edgar/data/1099590/000109959026000027/meli-20260930xex991.htm" },
    ],
    verified: "2026-11-13",
    signal: "jobs",
    region: "LATAM",
    markets: [
      {
        ticker: "MELI",
        name: "Mercado Libre",
        exchange: "NASDAQ",
        currency: "USD",
        revenueBase: 10780,
        revenueBasePeriod: "FY2022",
        revenueNow: 28893,
        revenueNowPeriod: "FY2025",
        revenueSource: { label: "stockanalysis.com (compiled from annual reports)", url: "https://stockanalysis.com/stocks/meli/financials/" },
        priceBase: 930.99,
        priceBaseDate: "2022-11-30",
        priceNow: 1475.09,
        priceNowDate: "2026-11-12",
        priceSource: { label: "Yahoo Finance daily closes", url: "https://finance.yahoo.com/quote/MELI/history/" },
        response: "reinventing",
        responseWhy: "AI assistant resolves most support requests without a human",
      },
    ],
  },
  {
    company: "Contact-center outsourcers (Teleperformance, Concentrix)",
    industry: "Customer Support",
    speed: "on-the-clock",
    story:
      "The giants that rent out human agents by the hour are seeing revenue turn negative and writing down billions as clients' AI starts answering the phone.",
    changed:
      "Outsourced contact centers sell agent-hours at scale. AI agents resolve routine contacts end to end, so volume and pricing power shrink. Both firms are repositioning as 'AI plus human' operators while their core lines decline.",
    date: "Mar 2024 (TP −23% in a day after Klarna's AI results) → 2026 (TP revenue down like-for-like, 2026 outlook cut Nov 2026; Concentrix $1.05B goodwill impairment, Sept 2026)",
    confidence: "medium",
    note: "Multi-causal. Concentrix ties its impairment to its share price and its weak outlook to client priorities, not to AI by name. Teleperformance blames a faster fall in Trust & Safety, which it ties to automation and offshoring, plus wider industry headwinds. Both report fast growth in their own AI lines (company claims). Defend-and-pivot, not collapse.",
    sources: [
      { label: "CNBC via NBC, Mar 2024", url: "https://www.nbclosangeles.com/news/business/money-report/call-center-group-teleperformance-falls-20-as-ceo-insists-ai-cannot-replace-human-staff/3357496/" },
      { label: "Teleperformance Q3 2026 revenue (company)", url: "https://www.tp.com/media/kcdch3fb/tp-press-release-q3-2026-revenue-eng.pdf" },
      { label: "Concentrix Q3 FY26 results (SEC)", url: "https://www.sec.gov/Archives/edgar/data/0001803599/000180359926000147/exhibit991q32026.htm" },
    ],
    verified: "2026-11-13",
    signal: "revenue",
    region: "Global",
    markets: [
      {
        ticker: "TEP",
        name: "Teleperformance",
        exchange: "Euronext Paris",
        currency: "EUR",
        revenueBase: 8155,
        revenueBasePeriod: "FY2022",
        revenueNow: 10209,
        revenueNowPeriod: "FY2025",
        revenueSource: { label: "stockanalysis.com (compiled from annual reports)", url: "https://stockanalysis.com/quote/epa/TEP/financials/" },
        priceBase: 215.4,
        priceBaseDate: "2022-11-30",
        priceNow: 70.9,
        priceNowDate: "2026-11-12",
        priceSource: { label: "Yahoo Finance daily closes", url: "https://finance.yahoo.com/quote/TEP.PA/history/" },
        response: "reinventing",
        responseWhy: "Repositioning as 'AI plus human' operators",
        caveat: "Revenue includes the Majorel acquisition (late 2023); organic growth is lower.",
      },
      {
        ticker: "CNXC",
        name: "Concentrix",
        exchange: "NASDAQ",
        currency: "USD",
        revenueBase: 6324,
        revenueBasePeriod: "FY2022 (to Nov 2022)",
        revenueNow: 9826,
        revenueNowPeriod: "FY2025 (to Nov 2025)",
        revenueSource: { label: "stockanalysis.com (compiled from annual reports)", url: "https://stockanalysis.com/stocks/cnxc/financials/" },
        priceBase: 122.38,
        priceBaseDate: "2022-11-30",
        priceNow: 31.97,
        priceNowDate: "2026-11-12",
        priceSource: { label: "Yahoo Finance daily closes", url: "https://finance.yahoo.com/quote/CNXC/history/" },
        response: "reinventing",
        responseWhy: "Repositioning as 'AI plus human' operators",
        caveat: "Revenue includes the Webhelp acquisition (Sept 2023); organic growth is much lower.",
      },
    ],
  },
  {
    company: "Philippine BPO industry",
    industry: "Customer Support",
    speed: "on-the-clock",
    story:
      "The call-center capital of the world is still adding jobs, while quietly revising the growth forecasts its economy was built on.",
    changed:
      "About 1.7M Filipinos work in contact centers and business-process outsourcing, doing the scripted support, data entry, and document processing generative AI automates first. Headcount still rose in 2025, but in July 2026 the industry body lowered its growth outlook, citing AI and geopolitics.",
    date: "2025–2026 (industry outlook lowered, July 2026)",
    confidence: "medium",
    note: "Headcount grew ~4% to 1.68M in 2025 (industry-association figure). Larger displacement forecasts circulating are projections, not observed losses. A sector exemplar, like the Indian IT entry.",
    sources: [
      { label: "Philstar, Jun 2026", url: "https://www.philstar.com/nation/2026/06/13/2534925/philippines-bpo-sector-grows-4-168m-despite-ai-fears" },
      { label: "Outsource Accelerator, Jun 2026", url: "https://news.outsourceaccelerator.com/ibpap-itbpm-42bn-2026/" },
      { label: "Philstar, Jul 2026", url: "https://www.philstar.com/campus/sports/2026/07/15/2542137/it-bpm-industry-lowers-outlook" },
    ],
    verified: "2026-11-13",
    signal: "jobs",
    region: "Asia",
    unplotted: "A category, not one listed company.",
  },

  // Finance
  {
    company: "Standard Chartered",
    industry: "Finance",
    speed: "on-the-clock",
    story:
      "A global bank told markets it will cut ~15% of its corporate-function roles by 2030 as AI absorbs back-office work.",
    changed:
      "Shared-service hubs exist to do routine processing at scale, and that is exactly what AI automates. The bank plans to cut nearly 8,000 of its 52,000+ support roles over four years, with offshore hubs in Asia and Europe reported hardest hit.",
    date: "Announced May 2026",
    confidence: "high",
    note: "Planned cuts through 2030, not completed ones. Leadership's framing of the roles drew a backlash and was later said to be taken out of context. Hub locations are single-source.",
    sources: [
      { label: "Reuters via Yahoo, May 2026", url: "https://finance.yahoo.com/news/stanchart-ceo-seeks-reassure-staff-091544741.html" },
      { label: "Express & Star (PA), May 2026", url: "https://www.expressandstar.com/uk-news/standard-chartered-boss-says-ai-comments-taken-out-of-context-after-backlash-8555416" },
    ],
    verified: "2026-11-13",
    signal: "jobs",
    region: "Asia",
    markets: [
      {
        ticker: "STAN",
        name: "Standard Chartered",
        exchange: "LSE",
        currency: "USD revenue · GBp price",
        revenueBase: 16318,
        revenueBasePeriod: "FY2022 operating income",
        revenueNow: 20942,
        revenueNowPeriod: "FY2025 operating income",
        revenueSource: { label: "Standard Chartered FY2022 & FY2025 results", url: "https://www.investegate.co.uk/announcement/rns/standard-chartered--stan/scplc-final-results-2025/9443369" },
        priceBase: 617.4,
        priceBaseDate: "2022-11-30",
        priceNow: 2227.0,
        priceNowDate: "2026-11-12",
        priceSource: { label: "Yahoo Finance daily closes", url: "https://finance.yahoo.com/quote/STAN.L/history/" },
        response: "restructuring",
        responseWhy: "Cutting ~15% of corporate-function roles by 2030",
        caveat: "A bank: operating income stands in for revenue. Revenue in USD; share price in pence.",
      },
    ],
  },

  // Legal
  {
    company: "RELX (LexisNexis) & Wolters Kluwer",
    industry: "Legal",
    speed: "on-the-clock",
    story:
      "Two of Europe's most defensive information franchises had one of their worst trading days in decades when an AI lab shipped a legal plug-in for its assistant.",
    changed:
      "The moat was proprietary legal and professional content wrapped in paid workflow software. An agent that reviews documents, triages contracts, and flags risk inside a general-purpose assistant threatens to own the workflow, leaving the content as an input instead of the product.",
    date: "Feb 3, 2026 selloff",
    confidence: "medium",
    note: "Reported one-day falls of roughly 13–14% each (Thomson Reuters fell ~16% the same day); exact figures vary by exchange and measure. A repricing of risk, not yet lost revenue: in the first nine months of 2026 RELX's legal division grew 10% and Wolters Kluwer's Legal & Regulatory grew 5%, and both kept their full-year outlooks. The plug-in's output still requires attorney review.",
    sources: [
      { label: "Legal IT Insider, Feb 2026", url: "https://legaltechnology.com/anthropic-unveils-claude-legal-plugin-and-causes-market-meltdown/" },
      { label: "Canadian Lawyer, Feb 2026", url: "https://www.canadianlawyermag.com/news/international/anthropic-legal-tool-jolts-share-price-of-global-legal-data-leaders/393665" },
      { label: "City A.M., Oct 2026", url: "https://www.cityam.com/?p=2468094" },
      { label: "Wolters Kluwer nine-month update, Nov 2026 (company)", url: "https://capital.com/en-gb/news/wolters-kluwer-2026-nine-month-trading-update" },
    ],
    verified: "2026-11-13",
    signal: "market",
    region: "Europe",
    markets: [
      {
        ticker: "REL",
        name: "RELX",
        exchange: "LSE",
        currency: "GBP revenue · GBp price",
        revenueBase: 8553,
        revenueBasePeriod: "FY2022",
        revenueNow: 9590,
        revenueNowPeriod: "FY2025",
        revenueSource: { label: "stockanalysis.com (compiled from annual reports)", url: "https://stockanalysis.com/quote/lon/REL/financials/" },
        priceBase: 2312,
        priceBaseDate: "2022-11-30",
        priceNow: 3019.0,
        priceNowDate: "2026-11-12",
        priceSource: { label: "Yahoo Finance daily closes", url: "https://finance.yahoo.com/quote/REL.L/history/" },
        response: "reinventing",
        responseWhy: "Sells AI research tools inside its legal and analytics products",
      },
      {
        ticker: "WKL",
        name: "Wolters Kluwer",
        exchange: "Euronext Amsterdam",
        currency: "EUR",
        revenueBase: 5453,
        revenueBasePeriod: "FY2022",
        revenueNow: 6125,
        revenueNowPeriod: "FY2025",
        revenueSource: { label: "stockanalysis.com (compiled from annual reports)", url: "https://stockanalysis.com/quote/ams/WKL/financials/" },
        priceBase: 105.2,
        priceBaseDate: "2022-11-30",
        priceNow: 89.5,
        priceNowDate: "2026-11-12",
        priceSource: { label: "Yahoo Finance daily closes", url: "https://finance.yahoo.com/quote/WKL.AS/history/" },
        response: "reinventing",
        responseWhy: "Ships AI and agentic modules in its health, tax and legal software",
      },
    ],
  },

  // Consulting
  {
    company: "Accenture",
    industry: "Consulting",
    speed: "on-the-clock",
    story:
      "The world's largest consultancy had its worst trading day on record as investors priced in AI shrinking the billable-hours engine.",
    changed:
      "Accenture sells large teams billed for analysis, implementation, and process work. AI agents compress exactly those hours, so slower bookings and a guidance cut were read as structural rather than cyclical, even as the firm sells AI transformation itself.",
    date: "June 18, 2026 (shares fell ~18% on a fiscal Q3 guidance cut)",
    confidence: "medium",
    note: "Multi-causal: the guidance also cited US federal cuts and Middle East disruption, and the quarter itself beat on revenue. IT-services peers fell the same day. It is reinventing as an AI integrator at the same time; the outcome is unresolved.",
    sources: [
      { label: "Accenture Q3 FY26 results (company)", url: "https://newsroom.accenture.com/news/2026/accenture-reports-third-quarter-fiscal-2026-results" },
      { label: "Bloomberg Law, Jun 2026", url: "https://news.bloomberglaw.com/business-and-practice/accentures-outlook-disappoints-in-uncertain-consultancy-market" },
    ],
    verified: "2026-11-13",
    signal: "market",
    region: "Global",
    markets: [
      {
        ticker: "ACN",
        name: "Accenture",
        exchange: "NYSE",
        currency: "USD",
        revenueBase: 61594,
        revenueBasePeriod: "FY2022 (to Aug 2022)",
        revenueNow: 74183,
        revenueNowPeriod: "FY2026 (to Aug 2026)",
        revenueSource: { label: "stockanalysis.com (compiled from annual reports)", url: "https://stockanalysis.com/stocks/acn/financials/" },
        priceBase: 300.93,
        priceBaseDate: "2022-11-30",
        priceNow: 249.95,
        priceNowDate: "2026-11-12",
        priceSource: { label: "Yahoo Finance daily closes", url: "https://finance.yahoo.com/quote/ACN/history/" },
        response: "reinventing",
        responseWhy: "Selling AI transformation as its growth line",
      },
    ],
  },
  {
    company: "Gartner",
    industry: "Research & Advisory",
    speed: "on-the-clock",
    story:
      "The firm that told every CIO what to think about technology lost about half its market value as clients started asking AI instead.",
    changed:
      "Gartner sells syndicated research and analyst access: packaged judgment that is largely a synthesis of what is knowable. AI research tools now produce that synthesis on demand, and IT budgets are being redirected to AI projects, so renewals for human advisory are under pressure.",
    date: "2025 (stock cut in half) → Feb 3, 2026 (shares fell 20%+ on 2026 guidance)",
    confidence: "medium",
    note: "Management blamed longer buying cycles and budget scrutiny, not AI by name; the AI link is the investor narrative. One-day drop figures conflict (21–31%) depending on the measure. In Q3 2026 contract value grew 2.5% (FX neutral) and Gartner raised its full-year outlook: slow growth, not decline.",
    sources: [
      { label: "Motley Fool, Jan 2026", url: "https://www.fool.com/investing/2026/01/15/why-gartner-stock-was-cut-in-half-in-2025" },
      { label: "TIKR, Feb 2026", url: "https://www.tikr.com/blog/gartner-nyse-stock-plunge-to-52-week-low-after-2026-revenue-guidance-misses-wall-street-expectations" },
      { label: "Gartner Q3 2026 results (company, SEC 8-K)", url: "https://www.sec.gov/Archives/edgar/data/0000749251/000074925126000305/it-09302026xex991.htm" },
    ],
    verified: "2026-11-13",
    signal: "market",
    region: "US",
    markets: [
      {
        ticker: "IT",
        name: "Gartner",
        exchange: "NYSE",
        currency: "USD",
        revenueBase: 5476,
        revenueBasePeriod: "FY2022",
        revenueNow: 6497,
        revenueNowPeriod: "FY2025",
        revenueSource: { label: "stockanalysis.com (compiled from annual reports)", url: "https://stockanalysis.com/stocks/it/financials/" },
        priceBase: 350.37,
        priceBaseDate: "2022-11-30",
        priceNow: 190.84,
        priceNowDate: "2026-11-12",
        priceSource: { label: "Yahoo Finance daily closes", url: "https://finance.yahoo.com/quote/IT/history/" },
        response: "none",
        responseWhy: "No AI repositioning documented in our sources",
      },
    ],
  },

  // Enterprise Software
  {
    company: "Salesforce",
    industry: "Enterprise Software",
    speed: "on-the-clock",
    story:
      "The company that invented the SaaS seat watched investors bet that AI agents will need fewer of them, and lost about 40% of its value in six months.",
    changed:
      "Per-seat pricing ties revenue to the number of humans using the software. If agents do the work of sales and service reps, seat counts shrink. Salesforce is shifting toward consumption pricing with Agentforce, but agent revenue is not yet large enough to settle the question.",
    date: "H1 2026 (stock down ~41%); major-bank downgrade May 2026",
    confidence: "medium",
    note: "Earnings kept beating while the stock fell, so this is a repricing of the model, not a revenue collapse. Agentforce revenue figures vary by definition across reports and are company-reported. The archetype of the 2026 'SaaSpocalypse' trade.",
    sources: [
      { label: "Motley Fool via Nasdaq, Jul 2026", url: "https://www.nasdaq.com/articles/why-salesforce-plunged-over-40-first-half-2026" },
      { label: "Yahoo Finance, May 2026", url: "https://finance.yahoo.com/markets/stocks/articles/bofa-slaps-salesforce-underperform-rating-153256535.html" },
    ],
    verified: "2026-11-13",
    signal: "market",
    region: "US",
    markets: [
      {
        ticker: "CRM",
        name: "Salesforce",
        exchange: "NYSE",
        currency: "USD",
        revenueBase: 31352,
        revenueBasePeriod: "FY2023 (to Jan 2023)",
        revenueNow: 41525,
        revenueNowPeriod: "FY2026 (to Jan 2026)",
        revenueSource: { label: "stockanalysis.com (compiled from annual reports)", url: "https://stockanalysis.com/stocks/crm/financials/" },
        priceBase: 160.25,
        priceBaseDate: "2022-11-30",
        priceNow: 217.57,
        priceNowDate: "2026-11-12",
        priceSource: { label: "Yahoo Finance daily closes", url: "https://finance.yahoo.com/quote/CRM/history/" },
        response: "reinventing",
        responseWhy: "Moving from per-seat to consumption pricing with Agentforce",
        caveat: "Fiscal year ends in January; the base year is the one containing Nov 2022.",
      },
    ],
  },

  // Software & IT Services
  {
    company: "Lovable",
    industry: "Software & IT Services",
    speed: "reinventing",
    story:
      "A Stockholm startup let non-programmers describe an app and get one, and became one of the fastest-growing software companies ever.",
    changed:
      "Building a web app used to mean hiring developers or an agency. Lovable's agent turns a plain-language prompt into a working full-stack app, so the buyer becomes the builder.",
    date: "Series A July 2025 ($1.8B valuation) → Series C Aug 2026 ($400M at $13.3B)",
    confidence: "medium",
    note: "Revenue run-rate (~$500M by June 2026) is company-reported and unaudited; app quality and retention at scale are unproven. Replit is a comparable AI-native in the same category.",
    sources: [
      { label: "Tech.eu, Aug 2026", url: "https://tech.eu/2026/08/12/lovables-valuation-doubles-to-13bn-as-raises-400m/" },
      { label: "The Next Web, Aug 2026", url: "https://thenextweb.com/news/lovable-400m-series-c-13-3bn-scaleup-europe-fund" },
    ],
    verified: "2026-11-13",
    signal: "revenue",
    region: "Europe",
    unplotted: "Private company: no public revenue or market value.",
  },
  {
    company: "Stack Overflow",
    industry: "Software & IT Services",
    speed: "on-the-clock",
    story:
      "The internet's answer desk for programmers saw new questions fall ~78% in a year as developers asked AI inside their editor instead.",
    changed:
      "Its moat was a network effect: people asked, experts answered, search sent traffic. AI coding assistants now answer inside the editor, so the question flow that fed the flywheel dried up. The company is pivoting to data licensing and private enterprise versions.",
    date: "July 2026: about 1,400 new questions a month, −78% year on year (peak 207,000/month in Mar 2014)",
    confidence: "medium",
    note: "The decline predates ChatGPT and partly reflects community culture; AI accelerated it. The business is reinventing while the community collapses: 'on the clock' for the company, close to 'gone' for the forum.",
    sources: [
      { label: "DevClass, Jan 2026", url: "https://devclass.com/2026/01/05/dramatic-drop-in-stack-overflow-questions-as-devs-look-elsewhere-for-help" },
      { label: "PPC Land, Aug 2026", url: "https://ppc.land/stack-overflow-drops-to-1-442-questions-in-july-down-99-from-2014-peak/" },
    ],
    verified: "2026-11-13",
    signal: "revenue",
    region: "Global",
    unplotted: "Owned by Prosus: no standalone revenue or market value.",
  },

  // Media & Publishing
  {
    company: "Ad-supported web publishers (AI search answers)",
    industry: "Media & Publishing",
    speed: "on-the-clock",
    story:
      "Publishers built on search traffic are watching AI answers at the top of the results page keep the reader and the click.",
    changed:
      "Ad- and affiliate-funded publishing depends on search referrals. AI summaries answer the query on the results page, so traffic falls even when the publisher's reporting is the source. In the UK, an industry study projects Google search traffic to leading publishers halving by Q3 2027.",
    date: "2024–2026 (Penske Media's suit filed Sept 2025, dismissed Sept 2026)",
    confidence: "medium",
    note: "Traffic-loss figures vary widely by study and method; the UK projection is a forecast. The Penske and Chegg antitrust suits over AI Overviews were dismissed in Sept 2026 (appealable). Sector exemplar; distinct from the content-farm entry, which is about cost, not referrals.",
    sources: [
      { label: "Press Gazette, Jul 2026", url: "https://pressgazette.co.uk/comment-analysis/google-search-traffic-to-leading-uk-publishers-set-to-halve-by-q3-2027/" },
      { label: "Axios, Sep 2025", url: "https://www.axios.com/2025/09/14/penske-media-sues-google-ai" },
      { label: "MobileSyrup, Oct 2026", url: "https://mobilesyrup.com/2026/10/02/judge-dismisses-antitrust-lawsuits-google-ai-overviews" },
    ],
    verified: "2026-11-13",
    signal: "revenue",
    region: "Global",
    unplotted: "A category, not one listed company.",
  },

  // Healthcare
  {
    company: "Abridge",
    industry: "Healthcare",
    speed: "reinventing",
    story:
      "An ambient AI scribe that listens to the doctor–patient conversation and drafts the note is spreading across America's largest health systems.",
    changed:
      "Clinical documentation consumed hours of physician time a day and fed burnout. Abridge turns the conversation itself into structured, billable notes inside the health record, displacing human scribes and dictation.",
    date: "Series E June 2025 ($300M at $5.3B) → $316M extension Apr 2026 at the same valuation; 300+ health systems reported 2026",
    confidence: "medium",
    note: "Health-system counts are company-reported. EHR vendors shipping their own scribes are the main competitive risk. Clinicians still sign every note.",
    sources: [
      { label: "Abridge, Jun 2025 (company)", url: "https://www.abridge.com/blog/series-e-media-recap" },
      { label: "HLTH, Aug 2026", url: "https://hlth.com/insights/news/abridge-expands-clinical-intelligence-ai-across-300-health-systems" },
      { label: "Fortune, Jun 2026", url: "https://fortune.com/2026/06/11/abridge-operating-system-medicine-nvidia-eli-lilly-artsight/" },
    ],
    verified: "2026-11-13",
    signal: "revenue",
    region: "US",
    unplotted: "Private company: no public revenue or market value.",
  },
  {
    company: "Radiologists",
    industry: "Healthcare",
    speed: "insulated",
    story:
      "AI's most famous job-loss prediction said to stop training radiologists. A decade later they are scarcer and better paid than ever.",
    changed:
      "Imaging AI is everywhere, with large departments running hundreds of models, but a licensed physician must sign the final read for Medicare and Medicaid to pay, and liability sits with that signature. AI made each radiologist faster; rising scan volumes absorbed the gain.",
    date: "2016 prediction → 2025–2026 (average pay ~$571K in 2025)",
    confidence: "high",
    note: "Insulated by licensure, reimbursement rules, and malpractice liability, plus a demand boom: caseloads rose ~25% from 2018 to early 2025. Pay figure from Medscape. The cleanest case of a profession whose output is gated by a signature.",
    sources: [
      { label: "Fortune, May 2026", url: "https://www.fortune.com/article/ai-godfather-radiologists-obsolete-salaries-up-to-571k-demand-growing/" },
      { label: "TechCrunch, May 2025", url: "https://techcrunch.com/2025/05/14/radiologists-arent-going-anywhere/" },
    ],
    verified: "2026-11-13",
    signal: "jobs",
    region: "US",
    unplotted: "A category, not one listed company.",
  },

  // Music
  {
    company: "Universal Music Group",
    industry: "Music",
    speed: "reinventing",
    story:
      "The world's biggest record label stopped suing an AI song generator and agreed to build a licensed AI music platform with it.",
    changed:
      "Generative music threatened to flood streaming with songs that need no label or catalog. UMG turned its catalog into licensed input: it settled with Udio and agreed on a walled-garden service where fans create under license. Warner followed with Udio and Suno.",
    date: "Oct 2025 (UMG–Udio settlement); Warner–Suno Nov 2025",
    confidence: "medium",
    note: "Financial terms undisclosed; the platform was slated for 2026 and its launch is not confirmed. The Shutterstock playbook (license the archive) applied to music.",
    sources: [
      { label: "AP via News4Jax, Oct 2025", url: "https://www.news4jax.com/business/2025/10/30/universal-music-and-ai-song-generator-udio-settle-lawsuit-and-partner-on-new-ai-music-platform/" },
      { label: "Music Business Worldwide, Nov 2025", url: "https://www.musicbusinessworldwide.com/warner-music-group-settles-with-suno-strikes-first-of-its-kind-deal-with-ai-song-generator/" },
    ],
    verified: "2026-11-13",
    signal: "revenue",
    region: "Global",
    markets: [
      {
        ticker: "UMG",
        name: "Universal Music Group",
        exchange: "Euronext Amsterdam",
        currency: "EUR",
        revenueBase: 10340,
        revenueBasePeriod: "FY2022",
        revenueNow: 12507,
        revenueNowPeriod: "FY2025",
        revenueSource: { label: "stockanalysis.com (compiled from annual reports)", url: "https://stockanalysis.com/quote/ams/UMG/financials/" },
        priceBase: 22.5,
        priceBaseDate: "2022-11-30",
        priceNow: 17.17,
        priceNowDate: "2026-11-12",
        priceSource: { label: "Yahoo Finance daily closes", url: "https://finance.yahoo.com/quote/UMG.AS/history/" },
        response: "reinventing",
        responseWhy: "Settled with an AI music generator and licensed its catalog",
      },
    ],
  },

  // Travel
  {
    company: "Booking Holdings & Expedia",
    industry: "Travel",
    speed: "on-the-clock",
    story:
      "Online travel agents beat earnings and still sold off, because investors fear the next booking starts with an AI agent, not a search box.",
    changed:
      "OTAs own the top of the travel funnel and charge hotels commission for demand. Shopping agents that book on a traveler's behalf could take that funnel. Expedia plugged into the new agents early. Booking kept Booking.com out, let its Asian brand Agoda join in Singapore and Japan, and is testing its own AI travel agent. Different bets on the same threat.",
    date: "Feb 2026 (Booking fell after a Q4 beat) → Sept 2026 (both down ~17–18% in a month after a new shopping agent launched) → Nov 2026 (both beat on Q3 bookings)",
    confidence: "medium",
    note: "Booking says AI-model referrals are well under 1% of Booking.com room nights; Expedia says agent traffic is small but high-intent (both company statements, Q3 2026). The threat is priced into the stocks, not yet visible in results: Q3 2026 gross bookings rose 10% at Booking and 11% at Expedia. Stock-move figures come from secondary financial outlets.",
    sources: [
      { label: "24/7 Wall St., Oct 2026", url: "https://247wallst.com/investing/2026/10/01/how-booking-holdings-and-expedia-are-taking-opposite-bets-on-ai-shopping-agents/" },
      { label: "StockStory via Finviz, Mar 2026", url: "https://finviz.com/news/331802/booking-expedia-travelzoo-tripadvisor-shares-soar-as-openai-steps-back-from-direct-chatgpt-bookings" },
      { label: "Skift, Oct 2026", url: "https://skift.com/?p=846034" },
      { label: "PYMNTS, Nov 2026", url: "https://www.pymnts.com/earnings/2026/expedia-says-travelers-plan-with-ai-agents-but-book-direct/" },
      { label: "Stock Titan, Nov 2026", url: "https://stocktitan.net/articles/booking-holdings-q3-2026-earnings-ftc-900-million-revenue-cut" },
    ],
    verified: "2026-11-13",
    signal: "market",
    region: "Global",
    markets: [
      {
        ticker: "BKNG",
        name: "Booking Holdings",
        exchange: "NASDAQ",
        currency: "USD",
        revenueBase: 17090,
        revenueBasePeriod: "FY2022",
        revenueNow: 26917,
        revenueNowPeriod: "FY2025",
        revenueSource: { label: "stockanalysis.com (compiled from annual reports)", url: "https://stockanalysis.com/stocks/bkng/financials/" },
        priceBase: 83.178,
        priceBaseDate: "2022-11-30",
        priceNow: 161.2,
        priceNowDate: "2026-11-12",
        priceSource: { label: "Yahoo Finance daily closes", url: "https://finance.yahoo.com/quote/BKNG/history/" },
        response: "none",
        responseWhy: "Keeps Booking.com off third-party AI agents; Agoda joined one in Asia",
        caveat: "Baseline price adjusted for the 25:1 split of April 2026.",
      },
      {
        ticker: "EXPE",
        name: "Expedia",
        exchange: "NASDAQ",
        currency: "USD",
        revenueBase: 11667,
        revenueBasePeriod: "FY2022",
        revenueNow: 14733,
        revenueNowPeriod: "FY2025",
        revenueSource: { label: "stockanalysis.com (compiled from annual reports)", url: "https://stockanalysis.com/stocks/expe/financials/" },
        priceBase: 106.84,
        priceBaseDate: "2022-11-30",
        priceNow: 261.05,
        priceNowDate: "2026-11-12",
        priceSource: { label: "Yahoo Finance daily closes", url: "https://finance.yahoo.com/quote/EXPE/history/" },
        response: "reinventing",
        responseWhy: "Plugging its inventory into AI shopping agents",
      },
    ],
  },
  // ---------- Added November 2026 ----------
  {
    company: "Fiverr",
    industry: "Freelance Marketplaces",
    speed: "on-the-clock",
    story:
      "A marketplace for small freelance jobs lost a quarter of its buyers in a year, and says the shift from search to AI is the reason.",
    changed:
      "Fiverr sold small, well-defined tasks (a logo, a translation, a blog post) and found its buyers through Google search. AI now does many of those tasks directly, and buyers who ask an AI assistant never reach a search results page. Fiverr cut about 30% of staff in Sept 2025 to become 'AI-first' and is moving toward larger, managed projects.",
    date: "Sept 2025 (30% layoff) → Oct 2026 (Q3 revenue −15.8%, active buyers −25.8%)",
    confidence: "high",
    note:
      "Q3 2026 revenue was $90.9M, down 15.8% year on year; marketplace revenue fell 24.7% and annual active buyers fell to 2.4M from 3.3M. Fiverr guides Q4 revenue down 20–25% and says 'the shift from search to AI-driven discovery' will drive a steeper decline than it expected. Its services segment grew 3.4%. The causal link to AI is the company's own explanation.",
    sources: [
      { label: "Fiverr Q3 2026 results (GlobeNewswire via Finviz)", url: "https://finviz.com/news/411091/fiverr-announces-third-quarter-2026-results" },
      { label: "Staffing Industry Analysts, Oct 2026", url: "https://www.staffingindustry.com/news/global-daily-news/fiverr-q3-revenue-falls-158-amid-downturn-in-marketplace-segment" },
      { label: "The Register, Sept 2025", url: "https://www.theregister.com/2025/09/16/fiverr_ai_layoff/" },
    ],
    verified: "2026-11-13",
    signal: "revenue",
    region: "Global",
    markets: [
      {
        ticker: "FVRR",
        name: "Fiverr",
        exchange: "NYSE",
        currency: "USD",
        revenueBase: 337.37,
        revenueBasePeriod: "FY2022",
        revenueNow: 430.91,
        revenueNowPeriod: "FY2025",
        revenueSource: { label: "stockanalysis.com (compiled from annual reports)", url: "https://stockanalysis.com/stocks/fvrr/financials/" },
        priceBase: 35.17,
        priceBaseDate: "2022-11-30",
        priceNow: 7.95,
        priceNowDate: "2026-11-12",
        priceSource: { label: "Yahoo Finance daily closes", url: "https://finance.yahoo.com/quote/FVRR/history/" },
        response: "restructuring",
        responseWhy: "Cut ~30% of staff (Sept 2025) to become 'AI-first'",
        caveat: "Annual revenue still grew through FY2025; the 2026 decline is in quarterly results, not yet in a full fiscal year.",
      },
    ],
  },
  {
    company: "CI&T",
    industry: "Software & IT Services",
    speed: "reinventing",
    story:
      "A Brazilian IT services firm is growing revenue faster than headcount by selling AI-built work on value-based contracts instead of billable hours.",
    changed:
      "IT outsourcing billed by the person-hour, so AI coding tools threatened its revenue directly. CI&T built its own AI delivery platform (CI&T FLOW) and moved clients to value-based pricing. Revenue grew while headcount stayed flat. The same pressure is pushing Globant and Indian IT the other way.",
    date: "2025–2026 (double-digit growth through Q3 2026, reported Nov 2026)",
    confidence: "medium",
    note:
      "Q3 2026 revenue was US$146.3M, up 14.9% (11.2% at constant currency), with average headcount flat year on year and revenue per employee up 9.9%. The company says value-based commercial models and CI&T FLOW let revenue grow faster than its team (company claim). The release does not break out AI revenue, so how much of the growth AI explains is the company's own framing.",
    sources: [
      { label: "CI&T Q3 2026 results (SEC 6-K)", url: "https://www.sec.gov/Archives/edgar/data/0001868995/000129281426005237/cintfs3q26_6k.htm" },
    ],
    verified: "2026-11-13",
    signal: "revenue",
    region: "LATAM",
    markets: [
      {
        ticker: "CINT",
        name: "CI&T",
        exchange: "NYSE",
        currency: "USD",
        revenueBase: 424.11,
        revenueBasePeriod: "FY2022",
        revenueNow: 489.65,
        revenueNowPeriod: "FY2025",
        revenueSource: { label: "stockanalysis.com (compiled from annual reports)", url: "https://stockanalysis.com/stocks/cint/financials/" },
        priceBase: 7.4,
        priceBaseDate: "2022-11-30",
        priceNow: 3.09,
        priceNowDate: "2026-11-12",
        priceSource: { label: "Yahoo Finance daily closes", url: "https://finance.yahoo.com/quote/CINT/history/" },
        response: "reinventing",
        responseWhy: "Sells AI-built work through its own platform on value-based contracts",
        caveat: "CI&T reported in Brazilian reais for earlier years; both revenue figures are the data source's US-dollar series.",
      },
    ],
  },
  {
    company: "Fin (formerly Intercom)",
    industry: "Customer Support",
    speed: "reinventing",
    story:
      "A 15-year-old help-desk software company renamed itself after its AI agent, then agreed to sell to Salesforce for about $3.6B.",
    changed:
      "Help-desk software was priced per support agent seat. Once an AI agent could resolve most tickets, a business built on seats would shrink as its own product worked. Intercom made the agent the business: it priced Fin per resolution, renamed the company Fin in May 2026, and kept 'Intercom' only as the name of the help desk.",
    date: "Fin launched 2023 → renamed May 2026 → Salesforce deal signed June 2026",
    confidence: "medium",
    note:
      "Salesforce says Fin has 30,000+ business customers and resolves on average 76% of support volume without a human (company figures). The deal was expected to close in Salesforce's fiscal Q4 2027, subject to regulators; we have not confirmed it has closed. ARR figures for Fin vary by outlet and are left out. Compare Sierra, which started as an AI-native; Fin is an incumbent that turned itself into one.",
    sources: [
      { label: "Fin blog: 'Today Intercom becomes Fin', May 2026", url: "https://intercom.com/blog/today-intercom-becomes-fin" },
      { label: "TNW, June 2026", url: "https://thenextweb.com/news/salesforce-acquires-fin-intercom-3-6-billion" },
    ],
    verified: "2026-11-13",
    signal: "revenue",
    region: "US",
    unplotted: "Private company, being acquired by Salesforce: no public revenue or market value.",
  },
  {
    company: "Airline pilots",
    industry: "Aviation",
    speed: "insulated",
    story:
      "Europe's air-safety regulator studied flying airliners with one pilot in the cockpit and concluded it cannot yet be shown to be as safe as two.",
    changed:
      "Cockpit automation has advanced for decades, and manufacturers explored letting one pilot rest during cruise while software watches the other. Rules set crew size, not technology. EASA's research found an equivalent level of safety 'cannot be sufficiently demonstrated' with today's cockpits, so the two-pilot requirement stands.",
    date: "EASA study 2022–2025; conclusion June 2025",
    confidence: "medium",
    note:
      "Insulated by regulation, the clearest kind: a safety agency, not the market, decides crew size. EASA says a future change would need 'smart cockpits' that monitor the pilot and back up the aircraft automatically. The automation at stake is broader than generative AI, so this is a test of the insulated column rather than a pure AI story.",
    sources: [
      { label: "EASA research project eMCO-SiPO", url: "https://www.easa.europa.eu/en/research-projects/emco-sipo-extended-minimum-crew-operations-single-pilot-operations-safety-risk" },
      { label: "FLYING Magazine, June 2025", url: "https://www.flyingmag.com/easa-pauses-single-pilot-research/" },
    ],
    verified: "2026-11-13",
    signal: "jobs",
    region: "Europe",
    unplotted: "A profession, not one listed company.",
  },
] as const satisfies readonly Exemplar[];

export type Company = (typeof EXEMPLARS)[number]["company"];
export type Industry = (typeof EXEMPLARS)[number]["industry"];
type WithMarkets = Extract<(typeof EXEMPLARS)[number], { markets: readonly unknown[] }>;
export type Ticker = WithMarkets["markets"][number]["ticker"];

/** What changed in each re-verification, newest first. Rendered as a strip above the index. */
export const CHANGELOG = [
  {
    date: "2026-11-13",
    summary:
      "4 added (Fiverr, CI&T, Fin, airline pilots) · 2 corrections (Wall Street research sources; RELX and Wolters Kluwer now marked reinventing) · Q3 results folded in · prices to 12 Nov · every entry re-verified",
  },
  {
    date: "2026-10-30",
    summary:
      "15 added · 4 moved (Getty and Shutterstock to gone; Coursera and law-firm juniors to on the clock) · 2 removed (Convoy, HeyMilo) · every entry re-verified and sourced",
  },
  { date: "2026-06", summary: "First edition: 31 exemplars across 14 industries" },
] as const satisfies readonly { date: string; summary: string }[];

export type ChangelogDate = (typeof CHANGELOG)[number]["date"];

/* ---- Derived, shared by the index page and the landing card, so neither can drift from the data ---- */

/** "Last updated": the newest per-entry `verified` date (ISO). */
export const LAST_UPDATED: string = EXEMPLARS.map((e) => e.verified).sort().at(-1) ?? "";

/** An ISO day as a long date in the reader's locale (en-US, es-MX, pt-BR). */
export function formatDay(iso: string, locale = "en-US"): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString(locale, { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
}

/** How many exemplars sit at a given speed. */
export function countBySpeed(speed: Speed): number {
  return EXEMPLARS.filter((e) => e.speed === speed).length;
}
