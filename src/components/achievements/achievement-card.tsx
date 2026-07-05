import type { CalculatedAchievement } from "@/data/achievements";

type AchievementCardProps = {
  achievement: CalculatedAchievement;
};

export function AchievementCard({ achievement }: AchievementCardProps) {
  return (
    <article
      className={`rounded-3xl border p-5 transition ${
        achievement.isUnlocked
          ? "border-emerald-300/40 bg-emerald-300/10"
          : "border-slate-200 bg-white"
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-300">
            {achievement.isUnlocked ? "Unlocked" : "Locked"}
          </p>
          <h3 className="mt-3 text-xl font-semibold text-slate-950">
            {achievement.title}
          </h3>
        </div>
        <span
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border text-lg font-black ${
            achievement.isUnlocked
              ? "border-emerald-300/40 bg-emerald-400 text-slate-950"
              : "border-slate-200 bg-slate-100/60 text-slate-500"
          }`}
        >
          {achievement.isUnlocked ? "✓" : "•"}
        </span>
      </div>

      <p className="mt-3 text-sm leading-6 text-slate-600">
        {achievement.description}
      </p>

      <div className="mt-5">
        <div className="mb-2 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
          <span>Progress</span>
          <span>
            {Math.min(achievement.progressValue, achievement.target)}/
            {achievement.target}
          </span>
        </div>
        <div className="h-2 overflow-hidden rounded-full bg-slate-100">
          <div
            className="h-full rounded-full bg-emerald-400 transition-all"
            style={{ width: `${achievement.progressPercent}%` }}
          />
        </div>
      </div>
    </article>
  );
}
