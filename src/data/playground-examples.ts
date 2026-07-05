export type PlaygroundExample = {
  id: string;
  label: string;
  code: string;
  hint: string;
  lessonSlug: string;
};

export const playgroundExamples: PlaygroundExample[] = [
  {
    id: "print",
    label: "print()",
    code: `print("Hello, PyMaster!")`,
    hint: "print() shows text in the output. Strings need quotation marks.",
    lessonSlug: "python-variables",
  },
  {
    id: "variables",
    label: "Variables",
    code: `learner = "Ada"
minutes = 20

print(learner)`,
    hint: "Variables store values so you can reuse them later in the program.",
    lessonSlug: "python-variables",
  },
  {
    id: "strings",
    label: "Strings",
    code: `greeting = "Hello"
name = "Grace"

print(greeting)`,
    hint: "Strings are text values. Python gives strings helpful methods like .upper().",
    lessonSlug: "python-strings",
  },
  {
    id: "numbers",
    label: "Numbers",
    code: `print(2 + 3)`,
    hint: "Numbers can be added, subtracted, multiplied, and divided.",
    lessonSlug: "python-numbers",
  },
  {
    id: "booleans",
    label: "Booleans",
    code: `is_ready = True

print(is_ready)`,
    hint: "Booleans are True or False values that help programs make decisions.",
    lessonSlug: "python-booleans",
  },
  {
    id: "lists",
    label: "Lists",
    code: `topics = ["variables", "strings", "lists"]

print(topics)`,
    hint: "Lists keep multiple values in order. The first item is at index 0.",
    lessonSlug: "python-lists",
  },
  {
    id: "input",
    label: "Input",
    code: `name = input("Name? ")

print(name)`,
    hint: "input() asks a question and returns the user's answer as text.",
    lessonSlug: "python-input",
  },
  {
    id: "conditions",
    label: "Conditions",
    code: `score = 8

if score >= 5:
    print("You passed!")`,
    hint: "Conditions let Python choose whether a block of code should run.",
    lessonSlug: "python-conditions",
  },
  {
    id: "loops",
    label: "Loops",
    code: `topics = ["variables", "strings", "loops"]

for topic in topics:
    print(topic)`,
    hint: "Loops repeat code for each item in a sequence.",
    lessonSlug: "python-loops",
  },
];
