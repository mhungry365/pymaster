export type GameLevel = {
  id: string;
  title: string;
  instruction: string;
  prompt: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  xp: number;
};

export const variableGameLevels: GameLevel[] = [
  {
    id: "variable-name",
    title: "Name the Box",
    instruction: "Choose the best variable name for a player's score.",
    prompt: "A game needs to remember 100 points.",
    options: ["player_score", "100", "print", "score-player"],
    correctAnswer: "player_score",
    explanation: "player_score is readable and uses snake_case, which Python developers like.",
    xp: 10,
  },
  {
    id: "store-text",
    title: "Store Text",
    instruction: "Pick the correct Python code.",
    prompt: "Store the name Mingz in a variable called name.",
    options: ['name = "Mingz"', "name == Mingz", '"Mingz" = name', "print = name"],
    correctAnswer: 'name = "Mingz"',
    explanation: "Use one equals sign to store a value. Text must go inside quotes.",
    xp: 10,
  },
  {
    id: "predict-output",
    title: "Treasure Output",
    instruction: "Choose what Python will print.",
    prompt: 'name = "Mingz"\nprint(name)',
    options: ["name", "Mingz", '"name"', "Error"],
    correctAnswer: "Mingz",
    explanation: "Python prints the value stored inside the variable, not the variable name.",
    xp: 10,
  },
];
