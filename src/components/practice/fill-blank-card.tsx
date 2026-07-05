"use client";

import type { FillBlankPracticeQuestion } from "@/types";

type FillBlankCardProps = {
  question: FillBlankPracticeQuestion;
  answer: string | undefined;
  isCompleted: boolean;
  onChangeAnswer: (questionId: string, answer: string, isCorrect: boolean) => void;
};

export function FillBlankCard({
  question,
  answer = "",
  isCompleted,
  onChangeAnswer,
}: FillBlankCardProps) {
  const normalizedAnswer = answer.trim();
  const hasAnswered = normalizedAnswer.length > 0 || isCompleted;
  const isCorrect = normalizedAnswer === question.answer || isCompleted;

  return (
    <section className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-300">
            Fill in the blank
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-white">
            {question.title}
          </h2>
        </div>
        <span className="rounded-full border border-emerald-300/30 bg-emerald-300/10 px-4 py-2 text-sm font-semibold text-emerald-200">
          {isCompleted ? "Completed" : `${question.xpReward} XP`}
        </span>
      </div>

      <p className="mt-4 leading-7 text-slate-300">{question.prompt}</p>

      <div className="mt-6 rounded-2xl bg-slate-950 p-5 font-mono text-sm leading-7 text-slate-200">
        <span>{question.codeBeforeBlank}</span>
        <input
          aria-label="Fill in the missing Python code"
          value={answer}
          onChange={(event) =>
            onChangeAnswer(
              question.id,
              event.target.value,
              event.target.value.trim() === question.answer,
            )
          }
          placeholder="answer"
          className="mx-1 w-44 rounded-lg border border-white/10 bg-slate-900 px-3 py-2 text-emerald-200 outline-none transition placeholder:text-slate-600 focus:border-emerald-300"
        />
        <span className="whitespace-pre-wrap">{question.codeAfterBlank}</span>
      </div>

      <div
        className={`mt-5 rounded-2xl border p-4 text-sm leading-6 ${
          !hasAnswered
            ? "border-white/10 bg-slate-950/50 text-slate-300"
            : isCorrect
              ? "border-emerald-300/30 bg-emerald-300/10 text-emerald-100"
              : "border-amber-300/30 bg-amber-300/10 text-amber-100"
        }`}
      >
        <p className="font-semibold">
          {!hasAnswered
            ? "Hint"
            : isCorrect
              ? "Correct"
              : "Keep going"}
        </p>
        <p className="mt-1">
          {!hasAnswered ? question.hint : question.explanation}
        </p>
      </div>
    </section>
  );
}
