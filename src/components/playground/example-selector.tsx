"use client";

import type { PlaygroundExample } from "@/data/playground-examples";

type ExampleSelectorProps = {
  examples: PlaygroundExample[];
  selectedExampleId: string;
  onSelectExample: (exampleId: string) => void;
};

export function ExampleSelector({
  examples,
  selectedExampleId,
  onSelectExample,
}: ExampleSelectorProps) {
  return (
    <label className="grid gap-2 text-sm font-medium text-slate-600">
      Example
      <select
        value={selectedExampleId}
        onChange={(event) => onSelectExample(event.target.value)}
        className="h-12 rounded-2xl border border-slate-200 bg-slate-100 px-4 text-slate-950 outline-none transition focus:border-emerald-300"
      >
        {examples.map((example) => (
          <option key={example.id} value={example.id}>
            {example.label}
          </option>
        ))}
      </select>
    </label>
  );
}
