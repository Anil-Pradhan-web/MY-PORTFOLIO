"use client";

import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';

const devlogs = [
  {
    date: "March 2026",
    tag: "Active",
    tagColor: "bg-green-500/10 text-green-500 border border-green-500/20",
    title: "Google Solution Challenge 2026",
    content: "Building VolunteerIQ with team ClutchCode — an AI-powered smart resource allocation and volunteer coordination platform for NGOs.",
    stack: "Next.js + FastAPI + Gemini + Firebase"
  },
  {
    date: "March 2026",
    tag: "Shipped",
    tagColor: "bg-cyan-400/10 text-cyan-400 border border-cyan-400/20",
    title: "Dual Hackathon Submission — AI Career Mentor",
    content: "Submitted AI Career Mentor to both Microsoft AI Dev Days and Amazon Nova AI hackathons simultaneously. Two separate cloud architectures, one codebase. Same app, different AI engines (Azure vs Bedrock)."
  },
  {
    date: "Ongoing",
    tag: "Learning",
    tagColor: "bg-blue-500/10 text-blue-500 border border-blue-500/20",
    title: "DSA in Java — LeetCode Grind",
    content: "Systematic DSA preparation covering Greedy, Dynamic Programming, and Graph algorithms. Following Kunal Kushwaha's bootcamp curriculum. Goal: Internship-ready by mid-2026."
  }
];

export default function Devlog() {
  return (
    <section id="devlog" className="py-24 w-full max-w-7xl mx-auto px-6 sm:px-12 md:px-24">
      <SectionHeading>What I'm Building</SectionHeading>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {devlogs.map((log, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="flex flex-col bg-[#0d0d0d] rounded-xl border-l-4 border-cyan-400 p-6 border-y border-r border-[#1a1a1a] shadow-lg hover:shadow-[0_0_20px_rgba(34,211,238,0.05)] transition-shadow"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-zinc-500 text-sm tracking-wide">{log.date}</span>
              <span className={`px-2.5 py-1 text-xs font-semibold rounded ${log.tagColor}`}>
                [{log.tag}]
              </span>
            </div>

            <h3 className="font-syne text-xl font-bold text-zinc-200 mb-4">{log.title}</h3>
            
            <p className="text-zinc-400 text-sm leading-relaxed max-w-xs md:max-w-none flex-grow">
              {log.content}
            </p>

            {log.stack && (
              <p className="mt-6 pt-4 border-t border-zinc-800 text-zinc-500 text-xs font-mono">
                Stack: {log.stack}
              </p>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
