"use client";

import { useState } from "react";
import type { FillBlankChallenge, PracticeTaskData } from "@/types";

type PracticeTaskProps = {
  fillBlank: FillBlankChallenge;
  task: PracticeTaskData;
};

export function PracticeTask({ fillBlank, task }: PracticeTaskProps) {
  const [answer, setAnswer] = useState("");
  const [practiceNotes, setPracticeNotes] = useState("");

  const normalizedAnswer = answer.trim();
  const isBlankCorrect = normalizedAnswer === fillBlank.answer;

  return (
    <section className="grid gap-6 lg:grid-cols-2">
      <div className="rounded-3xl border border-slate-200 bg-white p-6">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-300">
          Fill in the blank
        </p>
        <h2 className="mt-3 text-2xl font-semibold text-slate-950">
          Complete the code
        </h2>
        <p className="mt-3 leading-7 text-slate-600">{fillBlank.prompt}</p>

        <div className="mt-6 rounded-2xl bg-slate-100 p-5 font-mono text-sm leading-7 text-slate-200">
          <span>{fillBlank.codeBeforeBlank}</span>
          <input
            aria-label="Blank variable name"
            value={answer}
            onChange={(event) => setAnswer(event.target.value)}
            placeholder="variable_name"
            className="mx-1 w-40 rounded-lg border border-slate-200 bg-white px-3 py-2 text-emerald-200 outline-none transition placeholder:text-slate-600 focus:border-emerald-300"
          />
          <span className="whitespace-pre-wrap">{fillBlank.codeAfterBlank}</span>
        </div>

        <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-100/50 p-4 text-sm leading-6 text-slate-600">
          {normalizedAnswer.length === 0
            ? fillBlank.hint
            : isBlankCorrect
              ? "Nice. The variable name matches the one used by print()."
              : "Close. Check the name used inside print() and match it exactly."}
        </div>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-6">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-300">
          Practice Task
        </p>
        <h2 className="mt-3 text-2xl font-semibold text-slate-950">
          {task.title}
        </h2>
        <p className="mt-3 leading-7 text-slate-600">{task.prompt}</p>

        <ul className="mt-5 space-y-3">
          {task.checklist.map((item) => (
            <li key={item} className="flex gap-3 text-sm text-slate-600">
              <span className="mt-1 h-2 w-2 rounded-full bg-emerald-300" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <textarea
          value={practiceNotes}
          onChange={(event) => setPracticeNotes(event.target.value)}
          placeholder="Draft your variables here..."
          className="mt-6 min-h-36 w-full resize-y rounded-2xl border border-slate-200 bg-slate-100 p-4 font-mono text-sm leading-6 text-slate-200 outline-none transition placeholder:text-slate-600 focus:border-emerald-300"
        />
      </div>
    </section>
  );
}
