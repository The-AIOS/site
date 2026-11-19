import { SecurityPage, securityMetadata } from "@/components/security/SecurityPage";

export const metadata = securityMetadata("en");

export default function Page() {
  return <SecurityPage locale="en" />;
}
