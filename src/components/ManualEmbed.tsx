/* The manual's PDF download, theme-aware: dark theme gets the dark manual, light theme
   the print (light) PDF. (The PDF iframe that lived here was replaced by /manual/en.) */

"use client";

import { useTheme, PDF_DARK, PDF_LIGHT } from "./theme";

/** Theme-aware download anchor for the manual PDF. */
export function ManualDownload({ className, children }: { className?: string; children: React.ReactNode }) {
  const theme = useTheme();
  const pdf = theme === "light" ? PDF_LIGHT : PDF_DARK;
  return (
    <a href={pdf} download="TheAIOS-OperatingManual-2026.pdf" className={className}>
      {children}
    </a>
  );
}

/** Theme-aware link to the manual's web edition: dark → /manual/en, light → /manual/en-light.
 *  (Each page also switches to its sibling on load if the stored theme differs.) */
export function ManualOnline({ className, children }: { className?: string; children: React.ReactNode }) {
  const theme = useTheme();
  return (
    <a href={theme === "light" ? "/manual/en-light" : "/manual/en"} hrefLang="en" className={className}>
      {children}
    </a>
  );
}
