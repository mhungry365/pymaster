type PracticeProgressProps = {
  completedCount: number;
  totalCount: number;
  earnedXp: number;
  totalXp: number;
};

export function PracticeProgress({
  completedCount,
  totalCount,
  earnedXp,
  totalXp,
}: PracticeProgressProps) {
  const progressPercent =
    totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  return (
    <section className="rounded-3xl border border-emerald-300/20 bg-emerald-300/10 p-6">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-200">
            Practice progress
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-slate-950">
            {completedCount} of {totalCount} completed
          </h2>
        </div>
        <div className="rounded-2xl border border-emerald-300/30 bg-slate-100/50 px-5 py-3 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-200">
            XP earned
          </p>
          <p className="mt-1 text-2xl font-bold text-slate-950">
            {earnedXp}/{totalXp}
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
