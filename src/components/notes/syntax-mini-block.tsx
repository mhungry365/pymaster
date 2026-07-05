type SyntaxMiniBlockProps = {
  code: string;
};

export function SyntaxMiniBlock({ code }: SyntaxMiniBlockProps) {
  return (
    <pre className="overflow-x-auto rounded-2xl bg-slate-100 p-4 text-sm leading-6 text-slate-200">
      <code>{code}</code>
    </pre>
  );
}
