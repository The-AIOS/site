import { DisruptionIndexPage, disruptionIndexMetadata } from "@/components/DisruptionIndexPage";

export const metadata = disruptionIndexMetadata("es");

export default function Page() {
  return <DisruptionIndexPage locale="es" />;
}
