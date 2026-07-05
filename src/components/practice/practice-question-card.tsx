"use client";

import type {
  CodeReadingPracticeQuestion,
  MultipleChoicePracticeQuestion,
} from "@/types";

type PracticeQuestionCardProps = {
  question: MultipleChoicePracticeQuestion | CodeReadingPracticeQuestion;
  selectedOptionId: string | undefined;
  isCompleted: boolean;
  onSelectAnswer: (questionId: string, optionId: string, isCorrect: boolean) => void;
};

export function PracticeQuestionCard({
  question,
  selectedOptionId,
  isCompleted,
  onSelectAnswer,
}: PracticeQuestionCardProps) {
  const hasAnswered = selectedOptionId !== undefined || isCompleted;
  const isCorrect = selectedOptionId === question.correctOptionId || isCompleted;

  return (
    <section className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-300">
            {question.type === "code-reading"
              ? "Code reading"
              : "Multiple choice"}
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

      {question.type === "code-reading" ? (
        <pre className="mt-5 overflow-x-auto rounded-2xl bg-slate-950 p-5 text-sm leading-7 text-slate-200">
          <code>{question.code}</code>
        </pre>
      ) : null}

      <div className="mt-6 grid gap-3">
        {question.options.map((option) => {
          const isSelected = selectedOptionId === option.id;

          return (
            <button
              key={option.id}
              type="button"
              onClick={() =>
                onSelectAnswer(
                  question.id,
                  option.id,
                  option.id === question.correctOptionId,
                )
              }
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
            {isCorrect ? "Correct" : "Not quite"}
          </p>
          <p className="mt-1">{question.explanation}</p>
        </div>
      ) : null}
    </section>
  );
}
