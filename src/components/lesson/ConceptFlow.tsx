type ConceptFlowProps = {
  steps: string[];
};

export function ConceptFlow({ steps }: ConceptFlowProps) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <h3 className="text-xl font-black text-white">How it works</h3>

      <div className="mt-5 flex flex-col gap-3 md:flex-row md:items-center">
        {steps.map((step, index) => (
          <div key={step} className="flex items-center gap-3">
            <div className="rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-sm font-bold text-slate-200">
              {step}
            </div>
            {index < steps.length - 1 && (
              <span className="hidden text-cyan-300 md:inline">→</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
