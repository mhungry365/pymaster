export type DailyChallenge = {
  id: string;
  title: string;
  topic: string;
  task: string;
  xpReward: number;
};

export const dailyChallenges: DailyChallenge[] = [
  {
    id: "daily-print",
    title: "Print a welcome message",
    topic: "print()",
    task: 'Write one print() line that shows "Welcome to Py2Learn".',
    xpReward: 15,
  },
  {
    id: "daily-variables",
    title: "Store a learner name",
    topic: "Variables",
    task: "Create a variable named learner and store your name inside it.",
    xpReward: 15,
  },
  {
    id: "daily-strings",
    title: "Build a string sentence",
    topic: "Strings",
    task: "Create two string variables and combine them in one printed sentence.",
    xpReward: 20,
  },
  {
    id: "daily-numbers",
    title: "Add two numbers",
    topic: "Numbers",
    task: "Store two numbers in variables, add them, and print the total.",
    xpReward: 20,
  },
  {
    id: "daily-lists",
    title: "Make a topic list",
    topic: "Lists",
    task: "Create a list of three Python topics and print the first item.",
    xpReward: 25,
  },
  {
    id: "daily-conditions",
    title: "Check a score",
    topic: "Conditions",
    task: "Use an if statement to print a message when score is at least 5.",
    xpReward: 25,
  },
  {
    id: "daily-loops",
    title: "Loop through topics",
    topic: "Loops",
    task: "Use a for loop to print each item in a list of Python topics.",
    xpReward: 30,
  },
];

export function getDailyChallenge(date = new Date()) {
  const startOfYear = new Date(date.getFullYear(), 0, 0);
  const dayOfYear = Math.floor(
    (date.getTime() - startOfYear.getTime()) / 86_400_000,
  );

  return dailyChallenges[dayOfYear % dailyChallenges.length];
}
