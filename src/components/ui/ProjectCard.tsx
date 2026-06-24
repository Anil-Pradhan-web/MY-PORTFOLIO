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
  isPrivate?: boolean;
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
  isPrivate,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group relative w-full"
    >
      {/* Outer ambient violet glow — subtle bloom behind the card */}
      <div className="absolute -inset-[2px] rounded-2xl bg-gradient-to-br from-violet-500/40 via-cyan-500/20 to-violet-600/30 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-700 -z-10" />

      {/* Animated gradient border */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-500/60 via-cyan-400/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 p-[1px]" />

      {/* Card body */}
      <div className="relative w-full rounded-2xl border border-zinc-800/80 group-hover:border-violet-500/40 bg-[#080808] overflow-hidden transition-all duration-500 group-hover:shadow-[0_0_60px_rgba(139,92,246,0.12),0_0_120px_rgba(6,182,212,0.06)]">

        {/* Top accent line */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-violet-400/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Subtle corner grid / scanline texture */}
        <div className="absolute top-0 right-0 w-48 h-48 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-700"
          style={{
            backgroundImage: 'radial-gradient(rgba(139, 92, 246, 0.15) 1px, transparent 0)',
            backgroundSize: '8px 8px'
          }}
        />

        {/* Violet radial spotlight in corner */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-violet-500/8 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-700" />

        <div className="p-8 sm:p-10 flex flex-col gap-6 md:gap-8">
          
          {/* ── Title and tagline ── */}
          <div className="flex flex-col gap-2">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <h3 className="font-syne text-3xl md:text-4xl font-extrabold text-white tracking-tight group-hover:text-violet-300 transition-colors duration-300">
                {title}
              </h3>
              
              {/* Highlight badge */}
              <span className="flex items-center gap-1.5 px-3 py-1 bg-violet-500/10 border border-violet-500/20 rounded-full text-violet-300 text-xs font-mono tracking-wider w-fit shadow-[0_0_15px_rgba(139,92,246,0.05)]">
                <Zap size={11} className="text-violet-400 animate-pulse" />
                {highlight.split(' · ')[0]}
              </span>
            </div>
            <p className="font-mono text-zinc-500 text-sm tracking-wide leading-relaxed">
              {tagline}
            </p>
          </div>

          {/* ── Description ── */}
          <p className="text-zinc-400 text-base leading-relaxed font-sans">
            {description}
          </p>

          {/* ── Features List ── */}
          {features && features.length > 0 && (
            <div className="flex flex-col gap-3">
              <h4 className="font-mono text-xs text-violet-400 font-bold uppercase tracking-widest">Key Engine Modules</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex gap-3 text-sm text-zinc-400 leading-relaxed bg-[#0d0d0d]/40 border border-zinc-900/60 p-4 rounded-xl hover:border-zinc-800 transition-colors">
                    <div className="flex-grow">
                      <strong className="text-zinc-300 font-semibold">{feature.split(': ')[0]}</strong>
                      {feature.split(': ')[1] ? `: ${feature.split(': ')[1]}` : ''}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ── Tech stack badges ── */}
          <div className="flex flex-wrap gap-2">
            {stack.map((tech) => (
              <TechBadge key={tech} name={tech} />
            ))}
          </div>

          {/* ── Divider ── */}
          <div className="h-[1px] bg-gradient-to-r from-violet-500/30 via-cyan-400/10 to-transparent" />

          {/* ── Action buttons ── */}
          <div className="flex items-center gap-3 flex-wrap">
            {isPrivate ? (
              <div
                className="flex items-center gap-2 text-sm font-medium text-zinc-500 bg-zinc-950/40 px-5 py-2.5 rounded-lg border border-zinc-800/80 select-none cursor-help hover:border-zinc-700/60 transition-colors"
                title="This repository is private to protect intellectual property as this is my own commercial application."
              >
                <Github size={15} className="opacity-50" />
                Private Repo
              </div>
            ) : (
              <a
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm font-medium text-white bg-zinc-900 hover:bg-zinc-800 px-5 py-2.5 rounded-lg transition-all duration-300 border border-zinc-700/60 hover:border-violet-400/40 hover:shadow-[0_0_16px_rgba(139,92,246,0.15)]"
              >
                <Github size={15} />
                Source Code
              </a>
            )}
            {liveUrl && !liveUrl.includes('desktop') && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm font-medium text-violet-300 bg-gradient-to-r from-violet-500/15 to-cyan-500/10 hover:from-violet-500/25 hover:to-cyan-500/20 border border-violet-400/30 hover:border-violet-400/60 px-5 py-2.5 rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(139,92,246,0.2)]"
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
