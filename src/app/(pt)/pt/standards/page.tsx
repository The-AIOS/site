import { StandardsPage, standardsMetadata } from "@/components/standards/StandardsPage";

export const metadata = standardsMetadata("pt");

export default function Page() {
  return <StandardsPage locale="pt" />;
}
