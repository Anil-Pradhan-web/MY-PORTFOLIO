"use client";

import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { Activity, Sparkles, Target, Zap } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 w-full max-w-7xl mx-auto px-6 sm:px-12 md:px-24">
      <SectionHeading>About Me</SectionHeading>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 w-full mt-12 items-start">

        {/* Left Column - Intro, Bio & Badges */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-8"
        >
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-violet-500/10 border border-violet-500/20 rounded-full text-violet-300 text-xs font-mono tracking-wider w-fit">
              <Sparkles size={12} className="text-violet-400" />
              Software Engineer
            </div>
            <h3 className="font-title text-4xl sm:text-5xl font-extrabold text-white leading-tight tracking-tight">
              Crafting <span className="gradient-text font-extrabold">Scalable Systems</span> & Intelligent Software
            </h3>
            <p className="text-zinc-400 text-base leading-relaxed font-sans">
              I specialize in backend engineering and AI systems, currently pursuing my B.Tech in Computer Science & Engineering (2024 - 2028) at ITER, Siksha &apos;O&apos; Anusandhan University, Bhubaneswar (CGPA: 9.11/10). I focus on building production-ready architectures that balance performance, resilience, and clean, reliable engineering.
            </p>
          </div>

          {/* Badges Grid (Focus Areas & Open To) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-zinc-900">
            <div>
              <h4 className="font-mono text-xs text-violet-400 font-bold uppercase tracking-widest mb-3 flex items-center gap-1.5">
                <Target size={12} /> Focus Areas
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {["Backend Engineering", "AI Agent Systems", "RAG Pipelines", "API Design", "Distributed Systems"].map((area) => (
                  <span key={area} className="px-2.5 py-1 bg-zinc-950/60 border border-zinc-900 hover:border-violet-500/30 text-zinc-400 text-[11px] font-mono rounded-lg transition-colors">
                    {area}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-mono text-xs text-sky-400 font-bold uppercase tracking-widest mb-3 flex items-center gap-1.5">
                <Zap size={12} /> Open To
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {["Internships", "Backend Roles", "AI Engineering", "Remote / On-site"].map((role) => (
                  <span key={role} className="px-2.5 py-1 bg-zinc-950/60 border border-zinc-900 hover:border-sky-500/30 text-zinc-400 text-[11px] font-mono rounded-lg transition-colors">
                    {role}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column - Status & Philosophy Cards */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col gap-6"
        >
          {/* Card 1: What I'm Up To */}
          <div className="group glass-card backdrop-blur-xl rounded-2xl p-6 border border-zinc-800 hover:border-violet-500/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,92,246,0.1)]">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-gradient-to-br from-violet-500/20 to-cyan-500/20 rounded-xl border border-violet-500/20 group-hover:border-violet-400/40 transition-colors">
                <Activity className="w-6 h-6 text-violet-400" />
              </div>
              <div className="flex-grow">
                <h3 className="font-title text-lg font-bold text-white mb-3">What I&apos;m Up To</h3>
                <ul className="text-zinc-400 text-sm leading-relaxed space-y-2.5 list-none font-sans">
                  {[
                    "🔨 Building production-grade backend & AI applications",
                    "📚 Learning System Design & Distributed Systems",
                    "☁️ Exploring cloud-native architectures and scalable infrastructure",
                    "💪 Solving DSA consistently while strengthening problem-solving skills"
                  ].map((bullet, bIdx) => (
                    <li key={bIdx} className="hover:text-zinc-300 transition-colors">{bullet}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Card 2: My Philosophy */}
          <div className="group glass-card backdrop-blur-xl rounded-2xl p-6 border border-zinc-800 hover:border-violet-500/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,92,246,0.1)]">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-gradient-to-br from-violet-500/20 to-cyan-500/20 rounded-xl border border-violet-500/20 group-hover:border-violet-400/40 transition-colors">
                <Sparkles className="w-6 h-6 text-violet-400" />
              </div>
              <div className="flex-grow">
                <h3 className="font-title text-lg font-bold text-white mb-2">My Philosophy</h3>
                <p className="text-zinc-300 text-sm font-semibold italic leading-relaxed font-sans">
                  &ldquo;Build real products. Solve real problems. Keep shipping.&rdquo;
                </p>
                <p className="text-zinc-500 text-xs italic mt-3 font-mono leading-relaxed border-t border-zinc-900 pt-3">
                  I believe great software is built through consistency, clean engineering, curiosity, and continuous learning—not shortcuts.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
