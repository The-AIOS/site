/* Root layout for the English group: `/`, `/standards`, `/disruption-index`,
 * and the 404. One of three sibling root layouts — see RootShell for why. */
import "../globals.css";
import { RootShell } from "@/components/RootShell";
import { BASE_METADATA } from "../siteMetadata";
import { LOCALE_HTML_LANG } from "@/messages";

export const metadata = BASE_METADATA;

export default function EnRootLayout({ children }: { children: React.ReactNode }) {
  return <RootShell lang={LOCALE_HTML_LANG.en}>{children}</RootShell>;
}
