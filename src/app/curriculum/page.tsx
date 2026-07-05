import Link from "next/link";
import { PageShell } from "@/components/page-shell";

const modules = [
  {
    title: "Python Basics",
    description:
      "Start with the core ideas every Python learner needs: variables, strings, numbers, and simple control flow.",
    label: "Module 1",
    progress: 25,
    lessons: [
      {
        title: "Python Variables",
        status: "Ready",
        href: "/lessons/python-variables",
      },
      { title: "Strings", status: "Coming soon" },
      { title: "Numbers", status: "Coming soon" },
    ],
  },
  {
    title: "Working With Data",
    description:
      "Learn how lists, dictionaries, and files help Python programs organize information.",
    label: "Module 2",
    progress: 0,
    lessons: [
      { title: "Lists", status: "Coming soon" },
      { title: "Dictionaries", status: "Coming soon" },
      { title: "Reading Files", status: "Coming soon" },
    ],
  },
  {
    title: "Build With Python",
    description:
      "Apply fundamentals by creating small tools, scripts, and beginner projects.",
    label: "Module 3",
    progress: 0,
    lessons: [
      { title: "Tip Calculator", status: "Coming soon" },
      { title: "Quiz Game", status: "Coming soon" },
      { title: "Habit Tracker", status: "Coming soon" },
    ],
  },
];

export default function CurriculumPage() {
  return (
    <PageShell
      eyebrow="Curriculum"
      title="A practical path through Python"
      description="Follow a clear sequence from first concepts to small projects you can explain and extend."
    >
      <div className="grid gap-5 lg:grid-cols-3">
        {modules.map((module) => (
          <article
            key={module.title}
            className="flex flex-col rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-emerald-300/40 hover:bg-white/[0.06]"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-300">
              {module.label}
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-white">
              {module.title}
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              {module.description}
            </p>

            <div className="mt-6">
              <div className="mb-2 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
                <span>Progress</span>
                <span>{module.progress}%</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-slate-900">
                <div
                  className="h-full rounded-full bg-emerald-400"
                  style={{ width: `${module.progress}%` }}
                />
              </div>
            </div>

            <div className="mt-6 grid gap-3">
              {module.lessons.map((lesson) =>
                lesson.href ? (
                  <Link
                    key={lesson.title}
                    href={lesson.href}
                    className="flex items-center justify-between rounded-2xl border border-emerald-300/20 bg-emerald-300/10 px-4 py-3 text-sm transition hover:border-emerald-300/50 hover:bg-emerald-300/15"
                  >
                    <span className="font-semibold text-white">
                      {lesson.title}
                    </span>
                    <span className="text-emerald-200">{lesson.status}</span>
                  </Link>
                ) : (
                  <div
                    key={lesson.title}
                    className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-3 text-sm"
                  >
                    <span className="font-medium text-slate-300">
                      {lesson.title}
                    </span>
                    <span className="text-slate-500">{lesson.status}</span>
                  </div>
                ),
              )}
            </div>

            {module.title === "Python Basics" ? (
              <Link
                href="/lessons/python-variables"
                className="mt-6 inline-flex h-12 items-center justify-center rounded-full bg-emerald-400 px-6 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
              >
                Open Python Variables
              </Link>
            ) : null}
          </article>
        ))}
      </div>
    </PageShell>
  );
}
