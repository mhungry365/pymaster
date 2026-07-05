import type { Lesson } from "@/types";

export const pythonVariablesLesson: Lesson = {
  slug: "python-variables",
  title: "Python Variables",
  difficulty: "Beginner",
  estimatedTime: "10 min",
  xpReward: 50,
  explanation: [
    "A variable is a name you attach to a value so your program can remember it and use it later.",
    "In Python, you create a variable with one equals sign. The name goes on the left, and the value goes on the right.",
    "Good variable names make code easier to read because they explain what the value means.",
  ],
  visualNote: {
    title: "Think of a variable as a labelled box",
    description:
      "The label is the variable name. The thing inside the box is the value Python stores for later.",
    variableName: "favorite_language",
    variableValue: '"Python"',
  },
  codeExample: {
    title: "Create and use variables",
    code: `favorite_language = "Python"
hours_practiced = 2

message = f"I practiced {favorite_language} for {hours_practiced} hours."

print(message)`,
  },
  quiz: {
    question: "Which line correctly creates a variable named score?",
    options: [
      { id: "a", label: "score == 10" },
      { id: "b", label: "score = 10" },
      { id: "c", label: "10 = score" },
      { id: "d", label: "variable score 10" },
    ],
    correctOptionId: "b",
    explanation:
      "Use one equals sign to assign a value. The variable name goes on the left, and the value goes on the right.",
  },
  fillBlank: {
    prompt: "Fill in the missing variable name so the code prints Ada.",
    codeBeforeBlank: "",
    codeAfterBlank: ' = "Ada"\nprint(student_name)',
    answer: "student_name",
    hint: "Use the same name that appears inside print().",
  },
  practiceTask: {
    title: "Create your own learner profile",
    prompt:
      "Write three variables for a learner: their name, the topic they are studying, and how many minutes they practiced today.",
    checklist: [
      "Use clear snake_case variable names",
      "Store at least one string value",
      "Store at least one number value",
      "Print a sentence that uses your variables",
    ],
  },
  summary: [
    "Variables store values under readable names.",
    "Assignment uses one equals sign, like topic = \"Python\".",
    "Names should describe what the value means.",
    "You can reuse variables in messages, calculations, and later steps.",
  ],
};

export const lessons = [pythonVariablesLesson];
