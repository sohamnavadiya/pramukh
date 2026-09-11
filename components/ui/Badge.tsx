export function Badge({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center rounded-[var(--radius-sm)] border border-brand-500/30 bg-brand-500/5 px-3 py-1 text-xs font-medium tracking-wide text-brand-700">
      {children}
    </span>
  );
}
