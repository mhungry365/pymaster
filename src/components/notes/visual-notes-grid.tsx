"use client";

import { useMemo, useState } from "react";
import { VisualNoteLibraryCard } from "@/components/notes/visual-note-library-card";
import { noteCategories, visualNotes } from "@/data/notes";
import type { NoteCategory } from "@/types";

type ActiveCategory = "All" | NoteCategory;

export function VisualNotesGrid() {
  const [activeCategory, setActiveCategory] = useState<ActiveCategory>("All");
  const categories: ActiveCategory[] = ["All", ...noteCategories];
  const filteredNotes = useMemo(
    () =>
      activeCategory === "All"
        ? visualNotes
        : visualNotes.filter((note) => note.category === activeCategory),
    [activeCategory],
  );

  return (
    <div className="grid gap-6">
      <div className="rounded-3xl border border-slate-200 bg-white p-4">
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => {
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                  isActive
                    ? "border-emerald-300 bg-emerald-300/10 text-emerald-100"
                    : "border-slate-200 text-slate-600 hover:border-emerald-300/40 hover:bg-white hover:text-slate-950"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        {filteredNotes.map((note) => (
          <VisualNoteLibraryCard key={note.id} note={note} />
        ))}
      </div>
    </div>
  );
}
