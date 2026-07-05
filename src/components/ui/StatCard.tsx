type StatCardProps = {
  label: string;
  value: string | number;
  hint?: string;
  icon?: string;
  className?: string;
};

export function StatCard({ label, value, hint, icon = "✨", className = "" }: StatCardProps) {
  return (
    <div className={`rounded-3xl border border-white/10 bg-white/5 p-6 ${className}`}>
      <div className="text-3xl">{icon}</div>
      <p className="mt-4 text-sm font-bold uppercase tracking-wide text-slate-400">{label}</p>
      <p className="mt-1 text-3xl font-black text-white">{value}</p>
      {hint && <p className="mt-2 text-sm text-slate-400">{hint}</p>}
    </div>
  );
}
