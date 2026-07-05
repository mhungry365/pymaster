type Props = {
  commonMistakes: string[];
  memoryTip: string;
};

export function MistakeAndMemorySection({
  commonMistakes,
  memoryTip,
}: Props) {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <section className="rounded-3xl border border-amber-300/20 bg-amber-300/10 p-6">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-amber-200">
          Common Mistake
        </p>
        <h2 className="mt-3 text-2xl font-bold text-white">
          Watch out for these
        </h2>
        <ul className="mt-5 grid gap-3">
          {commonMistakes.map((mistake) => (
            <li key={mistake} className="flex gap-3 text-sm text-amber-100">
              <span className="mt-1 h-2 w-2 rounded-full bg-amber-300" />
              <span>{mistake}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-3xl border border-emerald-300/20 bg-emerald-300/10 p-6">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-200">
          Memory Tip
        </p>
        <h2 className="mt-3 text-2xl font-bold text-white">
          Keep this in mind
        </h2>
        <p className="mt-5 leading-7 text-emerald-100">{memoryTip}</p>
      </section>
    </div>
  );
}
