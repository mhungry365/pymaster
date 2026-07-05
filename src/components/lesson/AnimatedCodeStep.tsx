"use client";

import { useState } from "react";

type Step = {
  code: string;
  explanation: string;
};

type AnimatedCodeStepProps = {
  steps: Step[];
};

export function AnimatedCodeStep({ steps }: AnimatedCodeStepProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const step = steps[currentStep];

  return (
    <div className="rounded-3xl border border-cyan-400/30 bg-slate-900 p-6">
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-xl font-black text-white">Step-by-step Code</h3>
        <span className="rounded-full bg-white/10 px-3 py-1 text-sm text-slate-300">
          {currentStep + 1} / {steps.length}
        </span>
      </div>

      <pre className="mt-5 overflow-x-auto rounded-2xl bg-slate-950 p-5 text-sm text-cyan-200">
        <code>{step.code}</code>
      </pre>

      <p className="mt-4 text-slate-300">{step.explanation}</p>

      <div className="mt-6 flex gap-3">
        <button
          onClick={() => setCurrentStep((value) => Math.max(0, value - 1))}
          disabled={currentStep === 0}
          className="rounded-xl border border-white/10 px-4 py-2 font-bold text-white disabled:cursor-not-allowed disabled:opacity-40"
        >
          Previous
        </button>

        <button
          onClick={() =>
            setCurrentStep((value) => Math.min(steps.length - 1, value + 1))
          }
          disabled={currentStep === steps.length - 1}
          className="rounded-xl bg-cyan-400 px-4 py-2 font-bold text-slate-950 disabled:cursor-not-allowed disabled:opacity-40"
        >
          Next
        </button>
      </div>
    </div>
  );
}
