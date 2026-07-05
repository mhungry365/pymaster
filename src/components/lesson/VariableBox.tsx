type VariableBoxProps = {
  name: string;
  value: string;
  typeLabel: string;
};

export function VariableBox({ name, value, typeLabel }: VariableBoxProps) {
  return (
    <div className="rounded-3xl border border-cyan-400/30 bg-cyan-400/10 p-6 shadow-lg shadow-cyan-950/30">
      <p className="text-sm font-bold uppercase tracking-wide text-cyan-300">
        Variable Box
      </p>

      <div className="mt-5 rounded-2xl border border-white/15 bg-slate-950/70 p-5">
        <div className="text-sm text-slate-400">Name</div>
        <div className="mt-1 text-2xl font-black text-white">{name}</div>

        <div className="my-4 h-px bg-white/10" />

        <div className="text-sm text-slate-400">Stored value</div>
        <div className="mt-1 rounded-xl bg-white/10 px-4 py-3 font-mono text-lg text-cyan-200">
          {value}
        </div>

        <div className="mt-4 inline-flex rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">
          Type: {typeLabel}
        </div>
      </div>
    </div>
  );
}
