"use client";

import { useMemo, useState } from "react";
import { ProjectLibraryCard } from "@/components/projects/project-library-card";
import { projectCategories, pythonProjects } from "@/data/projects";
import type { ProjectCategory } from "@/types";

type ActiveProjectFilter = "All" | ProjectCategory;

export function ProjectLibraryGrid() {
  const [activeFilter, setActiveFilter] =
    useState<ActiveProjectFilter>("All");
  const filters: ActiveProjectFilter[] = ["All", ...projectCategories];
  const filteredProjects = useMemo(
    () =>
      activeFilter === "All"
        ? pythonProjects
        : pythonProjects.filter((project) => project.category === activeFilter),
    [activeFilter],
  );

  return (
    <div className="grid gap-6">
      <section className="rounded-3xl border border-white/10 bg-white/[0.04] p-4">
        <div className="flex flex-wrap gap-2">
          {filters.map((filter) => {
            const isActive = activeFilter === filter;

            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                  isActive
                    ? "border-emerald-300 bg-emerald-300/10 text-emerald-100"
                    : "border-white/10 text-slate-300 hover:border-emerald-300/40 hover:bg-white/5 hover:text-white"
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>
      </section>

      <div className="grid gap-5 lg:grid-cols-2">
        {filteredProjects.map((project) => (
          <ProjectLibraryCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
