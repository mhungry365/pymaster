type PracticeSummaryCardProps = {
  totalQuestions: number;
  completedQuestions: number;
  earnedXp: number;
  totalXp: number;
  progressPercent: number;
};

export function PracticeSummaryCard({
  totalQuestions,
  completedQuestions,
  earnedXp,
  totalXp,
  progressPercent,
}: PracticeSummaryCardProps) {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-300">
        Practice Summary
      </p>
      <h2 className="mt-3 text-2xl font-semibold text-white">
        {progressPercent}% complete
      </h2>
      <div className="mt-5 grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
            Questions
          </p>
          <p className="mt-2 text-2xl font-bold text-white">
            {completedQuestions}/{totalQuestions}
          </p>
        </div>
        <div className="rounded-2xl border border-emerald-300/20 bg-emerald-300/10 p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-200">
            Practice XP
          </p>
          <p className="mt-2 text-2xl font-bold text-white">
            {earnedXp}/{totalXp}
          </p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
            Remaining
          </p>
          <p className="mt-2 text-2xl font-bold text-white">
            {totalQuestions - completedQuestions}
          </p>
        </div>
      </div>
    </section>
  );
}
