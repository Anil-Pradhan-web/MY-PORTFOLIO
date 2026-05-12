"use client";

import SectionHeading from '../ui/SectionHeading';
import ProjectCard from '../ui/ProjectCard';

const projectsList = [
{
  title: "AI Career Mentor",
  tagline: "5 Specialized AI Agents. One Career Transformation. Under 60 Seconds.",
  description:
    "A production-grade, full-stack career coaching platform powered by a 5-agent Microsoft AutoGen system. Built with a decoupled microservices architecture — Next.js 14 frontend on Vercel, FastAPI backend on Render, Neon Postgres, and Upstash Redis. Features real-time WebSocket mock interviews with Direct GROQ Streaming (sub-2s latency), live DuckDuckGo market intelligence, SHA-256 keyed AI response caching, and a deterministic ATS scoring engine. Dual LLM setup: Gemini 1.5 Flash for reasoning agents with automatic Gemini→GROQ 429 fallback. 110+ commits across 5–6 months of solo development.",
  highlight:
    "5-Agent AutoGen Orchestration · Direct GROQ WebSocket Streaming · Gemini→GROQ Auto-Fallback · Production CI/CD · Google OAuth 2.0",
  stats: [
    { label: "AI Agents", value: "5" },
    { label: "Interview Latency", value: "<2s" },
    { label: "Analysis Time", value: "<60s" },
    { label: "Commits", value: "110+" },
    { label: "Dev Time", value: "5-6 mo" },
    { label: "Hackathon Prize Pool", value: "$175K+" },
  ],
  features: [
    "📄 Resume Analyzer: PDF parsed via pdfplumber, deterministic ATS scoring engine, AI skill-gap detection with structured JSON persisted to Postgres — no S3 needed",
    "🗺️ 8-Week Roadmap Generator: Career Coach agent builds personalized weekly plans enriched with real resource URLs via a custom search enrichment engine and DuckDuckGo tool calling",
    "📈 Live Market Intelligence: Market Researcher agent fetches real-time salary ranges, top hiring companies, and in-demand skills via a live DuckDuckGo pipeline — zero stale mock data",
    "🎤 Streaming Mock Interviews: Bypasses AutoGen entirely — Direct GROQ OpenAI SDK over WebSocket for sub-2s token streaming, 7-question adaptive state machine (FAANG=Hard / Service=Easy), Edge-TTS voice synthesis with 30s timeout guard, crash-resilient _safe_send_json() WebSocket handling",
    "🔗 LinkedIn Profile Reviewer: AutoGen agent with Gemini→GROQ fallback — headline optimization, profile SEO scoring, and recruiter keyword gap analysis",
    "🧠 Full Multi-Agent Analysis: GroupChatManager orchestrates all 4 AutoGen agents in parallel via asyncio.to_thread() — consolidated output in under 60 seconds",
    "🔐 Google OAuth 2.0: One-click login via @react-oauth/google — ID Token verified server-side with google-auth, exchanged for short-lived JWT + long-lived refresh token",
    "🛡️ Rate Limiting + Caching: SlowAPI + Upstash Redis — 100 req/hr, 1000 req/day per user. SHA-256 keyed AI response cache bypasses redundant LLM calls. Rate counters increment only on successful AI responses",
    "📊 Persistent Dashboard: Real-time Skill Radar (Recharts), Day Streaks, Weekly Activity — all backed by Neon Postgres with optimized connection pooling (pool_size=3, pool_recycle=300s, pool_pre_ping=True)",
    "🏗️ CI/CD Pipeline: GitHub Actions — frontend ESLint + Next.js production build checks, backend pytest suite, pip-audit security scanning. Auto-deploy via Vercel (frontend) and Render webhook (backend)",
  ],
  architecture: {
    pattern: "Decoupled Microservices + Multi-Agent Orchestration Layer",
    agents: [
      { name: "Resume Analyst", engine: "AutoGen + Gemini/GROQ", output: "ATS score, skill gaps, strengths" },
      { name: "Market Researcher", engine: "AutoGen + Gemini/GROQ + DuckDuckGo", output: "Live salary ranges, top companies, in-demand skills" },
      { name: "Career Coach", engine: "AutoGen + Gemini/GROQ + DuckDuckGo", output: "8-week roadmap with real resource URLs" },
      { name: "LinkedIn Reviewer", engine: "AutoGen + Gemini/GROQ", output: "Headline suggestions, profile score, keywords" },
      { name: "Mock Interviewer", engine: "Direct GROQ Streaming (no AutoGen)", output: "7 adaptive questions → voice → score /100" },
    ],
    llm: {
      primary: "Google Gemini 1.5 Flash — all analysis agents",
      streaming: "Groq Llama 3.3 70B — all interviews + 429 fallback for all agents",
    },
  },
  stack: [
    "Next.js 14",
    "TypeScript",
    "FastAPI",
    "Python 3.11",
    "Microsoft AutoGen v0.2",
    "Google Gemini 1.5 Flash",
    "Groq (Llama 3.3 70B)",
    "Neon Postgres",
    "Upstash Redis",
    "SQLAlchemy + Alembic",
    "WebSocket",
    "Edge-TTS",
    "Docker",
    "GitHub Actions",
    "Vercel",
    "Render.com",
  ],
  hackathons: [
    {
      name: "Microsoft AI DevDays",
      prizePool: "$80,000+",
      requirements: ["Microsoft AutoGen", "Deployed MVP", "Public Repo"],
    },
    {
      name: "Amazon Nova AI",
      prizePool: "$40,000 cash + $55,000 AWS Credits",
      requirements: ["5 AutoGen Agents", "Edge-TTS Voice", "Full-stack Deployed MVP"],
    },
  ],
  githubUrl: "https://github.com/Anil-Pradhan-web/ai-career-mentor",
  liveUrl: "https://ai-career-mentor-anil.vercel.app",
  apiUrl: "https://ai-career-mentor-rrpu.onrender.com/docs",
  type: "Full-Stack · Agentic AI · Production",
  solo: true,
  duration: "5–6 months",
  commits: "110+",
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
