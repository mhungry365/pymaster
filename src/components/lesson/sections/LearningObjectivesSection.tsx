import { Card } from "@/components/ui/Card";

type Props = {
  module: string;
  description: string;
  objectives: string[];
};

export function LearningObjectivesSection({
  module,
  description,
  objectives,
}: Props) {
  return (
    <Card>
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-300">
        {module}
      </p>

      <h2 className="mt-3 text-2xl font-bold text-slate-950">
        What you will learn
      </h2>

      <p className="mt-3 text-slate-600 leading-7">
        {description}
      </p>

      <ul className="mt-6 grid gap-3 md:grid-cols-2">
        {objectives.map((objective) => (
          <li key={objective} className="flex gap-3 text-slate-600">
            <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
            {objective}
          </li>
        ))}
      </ul>
    </Card>
  );
}
