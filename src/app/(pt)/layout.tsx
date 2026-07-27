/* Root layout for the Brazilian-Portuguese group: `/pt`. Renders
 * `lang="pt-BR"` server-side — this is what replaced the client-side lang
 * patch. See RootShell. */
import "../globals.css";
import { RootShell } from "@/components/RootShell";
import { BASE_METADATA } from "../siteMetadata";
import { LOCALE_HTML_LANG } from "@/messages";

export const metadata = BASE_METADATA;

export default function PtRootLayout({ children }: { children: React.ReactNode }) {
  return <RootShell lang={LOCALE_HTML_LANG.pt}>{children}</RootShell>;
}
