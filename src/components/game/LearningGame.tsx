"use client";

import { useMemo, useState } from "react";
import type { GameDefinition, GameDifficulty } from "@/data/games";

type Props = {
  game: GameDefinition;
};

const difficultyOrder: GameDifficulty[] = [
  "Beginner",
  "Easy",
  "Intermediate",
  "Advanced",
  "Pro",
];

const QUESTIONS_PER_GAME = 10;
const PASS_MARK = 7;

function shuffle<T>(items: T[]) {
  const copy = [...items];

  for (let index = copy.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[randomIndex]] = [copy[randomIndex], copy[index]];
  }

  return copy;
}

export function LearningGame({ game }: Props) {
  const availableDifficulties = useMemo(() => {
    return difficultyOrder.filter((difficulty) =>
      game.levels.some((level) => level.difficulty === difficulty),
    );
  }, [game.levels]);

  const [selectedDifficulty, setSelectedDifficulty] = useState<GameDifficulty>(
    availableDifficulties[0] ?? "Beginner",
  );
  const [sessionSeed, setSessionSeed] = useState(0);
  const [levelIndex, setLevelIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);

  const activeDifficulty = availableDifficulties.includes(selectedDifficulty)
    ? selectedDifficulty
    : availableDifficulties[0];

  const difficultyLevels = game.levels.filter(
    (level) => level.difficulty === activeDifficulty,
  );

  const levels = useMemo(() => {
    return shuffle(difficultyLevels).slice(0, QUESTIONS_PER_GAME);
  }, [activeDifficulty, game.slug, sessionSeed]);

  const level = levels[levelIndex] ?? levels[0];
  const answeredCount = selected ? levelIndex + 1 : levelIndex;
  const isFinished = levelIndex >= levels.length;
  const passed = correctCount >= PASS_MARK;

  function changeDifficulty(difficulty: GameDifficulty) {
    setSelectedDifficulty(difficulty);
    restartNewSession();
  }

  function choose(option: string) {
    if (!level || selected) return;

    setSelected(option);

    if (option === level.correctAnswer) {
      setScore((value) => value + level.xp);
      setCorrectCount((value) => value + 1);
    }
  }

  function next() {
    setSelected(null);

    if (levelIndex >= levels.length - 1) {
      setLevelIndex(levels.length);
      return;
    }

    setLevelIndex((value) => value + 1);
  }

  function restartNewSession() {
    setLevelIndex(0);
    setSelected(null);
    setScore(0);
    setCorrectCount(0);
    setSessionSeed((value) => value + 1);
  }

  if (!level && !isFinished) {
    return (
      <div className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white p-8 text-slate-950">
        <h1 className="text-3xl font-black">No levels found</h1>
        <p className="mt-3 text-slate-600">This game does not have levels yet.</p>
      </div>
    );
  }

  if (isFinished) {
    return (
      <div className="mx-auto max-w-4xl rounded-[2rem] border border-slate-200 bg-white p-8 text-center shadow-sm">
        <div className="text-7xl">{passed ? "🏆" : "🌱"}</div>

        <h1 className="mt-5 text-4xl font-black text-slate-950">
          {passed ? "You won!" : "Good try — play again!"}
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
          You answered {correctCount} out of {levels.length} correctly in{" "}
          <strong>{game.title}</strong> on <strong>{activeDifficulty}</strong>{" "}
          mode.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <div className="rounded-3xl bg-cyan-50 p-5">
            <p className="text-sm font-bold uppercase tracking-wide text-cyan-700">
              Score
            </p>
            <p className="mt-2 text-4xl font-black text-slate-950">
              {correctCount}/{levels.length}
            </p>
          </div>

          <div className="rounded-3xl bg-emerald-50 p-5">
            <p className="text-sm font-bold uppercase tracking-wide text-emerald-700">
              XP Earned
            </p>
            <p className="mt-2 text-4xl font-black text-slate-950">{score}</p>
          </div>

          <div className="rounded-3xl bg-purple-50 p-5">
            <p className="text-sm font-bold uppercase tracking-wide text-purple-700">
              Result
            </p>
            <p className="mt-2 text-4xl font-black text-slate-950">
              {passed ? "Pass" : "Fail"}
            </p>
          </div>
        </div>

        <p className="mt-6 text-slate-600">
          {passed
            ? "Great job. You are ready to try a harder level or replay for a fresh set of questions."
            : "No problem. Replay the game and you’ll get a different set of questions to practise again."}
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <button
            type="button"
            onClick={restartNewSession}
            className="rounded-2xl bg-cyan-400 px-6 py-3 font-black text-slate-950 hover:bg-cyan-300"
          >
            Play Again with New Questions
          </button>

          <a
            href="/games"
            className="rounded-2xl border border-slate-200 px-6 py-3 font-black text-slate-700 hover:bg-slate-50"
          >
            Back to Games
          </a>
        </div>
      </div>
    );
  }

  const isCorrect = selected === level.correctAnswer;
  const progressPercent = ((levelIndex + 1) / levels.length) * 100;

  return (
    <div className="mx-auto grid max-w-5xl gap-6">
      <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-600">
              {game.concept} Game
            </p>
            <h1 className="mt-2 text-4xl font-black text-slate-950">
              {game.emoji} {game.title}
            </h1>
            <p className="mt-3 max-w-2xl text-slate-600">{game.description}</p>
          </div>

          <div className="rounded-2xl bg-cyan-100 px-5 py-3 text-sm font-black text-cyan-800">
            XP: {score}
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {availableDifficulties.map((difficulty) => (
            <button
              key={difficulty}
              type="button"
              onClick={() => changeDifficulty(difficulty)}
              className={[
                "rounded-full border px-4 py-2 text-sm font-bold transition",
                activeDifficulty === difficulty
                  ? "border-cyan-300 bg-cyan-100 text-cyan-800"
                  : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50",
              ].join(" ")}
            >
              {difficulty}
            </button>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between text-sm font-bold text-slate-500">
          <span>
            Question {levelIndex + 1} of {levels.length}
          </span>
          <span>
            Correct: {correctCount} / {answeredCount}
          </span>
        </div>

        <div className="mt-3 h-3 overflow-hidden rounded-full bg-slate-100">
          <div
            className="h-full rounded-full bg-cyan-400 transition-all"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        <p className="mt-3 text-sm text-slate-500">
          Pass mark: {PASS_MARK}/{QUESTIONS_PER_GAME}. Every new game gives a
          fresh random set from the 50-question bank.
        </p>
      </div>

      <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
        <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
          <div>
            <p className="text-sm font-bold text-slate-500">
              {activeDifficulty} • Level {levelIndex + 1}
            </p>

            <h2 className="mt-2 text-3xl font-black text-slate-950">
              {level.title}
            </h2>

            <p className="mt-3 text-lg text-slate-600">{level.instruction}</p>

            <pre className="mt-6 whitespace-pre-wrap rounded-3xl bg-slate-100 p-5 text-base font-bold text-slate-900">
              {level.prompt}
            </pre>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {level.options.map((option) => {
                const active = selected === option;
                const correct = option === level.correctAnswer;

                return (
                  <button
                    key={option}
                    type="button"
                    onClick={() => choose(option)}
                    className={[
                      "rounded-2xl border p-4 text-left font-bold transition",
                      !selected &&
                        "border-slate-200 bg-white hover:border-cyan-300 hover:bg-cyan-50",
                      selected &&
                        correct &&
                        "border-emerald-300 bg-emerald-100 text-emerald-900",
                      selected &&
                        active &&
                        !correct &&
                        "border-red-300 bg-red-100 text-red-900",
                      selected &&
                        !active &&
                        !correct &&
                        "border-slate-200 bg-slate-50 text-slate-400",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                  >
                    {option}
                  </button>
                );
              })}
            </div>

            {selected ? (
              <div className="mt-6 rounded-3xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-xl font-black">
                  {isCorrect ? "🎉 Correct!" : "🧠 Good try!"}
                </p>
                <p className="mt-2 text-slate-600">{level.explanation}</p>

                <div className="mt-5">
                  <button
                    type="button"
                    onClick={next}
                    className="rounded-2xl bg-cyan-400 px-5 py-3 font-black text-slate-950 hover:bg-cyan-300"
                  >
                    {levelIndex >= levels.length - 1
                      ? "See Result"
                      : "Next Question"}
                  </button>
                </div>
              </div>
            ) : null}
          </div>

          <aside className="rounded-[2rem] bg-gradient-to-br from-cyan-100 to-purple-100 p-6">
            <div className="text-6xl">🐍</div>
            <h3 className="mt-4 text-2xl font-black text-slate-950">
              PyBuddy says
            </h3>
            <p className="mt-3 text-slate-700">
              Answer 10 questions. Get at least 7 correct to pass. Replay anytime
              for a new random set.
            </p>

            <div className="mt-6 rounded-2xl bg-white/80 p-4 text-sm font-bold text-slate-700">
              Current mode: {activeDifficulty}
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
