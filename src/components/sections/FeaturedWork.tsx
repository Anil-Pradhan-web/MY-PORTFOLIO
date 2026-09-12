'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Zap, Shield, ArrowUpRight, Terminal, Globe, Workflow, Eye, Bot, BrainCircuit, Database, Share2, Radio, Cpu } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import SectionHeading from '@/components/ui/SectionHeading';

const projects = [
  {
    id: 'visionforge-ai',
    title: 'VisionForge AI',
    tagline: 'AI / Backend Developer · Team IdeaForg-E · Aug 2026 – Present',
    description:
      'Built an AI-powered hardware inspection platform to detect counterfeit, tampered, and defective parts through an explainable 8-stage inspection pipeline combining computer vision, multi-agent AI, and evidence-based reasoning.',
    challenge:
      'Manual hardware inspection is slow and inconsistent, making it difficult to detect subtle issues such as altered labels, missing components, tampered images, and counterfeit parts.',
    solution:
      'Built an automated inspection pipeline that validates images, finds the correct golden reference, routes relevant regions to specialized AI agents, combines their evidence, and produces an explainable final verdict.',
    architecture: {
      layers: [
        { name: 'API Gateway', tech: 'FastAPI (REST Endpoints)', stage: '01', icon: Globe, color: '#009688' },
        { name: 'Orchestration', tech: 'LangGraph (8-stage inspection pipeline)', stage: '02', icon: Workflow, color: '#34D399' },
        { name: 'Computer Vision', tech: 'OpenCV · CLIP · FAISS · YOLO11n', stage: '03', icon: Eye, color: '#38BDF8' },
        { name: 'Inspection Agents', tech: 'PaddleOCR · EasyOCR · Vision LLMs', stage: '04', icon: Bot, color: '#818CF8' },
        { name: 'Evidence & Reasoning', tech: 'Groq · Google Gemini (AI Judge)', stage: '05', icon: BrainCircuit, color: '#F59E0B' },
        { name: 'Data Persistence', tech: 'PostgreSQL · SQLite · Redis Caching', stage: '06', icon: Database, color: '#EC4899' },
      ],
    },
    metrics: [
      { label: 'Inspection Stages', value: '8', detail: 'Automated pipeline stages' },
      { label: 'Specialized Agents', value: '4', detail: 'Evidence collection agents' },
      { label: 'Detection Classes', value: '10', detail: 'YOLO component classes' },
      { label: 'Supported Hardware', value: '3', detail: 'Component types supported' },
    ],
    features: [
      'Image Intelligence — Built image quality, authenticity, and golden-reference matching pipelines using OpenCV, embeddings, CLIP, and FAISS.',
      'Agentic Inspection — Developed 4 specialized evidence agents for OCR, labels, structural anomalies, and general visual inspection.',
      'ROI-Based Processing — Implemented ROI scheduling and targeted analysis to route relevant image regions to the right inspection agent.',
      'Evidence Fusion — Combined findings from multiple detectors and image angles into a single confidence-aware evidence set.',
      'AI Decision Engine — Implemented an AI Judge + policy engine to convert inspection evidence into actionable fraud decisions.',
      'Explainable Inspection — Generated evidence-backed reports with confidence, root-cause reasoning, and recommended actions for human verification.',
    ],
    stack: ['FastAPI', 'LangGraph', 'OpenCV', 'CLIP', 'FAISS', 'YOLO', 'PaddleOCR', 'Gemini'],
    githubUrl: 'https://github.com/IdeaForg-e/VeriVision-AI',
    liveUrl: '',
  },
  {
    id: 'taskpilot-ai',
    title: 'TaskPilot AI',
    tagline: 'Integration Lead · Team IdeaForg-E · Jul 2026 – Present',
    description:
      'Built an AI-powered task management system using 8 specialized agents to manage and prioritize software engineering tasks. Integrated data from 5 sources — GitHub, Slack, Email, Calendar, and Meeting transcripts — into one platform.',
    challenge:
      'Engineers lose hours daily switching between GitHub, Slack, Email, Calendar, and meeting notes. Critical action items — especially ones buried in unstructured emails and Slack threads — fall through the cracks across these disconnected tools.',
    solution:
      'Developed a 7-factor priority system to rank tasks based on severity, deadline proximity, customer/business impact, and blocker status. Added an AI chat copilot that can detect P1 issues from natural language and autonomously re-run the full pipeline to update priorities and the daily schedule in real time.',
    architecture: {
      layers: [
        { name: 'Client App', tech: 'React + Vite + Tailwind CSS', stage: '01', icon: Globe, color: '#38BDF8' },
        { name: 'API Layer', tech: 'FastAPI (REST, polling-based live updates)', stage: '02', icon: Zap, color: '#009688' },
        { name: 'Multi-Agent Core', tech: 'Custom orchestrator (8 agents, ThreadPoolExecutor parallel LLM calls)', stage: '03', icon: BrainCircuit, color: '#F97316' },
        { name: 'Integrations', tech: 'GitHub · Slack · Email · Calendar · Meeting Notes', stage: '04', icon: Share2, color: '#818CF8' },
        { name: 'Persistence', tech: 'SQLite (SQLAlchemy Models)', stage: '05', icon: Database, color: '#34D399' },
      ],
    },
    metrics: [
      { label: 'Autonomous Agents', value: '8', detail: 'Specialized pipeline agents' },
      { label: 'Ingestion Sources', value: '5', detail: 'Integrated developer tools' },
      { label: 'Priority Scoring', value: '7-Factor', detail: 'Weighted algorithmic ranking' },
      { label: 'P1 Incident Recovery', value: 'Real-time', detail: 'Auto pipeline re-execution' },
    ],
    features: [
      'Agent 0 Orchestrator & Self-Healing Pipeline — Built the central controller to run all 6 pipeline stages (Ingestion to Planning) in ~20 seconds, with background execution and automatic recovery for stuck runs.',
      'Multi-Source Ingestion & Task Extraction — Collected developer activity across 5 tools (GitHub, Slack, Email, Calendar, Meeting notes) using regex and LLM prompts to find hidden action items.',
      'Fast Task Deduplication & Traceability — Created a fast string-matching algorithm that merges duplicate tasks across tools in ~3 seconds while keeping full links back to original sources.',
      '7-Dimension Quality & Explainable Priority — Built an automated checker that scores task quality across 7 checks, plus a weighted priority system that explains exactly why a task is ranked high or low.',
      'Calendar-Aware Dynamic Daily Planner — Created a smart daily planner that protects scheduled meetings, adds short breaks between deep work, and fits prioritized tasks into available free hours.',
      "Reliable LLM Client & Instant P1 Chat Copilot — Added a fail-safe LLM client with circuit breakers and fallback rules, paired with an AI chat assistant that lets users inject urgent P1 issues to instantly re-rank the day's plan.",
    ],
    stack: ['FastAPI', 'React', 'SQLite', 'Groq/NVIDIA NIM'],
    githubUrl: 'https://github.com/IdeaForg-e/TaskPilot-AI',
    liveUrl: 'https://taskpilot-ai-app.onrender.com/',
  },
  {
    id: 'ai-career-mentor',
    title: 'AI Career Mentor',
    tagline: 'Solo Developer · Feb 2026 – Aug 2026',
    description:
      'Engineered a multi-agent AI system containing specialized agents (Resume Auditor, Market Scraper, Roadmap Generator, and LinkedIn Optimizer) built to simplify and streamline developer career transitions.',
    challenge:
      'Developer career transitions are fragmented across dozens of disconnected tools — resume builders, job boards, interview prep platforms — with no unified intelligence layer to orchestrate the process.',
    solution:
      'Created a robust FastAPI and SQL database backend to manage user profiles and logs, and integrated a RAG system using ChromaDB to retrieve study links matching candidate skill gaps. Leveraged advanced AI agents to build a production-grade startup MVP containing parallel multi-agent workflows, WebSocket mock interviews, Monaco editor sandboxing, multi-LLM failovers, and Docker deployment.',
    architecture: {
      layers: [
        { name: 'Web Interface', tech: 'Next.js + TypeScript', stage: '01', icon: Globe, color: '#38BDF8' },
        { name: 'Gateway & Live Sockets', tech: 'FastAPI + WebSocket FSM', stage: '02', icon: Radio, color: '#009688' },
        { name: 'DAG Orchestration', tech: 'LangGraph (4 Concurrent Agents)', stage: '03', icon: Workflow, color: '#34D399' },
        { name: 'LLM Routing & Failover', tech: 'Groq / NVIDIA NIM / Cerebras', stage: '04', icon: Cpu, color: '#F59E0B' },
        { name: 'State & Vectors', tech: 'PostgreSQL + Redis + ChromaDB', stage: '05', icon: Database, color: '#818CF8' },
      ],
    },
    metrics: [
      { label: 'Latency Optimization', value: '~60%', detail: 'Speedup (4 min → 60 sec)' },
      { label: 'Concurrent Agents', value: '4', detail: 'LangGraph Directed Acyclic Graph' },
      { label: 'Automated Tests', value: '113', detail: 'Pytest test cases passing' },
      { label: 'LLM Failover Providers', value: '3', detail: 'Automatic fallback resilience' },
    ],
    stack: ['FastAPI', 'LangGraph', 'Next.js', 'ChromaDB', 'Redis', 'Docker', 'ONNX'],
    githubUrl: 'https://github.com/Anil-Pradhan-web/ai-career-mentor',
    liveUrl: 'https://ai-career-mentor-anil.vercel.app',
  },
];

