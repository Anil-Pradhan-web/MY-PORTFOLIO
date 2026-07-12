"use client";

import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { Trophy, Code2, Cloud, Award, ArrowRight, ExternalLink } from 'lucide-react';

const achievements = [
  {
    title: "Hackathons & Competitions",
    desc: [
      "Finalist, Dell FutureMinds AI Hackathon 2026 – Team IdeaForg-E, shortlisted for the Grand Finale to present TaskPilot AI at Dell Technologies, Bengaluru.",
      "Developed production-grade AI solutions for Microsoft AI DevDays, Amazon Nova AI Challenge, and Google Solution Challenge."
    ],
    icon: Trophy,
    color: "from-violet-500/20 to-purple-500/20",
    iconColor: "text-violet-400",
    borderColor: "group-hover:border-violet-500/30"
  },
  {
    title: "Data Structures & Algorithms",
    desc: [
      "Solved 200+ DSA problems across LeetCode & GeeksforGeeks.",
      "Earned the GeeksforGeeks 160 Days of Code Challenge certificate and T-shirt."
    ],
    icon: Code2,
    color: "from-cyan-500/20 to-blue-500/20",
    iconColor: "text-cyan-400",
    borderColor: "group-hover:border-cyan-500/30"
  },
  {
    title: "Google Cloud Program",
    desc: [
      "Completed Google Cloud Arcade Program (2024–25), earning 75+ Arcade Points through hands-on cloud architecture labs."
    ],
    link: "View Badges",
    linkUrl: "https://www.credly.com/users/anil-pradhan324",
    icon: Cloud,
    color: "from-sky-500/20 to-blue-500/20",
    iconColor: "text-sky-400",
    borderColor: "group-hover:border-sky-500/30"
  },
  {
    title: "Professional Certifications",
    desc: [
      "Microsoft: Career Essentials in Software Development",
      "Cisco: Python Essentials 2",
      "HackerRank: Python (Basic) and Java (Basic)",
      "IBM: AI Fundamentals & Anthropic: Claude 101"
    ],
    icon: Award,
    color: "from-pink-500/20 to-rose-500/20",
    iconColor: "text-pink-400",
    borderColor: "group-hover:border-pink-500/30"
  }
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 w-full max-w-7xl mx-auto px-6 sm:px-12 md:px-24">
      <SectionHeading>Achievements & Certifications</SectionHeading>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 w-full">
        {achievements.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`flex flex-col bg-[#050508]/60 backdrop-blur-xl p-8 rounded-2xl border border-zinc-800/80 ${item.borderColor} transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,92,246,0.05)] group relative overflow-hidden`}
            >
              {/* Decorative background glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-violet-500/5 rounded-full blur-3xl pointer-events-none group-hover:bg-violet-400/10 transition-all duration-500" />
              
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 bg-gradient-to-br ${item.color} rounded-xl border border-white/5`}>
                  <Icon className={`w-6 h-6 ${item.iconColor}`} />
                </div>
                <h3 className="font-title text-xl font-bold text-white tracking-tight group-hover:text-zinc-200 transition-colors">
                  {item.title}
                </h3>
              </div>

              <ul className="text-zinc-400 text-sm leading-relaxed mb-6 space-y-3 font-sans flex-grow">
                {item.desc.map((d, i) => (
                  <li key={i} className="flex items-start gap-2.5 hover:text-zinc-300 transition-colors">
                    <span className="text-violet-400/80 font-bold shrink-0 mt-0.5">✦</span>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>

              {item.link ? (
                <a
                  href={item.linkUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-violet-400 hover:text-violet-300 text-xs tracking-wider font-bold uppercase mt-auto flex items-center gap-1.5 transition-colors cursor-pointer w-fit"
                >
                  {item.link}
                  <ExternalLink size={12} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              ) : (
                <div className="mt-auto h-4"></div>
              )}
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mt-16 flex justify-center w-full"
      >
        <a
          href="https://www.linkedin.com/in/anil-pradhan543/details/certifications/"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 px-8 py-4 bg-zinc-950/60 hover:bg-zinc-900 border border-zinc-800/80 hover:border-violet-500/50 text-zinc-300 hover:text-violet-300 font-title tracking-wider font-bold text-xs uppercase rounded-xl transition-all shadow-lg hover:shadow-[0_0_25px_rgba(139,92,246,0.15)] group"
        >
          View All Certificates
          <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
        </a>
      </motion.div>
    </section>
  );
}
