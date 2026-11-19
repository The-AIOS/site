import { SecurityPage, securityMetadata } from "@/components/security/SecurityPage";

export const metadata = securityMetadata("es");

export default function Page() {
  return <SecurityPage locale="es" />;
}
