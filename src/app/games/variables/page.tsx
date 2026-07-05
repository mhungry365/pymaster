import { AppHeader } from "@/components/app-header";
import { VariableQuestGame } from "@/components/game/VariableQuestGame";

export default function VariablesGamePage() {
  return (
    <main className="min-h-screen bg-slate-100 text-slate-950">
      <AppHeader />
      <section className="px-4 py-8 sm:px-6 lg:px-8">
        <VariableQuestGame />
      </section>
    </main>
  );
}
