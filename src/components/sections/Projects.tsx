"use client";

import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { Github, ExternalLink } from 'lucide-react';

const projectsList = [
  {
    title: "AI Career Mentor",
    tagline: "✦ 7 Specialized AI Workflows. 1 Career Orchestration OS. ✦",
    description:
      "A production-grade, enterprise-ready Career Orchestration OS designed to fast-track developer career transitions. By combining a parallel LangGraph multi-agent system, vector-search RAG retrieval, and real-time full-duplex WebSocket protocols, it automates the entire career transition pipeline. Built on a decoupled microservices architecture with a Next.js 14 SPA on Vercel, a FastAPI gateway on Render, Neon Serverless Postgres, and Upstash Redis. Optimized to run completely on free-tier LLM endpoints via resilient fallback registries.",
    highlight:
      "LangGraph DAG Orchestration · Gemini Live Voice Coach · ChromaDB Hybrid RAG · Multi-LLM Fallback Architecture · 116 Pytest Tests",
    features: [
      "📄 Resume Intelligence: 4-layer PDF magic-bytes validation, deterministic ATS rules-based auditing, and LLM semantic skill-gap extraction persisted to Neon Postgres with a 2-day rate cooldown",
      "🗺️ Personalized RAG Roadmaps: Generates an 8-week structured syllabus utilizing thread-pool concurrent searches on DuckDuckGo, filtering YouTube/GitHub links by domain quality score & HTTP reachability",
      "📈 Live Market Scrapers: Region-aware salary scraping via Serper.dev and Tavily APIs, currency normalization (INR/USD/EUR/etc.), and regional hiring volume trends without static database reliance",
      "🎤 7-Phase FSM Mock Interview: Bidirectional WebSocket interview engine with adaptive coding challenges (Monaco editor canvas), session FSM checkpoints, and Edge-TTS audio speech feedback",
      "🎙️ Anya Multimodal Voice Coach: Bidirectional Hinglish conversation engine powered by Gemini Live Multimodal WebSocket API with audio streaming and dynamic resume context injection",
      "🔀 Resilient Orchestration: Dynamic LLM routing (Groq Llama 3.3, NVIDIA NIM, Gemini) featuring circuit breakers, custom fallbacks, and a 4-agent parallel LangGraph DAG streaming progress via SSE"
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

      <div className="flex flex-col mt-16 w-full gap-20">
        {projectsList.map((project, idx) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className={`flex flex-col lg:flex-row items-stretch justify-between gap-12 lg:gap-20 w-full ${
              idx !== projectsList.length - 1 ? 'border-b border-zinc-900/60 pb-20' : ''
            }`}
          >
            {/* Left Side: Info & Metadata */}
            <div className="flex-1 flex flex-col justify-between gap-8">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="font-mono text-3xl font-extrabold text-violet-500/40">
                    0{idx + 1}.
                  </span>
                  <h3 className="font-title text-3xl sm:text-4xl font-extrabold text-white tracking-tight hover:text-violet-300 transition-colors">
                    {project.title}
                  </h3>
                </div>
                <p className="font-mono text-sky-400 text-xs tracking-wider uppercase">
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
                      className="px-2.5 py-1 bg-zinc-950/60 border border-zinc-900 text-zinc-400 text-[10px] font-mono rounded-md"
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
                    <Github size={14} /> Github
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
            <div className="flex-1 flex flex-col justify-center gap-4">
              <h4 className="font-mono text-xs text-zinc-500 font-bold uppercase tracking-widest mb-1">
                Key Engine Modules
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                {project.features.map((feature, fIdx) => (
                  <div
                    key={fIdx}
                    className="bg-[#050508]/40 border border-zinc-900 p-4 rounded-xl hover:border-zinc-800 transition-colors flex flex-col justify-between"
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
