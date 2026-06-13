/* Reveal — scroll-into-view trigger for CSS animations.
 *
 * Adds `reveal--js` on mount (so no-JS / SSR stays fully visible — nothing is
 * ever hidden without JS) and `reveal--in` once the element scrolls into view
 * (once, then it stops observing). Child animations are pure CSS, keyed off
 * `.reveal--js.reveal--in` (see globals.css). Respects prefers-reduced-motion
 * via the CSS layer, not here.
 */

"use client";

import { useEffect, useRef, useState, type ReactNode, type CSSProperties } from "react";

export function Reveal({
  children,
  className = "",
  style,
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);
  const [js, setJs] = useState(false);

  useEffect(() => {
    setJs(true);
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setInView(true);
            obs.disconnect();
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const cls = ["reveal", js && "reveal--js", inView && "reveal--in", className]
    .filter(Boolean)
    .join(" ");

  return (
    <div ref={ref} className={cls} style={style}>
      {children}
    </div>
  );
}
