"use client";

import { useProgress } from "@/hooks/use-progress";

export function DangerZone() {
  const { resetProgress } = useProgress();

  return (
    <section className="mt-6 rounded-3xl border border-amber-300/20 bg-amber-300/10 p-6 sm:p-8">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-amber-200">
        Reset Progress Danger Zone
      </p>
      <h2 className="mt-3 text-2xl font-semibold text-white">
        Start local progress over
      </h2>
      <p className="mt-3 max-w-2xl leading-7 text-amber-100">
        This clears localStorage progress in this browser, including XP,
        streaks, completed lessons, practice, projects, and daily challenges.
      </p>
      <button
        type="button"
        onClick={resetProgress}
        className="mt-6 inline-flex h-12 items-center justify-center rounded-full border border-amber-300/40 px-6 text-sm font-semibold text-white transition hover:bg-amber-300/10"
      >
        Reset Progress
      </button>
    </section>
  );
}
