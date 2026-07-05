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
    nextLessonSlug: "python-numbers",
  },
  {
    slug: "python-numbers",
    title: "Python Numbers",
    module: "Python Basics",
    difficulty: "Beginner",
    estimatedTime: "16 min",
    xp: 80,
    description:
      "Learn how Python uses numbers for counting, measuring, scoring, and calculations.",
    learningObjectives: [
      "Tell integers and decimals apart",
      "Use arithmetic operators",
      "Store calculation results in variables",
      "Avoid turning math numbers into strings",
    ],
    realWorldExamples: [
      "A fitness app stores steps = 8000.",
      "A shop calculates total = price + tax.",
      "A game updates health after a player takes damage.",
    ],
    sections: [
      {
        title: "Numbers are values Python can calculate with",
        content: [
          "Python has whole numbers like 7 and decimal numbers like 7.5.",
          "You can add, subtract, multiply, and divide numbers, then store the result in a variable.",
          "Numbers are different from strings. The number 5 can do math; the string \"5\" is text.",
        ],
        visual: {
          title: "Numbers as calculator blocks",
          description:
            "Each number block can be combined with an operator to create a new value.",
          label: "total",
          value: "price + tax",
        },
      },
    ],
    commonMistakes: [
      "Putting quotes around numbers when you want math, like \"10\" + \"5\".",
      "Using commas in large numbers, like 1,000. Python reads that differently.",
      "Forgetting that division with / usually produces a decimal result.",
    ],
    memoryTip:
      "No quotes for math. If Python should calculate it, keep it as a number.",
    codeExamples: [
      {
        title: "Add numbers",
        code: `apples = 4
oranges = 3
total_fruit = apples + oranges

print(total_fruit)`,
      },
      {
        title: "Calculate a total",
        code: `price = 12.5
tax = 1.25
total = price + tax

print(f"Total: {total}")`,
      },
    ],
    quizzes: [
      {
        question: "Which value is a number Python can use for math?",
        options: [
          { id: "a", label: '"12"' },
          { id: "b", label: "12" },
          { id: "c", label: '"twelve"' },
          { id: "d", label: "print(12)" },
        ],
        correctOptionId: "b",
        explanation:
          "12 without quotes is a number. \"12\" is text that looks like a number.",
      },
      {
        question: "What does total = 4 + 3 store?",
        options: [
          { id: "a", label: "4 + 3 as text" },
          { id: "b", label: "7" },
          { id: "c", label: "43" },
          { id: "d", label: "Nothing" },
        ],
        correctOptionId: "b",
        explanation:
          "Python calculates the right side first, then stores the result 7 in total.",
      },
    ],
    fillBlankChallenges: [
      {
        prompt: "Fill in the operator so the code prints 9.",
        codeBeforeBlank: "score = 6 ",
        codeAfterBlank: " 3\nprint(score)",
        answer: "+",
        hint: "Use the addition operator.",
      },
    ],
    practiceTasks: [
      {
        title: "Calculate practice minutes",
        prompt:
          "Create variables for morning and evening practice minutes, add them, and print the daily total.",
        checklist: [
          "Create two number variables",
          "Add them into a total variable",
          "Print the total",
          "Use an f-string for a friendly message",
        ],
      },
    ],
    summary: [
      "I can use integers and decimals.",
      "I can calculate with +, -, *, and /.",
      "I can store calculation results in variables.",
      "I know quoted numbers are strings, not math numbers.",
    ],
    nextLessonSlug: "python-booleans",
  },
  {
    slug: "python-booleans",
    title: "Python Booleans",
    module: "Python Basics",
    difficulty: "Beginner",
    estimatedTime: "14 min",
    xp: 75,
    description:
      "Learn how True and False values help Python make decisions.",
    learningObjectives: [
      "Recognize True and False boolean values",
      "Create boolean variables",
      "Read comparison results",
      "Use booleans as decision signals",
    ],
    realWorldExamples: [
      "A login form stores is_logged_in = True.",
      "A task app checks task_complete before showing a badge.",
      "A game stores has_key = False until the player finds one.",
    ],
    sections: [
      {
        title: "Booleans answer yes-or-no questions",
        content: [
          "A boolean can only be True or False.",
          "Comparisons like score >= 10 produce boolean values.",
          "Boolean variable names often start with words like is, has, or can because they sound like questions.",
        ],
        visual: {
          title: "Boolean as a light switch",
          description:
            "A boolean is either on or off: True or False. There is no middle value.",
          label: "is_complete",
          value: "True",
        },
      },
    ],
    commonMistakes: [
      "Writing true or false in lowercase. Python booleans are True and False.",
      "Putting quotes around booleans, like \"True\". That creates a string.",
      "Using = when you mean to compare with ==.",
    ],
    memoryTip:
      "Booleans are capitalized answers: True means yes, False means no.",
    codeExamples: [
      {
        title: "Store a boolean",
        code: `lesson_complete = False

print(lesson_complete)`,
      },
      {
        title: "Create a boolean with comparison",
        code: `score = 8
passed = score >= 5

print(passed)`,
      },
    ],
    quizzes: [
      {
        question: "Which value is a Python boolean?",
        options: [
          { id: "a", label: '"True"' },
          { id: "b", label: "true" },
          { id: "c", label: "True" },
          { id: "d", label: "yes" },
        ],
        correctOptionId: "c",
        explanation:
          "Python booleans are written as True and False with capital letters.",
      },
      {
        question: "What does score >= 5 create?",
        options: [
          { id: "a", label: "A string" },
          { id: "b", label: "A boolean" },
          { id: "c", label: "A list" },
          { id: "d", label: "A new function" },
        ],
        correctOptionId: "b",
        explanation:
          "Comparisons answer yes-or-no questions, so they produce booleans.",
      },
    ],
    fillBlankChallenges: [
      {
        prompt: "Fill in the boolean value that means yes.",
        codeBeforeBlank: "is_ready = ",
        codeAfterBlank: "\nprint(is_ready)",
        answer: "True",
        hint: "Use the capitalized Python boolean.",
      },
    ],
    practiceTasks: [
      {
        title: "Create a readiness flag",
        prompt:
          "Create a score variable, compare it to a passing number, and store the result in a boolean variable.",
        checklist: [
          "Create a number variable",
          "Use a comparison like >= or ==",
          "Store the comparison in a boolean variable",
          "Print the boolean result",
        ],
      },
    ],
    summary: [
      "I can recognize True and False.",
      "I can create boolean variables.",
      "I can use comparisons to produce booleans.",
      "I know booleans are not strings.",
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
    nextLessonSlug: "python-input",
  },
  {
    slug: "python-input",
    title: "Python Input",
    module: "Python Basics",
    difficulty: "Beginner",
    estimatedTime: "16 min",
    xp: 80,
    description:
      "Learn how input() lets a Python program ask the user for information.",
    learningObjectives: [
      "Use input() to ask a question",
      "Store user responses in variables",
      "Remember input() returns strings",
      "Convert input when numbers are needed",
    ],
    realWorldExamples: [
      "A quiz asks for the player’s answer.",
      "A sign-up script asks for a username.",
      "A calculator asks for numbers before calculating.",
    ],
    sections: [
      {
        title: "Input lets users talk to your program",
        content: [
          "input() pauses the program and waits for the user to type a response.",
          "The response should usually be stored in a variable so the program can use it later.",
          "input() always gives back a string, even if the user types a number.",
        ],
        visual: {
          title: "Input as a question box",
          description:
            "The prompt asks a question. The typed answer comes back as text.",
          label: "name",
          value: 'input("Name? ")',
        },
      },
    ],
    commonMistakes: [
      "Forgetting to store the result of input() in a variable.",
      "Expecting input() to return a number automatically.",
      "Writing a prompt without a space, which can make the typed answer look cramped.",
    ],
    memoryTip:
      "input() always returns text first. Convert later if you need math.",
    codeExamples: [
      {
        title: "Ask for a name",
        code: `name = input("What is your name? ")

print(f"Hello, {name}!")`,
      },
      {
        title: "Convert input to a number",
        code: `minutes_text = input("Minutes practiced? ")
minutes = int(minutes_text)

print(minutes + 10)`,
      },
    ],
    quizzes: [
      {
        question: "What does input() return?",
        options: [
          { id: "a", label: "A string" },
          { id: "b", label: "Always a number" },
          { id: "c", label: "A list" },
          { id: "d", label: "Nothing" },
        ],
        correctOptionId: "a",
        explanation:
          "input() returns what the user typed as a string.",
      },
      {
        question: "Why might you use int(input(...))?",
        options: [
          { id: "a", label: "To make text uppercase" },
          { id: "b", label: "To convert typed text into an integer" },
          { id: "c", label: "To create a list" },
          { id: "d", label: "To skip the user question" },
        ],
        correctOptionId: "b",
        explanation:
          "int() converts number-like text into an integer for math.",
      },
    ],
    fillBlankChallenges: [
      {
        prompt: "Fill in the function that asks the user a question.",
        codeBeforeBlank: "name = ",
        codeAfterBlank: '("Name? ")\nprint(name)',
        answer: "input",
        hint: "Use the built-in function that reads typed text.",
      },
    ],
    practiceTasks: [
      {
        title: "Ask and greet",
        prompt:
          "Ask the user for their name and favorite topic, then print a friendly sentence using both answers.",
        checklist: [
          "Use input() twice",
          "Store both answers in variables",
          "Use an f-string",
          "Print a friendly message",
        ],
      },
    ],
    summary: [
      "I can use input() to ask a question.",
      "I can store user responses in variables.",
      "I know input() returns strings.",
      "I can convert input when I need numbers.",
    ],
    nextLessonSlug: "python-conditions",
  },
  {
    slug: "python-conditions",
    title: "Python Conditions",
    module: "Python Basics",
    difficulty: "Beginner",
    estimatedTime: "20 min",
    xp: 90,
    description:
      "Learn how if statements let Python choose what to do based on a condition.",
    learningObjectives: [
      "Write simple if statements",
      "Use comparisons in conditions",
      "Add else for another path",
      "Indent conditional code correctly",
    ],
    realWorldExamples: [
      "A quiz checks if an answer is correct.",
      "A game checks if health is above zero.",
      "A store applies free shipping if the total is high enough.",
    ],
    sections: [
      {
        title: "Conditions let code make choices",
        content: [
          "An if statement runs code only when its condition is True.",
          "The condition comes after if and ends with a colon.",
          "Indented lines belong to the if block. Python uses indentation to understand what should run.",
        ],
        visual: {
          title: "Condition as a fork in the road",
          description:
            "If the condition is True, Python follows one path. Otherwise it can skip or follow else.",
          label: "score >= 5",
          value: "True path",
        },
      },
    ],
    commonMistakes: [
      "Forgetting the colon after the condition.",
      "Forgetting indentation inside the if block.",
      "Using one equals sign when comparing. Use == for equality checks.",
    ],
    memoryTip:
      "If asks a yes-or-no question. The indented code is what happens when the answer is yes.",
    codeExamples: [
      {
        title: "Use if",
        code: `score = 8

if score >= 5:
    print("You passed!")`,
      },
      {
        title: "Use if and else",
        code: `answer = "Python"

if answer == "Python":
    print("Correct")
else:
    print("Try again")`,
      },
    ],
    quizzes: [
      {
        question: "What does an if statement need after the condition?",
        options: [
          { id: "a", label: "A comma" },
          { id: "b", label: "A colon" },
          { id: "c", label: "A quote" },
          { id: "d", label: "A list" },
        ],
        correctOptionId: "b",
        explanation:
          "Python if statements use a colon before the indented block.",
      },
      {
        question: "Which operator checks equality?",
        options: [
          { id: "a", label: "=" },
          { id: "b", label: "==" },
          { id: "c", label: "=>" },
          { id: "d", label: "equals" },
        ],
        correctOptionId: "b",
        explanation:
          "== compares two values. = assigns a value to a variable.",
      },
    ],
    fillBlankChallenges: [
      {
        prompt: "Fill in the missing keyword for the second path.",
        codeBeforeBlank: 'answer = "Java"\nif answer == "Python":\n    print("Correct")\n',
        codeAfterBlank: ':\n    print("Try again")',
        answer: "else",
        hint: "Use the keyword that runs when if is not true.",
      },
    ],
    practiceTasks: [
      {
        title: "Check a quiz answer",
        prompt:
          "Create an answer variable. If it matches the correct answer, print Correct. Otherwise print Try again.",
        checklist: [
          "Create an answer variable",
          "Use if with ==",
          "Add an else block",
          "Indent both blocks correctly",
        ],
      },
    ],
    summary: [
      "I can write an if statement.",
      "I can use comparisons in conditions.",
      "I can add else for another path.",
      "I know indentation matters in Python.",
    ],
    nextLessonSlug: "python-loops",
  },
  {
    slug: "python-loops",
    title: "Python Loops",
    module: "Python Basics",
    difficulty: "Beginner",
    estimatedTime: "22 min",
    xp: 95,
    description:
      "Learn how loops repeat code for each item in a sequence.",
    learningObjectives: [
      "Explain what a loop repeats",
      "Write a for loop over a list",
      "Use a loop variable",
      "Indent loop code correctly",
    ],
    realWorldExamples: [
      "A todo app prints every task in a list.",
      "A scoreboard displays every player score.",
      "A report processes every row of data.",
    ],
    sections: [
      {
        title: "Loops repeat work",
        content: [
          "A for loop runs the same block of code once for each item in a sequence.",
          "The loop variable temporarily stores the current item.",
          "Indented lines are the repeated steps. When the loop moves to the next item, those steps run again.",
        ],
        visual: {
          title: "Loop as a conveyor belt",
          description:
            "Each item moves through the same station. Python repeats the indented code for each item.",
          label: "for topic in topics",
          value: "repeat block",
        },
      },
    ],
    commonMistakes: [
      "Forgetting the colon after the for line.",
      "Forgetting to indent the repeated code.",
      "Using the list name and loop variable as if they are the same thing.",
    ],
    memoryTip:
      "For each item in the list, do the indented steps.",
    codeExamples: [
      {
        title: "Loop through topics",
        code: `topics = ["variables", "strings", "loops"]

for topic in topics:
    print(topic)`,
      },
      {
        title: "Build messages in a loop",
        code: `learners = ["Ada", "Maya", "Sam"]

for learner in learners:
    print(f"Keep going, {learner}!")`,
      },
    ],
    quizzes: [
      {
        question: "How many times does a for loop run over a list of 3 items?",
        options: [
          { id: "a", label: "0" },
          { id: "b", label: "1" },
          { id: "c", label: "3" },
          { id: "d", label: "Forever" },
        ],
        correctOptionId: "c",
        explanation:
          "A for loop runs once for each item in the list.",
      },
      {
        question: "What does the loop variable hold?",
        options: [
          { id: "a", label: "The current item" },
          { id: "b", label: "The whole program" },
          { id: "c", label: "Only the first item forever" },
          { id: "d", label: "The number of loops" },
        ],
        correctOptionId: "a",
        explanation:
          "The loop variable changes each time and holds the current item.",
      },
    ],
    fillBlankChallenges: [
      {
        prompt: "Fill in the keyword that starts the loop.",
        codeBeforeBlank: "",
        codeAfterBlank: ' topic in topics:\n    print(topic)',
        answer: "for",
        hint: "Use the keyword for repeating over items.",
      },
    ],
    practiceTasks: [
      {
        title: "Print a study plan",
        prompt:
          "Create a list of three study topics and use a for loop to print one encouragement message for each topic.",
        checklist: [
          "Create a list of three strings",
          "Write a for loop",
          "Use the loop variable in a print statement",
          "Indent the repeated line",
        ],
      },
    ],
    summary: [
      "I can explain what a for loop repeats.",
      "I can loop through a list.",
      "I can use a loop variable.",
      "I know the repeated code must be indented.",
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
