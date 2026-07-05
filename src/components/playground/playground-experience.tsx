"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { CodeEditor } from "@/components/playground/code-editor";
import { ExampleSelector } from "@/components/playground/example-selector";
import { OutputPanel } from "@/components/playground/output-panel";
import { playgroundExamples } from "@/data/playground-examples";
import { simulatePython } from "@/lib/simulated-python";

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
  const [explanation, setExplanation] = useState("");
  const [isError, setIsError] = useState(false);
  const [hasRun, setHasRun] = useState(false);

  function handleSelectExample(exampleId: string) {
    const nextExample =
      playgroundExamples.find((example) => example.id === exampleId) ??
      playgroundExamples[0];

    setSelectedExampleId(nextExample.id);
    setCode(nextExample.code);
    setOutput("");
    setExplanation("");
    setIsError(false);
    setHasRun(false);
  }

  function handleRunCode() {
    const result = simulatePython(code);

    setOutput(result.output);
    setExplanation(result.explanation);
    setIsError(Boolean(result.isError));
    setHasRun(true);
  }

  function handleReset() {
    setCode(selectedExample.code);
    setOutput("");
    setExplanation("");
    setIsError(false);
    setHasRun(false);
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
      <div className="grid gap-5">
        <div className="rounded-3xl border border-slate-200 bg-white p-5">
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
              className="inline-flex h-12 items-center justify-center rounded-full border border-slate-200 px-6 text-sm font-semibold text-slate-950 transition hover:border-emerald-300/50 hover:bg-white"
            >
              Reset
            </button>
          </div>
        </div>

        <CodeEditor code={code} onChangeCode={setCode} />
      </div>

      <div className="grid gap-5 content-start">
        <OutputPanel
          output={output}
          explanation={explanation}
          hasRun={hasRun}
          isError={isError}
        />
        <section className="rounded-3xl border border-slate-200 bg-white p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-300">
            Beginner Hint
          </p>
          <h2 className="mt-3 text-xl font-semibold text-slate-950">
            {selectedExample.label}
          </h2>
          <p className="mt-3 leading-7 text-slate-600">
            {selectedExample.hint}
          </p>
          <Link
            href={`/lessons/${selectedExample.lessonSlug}`}
            className="mt-5 inline-flex h-11 items-center justify-center rounded-full border border-emerald-300/30 px-5 text-sm font-semibold text-emerald-100 transition hover:bg-emerald-300/10"
          >
            Open related lesson
          </Link>
          <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-100/60 p-4 text-sm leading-6 text-slate-500">
            This is simulated output for now. Real Python execution coming
            later.
          </div>
        </section>
      </div>
    </div>
  );
}
