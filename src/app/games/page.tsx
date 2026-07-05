import Link from "next/link";
import { AppHeader } from "@/components/app-header";

export default function GamesPage() {
  return (
    <main className="min-h-screen bg-slate-100 text-slate-950">
      <AppHeader />

      <div className="mx-auto max-w-7xl px-6 py-10">
        <h1 className="text-5xl font-black">
          🎮 Python Games
        </h1>

        <p className="mt-4 max-w-3xl text-lg text-slate-600">
          Learn Python by playing interactive games instead of reading long lessons.
          Every completed game earns XP and unlocks the next challenge.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          <Link
            href="/games/variables"
            className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
          >
            <div className="text-6xl">📦</div>

            <h2 className="mt-5 text-3xl font-black">
              Variable Quest
            </h2>

            <p className="mt-3 text-slate-600">
              Learn variables by solving puzzles.
            </p>

            <div className="mt-6 text-cyan-600 font-bold">
              Play →
            </div>
          </Link>

          <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-8">
            <div className="text-6xl">🤖</div>

            <h2 className="mt-5 text-3xl font-black">
              Robot Fixer
            </h2>

            <p className="mt-3 text-slate-500">
              Coming soon
            </p>
          </div>

          <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-8">
            <div className="text-6xl">🏴‍☠️</div>

            <h2 className="mt-5 text-3xl font-black">
              Treasure Output
            </h2>

            <p className="mt-3 text-slate-500">
              Coming soon
            </p>
          </div>

        </div>
      </div>
    </main>
  );
}
