"use client";

import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { User, Activity, Sparkles } from 'lucide-react';

const aboutData = [
  {
    icon: User,
    title: "Who I Am",
    content: "I'm a Software Engineer specializing in backend engineering and AI systems. I build production-grade applications with a focus on scalable APIs, distributed systems, and intelligent software that solves real-world problems through clean architecture and reliable engineering."
  },
  {
    icon: Activity,
    title: "What I'm Up To",
    items: [
      "🔨 Building production-grade backend & AI applications",
      "📚 Learning System Design & Distributed Systems",
      "☁️ Exploring cloud-native architectures and scalable infrastructure",
      "💪 Solving DSA consistently while strengthening problem-solving skills"
    ]
  },
  {
    icon: Sparkles,
    title: "My Philosophy",
    content: "\"Build real products. Solve real problems. Keep shipping.\"",
    subContent: "I believe great software is built through consistency, clean engineering, curiosity, and continuous learning—not shortcuts."
  }
];

export default function About() {
  return (
    <section id="about" className="py-32 w-full max-w-7xl mx-auto px-6 sm:px-12 md:px-24">
      <SectionHeading>About Me</SectionHeading>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 w-full mt-12 items-stretch">

        {/* Left Column - Profile Summary & Metadata */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-center"
        >
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-violet-500/10 border border-violet-500/20 rounded-full text-violet-300 text-xs font-mono tracking-wider w-fit">
              <Sparkles size={12} className="text-violet-400" />
              Developer Profile
            </div>
            <h3 className="font-sans text-4xl sm:text-5xl font-extrabold text-white leading-tight tracking-tight">
              Crafting <span className="gradient-text font-black">Scalable Systems</span> & Intelligent Software
            </h3>
            <p className="text-zinc-400 text-base leading-relaxed font-sans">
              I focus on building production-ready architectures that balance performance, resilience, and clean abstractions. My goal is to write robust backend services and orchestrate multi-agent workflows that deliver measurable real-world impact.
            </p>
          </div>
        </motion.div>

        {/* Right Column - Info Cards */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col gap-6"
        >
          {aboutData.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group glass-card backdrop-blur-xl rounded-2xl p-6 border border-zinc-800 hover:border-violet-500/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,92,246,0.1)]"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-violet-500/20 to-cyan-500/20 rounded-xl border border-violet-500/20 group-hover:border-violet-400/40 transition-colors">
                    <Icon className="w-6 h-6 text-violet-400" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-sans text-lg font-bold text-white mb-2">{item.title}</h3>
                    {"items" in item ? (
                      <ul className="text-zinc-400 text-sm leading-relaxed space-y-2 list-none">
                        {item.items?.map((bullet, bIdx) => (
                          <li key={bIdx} className="hover:text-zinc-300 transition-colors">{bullet}</li>
                        ))}
                      </ul>
                    ) : (
                      <>
                        <p className="text-zinc-400 text-sm leading-relaxed">{item.content}</p>
                        {item.subContent && (
                          <p className="text-zinc-500 text-xs italic mt-3 font-mono leading-relaxed border-t border-zinc-900 pt-3">{item.subContent}</p>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Focus Areas & Open To Sections */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 pt-8 border-t border-zinc-900/60"
      >
        <div>
          <h3 className="font-mono text-xs text-violet-400 font-semibold tracking-widest uppercase mb-4">🎯 Focus Areas</h3>
          <div className="flex flex-wrap gap-2">
            {["Backend Engineering", "AI Agent Systems", "RAG Pipelines", "API Design", "Cloud Deployment"].map((area) => (
              <span key={area} className="px-3 py-1.5 bg-zinc-950/60 border border-zinc-800/80 hover:border-violet-500/30 text-zinc-300 text-xs font-mono rounded-lg transition-colors">
                {area}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-mono text-xs text-violet-400 font-semibold tracking-widest uppercase mb-4">💼 Open To</h3>
          <div className="flex flex-wrap gap-2">
            {["Software Engineering Internships", "Backend Developer Roles", "AI Engineering Opportunities", "Remote & On-site Positions"].map((role) => (
              <span key={role} className="px-3 py-1.5 bg-zinc-950/60 border border-zinc-800/80 hover:border-violet-500/30 text-zinc-300 text-xs font-mono rounded-lg transition-colors">
                {role}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
