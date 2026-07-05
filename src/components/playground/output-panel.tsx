"use client";

type OutputPanelProps = {
  output: string;
  explanation: string;
  hasRun: boolean;
  isError?: boolean;
};

export function OutputPanel({
  output,
  explanation,
  hasRun,
  isError = false,
}: OutputPanelProps) {
  return (
    <section
      className={`rounded-3xl border p-6 ${
        isError
          ? "border-amber-300/20 bg-amber-300/10"
          : "border-emerald-300/20 bg-emerald-300/10"
      }`}
    >
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-xl font-semibold text-white">Output</h2>
        <span className="rounded-full border border-emerald-300/30 px-3 py-1 text-xs font-semibold text-emerald-100">
          Simulated
        </span>
      </div>
      <pre className="mt-5 min-h-40 overflow-x-auto whitespace-pre-wrap rounded-2xl bg-slate-950 p-5 font-mono text-sm leading-7 text-emerald-100">
        {hasRun ? output : "Run your code to see simulated output here."}
      </pre>
      {hasRun ? (
        <div className="mt-5 rounded-2xl border border-white/10 bg-slate-950/50 p-4">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-200">
            What happened?
          </p>
          <p className="mt-2 text-sm leading-6 text-slate-300">
            {explanation}
          </p>
        </div>
      ) : null}
    </section>
  );
}
