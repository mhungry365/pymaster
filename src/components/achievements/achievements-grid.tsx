"use client";

import { AchievementCard } from "@/components/achievements/achievement-card";
import { getUnlockedAchievements } from "@/data/achievements";
import { useProgress } from "@/hooks/use-progress";

export function AchievementsGrid() {
  const { progress } = useProgress();
  const calculatedAchievements = getUnlockedAchievements(progress);
  const unlockedCount = calculatedAchievements.filter(
    (achievement) => achievement.isUnlocked,
  ).length;

  return (
    <section className="mt-6 rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-8">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-300">
            Achievements
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-white">
            Badges and milestones
          </h2>
          <p className="mt-3 max-w-2xl leading-7 text-slate-300">
            Unlock badges as you complete lessons, practice questions, projects,
            streaks, and XP milestones.
          </p>
        </div>
        <div className="rounded-2xl border border-emerald-300/20 bg-emerald-300/10 px-5 py-3 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-200">
            Unlocked
          </p>
          <p className="mt-1 text-2xl font-bold text-white">
            {unlockedCount}/{calculatedAchievements.length}
          </p>
        </div>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {calculatedAchievements.map((achievement) => (
          <AchievementCard key={achievement.id} achievement={achievement} />
        ))}
      </div>
    </section>
  );
}
