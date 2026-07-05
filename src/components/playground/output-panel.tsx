"use client";

type OutputPanelProps = {
  output: string;
  hasRun: boolean;
};

export function OutputPanel({ output, hasRun }: OutputPanelProps) {
  return (
    <section className="rounded-3xl border border-emerald-300/20 bg-emerald-300/10 p-6">
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-xl font-semibold text-white">Output</h2>
        <span className="rounded-full border border-emerald-300/30 px-3 py-1 text-xs font-semibold text-emerald-100">
          Simulated
        </span>
      </div>
      <pre className="mt-5 min-h-40 overflow-x-auto whitespace-pre-wrap rounded-2xl bg-slate-950 p-5 font-mono text-sm leading-7 text-emerald-100">
        {hasRun ? output : "Run your code to see simulated output here."}
      </pre>
    </section>
  );
}
