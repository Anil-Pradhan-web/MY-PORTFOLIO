import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative w-full rounded-xl overflow-hidden bg-[#0d0d0d] p-1"
    >
      {/* Animated gradient border pseudo-element effect using a background standard */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-900 group-hover:from-cyan-400/30 group-hover:to-rose-500/30 transition-colors duration-500" />
      
      <div className="relative h-full w-full bg-[#0a0a0a] rounded-lg p-6 flex flex-col justify-between z-10 transition-transform duration-500">
        <div>
          <div className="flex flex-wrap gap-2 mb-6">
            {stack.map((tech) => (
              <TechBadge key={tech} name={tech} />
            ))}
          </div>
          
          <h3 className="font-syne text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
            {title}
          </h3>
          <p className="text-zinc-400 font-mono text-sm mb-4">{tagline}</p>
          
          <p className="text-zinc-300 leading-relaxed text-sm mb-4">
            {description}
          </p>
          
          <div className="bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 rounded p-3 text-sm font-semibold mb-6 shadow-[0_0_15px_rgba(34,211,238,0.1)]">
            ✨ {highlight}
          </div>

          {features && (
            <ul className="list-disc list-inside text-zinc-400 text-sm mb-6 space-y-1">
              {features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          )}
        </div>

        <div className="flex items-center gap-4 mt-auto pt-6 border-t border-zinc-800">
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-white bg-zinc-900 hover:bg-zinc-800 px-4 py-2 rounded-lg transition-colors border border-zinc-800 hover:border-zinc-700"
          >
            <Github size={16} /> Source Code
          </a>
          {liveUrl && !liveUrl.includes('desktop') && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-cyan-400 bg-cyan-400/10 hover:bg-cyan-400/20 border border-cyan-400/20 px-4 py-2 rounded-lg transition-all"
            >
              <ExternalLink size={16} /> Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
