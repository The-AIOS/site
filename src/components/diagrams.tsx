/* Single SVG diagram — the observed-context lifecycle loop.
   Three-state cycle around a central session hub. Kept lean: no shadow
   gradients, no decorative noise; geometry + accent only. */

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
