import { ContentCard } from "@/components/content-card";
import { PageShell } from "@/components/page-shell";

const nextSteps = [
  {
    title: "Continue Variables",
    description:
      "Pick up the first lesson and learn how Python stores names, values, and state.",
    label: "Next lesson",
  },
  {
    title: "Open Playground",
    description:
      "Try a few snippets, run experiments, and turn concepts into working code.",
    label: "Practice",
  },
  {
    title: "Start Notes",
    description:
      "Capture definitions, examples, and questions you want to revisit later.",
    label: "Study habit",
  },
];

export default function DashboardPage() {
  return (
    <PageShell
      eyebrow="Dashboard"
      title="Your Python learning home"
      description="Track your momentum, jump back into lessons, and keep the next useful action close."
    >
      <div className="grid gap-4 md:grid-cols-3">
        {nextSteps.map((step) => (
          <ContentCard key={step.title} {...step} />
        ))}
      </div>
    </PageShell>
  );
}
