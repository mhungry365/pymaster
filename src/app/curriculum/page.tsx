import Link from "next/link";
import { getAllLessons } from "@/data/lessons";
import { PageShell } from "@/components/page-shell";

const lessons = getAllLessons();
const modules = Array.from(
  lessons.reduce((moduleMap, lesson) => {
    const moduleLessons = moduleMap.get(lesson.module) ?? [];
    moduleMap.set(lesson.module, [...moduleLessons, lesson]);
    return moduleMap;
  }, new Map<string, typeof lessons>()),
);

export default function CurriculumPage() {
  return (
    <PageShell
      eyebrow="Curriculum"
      title="A practical path through Python"
      description="Follow a clear sequence from first concepts to small projects you can explain and extend."
    >
      <div className="grid gap-5 lg:grid-cols-2">
        {modules.map(([moduleTitle, moduleLessons]) => {
          const progress = Math.round((1 / moduleLessons.length) * 100);

          return (
            <article
              key={moduleTitle}
              className="flex flex-col rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-emerald-300/40 hover:bg-white/[0.06]"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-300">
                Module
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-white">
                {moduleTitle}
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                Build confidence with {moduleLessons.length} connected beginner
                lessons.
              </p>

              <div className="mt-6">
                <div className="mb-2 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
                  <span>Progress</span>
                  <span>{progress}%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-slate-900">
                  <div
                    className="h-full rounded-full bg-emerald-400"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              <div className="mt-6 grid gap-3">
                {moduleLessons.map((lesson, index) => (
                  <Link
                    key={lesson.slug}
                    href={`/lessons/${lesson.slug}`}
                    className="rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-4 text-sm transition hover:border-emerald-300/40 hover:bg-emerald-300/10"
                  >
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <p className="font-semibold text-white">
                          {lesson.title}
                        </p>
                        <p className="mt-1 text-slate-400">
                          {lesson.description}
                        </p>
                      </div>
                      <div className="flex shrink-0 flex-wrap gap-2 text-xs text-slate-300">
                        <span className="rounded-full border border-white/10 px-3 py-1">
                          {lesson.difficulty}
                        </span>
                        <span className="rounded-full border border-white/10 px-3 py-1">
                          {lesson.estimatedTime}
                        </span>
                        <span className="rounded-full border border-emerald-300/30 bg-emerald-300/10 px-3 py-1 text-emerald-200">
                          {lesson.xp} XP
                        </span>
                      </div>
                    </div>
                    {index === 0 ? (
                      <p className="mt-3 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-300">
                        Current lesson
                      </p>
                    ) : null}
                  </Link>
                ))}
              </div>

              <Link
                href={`/lessons/${moduleLessons[0].slug}`}
                className="mt-6 inline-flex h-12 items-center justify-center rounded-full bg-emerald-400 px-6 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
              >
                Start Module
              </Link>
            </article>
          );
        })}
      </div>
    </PageShell>
  );
}
