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

export type LessonSection = {
  title: string;
  content: string[];
  visual?: {
    title: string;
    description: string;
    label: string;
    value: string;
  };
};

export type LessonCodeExample = {
  title: string;
  code: string;
};

export type Lesson = {
  slug: string;
  title: string;
  module: string;
  difficulty: LessonDifficulty;
  estimatedTime: string;
  xp: number;
  description: string;
  learningObjectives: string[];
  realWorldExamples: string[];
  sections: LessonSection[];
  commonMistakes: string[];
  memoryTip: string;
  codeExamples: LessonCodeExample[];
  quizzes: QuizQuestion[];
  fillBlankChallenges: FillBlankChallenge[];
  practiceTasks: PracticeTaskData[];
  summary: string[];
  nextLessonSlug?: string;
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

export type ProjectCategory = "Beginner" | "Data" | "API" | "App";

export type ProjectDifficulty = "Beginner" | "Intermediate";

export type PythonProject = {
  id: string;
  title: string;
  category: ProjectCategory;
  difficulty: ProjectDifficulty;
  estimatedTime: string;
  skillsLearned: string[];
  description: string;
  buildSteps: string[];
  xpReward: number;
};
