import { AnimatedCodeStep } from "@/components/lesson/AnimatedCodeStep";
import { CommonMistakeCard } from "@/components/lesson/CommonMistakeCard";
import { ConceptFlow } from "@/components/lesson/ConceptFlow";
import { LearningChecklist } from "@/components/lesson/LearningChecklist";
import { MemoryCard } from "@/components/lesson/MemoryCard";
import { VariableBox } from "@/components/lesson/VariableBox";
import { LessonSection } from "@/types/lesson";

export function renderSection(section: LessonSection) {
  switch (section.type) {
    case "memory":
      return <MemoryCard>{String(section.content ?? "")}</MemoryCard>;

    case "variable-box": {
      const data = section.content as {
        name: string;
        value: string;
        typeLabel: string;
      };

      return (
        <VariableBox
          name={data.name}
          value={data.value}
          typeLabel={data.typeLabel}
        />
      );
    }

    case "concept-flow":
      return <ConceptFlow steps={(section.content as string[]) ?? []} />;

    case "animated-code":
      return <AnimatedCodeStep steps={(section.content as { code: string; explanation: string }[]) ?? []} />;

    case "common-mistake": {
      const data = section.content as {
        wrongCode: string;
        correctCode: string;
        explanation: string;
      };

      return (
        <CommonMistakeCard
          wrongCode={data.wrongCode}
          correctCode={data.correctCode}
          explanation={data.explanation}
        />
      );
    }

    case "summary":
      return <LearningChecklist items={(section.content as string[]) ?? []} />;

    default:
      return null;
  }
}
