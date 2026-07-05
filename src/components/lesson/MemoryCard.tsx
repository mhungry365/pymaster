type MemoryCardProps = {
  title?: string;
  children: React.ReactNode;
};

export function MemoryCard({ title = "Memory Trick", children }: MemoryCardProps) {
  return (
    <div className="rounded-3xl border border-purple-400/30 bg-purple-400/10 p-6">
      <div className="flex items-center gap-3">
        <span className="text-3xl">🧠</span>
        <h3 className="text-xl font-black text-slate-950">{title}</h3>
      </div>
      <div className="mt-3 text-slate-600">{children}</div>
    </div>
  );
}
