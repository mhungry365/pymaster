type LearningChecklistProps = {
  items: string[];
};

export function LearningChecklist({ items }: LearningChecklistProps) {
  return (
    <div className="rounded-3xl border border-emerald-400/30 bg-emerald-400/10 p-6">
      <h3 className="text-xl font-black text-slate-950">What you learned</h3>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-slate-600">
            <span className="text-emerald-300">✓</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
