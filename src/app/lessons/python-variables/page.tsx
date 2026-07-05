import { ContentCard } from "@/components/content-card";
import { PageShell } from "@/components/page-shell";

const lessonSteps = [
  {
    title: "Name a value",
    description:
      "Use assignment to store values in readable names like score, username, and is_complete.",
    label: "Concept",
  },
  {
    title: "Update state",
    description:
      "Practice changing a variable as your program runs and describing what changed.",
    label: "Exercise",
  },
  {
    title: "Read the output",
    description:
      "Use print statements to check your assumptions and explain results in plain language.",
    label: "Reflection",
  },
];

export default function PythonVariablesLessonPage() {
  return (
    <PageShell
      eyebrow="Lesson"
      title="Python Variables"
      description="Learn how variables let Python programs remember information and reuse it later."
    >
      <div className="grid gap-4 md:grid-cols-3">
        {lessonSteps.map((step) => (
          <ContentCard key={step.title} {...step} />
        ))}
      </div>
      <div className="mt-8 rounded-2xl border border-white/10 bg-slate-900/90 p-5">
        <pre className="overflow-x-auto rounded-xl bg-slate-950 p-5 text-sm leading-7 text-slate-200">
          <code>{`language = "Python"
hours_practiced = 2

print(f"I practiced {language} for {hours_practiced} hours.")`}</code>
        </pre>
      </div>
    </PageShell>
  );
}
