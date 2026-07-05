import { AchievementsGrid } from "@/components/achievements/achievements-grid";
import { PageShell } from "@/components/page-shell";
import { DangerZone } from "@/components/profile/danger-zone";
import { ProgressOverview } from "@/components/profile/progress-overview";
import { getAllLessons } from "@/data/lessons";
import { practiceQuestions } from "@/data/questions";
import { pythonProjects } from "@/data/projects";

export default function ProfilePage() {
  return (
    <PageShell
      eyebrow="Profile"
      title="Your local PyMaster progress"
      description="Review XP, streaks, completed learning work, achievements, and local progress controls."
    >
      <ProgressOverview
        totalLessons={getAllLessons().length}
        totalPracticeItems={practiceQuestions.length + 1}
        totalProjects={pythonProjects.length}
      />

      <AchievementsGrid />

      <DangerZone />
    </PageShell>
  );
}
