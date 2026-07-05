type CommonMistakeCardProps = {
  wrongCode: string;
  correctCode: string;
  explanation: string;
};

export function CommonMistakeCard({
  wrongCode,
  correctCode,
  explanation,
}: CommonMistakeCardProps) {
  return (
    <div className="rounded-3xl border border-amber-400/30 bg-amber-400/10 p-6">
      <div className="flex items-center gap-3">
        <span className="text-3xl">⚠️</span>
        <h3 className="text-xl font-black text-slate-950">Common Mistake</h3>
      </div>

      <div className="mt-5 grid gap-4 md:grid-cols-2">
        <div>
          <p className="mb-2 text-sm font-bold text-red-300">Wrong</p>
          <pre className="rounded-2xl bg-slate-100 p-4 text-sm text-red-200">
            <code>{wrongCode}</code>
          </pre>
        </div>

        <div>
          <p className="mb-2 text-sm font-bold text-emerald-300">Correct</p>
          <pre className="rounded-2xl bg-slate-100 p-4 text-sm text-emerald-200">
            <code>{correctCode}</code>
          </pre>
        </div>
      </div>

      <p className="mt-4 text-slate-600">{explanation}</p>
    </div>
  );
}
