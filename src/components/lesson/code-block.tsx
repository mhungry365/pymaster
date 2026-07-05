type CodeBlockProps = {
  title: string;
  code: string;
};

export function CodeBlock({ title, code }: CodeBlockProps) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white/90 p-5">
      <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-xl font-semibold text-slate-950">{title}</h2>
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-red-400" />
          <span className="h-3 w-3 rounded-full bg-yellow-300" />
          <span className="h-3 w-3 rounded-full bg-emerald-400" />
        </div>
      </div>
      <pre className="overflow-x-auto rounded-2xl bg-slate-100 p-5 text-sm leading-7 text-slate-200">
        <code>{code}</code>
      </pre>
    </section>
  );
}
