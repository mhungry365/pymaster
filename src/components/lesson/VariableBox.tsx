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

      <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-100/70 p-5">
        <div className="text-sm text-slate-500">Name</div>
        <div className="mt-1 text-2xl font-black text-slate-950">{name}</div>

        <div className="my-4 h-px bg-slate-100" />

        <div className="text-sm text-slate-500">Stored value</div>
        <div className="mt-1 rounded-xl bg-slate-100 px-4 py-3 font-mono text-lg text-cyan-200">
          {value}
        </div>

        <div className="mt-4 inline-flex rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-600">
          Type: {typeLabel}
        </div>
      </div>
    </div>
  );
}
