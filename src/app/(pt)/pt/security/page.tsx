import { SecurityPage, securityMetadata } from "@/components/security/SecurityPage";

export const metadata = securityMetadata("pt");

export default function Page() {
  return <SecurityPage locale="pt" />;
}
