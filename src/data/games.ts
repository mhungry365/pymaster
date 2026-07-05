export type GameDifficulty =
  | "Beginner"
  | "Easy"
  | "Intermediate"
  | "Advanced"
  | "Pro";

export type GameLevel = {
  id: string;
  title: string;
  difficulty: GameDifficulty;
  instruction: string;
  prompt: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  xp: number;
};

export type GameDefinition = {
  slug: string;
  title: string;
  emoji: string;
  description: string;
  concept: string;
  difficulty: GameDifficulty;
  levels: GameLevel[];
};

const difficulties: GameDifficulty[] = [
  "Beginner",
  "Easy",
  "Intermediate",
  "Advanced",
  "Pro",
];

function makeLevels(
  prefix: string,
  concept: string,
  prompts: Array<{
    title: string;
    instruction: string;
    prompt: string;
    options: string[];
    correctAnswer: string;
    explanation: string;
  }>,
): GameLevel[] {
  return Array.from({ length: 50 }, (_, index) => {
    const base = prompts[index % prompts.length];
    const difficulty = difficulties[Math.floor(index / 10)] ?? "Pro";

    return {
      id: `${prefix}-${index + 1}`,
      title: `${base.title} ${index + 1}`,
      difficulty,
      instruction: base.instruction,
      prompt: base.prompt,
      options: base.options,
      correctAnswer: base.correctAnswer,
      explanation: base.explanation,
      xp: 10 + Math.floor(index / 10) * 5,
    };
  });
}

