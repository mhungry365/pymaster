import Link from "next/link";
import { ContentCard } from "@/components/content-card";
import { PageShell } from "@/components/page-shell";

const modules = [
  {
    title: "Python Foundations",
    description:
      "Variables, strings, numbers, conditionals, loops, functions, and the core building blocks.",
    label: "Module 1",
  },
  {
    title: "Working With Data",
    description:
      "Lists, dictionaries, files, and the patterns you need to shape information.",
    label: "Module 2",
  },
  {
    title: "Build With Python",
    description:
      "Turn fundamentals into small tools, scripts, and complete beginner projects.",
    label: "Module 3",
  },
];

export default function CurriculumPage() {
  return (
    <PageShell
      eyebrow="Curriculum"
      title="A practical path through Python"
      description="Follow a clear sequence from first concepts to small projects you can explain and extend."
    >
      <div className="grid gap-4 lg:grid-cols-3">
        {modules.map((module) => (
          <ContentCard key={module.title} {...module} />
        ))}
      </div>
      <Link
        href="/lessons/python-variables"
        className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-emerald-400 px-6 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
      >
        Open first lesson
      </Link>
    </PageShell>
  );
}
