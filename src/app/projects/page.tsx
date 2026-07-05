import { ContentCard } from "@/components/content-card";
import { PageShell } from "@/components/page-shell";

const projects = [
  {
    title: "Tip Calculator",
    description:
      "Use variables and arithmetic to split a bill and format a friendly answer.",
    label: "Starter",
  },
  {
    title: "Quiz Game",
    description:
      "Combine input, conditionals, and scoring into a small command-line game.",
    label: "Beginner",
  },
  {
    title: "Habit Tracker",
    description:
      "Store daily progress and summarize your streak with Python data structures.",
    label: "Project",
  },
];

export default function ProjectsPage() {
  return (
    <PageShell
      eyebrow="Projects"
      title="Learn by shipping small builds"
      description="Projects connect lessons to practical outcomes, so every concept has somewhere useful to go."
    >
      <div className="grid gap-4 md:grid-cols-3">
        {projects.map((project) => (
          <ContentCard key={project.title} {...project} />
        ))}
      </div>
    </PageShell>
  );
}
