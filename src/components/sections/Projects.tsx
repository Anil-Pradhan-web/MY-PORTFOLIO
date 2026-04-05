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
