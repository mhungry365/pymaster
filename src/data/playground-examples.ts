export type PlaygroundExample = {
  id: string;
  label: string;
  code: string;
  output: string;
  hint: string;
};

export const playgroundExamples: PlaygroundExample[] = [
  {
    id: "hello-world",
    label: "Hello World",
    code: `print("Hello, PyMaster!")`,
    output: "Hello, PyMaster!",
    hint: "print() shows text in the output. Strings need quotation marks.",
  },
  {
    id: "variables",
    label: "Variables",
    code: `learner = "Ada"
minutes = 20

print(f"{learner} practiced Python for {minutes} minutes.")`,
    output: "Ada practiced Python for 20 minutes.",
    hint: "Variables store values so you can reuse them later in the program.",
  },
  {
    id: "strings",
    label: "Strings",
    code: `first_name = "Grace"
last_name = "Hopper"
full_name = first_name + " " + last_name

print(full_name.upper())`,
    output: "GRACE HOPPER",
    hint: "Strings are text values. Python gives strings helpful methods like .upper().",
  },
  {
    id: "lists",
    label: "Lists",
    code: `topics = ["variables", "strings", "lists"]

print(topics[0])
print(len(topics))`,
    output: "variables\n3",
    hint: "Lists keep multiple values in order. The first item is at index 0.",
  },
  {
    id: "calculator",
    label: "Simple Calculator",
    code: `first_number = 8
second_number = 5
total = first_number + second_number

print(total)`,
    output: "13",
    hint: "Python can store numbers in variables and use them in calculations.",
  },
];