export const games: GameDefinition[] = [
  {
    slug: "variables",
    title: "Variable Quest",
    emoji: "📦",
    description: "Learn how Python remembers information using variables.",
    concept: "Variables",
    difficulty: "Beginner",
    levels: makeLevels("variables", "Variables", [
      {
        title: "Name the Box",
        instruction: "Choose the best variable name.",
        prompt: "A game needs to remember 100 points.",
        options: ["player_score", "100", "print", "score-player"],
        correctAnswer: "player_score",
        explanation: "player_score is readable and uses snake_case.",
      },
      {
        title: "Store Text",
        instruction: "Pick the correct Python code.",
        prompt: "Store the name Mingz in a variable called name.",
        options: ['name = "Mingz"', "name == Mingz", '"Mingz" = name', "print = name"],
        correctAnswer: 'name = "Mingz"',
        explanation: "Use one equals sign to store a value. Text needs quotes.",
      },
      {
        title: "Predict Output",
        instruction: "Choose what Python will print.",
        prompt: 'name = "Mingz"\nprint(name)',
        options: ["name", "Mingz", '"name"', "Error"],
        correctAnswer: "Mingz",
        explanation: "Python prints the value stored inside the variable.",
      },
      {
        title: "Update Score",
        instruction: "Choose the final value.",
        prompt: "score = 10\nscore = 20\nprint(score)",
        options: ["10", "20", "score", "Error"],
        correctAnswer: "20",
        explanation: "The latest value replaces the old value.",
      },
      {
        title: "Fix Assignment",
        instruction: "Which code stores age correctly?",
        prompt: "Store 36 in a variable called age.",
        options: ["age = 36", "age == 36", "36 = age", "print(age = 36)"],
        correctAnswer: "age = 36",
        explanation: "One equals sign assigns the value.",
      },
    ]),
  },
  {
    slug: "strings",
    title: "String Spellbook",
    emoji: "🔤",
    description: "Learn text, quotes, joining, and string behaviour.",
    concept: "Strings",
    difficulty: "Beginner",
    levels: makeLevels("strings", "Strings", [
      {
        title: "Magic Quotes",
        instruction: "Choose the correct string.",
        prompt: "Store Dragon as text.",
        options: ['pet = "Dragon"', "pet = Dragon", '"pet" = Dragon', "Dragon = pet"],
        correctAnswer: 'pet = "Dragon"',
        explanation: "Text must be inside quotes.",
      },
      {
        title: "Join Words",
        instruction: "Predict the output.",
        prompt: 'first = "Py"\nsecond = "2Learn"\nprint(first + second)',
        options: ["Py2Learn", "firstsecond", "Py 2Learn", "Error"],
        correctAnswer: "Py2Learn",
        explanation: "The plus sign joins strings together.",
      },
      {
        title: "String Space",
        instruction: "Predict the output.",
        prompt: 'print("Hello" + " " + "Python")',
        options: ["Hello Python", "HelloPython", "Hello + Python", "Error"],
        correctAnswer: "Hello Python",
        explanation: "The middle string adds a space.",
      },
      {
        title: "Text Number",
        instruction: "What is this?",
        prompt: 'age = "36"',
        options: ["string", "number", "boolean", "list"],
        correctAnswer: "string",
        explanation: "Quotes make it text, even if it looks like a number.",
      },
      {
        title: "Fix Greeting",
        instruction: "Choose the correct print.",
        prompt: "Print the word Hello.",
        options: ['print("Hello")', "print(Hello)", '"print Hello"', "Hello()"],
        correctAnswer: 'print("Hello")',
        explanation: "Text needs quotes inside print().",
      },
    ]),
  },
  {
    slug: "numbers",
    title: "Number Ninja",
    emoji: "🥷",
    description: "Train with Python numbers, maths, and calculations.",
    concept: "Numbers",
    difficulty: "Easy",
    levels: makeLevels("numbers", "Numbers", [
      {
        title: "Add Attack",
        instruction: "Choose the output.",
        prompt: "print(5 + 3)",
        options: ["8", "53", "5 + 3", "Error"],
        correctAnswer: "8",
        explanation: "Python calculates 5 + 3.",
      },
      {
        title: "Multiply Strike",
        instruction: "Choose the output.",
        prompt: "coins = 4 * 5\nprint(coins)",
        options: ["20", "45", "coins", "Error"],
        correctAnswer: "20",
        explanation: "The star symbol means multiply.",
      },
      {
        title: "Subtraction Slash",
        instruction: "Choose the output.",
        prompt: "print(10 - 4)",
        options: ["6", "14", "104", "Error"],
        correctAnswer: "6",
        explanation: "10 minus 4 is 6.",
      },
      {
        title: "Division Gate",
        instruction: "Choose the output.",
        prompt: "print(12 / 3)",
        options: ["4.0", "4", "123", "Error"],
        correctAnswer: "4.0",
        explanation: "Python division returns a decimal-style result.",
      },
      {
        title: "Math Memory",
        instruction: "Choose the value of total.",
        prompt: "total = 2 + 3 * 4\nprint(total)",
        options: ["14", "20", "24", "Error"],
        correctAnswer: "14",
        explanation: "Multiplication happens before addition.",
      },
    ]),
  },
  {
    slug: "conditions",
    title: "Decision Dungeon",
    emoji: "🚪",
    description: "Open doors by choosing correct if statement results.",
    concept: "Conditions",
    difficulty: "Intermediate",
    levels: makeLevels("conditions", "Conditions", [
      {
        title: "Open Door",
        instruction: "What will happen?",
        prompt: 'level = 5\nif level > 3:\n    print("Door opens")',
        options: ["Door opens", "Nothing", "level", "Error"],
        correctAnswer: "Door opens",
        explanation: "5 is greater than 3.",
      },
      {
        title: "Locked Door",
        instruction: "What will happen?",
        prompt: 'age = 10\nif age >= 18:\n    print("Enter")',
        options: ["Enter", "Nothing prints", "age", "Error"],
        correctAnswer: "Nothing prints",
        explanation: "10 is not greater than or equal to 18.",
      },
      {
        title: "Rain Choice",
        instruction: "Choose the output.",
        prompt: 'raining = True\nif raining:\n    print("Take umbrella")',
        options: ["Take umbrella", "Nothing", "False", "Error"],
        correctAnswer: "Take umbrella",
        explanation: "The condition is True.",
      },
      {
        title: "Else Path",
        instruction: "Choose the output.",
        prompt: 'score = 40\nif score >= 50:\n    print("Pass")\nelse:\n    print("Try again")',
        options: ["Try again", "Pass", "score", "Error"],
        correctAnswer: "Try again",
        explanation: "40 is less than 50, so else runs.",
      },
      {
        title: "Compare Values",
        instruction: "Which means equal comparison?",
        prompt: "Check if score equals 10.",
        options: ["score == 10", "score = 10", "score === 10", "score => 10"],
        correctAnswer: "score == 10",
        explanation: "Two equals signs compare values.",
      },
    ]),
  },
  {
    slug: "loops",
    title: "Loop Runner",
    emoji: "🏃",
    description: "Run repeated actions and understand loops visually.",
    concept: "Loops",
    difficulty: "Advanced",
    levels: makeLevels("loops", "Loops", [
      {
        title: "Three Laps",
        instruction: "How many times does this print?",
        prompt: 'for lap in range(3):\n    print("Run")',
        options: ["3 times", "2 times", "1 time", "Forever"],
        correctAnswer: "3 times",
        explanation: "range(3) gives 0, 1, 2.",
      },
      {
        title: "Fruit Parade",
        instruction: "What appears?",
        prompt: 'fruits = ["apple", "banana"]\nfor fruit in fruits:\n    print(fruit)',
        options: ["apple and banana", "fruit", "fruits", "Error"],
        correctAnswer: "apple and banana",
        explanation: "The loop visits each item.",
      },
      {
        title: "Count Start",
        instruction: "What is printed first?",
        prompt: 'for number in range(5):\n    print(number)',
        options: ["0", "1", "5", "Error"],
        correctAnswer: "0",
        explanation: "range starts at 0 by default.",
      },
      {
        title: "Loop Variable",
        instruction: "What changes each time?",
        prompt: 'for animal in ["cat", "dog"]:\n    print(animal)',
        options: ["animal", "cat then dog", "dog only", "Error"],
        correctAnswer: "cat then dog",
        explanation: "animal takes each list value one by one.",
      },
      {
        title: "Repeat Word",
        instruction: "How many times?",
        prompt: 'for i in range(2):\n    print("Hi")',
        options: ["2", "1", "3", "Forever"],
        correctAnswer: "2",
        explanation: "range(2) repeats twice.",
      },
    ]),
  },
  {
    slug: "debugging",
    title: "Robot Fixer",
    emoji: "🤖",
    description: "Fix broken Python so the robot can move again.",
    concept: "Debugging",
    difficulty: "Pro",
    levels: makeLevels("debugging", "Debugging", [
      {
        title: "Broken Battery",
        instruction: "Which line correctly stores energy?",
        prompt: "The robot needs energy = 100.",
        options: ["energy = 100", "energy == 100", "100 = energy", "print = 100"],
        correctAnswer: "energy = 100",
        explanation: "One equals sign stores a value.",
      },
      {
        title: "Voice Module",
        instruction: "Fix the broken print statement.",
        prompt: "print(Hello)",
        options: ['print("Hello")', "print = Hello", '"print"(Hello)', "Hello(print)"],
        correctAnswer: 'print("Hello")',
        explanation: "Hello is text, so it needs quotes.",
      },
      {
        title: "Missing Colon",
        instruction: "Which line is correct?",
        prompt: "if age > 18",
        options: ["if age > 18:", "if age > 18;", "if age > 18.", "if: age > 18"],
        correctAnswer: "if age > 18:",
        explanation: "Python if statements need a colon.",
      },
      {
        title: "List Brackets",
        instruction: "Choose the correct list.",
        prompt: "Store apple and banana in fruits.",
        options: ['fruits = ["apple", "banana"]', 'fruits = "apple", "banana"', "fruits == [apple]", "list = apple banana"],
        correctAnswer: 'fruits = ["apple", "banana"]',
        explanation: "Lists use square brackets.",
      },
      {
        title: "Indentation Fix",
        instruction: "What does Python need inside if blocks?",
        prompt: 'if True:\nprint("Go")',
        options: ["Indentation", "More quotes", "A list", "Nothing"],
        correctAnswer: "Indentation",
        explanation: "Python uses indentation to know what belongs inside a block.",
      },
    ]),
  },
];

export const variableGameLevels = games[0].levels;

export function getAllGames() {
  return games;
}

export function getGameBySlug(slug: string) {
  return games.find((game) => game.slug === slug);
}
