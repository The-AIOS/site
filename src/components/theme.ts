/* Theme state — dark default, `data-theme="light"` on <html> for light.
 *
 * The toggle persists the choice to localStorage and broadcasts a window event
 * so theme-dependent surfaces (the manual PDF embed + download links) re-render
 * without a full reload. A no-flash inline script in layout.tsx applies the
 * stored theme before first paint.
 */

"use client";

import { useEffect, useState } from "react";

export type Theme = "dark" | "light";

export const PDF_DARK = "/manual/the-aios-operating-manual.pdf";
export const PDF_LIGHT = "/manual/the-aios-operating-manual-light.pdf";

const THEME_EVENT = "aios-themechange";

export function getTheme(): Theme {
  if (typeof document === "undefined") return "dark";
  return document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
}

export function setTheme(t: Theme): void {
  if (typeof document === "undefined") return;
  if (t === "light") document.documentElement.setAttribute("data-theme", "light");
  else document.documentElement.removeAttribute("data-theme");
  try {
    localStorage.setItem("theme", t);
  } catch {
    /* storage unavailable — choice just won't persist */
  }
  window.dispatchEvent(new CustomEvent(THEME_EVENT));
}

/** Subscribe to the active theme. Returns "dark" on first render (SSR-safe),
 *  then corrects to the real value after mount and on every toggle. */
export function useTheme(): Theme {
  const [theme, setLocal] = useState<Theme>("dark");
  useEffect(() => {
    setLocal(getTheme());
    const onChange = () => setLocal(getTheme());
    window.addEventListener(THEME_EVENT, onChange);
    return () => window.removeEventListener(THEME_EVENT, onChange);
  }, []);
  return theme;
}
