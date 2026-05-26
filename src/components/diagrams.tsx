/* Five hand-authored SVG diagrams. Coral accent, deep-black canvas.
   Diagrams 2-5 are recolored adaptations from the EO Boston deck
   (Calm Editorial reference at vault/02 - assets/refs/). */

/* ---------- 1. Observed-context lifecycle loop ---------- */

export function ContextLoopDiagram() {
  const cx = 200;
  const cy = 200;
  const r = 145;

  const nodes = [
    { angle: -90, label: "EMERGING", sub: "1 session" },
    { angle: 30, label: "REINFORCED", sub: "2+ sessions" },
    { angle: 150, label: "ROUTED", sub: "→ canonical files" },
  ];

  const points = nodes.map((n) => {
    const rad = (n.angle * Math.PI) / 180;
    return { ...n, x: cx + Math.cos(rad) * r, y: cy + Math.sin(rad) * r };
  });

  return (
    <svg
      viewBox="0 0 400 400"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "auto", display: "block", maxWidth: "420px", margin: "0 auto" }}
      aria-label="Observed-context lifecycle: session → emerging → reinforced → routed"
    >
      <defs>
        <marker
          id="arrow"
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="6"
          markerHeight="6"
          orient="auto-start-reverse"
        >
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#ff5d4d" />
        </marker>
      </defs>

      {/* Outer ring — subtle */}
      <circle cx={cx} cy={cy} r={r + 30} fill="none" stroke="#262626" strokeWidth={1} strokeDasharray="2 4" />

      {/* Curved cycle arrows between nodes (3 arcs) */}
      {points.map((p, i) => {
        const next = points[(i + 1) % points.length];
        // Curve toward center for organic feel
        const midX = (p.x + next.x) / 2;
        const midY = (p.y + next.y) / 2;
        const ctrlX = midX + (cx - midX) * 0.35;
        const ctrlY = midY + (cy - midY) * 0.35;
        return (
          <path
            key={i}
            d={`M ${p.x} ${p.y} Q ${ctrlX} ${ctrlY} ${next.x} ${next.y}`}
            fill="none"
            stroke="#ff5d4d"
            strokeWidth={1.5}
            opacity={0.55}
            markerEnd="url(#arrow)"
          />
        );
      })}

      {/* Center hub */}
      <circle cx={cx} cy={cy} r={42} fill="#181818" stroke="#262626" strokeWidth={1} />
      <text x={cx} y={cy - 4} textAnchor="middle" fill="#fafafa" fontSize={11} fontFamily="Inter, sans-serif" fontWeight={700} letterSpacing={1.4}>
        SESSION
      </text>
      <text x={cx} y={cy + 12} textAnchor="middle" fill="#707070" fontSize={9} fontFamily="Inter, sans-serif" fontWeight={500}>
        insights buffer
      </text>

      {/* Three outer nodes */}
      {points.map((p, i) => (
        <g key={i}>
          <circle cx={p.x} cy={p.y} r={38} fill="#0a0a0a" stroke="#ff5d4d" strokeWidth={1.5} />
          <text x={p.x} y={p.y - 2} textAnchor="middle" fill="#fafafa" fontSize={10} fontFamily="Inter, sans-serif" fontWeight={700} letterSpacing={1.2}>
            {p.label}
          </text>
          <text x={p.x} y={p.y + 14} textAnchor="middle" fill="#707070" fontSize={9} fontFamily="Inter, sans-serif" fontWeight={500}>
            {p.sub}
          </text>
        </g>
      ))}
    </svg>
  );
}

/* ---------- 2. The Trap — sharp rise then plateau ---------- */

export function TrapCurveDiagram({ plateauLabel, productivityLabel, leverageLabel, dayLabel, monthLabel }: {
  plateauLabel: string; productivityLabel: string; leverageLabel: string; dayLabel: string; monthLabel: string;
}) {
  return (
    <svg viewBox="0 0 700 280" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto", display: "block" }} aria-label="The trap: productivity rises sharply then plateaus">
      <line x1="60" y1="240" x2="660" y2="240" stroke="#262626" strokeWidth={1} />
      <line x1="60" y1="40" x2="60" y2="240" stroke="#262626" strokeWidth={1} />
      <text x="60" y="260" fontFamily="Inter, sans-serif" fontSize={9} fill="#707070" letterSpacing={1}>{dayLabel}</text>
      <text x="650" y="260" textAnchor="end" fontFamily="Inter, sans-serif" fontSize={9} fill="#707070" letterSpacing={1}>{monthLabel}</text>
      <text x="14" y="50" fontFamily="Inter, sans-serif" fontSize={9} fill="#707070" letterSpacing={1}>PROD.</text>
      <path d="M 60 220 Q 130 200, 200 150 T 350 110 L 660 105" fill="none" stroke="#fafafa" strokeWidth={2} strokeLinecap="round" />
      <line x1="400" y1="105" x2="640" y2="105" stroke="#ff5d4d" strokeWidth={1} strokeDasharray="4 4" />
      <text x="520" y="92" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize={10} fontWeight={700} fill="#ff5d4d" letterSpacing={1.2}>{plateauLabel}</text>
      <text x="380" y="138" fontFamily="Inter, sans-serif" fontStyle="italic" fontSize={11} fill="#c4c4c4">{productivityLabel}</text>
      <text x="380" y="156" fontFamily="Inter, sans-serif" fontStyle="italic" fontSize={11} fill="#707070">{leverageLabel}</text>
    </svg>
  );
}

