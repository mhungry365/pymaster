"use client";

import { getDailyChallenge } from "@/data/daily-challenges";
import { useProgress } from "@/hooks/use-progress";
import { getTodayKey } from "@/lib/progress";

export function DailyChallengeCard() {
  const { completeDailyChallenge, progress } = useProgress();
  const todayKey = getTodayKey();
  const challenge = getDailyChallenge();
  const isCompleted = Boolean(progress.completedDailyChallenges[todayKey]);

  return (
    <section className="mt-6 rounded-3xl border border-emerald-300/20 bg-emerald-300/10 p-6 sm:p-8">
      <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-200">
            Daily Challenge
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-white">
            {challenge.title}
          </h2>
          <p className="mt-2 text-sm font-semibold text-emerald-100">
            {challenge.topic} · {challenge.xpReward} XP
          </p>
          <p className="mt-4 max-w-2xl leading-7 text-emerald-100">
            {challenge.task}
          </p>
        </div>
        <button
          type="button"
          onClick={() =>
            completeDailyChallenge(
              challenge.id,
              challenge.xpReward,
              todayKey,
            )
          }
          disabled={isCompleted}
          className="inline-flex h-12 items-center justify-center rounded-full bg-emerald-400 px-6 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isCompleted ? "Completed Today" : "Complete Challenge"}
        </button>
      </div>
    </section>
  );
}
