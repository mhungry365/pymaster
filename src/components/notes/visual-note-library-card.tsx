import { SyntaxMiniBlock } from "@/components/notes/syntax-mini-block";
import type { VisualNote } from "@/types";

type VisualNoteLibraryCardProps = {
  note: VisualNote;
};

export function VisualNoteLibraryCard({ note }: VisualNoteLibraryCardProps) {
  return (
    <article className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-emerald-300/40 hover:bg-white/[0.06]">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-300">
            {note.category}
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-white">
            {note.title}
          </h2>
        </div>
      </div>

      <p className="mt-4 text-sm leading-6 text-slate-300">
        {note.explanation}
      </p>

      <div className="mt-5">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
          Syntax
        </p>
        <SyntaxMiniBlock code={note.syntaxExample} />
      </div>

      <div className="mt-5 rounded-2xl border border-emerald-300/20 bg-emerald-300/10 p-4">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-200">
          Visual
        </p>
        <p className="mt-2 text-sm leading-6 text-emerald-100">
          {note.visualExplanation}
        </p>
      </div>

      <div className="mt-5 grid gap-3">
        <div className="rounded-2xl border border-amber-300/20 bg-amber-300/10 p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-200">
            Common mistake
          </p>
          <p className="mt-2 text-sm leading-6 text-amber-100">
            {note.commonMistake}
          </p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
            Memory tip
          </p>
          <p className="mt-2 text-sm leading-6 text-slate-300">
            {note.memoryTip}
          </p>
        </div>
      </div>
    </article>
  );
}
