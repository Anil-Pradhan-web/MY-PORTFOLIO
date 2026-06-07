"use client";

import SectionHeading from '../ui/SectionHeading';
import ProjectCard from '../ui/ProjectCard';

const projectsList = [
{
  title: "AI Career Mentor",
  tagline: "6 Specialized AI Workflows. 1 Career Transformation. Real-time Voice Coach.",
  description:
    "A production-grade, full-stack career coaching platform that orchestrates 6 specialized AI workflows (Resume Intelligence, Roadmaps, Market Explorer, LinkedIn Optimizer, WebSocket Mock Interview Engine, and Gemini Live Voice Coach). Built on a decoupled microservices architecture with a Next.js 14 SPA on Vercel, a FastAPI gateway on Render, Neon Serverless Postgres, and Upstash Redis. Features a parallel LangGraph DAG, a Hybrid Semantic RAG Engine (ChromaDB + in-memory MockRAG OOM fallback), real-time WebSocket mock interviews, full-duplex Hinglish voice coaching (Gemini Live), a whitelisted Admin Observability & Telemetry Console (real-time active user/connection tracking and daily rollups), Sentry SDK exception monitoring, and Prometheus telemetry. Verified with 106 passing tests and zero circular dependencies.",
  highlight:
    "LangGraph DAG Orchestration · Gemini Live Voice Coach · ChromaDB Hybrid RAG · Real-time Admin Telemetry Dashboard · 106 Pytest Tests · $975K Hackathon Prize Pools",
  stats: [
    { label: "AI Workflows", value: "6" },
    { label: "Voice Coach", value: "Gemini Live" },
    { label: "Test Coverage", value: "106 tests" },
    { label: "Commits", value: "254+" },
    { label: "Hackathon Prize Pool", value: "$975K+" },
  ],
  features: [
    "📄 Resume Intelligence: PDF parsed via pdfplumber, deterministic ATS scoring engine with keyword/verb/format breakdowns, and AI skill-gap detection persisted to Neon Postgres",
    "🗺️ Career Roadmap Builder: LangGraph roadmap aggregator using Gemini 2.5 Flash & ChromaDB RAG (auto-seeded with 50+ curated resources) to build 8-week gamified learning paths",
    "📈 Live Market Explorer: Real-time salary data, hiring trends, and company intelligence via Serper.dev & Tavily AI with async link validation and resource scoring",
    "🔗 LinkedIn Optimizer: AI profile keyword injection, SEO scoring, and recruiter alignment suggestions using Groq/NVIDIA with programmatic fallback mechanisms",
    "🎤 Mock Interview Engine: 7-phase FSM over WebSockets with adaptive coding interviews (3 difficulty tiers), real-time Monaco editor execution, and Edge-TTS voice synthesis",
    "🎙️ Anya Voice Coach: Real-time bidirectional Hinglish voice coach powered by Gemini Live Multimodal WebSocket API with 16/24kHz full-duplex audio",
    "🛡️ Telemetry & Observability: Whitelisted admin panel with Redis-backed live user/WS connection tracking, rolling exception stack-trace feeds, Prometheus metrics scraping, and daily PostgreSQL database rollup tasks",
    "🔀 Multi-Provider LLM Registry: Dynamic routing across Groq (Llama 3.3 70B), NVIDIA NIM, and Gemini with automatic fallback chains (groq→google) and circuit breakers",
    "🧠 Hybrid Semantic RAG: ChromaDB vector store paired with an in-memory SequenceMatcher fallback to prevent OOM crashes on Render's 512MB RAM containers",
    "🔐 Google OAuth 2.0: ID Token verification server-side, exchanged for JWT + refresh token rotation preventing replay attacks, and SlowAPI/Redis rate limiting",
    "🏗️ CI/CD & Deployments: GitHub Actions pipeline running frontend lint/build and backend pytest (106 tests) + pip-audit, with auto-deploys via Vercel, Render, and GHCR",
  ],
  architecture: {
    pattern: "Decoupled Microservices + LangGraph Static DAG Orchestration + Hybrid Semantic RAG + Multi-Agent",
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
        name: "LinkedIn Optimizer",
        engine: "LangGraph node + dynamic provider routing",
        output: "Headline suggestions, profile SEO score, recruiter keyword gaps",
      },
      {
        name: "Roadmap Builder",
        engine: "LangGraph aggregation node + dynamic provider routing + ChromaDB RAG + MockRAG fallback",
        output: "8-week personalized plan with real YouTube, GitHub, and documentation resources",
      },
      {
        name: "Mock Interviewer",
        engine: "Direct Groq/NVIDIA OpenAI SDK Streaming over WebSocket (bypasses LangGraph)",
        output: "7 adaptive questions across 3 tiers → Edge-TTS voice → score /100",
      },
      {
        name: "Voice Coach (Anya)",
        engine: "Gemini Live Multimodal API WebSocket (bypasses LangGraph)",
        output: "Real-time bidirectional audio conversation coaching, 24kHz/16kHz full-duplex",
      },
    ],
    llm: {
      primary: "Groq (Llama 3.3 70B) — recommended default, all workflows",
      alternative: "NVIDIA NIM (Llama 3.3 70B-Instruct) — user-selectable",
      fallback: "Google Gemini 2.5 Flash — automatic fallback on provider failure",
      chains: "groq→google, nvidia→google — deterministic fallback engines for malformed outputs",
      circuit_breaker: "Temporarily disables repeated failing providers — 100% system availability",
    },
    rag: {
      primary: "ChromaDB persistent vector store — auto-seeded at startup with 50+ curated resources",
      fallback: "In-memory MockRAG (SequenceMatcher) — activates on Render OOM or DISABLE_CHROMA=true, prevents 512MB RAM crashes",
      deduplication: "Multi-source deduplication pipeline — 65% overlap threshold via SequenceMatcher",
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
    "Gemini Live",
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
    "Sentry",
    "Prometheus",
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
    "pytest (106 tests)",
  ],
  hackathons: [
    {
      name: "Microsoft AI DevDays",
      prizePool: "$480,000",
      requirements: ["LangGraph / Agentic AI", "Deployed MVP", "Public Repo"],
    },
    {
      name: "Amazon Nova AI",
      prizePool: "$495,000 cash/credits",
      requirements: ["Multi-Agent Career Workflow", "Edge-TTS Voice", "Full-stack Deployed MVP"],
    },
  ],
  quickStats: {
    commits: "254+",
    tests: "106 passing pytest",
    agents: "6 (Resume, Market, LinkedIn, Roadmap, Interview, Voice Coach) + 1 Observability Console",
    llmProviders: "3 (Groq, NVIDIA NIM, Gemini)",
    responseTime: "<60s full career analysis",
    buildTime: "5–6 months solo",
    hackathonPrizePool: "$975,000+",
    deployments: "Vercel + Render + Neon + Upstash",
    codeQuality: "Zero circular deps · Pydantic validation · 106 tests · Real-time telemetry · 100% availability",
  },
  githubUrl: "https://github.com/Anil-Pradhan-web/ai-career-mentor",
  liveUrl: "https://ai-career-mentor-anil.vercel.app",
  apiUrl: "https://ai-career-mentor-rrpu.onrender.com/docs",
  type: "Full-Stack · Agentic AI · Production",
  solo: true,
  duration: "5–6 months",
  commits: "254+",
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
