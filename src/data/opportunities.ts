/* Emergent business opportunities — the section below the Disruption Index.
 *
 * The four-way framing is Google AI Mode's (30 Oct 2026), credited in words
 * because its share link does not open for other people. The evidence is ours:
 * every incident below was checked against a primary source or reputable
 * reporting, and the ones that did not hold are listed as left out.
 *
 * Links (and the English text) live here; ES/PT translate the text by id in
 * src/data/di-copy/. Each locale's `evidence` must have one entry per item below —
 * the page throws at build time if the counts disagree. */

export interface Link {
  label: string;
  url: string;
}

export interface Opportunity {
  n: string;
  title: string;
  verdict: string;
  thesis: string;
  evidence: readonly { text: string; links: readonly Link[] }[];
  inTheIndex: string;
  ours?: Link;
}

export const OPPORTUNITIES = [
  {
    n: "01",
    title: "Verifiable AI",
    verdict: "Holds",
    thesis:
      "Prove what code and which model actually ran, instead of trusting that the package you installed is the one its maintainers published.",
    evidence: [
      {
        text: "On 21 Oct a poisoned LiteLLM release (1.107.0), a widely used open-source gateway to AI models, was live on PyPI and Docker for about two hours. It stole credentials and secrets from the machines that installed it. The official source was clean: the build came from a lookalike fork, and the project's own release pipeline signed and published it.",
        links: [
          { label: "LiteLLM incident report", url: "https://docs.litellm.ai/blog/security-incident-oct-21-2026" },
          { label: "LiteLLM root-cause analysis", url: "https://docs.litellm.ai/blog/security-incident-oct-21-2026-attack-chain" },
          {
            label: "Microsoft Security analysis",
            url: "https://www.microsoft.com/en-us/security/blog/2026/10/23/inside-the-litellm-1-107-0-supply-chain-compromise-credential-theft-through-python-startup-hooks/",
          },
        ],
      },
      {
        text: "On 9 Nov NEAR AI disclosed that an attacker used a flaw in SGLang, an open-source engine for serving AI models, to run code on one of its inference servers. Requests on that server, including some in its confidential mode, may have been visible. Its report notes that hardware isolation does not protect against a flaw in the software running inside it.",
        links: [
          { label: "NEAR AI incident report", url: "https://near.ai/blog/security-incident-report-sglang-vulnerability" },
          { label: "Decrypt", url: "https://decrypt.co/382965/near-ai-breach-exposes-user-details-data-ai-agents" },
        ],
      },
      {
        text: "The tooling already exists: OpenSSF's model signing, built on Sigstore, signs models the way open source signs software.",
        links: [{ label: "Sigstore: model transparency v1.0", url: "https://blog.sigstore.dev/model-transparency-v1.0" }],
      },
    ],
    inTheIndex:
      "Every reinventor in the index sells AI output a customer has to trust: Abridge's clinical notes, Thomson Reuters' CoCounsel drafts, Mercado Libre's support answers.",
  },
  {
    n: "02",
    title: "Agentic governance: proof-pair architectures",
    verdict: "Holds",
    thesis:
      "An API key says who holds it, not what an agent was allowed to do. Bind each agent to an accountable person with a signed, bounded mandate before it acts, and a verifiable receipt after.",
    evidence: [
      {
        text: "India's CERT-In issued a critical advisory on 15 Oct, “AI Agents as Attack Vectors”: agents reached live systems at Indian organizations through exposed credentials and over-broad permissions, and the organizations did not detect it themselves.",
        links: [
          {
            label: "CERT-In CIAD-2026-0049",
            url: "https://www.cert-in.org.in/s2cMainServlet?VLCODE=CIAD-2026-0049&pageid=PUBVLNOTES02",
          },
          {
            label: "Deccan Chronicle",
            url: "https://www.deccanchronicle.com/artificial-intelligence/cert-in-issues-critical-alert-after-autonomous-ai-agents-access-live-systems-of-indian-orgs-1996324",
          },
        ],
      },
      {
        text: "In October an attacker reached encrypted environment variables at the developer platform Railway. Its final report (10 Nov) says AI-provider API keys were the primary target and estimates unauthorized spend on the stolen keys at about $740,000. Researchers have documented stolen keys running up AI compute bills since 2024 (“LLMjacking”).",
        links: [
          { label: "Railway incident report", url: "https://blog.railway.com/p/incident-report-october-security-incident" },
          {
            label: "TechCrunch",
            url: "https://techcrunch.com/2026/10/22/developer-platform-railway-urges-all-users-to-revoke-secret-keys-after-cyberattack/",
          },
          {
            label: "Sysdig: LLMjacking",
            url: "https://www.sysdig.com/blog/llmjacking-stolen-cloud-credentials-used-in-new-ai-attack",
          },
        ],
      },
      {
        text: "Standards bodies are on it: NIST's NCCoE project on software and AI agent identity and authorization, and OWASP's Top 10 for agentic applications.",
        links: [
          {
            label: "NIST NCCoE",
            url: "https://www.nccoe.nist.gov/projects/software-and-ai-agent-identity-and-authorization",
          },
          {
            label: "OWASP agentic Top 10",
            url: "https://genai.owasp.org/2025/12/09/owasp-top-10-for-agentic-applications-the-benchmark-for-agentic-security-in-the-age-of-autonomous-ai/",
          },
        ],
      },
    ],
    inTheIndex:
      "Agents already act on customers' behalf here: Sierra resolving refunds, Mercado Libre answering fintech customers, Salesforce pricing by the agent instead of the seat.",
    ours: { label: "Our open spec: the proof pair", url: "https://www.the-aios.org/proof-pair/" },
  },
  {
    n: "03",
    title: "Decentralized identity for public and private use",
    verdict: "Holds",
    thesis:
      "When a face on a video call can be generated live, identity has to be a credential you can verify cryptographically, held in a wallet, not a database someone can breach.",
    evidence: [
      {
        text: "In 2024 a finance employee at the engineering firm Arup paid out about US$25M after a video call in which every other participant was a deepfake.",
        links: [{ label: "CNN", url: "https://edition.cnn.com/2024/05/16/tech/arup-deepfake-scam-loss-hong-kong-intl-hnk" }],
      },
      {
        text: "The World Economic Forum's 2026 report names injection attacks, synthetic video fed straight into verification flows, as a growing threat to identity checks.",
        links: [
          {
            label: "WEF: Unmasking Cybercrime",
            url: "https://reports.weforum.org/docs/WEF_Unmasking_Cybercrime_Strengthening_Digital_Identity_Verification_against_Deepfakes_2026.pdf",
          },
        ],
      },
      {
        text: "Regulation is forcing the shift: under eIDAS 2.0 every EU member state must offer citizens a digital identity wallet.",
        links: [
          {
            label: "EUR-Lex: European Digital Identity framework",
            url: "https://eur-lex.europa.eu/EN/legal-content/summary/the-establishment-of-the-european-digital-identity-framework-including-the-provision-of-european-digital-identity-wallets-and-trust-services.html",
          },
        ],
      },
    ],
    inTheIndex:
      "Banks and fintechs in the index verify identities at scale: Standard Chartered, Mercado Libre's Mercado Pago, Klarna.",
  },
  {
    n: "04",
    title: "Deterministic auditing of generated code and keys",
    verdict: "Holds, with a correction",
    thesis:
      "As agents write more of the code, the checks that catch a fatal flaw must be deterministic and run before release: weak keys, bad randomness, logic a reviewer never read.",
    evidence: [
      {
        text: "On 17 Oct a researcher found that eight intermediate certificate keys at the Indian certificate authority eMudhra were trivially weak; browsers distrusted them and eMudhra announced a voluntary wind-down of its public TLS business. Correction: eMudhra attributes it to a key-generation script error, and AI appears only as a tool the researcher used to find the flaw. No primary source blames AI-generated code.",
        links: [
          { label: "eMudhra statement", url: "https://emudhra.com/en/post/certificate-security-incident" },
          {
            label: "Mozilla Security blog",
            url: "https://blog.mozilla.org/security/2026/10/20/protecting-firefox-users-following-the-compromise-of-emudhra-intermediate-certificates/",
          },
          {
            label: "The Register",
            url: "https://www.theregister.com/security/2026/10/20/indian-certification-authority-emudhras-private-keys-compromised-one-of-them-was-the-number-4/5304312",
          },
        ],
      },
    ],
    inTheIndex:
      "Cursor and Lovable put code-writing agents in the hands of millions of developers and non-developers: more code ships than anyone reads.",
  },
] as const satisfies readonly Opportunity[];

export type OpportunityId = (typeof OPPORTUNITIES)[number]["n"];

export const LEFT_OUT = [
  "“Automated, multi-agent hacks running up thousands of dollars in stolen API compute credits” as a #BlackOctober event: the abuse of stolen AI keys is documented, but we found no source for this incident; the one dollar figure we found (Railway's estimate of about $740,000) is for stolen keys, not multi-agent hacks.",
  "Real-time deepfakes bypassing MFA as part of #BlackOctober: the trend is real (above), the link to October is not sourced.",
  "eMudhra's weak keys as a failure of AI-generated code: the company's own statement says otherwise.",
] as const;
