import Link from "next/link";
import { AppHeader } from "@/components/app-header";
import { getAllGames } from "@/data/games";

export default function GamesPage() {
  const games = getAllGames();

  return (
    <main className="min-h-screen bg-slate-100 text-slate-950">
      <AppHeader />

      <div className="mx-auto max-w-7xl px-6 py-10">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-600">
          Play to learn
        </p>

        <h1 className="mt-3 text-5xl font-black">
          🎮 Py2Learn Games
        </h1>

        <p className="mt-4 max-w-3xl text-lg text-slate-600">
          Learn Python through games, puzzles, debugging missions, and small wins.
          Built for children, beginners, and adults who want learning to feel fun.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {games.map((game) => (
            <Link
              key={game.slug}
              href={`/games/${game.slug}`}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="text-6xl">{game.emoji}</div>

              <div className="mt-5 flex items-center justify-between gap-3">
                <h2 className="text-2xl font-black">{game.title}</h2>
                <span className="rounded-full bg-cyan-100 px-3 py-1 text-xs font-bold text-cyan-700">
                  {game.difficulty}
                </span>
              </div>

              <p className="mt-3 text-slate-600">{game.description}</p>

              <div className="mt-6 font-bold text-cyan-600">Play now →</div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
