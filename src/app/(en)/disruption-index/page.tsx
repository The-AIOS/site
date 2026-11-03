import { DisruptionIndexPage, disruptionIndexMetadata } from "@/components/DisruptionIndexPage";

export const metadata = disruptionIndexMetadata("en");

export default function Page() {
  return <DisruptionIndexPage locale="en" />;
}
