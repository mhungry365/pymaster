import { LearningChecklist } from "@/components/lesson/LearningChecklist";

type Props = {
  items: string[];
};

export function SummarySection({ items }: Props) {
  return <LearningChecklist items={items} />;
}
