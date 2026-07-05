export type LessonDifficulty = "Beginner" | "Intermediate" | "Advanced";

export type QuizOption = {
  id: string;
  label: string;
};

export type QuizQuestion = {
  question: string;
  options: QuizOption[];
  correctOptionId: string;
  explanation: string;
};

export type FillBlankChallenge = {
  prompt: string;
  codeBeforeBlank: string;
  codeAfterBlank: string;
  answer: string;
  hint: string;
};

export type PracticeTaskData = {
  title: string;
  prompt: string;
  checklist: string[];
};

export type Lesson = {
  slug: string;
  title: string;
  difficulty: LessonDifficulty;
  estimatedTime: string;
  xpReward: number;
  explanation: string[];
  visualNote: {
    title: string;
    description: string;
    variableName: string;
    variableValue: string;
  };
  codeExample: {
    title: string;
    code: string;
  };
  quiz: QuizQuestion;
  fillBlank: FillBlankChallenge;
  practiceTask: PracticeTaskData;
  summary: string[];
};
