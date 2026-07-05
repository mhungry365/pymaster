import type { Lesson } from "@/types";

export const lessons: Lesson[] = [
  {
    slug: "python-variables",
    title: "Python Variables",
    module: "Python Basics",
    difficulty: "Beginner",
    estimatedTime: "14 min",
    xp: 70,
    description:
      "Learn how variables give names to values so Python can remember information and use it later.",
    learningObjectives: [
      "Explain variables as named storage",
      "Create variables with one equals sign",
      "Choose readable snake_case names",
      "Update and reuse values in printed messages",
    ],
    realWorldExamples: [
      "A game stores score = 10 so it can add points later.",
      "A shopping app stores cart_total = 24.99 before checkout.",
      "A profile page stores username = \"Maya\" to greet the learner.",
    ],
    sections: [
      {
        title: "Variables are names for values",
        content: [
          "A variable is a readable name attached to a value. The name lets your program find that value again later.",
          "Python reads assignment from right to left: it creates the value on the right, then stores it under the name on the left.",
          "Use clear names that describe meaning, not vague names like x unless the code is very small.",
        ],
        visual: {
          title: "Variable as a labelled box",
          description:
            "The label is the variable name. The value inside the box is what Python remembers.",
          label: "favorite_language",
          value: '"Python"',
        },
      },
    ],
    commonMistakes: [
      "Using score == 10 when you mean score = 10. Double equals compares values; one equals stores a value.",
      "Putting spaces in variable names, like favorite language. Use favorite_language instead.",
      "Changing capitalization by accident. Name and name are different variables.",
    ],
    memoryTip:
      "Read assignment as 'the name on the left gets the value on the right.'",
    codeExamples: [
      {
        title: "Create and print variables",
        code: `learner = "Ada"
minutes_practiced = 20

print(f"{learner} practiced for {minutes_practiced} minutes.")`,
      },
      {
        title: "Update a variable",
        code: `score = 10
score = score + 5

print(f"Final score: {score}")`,
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
          "Use one equals sign to assign a value. The variable name goes on the left.",
      },
      {
        question: "Which variable name is easiest to understand?",
        options: [
          { id: "a", label: "x" },
          { id: "b", label: "thing" },
          { id: "c", label: "minutes_practiced" },
          { id: "d", label: "my variable" },
        ],
        correctOptionId: "c",
        explanation:
          "minutes_practiced describes what the value means and uses valid snake_case.",
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
        title: "Create your learner profile",
        prompt:
          "Write variables for your name, today’s Python topic, and minutes practiced. Print one sentence using all three.",
        checklist: [
          "Use clear snake_case names",
          "Store at least one string",
          "Store at least one number",
          "Print a complete sentence",
        ],
      },
    ],
    summary: [
      "I can explain a variable as a name attached to a value.",
      "I can create variables with one equals sign.",
      "I can choose clear snake_case variable names.",
      "I can update and reuse variables in output.",
    ],
    nextLessonSlug: "python-strings",
  },
  {
    slug: "python-strings",
    title: "Python Strings",
    module: "Python Basics",
    difficulty: "Beginner",
    estimatedTime: "15 min",
    xp: 75,
    description:
      "Learn how Python stores text, combines it with variables, and formats messages.",
    learningObjectives: [
      "Create strings with quotes",
      "Combine strings and variables",
      "Use f-strings for readable output",
      "Apply simple string methods",
    ],
    realWorldExamples: [
      "A sign-up form stores first_name = \"Grace\".",
      "A chatbot builds a response like f\"Hi, {name}!\".",
      "A report formats a title with title.upper().",
    ],
    sections: [
      {
        title: "Strings are text values",
        content: [
          "A string is text data. It can be a name, sentence, label, message, or even an empty bit of text.",
          "Python needs quotes around string text so it knows the text is not a variable name.",
          "F-strings are the easiest beginner-friendly way to place variables inside a message.",
        ],
        visual: {
          title: "String as a row of characters",
          description:
            "Quotes mark the container. Each letter, space, and symbol stays in order inside the string.",
          label: "greeting",
          value: '"Hello"',
        },
      },
    ],
    commonMistakes: [
      "Forgetting quotes around text, like name = Ada instead of name = \"Ada\".",
      "Mixing quote types, like \"Hello'. The opening and closing quotes must match.",
      "Trying to add a string and number directly without converting or formatting.",
    ],
    memoryTip:
      "If people should read it as text, wrap it in quotes. If variables belong inside, use an f-string.",
    codeExamples: [
      {
        title: "Create a string message",
        code: `name = "Grace"
topic = "strings"

print(f"{name} is learning {topic}.")`,
      },
      {
        title: "Transform string text",
        code: `course = "python basics"

print(course.title())
print(course.upper())`,
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
      {
        question: "What does an f-string help you do?",
        options: [
          { id: "a", label: "Delete text" },
          { id: "b", label: "Place variables inside text" },
          { id: "c", label: "Turn text into a list" },
          { id: "d", label: "Stop code from running" },
        ],
        correctOptionId: "b",
        explanation:
          "F-strings let you write readable messages that include variable values.",
      },
    ],
    fillBlankChallenges: [
      {
        prompt: "Fill in the greeting so the code prints Hello, Maya.",
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
          "Create a name string and a favorite_topic string. Print one friendly f-string sentence using both.",
        checklist: [
          "Create two string variables",
          "Use quotes correctly",
          "Use an f-string",
          "Print a sentence that reads naturally",
        ],
      },
    ],
    summary: [
      "I can create strings with matching quotes.",
      "I can use f-strings to combine text and variables.",
      "I can apply simple string methods like upper() and title().",
      "I can avoid mixing strings and numbers incorrectly.",
    ],
    nextLessonSlug: "python-lists",
  },
  {
    slug: "python-lists",
    title: "Python Lists",
    module: "Python Basics",
    difficulty: "Beginner",
    estimatedTime: "18 min",
    xp: 85,
    description:
      "Learn how lists store multiple values in order and how to read, count, and add items.",
    learningObjectives: [
      "Create lists with square brackets",
      "Read list items by index",
      "Use len() to count items",
      "Add new items with append()",
    ],
    realWorldExamples: [
      "A todo app stores tasks = [\"study\", \"practice\", \"review\"].",
      "A scoreboard stores player scores in order.",
      "A shopping app stores cart items before checkout.",
    ],
    sections: [
      {
        title: "Lists hold ordered collections",
        content: [
          "A list stores multiple values together under one name. The values stay in order.",
          "Lists use square brackets, and each item is separated by a comma.",
          "Python starts list indexes at 0, so the first item is list_name[0].",
        ],
        visual: {
          title: "List as numbered shelves",
          description:
            "Each shelf stores one value. The shelf number is the index, and the first shelf is 0.",
          label: "topics[0]",
          value: '"variables"',
        },
      },
    ],
    commonMistakes: [
      "Using index 1 for the first item. Python starts counting at 0.",
      "Forgetting commas between list items.",
      "Using parentheses when you mean a list. Lists use square brackets.",
    ],
    memoryTip:
      "Square brackets mean a sequence. The first item lives at index 0.",
    codeExamples: [
      {
        title: "Create and read a list",
        code: `topics = ["variables", "strings", "lists"]

print(topics[0])
print(len(topics))`,
      },
      {
        title: "Add an item to a list",
        code: `projects = ["calculator", "quiz"]
projects.append("dashboard")

print(projects)`,
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
      {
        question: "Which line creates a list?",
        options: [
          { id: "a", label: 'topics = "variables", "strings"' },
          { id: "b", label: 'topics = ["variables", "strings"]' },
          { id: "c", label: "topics = print()" },
          { id: "d", label: "topics = {variables}" },
        ],
        correctOptionId: "b",
        explanation:
          "Lists use square brackets, with items separated by commas.",
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
          "Make a list of three Python topics. Print the first topic, add a fourth topic, and print the total count.",
        checklist: [
          "Create a list with three strings",
          "Use index 0 to print the first item",
          "Use append() to add one more topic",
          "Use len() to count the list",
        ],
      },
    ],
    summary: [
      "I can create a list with square brackets.",
      "I can read list items with indexes.",
      "I know the first index is 0.",
      "I can use append() and len() with lists.",
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

export function getPreviousLesson(slug: string) {
  return lessons.find((lesson) => lesson.nextLessonSlug === slug);
}
