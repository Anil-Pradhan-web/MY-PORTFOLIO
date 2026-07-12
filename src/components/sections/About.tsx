
"use client";

import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { User, Target, Code2, Activity, Sparkles } from 'lucide-react';

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

const stats = [
  { label: "CGPA", value: "9.11", suffix: "/10" },
  { label: "Major Projects", value: "3", suffix: "" },
  { label: "Hackathons", value: "4", suffix: "" },
  { label: "Coding Problems", value: "200", suffix: "+" }
];

export default function About() {
  return (
    <section id="about" className="py-32 w-full max-w-7xl mx-auto px-6 sm:px-12 md:px-24">
      <SectionHeading>About Me</SectionHeading>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 w-full mt-12">

        {/* Left Column - Info Cards */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
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
                    <h3 className="font-syne text-lg font-bold text-white mb-2">{item.title}</h3>
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

        {/* Right Column - Stats Grid */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 gap-4"
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative glass-card backdrop-blur-xl rounded-2xl p-8 flex flex-col justify-center overflow-hidden border border-zinc-800 hover:border-violet-500/30 transition-all duration-300"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                <h4 className="font-syne text-5xl lg:text-6xl font-bold gradient-text mb-2 tracking-tight">
                  {stat.value}<span className="text-2xl text-zinc-500">{stat.suffix}</span>
                </h4>
                <p className="text-zinc-500 font-sans text-xs uppercase tracking-widest font-medium">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
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
