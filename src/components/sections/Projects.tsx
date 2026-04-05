"use client";

import SectionHeading from '../ui/SectionHeading';
import ProjectCard from '../ui/ProjectCard';

const projectsList = [
  {
    title: "AI Career Mentor",
    tagline: "Your personal AI career coach — available 24/7",
    description: "Production-grade multi-agent AI platform that analyzes resumes, generates personalized learning roadmaps, fetches live job market data, and conducts mock interviews — all in under 60 seconds. Built solo for two major hackathons.",
    highlight: "4-agent AutoGen system · Multi-hackathon submission",
    features: [
      "Resume PDF analysis with ATS scoring",
      "Real-time market intelligence via DuckDuckGo Search",
      "Live mock interview with WebSocket streaming",
      "Voice interview via Amazon Nova 2 Sonic",
      "Multi-provider AI: Groq / Azure OpenAI / Amazon Bedrock (switchable via .env)",
      "Submitted to: Microsoft AI Dev Days + Amazon Nova AI hackathons"
    ],
    stack: ["Next.js", "FastAPI", "Python", "AutoGen", "Groq", "Bedrock", "Azure", "PostgreSQL"],
    githubUrl: "https://github.com/Anil-Pradhan/ai-career-mentor",
    liveUrl: "https://ai-career-mentor-anil.vercel.app"
  },
  {
    title: "VolunteerIQ",
    tagline: "AI-Powered Humanitarian Intelligence for NGOs · Google Solution Challenge 2026",
    description: "End-to-end AI coordination platform that transforms how NGOs respond to community crises. Upload raw field surveys → Gemini 1.5 Pro extracts urgent problems → auto-generates actionable tasks → matches the right volunteers with the right skills to the right locations — all within minutes, not days.",
    highlight: "Google Solution Challenge 2026 · Team ClutchCode · Live Ops Map + AI Chat",
    features: [
      "AI Survey Analysis: Upload CSV/PDF/DOCX — Gemini extracts top 3 urgent problems with urgency scores",
      "Auto Task Generation: Each survey auto-produces 3 ready-to-launch field tasks with skill tags",
      "Smart Volunteer Matching: AI ranks volunteers by skill match, proximity & availability (0–100 score)",
      "Live Operations Map: Mapbox-powered geospatial map with colored task pins and geocoding cache",
      "Floating AI Chat Widget: Plain-English Q&A pulled from live NGO database context",
      "Dual AI Provider: Gemini 1.5 Pro (primary) + Groq Llama 3 (fallback) with rate-limit-aware switching"
    ],
    stack: ["Next.js 14", "FastAPI", "Gemini 1.5 Pro", "Groq", "Firebase Auth", "Mapbox GL", "SQLAlchemy", "Python"],
    githubUrl: "https://github.com/Anil-Pradhan-web/SPORTLEX-AI",
    liveUrl: "desktop"
  },
  {
    title: "S.I.A — Super Intelligent Assistant",
    tagline: "The Ultimate Frontier of Autonomous Multi-Agent Swarm Intelligence.",
    description: "A Cognitive Orchestration Platform bridging human intuition and machine execution. Powered by a specialized Swarm Architecture with three distinct neural nodes, handling everything from deep conversational memory to hardware-level system automation.",
    highlight: "Neural Agent Swarm · Zero-Latency WebSockets · System Execution Kernel",
    features: [
      "Deep Conversation Node: Groq Llama 3.3 70B + Gemini 2.0 routing with zero-latency Edge-TTS",
      "Autonomous Coding Node: Direct VS Code interfacing for real-time refactoring & DSA solving",
      "System Execution Node: Native OS manipulation and Selenium-driven browser automation",
      "Temporal Memory Engine: Persistent SQLite vector-based recall for long-term user context"
    ],
    stack: ["Next.js 15", "FastAPI", "Groq 70B", "Gemini 2.0", "WebSockets", "Selenium", "Edge-TTS"],
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
