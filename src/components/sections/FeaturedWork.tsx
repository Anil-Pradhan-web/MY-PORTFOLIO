'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ChevronDown, ChevronUp, Layers, Zap, Shield, ArrowUpRight } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { Badge } from '@/components/ui/Badge';

const projects = [
  {
    id: 'verivision-ai',
    title: 'VeriVision AI',
    tagline: 'Agent Developer · Team IdeaForg-E · Aug 2026 – Present',
    description:
      'Built an end-to-end Agentic AI platform for hardware parts fraud detection using a 5-agent LangGraph pipeline with computer vision, replacing manual visual inspection with deterministic, explainable verdicts.',
    challenge:
      'Manual inspection of hardware parts for counterfeiting takes 4+ hours per pallet and is inconsistent across sites. Inspectors miss subtle fraud like single-character serial number alterations (0→O) or non-OEM label hue shifts.',
    solution:
      'Designed a 5-agent LangGraph state machine that orchestrates CLIP-based golden reference matching, image quality gating with ORB homography, and a 6-method parallel anomaly ensemble. Built a Noisy-OR multi-angle fusion engine to produce deterministic fraud verdicts with audit-ready PDF reports.',
    architecture: {
      layers: [
        { name: 'Frontend', tech: 'React + Vite + Tailwind CSS', icon: '🌐' },
        { name: 'API Gateway', tech: 'FastAPI (REST)', icon: '⚡' },
        { name: 'Orchestration', tech: 'LangGraph StateGraph (5 agents)', icon: '🧠' },
        { name: 'Vision Engine', tech: 'OpenCV + CLIP ViT-B/32 + EasyOCR', icon: '👁️' },
        { name: 'AI Providers', tech: 'NVIDIA NIM (Vision + Text LLM)', icon: '🤖' },
        { name: 'Data Layer', tech: 'SQLite + File System', icon: '💾' },
      ],
    },
    metrics: [
      { label: 'Agents', value: '5', detail: 'LangGraph pipeline' },
      { label: 'Detection', value: '6', detail: 'parallel methods' },
      { label: 'Speed', value: '3-5s', detail: 'per part (vs 4+ hrs)' },
      { label: 'Hackathon', value: 'Dell', detail: 'Grand Final 2026' },
    ],
    features: [
      'Agentic Workflow Development — Designed and implemented the 5-agent LangGraph workflow to automate reference selection, image triage, fraud inspection, decision-making, and explanation.',
      'Vision Agent Integration — Integrated CLIP, OpenCV, SSIM, EasyOCR, and Vision LLMs into the inspection agent for detecting visual, structural, and text-based anomalies.',
      'Decision & Evidence Engine — Built the risk scoring and multi-angle fusion logic to combine evidence from multiple detection methods into a final fraud verdict.',
      'Explainable AI & Human Review — Implemented LLM-based explanations, audit reports, and Human-in-the-Loop review, making detection results easier to verify and audit.',
    ],
    stack: ['FastAPI', 'LangGraph', 'OpenCV', 'CLIP ViT-B/32', 'EasyOCR', 'PyTorch', 'NVIDIA NIM'],
    githubUrl: 'https://github.com/IdeaForg-e/VeriVision-AI',
    liveUrl: '',
  },
  {
    id: 'ai-career-mentor',
    title: 'AI Career Mentor',
    tagline: 'Solo Full Stack Developer · Mar 2026 – Jul 2026',
    description:
      'Engineered a multi-agent AI system containing specialized agents (Resume Auditor, Market Scraper, Roadmap Generator, and LinkedIn Optimizer) built to simplify and streamline developer career transitions.',
    challenge:
      'Developer career transitions are fragmented across dozens of disconnected tools — resume builders, job boards, interview prep platforms — with no unified intelligence layer to orchestrate the process.',
    solution:
      'Created a robust FastAPI and SQL database backend to manage user profiles and logs, and integrated a RAG system using ChromaDB to retrieve study links matching candidate skill gaps. Leveraged advanced AI agents to build a production-grade startup MVP containing parallel multi-agent workflows, WebSocket mock interviews, Monaco editor sandboxing, multi-LLM failovers, and Docker deployment.',
    architecture: {
      layers: [
        { name: 'Frontend', tech: 'Next.js + TypeScript', icon: '🌐' },
        { name: 'API Gateway', tech: 'FastAPI + WebSocket', icon: '⚡' },
        { name: 'Orchestration', tech: 'LangGraph DAG (4 agents)', icon: '🧠' },
        { name: 'AI Providers', tech: 'Groq / NVIDIA NIM / Cerebras', icon: '🤖' },
        { name: 'Data Layer', tech: 'PostgreSQL + Redis + ChromaDB', icon: '💾' },
      ],
    },
    metrics: [
      { label: 'Latency', value: '~60%', detail: 'reduction (4 min → 60 sec)' },
      { label: 'AI Agents', value: '4', detail: 'concurrent (DAG)' },
      { label: 'Tests', value: '113', detail: 'automated' },
      { label: 'Providers', value: '3', detail: 'with failover' },
    ],
    features: [
      'Multi-Agent Architecture — Designed and built the LangGraph multi-agent architecture connecting resume analysis, market intelligence, roadmap generation, and LinkedIn optimization.',
      'Real-Time Interview Engine — Built a 7-phase technical interview FSM with WebSockets, Monaco Code Editor, role-based difficulty, and real-time AI feedback.',
      'LLM Orchestration & Reliability — Implemented multi-provider LLM routing and failover across Groq, Gemini, and NVIDIA NIM with fallback handling and parallel execution.',
      'RAG & Personalized AI — Developed ChromaDB-based RAG pipelines to generate personalized career roadmaps using candidate skill gaps and learning resources.',
      'Backend & Data Infrastructure — Built the FastAPI backend with REST/SSE/WebSocket APIs, Pydantic validation, PostgreSQL, Redis caching, JWT authentication, and rate limiting.',
      'Production Engineering — Set up Docker, GitHub Actions CI/CD, automated testing (113 Pytest tests), monitoring with Prometheus/Sentry, and cloud deployment across Vercel, Render, Neon, and Upstash.',
    ],
    stack: ['FastAPI', 'LangGraph', 'Next.js', 'ChromaDB', 'Redis', 'Docker', 'ONNX'],
    githubUrl: 'https://github.com/Anil-Pradhan-web/ai-career-mentor',
    liveUrl: 'https://ai-career-mentor-anil.vercel.app',
  },
  {
    id: 'taskpilot-ai',
    title: 'TaskPilot AI',
    tagline: 'Integration Lead · Team IdeaForg-E · Jun 2026 – Jul 2026',
    description:
      'Built an AI-powered task management system using 8 specialized agents to manage and prioritize software engineering tasks. Integrated data from 5 sources — GitHub, Slack, Email, Calendar, and Meeting transcripts — into one platform.',
    challenge:
      'Engineers lose hours daily switching between GitHub, Slack, Email, Calendar, and meeting notes. Critical action items — especially ones buried in unstructured emails and Slack threads — fall through the cracks across these disconnected tools.',
    solution:
      'Developed a 7-factor priority system to rank tasks based on severity, deadline proximity, customer/business impact, and blocker status. Added an AI chat copilot that can detect P1 issues from natural language and autonomously re-run the full pipeline to update priorities and the daily schedule in real time.',
    architecture: {
      layers: [
        { name: 'Frontend', tech: 'React + Vite + Tailwind CSS', icon: '🌐' },
        { name: 'API Layer', tech: 'FastAPI (REST, polling-based live updates)', icon: '⚡' },
        { name: 'Agents', tech: 'Custom multi-agent orchestrator (8 agents, ThreadPoolExecutor for parallel LLM calls)', icon: '🧠' },
        { name: 'Integrations', tech: 'GitHub / Slack / Email / Calendar / Meeting notes', icon: '🔌' },
        { name: 'Data Layer', tech: 'SQLite (SQLAlchemy)', icon: '💾' },
      ],
    },
    metrics: [
      { label: 'Agents', value: '8', detail: 'specialized' },
      { label: 'Sources', value: '5', detail: 'integrated' },
      { label: 'Priority Factors', value: '7', detail: 'factor weighted system' },
      { label: 'P1 Detection', value: 'Auto', detail: 're-run pipeline' },
    ],
    features: [
      'Orchestrator Development — Built the Agent 0 Orchestrator in Python to control the complete multi-agent workflow, manage execution state, and handle failed/stale runs.',
      'End-to-End Agent Integration — Connected the Ingestion → Extraction → Fusion → Quality → Prioritization → Planning stages into one working pipeline using FastAPI, SQLAlchemy, SQLite, and shared agent context.',
      'LLM Integration & Reliability — Integrated Groq and NVIDIA NIM through a multi-provider LLM client with parallel processing, token optimization, failover, and deterministic fallback logic.',
      'Deployment & System Integration — Integrated the React + FastAPI application, configured Render deployment and GitHub auto-deployment, and prepared the complete system for end-to-end demo and testing.',
    ],
    stack: ['FastAPI', 'React', 'SQLite', 'Groq/NVIDIA NIM'],
    githubUrl: 'https://github.com/IdeaForg-e/TaskPilot-AI',
    liveUrl: 'https://taskpilot-ai-app.onrender.com/',
  },
];

