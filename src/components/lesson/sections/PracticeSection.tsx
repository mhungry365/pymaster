import { PracticeTask } from "@/components/lesson/practice-task";
import type { Lesson } from "@/types";

type Props = {
  fillBlankChallenges: Lesson["fillBlankChallenges"];
  practiceTasks: Lesson["practiceTasks"];
};

export function PracticeSection({
  fillBlankChallenges,
  practiceTasks,
}: Props) {
  const pairedPracticeCount = Math.max(
    fillBlankChallenges.length,
    practiceTasks.length,
  );

  return (
    <div className="grid gap-4">
      {Array.from({ length: pairedPracticeCount }).map((_, index) => {
        const fillBlank = fillBlankChallenges[index];
        const task = practiceTasks[index];

        if (!fillBlank || !task) {
          return null;
        }

        return (
          <PracticeTask
            key={`${fillBlank.prompt}-${task.title}`}
            fillBlank={fillBlank}
            task={task}
          />
        );
      })}
    </div>
  );
}
