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
          : "border-slate-200 bg-white"
      }`}
    >
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
        {label}
      </p>
      <p className="mt-2 text-3xl font-bold text-slate-950">{value}</p>
      <p className="mt-2 text-sm leading-6 text-slate-600">{detail}</p>
    </article>
  );
}
