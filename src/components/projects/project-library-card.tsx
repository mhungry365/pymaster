import { SkillPill } from "@/components/projects/skill-pill";
import type { PythonProject } from "@/types";

type ProjectLibraryCardProps = {
  project: PythonProject;
};

export function ProjectLibraryCard({ project }: ProjectLibraryCardProps) {
  return (
    <article className="flex flex-col rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-emerald-300/40 hover:bg-white/[0.06]">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-300">
            {project.category}
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-white">
            {project.title}
          </h2>
        </div>
        <span className="rounded-full border border-emerald-300/30 bg-emerald-300/10 px-4 py-2 text-sm font-semibold text-emerald-200">
          {project.xpReward} XP
        </span>
      </div>

      <div className="mt-5 flex flex-wrap gap-3 text-sm text-slate-300">
        <span className="rounded-full border border-white/10 bg-slate-950/60 px-4 py-2">
          {project.difficulty}
        </span>
        <span className="rounded-full border border-white/10 bg-slate-950/60 px-4 py-2">
          {project.estimatedTime}
        </span>
      </div>

      <p className="mt-5 text-sm leading-6 text-slate-300">
        {project.description}
      </p>

      <div className="mt-5">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
          Skills learned
        </p>
        <div className="flex flex-wrap gap-2">
          {project.skillsLearned.map((skill) => (
            <SkillPill key={skill} skill={skill} />
          ))}
        </div>
      </div>

      <div className="mt-6 rounded-2xl border border-emerald-300/20 bg-emerald-300/10 p-4">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-200">
          Build preview
        </p>
        <ol className="mt-3 grid gap-2">
          {project.buildSteps.map((step, index) => (
            <li key={step} className="flex gap-3 text-sm text-emerald-100">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-400 text-xs font-bold text-slate-950">
                {index + 1}
              </span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
      </div>

      <button
        type="button"
        className="mt-6 inline-flex h-12 items-center justify-center rounded-full bg-emerald-400 px-6 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
      >
        Start Project
      </button>
    </article>
  );
}
