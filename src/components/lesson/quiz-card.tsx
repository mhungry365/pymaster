"use client";

import { useState } from "react";
import type { QuizQuestion } from "@/types";

type QuizCardProps = {
  quiz: QuizQuestion;
};

export function QuizCard({ quiz }: QuizCardProps) {
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);

  const isCorrect = selectedOptionId === quiz.correctOptionId;
  const hasAnswered = selectedOptionId !== null;

  return (
    <section className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-300">
        Quick Check
      </p>
      <h2 className="mt-3 text-2xl font-semibold text-white">
        {quiz.question}
      </h2>

      <div className="mt-6 grid gap-3">
        {quiz.options.map((option) => {
          const isSelected = selectedOptionId === option.id;

          return (
            <button
              key={option.id}
              type="button"
              onClick={() => setSelectedOptionId(option.id)}
              className={`rounded-2xl border px-4 py-3 text-left text-sm font-medium transition ${
                isSelected
                  ? "border-emerald-300 bg-emerald-300/10 text-white"
                  : "border-white/10 bg-slate-950/50 text-slate-300 hover:border-emerald-300/40 hover:text-white"
              }`}
            >
              {option.label}
            </button>
          );
        })}
      </div>

      {hasAnswered ? (
        <div
          className={`mt-5 rounded-2xl border p-4 text-sm leading-6 ${
            isCorrect
              ? "border-emerald-300/30 bg-emerald-300/10 text-emerald-100"
              : "border-amber-300/30 bg-amber-300/10 text-amber-100"
          }`}
        >
          <p className="font-semibold">
            {isCorrect ? "Correct" : "Try again"}
          </p>
          <p className="mt-1">{quiz.explanation}</p>
        </div>
      ) : null}
    </section>
  );
}
