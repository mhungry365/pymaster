"use client";

import { useProgress } from "@/hooks/use-progress";

type LessonCompleteButtonProps = {
  lessonSlug: string;
  xpReward: number;
};

export function LessonCompleteButton({
  lessonSlug,
  xpReward,
}: LessonCompleteButtonProps) {
  const { completeLesson, progress } = useProgress();
  const isComplete = progress.completedLessonSlugs.includes(lessonSlug);

  return (
    <div className="rounded-3xl border border-emerald-300/20 bg-emerald-300/10 p-6 text-center">
      <h2 className="text-2xl font-semibold text-white">
        {isComplete ? "Lesson complete" : "Ready to finish?"}
      </h2>
      <p className="mx-auto mt-3 max-w-2xl leading-7 text-emerald-100">
        {isComplete
          ? `Great work. This lesson is saved in your local progress.`
          : "Mark the lesson complete when you have tried the quiz, filled the blank, and written your practice variables."}
      </p>
      <button
        type="button"
        onClick={() => completeLesson(lessonSlug, xpReward)}
        className="mt-6 inline-flex h-12 items-center justify-center rounded-full bg-emerald-400 px-6 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300 disabled:cursor-not-allowed disabled:opacity-70"
        disabled={isComplete}
      >
        {isComplete ? "Completed" : `Complete Lesson +${xpReward} XP`}
      </button>
    </div>
  );
}
