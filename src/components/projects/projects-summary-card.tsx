type ProjectsSummaryCardProps = {
  totalProjects: number;
  completedProjects: number;
  earnedXp: number;
  totalXp: number;
  progressPercent: number;
};

export function ProjectsSummaryCard({
  totalProjects,
  completedProjects,
  earnedXp,
  totalXp,
  progressPercent,
}: ProjectsSummaryCardProps) {
  return (
    <section className="rounded-3xl border border-emerald-300/20 bg-emerald-300/10 p-6">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-200">
        Projects Summary
      </p>
      <div className="mt-3 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-white">
            {progressPercent}% complete
          </h2>
          <p className="mt-2 max-w-2xl leading-7 text-emerald-100">
            Complete beginner projects to lock in Python skills and earn XP
            once per build.
          </p>
        </div>
        <div className="rounded-2xl border border-emerald-300/30 bg-slate-950/50 px-5 py-3 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-200">
            Project XP
          </p>
          <p className="mt-1 text-2xl font-bold text-white">
            {earnedXp}/{totalXp}
          </p>
        </div>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
            Total projects
          </p>
          <p className="mt-2 text-2xl font-bold text-white">{totalProjects}</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
            Completed
          </p>
          <p className="mt-2 text-2xl font-bold text-white">
            {completedProjects}
          </p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
            Remaining
          </p>
          <p className="mt-2 text-2xl font-bold text-white">
            {totalProjects - completedProjects}
          </p>
        </div>
      </div>

      <div className="mt-6 h-3 overflow-hidden rounded-full bg-slate-950">
        <div
          className="h-full rounded-full bg-emerald-400 transition-all"
          style={{ width: `${progressPercent}%` }}
        />
      </div>
    </section>
  );
}