/* ---------- 3. The Inflection — plateau then exponential acceleration ---------- */

export function InflectionCurveDiagram({ inflectionLabel, plateauNote, accelerateNote, dayLabel, monthLabel }: {
  inflectionLabel: string; plateauNote: string; accelerateNote: string; dayLabel: string; monthLabel: string;
}) {
  return (
    <svg viewBox="0 0 700 320" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto", display: "block" }} aria-label="The inflection: plateau then exponential acceleration">
      <line x1="60" y1="270" x2="660" y2="270" stroke="#262626" strokeWidth={1} />
      <line x1="60" y1="40" x2="60" y2="270" stroke="#262626" strokeWidth={1} />
      <text x="60" y="290" fontFamily="Inter, sans-serif" fontSize={9} fill="#707070" letterSpacing={1}>{dayLabel}</text>
      <text x="650" y="290" textAnchor="end" fontFamily="Inter, sans-serif" fontSize={9} fill="#707070" letterSpacing={1}>{monthLabel}</text>
      <text x="14" y="50" fontFamily="Inter, sans-serif" fontSize={9} fill="#707070" letterSpacing={1}>PROD.</text>
      {/* Stronger exponential — sharper post-inflection rise */}
      <path d="M 60 250 Q 130 235, 200 195 T 350 165 L 420 158 C 480 145, 530 100, 580 50 S 640 18, 660 12" fill="none" stroke="#fafafa" strokeWidth={2} strokeLinecap="round" />
      <circle cx="420" cy="158" r={5} fill="#ff5d4d" />
      <line x1="420" y1="158" x2="420" y2="300" stroke="#ff5d4d" strokeWidth={1} strokeDasharray="3 4" />
      <text x="420" y="314" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize={9} fontWeight={700} fill="#ff5d4d" letterSpacing={1.4}>{inflectionLabel}</text>
      <text x="280" y="218" fontFamily="Inter, sans-serif" fontStyle="italic" fontSize={11} fill="#707070">{plateauNote}</text>
      <text x="510" y="80" fontFamily="Inter, sans-serif" fontStyle="italic" fontSize={11} fill="#fafafa">{accelerateNote}</text>
    </svg>
  );
}

/* ---------- 4. The Destination — one human orchestrates N agents ---------- */

export function DestinationNetworkDiagram({ humanLabel, humanSub, agentLabels, caption }: {
  humanLabel: string; humanSub: string; agentLabels: [string, string, string, string, string]; caption: string;
}) {
  // Center pushed inward to leave room for sub-agent cascades on each side
  const cx0 = 440; const cy0 = 240;
  // 5 agents — re-positioned slightly inward to leave outer-room for sub-agents
  const positions: [number, number][] = [
    [440, 80], [690, 130], [690, 350], [190, 350], [190, 130],
  ];
  const humanR = 56;
  const agentR = 32;
  const subR = 7;
  const subDist = 56;
  // How many sub-agents per agent (varies for organic feel — some agents
  // orchestrate more than others; tells the "N agents, not 5" story)
  const subCounts = [4, 3, 3, 3, 4];

  return (
    <svg viewBox="0 0 880 480" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto", display: "block" }} aria-label="The destination: one human orchestrates N agents, which orchestrate more">
      {/* Human (center) */}
      <circle cx={cx0} cy={cy0} r={humanR} fill="rgba(255,93,77,0.18)" stroke="#ff5d4d" strokeWidth={2} />
      <text x={cx0} y={cy0 - 5} textAnchor="middle" fontFamily="Inter, sans-serif" fontWeight={800} fontSize={14} fill="#ff5d4d" letterSpacing={1.6}>{humanLabel}</text>
      <text x={cx0} y={cy0 + 15} textAnchor="middle" fontFamily="Inter, sans-serif" fontWeight={500} fontSize={11} fill="#fafafa">{humanSub}</text>

      {/* 5 agent nodes + their sub-agent cascades */}
      {positions.map(([cx, cy], i) => {
        const dx = cx - cx0; const dy = cy - cy0;
        const len = Math.hypot(dx, dy);
        const ux = dx / len; const uy = dy / len;
        // Connector human → agent
        const x1 = cx0 + ux * humanR; const y1 = cy0 + uy * humanR;
        const x2 = cx - ux * agentR; const y2 = cy - uy * agentR;

        // Sub-agents fan out on the FAR side of the agent (away from human)
        const n = subCounts[i];
        const spread = 60 * Math.PI / 180; // ±30° fan
        const subs: { sx: number; sy: number; lx1: number; ly1: number; lx2: number; ly2: number }[] = [];
        for (let k = 0; k < n; k++) {
          const t = n === 1 ? 0 : (k / (n - 1)) - 0.5; // -0.5 .. 0.5
          const theta = t * spread;
          // Rotate outward unit vector (ux, uy) by theta
          const c = Math.cos(theta); const s = Math.sin(theta);
          const rx = ux * c - uy * s;
          const ry = ux * s + uy * c;
          const sx = cx + rx * subDist;
          const sy = cy + ry * subDist;
          const lx1 = cx + rx * agentR;
          const ly1 = cy + ry * agentR;
          const lx2 = sx - rx * subR;
          const ly2 = sy - ry * subR;
          subs.push({ sx, sy, lx1, ly1, lx2, ly2 });
        }

        return (
          <g key={i}>
            {/* Sub-agent connectors (drawn first so they sit behind nodes) */}
            {subs.map((s, j) => (
              <line key={`sl-${j}`} x1={s.lx1} y1={s.ly1} x2={s.lx2} y2={s.ly2} stroke="#262626" strokeWidth={0.75} />
            ))}
            {/* Sub-agent bubbles */}
            {subs.map((s, j) => (
              <circle key={`sc-${j}`} cx={s.sx} cy={s.sy} r={subR} fill="#181818" stroke="#3a3a3a" strokeWidth={1} />
            ))}
            {/* Main agent — connector + circle + label */}
            <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#262626" strokeWidth={1} />
            <circle cx={cx} cy={cy} r={agentR} fill="#111111" stroke="#262626" strokeWidth={1.5} />
            <text x={cx} y={cy + 4} textAnchor="middle" fontFamily="Inter, sans-serif" fontWeight={600} fontSize={10} fill="#fafafa" letterSpacing={1}>{agentLabels[i]}</text>
          </g>
        );
      })}

      <text x={cx0} y={460} textAnchor="middle" fontFamily="Inter, sans-serif" fontStyle="italic" fontSize={12} fill="#c4c4c4">{caption}</text>
    </svg>
  );
}

