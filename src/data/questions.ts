import type { MiniChallenge, PracticeQuestion } from "@/types";

export const practiceQuestions: PracticeQuestion[] = [
  {
    id: "print-output",
    type: "multiple-choice",
    title: "Print a message",
    prompt: "Which line prints Hello Python to the screen?",
    xpReward: 10,
    options: [
      { id: "a", label: 'print("Hello Python")' },
      { id: "b", label: 'show("Hello Python")' },
      { id: "c", label: '"Hello Python".print()' },
      { id: "d", label: "print Hello Python" },
    ],
    correctOptionId: "a",
    explanation:
      "print() is Python's beginner-friendly way to show text in the output. Text strings need quotation marks.",
  },
  {
    id: "variable-name",
    type: "fill-blank",
    title: "Name the variable",
    prompt: "Fill in the missing variable name so the code prints Maya.",
    xpReward: 15,
    codeBeforeBlank: "",
    codeAfterBlank: ' = "Maya"\nprint(student_name)',
    answer: "student_name",
    hint: "Match the variable name that appears inside print().",
    explanation:
      "The variable must be named student_name because print(student_name) asks Python to look up that exact name.",
  },
  {
    id: "string-number-output",
    type: "code-reading",
    title: "Read the code",
    prompt: "What output does this code produce?",
    xpReward: 15,
    code: `name = "Sam"
age = 12

print(f"{name} is {age}")`,
    options: [
      { id: "a", label: "Sam is 12" },
      { id: "b", label: "name is age" },
      { id: "c", label: "{name} is {age}" },
      { id: "d", label: "Sam + 12" },
    ],
    correctOptionId: "a",
    explanation:
      "The f-string replaces {name} with Sam and {age} with 12 before print() shows the message.",
  },
];

export const miniChallenge: MiniChallenge = {
  id: "learner-summary",
  title: "Build a learner summary",
  prompt:
    "Write a tiny program that stores a learner name, a topic, and minutes practiced, then prints one sentence using all three values.",
  checklist: [
    "Create a string variable for the learner name",
    "Create a string variable for the topic",
    "Create a number variable for minutes practiced",
    "Use print() to show one complete sentence",
  ],
  xpReward: 25,
};
