/* SVG diagrams — hand-authored. No image generation; pure markup so they scale
   cleanly, render fast, and remain editable without external tools. */

export function ThreeLayerDiagram() {
  return (
    <svg
      viewBox="0 0 1100 240"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "auto", display: "block" }}
      aria-label="Three context layers: Declared, Observed, Intent"
    >
      <defs>
        <linearGradient id="layerGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#1a1a1a" />
          <stop offset="100%" stopColor="#111111" />
        </linearGradient>
      </defs>

      {[
        { x: 30, label: "01 · DECLARED", title: "What you tell the AI", sub: "about_me · working_style · INTENT" },
        { x: 380, label: "02 · OBSERVED", title: "What the AI learns", sub: "patterns · preferences · growth" },
        { x: 730, label: "03 · INTENT", title: "What the AI is authorized to do", sub: "autonomy levels · tradeoff rules" },
      ].map((layer, i) => (
        <g key={i}>
          <rect
            x={layer.x}
            y={20}
            width={340}
            height={200}
            rx={4}
            fill="url(#layerGrad)"
            stroke="#2a2a2a"
            strokeWidth={1}
          />
          <text x={layer.x + 24} y={56} fill="#b8946f" fontSize={11} fontFamily="Inter, sans-serif" fontWeight={700} letterSpacing={2.4}>
            {layer.label}
          </text>
          <text x={layer.x + 24} y={102} fill="#f8f7f5" fontSize={20} fontFamily="Playfair Display, serif" fontWeight={600}>
            {layer.title}
          </text>
          <text x={layer.x + 24} y={150} fill="#8a857d" fontSize={12} fontFamily="SF Mono, monospace">
            {layer.sub}
          </text>
          <line x1={layer.x + 24} y1={170} x2={layer.x + 80} y2={170} stroke="#b8946f" strokeWidth={2} />
        </g>
      ))}

      {/* Arrows between layers */}
      <g stroke="#2a2a2a" strokeWidth={1} fill="none">
        <path d="M 370 120 L 380 120 M 370 120 L 365 115 M 370 120 L 365 125" />
        <path d="M 720 120 L 730 120 M 720 120 L 715 115 M 720 120 L 715 125" />
      </g>
    </svg>
  );
}

/* ------------------------------------------------------------------ */

export function ContextLoopDiagram() {
  return (
    <svg
      viewBox="0 0 400 400"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "auto", display: "block", maxWidth: "400px" }}
      aria-label="Observed-context loop: single session → emerging → reinforced → routed"
    >
      <defs>
        <marker
          id="arrowhead"
          markerWidth="8"
          markerHeight="8"
          refX="7"
          refY="4"
          orient="auto"
          markerUnits="strokeWidth"
        >
          <path d="M 0 0 L 8 4 L 0 8 z" fill="#b8946f" />
        </marker>
      </defs>

      {/* Center hub */}
      <circle cx={200} cy={200} r={48} fill="#1a1a1a" stroke="#b8946f" strokeWidth={1.5} />
      <text x={200} y={196} textAnchor="middle" fill="#f8f7f5" fontSize={11} fontFamily="Inter, sans-serif" fontWeight={700} letterSpacing={1.5}>
        SESSION
      </text>
      <text x={200} y={212} textAnchor="middle" fill="#8a857d" fontSize={10} fontFamily="Inter, sans-serif">
        insights buffer
      </text>

      {/* Three outer nodes */}
      {[
        { angle: -90, label: "EMERGING", sub: "1 session", radius: 130 },
        { angle: 30, label: "REINFORCED", sub: "2+ sessions", radius: 130 },
        { angle: 150, label: "ROUTED", sub: "to canonical files", radius: 130 },
      ].map((n, i) => {
        const rad = (n.angle * Math.PI) / 180;
        const cx = 200 + Math.cos(rad) * n.radius;
        const cy = 200 + Math.sin(rad) * n.radius;
        return (
          <g key={i}>
            <circle cx={cx} cy={cy} r={44} fill="#111111" stroke="#2a2a2a" strokeWidth={1} />
            <text x={cx} y={cy - 4} textAnchor="middle" fill="#b8946f" fontSize={10} fontFamily="Inter, sans-serif" fontWeight={700} letterSpacing={1.4}>
              {n.label}
            </text>
            <text x={cx} y={cy + 12} textAnchor="middle" fill="#8a857d" fontSize={9} fontFamily="Inter, sans-serif">
              {n.sub}
            </text>
          </g>
        );
      })}

      {/* Curved arrows showing the cycle */}
      <g fill="none" stroke="#2a2a2a" strokeWidth={1}>
        <path d="M 200 156 Q 280 130 320 200" markerEnd="url(#arrowhead)" />
        <path d="M 320 200 Q 240 320 130 260" markerEnd="url(#arrowhead)" />
        <path d="M 130 260 Q 100 180 156 200" markerEnd="url(#arrowhead)" />
      </g>
    </svg>
  );
}

