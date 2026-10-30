/* Emergent business opportunities — the section below the index.
 *
 * The four-way framing is Google AI Mode's (30 Oct 2026), credited in words
 * because its share link does not open for other people. The evidence is ours:
 * every incident below was checked against a primary source or reputable
 * reporting, and the ones that did not hold are listed as left out. */

interface Link {
  label: string;
  url: string;
}

interface Opportunity {
  n: string;
  title: string;
  verdict: string;
  thesis: string;
  evidence: { text: string; links: Link[] }[];
  inTheIndex: string;
  ours?: Link;
}

const OPPORTUNITIES: Opportunity[] = [
  {
    n: "01",
    title: "Verifiable AI",
    verdict: "Holds",
    thesis:
      "Prove what code and which model actually ran, instead of trusting that the package you installed is the one its maintainers published.",
    evidence: [
      {
        text: "On 21 Oct a poisoned LiteLLM release (1.107.0), a widely used open-source gateway to AI models, was live on PyPI for about two hours. It stole credentials and secrets from the environment of the machines that installed it. Earlier releases and the official source were clean.",
        links: [
          { label: "LiteLLM incident report", url: "https://docs.litellm.ai/blog/security-incident-oct-21-2026" },
          {
            label: "Microsoft Security analysis",
            url: "https://www.microsoft.com/en-us/security/blog/2026/10/23/inside-the-litellm-1-107-0-supply-chain-compromise-credential-theft-through-python-startup-hooks/",
          },
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
        text: "In October, the developer platform Railway told users to revoke their secrets after an attacker reached encrypted environment variables; its preliminary report says the aim was AI-provider API keys. Researchers have documented stolen keys running up AI compute bills since 2024 (“LLMjacking”).",
        links: [
          { label: "Railway preliminary report", url: "https://blog.railway.com/p/preliminary-report-october-security-incident" },
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
];

const LEFT_OUT = [
  "“Automated, multi-agent hacks running up thousands of dollars in stolen API compute credits” as a #BlackOctober event: the abuse of stolen AI keys is documented, but we found no source for this incident or a dollar figure.",
  "Real-time deepfakes bypassing MFA as part of #BlackOctober: the trend is real (above), the link to October is not sourced.",
  "eMudhra's weak keys as a failure of AI-generated code: the company's own statement says otherwise.",
];

export default function EmergentOpportunities() {
  return (
    <section className="eo" aria-labelledby="eo-title">
      <div className="container">
        <p className="eyebrow">
          <span className="accent">●</span> #BlackOctober · what the disruption opens up
        </p>
        <h2 id="eo-title" className="eo-title">
          Emergent business opportunities
        </h2>
        <p className="eo-lede">
          Around 19–22 Oct 2026 a cluster of separate security events landed within days of each other:
          critical PHP flaws that{" "}
          <a
            href="https://www.cisa.gov/news-events/alerts/2026/10/21/critical-vulnerabilities-php-require-immediate-patching"
            target="_blank"
            rel="noopener noreferrer"
          >
            CISA
          </a>{" "}
          told organizations to patch immediately, a poisoned AI-gateway release, a cloud platform&apos;s
          secrets breach, and a certificate authority with broken keys. The press called it #BlackOctober.
          It was not one campaign, and it is not disruption by itself. What it exposed is where the next
          businesses get built. The four opportunities below are{" "}
          <b>as framed by Google&apos;s AI Mode, 30 Oct 2026</b>; the evidence under each is ours, checked
          against primary sources.
        </p>

        <div className="eo-grid">
          {OPPORTUNITIES.map((o) => (
            <article key={o.n} className="eo-card">
              <div className="eo-card-head">
                <span className="eo-n">{o.n}</span>
                <span className="eo-verdict">{o.verdict}</span>
              </div>
              <h3>{o.title}</h3>
              <p className="eo-thesis">{o.thesis}</p>
              <ul className="eo-evidence">
                {o.evidence.map((ev) => (
                  <li key={ev.text}>
                    {ev.text}{" "}
                    <span className="eo-links">
                      {ev.links.map((l, i) => (
                        <span key={l.url}>
                          {i > 0 && " · "}
                          <a href={l.url} target="_blank" rel="noopener noreferrer">
                            {l.label}
                          </a>
                        </span>
                      ))}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="eo-index">
                <b>In the index:</b> {o.inTheIndex}
              </p>
              {o.ours && (
                <a className="eo-ours" href={o.ours.url} target="_blank" rel="noopener noreferrer">
                  {o.ours.label} →
                </a>
              )}
            </article>
          ))}
        </div>

        <div className="eo-leftout">
          <h3>What we left out</h3>
          <p>Google&apos;s answer cited these; we could not verify them, so they are not evidence here.</p>
          <ul>
            {LEFT_OUT.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
