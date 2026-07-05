export type LessonSectionType =
  | "hero"
  | "text"
  | "memory"
  | "variable-box"
  | "concept-flow"
  | "animated-code"
  | "common-mistake"
  | "quiz"
  | "practice"
  | "summary";

export type LessonSection = {
  id: string;
  type: LessonSectionType;
  title?: string;
  content?: unknown;
};

export type LessonDefinition = {
  slug: string;
  title: string;
  module: string;
  difficulty: string;
  xp: number;
  estimatedTime: string;
  sections: LessonSection[];
};
