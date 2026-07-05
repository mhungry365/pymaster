"use client";

import { useState } from "react";
import type { GameDefinition } from "@/data/games";

type Props = {
  game: GameDefinition;
};

export function LearningGame({ game }: Props) {
  const [levelIndex, setLevelIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [score, setScore] = useState(0);

  const level = game.levels[levelIndex];
  const isCorrect = selected === level.correctAnswer;
  const isLast = levelIndex === game.levels.length - 1;

  function choose(option: string) {
    if (selected) return;
    setSelected(option);
    if (option === level.correctAnswer) {
      setScore((value) => value + level.xp);
    }
  }

  function next() {
    setSelected(null);
    setLevelIndex((value) => Math.min(game.levels.length - 1, value + 1));
  }

  function restart() {
    setSelected(null);
    setLevelIndex(0);
    setScore(0);
  }

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

        <div className="mt-6 h-3 overflow-hidden rounded-full bg-slate-100">
          <div
            className="h-full rounded-full bg-cyan-400 transition-all"
            style={{ width: `${((levelIndex + 1) / game.levels.length) * 100}%` }}
          />
        </div>
      </div>

      <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
        <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
          <div>
            <p className="text-sm font-bold text-slate-500">
              Level {levelIndex + 1} of {game.levels.length} • {level.difficulty}
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
                      !selected && "border-slate-200 bg-white hover:border-cyan-300 hover:bg-cyan-50",
                      selected && correct && "border-emerald-300 bg-emerald-100 text-emerald-900",
                      selected && active && !correct && "border-red-300 bg-red-100 text-red-900",
                      selected && !active && !correct && "border-slate-200 bg-slate-50 text-slate-400",
                    ].filter(Boolean).join(" ")}
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
                  {!isLast ? (
                    <button
                      type="button"
                      onClick={next}
                      className="rounded-2xl bg-cyan-400 px-5 py-3 font-black text-slate-950 hover:bg-cyan-300"
                    >
                      Next Level
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={restart}
                      className="rounded-2xl bg-emerald-400 px-5 py-3 font-black text-slate-950 hover:bg-emerald-300"
                    >
                      Play Again
                    </button>
                  )}
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
              Don’t worry about memorising everything. Play the level, notice the pattern,
              and Python will start making sense.
            </p>
          </aside>
        </div>
      </div>
    </div>
  );
}
