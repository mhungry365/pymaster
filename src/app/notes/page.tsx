import { PageShell } from "@/components/page-shell";
import { VisualNotesGrid } from "@/components/notes/visual-notes-grid";

export default function NotesPage() {
  return (
    <PageShell
      eyebrow="Notes"
      title="Visual Python notes library"
      description="Browse beginner-friendly cards for Python concepts, each with syntax, a visual mental model, a common mistake, and a quick memory tip."
    >
      <VisualNotesGrid />
    </PageShell>
  );
}
