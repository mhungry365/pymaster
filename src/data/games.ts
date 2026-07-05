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

function xpFor(difficulty: GameDifficulty) {
  return {
    Beginner: 10,
    Easy: 15,
    Intermediate: 20,
    Advanced: 25,
    Pro: 30,
  }[difficulty];
}

function makeLevel(
  game: string,
  difficulty: GameDifficulty,
  index: number,
  title: string,
  instruction: string,
  prompt: string,
  options: string[],
  correctAnswer: string,
  explanation: string,
): GameLevel {
  return {
    id: `${game}-${difficulty.toLowerCase()}-${index + 1}`,
    title: `${title} ${index + 1}`,
    difficulty,
    instruction,
    prompt,
    options,
    correctAnswer,
    explanation,
    xp: xpFor(difficulty),
  };
}

function buildQuestions(
  game: string,
  builder: (difficulty: GameDifficulty, index: number) => GameLevel,
) {
  return difficulties.flatMap((difficulty) =>
    Array.from({ length: 50 }, (_, index) => builder(difficulty, index)),
  );
}

const names = ["score", "age", "coins", "health", "level", "speed", "points", "lives", "energy", "total"];
const textNames = ["name", "city", "pet", "team", "food", "hero", "planet", "colour", "game", "friend"];
const words = ["Mingz", "Python", "Dragon", "Dublin", "Tiger", "Robot", "Rocket", "Apple", "Ninja", "Ocean"];

function variableQuestion(difficulty: GameDifficulty, index: number) {
  const n = index + 1;
  const variable = names[index % names.length];
  const value = (index + 2) * 5;
  const textVariable = textNames[index % textNames.length];
  const word = words[index % words.length];
  const type = index % 5;

  if (type === 0) {
    return makeLevel(
      "variables",
      difficulty,
      index,
      "Store a Number",
      "Choose the correct Python variable assignment.",
      `Store ${value} in a variable called ${variable}.`,
      [`${variable} = ${value}`, `${variable} == ${value}`, `${value} = ${variable}`, `print = ${value}`],
      `${variable} = ${value}`,
      "Use one equals sign to store a value in a variable.",
    );
  }

  if (type === 1) {
    return makeLevel(
      "variables",
      difficulty,
      index,
      "Store Text",
      "Choose the correct way to store text.",
      `Store "${word}" in a variable called ${textVariable}.`,
      [`${textVariable} = "${word}"`, `${textVariable} = ${word}`, `"${word}" = ${textVariable}`, `${textVariable} == "${word}"`],
      `${textVariable} = "${word}"`,
      "Text must be wrapped in quotes.",
    );
  }

  if (type === 2) {
    return makeLevel(
      "variables",
      difficulty,
      index,
      "Predict Output",
      "Choose what Python will print.",
      `${variable} = ${value}\nprint(${variable})`,
      [`${value}`, `${variable}`, `"${value}"`, "Error"],
      `${value}`,
      "Python prints the value stored inside the variable.",
    );
  }

  if (type === 3) {
    return makeLevel(
      "variables",
      difficulty,
      index,
      "Update Value",
      "Choose the final printed value.",
      `${variable} = ${value}\n${variable} = ${value + n}\nprint(${variable})`,
      [`${value + n}`, `${value}`, `${variable}`, "Error"],
      `${value + n}`,
      "The latest value replaces the old value.",
    );
  }

  return makeLevel(
    "variables",
    difficulty,
    index,
    "Best Variable Name",
    "Choose the best variable name.",
    `You need a variable for a player's ${variable}.`,
    [`player_${variable}`, `player-${variable}`, `${value}`, "print"],
    `player_${variable}`,
    "Python variable names should be readable and can use underscores.",
  );
}

function stringQuestion(difficulty: GameDifficulty, index: number) {
  const word = words[index % words.length];
  const word2 = words[(index + 3) % words.length];
  const variable = textNames[index % textNames.length];
  const type = index % 5;

  if (type === 0) {
    return makeLevel("strings", difficulty, index, "Quote Text", "Choose the correct string.", `Store ${word} as text.`, [`${variable} = "${word}"`, `${variable} = ${word}`, `"${variable}" = ${word}`, `${word} = "${variable}"`], `${variable} = "${word}"`, "Strings need quotes.");
  }

  if (type === 1) {
    return makeLevel("strings", difficulty, index, "Join Strings", "Predict the output.", `print("${word}" + "${word2}")`, [`${word}${word2}`, `${word} ${word2}`, `"${word}${word2}"`, "Error"], `${word}${word2}`, "The + operator joins strings exactly as written.");
  }

  if (type === 2) {
    return makeLevel("strings", difficulty, index, "Add Space", "Predict the output.", `print("${word}" + " " + "${word2}")`, [`${word} ${word2}`, `${word}${word2}`, `${word}+${word2}`, "Error"], `${word} ${word2}`, "The middle string adds a space.");
  }

  if (type === 3) {
    return makeLevel("strings", difficulty, index, "Text or Number", "Choose the type.", `${variable} = "${index + 10}"`, ["string", "number", "boolean", "list"], "string", "Quotes make it text.");
  }

  return makeLevel("strings", difficulty, index, "Print Text", "Choose the correct print statement.", `Print ${word}.`, [`print("${word}")`, `print(${word})`, `"print(${word})"`, `${word}(print)`], `print("${word}")`, "Text inside print needs quotes.");
}

