"use client";

import SectionHeading from '../ui/SectionHeading';
import ProjectCard from '../ui/ProjectCard';

const projectsList = [
{
  title: "AI Career Mentor",
  tagline: "5 AI Workflows. One Career Transformation. Under 60 Seconds.",
  description:
    "A production-grade, full-stack career coaching platform powered by a LangGraph static DAG orchestrating 4 specialized AI workflows with a dedicated Direct Groq WebSocket mock interviewer. Built on a decoupled microservices architecture — Next.js 14 frontend on Vercel, FastAPI backend on Render, Neon Serverless Postgres, and Upstash Redis. Features a Hybrid Semantic RAG Engine (ChromaDB + in-memory MockRAG fallback), real-time WebSocket mock interviews with sub-2s Groq streaming latency, live market intelligence via Serper.dev & Tavily AI, SHA-256 keyed AI response caching, a deterministic ATS scoring engine, and Google OAuth 2.0 with JWT refresh tokens. Dynamic Multi-Provider LLM routing across Groq (Llama 3.3 70B), NVIDIA NIM (Llama 3.3 70B Instruct), and Gemini 2.5 Flash with automatic fallback chains and circuit-breaker mechanisms — 100% system availability. 130+ commits across 5–6 months of solo development.",
  highlight:
    "LangGraph Static DAG Orchestration · ChromaDB Hybrid RAG Engine · Groq + NVIDIA NIM + Gemini Multi-Provider · Sub-2s WebSocket Streaming · Serper.dev & Tavily Market Intelligence · Google OAuth 2.0 · Docker + GHCR + GitHub Actions CI/CD",
  stats: [
    { label: "AI Workflows", value: "4+1" },
    { label: "Interview Latency", value: "<2s" },
    { label: "Analysis Time", value: "<60s" },
    { label: "Commits", value: "130+" },
    { label: "Dev Time", value: "5-6 mo" },
    { label: "Hackathon Prize Pool", value: "$175K+" },
  ],
  features: [
    "📄 Resume Analyzer: PDF parsed via pdfplumber, deterministic ATS scoring engine with keyword/verb/format breakdowns, AI skill-gap detection with structured JSON persisted to Neon Serverless Postgres — no S3 needed",
    "🗺️ 8-Week Roadmap Generator: LangGraph Roadmap Builder aggregates skill gaps + market trends + LinkedIn data, enriched via ChromaDB RAG (auto-seeded at startup) + curated resource knowledge base + in-memory MockRAG fallback for Render OOM safety — real YouTube, GitHub, and documentation resources per week",
    "📈 Live Market Intelligence: Market Researcher workflow fetches real-time salary benchmarks, hiring volumes, and in-demand skills via Serper.dev & Tavily AI with regex-based JSON extraction and async link validation — zero stale mock data",
    "🎤 Streaming Mock Interviews: Bypasses LangGraph entirely — Direct Groq OpenAI SDK over WebSocket for sub-2s token streaming, 7-question adaptive state machine (FAANG=Hard / Service-based=Easy), Edge-TTS voice synthesis with 30s timeout guard, crash-resilient _safe_send_json() WebSocket handling",
    "🔗 LinkedIn Profile Reviewer: LangGraph workflow with dynamic provider routing — headline optimization, profile SEO scoring, and recruiter keyword gap analysis",
    "🧠 Full Multi-Agent Analysis: LangGraph static DAG with parallel fan-out — Resume Analyst runs first, then Market Researcher + LinkedIn Optimizer in parallel, then Roadmap Builder aggregates all outputs. Pydantic validation/repair loops catch malformed LLM outputs before they reach the UI",
    "🔐 Google OAuth 2.0: One-click login via @react-oauth/google — ID Token verified server-side with google-auth, exchanged for short-lived JWT + long-lived refresh token with bcrypt-secured fallback auth",
    "🔀 Dynamic Multi-Provider LLM Routing: Groq (Llama 3.3 70B) · NVIDIA NIM (Llama 3.3 70B Instruct) · Gemini 2.5 Flash — user-selectable from settings, automatic fallback chains on provider failure, deterministic fallback engines for malformed outputs, circuit-breaker on repeated failures",
    "🛡️ Rate Limiting + Caching: SlowAPI + Upstash Redis — 100 req/hr, 1000 req/day per user. SHA-256 keyed AI response cache bypasses redundant LLM calls. Rate counters increment only on successful AI responses",
    "📊 Persistent Dashboard: Real-time Skill Radar (Recharts), Day Streaks, Weekly Activity, interview history, roadmap history — all backed by Neon Serverless Postgres with optimized connection pooling (pool_size=3, pool_recycle=300s, pool_pre_ping=True)",
    "🏗️ CI/CD Pipeline: GitHub Actions — frontend ESLint + Next.js production build, backend pytest suite + pip-audit security scanning. Auto-deploy via Vercel (frontend), Render webhook (backend), and Docker image publishing to GHCR",
  ],
  architecture: {
    pattern: "Decoupled Microservices + LangGraph Static DAG Orchestration + Hybrid Semantic RAG",
    agents: [
      {
        name: "Resume Analyst",
        engine: "LangGraph node + Groq / NVIDIA NIM / Gemini (dynamic routing)",
        output: "ATS score, skill gaps, strengths, structured JSON persisted to Neon Postgres",
      },
      {
        name: "Market Researcher",
        engine: "LangGraph node + dynamic provider routing + Serper.dev & Tavily AI",
        output: "Live salary benchmarks, top hiring companies, in-demand skills, hiring volumes",
      },
      {
        name: "Roadmap Builder",
        engine: "LangGraph aggregation node + dynamic provider routing + ChromaDB RAG + MockRAG fallback",
        output: "8-week personalized plan with real YouTube, GitHub, and documentation resources",
      },
      {
        name: "LinkedIn Optimizer",
        engine: "LangGraph node + dynamic provider routing",
        output: "Headline suggestions, profile SEO score, recruiter keyword gaps",
      },
      {
        name: "Mock Interviewer",
        engine: "Direct Groq OpenAI SDK Streaming over WebSocket (bypasses LangGraph)",
        output: "7 adaptive questions → Edge-TTS voice → score /100",
      },
    ],
    llm: {
      primary: "Groq (Llama 3.3 70B) — recommended default, all workflows",
      alternative: "NVIDIA NIM (Llama 3.3 70B Instruct) — user-selectable",
      fallback: "Google Gemini 2.5 Flash — automatic fallback on provider failure",
      circuit_breaker: "Temporarily disables repeated failing providers — 100% system availability",
    },
    rag: {
      primary: "ChromaDB persistent vector store — auto-seeded at startup with curated resources",
      fallback: "In-memory MockRAG (SequenceMatcher) — activates on Render OOM or DISABLE_CHROMA=true",
      sources: "YouTube · GitHub repos · Official docs · Articles",
    },
  },
  stack: [
    "Next.js 14",
    "TypeScript",
    "React",
    "Lucide React",
    "Recharts",
    "Axios",
    "FastAPI",
    "Python 3.11",
    "LangGraph",
    "Google Gemini 2.5 Flash",
    "Groq (Llama 3.3 70B)",
    "NVIDIA NIM",
    "OpenAI SDK (via Groq/NVIDIA)",
    "ChromaDB",
    "Serper.dev",
    "Tavily AI",
    "Neon Serverless Postgres",
    "SQLAlchemy + Alembic",
    "Upstash Redis",
    "SlowAPI",
    "Pydantic",
    "pdfplumber",
    "Edge-TTS",
    "WebSocket",
    "Google OAuth 2.0",
    "JWT + bcrypt",
    "Docker + Docker Compose",
    "GitHub Actions",
    "GHCR",
    "Vercel",
    "Render.com",
  ],
  hackathons: [
    {
      name: "Microsoft AI DevDays",
      prizePool: "$80,000+",
      requirements: ["LangGraph / Agentic AI", "Deployed MVP", "Public Repo"],
    },
    {
      name: "Amazon Nova AI",
      prizePool: "$40,000 cash + $55,000 AWS Credits",
      requirements: ["Multi-Agent Career Workflow", "Edge-TTS Voice", "Full-stack Deployed MVP"],
    },
  ],
  githubUrl: "https://github.com/Anil-Pradhan-web/ai-career-mentor",
  liveUrl: "https://ai-career-mentor-anil.vercel.app",
  apiUrl: "https://ai-career-mentor-rrpu.onrender.com/docs",
  type: "Full-Stack · Agentic AI · Production",
  solo: true,
  duration: "5–6 months",
  commits: "130+",
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
      "💬 Contextual AI Chat: Floating assistant answers plain-English questions using live NGO database as context",
      "🛠️ Dual AI Provider: Seamless switching between Gemini 1.5 Pro (Primary) and Groq Llama 3.3 (Fallback)",
      "🔐 Security: Firebase-backed Google Authentication with secure server-side token verification on every request"
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
      "⌨️ Hacker Typing: Character-by-character realistic code typing engine with auto-indent for VS Code",
      "🎙️ Voice Intelligence: Multi-engine TTS (Sarvam Bulbul v3 / Gemini / Edge) with intelligent fallback",
      "🌐 Web Autonomy: Selenium-driven browser automation with persistent Chrome profiles and auto-scrolling"
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
