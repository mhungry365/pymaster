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

export type PracticeQuestionType =
  | "multiple-choice"
  | "fill-blank"
  | "code-reading";

export type BasePracticeQuestion = {
  id: string;
  type: PracticeQuestionType;
  title: string;
  prompt: string;
  xpReward: number;
  explanation: string;
};

export type MultipleChoicePracticeQuestion = BasePracticeQuestion & {
  type: "multiple-choice";
  options: QuizOption[];
  correctOptionId: string;
};

export type FillBlankPracticeQuestion = BasePracticeQuestion & {
  type: "fill-blank";
  codeBeforeBlank: string;
  codeAfterBlank: string;
  answer: string;
  hint: string;
};

export type CodeReadingPracticeQuestion = BasePracticeQuestion & {
  type: "code-reading";
  code: string;
  options: QuizOption[];
  correctOptionId: string;
};

export type PracticeQuestion =
  | MultipleChoicePracticeQuestion
  | FillBlankPracticeQuestion
  | CodeReadingPracticeQuestion;

export type MiniChallenge = {
  id: string;
  title: string;
  prompt: string;
  checklist: string[];
  xpReward: number;
};

export type NoteCategory =
  | "Basics"
  | "Data Types"
  | "Control Flow"
  | "Functions";

export type VisualNote = {
  id: string;
  title: string;
  category: NoteCategory;
  explanation: string;
  syntaxExample: string;
  visualExplanation: string;
  commonMistake: string;
  memoryTip: string;
};
