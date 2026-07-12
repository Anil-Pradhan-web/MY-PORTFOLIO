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
    iconColor: "text-violet-400"
  },
  {
    title: "Data Structures & Algorithms",
    desc: [
      "Solved 200+ DSA problems across LeetCode & GeeksforGeeks.",
      "Earned the GeeksforGeeks 160 Days of Code Challenge certificate and T-shirt."
    ],
    icon: Code2,
    iconColor: "text-cyan-400"
  },
  {
    title: "Google Cloud Program",
    desc: [
      "Completed Google Cloud Arcade Program (2024–25), earning 75+ Arcade Points through hands-on cloud architecture labs."
    ],
    link: "View Badges",
    linkUrl: "https://www.credly.com/users/anil-pradhan324",
    icon: Cloud,
    iconColor: "text-sky-400"
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
    iconColor: "text-pink-400"
  }
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 w-full max-w-7xl mx-auto px-6 sm:px-12 md:px-24">
      <SectionHeading>Achievements & Certifications</SectionHeading>

      <div className="mt-12 flex flex-col w-full border-t border-zinc-900/60">
        {achievements.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="group flex flex-col lg:flex-row items-start lg:items-center justify-between py-8 border-b border-zinc-900/60 hover:bg-zinc-950/20 px-4 transition-all duration-300 relative overflow-hidden"
            >
              {/* Soft background glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500/0 via-violet-500/[0.015] to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Left Side: Category Title and Icon */}
              <div className="flex items-center gap-4 lg:w-1/3 mb-4 lg:mb-0 z-10">
                <div className="p-2.5 bg-zinc-950 border border-zinc-900 rounded-xl group-hover:border-violet-500/30 transition-colors">
                  <Icon className={`w-5 h-5 ${item.iconColor} group-hover:scale-110 transition-transform`} />
                </div>
                <h3 className="font-title text-lg sm:text-xl font-bold text-white group-hover:text-violet-300 transition-colors">
                  {item.title}
                </h3>
              </div>

              {/* Right Side: Bullet Items & Link */}
              <div className="flex-1 lg:pl-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 w-full z-10">
                <ul className="text-zinc-400 text-sm leading-relaxed space-y-2.5 font-sans max-w-2xl">
                  {item.desc.map((d, i) => (
                    <li key={i} className="flex items-start gap-2 hover:text-zinc-300 transition-colors">
                      <span className="text-violet-500/60 font-bold mt-0.5 select-none">•</span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>

                {item.link ? (
                  <a
                    href={item.linkUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-zinc-500 hover:text-violet-400 text-xs tracking-wider font-bold uppercase flex items-center gap-1.5 transition-colors shrink-0 cursor-pointer w-fit"
                  >
                    {item.link}
                    <ExternalLink size={12} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                ) : (
                  <div className="w-16"></div>
                )}
              </div>
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
