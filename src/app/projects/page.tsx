import { PageShell } from "@/components/page-shell";
import { ProjectLibraryGrid } from "@/components/projects/project-library-grid";

export default function ProjectsPage() {
  return (
    <PageShell
      eyebrow="Projects"
      title="Beginner Python project library"
      description="Choose small, practical builds that turn Python basics into calculator tools, games, dashboards, and simple apps."
    >
      <ProjectLibraryGrid />
    </PageShell>
  );
}