/* ---------- 5. Why Most Fail — two-pane diagram (The Skip vs The Plateau) ---------- */

export function WhyMostFailDiagram({ skipLabel, skipTitle, skipBody, plateauLabel, wallLabel, plateauTitle, plateauBody }: {
  skipLabel: string; skipTitle: string; skipBody: string; plateauLabel: string; wallLabel: string; plateauTitle: string; plateauBody: string;
}) {
  const StageBox = ({ x, label, active = false, faded = false }: { x: number; label: string; active?: boolean; faded?: boolean }) => (
    <g opacity={faded ? 0.25 : 1}>
      <rect x={x} y={60} width={70} height={50} fill={active ? "rgba(255,93,77,0.18)" : "#111111"} stroke={active ? "#ff5d4d" : "#262626"} />
      <text x={x + 35} y={89} textAnchor="middle" fontFamily="Inter, sans-serif" fontSize={9} fill={active ? "#ff5d4d" : "#707070"} letterSpacing={1.2}>{label}</text>
    </g>
  );
  return (
    <svg viewBox="0 0 1000 240" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto", display: "block" }} aria-label="Why most fail: two ways companies break">
      {/* LEFT — THE SKIP */}
      <g>
        <text x="220" y="22" textAnchor="middle" fontFamily="Inter, sans-serif" fontWeight={700} fontSize={11} letterSpacing={1.8} fill="#ff5d4d">{skipLabel}</text>
        <StageBox x={40} label="1" />
        <StageBox x={135} label="2" faded />
        <StageBox x={230} label="3" faded />
        <StageBox x={325} label="4" active />
        <path d="M 75 60 Q 218 0, 360 60" fill="none" stroke="#ff5d4d" strokeWidth={1.5} strokeDasharray="5 4" />
        <text x="220" y="148" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize={12} fontWeight={700} fill="#fafafa">{skipTitle}</text>
        <text x="220" y="172" textAnchor="middle" fontFamily="Inter, sans-serif" fontStyle="italic" fontSize={11} fill="#707070">{skipBody}</text>
      </g>
      <line x1="500" y1="40" x2="500" y2="220" stroke="#262626" strokeWidth={1} />
      {/* RIGHT — THE PLATEAU */}
      <g transform="translate(540, 0)">
        <text x="220" y="22" textAnchor="middle" fontFamily="Inter, sans-serif" fontWeight={700} fontSize={11} letterSpacing={1.8} fill="#ff5d4d">{plateauLabel}</text>
        <StageBox x={40} label="1" />
        <StageBox x={135} label="2" />
        <line x1="218" y1="46" x2="218" y2="124" stroke="#ff5d4d" strokeWidth={3} strokeLinecap="round" />
        <text x="218" y="40" textAnchor="middle" fontFamily="Inter, sans-serif" fontWeight={700} fontSize={9} fill="#ff5d4d" letterSpacing={1.4}>{wallLabel}</text>
        <StageBox x={230} label="3" faded />
        <StageBox x={325} label="4" faded />
        <text x="220" y="148" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize={12} fontWeight={700} fill="#fafafa">{plateauTitle}</text>
        <text x="220" y="172" textAnchor="middle" fontFamily="Inter, sans-serif" fontStyle="italic" fontSize={11} fill="#707070">{plateauBody}</text>
      </g>
    </svg>
  );
}