/* ------------------------------------------------------------------ */

export function FortressDiagram() {
  return (
    <svg
      viewBox="0 0 400 260"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "auto", display: "block" }}
      aria-label="Fortress pattern: MacBook + Mac mini sharing one vault"
    >
      {/* Mac mini (left) */}
      <rect x={30} y={60} width={120} height={80} rx={4} fill="#111111" stroke="#2a2a2a" strokeWidth={1} />
      <text x={90} y={92} textAnchor="middle" fill="#b8946f" fontSize={10} fontFamily="Inter, sans-serif" fontWeight={700} letterSpacing={1.4}>
        MAC MINI
      </text>
      <text x={90} y={112} textAnchor="middle" fill="#f8f7f5" fontSize={13} fontFamily="Playfair Display, serif" fontWeight={600}>
        Autopilot
      </text>
      <text x={90} y={128} textAnchor="middle" fill="#8a857d" fontSize={9} fontFamily="Inter, sans-serif">
        24/7 worker
      </text>

      {/* MacBook (right) */}
      <rect x={250} y={60} width={120} height={80} rx={4} fill="#111111" stroke="#2a2a2a" strokeWidth={1} />
      <text x={310} y={92} textAnchor="middle" fill="#b8946f" fontSize={10} fontFamily="Inter, sans-serif" fontWeight={700} letterSpacing={1.4}>
        MACBOOK
      </text>
      <text x={310} y={112} textAnchor="middle" fill="#f8f7f5" fontSize={13} fontFamily="Playfair Display, serif" fontWeight={600}>
        Operator
      </text>
      <text x={310} y={128} textAnchor="middle" fill="#8a857d" fontSize={9} fontFamily="Inter, sans-serif">
        daily driver
      </text>

      {/* Shared vault (center bottom) */}
      <rect x={130} y={180} width={140} height={50} rx={4} fill="#1a1a1a" stroke="#b8946f" strokeWidth={1.5} />
      <text x={200} y={202} textAnchor="middle" fill="#f8f7f5" fontSize={12} fontFamily="Playfair Display, serif" fontWeight={600}>
        Shared vault
      </text>
      <text x={200} y={218} textAnchor="middle" fill="#8a857d" fontSize={9} fontFamily="SF Mono, monospace">
        git pull · push
      </text>

      {/* Connection lines */}
      <line x1={90} y1={140} x2={170} y2={180} stroke="#2a2a2a" strokeWidth={1} />
      <line x1={310} y1={140} x2={230} y2={180} stroke="#2a2a2a" strokeWidth={1} />

      {/* Eyebrow */}
      <text x={200} y={30} textAnchor="middle" fill="#8a857d" fontSize={10} fontFamily="Inter, sans-serif" fontWeight={700} letterSpacing={2}>
        THE FORTRESS PATTERN
      </text>
    </svg>
  );
}
