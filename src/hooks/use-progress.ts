"use client";

import { useEffect, useMemo, useState } from "react";
import {
  PROGRESS_UPDATED_EVENT,
  completeDailyChallenge,
  completeLesson,
  completePracticeQuestion,
  completeProject,
  getProgress,
  getTotalXP,
  isLessonCompleted,
  resetProgress,
  type ProgressState,
} from "@/lib/progress";

export function useProgress() {
  const [progress, setProgress] = useState<ProgressState>(getProgress);

  function refreshProgress() {
    setProgress(getProgress());
  }

  useEffect(() => {
    window.addEventListener(PROGRESS_UPDATED_EVENT, refreshProgress);
    window.addEventListener("storage", refreshProgress);

    return () => {
      window.removeEventListener(PROGRESS_UPDATED_EVENT, refreshProgress);
      window.removeEventListener("storage", refreshProgress);
    };
  }, []);

  return useMemo(
    () => ({
      progress,
      completeLesson: (slug: string, xp: number) => {
        setProgress(completeLesson(slug, xp));
      },
      isLessonCompleted,
      getTotalXP,
      resetProgress: () => {
        setProgress(resetProgress());
      },
      completePracticeQuestion: (id: string, xp: number) => {
        setProgress(completePracticeQuestion(id, xp));
      },
      completeProject: (id: string, xp: number) => {
        setProgress(completeProject(id, xp));
      },
      completeDailyChallenge: (id: string, xp: number, date?: string) => {
        setProgress(completeDailyChallenge(id, xp, date));
      },
    }),
    [progress],
  );
}
