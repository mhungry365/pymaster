"use client";

type CodeEditorProps = {
  code: string;
  onChangeCode: (code: string) => void;
};

export function CodeEditor({ code, onChangeCode }: CodeEditorProps) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white/90 p-5">
      <div className="mb-5 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-red-400" />
          <span className="h-3 w-3 rounded-full bg-yellow-300" />
          <span className="h-3 w-3 rounded-full bg-emerald-400" />
        </div>
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
          Python
        </p>
      </div>
      <textarea
        value={code}
        onChange={(event) => onChangeCode(event.target.value)}
        spellCheck={false}
        className="min-h-96 w-full resize-y rounded-2xl border border-slate-200 bg-slate-100 p-5 font-mono text-sm leading-7 text-slate-200 outline-none transition placeholder:text-slate-600 focus:border-emerald-300"
        aria-label="Python code editor"
      />
    </div>
  );
}
