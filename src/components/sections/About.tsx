"use client";

import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';

const skillsBioData = [
  {
    cmd: "$ whoami",
    content: "Anil Pradhan\nRole: Backend & AI Systems Developer\nBase: Bhubaneswar, Odisha",
    contentColor: "text-cyan-400"
  },
  {
    cmd: "$ cat about.txt",
    content: "I am a 2nd-year B.Tech CSE student at SOA University (Sem 4, Batch of '28). I specialize in architecting production-grade backend servers, multi-agent AI systems, and fluid full-stack applications. Always eager to solve complex problems through code.",
    contentColor: "text-zinc-300"
  },
  {
    cmd: "$ cat mission.txt",
    content: "Bridging the gap between human intuition and machine execution by building scalable, low-latency AI orchestration platforms.",
    contentColor: "text-zinc-400"
  }
];

const stardCards = [
  { label: "CGPA", value: "9.11" },
  { label: "Major Projects", value: "2" },
  { label: "Hackathon Submissions", value: "2" },
  { label: "Days Java Coding", value: "80+" }
];

export default function About() {
  return (
    <section id="about" className="py-24 w-full max-w-7xl mx-auto px-6 sm:px-12 md:px-24">
      <SectionHeading>About Me</SectionHeading>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-14 w-full items-start mt-6">
        
        {/* Left Column - Terminal style bio */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative lg:col-span-2 w-full h-full"
        >
          {/* Outer glow */}
          <div className="absolute -inset-1 bg-[#00e5ff]/20 rounded-xl blur-2xl opacity-60 translate-y-4 shadow-[0_30px_60px_rgba(0,229,255,0.4)]" />
          <div className="absolute inset-x-5 -bottom-8 h-20 bg-cyan-400/30 blur-3xl opacity-70" />

          <div className="relative h-full rounded-2xl border border-zinc-700/60 bg-[#0a0a0a]/90 backdrop-blur-md p-5 sm:p-7 min-h-[280px] sm:min-h-[340px] shadow-[0_0_40px_rgba(0,0,0,0.8)] overflow-x-auto">
            <div className="font-mono text-[14px] leading-7">
              {skillsBioData.map((item, idx) => (
                <div key={idx} className="mb-7 last:mb-0 relative z-10 w-full overflow-hidden">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[#00e5ff] font-bold">&gt;</span>
                    <span className="text-zinc-100 font-semibold">{item.cmd}</span>
                  </div>
                  <div className={`pl-4 ${item.contentColor} whitespace-pre-line border-l-2 border-[#00e5ff]/10 ml-[5px]`}>
                    {item.content}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Column - Stats cards */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-5 h-full"
        >
          {stardCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-[#050505]/90 backdrop-blur-xl border border-zinc-800/80 rounded-2xl p-8 flex flex-col justify-center shadow-[inset_0_1px_5px_rgba(255,255,255,0.02)] relative overflow-hidden group min-h-[160px]"
            >
              {/* Highlight line on top */}
              <div className="absolute top-0 left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-[#00e5ff]/20 to-transparent group-hover:via-[#00e5ff]/60 transition-opacity duration-500" />
              
              <h4 className="font-syne text-[45px] sm:text-[55px] leading-none font-extrabold text-[#00e5ff] mb-2 sm:mb-3 tracking-tight">
                {card.value}
              </h4>
              <p className="text-zinc-500 font-sans text-[13px] uppercase tracking-widest font-medium">
                {card.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
