const PROGRESS_STORAGE_KEY = "pymaster-progress";
const PROGRESS_UPDATED_EVENT = "pymaster-progress-updated";

export type ProgressState = {
  completedLessonSlugs: string[];
  totalXP: number;
  currentStreak: number;
  lastActiveDate: string | null;
  completedPracticeQuestionIds: string[];
  completedProjectIds: string[];
};

const defaultProgress: ProgressState = {
  completedLessonSlugs: [],
  totalXP: 0,
  currentStreak: 0,
  lastActiveDate: null,
  completedPracticeQuestionIds: [],
  completedProjectIds: [],
};

function canUseStorage() {
  return typeof window !== "undefined" && Boolean(window.localStorage);
}

function getTodayKey() {
  return new Date().toISOString().slice(0, 10);
}

function getDateDifferenceInDays(fromDate: string, toDate: string) {
  const from = new Date(`${fromDate}T00:00:00`);
  const to = new Date(`${toDate}T00:00:00`);
  return Math.round((to.getTime() - from.getTime()) / 86_400_000);
}

function emitProgressUpdated() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event(PROGRESS_UPDATED_EVENT));
  }
}

function saveProgress(progress: ProgressState) {
  if (!canUseStorage()) {
    return progress;
  }

  window.localStorage.setItem(PROGRESS_STORAGE_KEY, JSON.stringify(progress));
  emitProgressUpdated();
  return progress;
}

export function getProgress(): ProgressState {
  if (!canUseStorage()) {
    return defaultProgress;
  }

  const storedProgress = window.localStorage.getItem(PROGRESS_STORAGE_KEY);

  if (!storedProgress) {
    return defaultProgress;
  }

  try {
    return {
      ...defaultProgress,
      ...JSON.parse(storedProgress),
    };
  } catch {
    return defaultProgress;
  }
}

export function updateStreak() {
  const progress = getProgress();
  const today = getTodayKey();

  if (progress.lastActiveDate === today) {
    return progress;
  }

  const dayDifference = progress.lastActiveDate
    ? getDateDifferenceInDays(progress.lastActiveDate, today)
    : null;

  const currentStreak =
    dayDifference === 1 ? progress.currentStreak + 1 : 1;

  return saveProgress({
    ...progress,
    currentStreak,
    lastActiveDate: today,
  });
}

export function completeLesson(slug: string, xp: number) {
  const progress = updateStreak();

  if (progress.completedLessonSlugs.includes(slug)) {
    return progress;
  }

  return saveProgress({
    ...progress,
    completedLessonSlugs: [...progress.completedLessonSlugs, slug],
    totalXP: progress.totalXP + xp,
  });
}

export function isLessonCompleted(slug: string) {
  return getProgress().completedLessonSlugs.includes(slug);
}

export function getTotalXP() {
  return getProgress().totalXP;
}

export function resetProgress() {
  return saveProgress(defaultProgress);
}

export function completePracticeQuestion(id: string, xp: number) {
  const progress = updateStreak();

  if (progress.completedPracticeQuestionIds.includes(id)) {
    return progress;
  }

  return saveProgress({
    ...progress,
    completedPracticeQuestionIds: [
      ...progress.completedPracticeQuestionIds,
      id,
    ],
    totalXP: progress.totalXP + xp,
  });
}

export function completeProject(id: string, xp: number) {
  const progress = updateStreak();

  if (progress.completedProjectIds.includes(id)) {
    return progress;
  }

  return saveProgress({
    ...progress,
    completedProjectIds: [...progress.completedProjectIds, id],
    totalXP: progress.totalXP + xp,
  });
}

export { PROGRESS_UPDATED_EVENT };