export default function FeaturedWork() {
  return (
    <section id="featured-work" className="section-padding w-full" aria-labelledby="featured-work-heading">
      <div className="container-custom">
        <SectionHeading
          id="featured-work-heading"
          eyebrow="Systems & Architecture"
          title="Featured Projects"
          subtitle="Production-grade AI architectures, multi-agent pipelines, and resilient backend services."
        />

        <div className="flex flex-col gap-14 mt-12">
          {projects.map((project, idx) => {
            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.2, 0, 0, 1] as const }}
                className="group relative rounded-3xl border border-border-primary bg-bg-card p-6 sm:p-8 lg:p-10 transition-all duration-300 hover:border-border-secondary hover:-translate-y-1 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
              >
                {/* ── 1. Top Tier: Project Identity & Direct Action Links ── */}
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-6 border-b border-border-primary">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className="font-mono text-xs font-semibold px-2.5 py-0.5 rounded-md bg-[#00e89d]/10 text-[#00e89d] border border-[#00e89d]/20 tracking-wider">
                        PROJECT {String(idx + 1).padStart(2, '0')}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-display font-bold text-text-primary tracking-tight">
                        {project.title}
                      </h3>
                    </div>
                    <p className="font-mono text-xs text-text-muted">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Action Buttons & Tech Stack Summary */}
                  <div className="flex flex-col sm:flex-row lg:flex-col items-start lg:items-end gap-3 shrink-0">
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-secondary text-xs px-3.5 py-2 inline-flex items-center gap-2"
                        aria-label={`View ${project.title} source code on GitHub`}
                      >
                        <FaGithub className="w-3.5 h-3.5" />
                        <span>Source Code</span>
                        <ArrowUpRight className="w-3 h-3 text-text-muted" />
                      </a>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="btn-primary text-xs px-4 py-2 inline-flex items-center gap-2"
                          aria-label={`Open live demo for ${project.title}`}
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>Live Demo</span>
                        </a>
                      )}
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 lg:justify-end">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-text-secondary border border-white/[0.06]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* ── 2. Middle Tier: Split-Pane (Narrative/Impact + Visual Architecture Pipeline) ── */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 pt-8">
                  {/* Left Column: Narrative, Problem/Solution, and System Metrics */}
                  <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                    {/* Executive Description */}
                    <p className="text-base sm:text-lg text-text-primary/90 leading-relaxed font-body">
                      {project.description}
                    </p>

                    {/* Challenge vs Solution Editorial Blocks */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="border-l-2 border-rose-500/50 pl-4 py-1 space-y-1.5">
                        <div className="flex items-center gap-1.5 text-rose-400 font-mono text-xs font-semibold uppercase tracking-wider">
                          <Zap className="w-3.5 h-3.5" />
                          <span>The Challenge</span>
                        </div>
                        <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                          {project.challenge}
                        </p>
                      </div>

                      <div className="border-l-2 border-emerald-500/50 pl-4 py-1 space-y-1.5">
                        <div className="flex items-center gap-1.5 text-emerald-400 font-mono text-xs font-semibold uppercase tracking-wider">
                          <Shield className="w-3.5 h-3.5" />
                          <span>The Solution</span>
                        </div>
                        <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                          {project.solution}
                        </p>
                      </div>
                    </div>

                    {/* System Performance Metrics */}
                    <div className="pt-2">
                      <span className="text-[11px] font-mono text-text-muted uppercase tracking-wider block mb-3">
                        System Performance & Operational Metrics
                      </span>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {project.metrics.map((metric, mIdx) => (
                          <div
                            key={mIdx}
                            className="p-3 rounded-xl bg-bg-secondary border border-border-primary hover:border-[#00e89d]/30 transition-colors group/metric"
                          >
                            <span className="font-mono text-[10px] text-text-muted uppercase tracking-wider block mb-1">
                              {metric.label}
                            </span>
                            <span className="font-display text-xl sm:text-2xl font-bold text-text-primary group-hover/metric:text-[#00e89d] transition-colors block">
                              {metric.value}
                            </span>
                            <span className="text-[11px] text-text-muted block mt-0.5 leading-snug">
                              {metric.detail}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Visual System Architecture Pipeline */}
                  <div className="lg:col-span-5 rounded-2xl bg-bg-secondary border border-border-primary p-5 sm:p-6 flex flex-col justify-between">
                    <div className="flex items-center justify-between pb-3 mb-4 border-b border-border-primary">
                      <span className="text-xs font-mono text-[#00e89d] font-semibold uppercase tracking-wider flex items-center gap-2">
                        <Workflow className="w-3.5 h-3.5" />
                        <span>System Pipeline Flow</span>
                      </span>
                      <span className="text-[11px] font-mono text-text-muted">
                        {project.architecture.layers.length} Stages
                      </span>
                    </div>

                    {/* Connected Sequential Stages Flow */}
                    <div className="flex flex-col">
                      {project.architecture.layers.map((layer, lIdx) => {
                        const Icon = layer.icon;
                        const isLast = lIdx === project.architecture.layers.length - 1;

                        return (
                          <div key={lIdx} className="flex flex-col">
                            {/* Stage Item */}
                            <div className="flex items-start gap-3.5 p-2.5 rounded-xl hover:bg-bg-card transition-colors group/stage">
                              <div
                                className="w-8 h-8 rounded-lg flex items-center justify-center border shrink-0 mt-0.5 transition-transform group-hover/stage:scale-105"
                                style={{
                                  backgroundColor: `${layer.color}15`,
                                  borderColor: `${layer.color}35`,
                                  color: layer.color,
                                }}
                              >
                                <Icon className="w-4 h-4" />
                              </div>

                              <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between gap-2">
                                  <span className="text-xs font-display font-semibold text-text-primary group-hover/stage:text-[#00e89d] transition-colors">
                                    {layer.name}
                                  </span>
                                  <span className="font-mono text-[10px] text-text-muted px-1.5 py-0.2 rounded bg-bg-primary">
                                    Stage {layer.stage}
                                  </span>
                                </div>
                                <p className="font-mono text-[11px] text-text-secondary truncate mt-0.5">
                                  {layer.tech}
                                </p>
                              </div>
                            </div>

                            {/* Downward Connector Line */}
                            {!isLast && (
                              <div className="flex items-center justify-start pl-6 py-0.5" aria-hidden="true">
                                <div className="w-px h-3 bg-gradient-to-b from-[#00e89d]/40 to-[#00e89d]/10" />
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>

                    <div className="mt-4 pt-3 border-t border-border-primary flex items-center justify-between text-[11px] font-mono text-text-muted">
                      <span>Execution Paradigm</span>
                      <span className="text-[#00e89d] font-medium flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00e89d] animate-pulse" />
                        Autonomous & Verified
                      </span>
                    </div>
                  </div>
                </div>

                {/* ── 3. Bottom Tier: Core Engineering Deliverables & Ownership ── */}
                <div className="mt-8 pt-6 border-t border-border-primary">
                  <div className="flex items-center gap-2 mb-4">
                    <Terminal className="w-4 h-4 text-[#00e89d]" />
                    <span className="text-xs font-mono text-[#00e89d] font-semibold uppercase tracking-wider">
                      Core Engineering Deliverables & Technical Ownership
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3.5">
                    {project.features?.map((feature, fIdx) => {
                      const [featureTitle, ...featureRest] = feature.split(' — ');
                      const featureDesc = featureRest.join(' — ');

                      return (
                        <div key={fIdx} className="flex items-start gap-3 group/deliverable">
                          <span className="font-mono text-xs font-semibold text-[#00e89d] shrink-0 mt-0.5">
                            {String(fIdx + 1).padStart(2, '0')}.
                          </span>
                          <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                            {featureDesc ? (
                              <>
                                <strong className="text-text-primary font-medium group-hover/deliverable:text-[#00e89d] transition-colors">
                                  {featureTitle}
                                </strong>
                                {' — '}
                                {featureDesc}
                              </>
                            ) : (
                              feature
                            )}
                          </p>
                        </div>
                      );
                    })}
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