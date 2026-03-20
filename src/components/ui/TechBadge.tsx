interface TechBadgeProps {
  name: string;
}

export default function TechBadge({ name }: TechBadgeProps) {
  return (
    <span className="px-3 py-1 bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-mono rounded bg-opacity-80 hover:border-cyan-400/50 hover:text-cyan-300 transition-colors">
      {name}
    </span>
  );
}