function numberQuestion(difficulty: GameDifficulty, index: number) {
  const a = index + 2;
  const b = (index % 9) + 1;
  const type = index % 5;

  if (type === 0) return makeLevel("numbers", difficulty, index, "Addition", "Choose the output.", `print(${a} + ${b})`, [`${a + b}`, `${a}${b}`, `${a - b}`, "Error"], `${a + b}`, "Python calculates the addition.");
  if (type === 1) return makeLevel("numbers", difficulty, index, "Subtraction", "Choose the output.", `print(${a + 10} - ${b})`, [`${a + 10 - b}`, `${a + 10 + b}`, `${b}`, "Error"], `${a + 10 - b}`, "Python calculates the subtraction.");
  if (type === 2) return makeLevel("numbers", difficulty, index, "Multiplication", "Choose the output.", `print(${a} * ${b})`, [`${a * b}`, `${a + b}`, `${a}${b}`, "Error"], `${a * b}`, "* means multiply.");
  if (type === 3) return makeLevel("numbers", difficulty, index, "Variable Maths", "Choose the output.", `coins = ${a}\ncoins = coins + ${b}\nprint(coins)`, [`${a + b}`, `${a}`, `${b}`, "coins"], `${a + b}`, "The variable is updated with the new total.");
  return makeLevel("numbers", difficulty, index, "Order of Operations", "Choose the output.", `print(${a} + ${b} * 2)`, [`${a + b * 2}`, `${(a + b) * 2}`, `${a + b}`, "Error"], `${a + b * 2}`, "Multiplication happens before addition.");
}

function conditionQuestion(difficulty: GameDifficulty, index: number) {
  const value = index + 5;
  const limit = (index % 10) + 8;
  const type = index % 5;

  if (type === 0) return makeLevel("conditions", difficulty, index, "Greater Than", "Choose what prints.", `score = ${value}\nif score > ${limit}:\n    print("Win")`, [value > limit ? "Win" : "Nothing prints", value > limit ? "Nothing prints" : "Win", "score", "Error"], value > limit ? "Win" : "Nothing prints", "The if block only runs when the condition is true.");
  if (type === 1) return makeLevel("conditions", difficulty, index, "Age Check", "Choose what prints.", `age = ${value}\nif age >= 18:\n    print("Adult")\nelse:\n    print("Young")`, [value >= 18 ? "Adult" : "Young", value >= 18 ? "Young" : "Adult", "age", "Error"], value >= 18 ? "Adult" : "Young", "Python chooses if or else based on the condition.");
  if (type === 2) return makeLevel("conditions", difficulty, index, "Boolean Door", "Choose what prints.", `has_key = ${index % 2 === 0 ? "True" : "False"}\nif has_key:\n    print("Open")`, [index % 2 === 0 ? "Open" : "Nothing prints", index % 2 === 0 ? "Nothing prints" : "Open", "True", "Error"], index % 2 === 0 ? "Open" : "Nothing prints", "True runs the block. False skips it.");
  if (type === 3) return makeLevel("conditions", difficulty, index, "Compare Equal", "Choose the comparison operator.", `Check if score equals ${value}.`, [`score == ${value}`, `score = ${value}`, `score === ${value}`, `score => ${value}`], `score == ${value}`, "== compares values.");
  return makeLevel("conditions", difficulty, index, "Not Equal", "Choose what prints.", `pin = ${value}\nif pin != ${limit}:\n    print("Different")`, [value !== limit ? "Different" : "Nothing prints", value !== limit ? "Nothing prints" : "Different", "pin", "Error"], value !== limit ? "Different" : "Nothing prints", "!= means not equal.");
}

