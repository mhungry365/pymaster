import type { Lesson } from "@/types";

export const lessons: Lesson[] = [
  {
    slug: "python-variables",
    title: "Python Variables",
    module: "Python Basics",
    difficulty: "Beginner",
    estimatedTime: "10 min",
    xp: 50,
    description:
      "Learn how Python stores values with readable names and reuses them later.",
    learningObjectives: [
      "Explain what a variable is",
      "Create variables with one equals sign",
      "Choose clear snake_case names",
      "Reuse variables inside printed messages",
    ],
    sections: [
      {
        title: "What is a variable?",
        content: [
          "A variable is a name you attach to a value so your program can remember it and use it later.",
          "In Python, you create a variable with one equals sign. The name goes on the left, and the value goes on the right.",
          "Good variable names make code easier to read because they explain what the value means.",
        ],
        visual: {
          title: "Think of a variable as a labelled box",
          description:
            "The label is the variable name. The thing inside the box is the value Python stores for later.",
          label: "favorite_language",
          value: '"Python"',
        },
      },
    ],
    codeExamples: [
      {
        title: "Create and use variables",
        code: `favorite_language = "Python"
hours_practiced = 2

message = f"I practiced {favorite_language} for {hours_practiced} hours."

print(message)`,
      },
    ],
    quizzes: [
      {
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
    ],
    fillBlankChallenges: [
      {
        prompt: "Fill in the missing variable name so the code prints Ada.",
        codeBeforeBlank: "",
        codeAfterBlank: ' = "Ada"\nprint(student_name)',
        answer: "student_name",
        hint: "Use the same name that appears inside print().",
      },
    ],
    practiceTasks: [
      {
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
    ],
    summary: [
      "Variables store values under readable names.",
      "Assignment uses one equals sign, like topic = \"Python\".",
      "Names should describe what the value means.",
      "You can reuse variables in messages, calculations, and later steps.",
    ],
    nextLessonSlug: "python-strings",
  },
  {
    slug: "python-strings",
    title: "Python Strings",
    module: "Python Basics",
    difficulty: "Beginner",
    estimatedTime: "12 min",
    xp: 55,
    description:
      "Learn how Python represents text and how to combine, format, and transform strings.",
    learningObjectives: [
      "Create strings with quotes",
      "Combine strings with variables",
      "Use f-strings for readable messages",
      "Call simple string methods",
    ],
    sections: [
      {
        title: "Strings are text values",
        content: [
          "A string is text data. It can hold names, messages, labels, sentences, and symbols.",
          "Python strings are usually written inside single or double quotation marks.",
          "Strings can be stored in variables, joined together, and placed inside messages.",
        ],
        visual: {
          title: "Think of a string as text in a container",
          description:
            "The quotes tell Python where the text starts and ends. Everything inside stays in order.",
          label: "name",
          value: '"Ada"',
        },
      },
    ],
    codeExamples: [
      {
        title: "Build a message with strings",
        code: `first_name = "Ada"
topic = "Python strings"

message = f"{first_name} is learning {topic}."

print(message.upper())`,
      },
    ],
    quizzes: [
      {
        question: "Which value is a Python string?",
        options: [
          { id: "a", label: "42" },
          { id: "b", label: '"hello"' },
          { id: "c", label: "score = 3" },
          { id: "d", label: "print()" },
        ],
        correctOptionId: "b",
        explanation:
          "Strings are text values, and text is wrapped in quotation marks.",
      },
    ],
    fillBlankChallenges: [
      {
        prompt: "Fill in the missing text so the code prints Hello, Maya.",
        codeBeforeBlank: 'name = "Maya"\nprint(f"',
        codeAfterBlank: ', {name}")',
        answer: "Hello",
        hint: "The greeting appears before the comma.",
      },
    ],
    practiceTasks: [
      {
        title: "Write a profile sentence",
        prompt:
          "Create two string variables and print one sentence that uses both.",
        checklist: [
          "Create a name variable",
          "Create a favorite_topic variable",
          "Use an f-string",
          "Print the final message",
        ],
      },
    ],
    summary: [
      "Strings store text.",
      "Quotes mark where string text starts and ends.",
      "F-strings let you place variables inside messages.",
      "String methods can transform text, like uppercasing it.",
    ],
    nextLessonSlug: "python-lists",
  },
  {
    slug: "python-lists",
    title: "Python Lists",
    module: "Python Basics",
    difficulty: "Beginner",
    estimatedTime: "15 min",
    xp: 65,
    description:
      "Learn how lists store multiple values in order and how to read items from them.",
    learningObjectives: [
      "Create a list with square brackets",
      "Read list items by index",
      "Explain why indexes start at zero",
      "Use len() to count list items",
    ],
    sections: [
      {
        title: "Lists hold ordered collections",
        content: [
          "A list stores multiple values together, like topics, scores, names, or project steps.",
          "Lists use square brackets, and items are separated by commas.",
          "Each item has an index. Python starts counting indexes at 0.",
        ],
        visual: {
          title: "Think of a list as numbered shelves",
          description:
            "Each shelf stores one value. The first shelf is index 0, then 1, then 2.",
          label: "topics[0]",
          value: '"variables"',
        },
      },
    ],
    codeExamples: [
      {
        title: "Read items from a list",
        code: `topics = ["variables", "strings", "lists"]

print(topics[0])
print(len(topics))`,
      },
    ],
    quizzes: [
      {
        question: "What does topics[0] mean?",
        options: [
          { id: "a", label: "The first item in topics" },
          { id: "b", label: "The second item in topics" },
          { id: "c", label: "The last item in topics" },
          { id: "d", label: "The number of items in topics" },
        ],
        correctOptionId: "a",
        explanation:
          "Python lists start counting from 0, so index 0 is the first item.",
      },
    ],
    fillBlankChallenges: [
      {
        prompt: "Fill in the missing index so the code prints strings.",
        codeBeforeBlank: 'topics = ["variables", "strings", "lists"]\nprint(topics[',
        codeAfterBlank: "])",
        answer: "1",
        hint: "The first item is index 0, so the second item is index 1.",
      },
    ],
    practiceTasks: [
      {
        title: "Create a study list",
        prompt:
          "Make a list of three Python topics, then print the first topic and the total number of topics.",
        checklist: [
          "Create a list with three strings",
          "Use index 0 to print the first item",
          "Use len() to count the list",
          "Keep the output easy to read",
        ],
      },
    ],
    summary: [
      "Lists store multiple values in order.",
      "Lists use square brackets.",
      "Indexes start at 0.",
      "len() tells you how many items are in a list.",
    ],
  },
];

export function getAllLessons() {
  return lessons;
}

export function getLessonBySlug(slug: string) {
  return lessons.find((lesson) => lesson.slug === slug);
}

export function getNextLesson(slug: string) {
  const lesson = getLessonBySlug(slug);

  if (!lesson?.nextLessonSlug) {
    return undefined;
  }

  return getLessonBySlug(lesson.nextLessonSlug);
}
