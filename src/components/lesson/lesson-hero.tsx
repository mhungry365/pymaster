import { XPBadge } from "@/components/lesson/xp-badge";
import type { LessonDifficulty } from "@/types";

type LessonHeroProps = {
  title: string;
  difficulty: LessonDifficulty;
  estimatedTime: string;
  xpReward: number;
};

export function LessonHero({
  title,
  difficulty,
  estimatedTime,
  xpReward,
}: LessonHeroProps) {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/20 sm:p-8">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">
        Interactive Lesson
      </p>
      <div className="mt-4 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            {title}
          </h1>
          <div className="mt-5 flex flex-wrap gap-3 text-sm text-slate-300">
            <span className="rounded-full border border-white/10 bg-slate-950/60 px-4 py-2">
              {difficulty}
            </span>
            <span className="rounded-full border border-white/10 bg-slate-950/60 px-4 py-2">
              {estimatedTime}
            </span>
          </div>
        </div>
        <XPBadge xp={xpReward} />
      </div>
    </section>
  );
}
