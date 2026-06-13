/* ManualEmbed — theme-aware PDF embed for /manual.
   Dark theme shows the dark manual; light theme shows the print (light) PDF. */

"use client";

import { useTheme, PDF_DARK, PDF_LIGHT } from "./theme";

export function ManualEmbed() {
  const theme = useTheme();
  const pdf = theme === "light" ? PDF_LIGHT : PDF_DARK;
  return (
    <>
      <div
        style={{
          borderRadius: 12,
          overflow: "hidden",
          border: "1px solid var(--color-hairline)",
          boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)",
        }}
      >
        <iframe
          key={pdf}
          src={pdf}
          title="The AIOS — Operating Manual"
          style={{ width: "100%", border: 0, background: "#fff", height: "85vh", minHeight: 700, display: "block" }}
        />
      </div>
      <p className="caption" style={{ marginTop: "1rem", textAlign: "center", textTransform: "none", letterSpacing: 0 }}>
        PDF not rendering?{" "}
        <a href={pdf} download className="link-inline">
          Download it directly
        </a>
        .
      </p>
    </>
  );
}

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
