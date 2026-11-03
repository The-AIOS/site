import { StandardsPage, standardsMetadata } from "@/components/standards/StandardsPage";

export const metadata = standardsMetadata("en");

export default function Page() {
  return <StandardsPage locale="en" />;
}
