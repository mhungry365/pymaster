export type GameDifficulty = "Beginner" | "Easy" | "Intermediate" | "Advanced" | "Pro";

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

export const games: GameDefinition[] = [
  {
    slug: "variables",
    title: "Variable Quest",
    emoji: "📦",
    description: "Learn how Python remembers information using variables.",
    concept: "Variables",
    difficulty: "Beginner",
    levels: [
      {
        id: "variable-name",
        title: "Name the Box",
        difficulty: "Beginner",
        instruction: "Choose the best variable name.",
        prompt: "A game needs to remember 100 points.",
        options: ["player_score", "100", "print", "score-player"],
        correctAnswer: "player_score",
        explanation: "player_score is readable and uses snake_case.",
        xp: 10,
      },
      {
        id: "store-text",
        title: "Store Text",
        difficulty: "Beginner",
        instruction: "Pick the correct Python code.",
        prompt: "Store the name Mingz in a variable called name.",
        options: ['name = "Mingz"', "name == Mingz", '"Mingz" = name', "print = name"],
        correctAnswer: 'name = "Mingz"',
        explanation: "Use one equals sign to store a value. Text needs quotes.",
        xp: 10,
      },
      {
        id: "predict-output",
        title: "Treasure Output",
        difficulty: "Easy",
        instruction: "Choose what Python will print.",
        prompt: 'name = "Mingz"\nprint(name)',
        options: ["name", "Mingz", '"name"', "Error"],
        correctAnswer: "Mingz",
        explanation: "Python prints the value stored inside the variable.",
        xp: 15,
      },
    ],
  },
  {
    slug: "strings",
    title: "String Spellbook",
    emoji: "🔤",
    description: "Learn text, quotes, and string joining through magic spells.",
    concept: "Strings",
    difficulty: "Beginner",
    levels: [
      {
        id: "quotes",
        title: "Magic Quotes",
        difficulty: "Beginner",
        instruction: "Choose the correct string.",
        prompt: "Store the word Dragon as text.",
        options: ['pet = "Dragon"', "pet = Dragon", '"pet" = Dragon', "Dragon = pet"],
        correctAnswer: 'pet = "Dragon"',
        explanation: "Text must be inside quotes.",
        xp: 10,
      },
      {
        id: "join",
        title: "Join Words",
        difficulty: "Easy",
        instruction: "Predict the output.",
        prompt: 'first = "Py"\nsecond = "2Learn"\nprint(first + second)',
        options: ["Py2Learn", "firstsecond", "Py 2Learn", "Error"],
        correctAnswer: "Py2Learn",
        explanation: "The plus sign joins strings together.",
        xp: 15,
      },
    ],
  },
  {
    slug: "numbers",
    title: "Number Ninja",
    emoji: "🥷",
    description: "Train with Python numbers, maths, and calculations.",
    concept: "Numbers",
    difficulty: "Easy",
    levels: [
      {
        id: "addition",
        title: "Add Attack",
        difficulty: "Easy",
        instruction: "Choose the output.",
        prompt: "print(5 + 3)",
        options: ["8", "53", "5 + 3", "Error"],
        correctAnswer: "8",
        explanation: "Python calculates 5 + 3 before printing.",
        xp: 10,
      },
      {
        id: "multiply",
        title: "Power Strike",
        difficulty: "Easy",
        instruction: "Choose the output.",
        prompt: "coins = 4 * 5\nprint(coins)",
        options: ["20", "45", "coins", "Error"],
        correctAnswer: "20",
        explanation: "The star symbol means multiply in Python.",
        xp: 15,
      },
    ],
  },
  {
    slug: "conditions",
    title: "Decision Dungeon",
    emoji: "🚪",
    description: "Open doors by choosing the correct if statement result.",
    concept: "Conditions",
    difficulty: "Intermediate",
    levels: [
      {
        id: "if-true",
        title: "Open the Door",
        difficulty: "Intermediate",
        instruction: "What will happen?",
        prompt: 'level = 5\nif level > 3:\n    print("Door opens")',
        options: ["Door opens", "Nothing", "level", "Error"],
        correctAnswer: "Door opens",
        explanation: "5 is greater than 3, so the condition is true.",
        xp: 20,
      },
      {
        id: "if-false",
        title: "Locked Door",
        difficulty: "Intermediate",
        instruction: "What will happen?",
        prompt: 'age = 10\nif age >= 18:\n    print("Enter")',
        options: ["Enter", "Nothing prints", "age", "Error"],
        correctAnswer: "Nothing prints",
        explanation: "10 is not greater than or equal to 18.",
        xp: 20,
      },
    ],
  },
  {
    slug: "loops",
    title: "Loop Runner",
    emoji: "🏃",
    description: "Run repeated actions and understand loops visually.",
    concept: "Loops",
    difficulty: "Advanced",
    levels: [
      {
        id: "range",
        title: "Three Laps",
        difficulty: "Advanced",
        instruction: "How many times does this print?",
        prompt: 'for lap in range(3):\n    print("Run")',
        options: ["3 times", "2 times", "1 time", "Forever"],
        correctAnswer: "3 times",
        explanation: "range(3) gives 0, 1, 2 — three repeats.",
        xp: 25,
      },
      {
        id: "list-loop",
        title: "Fruit Parade",
        difficulty: "Advanced",
        instruction: "What appears?",
        prompt: 'fruits = ["apple", "banana"]\nfor fruit in fruits:\n    print(fruit)',
        options: ["apple and banana", "fruit", "fruits", "Error"],
        correctAnswer: "apple and banana",
        explanation: "The loop visits each item in the list.",
        xp: 25,
      },
    ],
  },
  {
    slug: "debugging",
    title: "Robot Fixer",
    emoji: "🤖",
    description: "Fix broken Python so the robot can move again.",
    concept: "Debugging",
    difficulty: "Pro",
    levels: [
      {
        id: "assignment",
        title: "Broken Battery",
        difficulty: "Pro",
        instruction: "Which line correctly stores energy?",
        prompt: "The robot needs energy = 100.",
        options: ["energy = 100", "energy == 100", "100 = energy", "print = 100"],
        correctAnswer: "energy = 100",
        explanation: "One equals sign stores a value.",
        xp: 30,
      },
      {
        id: "missing-quotes",
        title: "Voice Module",
        difficulty: "Pro",
        instruction: "Fix the broken print statement.",
        prompt: "print(Hello)",
        options: ['print("Hello")', "print = Hello", '"print"(Hello)', "Hello(print)"],
        correctAnswer: 'print("Hello")',
        explanation: "Hello is text, so it needs quotes.",
        xp: 30,
      },
    ],
  },
];

export const variableGameLevels = games[0].levels;

export function getAllGames() {
  return games;
}

export function getGameBySlug(slug: string) {
  return games.find((game) => game.slug === slug);
}
