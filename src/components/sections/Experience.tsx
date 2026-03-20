"use client";

import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';

const experiences = [
  {
    role: "Hackathon Participant — AI Career Mentor",
    org: "Microsoft AI Dev Days Hackathon",
    period: "Feb – Mar 2026",
    desc: "Built and submitted a 4-agent AI career coaching platform. Stack: AutoGen + Azure OpenAI + Next.js. Solo submission."
  },
  {
    role: "Hackathon Participant — AI Career Mentor",
    org: "Amazon Nova AI Hackathon",
    period: "Mar 2026",
    desc: "Adapted the same platform for Amazon Nova 2 Lite + Sonic via Bedrock. Targeting Agentic AI and Voice AI categories."
  },
  {
    role: "Participant",
    org: "Build with AI Bootcamp — Hack2skill (Kolkata)",
    period: "Mar 2026",
    desc: "Attended the Kolkata session of the Build with AI Bootcamp. Focused on practical AI application development and agent-based systems."
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 w-full max-w-7xl mx-auto px-6 sm:px-12 md:px-24">
      <SectionHeading>Experience & Activities</SectionHeading>

      <div className="mt-12 ml-4 md:ml-8 border-l border-cyan-400/50">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="mb-12 relative pl-8"
          >
            {/* Timeline Dot */}
            <span className="absolute -left-2 top-2 h-4 w-4 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)] border-4 border-[#0a0a0a]" />

            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
              <h3 className="text-2xl font-bold font-syne text-white">{exp.role}</h3>
              <span className="text-cyan-400 font-mono text-sm mt-1 md:mt-0 font-medium whitespace-nowrap">
                {exp.period}
              </span>
            </div>
            
            <h4 className="text-lg font-semibold text-zinc-300 mb-4">{exp.org}</h4>
            <p className="text-zinc-400 leading-relaxed text-sm md:text-base max-w-3xl">
              {exp.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
