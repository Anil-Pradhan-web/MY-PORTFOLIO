"use client";

import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase, ChevronRight, Award } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

const experiences = [
  {
    role: "College Ambassador (Corporate Projects Program)",
    org: "Techfest, IIT Bombay",
    period: "Jul 2026 – Present",
    location: "Mumbai, India (Remote)",
    type: "Leadership & Corporate Projects",
    bullets: [
      "Selected as a College Ambassador for Techfest, IIT Bombay, representing one of Asia's largest science and technology festivals.",
      "Completed industry-sponsored corporate projects across web development, business strategy, and market research in collaboration with partner organizations.",
      "Qualified for Round 2 of the FlowFinance Growth Strategy & Business Development Challenge by developing a business strategy presentation and market analysis.",
      "Collaborated with multidisciplinary teams while delivering project submissions within defined deadlines."
    ],
    skills: ["Web Development", "Business Strategy", "Market Research", "Team Collaboration", "Strategic Presentation"],
    metrics: [
      { label: "Challenge", value: "Round 2 Qualifier" },
      { label: "Festival Scale", value: "Asia's Largest" },
    ]
  },
  {
    role: "Solo Full Stack Developer",
    org: "AI Career Mentor",
    period: "Mar 2026 – Present",
    location: "Bhubaneswar, Odisha (Remote)",
    type: "Agentic AI platform",
    bullets: [
      "Architected a parallel LangGraph workflow with 7 specialized AI agents, reducing end-to-end career analysis latency by 60% (4 min → 60 sec).",
      "Built a real-time AI Mock Interview Engine using FastAPI, WebSockets, and a 7-stage Finite State Machine (FSM), delivering company-specific technical interviews with live coding evaluation and personalized feedback.",
      "Developed 'Anya', a real-time multimodal AI Voice Coach powered by the Gemini Live API, enabling full-duplex voice conversations with resume-aware career guidance, interview coaching, and personalized learning support.",
      "Engineered a fault-tolerant multi-LLM architecture (Groq, NVIDIA NIM, Cerebras) with circuit breakers, automatic failover, and rate limiting, achieving uninterrupted service availability.",
      "Optimized RAG retrieval using local ONNX embeddings with keyword-search fallback, eliminating embedding API dependency while ensuring reliable performance on low-memory cloud deployments validated through 116 automated tests."
    ],
    skills: ["FastAPI", "LangGraph", "Next.js", "ChromaDB", "Redis", "Docker", "Gemini Live", "ONNX"],
    metrics: [
      { label: "Orchestration", value: "7 AI Agents" },
      { label: "Latency", value: "60% Reduction" },
      { label: "Pytest Suite", value: "116 passing tests" }
    ]
  },
  {
    role: "Integration Lead",
    org: "TaskPilot AI – Team IdeaForg-E",
    period: "Jun 2026 – Jul 2026",
    location: "Bengaluru, India (Remote)",
    type: "AI Productivity Platform",
    bullets: [
      "Architected a multi-agent engineering productivity platform integrating 7 fragmented developer tools (Jira, GitHub, Slack, Email, Calendar, Meetings, and Incidents), reducing manual task tracking by ~2 hours/day.",
      "Designed a hybrid AI task extraction pipeline combining heuristic rules, fuzzy matching, and LLM reasoning (Qwen), recovering 35% more hidden action items while reducing LLM inference costs by 75% through selective AI execution.",
      "Built a concurrency-safe orchestration backend using FastAPI, SQLite WAL mode, and Redis, enabling reliable parallel multi-agent execution with real-time P1 incident reprioritization in under 15 seconds.",
      "Developed a self-healing workflow engine with automated stale-run recovery and an AI-powered quality evaluator that validated task completeness, actionability, and generated context-aware follow-up questions."
    ],
    skills: ["FastAPI", "LangGraph", "React", "SQLite", "Redis", "LLMs", "Qwen"],
    metrics: [
      { label: "Integrations", value: "7 Fragmented Tools" },
      { label: "Manual Tracking", value: "-2 hours/day" },
      { label: "Incident Sync", value: "<15 seconds" }
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-28 w-full max-w-7xl mx-auto px-6 sm:px-12 md:px-24 relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-violet-600/10 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-cyan-600/10 rounded-full blur-3xl -z-10 pointer-events-none" />

      <SectionHeading>Experience & Initiatives</SectionHeading>

      <div className="mt-16 ml-2 md:ml-8 relative border-l-2 border-dashed border-zinc-800">
        {/* Decorative top pulse */}
        <div className="absolute -top-1 -left-[5px] w-2.5 h-2.5 bg-violet-500 rounded-full animate-ping" />

        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            className="mb-20 last:mb-0 relative pl-6 sm:pl-10 group"
          >
            {/* Timeline Indicator */}
            <span className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-zinc-900 border-2 border-zinc-700 group-hover:border-violet-400 group-hover:shadow-[0_0_12px_rgba(167,139,250,0.8)] transition-all duration-300 z-10 flex items-center justify-center">
              <span className="h-1.5 w-1.5 rounded-full bg-zinc-700 group-hover:bg-violet-400 transition-all duration-300" />
            </span>

            {/* Experience Card */}
            <div className="relative bg-zinc-950/40 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-zinc-900/80 group-hover:border-violet-500/30 group-hover:bg-zinc-900/30 transition-all duration-300 hover:shadow-[0_4px_30px_rgba(139,92,246,0.05)]">
              {/* Card Glow Border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-violet-500/5 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              {/* Title & Metadata Header */}
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-white font-title group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-violet-400 group-hover:to-cyan-400 transition-all duration-300">
                    {exp.role}
                  </h3>
                  <h4 className="text-lg font-bold text-zinc-300 mt-1 flex items-center gap-2">
                    {exp.org}
                  </h4>
                </div>

                {/* Badges Column */}
                <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-2 sm:items-center lg:items-end xl:items-center text-xs text-zinc-400 font-mono">
                  <div className="flex items-center gap-1.5 bg-zinc-900/80 px-3 py-1.5 rounded-md border border-zinc-800/80">
                    <Calendar size={13} className="text-violet-400" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-zinc-900/80 px-3 py-1.5 rounded-md border border-zinc-800/80">
                    <MapPin size={13} className="text-cyan-400" />
                    <span>{exp.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-zinc-900/80 px-3 py-1.5 rounded-md border border-zinc-800/80">
                    <Briefcase size={13} className="text-violet-400" />
                    <span>{exp.type}</span>
                  </div>
                </div>
              </div>

              {/* Quick Metrics Grid */}
              <div className="flex flex-wrap gap-3 mb-6 bg-zinc-950/60 p-4 rounded-xl border border-zinc-900/80">
                <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 uppercase tracking-widest mr-2">
                  <Award size={14} className="text-violet-400" /> Key Metrics:
                </div>
                {exp.metrics.map((metric, mIdx) => (
                  <div
                    key={mIdx}
                    className="flex items-center gap-2 px-3 py-1 bg-violet-950/20 hover:bg-violet-900/20 text-violet-300 text-xs font-mono font-medium rounded-lg border border-violet-500/20 transition-colors"
                  >
                    <span className="opacity-60">{metric.label}:</span>
                    <span className="font-bold text-violet-200">{metric.value}</span>
                  </div>
                ))}
              </div>

              {/* Bullet Points */}
              <ul className="space-y-3.5 mb-6 text-zinc-400 text-sm md:text-[15px] leading-relaxed">
                {exp.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-2.5">
                    <ChevronRight size={16} className="text-cyan-400 mt-1 flex-shrink-0 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-zinc-900/80">
                {exp.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="text-xs font-mono bg-zinc-900/60 text-zinc-300 px-3 py-1 rounded-md border border-zinc-800/60 group-hover:border-zinc-700/40 group-hover:text-white transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
