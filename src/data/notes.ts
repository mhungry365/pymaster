import type { NoteCategory, VisualNote } from "@/types";

export const noteCategories: NoteCategory[] = [
  "Basics",
  "Data Types",
  "Control Flow",
  "Functions",
];

export const visualNotes: VisualNote[] = [
  {
    id: "print",
    title: "print()",
    category: "Basics",
    explanation:
      "print() shows information in the output so you can see what your program is doing.",
    syntaxExample: `print("Hello Python")`,
    visualExplanation:
      "Think of print() as a little speaker: the value inside the parentheses is what Python says out loud.",
    commonMistake:
      "Forgetting quotation marks around text, like print(Hello), makes Python look for a variable named Hello.",
    memoryTip: "Parentheses hold the message. Quotes mark text.",
  },
  {
    id: "variables",
    title: "Variables",
    category: "Basics",
    explanation:
      "A variable is a name attached to a value so your program can remember and reuse it.",
    syntaxExample: `favorite_language = "Python"`,
    visualExplanation:
      "Picture a labelled box: the label is favorite_language and the value inside is Python.",
    commonMistake:
      "Using two equals signs when you mean assignment. Use one equals sign to store a value.",
    memoryTip: "Name on the left, value on the right.",
  },
  {
    id: "strings",
    title: "Strings",
    category: "Data Types",
    explanation:
      "A string is text data, usually written inside single or double quotation marks.",
    syntaxExample: `name = "Ada"\nprint(name.upper())`,
    visualExplanation:
      "Imagine beads on a string: each character sits in order, including spaces and punctuation.",
    commonMistake:
      "Mixing quote types without closing them, like \"Ada', leaves Python wondering where the string ends.",
    memoryTip: "If people read it as text, Python probably needs quotes.",
  },
  {
    id: "numbers",
    title: "Numbers",
    category: "Data Types",
    explanation:
      "Numbers let Python do math with values like ages, scores, prices, and totals.",
    syntaxExample: `score = 7\nbonus = 3\nprint(score + bonus)`,
    visualExplanation:
      "Think of numbers as blocks you can add, subtract, multiply, divide, and compare.",
    commonMistake:
      "Putting quotes around a number turns it into text, so \"7\" behaves differently from 7.",
    memoryTip: "No quotes for math numbers.",
  },
  {
    id: "lists",
    title: "Lists",
    category: "Data Types",
    explanation:
      "A list stores multiple values in order, all inside square brackets.",
    syntaxExample: `topics = ["print", "variables", "lists"]\nprint(topics[0])`,
    visualExplanation:
      "A list is like a row of numbered shelves. The first shelf is numbered 0.",
    commonMistake:
      "Trying to get the first item with index 1. Python lists start at index 0.",
    memoryTip: "Square brackets mean a sequence. First item starts at zero.",
  },
  {
    id: "dictionaries",
    title: "Dictionaries",
    category: "Data Types",
    explanation:
      "A dictionary stores labelled values as key-value pairs, like a tiny lookup table.",
    syntaxExample: `learner = {"name": "Maya", "level": "Beginner"}\nprint(learner["name"])`,
    visualExplanation:
      "Picture a set of lockers: each key opens one labelled value.",
    commonMistake:
      "Forgetting to quote string keys, like learner[name], makes Python search for a variable named name.",
    memoryTip: "Curly braces hold keys that point to values.",
  },
  {
    id: "conditions",
    title: "Conditions",
    category: "Control Flow",
    explanation:
      "Conditions let your program choose what to do based on whether something is true.",
    syntaxExample: `score = 8\nif score >= 5:\n    print("You passed")`,
    visualExplanation:
      "A condition is a fork in the road: true goes one way, false skips or goes another way.",
    commonMistake:
      "Forgetting the colon after if or forgetting to indent the code that belongs inside the condition.",
    memoryTip: "If asks a question. Indented code answers what happens next.",
  },
  {
    id: "loops",
    title: "Loops",
    category: "Control Flow",
    explanation:
      "Loops repeat code so you can work through items or run an action more than once.",
    syntaxExample: `for topic in ["print", "strings", "loops"]:\n    print(topic)`,
    visualExplanation:
      "Imagine a conveyor belt: each item comes past, and Python runs the same code for that item.",
    commonMistake:
      "Forgetting indentation inside the loop means Python does not know what should repeat.",
    memoryTip: "For each item, do the indented steps.",
  },
  {
    id: "functions",
    title: "Functions",
    category: "Functions",
    explanation:
      "A function is a reusable block of code with a name, designed to do one job.",
    syntaxExample: `def greet(name):\n    print(f"Hello, {name}")\n\ngreet("Ada")`,
    visualExplanation:
      "Think of a function as a recipe card: give it ingredients, follow the steps, get a result.",
    commonMistake:
      "Defining a function but never calling it. Python only runs the function body when you call the function name.",
    memoryTip: "Define with def. Run it by calling the name with parentheses.",
  },
];
