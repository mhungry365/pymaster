import Link from "next/link";
import { ProgressDashboardCard } from "@/components/dashboard/progress-dashboard-card";
import { ContentCard } from "@/components/content-card";
import { PageShell } from "@/components/page-shell";
import { getAllLessons, getLessonBySlug } from "@/data/lessons";

const currentLesson = getLessonBySlug("python-variables");
const totalLessons = getAllLessons().length;

const quickActions = [
  {
    title: "Open Playground",
    description:
      "Experiment with examples and simulated output after you read the lesson.",
    label: "Practice",
    href: "/playground",
  },
  {
    title: "View Curriculum",
    description:
      "See where your current lesson fits in the larger beginner learning path.",
    label: "Roadmap",
    href: "/curriculum",
  },
  {
    title: "Update Notes",
    description:
      "Capture definitions, examples, and questions you want to revisit later.",
    label: "Study habit",
    href: "/notes",
  },
];

export default function DashboardPage() {
  return (
    <PageShell
      eyebrow="Dashboard"
      title="Your Python learning home"
      description="Track your momentum, jump back into lessons, and keep the next useful action close."
    >
      {currentLesson ? (
        <section className="rounded-3xl border border-emerald-300/20 bg-emerald-300/10 p-6 sm:p-8">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-200">
                Current lesson
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-white">
                {currentLesson.title}
              </h2>
              <p className="mt-3 max-w-2xl leading-7 text-emerald-100">
                {currentLesson.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-3 text-sm text-emerald-100">
                <span className="rounded-full border border-emerald-300/30 px-4 py-2">
                  {currentLesson.difficulty}
                </span>
                <span className="rounded-full border border-emerald-300/30 px-4 py-2">
                  {currentLesson.estimatedTime}
                </span>
                <span className="rounded-full border border-emerald-300/30 px-4 py-2">
                  {currentLesson.xp} XP
                </span>
              </div>
            </div>
            <Link
              href={`/lessons/${currentLesson.slug}`}
              className="inline-flex h-12 items-center justify-center rounded-full bg-emerald-400 px-6 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
            >
              Start / Continue
            </Link>
          </div>
        </section>
      ) : null}

      <ProgressDashboardCard totalLessons={totalLessons} />

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {quickActions.map((action) => (
          <Link key={action.title} href={action.href}>
            <ContentCard
              title={action.title}
              description={action.description}
              label={action.label}
            />
          </Link>
        ))}
      </div>
    </PageShell>
  );
}
