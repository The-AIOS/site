import { InstallPage } from "@/components/InstallPage";
import { installMetadata } from "@/data/install";

/* Unlisted: no link to this route exists anywhere on the site. */
export const metadata = installMetadata("pt");

export default function Page() {
  return <InstallPage locale="pt" />;
}
