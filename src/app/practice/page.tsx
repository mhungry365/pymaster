import { ContentCard } from "@/components/content-card";
import { PageShell } from "@/components/page-shell";

const drills = [
  {
    title: "Variables",
    description: "Write clear names, assign values, and predict what prints.",
    label: "Warm up",
  },
  {
    title: "Conditionals",
    description: "Choose paths with if, elif, and else statements.",
    label: "Coming soon",
  },
  {
    title: "Loops",
    description: "Repeat work over ranges, lists, and user input.",
    label: "Coming soon",
  },
];

export default function PracticePage() {
  return (
    <PageShell
      eyebrow="Practice"
      title="Build fluency with short drills"
      description="Practice sessions will help you repeat important patterns until they become familiar."
    >
      <div className="grid gap-4 md:grid-cols-3">
        {drills.map((drill) => (
          <ContentCard key={drill.title} {...drill} />
        ))}
      </div>
    </PageShell>
  );
}
