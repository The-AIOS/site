/* Root layout for the Spanish group: `/es`. Renders `lang="es"` server-side —
 * this is what replaced the client-side lang patch. See RootShell. */
import "../globals.css";
import { RootShell } from "@/components/RootShell";
import { BASE_METADATA } from "../siteMetadata";
import { LOCALE_HTML_LANG } from "@/messages";

export const metadata = BASE_METADATA;

export default function EsRootLayout({ children }: { children: React.ReactNode }) {
  return <RootShell lang={LOCALE_HTML_LANG.es}>{children}</RootShell>;
}
