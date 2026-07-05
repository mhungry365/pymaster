import { PageShell } from "@/components/page-shell";
import { PlaygroundExperience } from "@/components/playground/playground-experience";

export default function PlaygroundPage() {
  return (
    <PageShell
      eyebrow="Playground"
      title="Run tiny Python experiments"
      description="Choose an example, edit the code, and use simulated output to practice reading Python before real execution is added."
    >
      <PlaygroundExperience />
    </PageShell>
  );
}
