"use client";

import type { MiniChallenge } from "@/types";

type ChallengeCardProps = {
  challenge: MiniChallenge;
  response: string;
  isComplete: boolean;
  onChangeResponse: (response: string) => void;
  onComplete: () => void;
};

export function ChallengeCard({
  challenge,
  response,
  isComplete,
  onChangeResponse,
  onComplete,
}: ChallengeCardProps) {
  return (
    <section className="rounded-3xl border border-emerald-300/20 bg-emerald-300/10 p-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-200">
            Mini challenge
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-white">
            {challenge.title}
          </h2>
        </div>
        <span className="rounded-full border border-emerald-300/30 bg-slate-950/50 px-4 py-2 text-sm font-semibold text-emerald-100">
          {challenge.xpReward} XP
        </span>
      </div>

      <p className="mt-4 leading-7 text-emerald-100">{challenge.prompt}</p>

      <ul className="mt-5 grid gap-3">
        {challenge.checklist.map((item) => (
          <li key={item} className="flex gap-3 text-sm text-emerald-100">
            <span className="mt-1 h-2 w-2 rounded-full bg-emerald-300" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <textarea
        value={response}
        onChange={(event) => onChangeResponse(event.target.value)}
        placeholder="Write your mini program here..."
        className="mt-6 min-h-40 w-full resize-y rounded-2xl border border-emerald-300/20 bg-slate-950 p-4 font-mono text-sm leading-6 text-slate-200 outline-none transition placeholder:text-slate-600 focus:border-emerald-300"
      />

      <button
        type="button"
        onClick={onComplete}
        disabled={isComplete || response.trim().length === 0}
        className="mt-5 inline-flex h-12 items-center justify-center rounded-full bg-emerald-400 px-6 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isComplete ? "Challenge complete" : "Mark Challenge Complete"}
      </button>
    </section>
  );
}
