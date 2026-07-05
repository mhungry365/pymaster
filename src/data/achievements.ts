import type { ProgressState } from "@/lib/progress";

export type Achievement = {
  id: string;
  title: string;
  description: string;
  target: number;
  getProgressValue: (progress: ProgressState) => number;
};

export type CalculatedAchievement = Achievement & {
  progressValue: number;
  progressPercent: number;
  isUnlocked: boolean;
};

export const achievements: Achievement[] = [
  {
    id: "first-lesson",
    title: "First Lesson Completed",
    description: "Complete your first Py2Learn lesson.",
    target: 1,
    getProgressValue: (progress) => progress.completedLessonSlugs.length,
  },
  {
    id: "three-lessons",
    title: "3 Lessons Completed",
    description: "Complete three lessons in the Python Basics path.",
    target: 3,
    getProgressValue: (progress) => progress.completedLessonSlugs.length,
  },
  {
    id: "first-practice",
    title: "First Practice Question",
    description: "Answer one practice question correctly.",
    target: 1,
    getProgressValue: (progress) =>
      progress.completedPracticeQuestionIds.length,
  },
  {
    id: "five-practice",
    title: "5 Practice Questions",
    description: "Complete five practice questions or mini challenges.",
    target: 5,
    getProgressValue: (progress) =>
      progress.completedPracticeQuestionIds.length,
  },
  {
    id: "first-project",
    title: "First Project Completed",
    description: "Mark your first beginner project as complete.",
    target: 1,
    getProgressValue: (progress) => progress.completedProjectIds.length,
  },
  {
    id: "one-hundred-xp",
    title: "100 XP Earned",
    description: "Earn 100 total XP across lessons, practice, and projects.",
    target: 100,
    getProgressValue: (progress) => progress.totalXP,
  },
  {
    id: "five-hundred-xp",
    title: "500 XP Earned",
    description: "Earn 500 total XP across Py2Learn.",
    target: 500,
    getProgressValue: (progress) => progress.totalXP,
  },
  {
    id: "three-day-streak",
    title: "3 Day Streak",
    description: "Practice or complete work three days in a row.",
    target: 3,
    getProgressValue: (progress) => progress.currentStreak,
  },
];

export function getUnlockedAchievements(
  progress: ProgressState,
): CalculatedAchievement[] {
  return achievements.map((achievement) => {
    const progressValue = achievement.getProgressValue(progress);
    const cappedProgressValue = Math.min(progressValue, achievement.target);

    return {
      ...achievement,
      progressValue,
      progressPercent: Math.round(
        (cappedProgressValue / achievement.target) * 100,
      ),
      isUnlocked: progressValue >= achievement.target,
    };
  });
}
