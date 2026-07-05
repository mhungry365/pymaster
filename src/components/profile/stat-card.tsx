type StatCardProps = {
  label: string;
  value: string | number;
  detail: string;
  tone?: "default" | "success";
};

export function StatCard({
  label,
  value,
  detail,
  tone = "default",
}: StatCardProps) {
  return (
    <article
      className={`rounded-3xl border p-5 ${
        tone === "success"
          ? "border-emerald-300/20 bg-emerald-300/10"
          : "border-white/10 bg-white/[0.04]"
      }`}
    >
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
        {label}
      </p>
      <p className="mt-2 text-3xl font-bold text-white">{value}</p>
      <p className="mt-2 text-sm leading-6 text-slate-300">{detail}</p>
    </article>
  );
}
