"use client";

import { StatCard } from "@/components/profile/stat-card";
import { useProgress } from "@/hooks/use-progress";
import { getTodayKey } from "@/lib/progress";

type ProgressOverviewProps = {
  totalLessons: number;
  totalPracticeItems: number;
  totalProjects: number;
};

export function ProgressOverview({
  totalLessons,
  totalPracticeItems,
  totalProjects,
}: ProgressOverviewProps) {
  const { progress } = useProgress();
  const todayKey = getTodayKey();
  const completedLessons = progress.completedLessonSlugs.length;
  const completedPractice = progress.completedPracticeQuestionIds.length;
  const completedProjects = progress.completedProjectIds.length;
  const completedDailyChallenge = Boolean(
    progress.completedDailyChallenges[todayKey],
  );
  const totalTrackableItems =
    totalLessons + totalPracticeItems + totalProjects + 1;
  const completedTrackableItems =
    completedLessons +
    completedPractice +
    completedProjects +
    (completedDailyChallenge ? 1 : 0);
  const overallPercent =
    totalTrackableItems > 0
      ? Math.round((completedTrackableItems / totalTrackableItems) * 100)
      : 0;

  return (
    <div className="grid gap-6">
      <section className="rounded-3xl border border-emerald-300/20 bg-emerald-300/10 p-6 sm:p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-200">
          Learning Stats
        </p>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          <StatCard
            label="Total XP"
            value={progress.totalXP}
            detail="Earned from lessons, practice, projects, and daily challenges."
            tone="success"
          />
          <StatCard
            label="Current streak"
            value={progress.currentStreak}
            detail="Increases when you complete learning activity on a new day."
          />
          <StatCard
            label="Overall progress"
            value={`${overallPercent}%`}
            detail={`${completedTrackableItems} of ${totalTrackableItems} local progress items complete.`}
          />
        </div>
        <div className="mt-6 h-3 overflow-hidden rounded-full bg-slate-100">
          <div
            className="h-full rounded-full bg-emerald-400 transition-all"
            style={{ width: `${overallPercent}%` }}
          />
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-300">
          Recent Progress
        </p>
        <div className="mt-5 grid gap-4 md:grid-cols-4">
          <StatCard
            label="Lessons"
            value={`${completedLessons}/${totalLessons}`}
            detail="Completed lesson slugs saved locally."
          />
          <StatCard
            label="Practice"
            value={`${completedPractice}/${totalPracticeItems}`}
            detail="Completed practice questions and mini challenges."
          />
          <StatCard
            label="Projects"
            value={`${completedProjects}/${totalProjects}`}
            detail="Completed beginner project builds."
          />
          <StatCard
            label="Daily challenge"
            value={completedDailyChallenge ? "Done" : "Open"}
            detail={
              completedDailyChallenge
                ? "Today's challenge is complete."
                : "Complete today's challenge from the dashboard."
            }
            tone={completedDailyChallenge ? "success" : "default"}
          />
        </div>
      </section>
    </div>
  );
}
