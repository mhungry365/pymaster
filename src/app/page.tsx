import Link from "next/link";
import { AppHeader } from "@/components/app-header";

const features = [
  "8 beginner Python lessons",
  "Visual notes",
  "Simulated code playground",
  "Practice questions",
  "Projects library",
  "XP, streaks, achievements",
  "Local progress tracking",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <AppHeader />

      <section className="mx-auto max-w-6xl px-6 py-24 text-center">
        <p className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
          Learn Python by doing
        </p>

        <h1 className="mx-auto max-w-4xl text-5xl font-bold tracking-tight sm:text-7xl">
          Become confident in Python with interactive lessons.
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
          PyMaster combines visual lessons, practice, projects, XP, streaks,
          achievements, and a playground to help beginners learn Python step by step.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/dashboard"
            className="rounded-2xl bg-cyan-400 px-8 py-4 font-bold text-slate-950 hover:bg-cyan-300"
          >
            Start Learning
          </Link>

          <Link
            href="/curriculum"
            className="rounded-2xl border border-white/20 px-8 py-4 font-bold hover:bg-white/10"
          >
            View Curriculum
          </Link>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-4 px-6 pb-24 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <div
            key={feature}
            className="rounded-3xl border border-white/10 bg-white/5 p-6"
          >
            <h3 className="text-xl font-bold">{feature}</h3>
            <p className="mt-2 text-sm text-slate-400">
              Built into the current PyMaster MVP and ready to expand.
            </p>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-400/10 to-purple-500/10 p-8">
          <h2 className="text-3xl font-bold">Practice like a real developer</h2>
          <p className="mt-3 max-w-2xl text-slate-300">
            Learn a concept, try it in the playground, answer questions, complete
            projects, and track your progress as you improve.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/playground" className="rounded-xl bg-white px-5 py-3 font-bold text-slate-950">
              Open Playground
            </Link>
            <Link href="/practice" className="rounded-xl border border-white/20 px-5 py-3 font-bold">
              Practice Questions
            </Link>
            <Link href="/projects" className="rounded-xl border border-white/20 px-5 py-3 font-bold">
              View Projects
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
