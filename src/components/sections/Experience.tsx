"use client";

import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase, ChevronRight, Award } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

const experiences = [
  {
    role: "College Ambassador",
    org: "Techfest, IIT Bombay",
    period: "Jun 2026 – Present",
    location: "Mumbai, India (Remote)",
    type: "Leadership & Outreach",
    bullets: [
      "Represented Techfest IIT Bombay, Asia's largest science and technology festival, by leading campus outreach and technical engagement initiatives to promote workshops, events, and competitions.",
      "Conducted competitor analysis, sponsorship research, and partnership mapping, compiling comprehensive business development and event collaboration reports.",
      "Designed and developed landing pages and creative digital assets supporting national-level promotional campaigns.",
      "Collaborated with technical clubs and student organizations to execute offline/online event management and marketing strategies.",
      "Delivered data-driven strategic outlines and campaign decks using AI-powered research and presentation tools."
    ],
    skills: ["Outreach", "Market Research", "Landing Page Dev", "Sponsorships", "Strategic Communication", "AI Tools"],
    metrics: [
      { label: "Reach", value: "5,000+ Students" },
      { label: "Festival Scale", value: "Asia's Largest" },
    ]
  },
  {
    role: "Solo Full-Stack Developer",
    org: "AI Career Mentor – Multi-Agent AI Platform",
    period: "Feb – June 2026",
    location: "Personal Commercial App",
    type: "Production-Grade AI System",
    bullets: [
      "Architected a production-grade multi-agent AI platform using LangGraph, orchestrating 7 specialized AI workflows for resume intelligence, career planning, interview prep, voice coaching, and market analysis.",
      "Designed a parallel DAG orchestration pipeline executing independent AI agents concurrently, reducing end-to-end latency by ~60% (down to <60s) via SSE status streaming.",
      "Implemented a hybrid Retrieval-Augmented Generation (RAG) pipeline combining ChromaDB vector search with an in-memory SequenceMatcher fallback to prevent Render container OOM crashes.",
      "Developed a real-time full-duplex Hinglish Voice Coach using Gemini Live WebSocket API and a 7-phase FSM Mock Interview engine with a Monaco Editor sandbox and Edge-TTS audio synthesis.",
      "Built secure Google OAuth 2.0 auth, JWT refresh token rotation, SlowAPI rate-limiting, and a whitelisted Admin Observation & Telemetry Console tracking active connections.",
      "Engineered CI/CD pipeline via GitHub Actions executing frontend builds, backend Pytest (116 unit tests), automated pip-audit scans, and GHCR Docker container deployments."
    ],
    skills: ["LangGraph", "FastAPI", "Next.js 14", "WebSockets", "ChromaDB", "Upstash Redis", "Neon Postgres", "Docker", "Pytest"],
    metrics: [
      { label: "Orchestration", value: "7 AI Agents" },
      { label: "Tests", value: "116 passing" },
      { label: "Latency", value: "~60% reduction" }
    ]
  },
  {
    role: "Lead Backend Developer",
    org: "VolunteerIQ – Google Solution Challenge 2026",
    period: "Mar – Apr 2026",
    location: "Team ClutchCode (Submission)",
    type: "Geospatial Crisis-Response Platform",
    bullets: [
      "Co-created an AI-driven crisis-response coordination platform for NGOs, mapping field survey uploads directly to a Geospatial Mapbox GL dashboard.",
      "Engineered backend matching algorithms using Gemini 1.5 Pro to analyze field data and rank volunteers based on skills, availability, and proximity scores (0–100 scale).",
      "Built secure FastAPI REST endpoints and Firestore integrations with server-side verified Firebase Google Authentication."
    ],
    skills: ["FastAPI", "Gemini 1.5 Pro", "Firebase Auth", "Firestore", "Next.js 14", "Mapbox GL", "Google Cloud"],
    metrics: [
      { label: "Campaign", value: "GSC 2026" },
      { label: "Matching", value: "Geospatial AI" },
      { label: "Team", value: "ClutchCode" }
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-28 w-full max-w-7xl mx-auto px-6 sm:px-12 md:px-24 relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-violet-600/10 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-cyan-600/10 rounded-full blur-3xl -z-10 pointer-events-none" />

      <SectionHeading>Experience & Initiatives</SectionHeading>

      <div className="mt-16 ml-2 md:ml-8 relative border-l-2 border-dashed border-zinc-800">
        {/* Decorative top pulse */}
        <div className="absolute -top-1 -left-[5px] w-2.5 h-2.5 bg-violet-500 rounded-full animate-ping" />

        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            className="mb-20 last:mb-0 relative pl-6 sm:pl-10 group"
          >
            {/* Timeline Indicator */}
            <span className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-zinc-900 border-2 border-zinc-700 group-hover:border-violet-400 group-hover:shadow-[0_0_12px_rgba(167,139,250,0.8)] transition-all duration-300 z-10 flex items-center justify-center">
              <span className="h-1.5 w-1.5 rounded-full bg-zinc-700 group-hover:bg-violet-400 transition-all duration-300" />
            </span>

            {/* Experience Card */}
            <div className="relative bg-zinc-950/40 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-zinc-900/80 group-hover:border-violet-500/30 group-hover:bg-zinc-900/30 transition-all duration-300 hover:shadow-[0_4px_30px_rgba(139,92,246,0.05)]">
              {/* Card Glow Border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-violet-500/5 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              {/* Title & Metadata Header */}
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-white font-syne group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-violet-400 group-hover:to-cyan-400 transition-all duration-300">
                    {exp.role}
                  </h3>
                  <h4 className="text-lg font-bold text-zinc-300 mt-1 flex items-center gap-2">
                    {exp.org}
                  </h4>
                </div>

                {/* Badges Column */}
                <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-2 sm:items-center lg:items-end xl:items-center text-xs text-zinc-400 font-mono">
                  <div className="flex items-center gap-1.5 bg-zinc-900/80 px-3 py-1.5 rounded-md border border-zinc-800/80">
                    <Calendar size={13} className="text-violet-400" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-zinc-900/80 px-3 py-1.5 rounded-md border border-zinc-800/80">
                    <MapPin size={13} className="text-cyan-400" />
                    <span>{exp.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-zinc-900/80 px-3 py-1.5 rounded-md border border-zinc-800/80">
                    <Briefcase size={13} className="text-violet-400" />
                    <span>{exp.type}</span>
                  </div>
                </div>
              </div>

              {/* Quick Metrics Grid */}
              <div className="flex flex-wrap gap-3 mb-6 bg-zinc-950/60 p-4 rounded-xl border border-zinc-900/80">
                <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 uppercase tracking-widest mr-2">
                  <Award size={14} className="text-violet-400" /> Key Metrics:
                </div>
                {exp.metrics.map((metric, mIdx) => (
                  <div
                    key={mIdx}
                    className="flex items-center gap-2 px-3 py-1 bg-violet-950/20 hover:bg-violet-900/20 text-violet-300 text-xs font-mono font-medium rounded-lg border border-violet-500/20 transition-colors"
                  >
                    <span className="opacity-60">{metric.label}:</span>
                    <span className="font-bold text-violet-200">{metric.value}</span>
                  </div>
                ))}
              </div>

              {/* Bullet Points */}
              <ul className="space-y-3.5 mb-6 text-zinc-400 text-sm md:text-[15px] leading-relaxed">
                {exp.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-2.5">
                    <ChevronRight size={16} className="text-cyan-400 mt-1 flex-shrink-0 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-zinc-900/80">
                {exp.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="text-xs font-mono bg-zinc-900/60 text-zinc-300 px-3 py-1 rounded-md border border-zinc-800/60 group-hover:border-zinc-700/40 group-hover:text-white transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