function loopQuestion(difficulty: GameDifficulty, index: number) {
  const count = (index % 5) + 2;
  const item1 = words[index % words.length].toLowerCase();
  const item2 = words[(index + 1) % words.length].toLowerCase();
  const type = index % 5;

  if (type === 0) return makeLevel("loops", difficulty, index, "Repeat Count", "How many times does it print?", `for i in range(${count}):\n    print("Go")`, [`${count} times`, `${count - 1} times`, "Forever", "Error"], `${count} times`, `range(${count}) repeats ${count} times.`);
  if (type === 1) return makeLevel("loops", difficulty, index, "First Number", "What prints first?", `for number in range(${count}):\n    print(number)`, ["0", "1", `${count}`, "Error"], "0", "range starts at 0.");
  if (type === 2) return makeLevel("loops", difficulty, index, "List Loop", "What appears?", `items = ["${item1}", "${item2}"]\nfor item in items:\n    print(item)`, [`${item1} and ${item2}`, "item", "items", "Error"], `${item1} and ${item2}`, "The loop visits every list item.");
  if (type === 3) return makeLevel("loops", difficulty, index, "Loop Variable", "What changes each loop?", `for animal in ["cat", "dog", "fox"]:\n    print(animal)`, ["animal", "cat then dog then fox", "fox only", "Error"], "cat then dog then fox", "The loop variable changes to each value.");
  return makeLevel("loops", difficulty, index, "Total Repeats", "How many lines are printed?", `for x in range(${count + 1}):\n    print("Hi")`, [`${count + 1}`, `${count}`, "1", "Forever"], `${count + 1}`, "The loop repeats once for each value in range.");
}

function debuggingQuestion(difficulty: GameDifficulty, index: number) {
  const word = words[index % words.length];
  const variable = names[index % names.length];
  const value = index + 10;
  const type = index % 5;

  if (type === 0) return makeLevel("debugging", difficulty, index, "Fix Assignment", "Choose the correct line.", `Broken idea: ${variable} should store ${value}.`, [`${variable} = ${value}`, `${variable} == ${value}`, `${value} = ${variable}`, `print = ${value}`], `${variable} = ${value}`, "Use = to assign.");
  if (type === 1) return makeLevel("debugging", difficulty, index, "Fix Quotes", "Fix the broken print.", `print(${word})`, [`print("${word}")`, `print = "${word}"`, `"print(${word})"`, `${word}(print)`], `print("${word}")`, "Text needs quotes.");
  if (type === 2) return makeLevel("debugging", difficulty, index, "Fix Colon", "Choose the correct if line.", `if ${variable} > ${value}`, [`if ${variable} > ${value}:`, `if ${variable} > ${value};`, `if: ${variable} > ${value}`, `if ${variable} > ${value}.`], `if ${variable} > ${value}:`, "Python if statements need a colon.");
  if (type === 3) return makeLevel("debugging", difficulty, index, "Fix List", "Choose the correct list.", `Store "${word}" and "${words[(index + 1) % words.length]}" in things.`, [`things = ["${word}", "${words[(index + 1) % words.length]}"]`, `things = "${word}", "${words[(index + 1) % words.length]}"`, `things == [${word}]`, `things = ${word} ${words[(index + 1) % words.length]}`], `things = ["${word}", "${words[(index + 1) % words.length]}"]`, "Lists use square brackets.");
  return makeLevel("debugging", difficulty, index, "Fix Indentation", "What is missing?", `if True:\nprint("${word}")`, ["Indentation", "More quotes", "A list", "Nothing"], "Indentation", "Python blocks need indentation.");
}

export const games: GameDefinition[] = [
  {
    slug: "variables",
    title: "Variable Quest",
    emoji: "📦",
    description: "Learn how Python remembers information using variables.",
    concept: "Variables",
    difficulty: "Beginner",
    levels: buildQuestions("variables", variableQuestion),
  },
  {
    slug: "strings",
    title: "String Spellbook",
    emoji: "🔤",
    description: "Learn text, quotes, joining, and string behaviour.",
    concept: "Strings",
    difficulty: "Beginner",
    levels: buildQuestions("strings", stringQuestion),
  },
  {
    slug: "numbers",
    title: "Number Ninja",
    emoji: "🥷",
    description: "Train with Python numbers, maths, and calculations.",
    concept: "Numbers",
    difficulty: "Easy",
    levels: buildQuestions("numbers", numberQuestion),
  },
  {
    slug: "conditions",
    title: "Decision Dungeon",
    emoji: "🚪",
    description: "Open doors by choosing correct if statement results.",
    concept: "Conditions",
    difficulty: "Intermediate",
    levels: buildQuestions("conditions", conditionQuestion),
  },
  {
    slug: "loops",
    title: "Loop Runner",
    emoji: "🏃",
    description: "Run repeated actions and understand loops visually.",
    concept: "Loops",
    difficulty: "Advanced",
    levels: buildQuestions("loops", loopQuestion),
  },
  {
    slug: "debugging",
    title: "Robot Fixer",
    emoji: "🤖",
    description: "Fix broken Python so the robot can move again.",
    concept: "Debugging",
    difficulty: "Pro",
    levels: buildQuestions("debugging", debuggingQuestion),
  },
];

export const variableGameLevels = games[0].levels;

export function getAllGames() {
  return games;
}

export function getGameBySlug(slug: string) {
  return games.find((game) => game.slug === slug);
}
