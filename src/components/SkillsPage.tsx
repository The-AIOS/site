import { Logo } from "@/components/Logo";
import { ThemeToggle } from "@/components/ThemeToggle";
import { CopyBlock } from "@/components/CopyBlock";
import { HarnessFig } from "@/components/HarnessFig";
import { LADDER, SKILLS, SKILLS_PATHS } from "@/data/skills";
import { LOCALE_LABELS, LOCALES, type Locale } from "@/messages";
import "./skills.css";

/* /climb — unlisted. Nothing on the site links here; see src/data/skills.ts. */
export function SkillsPage({ locale }: { locale: Locale }) {
  const c = SKILLS[locale];
  const next = LOCALES[(LOCALES.indexOf(locale) + 1) % LOCALES.length];
  let n = 0;

  return (
    <div>
      <header className="site-header">
        <div
          className="container"
          style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 60 }}
        >
          <a href={locale === "en" ? "/" : `/${locale}`} className="sk-brand">
            <Logo size={20} />
            The AIOS
          </a>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            {/* Plain <a>, never next/link — see LocaleSwitcher for the crash it prevents. */}
            <a
              href={SKILLS_PATHS[next]}
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
          <div className="container sk-narrow sk-hero-inner">
            <HarnessFig locale={locale} />
            <p className="eyebrow">{c.eyebrow}</p>
            <h1 className="sk-h1">
              {c.h1[0]}
              <span className="sk-accent">{c.h1[1]}</span>
              {c.h1[2]}
            </h1>
            <p className="sk-lede">{c.lede}</p>

            <div className="sk-rules">
              {[c.rules.starts, c.rules.ends].map(([h, p]) => (
                <div key={h} className="sk-rule">
                  <h2>{h}</h2>
                  <p>{p}</p>
                </div>
              ))}
            </div>
            <p className="sk-honest">{c.honest}</p>
          </div>
        </section>

        <div className="container sk-narrow sk-ladder">
          {LADDER.map(({ rung, cards }, ri) => (
            <section key={rung} className="sk-rung" aria-labelledby={`rung-${rung}`}>
              <div className="sk-rung-head">
                <span className="sk-rung-num">{ri === 0 ? "00" : `${c.labels.rung} ${ri}`}</span>
                <h2 id={`rung-${rung}`}>{c.rungs[rung].name}</h2>
                <p>{c.rungs[rung].proves}</p>
              </div>

              <ol className="sk-cards">
                {cards.map(({ id, station }) => {
                  n += 1;
                  const k = c.cards[id];
                  const num = String(n).padStart(2, "0");
                  return (
                    <li key={id} id={num} className="sk-card">
                      <div className="sk-card-top">
                        <span className="sk-num">{num}</span>
                        {station ? (
                          <span className="sk-station">
                            {c.labels.station} {station}
                          </span>
                        ) : null}
                      </div>
                      <h3>{k.name}</h3>
                      <p className="sk-promise">{k.promise}</p>
                      <CopyBlock text={k.paste} label={c.labels.copy} done={c.labels.copied} />
                      {k.hint ? <p className="sk-hint">{k.hint}</p> : null}
                      <dl className="sk-meta">
                        <div className="sk-meta-gets">
                          <dt>{c.labels.gets}</dt>
                          <dd>{k.gets}</dd>
                        </div>
                        <div>
                          <dt>{c.labels.time}</dt>
                          <dd>{k.time}</dd>
                        </div>
                        <div>
                          <dt>{c.labels.needs}</dt>
                          <dd>{k.needs}</dd>
                        </div>
                      </dl>
                    </li>
                  );
                })}
              </ol>
            </section>
          ))}

          <p className="sk-close">{c.close}</p>
          <p className="sk-back">
            <a href={locale === "en" ? "/" : `/${locale}`}>{c.back}</a>
          </p>
        </div>
      </main>
    </div>
  );
}
