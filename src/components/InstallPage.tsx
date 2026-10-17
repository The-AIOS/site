import { Logo } from "@/components/Logo";
import { ThemeToggle } from "@/components/ThemeToggle";
import { CopyBlock } from "@/components/CopyBlock";
import { DownloadPanel } from "@/components/DownloadCTA";
import { SETUP_LINE } from "@/components/HomePage";
import { CONTENT } from "@/content";
import { INSTALL, INSTALL_PATHS } from "@/data/install";
import { SKILLS, SKILLS_PATHS } from "@/data/skills";
import { LOCALE_LABELS, LOCALES, type Locale } from "@/messages";
import "./skills.css";
import "./install.css";

/* /install — unlisted. Nothing on the site links here; see src/data/install.ts.
 * Shares the climb's header, hero and paste-block styles (skills.css) so the two
 * workshop pages read as one set. */
export function InstallPage({ locale }: { locale: Locale }) {
  const c = INSTALL[locale];
  const site = CONTENT[locale];
  const next = LOCALES[(LOCALES.indexOf(locale) + 1) % LOCALES.length];
  const home = locale === "en" ? "/" : `/${locale}`;
  /* The climb's base-camp move, verbatim — the same paste the climb opens with. */
  const baseCamp = SKILLS[locale].cards.name.paste;

  const paths = [
    { id: "app", name: c.app.name, pill: site.setup.paths[1].pill, steps: c.app.steps },
    { id: "cli", name: c.cli.name, pill: site.setup.paths[0].pill, steps: c.cli.steps },
  ] as const;

  return (
    <div>
      <header className="site-header">
        <div
          className="container"
          style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 60 }}
        >
          <a href={home} className="sk-brand">
            <Logo size={20} />
            The AIOS
          </a>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            {/* Plain <a>, never next/link — see LocaleSwitcher for the crash it prevents. */}
            <a
              href={INSTALL_PATHS[next]}
              hrefLang={next}
              className="icon-btn sk-locale"
              aria-label={`Language: ${LOCALE_LABELS[locale].label} — switch to ${LOCALE_LABELS[next].label}`}
              title={`Switch to ${LOCALE_LABELS[next].label}`}
            >
              {LOCALE_LABELS[locale].code}
            </a>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main>
        <section className="hero-glow sk-hero">
          <div className="container sk-narrow">
            <p className="eyebrow">{c.eyebrow}</p>
            <h1 className="sk-h1">
              {c.h1[0]}
              <span className="sk-accent">{c.h1[1]}</span>
              {c.h1[2]}
            </h1>
            <p className="sk-lede">{c.lede}</p>
          </div>
        </section>

        <div className="container sk-narrow in-body">
          {/* 1 — pre-work check */}
          <section aria-labelledby="in-needs">
            <h2 id="in-needs" className="in-h2">{c.needsTitle}</h2>
            <div className="sk-rules in-needs">
              {c.needs.map((n) => (
                <div key={n.t} className="sk-rule">
                  <h3>{n.t}</h3>
                  <p>{n.b}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 2 — the fork, mirroring the home page: two doors onto the same system */}
          <section aria-labelledby="in-paths">
            <h2 id="in-paths" className="in-h2">{c.pathsTitle}</h2>
            <div className="in-paths">
              {paths.map((p) => (
                <article key={p.id} className="sk-card in-path" aria-labelledby={`in-${p.id}`}>
                  <span className="sk-station in-pill">{p.pill}</span>
                  <h3 id={`in-${p.id}`}>{p.name}</h3>
                  <ol className="in-steps">
                    {p.steps.map((s, i) => (
                      <li key={i} className="in-step">
                        <span className="in-step-num" aria-hidden="true">{i + 1}</span>
                        <div className="in-step-body">
                          <p>{s}</p>
                          {p.id === "app" && i === 0 ? (
                            <>
                              <div className="in-download">
                                <DownloadPanel copy={site.downloads} />
                              </div>
                              <p className="sk-hint">{site.downloads.soonBody}</p>
                            </>
                          ) : null}
                          {p.id === "cli" && i === 1 ? (
                            <CopyBlock text={SETUP_LINE} label={c.labels.copy} done={c.labels.copied} />
                          ) : null}
                        </div>
                      </li>
                    ))}
                  </ol>
                </article>
              ))}
            </div>
          </section>

          {/* 3 — the one verifiable check: the climb's base camp */}
          <section aria-labelledby="in-done" className="sk-card in-done">
            <svg className="sk-st-icon" viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="12" cy="12" r="9" />
              <path d="M8 12.5l2.75 2.75L16 10" />
            </svg>
            <h2 id="in-done">{c.done.title}</h2>
            <p className="sk-promise">{c.done.body}</p>
            <p className="sk-hint in-how">{c.done.how}</p>
            <CopyBlock text={baseCamp} label={c.labels.copy} done={c.labels.copied} />
            <p className="sk-hint">{c.done.after}</p>
          </section>

          {/* 4 — forward only. The climb does not link back here. */}
          <section className="in-next">
            <p className="sk-close">{c.next.lead}</p>
            <p className="in-next-cta">
              <a href={SKILLS_PATHS[locale]} className="btn-primary">{c.next.cta}</a>
            </p>
            <p className="sk-back">
              <a href={home}>{c.back}</a>
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
