import { ContentCard } from "@/components/content-card";
import { PageShell } from "@/components/page-shell";

const notes = [
  {
    title: "Key definitions",
    description:
      "Keep short explanations of terms like variable, function, string, and boolean.",
    label: "Notebook",
  },
  {
    title: "Useful examples",
    description:
      "Save snippets you understand well enough to reuse in future exercises.",
    label: "Reference",
  },
  {
    title: "Open questions",
    description:
      "Track anything confusing so your next study session starts with purpose.",
    label: "Review",
  },
];

export default function NotesPage() {
  return (
    <PageShell
      eyebrow="Notes"
      title="Keep your Python thinking organized"
      description="A home for definitions, examples, questions, and the little discoveries that make learning stick."
    >
      <div className="grid gap-4 md:grid-cols-3">
        {notes.map((note) => (
          <ContentCard key={note.title} {...note} />
        ))}
      </div>
    </PageShell>
  );
}
