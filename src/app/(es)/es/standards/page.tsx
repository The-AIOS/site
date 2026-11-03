import { StandardsPage, standardsMetadata } from "@/components/standards/StandardsPage";

export const metadata = standardsMetadata("es");

export default function Page() {
  return <StandardsPage locale="es" />;
}
