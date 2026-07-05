import { PageShell } from "@/components/page-shell";
import { PracticeExperience } from "@/components/practice/practice-experience";

export default function PracticePage() {
  return (
    <PageShell
      eyebrow="Practice"
      title="Build fluency with short Python drills"
      description="Answer beginner questions, read small snippets, and complete a mini challenge focused on print(), variables, strings, and numbers."
    >
      <PracticeExperience />
    </PageShell>
  );
}
