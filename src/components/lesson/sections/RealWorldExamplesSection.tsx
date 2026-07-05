import { Card } from "@/components/ui/Card";

type Props = {
  examples: string[];
};

export function RealWorldExamplesSection({ examples }: Props) {
  return (
    <Card>
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-300">
        Real-world examples
      </p>

      <h2 className="mt-3 text-2xl font-bold text-slate-950">
        Where this shows up
      </h2>

      <div className="mt-6 grid gap-3 md:grid-cols-3">
        {examples.map((example) => (
          <div
            key={example}
            className="rounded-2xl border border-slate-200 bg-slate-100/50 p-4 text-sm leading-6 text-slate-600"
          >
            {example}
          </div>
        ))}
      </div>
    </Card>
  );
}
