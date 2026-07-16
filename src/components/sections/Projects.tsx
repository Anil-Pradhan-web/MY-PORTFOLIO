"use client";

import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { Github, ExternalLink, Lock } from 'lucide-react';

const projectsList = [
  {
    title: "AI Career Mentor",
    tagline: "✦ 7 Specialized AI Workflows ✦",
    description:
      "A production-grade, enterprise-ready Career Orchestration OS designed to automate and fast-track developer career transitions. Built on a decoupled microservices architecture with a Next.js SPA, a FastAPI gateway, Neon Postgres, and Upstash Redis, it leverages a parallel LangGraph multi-agent orchestrator to execute intensive resume audits, market analytics, and RAG roadmaps. Includes a real-time full-duplex WebSocket speech engine (Anya) powered by the Gemini Live API alongside an adaptive 8-stage mock interview engine.",
    highlight:
      "LangGraph Parallel DAG · Gemini Live voice · ChromaDB RAG · Multi-LLM provider registry · 116 tests",
    features: [
      "🔗 Parallel DAG Orchestration: Runs a 4-agent LangGraph workflow via concurrent fan-out/fan-in paths, reducing analysis latency by 75% (4 min → 60 sec) with real-time SSE logs.",
      "🎙️ Anya Voice Coach: Full-duplex Hinglish voice coaching using the Gemini Live API over WebSockets, featuring user barge-in cutoff and context grounding.",
      "🎤 8-Stage FSM Mock Interview: Interactive WebSocket evaluation canvas utilizing Monaco Editor coding checks and adaptive company-tier question loops.",
      "🗃️ Optimized Vector RAG: Resource-efficient ChromaDB setup utilizing in-memory mock database fallbacks to prevent OOM crashes on Render's 512MB RAM tier.",
      "🛡️ Resilient LLM Registry: Dynamic provider routing across Groq, Cerebras, and OpenRouter with automatic failover, circuit breakers, and Redis rate limiting.",
      "📄 Deterministic ATS Auditing: Magic-bytes PDF validation, semantic skill-gap extraction, and Neon Postgres persistence with a 5-day rate cooldown."
    ],
    stack: [
      "FastAPI",
      "LangGraph",
      "Next.js 14",
      "TypeScript",
      "React",
      "ChromaDB",
      "Upstash Redis",
      "Neon Postgres",
      "Gemini Live",
      "Groq (Llama 3.3)",
      "NVIDIA NIM",
      "pdfplumber",
      "pytest (116 tests)",
      "Docker"
    ],
    githubUrl: "https://github.com/Anil-Pradhan-web/ai-career-mentor",
    liveUrl: "https://ai-career-mentor-anil.vercel.app",
    isPrivate: true,
  },
  {
    title: "TaskPilot AI",
    tagline: "⚡ Multi-Agent Developer Productivity Platform with 7 Tool Integrations & Self-Healing Workflows.",
    description:
      "A multi-agent engineering productivity platform that normalizes and aggregates raw developer data from 7 fragmented sources (Jira, GitHub, Slack, Email, Calendar, Meetings, and Incidents) into a unified relational database. Features a hybrid AI task extraction pipeline combining heuristic rules and LLM reasoning, a concurrency-safe FastAPI backend, and a self-healing background workflow engine with automated stale-run recovery.",
    highlight:
      "Integration Lead · 7 Developer Integrations · Qwen LLM Reasoning · Real-time P1 Incident Reprioritization",
    features: [
      "🔌 Unified Developer Ingestion: Integrates Jira, GitHub, Slack, Email, Calendar, Meetings, and Incidents into a single db, saving ~2 hours daily",
      "🧠 Hybrid Task Extraction: Heuristics, fuzzy matching, and Qwen LLM reasoning to recover 35% more action items with 75% inference cost savings",
      "⚡ Concurrency-Safe Backend: High-performance architecture using SQLite WAL mode and Redis, supporting P1 incident reprioritization in under 15 seconds",
      "🔄 Self-Healing Orchestration: Background daemon monitoring execution states with automated stale-run recovery and AI quality checking"
    ],
    stack: [
      "FastAPI",
      "LangGraph",
      "React",
      "SQLite (WAL mode)",
      "Redis",
      "Qwen LLM",
      "Tailwind CSS",
      "TypeScript"
    ],
    githubUrl: "https://github.com/IdeaForg-e/TaskPilot-AI",
    liveUrl: "https://taskpilot-ai-app.onrender.com/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 w-full max-w-7xl mx-auto px-6 sm:px-12 md:px-24">
      <SectionHeading>Things I&apos;ve Built</SectionHeading>

      <div className="flex flex-col mt-16 w-full gap-12">
        {projectsList.map((project, idx) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: idx * 0.1 }}
            className="relative bg-[#050508]/60 backdrop-blur-2xl rounded-3xl border border-zinc-800/80 hover:border-violet-500/30 transition-all duration-500 hover:shadow-[0_0_60px_rgba(139,92,246,0.08)] overflow-hidden group p-8 lg:p-12 flex flex-col lg:flex-row gap-12 lg:gap-16 items-stretch"
          >
            {/* Ambient inner glow behind card */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-violet-600/5 rounded-full blur-[100px] pointer-events-none group-hover:bg-violet-500/10 transition-all duration-700" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/3 rounded-full blur-[100px] pointer-events-none group-hover:bg-cyan-500/5 transition-all duration-700" />

            {/* Left Side: Info & Metadata */}
            <div className="flex-1 flex flex-col justify-start gap-6 z-10">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="font-mono text-3xl font-extrabold text-violet-500/40">
                    0{idx + 1}.
                  </span>
                  <h3 className="font-title text-3xl sm:text-4xl font-extrabold text-white tracking-tight group-hover:text-zinc-200 transition-colors">
                    {project.title}
                  </h3>
                </div>
                <p className="font-mono text-sky-400 text-xs tracking-wider uppercase font-semibold">
                  {project.tagline}
                </p>
                <p className="text-zinc-400 text-sm leading-relaxed font-sans pt-2">
                  {project.description}
                </p>
              </div>

              {/* Stack and Action Links */}
              <div className="space-y-6 pt-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 bg-zinc-950/80 border border-zinc-900 text-zinc-400 text-[10px] font-mono rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-zinc-400 hover:text-violet-400 transition-colors cursor-pointer"
                  >
                    <Github size={14} />
                    <span>Github</span>
                    {project.isPrivate && (
                      <span className="flex items-center gap-1 px-1.5 py-0.5 bg-zinc-950 border border-zinc-900 rounded text-[9px] text-zinc-500 font-mono tracking-normal normal-case ml-1 font-normal">
                        <Lock size={8} className="text-zinc-600" /> Private
                      </span>
                    )}
                  </a>
                  {project.liveUrl && project.liveUrl !== 'desktop' && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-zinc-400 hover:text-sky-400 transition-colors cursor-pointer"
                    >
                      <ExternalLink size={14} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Right Side: Key Engine Modules / Features */}
            <div className="flex-1 flex flex-col justify-center gap-4 z-10">
              <h4 className="font-mono text-xs text-zinc-500 font-bold uppercase tracking-widest mb-1">
                Key Engine Modules
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                {project.features.map((feature, fIdx) => (
                  <div
                    key={fIdx}
                    className="bg-[#0b0b0e]/70 border border-zinc-900 hover:border-zinc-800 p-4 rounded-xl transition-all duration-300 flex flex-col justify-between"
                  >
                    <div className="text-zinc-300 text-xs font-semibold mb-1 leading-normal">
                      {feature.split(': ')[0]}
                    </div>
                    {feature.split(': ')[1] && (
                      <div className="text-zinc-500 text-[11px] leading-relaxed font-sans">
                        {feature.split(': ')[1]}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
