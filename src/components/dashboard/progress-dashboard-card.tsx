"use client";

import { useProgress } from "@/hooks/use-progress";

type ProgressDashboardCardProps = {
  totalLessons: number;
};

export function ProgressDashboardCard({
  totalLessons,
}: ProgressDashboardCardProps) {
  const { progress, resetProgress } = useProgress();
  const completedLessonsCount = progress.completedLessonSlugs.length;
  const progressPercent =
    totalLessons > 0
      ? Math.round((completedLessonsCount / totalLessons) * 100)
      : 0;

  return (
    <section className="mt-6 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-300">
            Local progress
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-slate-950">
            Your PyMaster stats
          </h2>
          <p className="mt-3 max-w-2xl leading-7 text-slate-600">
            Progress is saved in this browser with localStorage. Later, this can
            move to Supabase accounts.
          </p>
        </div>
        <button
          type="button"
          onClick={resetProgress}
          className="inline-flex h-11 items-center justify-center rounded-full border border-slate-200 px-5 text-sm font-semibold text-slate-950 transition hover:border-amber-300/50 hover:bg-amber-300/10"
        >
          Reset Progress
        </button>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-4">
        <div className="rounded-2xl border border-emerald-300/20 bg-emerald-300/10 p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-200">
            Total XP
          </p>
          <p className="mt-2 text-3xl font-bold text-slate-950">
            {progress.totalXP}
          </p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-slate-100/50 p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
            Lessons
          </p>
          <p className="mt-2 text-3xl font-bold text-slate-950">
            {completedLessonsCount}/{totalLessons}
          </p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-slate-100/50 p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
            Streak
          </p>
          <p className="mt-2 text-3xl font-bold text-slate-950">
            {progress.currentStreak}
          </p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-slate-100/50 p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
            Complete
          </p>
          <p className="mt-2 text-3xl font-bold text-slate-950">
            {progressPercent}%
          </p>
        </div>
      </div>

      <div className="mt-6 h-3 overflow-hidden rounded-full bg-slate-100">
        <div
          className="h-full rounded-full bg-emerald-400 transition-all"
          style={{ width: `${progressPercent}%` }}
        />
      </div>
    </section>
  );
}
