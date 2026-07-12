"use client";

import SectionHeading from '../ui/SectionHeading';
import ProjectCard from '../ui/ProjectCard';

const projectsList = [
  {
    title: "AI Career Mentor",
    tagline: "7 Specialized AI Workflows. 1 Career Transformation. Real-time Voice Coach.",
    description:
      "A production-grade, full-stack career coaching platform that orchestrates 7 specialized AI workflows (Resume Intelligence, Roadmaps, Market Explorer, LinkedIn Optimizer, WebSocket Mock Interview Engine, Gemini Live Voice Coach, and Full Career Analysis). Built on a decoupled microservices architecture with a Next.js 14 SPA on Vercel, a FastAPI gateway on Render, Neon Serverless Postgres, and Upstash Redis. Features a parallel LangGraph DAG, a Hybrid Semantic RAG Engine (ChromaDB + in-memory MockRAG OOM fallback), real-time WebSocket mock interviews, full-duplex Hinglish voice coaching (Gemini Live), and a resilient multi-provider LLM fallback chain.",
    highlight:
      "LangGraph DAG Orchestration · Gemini Live Voice Coach · ChromaDB Hybrid RAG · Multi-LLM Fallback Architecture · 116 Pytest Tests",
    features: [
      "📄 Resume Intelligence: PDF parsed via pdfplumber, ATS scoring engine with keyword breakdowns, and AI skill-gap detection persisted to Neon Postgres",
      "🗺️ Career Roadmap Builder: LangGraph roadmap aggregator using Gemini 2.5 Flash & ChromaDB RAG to build personal 8-week gamified learning paths",
      "📈 Live Market Explorer: Real-time salary data, hiring trends, and company intelligence via Serper.dev & Tavily AI with async link validation",
      "🎤 Mock Interview Engine: 7-phase FSM over WebSockets with adaptive coding interviews (3 difficulty tiers) and real-time Monaco editor execution",
      "🎙️ Anya Voice Coach: Real-time bidirectional Hinglish voice coach powered by Gemini Live Multimodal WebSocket API with full-duplex audio",
      "🔀 Multi-Provider LLM Registry: Dynamic routing across Groq (Llama 3.3 70B), NVIDIA NIM, and Gemini with automatic fallback chains and circuit breakers"
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
      "Groq",
      "NVIDIA NIM",
      "ONNX",
      "Docker",
      "pytest (116 tests)"
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
  {
    title: "VolunteerIQ",
    tagline: "🌍 AI-Powered Humanitarian Intelligence for NGOs · Google Solution Challenge 2026",
    description: "An end-to-end AI coordination platform that transforms how NGOs respond to community crises. VolunteerIQ bridges the gap by converting raw field surveys into coordinated field operations — matching the right skills to the right locations in minutes, not days.",
    highlight: "Google Solution Challenge 2026 · Team ClutchCode · Live Ops Map + AI Chat",
    features: [
      "🤖 Survey Intelligence: Gemini 1.5 Pro analyzes PDF/CSV/DOCX reports to extract top 3 urgent problems & urgency scores",
      "📊 Live Ops Map: Mapbox-powered geospatial visualization of tasks with colored status pins & click popups",
      "🧩 Smart Matching: AI ranks available volunteers by skill match, proximity, and availability with 0–100 scores",
      "💬 Contextual AI Chat: Floating assistant answers plain-English questions using live NGO database as context"
    ],
    stack: ["Next.js 14", "FastAPI", "Gemini 1.5 Pro", "Groq", "Firebase Auth", "Mapbox GL", "PostgreSQL", "Docker"],
    githubUrl: "https://github.com/Anil-Pradhan-web/VolunteerIQ",
    liveUrl: "https://volunteer-iq-clutchcode.vercel.app"
  },
  {
    title: "S.I.A — Super Intelligent Assistant",
    tagline: "🤖 Agentic AI Desktop Companion with LangGraph, RAG Memory & Voice Intelligence",
    description: "A fully local, agentic AI desktop companion v5.0 built for Windows. Unlike standard chatbots, S.I.A uses a LangGraph-powered ReAct agent to autonomously decide which tools to invoke, chain multiple actions, and remember personal context across sessions using ChromaDB.",
    highlight: "LangGraph ReAct Agent · ChromaDB RAG · 28+ Native OS Tools",
    features: [
      "🧠 LangGraph Brain: Native tool calling with Groq Llama 3.3 70B & Gemini 1.5 Flash reasoning",
      "💾 Hybrid Memory: ChromaDB vector store for RAG + SQLite for permanent user preferences",
      "🖥️ OS Control: Deep automation for volume, brightness, screenshots, and file system via Win32 API",
      "🌐 Web Autonomy: Selenium-driven browser automation with persistent Chrome profiles"
    ],
    stack: ["Next.js 16", "FastAPI", "LangGraph", "ChromaDB", "Python", "Groq", "Gemini", "Selenium", "SQLite"],
    githubUrl: "https://github.com/Anil-Pradhan-web",
    liveUrl: "desktop"
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 w-full max-w-7xl mx-auto px-6 sm:px-12 md:px-24">
      <SectionHeading>Things I&apos;ve Built</SectionHeading>

      <div className="grid grid-cols-1 gap-12 mt-12">
        {projectsList.map((project, idx) => (
          <ProjectCard
            key={project.title}
            index={idx}
            {...project}
          />
        ))}
      </div>
    </section>
  );
}