function ArchitectureDiagram({ layers }: { layers: { name: string; tech: string; icon: string }[] }) {
  return (
    <div className="relative">
      {layers.map((layer, idx) => (
        <div key={idx} className="flex items-stretch gap-0">
          {/* Connector line */}
          <div className="flex flex-col items-center w-8">
            <div className="w-8 h-8 rounded-full bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-sm shrink-0 z-10">
              {layer.icon}
            </div>
            {idx < layers.length - 1 && (
              <div className="w-px flex-1 bg-gradient-to-b from-teal-500/30 to-teal-500/5" />
            )}
          </div>
          {/* Content */}
          <div className={`flex-1 py-2 ${idx < layers.length - 1 ? 'pb-4' : ''}`}>
            <span className="font-mono text-xs text-teal-400 uppercase tracking-wider block">
              {layer.name}
            </span>
            <span className="font-body text-sm text-text-secondary">
              {layer.tech}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

function MetricCard({ metric, index }: { metric: { label: string; value: string; detail: string }; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      className="relative group"
    >
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-teal-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative p-4 rounded-xl bg-bg-primary/50 border border-border-primary group-hover:border-teal-500/30 transition-colors">
        <span className="font-mono text-[10px] text-text-muted uppercase tracking-widest block mb-2">
          {metric.label}
        </span>
        <div className="flex items-baseline gap-2">
          <span className="font-display text-3xl font-bold gradient-text">
            {metric.value}
          </span>
        </div>
        <span className="font-body text-xs text-text-muted mt-1 block">
          {metric.detail}
        </span>
      </div>
    </motion.div>
  );
}

export default function FeaturedWork() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section id="featured-work" className="section-padding w-full" aria-labelledby="featured-work-heading">
      <div className="container-custom">
        <SectionHeading
          id="featured-work-heading"
          title="Technical Projects"
          subtitle="Production-grade systems I've designed and built from the ground up."
        />

        <div className="flex flex-col gap-10">
          {projects.map((project, idx) => {
            const isExpanded = expandedId === project.id;
            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.7, delay: idx * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="group relative"
              >
                {/* Outer glow on hover */}
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-teal-500/20 via-transparent to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="relative rounded-2xl border border-border-primary bg-bg-card group-hover:border-teal-500/20 transition-all duration-500 overflow-hidden">
                  {/* Top accent bar */}
                  <div className="h-px w-full bg-gradient-to-r from-transparent via-teal-500/40 to-transparent" />

                  <div className="p-6 md:p-8 lg:p-10">
                    {/* Header row */}
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-8">
                      <div className="flex-1 min-w-0">
                        {/* Project number + title */}
                        <div className="flex items-center gap-4 mb-3">
                          <span className="shrink-0 font-display text-sm font-bold text-teal-500/50 bg-teal-500/10 px-2.5 py-1 rounded-md border border-teal-500/20">
                            {String(idx + 1).padStart(2, '0')}
                          </span>
                          <h3 className="heading-3 font-display text-text-primary">
                            {project.title}
                          </h3>
                        </div>

                        {/* Tagline */}
                        <p className="font-mono text-xs text-teal-400/70 tracking-wider mb-4 ml-[3.75rem]">
                          {project.tagline}
                        </p>

                        {/* Description */}
                        <p className="body text-text-secondary max-w-3xl ml-[3.75rem]">
                          {project.description}
                        </p>
                      </div>

                      {/* Quick metrics strip */}
                      <div className="flex gap-3 lg:flex-col lg:w-[200px] shrink-0">
                        {project.metrics.slice(0, 2).map((metric, mIdx) => (
                          <div
                            key={mIdx}
                            className="flex-1 lg:flex-none p-3 rounded-xl bg-bg-primary/50 border border-border-primary text-center"
                          >
                            <span className="font-display text-2xl font-bold gradient-text block">
                              {metric.value}
                            </span>
                            <span className="font-mono text-[10px] text-text-muted uppercase tracking-widest">
                              {metric.label}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Stack badges */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.stack.map((tech) => (
                        <Badge key={tech} variant="subtle" size="sm">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {/* Action bar */}
                    <div className="flex items-center gap-1 flex-wrap">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 text-sm font-medium text-text-secondary hover:text-teal-400 transition-colors font-mono px-3 py-2 rounded-lg hover:bg-teal-500/5"
                      >
                        GitHub
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-2 text-sm font-medium text-teal-400 hover:text-teal-300 transition-colors font-mono px-3 py-2 rounded-lg hover:bg-teal-500/5"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          Live Demo
                        </a>
                      )}
                      <button
                        suppressHydrationWarning
                        onClick={() => setExpandedId(isExpanded ? null : project.id)}
                        className="ml-auto flex items-center gap-2 text-sm font-medium text-text-secondary hover:text-teal-400 transition-colors font-mono px-4 py-2 rounded-lg border border-border-primary hover:border-teal-500/30 hover:bg-teal-500/5 focus-ring"
                        aria-expanded={isExpanded}
                        aria-controls={`project-details-${project.id}`}
                      >
                        {isExpanded ? 'Collapse' : 'View Details'}
                        <motion.span
                          animate={{ rotate: isExpanded ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDown className="w-4 h-4" />
                        </motion.span>
                      </button>
                    </div>

                    {/* Expanded Details */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          id={`project-details-${project.id}`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="pt-8 mt-8 border-t border-border-primary">
                            {/* Challenge + Solution + Architecture */}
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
                              {/* Challenge */}
                              <div className="space-y-3">
                                <div className="flex items-center gap-2">
                                  <div className="w-7 h-7 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                                    <Zap className="w-3.5 h-3.5 text-red-400" />
                                  </div>
                                  <h4 className="font-mono text-xs font-bold text-text-muted uppercase tracking-widest">
                                    Challenge
                                  </h4>
                                </div>
                                <p className="body-sm text-text-secondary leading-relaxed">
                                  {project.challenge}
                                </p>
                              </div>

                              {/* Solution */}
                              <div className="space-y-3">
                                <div className="flex items-center gap-2">
                                  <div className="w-7 h-7 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center">
                                    <Shield className="w-3.5 h-3.5 text-teal-400" />
                                  </div>
                                  <h4 className="font-mono text-xs font-bold text-text-muted uppercase tracking-widest">
                                    Solution
                                  </h4>
                                </div>
                                <p className="body-sm text-text-secondary leading-relaxed">
                                  {project.solution}
                                </p>
                              </div>

                              {/* Architecture */}
                              <div className="space-y-3">
                                <div className="flex items-center gap-2">
                                  <div className="w-7 h-7 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                                    <Layers className="w-3.5 h-3.5 text-blue-400" />
                                  </div>
                                  <h4 className="font-mono text-xs font-bold text-text-muted uppercase tracking-widest">
                                    Architecture
                                  </h4>
                                </div>
                                <ArchitectureDiagram layers={project.architecture.layers} />
                              </div>
                            </div>

                            {/* All Metrics */}
                            <div className="mb-10">
                              <h4 className="font-mono text-xs font-bold text-text-muted uppercase tracking-widest mb-5">
                                Key Metrics
                              </h4>
                              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {project.metrics.map((metric, mIdx) => (
                                  <MetricCard key={mIdx} metric={metric} index={mIdx} />
                                ))}
                              </div>
                            </div>

                            {/* All Features */}
                            <div>
                              <h4 className="font-mono text-xs font-bold text-text-muted uppercase tracking-widest mb-5">
                                Key Contributions
                              </h4>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {project.features.map((feature, fIdx) => (
                                  <motion.div
                                    key={fIdx}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: fIdx * 0.05 }}
                                    className="flex items-start gap-3 p-3 rounded-lg bg-bg-primary/30 border border-border-primary/50 hover:border-teal-500/20 transition-colors"
                                  >
                                    <span className="text-teal-400 mt-0.5 flex-shrink-0 font-mono text-xs font-bold">
                                      {String(fIdx + 1).padStart(2, '0')}
                                    </span>
                                    <span className="text-text-secondary body-sm leading-relaxed">
                                      {feature}
                                    </span>
                                  </motion.div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
