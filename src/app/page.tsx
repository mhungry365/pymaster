import { AppHeader } from "@/components/app-header";

const features = [
  {
    title: "Interactive Lessons",
    description:
      "Practice core Python concepts with bite-sized challenges that respond as you learn.",
  },
  {
    title: "Code Playground",
    description:
      "Experiment, break things, and run Python snippets in a focused workspace.",
  },
  {
    title: "AI Tutor",
    description:
      "Get hints, explanations, and next-step guidance when a concept gets sticky.",
  },
  {
    title: "Real Projects",
    description:
      "Build practical apps and scripts that turn new syntax into real confidence.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <AppHeader />
      <section className="mx-auto flex w-full max-w-7xl flex-col px-6 py-12 sm:px-8 lg:px-12">
        <div className="grid min-h-[72vh] flex-1 items-center gap-12 py-10 lg:grid-cols-[1.05fr_0.95fr] lg:py-16">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex rounded-full border border-emerald-300/20 bg-emerald-300/10 px-4 py-2 text-sm font-medium text-emerald-200">
              Interactive Python learning
            </div>
            <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
              PyMaster
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-8 text-slate-300 sm:text-2xl">
              Learn Python by doing
            </p>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
              Move from first print statements to complete projects with guided
              lessons, hands-on coding, and help when you need it.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="/dashboard"
                className="inline-flex h-12 items-center justify-center rounded-full bg-emerald-400 px-6 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-950/40 transition hover:bg-emerald-300"
              >
                Start Learning
              </a>
              <a
                href="/curriculum"
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/15 px-6 text-sm font-semibold text-white transition hover:border-emerald-300/60 hover:bg-white/5"
              >
                View Curriculum
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-4 shadow-2xl shadow-black/30">
            <div className="rounded-2xl border border-white/10 bg-slate-900/90 p-5">
              <div className="mb-5 flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-300" />
                <span className="h-3 w-3 rounded-full bg-emerald-400" />
              </div>
              <pre className="overflow-hidden rounded-xl bg-slate-950 p-5 text-sm leading-7 text-slate-200">
                <code>{`def master_python(topic):
    while not confident(topic):
        practice(topic)
        get_hint()

    return "I can build this"`}</code>
              </pre>
              <div className="mt-5 rounded-xl border border-emerald-300/20 bg-emerald-300/10 p-4 text-sm text-emerald-100">
                Lesson complete: Functions and loops
              </div>
            </div>
          </div>
        </div>

        <div
          id="curriculum"
          className="grid gap-4 pb-10 sm:grid-cols-2 lg:grid-cols-4"
        >
          {features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-emerald-300/40 hover:bg-white/[0.06]"
            >
              <h2 className="text-lg font-semibold text-white">
                {feature.title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
