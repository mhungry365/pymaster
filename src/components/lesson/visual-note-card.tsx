type VisualNoteCardProps = {
  title: string;
  description: string;
  variableName: string;
  variableValue: string;
};

export function VisualNoteCard({
  title,
  description,
  variableName,
  variableValue,
}: VisualNoteCardProps) {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
      <h2 className="text-2xl font-semibold text-white">{title}</h2>
      <p className="mt-3 leading-7 text-slate-300">{description}</p>

      <div className="mt-8 grid gap-4 sm:grid-cols-[0.8fr_1.2fr] sm:items-center">
        <div className="rounded-2xl border border-emerald-300/30 bg-emerald-300/10 p-4 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-200">
            Label
          </p>
          <p className="mt-2 font-mono text-sm text-white">{variableName}</p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-slate-900 p-5">
          <div className="rounded-xl border border-dashed border-emerald-300/40 bg-slate-950 p-6 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
              Value inside the box
            </p>
            <p className="mt-3 font-mono text-2xl font-bold text-emerald-200">
              {variableValue}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
