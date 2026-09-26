import { SkillsPage } from "@/components/SkillsPage";
import { skillsMetadata } from "@/data/skills";

/* Unlisted: no link to this route exists anywhere on the site. */
export const metadata = skillsMetadata("es");

export default function Page() {
  return <SkillsPage locale="es" />;
}
