/* AntChatter — speech bubbles that pop in/out over the hero mesh, as if the
   agent-ants are reporting what they're working on — in EN, ES, PT-BR and
   Mandarin (the colony is global). Pure CSS: each bubble runs the same
   appear/hold/vanish keyframe on a different (coprime-ish) period + delay, so
   they surface sporadically — usually one or two at a time, never a swarm.
   Timings are computed deterministically (no Math.random) so SSR and client
   render identically. Desktop-only; hidden under reduced-motion. */

type Bubble = { text: string; top: string; right: string };

const CHATTER: Bubble[] = [
  // English
  { text: "PR merged ✓", top: "8rem", right: "4rem" },
  { text: "building a deck now", top: "12rem", right: "17rem" },
  { text: "filing boring taxes", top: "19rem", right: "6rem" },
  { text: "working on the proposal", top: "9.5rem", right: "27rem" },
  { text: "sending that email", top: "22rem", right: "21rem" },
  { text: "research done ✓", top: "15rem", right: "3rem" },
  { text: "drafting your keynote", top: "6.5rem", right: "13rem" },
  { text: "reconciling the books", top: "17rem", right: "25rem" },
  { text: "reviewing the NDA", top: "13.5rem", right: "9rem" },
  { text: "summarizing 47 tabs", top: "20.5rem", right: "13rem" },
  { text: "triaging 12 bugs", top: "16rem", right: "18rem" },
  { text: "prepping the board deck", top: "23rem", right: "8rem" },
  { text: "ghostwriting a reply", top: "8.5rem", right: "22rem" },
  { text: "shipped overnight ✓", top: "18.5rem", right: "2rem" },
  { text: "found 3 leads ✓", top: "21rem", right: "28rem" },
  { text: "closed the loop ✓", top: "14rem", right: "15rem" },
  // Español (LATAM)
  { text: "armando el deck", top: "16.5rem", right: "11rem" },
  { text: "revisando el contrato", top: "12.5rem", right: "24rem" },
  { text: "enviando la propuesta", top: "10rem", right: "10rem" },
  { text: "cerrando trato ✓", top: "22.5rem", right: "4rem" },
  { text: "conciliando cuentas", top: "24rem", right: "24rem" },
  // Português (BR)
  { text: "preparando a apresentação", top: "7rem", right: "23rem" },
  { text: "fechando o mês ✓", top: "25rem", right: "14rem" },
  { text: "respondendo e-mails", top: "20rem", right: "9rem" },
  { text: "revisando o código", top: "11rem", right: "5rem" },
  // 中文 — kept rare and result-only ("✓"): the orchestrator sees work it
  // can't read, and trusts that it's done. That signal is sharpest in small doses.
  { text: "已合并 PR ✓", top: "18.5rem", right: "30rem" },
  { text: "夜间已交付 ✓", top: "9rem", right: "19rem" },
];

export function AntChatter() {
  return (
    <div className="ant-chatter" aria-hidden="true">
      {CHATTER.map((c, i) => (
        <span
          key={i}
          className="ant-bubble"
          style={{
            top: c.top,
            right: c.right,
            // spread, coprime-ish periods + offsets → sporadic, rarely synced
            animationDuration: `${15 + ((i * 7) % 30)}s`,
            animationDelay: `${(i * 5) % 37}s`,
          }}
        >
          {c.text}
        </span>
      ))}
    </div>
  );
}
