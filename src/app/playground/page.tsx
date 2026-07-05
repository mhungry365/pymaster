import { PageShell } from "@/components/page-shell";

export default function PlaygroundPage() {
  return (
    <PageShell
      eyebrow="Playground"
      title="Experiment with Python ideas"
      description="A future workspace for running snippets, testing examples, and learning by changing code."
    >
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-2xl border border-white/10 bg-slate-900/90 p-5">
          <div className="mb-4 flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-red-400" />
            <span className="h-3 w-3 rounded-full bg-yellow-300" />
            <span className="h-3 w-3 rounded-full bg-emerald-400" />
          </div>
          <pre className="overflow-x-auto rounded-xl bg-slate-950 p-5 text-sm leading-7 text-slate-200">
            <code>{`name = "Ada"
print(f"Hello, {name}!")`}</code>
          </pre>
        </div>
        <div className="rounded-2xl border border-emerald-300/20 bg-emerald-300/10 p-6">
          <h2 className="text-xl font-semibold text-white">Output preview</h2>
          <p className="mt-4 font-mono text-sm text-emerald-100">
            Hello, Ada!
          </p>
        </div>
      </div>
    </PageShell>
  );
}
