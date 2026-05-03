--- src/components/sections/About.tsx (原始)
"use client";

import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';

const skillsBioData = [
  {
    cmd: "$ whoami",
    content: "Anil Pradhan\nRole: Backend & AI Systems Developer\nBase: Bhubaneswar, Odisha",
    contentColor: "text-fuchsia-400"
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
          <div className="absolute -inset-1 bg-fuchsia-500/20 rounded-xl blur-2xl opacity-60 translate-y-4 shadow-[0_30px_60px_rgba(232,121,249,0.4)]" />
          <div className="absolute inset-x-5 -bottom-8 h-20 bg-fuchsia-400/30 blur-3xl opacity-70" />

          <div className="relative h-full rounded-2xl border border-zinc-700/60 bg-[#0a0a0a]/90 backdrop-blur-md p-5 sm:p-7 min-h-[280px] sm:min-h-[340px] shadow-[0_0_40px_rgba(0,0,0,0.8)] overflow-x-auto">
            <div className="font-mono text-[14px] leading-7">
              {skillsBioData.map((item, idx) => (
                <div key={idx} className="mb-7 last:mb-0 relative z-10 w-full overflow-hidden">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-fuchsia-400 font-bold">&gt;</span>
                    <span className="text-zinc-100 font-semibold">{item.cmd}</span>
                  </div>
                  <div className={`pl-4 ${item.contentColor} whitespace-pre-line border-l-2 border-fuchsia-400/20 ml-[5px]`}>
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
              <div className="absolute top-0 left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-fuchsia-500/20 to-transparent group-hover:via-fuchsia-400/60 transition-opacity duration-500" />

              <h4 className="font-syne text-[45px] sm:text-[55px] leading-none font-extrabold text-fuchsia-400 mb-2 sm:mb-3 tracking-tight">
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

+++ src/components/sections/About.tsx (修改后)
"use client";

import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { User, Target, Code2 } from 'lucide-react';

const aboutData = [
  {
    icon: User,
    title: "Who I Am",
    content: "Anil Pradhan — Backend & AI Systems Developer based in Bhubaneswar, Odisha. Passionate about building scalable systems that bridge human intuition with machine precision."
  },
  {
    icon: Code2,
    title: "What I Do",
    content: "Architecting production-grade backend servers, multi-agent AI systems, and full-stack applications. Specializing in FastAPI, Next.js, and AI orchestration platforms."
  },
  {
    icon: Target,
    title: "My Mission",
    content: "Building scalable, low-latency AI orchestration platforms that solve real-world problems and empower developers to create impactful solutions."
  }
];

const stats = [
  { label: "CGPA", value: "9.11", suffix: "/10" },
  { label: "Major Projects", value: "5+", suffix: "" },
  { label: "Hackathons", value: "3", suffix: "+" },
  { label: "Coding Days", value: "80", suffix: "+" }
];

export default function About() {
  return (
    <section id="about" className="py-32 w-full max-w-7xl mx-auto px-6 sm:px-12 md:px-24">
      <Section>About Me</Section>

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
                  <div>
                    <h3 className="font-syne text-lg font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">{item.content}</p>
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
    </section>
  );
}
