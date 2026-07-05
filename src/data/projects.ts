import type { ProjectCategory, PythonProject } from "@/types";

export const projectCategories: ProjectCategory[] = [
  "Beginner",
  "Data",
  "API",
  "App",
];

export const pythonProjects: PythonProject[] = [
  {
    id: "calculator",
    title: "Calculator",
    category: "Beginner",
    difficulty: "Beginner",
    estimatedTime: "30 min",
    skillsLearned: ["variables", "numbers", "input", "operators"],
    description:
      "Build a small calculator that stores two numbers and performs basic arithmetic.",
    buildSteps: [
      "Store two number values",
      "Choose an operation",
      "Print a friendly result",
    ],
    xpReward: 60,
  },
  {
    id: "quiz-game",
    title: "Quiz Game",
    category: "App",
    difficulty: "Beginner",
    estimatedTime: "45 min",
    skillsLearned: ["strings", "conditions", "score tracking", "print()"],
    description:
      "Create a question-and-answer game that checks responses and tracks a score.",
    buildSteps: [
      "Write quiz questions",
      "Check answers with conditions",
      "Show the final score",
    ],
    xpReward: 80,
  },
  {
    id: "expense-tracker",
    title: "Expense Tracker",
    category: "Data",
    difficulty: "Beginner",
    estimatedTime: "1 hour",
    skillsLearned: ["lists", "numbers", "totals", "formatting"],
    description:
      "Track a few expenses, calculate the total, and summarize where the money went.",
    buildSteps: [
      "Create a list of expenses",
      "Add expense amounts together",
      "Print a simple summary",
    ],
    xpReward: 100,
  },
  {
    id: "weather-app",
    title: "Weather App",
    category: "API",
    difficulty: "Intermediate",
    estimatedTime: "1.5 hours",
    skillsLearned: ["dictionaries", "API data", "strings", "formatting"],
    description:
      "Mock a weather response and display a clear forecast summary for a city.",
    buildSteps: [
      "Create a weather data dictionary",
      "Read temperature and condition values",
      "Print a forecast sentence",
    ],
    xpReward: 120,
  },
  {
    id: "world-cup-scoreboard",
    title: "World Cup Scoreboard",
    category: "App",
    difficulty: "Intermediate",
    estimatedTime: "2 hours",
    skillsLearned: ["lists", "dictionaries", "loops", "sorting"],
    description:
      "Build a small scoreboard that lists teams, points, and match results.",
    buildSteps: [
      "Store teams as dictionaries",
      "Loop through match results",
      "Display a ranked table",
    ],
    xpReward: 140,
  },
  {
    id: "data-dashboard",
    title: "Data Dashboard",
    category: "Data",
    difficulty: "Intermediate",
    estimatedTime: "2 hours",
    skillsLearned: ["lists", "aggregation", "functions", "reporting"],
    description:
      "Summarize a tiny dataset with totals, averages, and a readable text report.",
    buildSteps: [
      "Store sample data",
      "Write helper functions",
      "Print a dashboard summary",
    ],
    xpReward: 150,
  },
];
