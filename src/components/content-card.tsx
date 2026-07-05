type ContentCardProps = {
  title: string;
  description: string;
  label?: string;
};

export function ContentCard({ title, description, label }: ContentCardProps) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-emerald-300/40 hover:bg-white/[0.06]">
      {label ? (
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-300">
          {label}
        </p>
      ) : null}
      <h2 className="text-xl font-semibold text-slate-950">{title}</h2>
      <p className="mt-3 text-sm leading-6 text-slate-500">{description}</p>
    </article>
  );
}
