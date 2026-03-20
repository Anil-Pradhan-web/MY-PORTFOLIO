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
    title: "S.I.A — Super Intelligent Assistant",
    tagline: "Voice-activated AI assistant capable of automation and local device control.",
    description: "A fully functional AI assistant built with FastAPI and React. Uses a Groq Llama 3.3 70B model with a Gemini 2.0 Flash fallback to execute desktop automation, browse responsibly dynamically, and write code automatically inside VS Code via Voice.",
    highlight: "Arc Reactor Cyberpunk UI · System Automation · Edge-TTS Voice",
    features: [
      "Voice Recognition: Wake word detection with smart intent",
      "Social Automation: Auto-scrolls YouTube/Instagram with Smart Duration",
      "IDE Coding Agent: Auto-types code inside VS Code with language detection",
      "DSA Expert: Solves LeetCode/GFG problems with complete context"
    ],
    stack: ["FastAPI", "React", "Groq Llama 3", "Gemini 2.0", "Selenium", "Edge-TTS", "SQLite"],
    githubUrl: "https://github.com/Anil-Pradhan-web",
    liveUrl: "desktop"
  },
  {
    title: "City-Bus Live",
    tagline: "Real-time bus tracking, smart trip planner, and distance-based fares.",
    description: "Comprehensive full-stack monorepo designed to provide real-time bus tracking and smart routing for city commuters. Provides live updates on an interactive 3D map with geographic fare scaling logic powered by Haversine equations.",
    highlight: "Live 3D Map Tracking · Haversine Fare Logic · Django API",
    features: [
      "Real-Time Tracking: Live position updates with smooth map interpolation",
      "Smart Trip Planner: Intelligent routing solving direct paths or 1-hop transfers",
      "Dynamic Fares: Accurate distance calculations scaling ₹5/KM via backend",
      "Live Metrics: Bus speed, crowding status, and accurate upcoming stop ETAs"
    ],
    stack: ["React 18", "Django 4.2+", "Vite", "Mapbox GL", "SQLite3", "JWT"],
    githubUrl: "https://github.com/Anil-Pradhan-web",
  }
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
