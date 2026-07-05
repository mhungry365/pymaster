import Link from "next/link";
import { CodeBlock } from "@/components/lesson/code-block";

type CodeExample = {
  title: string;
  code: string;
};

type Props = {
  examples: CodeExample[];
};

export function CodeExamplesSection({ examples }: Props) {
  return (
    <div className="grid gap-4">
      {examples.map((example) => (
        <CodeBlock key={example.title} title={example.title} code={example.code} />
      ))}

      <div className="rounded-3xl border border-emerald-300/20 bg-emerald-300/10 p-5 sm:flex sm:items-center sm:justify-between sm:gap-6">
        <div>
          <h2 className="text-xl font-bold text-slate-950">Try this in Playground</h2>
          <p className="mt-2 text-sm leading-6 text-emerald-100">
            Open the playground to edit similar examples and compare your
            prediction with simulated output.
          </p>
        </div>

        <Link
          href="/playground"
          className="mt-5 inline-flex h-12 items-center justify-center rounded-full bg-emerald-400 px-6 text-sm font-bold text-slate-950 transition hover:bg-emerald-300 sm:mt-0"
        >
          Open Playground
        </Link>
      </div>
    </div>
  );
}
