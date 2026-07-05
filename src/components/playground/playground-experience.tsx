"use client";

import { useMemo, useState } from "react";
import { CodeEditor } from "@/components/playground/code-editor";
import { ExampleSelector } from "@/components/playground/example-selector";
import { OutputPanel } from "@/components/playground/output-panel";
import { playgroundExamples } from "@/data/playground-examples";

export function PlaygroundExperience() {
  const [selectedExampleId, setSelectedExampleId] = useState(
    playgroundExamples[0].id,
  );
  const selectedExample = useMemo(
    () =>
      playgroundExamples.find((example) => example.id === selectedExampleId) ??
      playgroundExamples[0],
    [selectedExampleId],
  );
  const [code, setCode] = useState(selectedExample.code);
  const [output, setOutput] = useState("");
  const [hasRun, setHasRun] = useState(false);

  function handleSelectExample(exampleId: string) {
    const nextExample =
      playgroundExamples.find((example) => example.id === exampleId) ??
      playgroundExamples[0];

    setSelectedExampleId(nextExample.id);
    setCode(nextExample.code);
    setOutput("");
    setHasRun(false);
  }

  function handleRunCode() {
    const trimmedCode = code.trim();

    setOutput(
      trimmedCode.length > 0
        ? selectedExample.output
        : "Nothing to run yet. Try choosing an example or typing a print() statement.",
    );
    setHasRun(true);
  }

  function handleReset() {
    setCode(selectedExample.code);
    setOutput("");
    setHasRun(false);
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
      <div className="grid gap-5">
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
          <div className="grid gap-4 sm:grid-cols-[1fr_auto_auto] sm:items-end">
            <ExampleSelector
              examples={playgroundExamples}
              selectedExampleId={selectedExampleId}
              onSelectExample={handleSelectExample}
            />
            <button
              type="button"
              onClick={handleRunCode}
              className="inline-flex h-12 items-center justify-center rounded-full bg-emerald-400 px-6 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
            >
              Run Code
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex h-12 items-center justify-center rounded-full border border-white/10 px-6 text-sm font-semibold text-white transition hover:border-emerald-300/50 hover:bg-white/5"
            >
              Reset
            </button>
          </div>
        </div>

        <CodeEditor code={code} onChangeCode={setCode} />
      </div>

      <div className="grid gap-5 content-start">
        <OutputPanel output={output} hasRun={hasRun} />
        <section className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-300">
            Beginner Hint
          </p>
          <h2 className="mt-3 text-xl font-semibold text-white">
            {selectedExample.label}
          </h2>
          <p className="mt-3 leading-7 text-slate-300">
            {selectedExample.hint}
          </p>
          <div className="mt-5 rounded-2xl border border-white/10 bg-slate-950/60 p-4 text-sm leading-6 text-slate-400">
            This playground uses simulated output for now. It is designed for
            reading, editing, and predicting Python behavior before real code
            execution is added.
          </div>
        </section>
      </div>
    </div>
  );
}
