import { motion } from 'framer-motion';
import { Github, ExternalLink, Zap } from 'lucide-react';
import TechBadge from './TechBadge';

interface ProjectCardProps {
  title: string;
  tagline: string;
  description: string;
  highlight: string;
  features?: string[];
  stack: string[];
  githubUrl: string;
  liveUrl?: string;
  index: number;
}

export default function ProjectCard({
  title,
  tagline,
  description,
  highlight,
  features,
  stack,
  githubUrl,
  liveUrl,
  index,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group relative w-full"
    >
      {/* Outer ambient pink glow — subtle bloom behind the card */}
      <div className="absolute -inset-[2px] rounded-2xl bg-gradient-to-br from-fuchsia-500/40 via-pink-500/20 to-purple-600/30 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-700 -z-10" />

      {/* Animated gradient border */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-fuchsia-500/60 via-pink-400/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 p-[1px]" />

      {/* Card body */}
      <div className="relative w-full rounded-2xl border border-zinc-800/80 group-hover:border-fuchsia-500/40 bg-[#080808] overflow-hidden transition-all duration-500 group-hover:shadow-[0_0_60px_rgba(232,121,249,0.12),0_0_120px_rgba(217,70,239,0.06)]">

        {/* Top accent line */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-fuchsia-400/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Subtle corner grid / scanline texture */}
        <div className="absolute top-0 right-0 w-48 h-48 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-700"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, #e879f9 0px, #e879f9 1px, transparent 1px, transparent 24px), repeating-linear-gradient(90deg, #e879f9 0px, #e879f9 1px, transparent 1px, transparent 24px)',
          }}
        />

        {/* Pink radial spotlight in corner */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-fuchsia-500/8 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-700" />

        <div className="relative p-7 md:p-9 flex flex-col gap-6 z-10">

          {/* ── Header row ── */}
          <div className="flex flex-col gap-3">
            {/* Number pill + title */}
            <div className="flex items-center gap-4">
              <span className="text-[11px] font-mono font-bold text-fuchsia-400/70 bg-fuchsia-500/10 border border-fuchsia-500/20 px-2.5 py-1 rounded-full tracking-widest">
                /{String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="font-syne text-xl md:text-2xl font-bold text-white group-hover:text-fuchsia-100 transition-colors duration-300 leading-tight">
                {title}
              </h3>
            </div>

            <p className="text-[13px] font-mono text-fuchsia-300/60 tracking-wide leading-relaxed">
              {tagline}
            </p>
          </div>

          {/* ── Highlight chip ── */}
          <div className="inline-flex items-center gap-2 self-start bg-gradient-to-r from-fuchsia-500/15 to-pink-500/10 border border-fuchsia-400/25 text-fuchsia-300 rounded-lg px-4 py-2.5 text-xs font-semibold shadow-[0_0_15px_rgba(232,121,249,0.08)]">
            <Zap size={13} className="shrink-0 text-fuchsia-400" />
            {highlight}
          </div>

          {/* ── Description ── */}
          <p className="text-zinc-400 leading-relaxed text-sm">
            {description}
          </p>

          {/* ── Feature list ── */}
          {features && (
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {features.map((feat, i) => (
                <li key={i} className="flex items-start gap-2.5 text-[13px] text-zinc-400 group-hover:text-zinc-300 transition-colors">
                  <span className="mt-[5px] w-1.5 h-1.5 rounded-full bg-fuchsia-500 shrink-0 shadow-[0_0_6px_rgba(232,121,249,0.8)]" />
                  {feat}
                </li>
              ))}
            </ul>
          )}

          {/* ── Tech stack badges ── */}
          <div className="flex flex-wrap gap-2">
            {stack.map((tech) => (
              <TechBadge key={tech} name={tech} />
            ))}
          </div>

          {/* ── Divider ── */}
          <div className="h-[1px] bg-gradient-to-r from-fuchsia-500/30 via-pink-400/10 to-transparent" />

          {/* ── Action buttons ── */}
          <div className="flex items-center gap-3 flex-wrap">
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-white bg-zinc-900 hover:bg-zinc-800 px-5 py-2.5 rounded-lg transition-all duration-300 border border-zinc-700/60 hover:border-fuchsia-400/40 hover:shadow-[0_0_16px_rgba(232,121,249,0.15)]"
            >
              <Github size={15} />
              Source Code
            </a>
            {liveUrl && !liveUrl.includes('desktop') && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm font-medium text-fuchsia-300 bg-gradient-to-r from-fuchsia-500/15 to-pink-500/10 hover:from-fuchsia-500/25 hover:to-pink-500/20 border border-fuchsia-400/30 hover:border-fuchsia-400/60 px-5 py-2.5 rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(232,121,249,0.2)]"
              >
                <ExternalLink size={15} />
                Live Demo
              </a>
            )}
          </div>

        </div>
      </div>
    </motion.div>
  );
}
