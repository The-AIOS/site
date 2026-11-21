/* The Discord invite, drawn the way Discord draws an invite inside a chat: a small card
 * with "You've been invited to join a server", the server's icon and name, where you
 * land, and a green Join button. Familiar on sight to anyone who has used Discord.
 *
 * The link is the PERMANENT invite (never expires; lands in #start-here; checked against
 * Discord's public invite API on 2026-11-21). The 30-day papYzFuHt link must never be used.
 * The icon is self-hosted (public/community/server-icon.png) so the page makes no call
 * to Discord. No live member count: a static site would show a stale number, and a live
 * fetch would call Discord from every visitor's browser. */

import type { Locale } from "@/messages";

export const DISCORD_INVITE = "https://discord.gg/f3rdxBTDMG";

const T: Record<Locale, { lead: string; body: string; invited: string; sub: string; join: string }> = {
  en: {
    lead: "Other operators, one click away.",
    body: "Ask, share what you built, and meet the people building theirs.",
    invited: "You've been invited to join a server",
    sub: "Operators, makers and contributors",
    join: "Join",
  },
  es: {
    lead: "Otros operadores, a un clic.",
    body: "Pregunta, comparte lo que construiste y conoce a quienes están armando el suyo.",
    invited: "Te invitaron a unirte a un servidor",
    sub: "Operadores, creadores y colaboradores",
    join: "Unirme",
  },
  pt: {
    lead: "Outros operadores, a um clique.",
    body: "Pergunte, mostre o que construiu e conheça quem está montando o seu.",
    invited: "Você foi convidado para entrar em um servidor",
    sub: "Operadores, criadores e colaboradores",
    join: "Entrar",
  },
};

export function DiscordMark({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
      <path d="M20.317 4.37a19.79 19.79 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.865-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.74 19.74 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.1 13.1 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.126-.094.252-.192.372-.291a.074.074 0 0 1 .078-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.009c.12.1.246.198.373.292a.077.077 0 0 1-.006.127 12.3 12.3 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.84 19.84 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
  );
}

export function DiscordInvite({ locale }: { locale: Locale }) {
  const t = T[locale];
  return (
    <div className="dc-wrap">
      <div className="dc-copy">
        <h3 className="display-md" style={{ margin: "0 0 0.5rem" }}>{t.lead}</h3>
        <p className="body-text" style={{ margin: 0, maxWidth: "44ch" }}>{t.body}</p>
      </div>
      <a href={DISCORD_INVITE} target="_blank" rel="noopener noreferrer" className="dc-card" aria-label={`${t.join}: the-aios · Discord`}>
        <span className="dc-invited"><DiscordMark size={14} />{t.invited}</span>
        <span className="dc-row">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/community/server-icon.png" alt="" width={56} height={56} className="dc-icon" />
          <span className="dc-meta">
            <span className="dc-name">the-aios</span>
            <span className="dc-sub">{t.sub}</span>
            <span className="dc-channel"># start-here</span>
          </span>
          <span className="dc-join">{t.join}</span>
        </span>
      </a>
    </div>
  );
}
