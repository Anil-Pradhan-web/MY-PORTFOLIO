"use client";

import SectionHeading from '../ui/SectionHeading';
import ProjectCard from '../ui/ProjectCard';

const projectsList = [
  {
    title: "AI Career Mentor",
    tagline: "🌟 Your Personal AI Career Coach — 5 Intelligent Agents Working 24/7",
    description: "Production-grade, agentic career coaching platform that uses a 5-agent system to deliver personalized career acceleration plans in under 60 seconds. Features a decoupled microservices architecture with a dedicated Multi-Agent Orchestration layer and real-time WebSocket communication.",
    highlight: "5-Agent AutoGen Engine · Production-Ready CI/CD · Google OAuth 2.0",
    features: [
      "📄 Resume Analysis: Score sections, calculate ATS score, and flag skill gaps using pdfplumber",
      "🗺️ Personalized Roadmaps: Generates 8-week learning plans with resources and tracking",
      "📈 Market Intelligence: Real-time salary ranges and hiring trends via DuckDuckGo tool calling",
      "🎤 AI Mock Interviews: Live voice-interviews via WebSocket + edge-tts for natural feedback",
      "🔐 Security: Google OAuth 2.0 login with JWT auth and Upstash Redis rate limiting (SlowAPI)",
      "🏗️ DevOps: Full CI/CD pipeline with GitHub Actions, testing suite, and security audits"
    ],
    stack: ["Next.js 14", "FastAPI", "AutoGen", "Python", "Google Gemini", "Groq", "Neon Postgres", "Upstash Redis"],
    githubUrl: "https://github.com/Anil-Pradhan-web/ai-career-mentor",
    liveUrl: "https://ai-career-mentor-anil.vercel.app"
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
  {
    title: "City-Bus Live",
    tagline: "Real-time city bus tracking with 3D maps, smart trip planning & dynamic fare engine",
    description: "Comprehensive full-stack transit platform delivering live bus positions on an interactive Mapbox 3D map with smooth interpolation, intelligent one-hop trip routing, and geographically accurate distance-based fare calculations at ₹5/KM — built on a Django REST backend with JWT auth.",
    highlight: "Live GPS Interpolation · Haversine Fare Engine · Smart One-Hop Trip Planner",
    features: [
      "Real-time bus position updates on interactive 3D Mapbox GL map with smooth interpolation",
      "Smart Trip Planner: finds direct routes or optimal one-hop transfers between any two stops",
      "Distance-based fare engine using Haversine formula (₹5/KM, calculated geographically)",
      "Live metrics: bus speed, crowding status, and accurate ETAs for upcoming stops",
      "JWT-based secure authentication system",
      "Full Django Admin panel for managing buses, routes, and stop data"
    ],
    stack: ["React 18", "Vite", "Mapbox GL", "Django 4.2", "DRF", "SimpleJWT", "SQLite3", "Python"],
    githubUrl: "https://github.com/Anil-Pradhan-web",
    liveUrl: "desktop"
  },
  {
    title: "FreshCart — Grocery Delivery App",
    tagline: "Full-stack grocery delivery platform with Razorpay payments & real-time cart management",
    description: "Production-grade grocery delivery application with a Django REST Framework backend and a React/Vite frontend. Features a rich product catalog across 6 categories (32+ items), full shopping cart lifecycle, order management, Razorpay payment integration, and a Swagger-documented API.",
    highlight: "Razorpay Payments · 32+ Products · Swagger API Docs · Zustand State",
    features: [
      "JWT authentication with register/login and user profile management",
      "Product catalog: 32+ items across 6 categories with category filtering and search",
      "Full cart lifecycle: add, update quantity, remove, and proceed to checkout",
      "Razorpay payment integration with order history and status tracking",
      "Zustand state management + Framer Motion animations for premium UX",
      "Django Admin panel + Swagger API documentation at /api/docs"
    ],
    stack: ["React 18", "Vite", "Zustand", "Framer Motion", "Django 4.2", "DRF", "SimpleJWT", "Razorpay", "SQLite3"],
    githubUrl: "https://github.com/Anil-Pradhan-web",
    liveUrl: "desktop"
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 w-full max-w-7xl mx-auto px-6 sm:px-12 md:px-24">
      <SectionHeading>Things I've Built</SectionHeading>

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
