import { notFound } from "next/navigation";
import { AppHeader } from "@/components/app-header";
import { LearningGame } from "@/components/game/LearningGame";
import { getAllGames, getGameBySlug } from "@/data/games";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return getAllGames().map((game) => ({
    slug: game.slug,
  }));
}

export default async function GamePage({ params }: Props) {
  const { slug } = await params;
  const game = getGameBySlug(slug);

  if (!game) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-100 text-slate-950">
      <AppHeader />
      <section className="px-4 py-8 sm:px-6 lg:px-8">
        <LearningGame game={game} />
      </section>
    </main>
  );
}
