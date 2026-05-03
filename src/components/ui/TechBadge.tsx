interface TechBadgeProps {
  name: string;
}

export default function TechBadge({ name }: TechBadgeProps) {
  return (
    <span className="px-3 py-1 bg-zinc-900/80 border border-zinc-800 text-zinc-400 text-[11px] font-mono rounded-md tracking-wide hover:border-violet-400/50 hover:text-violet-300 hover:bg-violet-500/5 hover:shadow-[0_0_10px_rgba(139,92,246,0.1)] transition-all duration-300 cursor-default">
      {name}
    </span>
  );
}
