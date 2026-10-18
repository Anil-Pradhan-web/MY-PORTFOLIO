'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ExternalLink,
  Zap,
  Shield,
  ArrowUpRight,
  Terminal,
  Globe,
  Workflow,
  BrainCircuit,
  Database,
  Share2,
  Radio,
  Cpu,
  Activity,
  CheckCircle2,
  AlertCircle,
  LucideIcon,
} from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import SectionHeading from '@/components/ui/SectionHeading';
import { cn } from '@/lib/utils';

interface Layer {
  name: string;
  tech: string;
  stage: string;
  icon: LucideIcon;
  color: string;
}

interface TelemetryItem {
  name: string;
  detail: string;
  status: string;
  isDefect?: boolean;
}

interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  challenge: string;
  solution: string;
  architecture: {
    layers: Layer[];
  };
  telemetry: {
    title: string;
    target: string;
    badge: string;
    badgeColor: string;
    items: TelemetryItem[];
    meta: string;
  };
  metrics: {
    label: string;
    value: string;
    detail: string;
  }[];
  features: string[];
  stack: string[];
  githubUrl: string;
  liveUrl: string;
}

const projects: Project[] = [
  {
    id: 'visionforge-ai',
    title: 'VisionForge AI',
    tagline: 'AI/ML & Pipeline Engineer · Team: Disha & Anil · Aug 2026 – Present',
    description:
      'Engineered an industrial hardware inspection platform to detect counterfeit electronics, altered markings, and missing components by combining fine-tuned computer vision, vector similarity matching, and resilient backend orchestration.',
    challenge:
      'Hardware counterfeit fraud costs global supply chains billions annually. Manual PCB inspection is labor-intensive and error-prone, frequently missing subtle component swaps, desoldered passives, and altered serial markings under variable factory lighting.',
    solution:
      'Built an autonomous inspection platform integrating automated image validation, fine-tuned YOLO11n component detection, vector-based blueprint verification, and explainable decision auditing in under 4 seconds.',
    architecture: {
      layers: [
        { name: 'Web Interface', tech: 'React / Next.js Dashboard (Inspection Uploads, Overlays & Reports)', stage: '01', icon: Globe, color: '#38BDF8' },
        { name: 'Backend & API Gateway', tech: 'FastAPI (REST APIs, Asynchronous Pipeline Orchestration & SSE)', stage: '02', icon: Zap, color: '#009688' },
        { name: 'AI & Vision Core', tech: 'Fine-Tuned YOLO11n · Multi-Agent Inspection · LangGraph', stage: '03', icon: BrainCircuit, color: '#F59E0B' },
        { name: 'Vector & Data Store', tech: 'FAISS Vector Index (Reference Blueprints) · Relational DB', stage: '04', icon: Database, color: '#818CF8' },
        { name: 'Policy & Report Engine', tech: 'Automated Audit Verification · Cryptographic Reports (ReportLab)', stage: '05', icon: Terminal, color: '#A855F7' },
      ],
    },
    telemetry: {
      title: 'YOLO11n & Vector Inspection HUD',
      target: 'TARGET: PCB-REV-4.2 // SN: #VF-9021-AX',
      badge: '1 Defect Identified',
      badgeColor: '#f5a623',
      items: [
        { name: 'YOLO11n: IC_CHIP_U1', detail: 'Orientation & Solder Valid [99.2% Conf]', status: 'PASS', isDefect: false },
        { name: 'FAISS: Blueprint Alignment', detail: 'Golden Spec Matched [99.4% Sim]', status: 'PASS', isDefect: false },
        { name: 'OCR: Tamper Verification', detail: 'Laser Mark Authenticated [SHA-256]', status: 'PASS', isDefect: false },
        { name: 'SSIM: Passive Component C14', detail: 'Anomaly / Desoldered Bridge', status: 'FLAGGED', isDefect: true },
      ],
      meta: 'Latency: 3.42s · SSIM: 0.982 · Model: YOLO11n · 203 Pytest passing',
    },
    metrics: [
      { label: 'Detection Accuracy', value: '98.4%', detail: 'mAP@50 on custom dataset' },
      { label: 'End-to-End Latency', value: '< 4.0s', detail: 'Sub-second model execution' },
      { label: 'Component Classes', value: '8', detail: 'Hardware components & seals' },
      { label: 'Automated Tests', value: '203', detail: 'Hermetic Pytest suite passing' },
    ],
    features: [
      'Automated Image Quality & Integrity Validation — Built fast preprocessing validation to screen for blur and image anomalies before triggering downstream AI models, preventing wasted compute.',
      'Fine-Tuned YOLO11n Component Detector — Trained a custom YOLO11n model to accurately detect and localize electronic components and micro-passives across complex circuit boards.',
      'Vector-Based Blueprint Matching — Leveraged visual embeddings and FAISS vector indexing to rapidly match target boards against verified golden reference specifications.',
      'Multi-Agent Visual Evidence Aggregation — Implemented an orchestrated multi-agent workflow combining specialized visual agents to cross-verify markings, labels, and physical structures.',
      'Real-Time Telemetry & Progress Updates — Implemented Server-Sent Events (SSE) to push live pipeline execution milestones and inspection diagnostics directly to the user dashboard.',
      'Automated Audit Reporting & Governance — Engineered an automated report generator producing tamper-evident audit summaries with explainable root-cause verdicts.',
    ],
    stack: ['Python', 'FastAPI', 'LangGraph', 'YOLO11n', 'OpenCV', 'FAISS', 'Groq LPU', 'Gemini 3.5 Flash'],
    githubUrl: 'https://github.com/Disha-1610/VisionForge',
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
    telemetry: {
      title: 'Agent Orchestration Pipeline',
      target: 'ORCHESTRATOR: 8 AGENTS // 5 CHANNELS',
      badge: '8 Agents Synchronized',
      badgeColor: '#00e89d',
      items: [
        { name: 'Agent-0 Ingestion Stream', detail: '10 items across GitHub, Slack, Email', status: 'SYNCED', isDefect: false },
        { name: 'Agent-2 Deduplication Hash', detail: '4 cross-tool duplicate tasks merged (~3s)', status: 'MERGED', isDefect: false },
        { name: 'Agent-5 Multi-Factor Ranker', detail: '7-factor priority matrix calculated', status: 'SCORED', isDefect: false },
        { name: 'Agent-7 Calendar Scheduler', detail: '3 focus blocks protected around meetings', status: 'BOOKED', isDefect: false },
      ],
      meta: 'Cycle: 14.8s · Recovery: Instant P1 Injection · SQLite WAL',
    },
    metrics: [
      { label: 'Autonomous Agents', value: '8', detail: 'Specialized pipeline agents' },
      { label: 'Ingestion Sources', value: '5', detail: 'Integrated developer tools' },
      { label: 'Priority Scoring', value: '7-Factor', detail: 'Weighted algorithmic ranking' },
      { label: 'P1 Incident Recovery', value: 'Real-time', detail: 'Auto pipeline re-execution' },
    ],
    features: [
      'Agent 0 Orchestrator & Self-Healing Pipeline — Built the orchestrator for a 6-stage AI pipeline, coordinating task collection, extraction, deduplication, quality checks, prioritization, and scheduling across 5 data sources.',
      'Lifecycle & State Management (14–18s) — Implemented the pipeline lifecycle and state management to handle stage execution and recovery, completing the full workflow in around 14–18 seconds.',
      'Fast Task Deduplication & Traceability — Created a fast string-matching algorithm that merges duplicate tasks across tools in ~3 seconds while keeping full links back to original sources.',
      '7-Dimension Quality & Explainable Priority — Built an automated checker that scores task quality across 7 checks, plus a weighted priority system that explains exactly why a task is ranked high or low.',
      'Calendar-Aware Dynamic Daily Planner — Created a smart daily planner that protects scheduled meetings, adds short breaks between deep work, and fits prioritized tasks into available free hours.',
      "Reliable LLM Integration & Instant P1 Copilot — Built a reliable LLM client with fallback mechanisms to survive API failures, plus real-time P1 task injection through the AI copilot to instantly move urgent incidents to the #1 priority.",
    ],
    stack: ['Python', 'FastAPI', 'Multi-Agent Systems', 'SQLAlchemy', 'SQLite (WAL)', 'Groq', 'React 18'],
    githubUrl: 'https://github.com/IdeaForg-e/TaskPilot-AI',
    liveUrl: 'https://task-pilot-ai-two.vercel.app/',
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
      'Created a robust FastAPI and SQL database backend to manage user profiles and logs, and integrated a RAG retrieval system to deliver study links matching candidate skill gaps. Leveraged advanced AI agents to build a production-grade startup MVP containing parallel multi-agent workflows, WebSocket mock interviews, Monaco editor sandboxing, multi-LLM failovers, and Docker deployment.',
    architecture: {
      layers: [
        { name: 'Web Interface', tech: 'Next.js + TypeScript', stage: '01', icon: Globe, color: '#38BDF8' },
        { name: 'Gateway & Live Sockets', tech: 'FastAPI + WebSocket FSM', stage: '02', icon: Radio, color: '#009688' },
        { name: 'DAG Orchestration', tech: 'LangGraph (4 Concurrent Agents)', stage: '03', icon: Workflow, color: '#34D399' },
        { name: 'LLM Routing & Failover', tech: 'Groq / NVIDIA NIM / Cerebras', stage: '04', icon: Cpu, color: '#F59E0B' },
        { name: 'Persistence & Vector State', tech: 'PostgreSQL + SQLAlchemy', stage: '05', icon: Database, color: '#818CF8' },
      ],
    },
    telemetry: {
      title: 'LangGraph DAG & Sockets Telemetry',
      target: 'COMPILED DAG // 4 PARALLEL AGENTS',
      badge: '~60% Speedup (60s)',
      badgeColor: '#00e89d',
      items: [
        { name: 'Resume Auditor Node', detail: 'Skill matrix & gap weights calculated (12s)', status: 'PASS', isDefect: false },
        { name: 'Market Scraper Node', detail: 'Real-time job vacancy delta indexed (18s)', status: 'PASS', isDefect: false },
        { name: 'Roadmap Generator Node', detail: 'Vector RAG learning path assembled (15s)', status: 'PASS', isDefect: false },
        { name: 'WebSocket FSM Engine', detail: 'Mock interview stage 4 active with Monaco editor', status: 'LIVE', isDefect: false },
      ],
      meta: 'Failover: Groq / NVIDIA NIM / Cerebras · Pytest: 113 Passing',
    },
    metrics: [
      { label: 'Latency Optimization', value: '~60%', detail: 'Speedup (4 min → 60 sec)' },
      { label: 'Concurrent Agents', value: '4', detail: 'LangGraph Directed Acyclic Graph' },
      { label: 'Automated Tests', value: '113', detail: 'Pytest test cases passing' },
      { label: 'LLM Failover Providers', value: '3', detail: 'Automatic fallback resilience' },
    ],
    features: [
      'LangGraph Multi-Agent Orchestration (~60% Speedup) — Engineered a compiled LangGraph DAG coordinating 4 concurrent agents (Resume Auditor, Market Scraper, Roadmap Generator, LinkedIn Optimizer) with shared state, cutting analysis latency from 4 minutes to ~60 seconds.',
      'WebSocket 7-Phase FSM Mock Interview Engine — Developed a real-time interactive technical interview engine over WebSockets with stateful FSM transitions, Monaco code editor integration, and resume-personalized dynamic questioning.',
      'RAG Skill-Gap Curriculum Engine — Implemented vector similarity search to index learning resources and generate personalized, step-by-step career transition roadmaps tailored to identified skill deficits.',
      'Resilient Multi-Provider LLM Failover Layer — Architected a zero-downtime routing gateway with automatic fallback across Groq, NVIDIA NIM, and Cerebras, ensuring continuous uptime during rate limits and API outages.',
      'High-Throughput Backend & Session Persistence — Built an asynchronous FastAPI backend backed by PostgreSQL (SQLAlchemy 2.0) for low-latency profile ingestion and interview state isolation.',
      'Automated Testing & Containerized CI/CD (113 Tests) — Authored a comprehensive 113-test Pytest test suite with Docker containerization, ONNX runtime optimization, and automated GitHub Actions deployment pipelines.',
    ],
    stack: ['FastAPI', 'PostgreSQL', 'WebSockets', 'Docker', 'GitHub Actions', 'SQLAlchemy'],
    githubUrl: 'https://github.com/Anil-Pradhan-web/ai-career-mentor',
    liveUrl: 'https://ai-career-mentor-anil.vercel.app',
  },
];

function ProjectCard({ project, idx }: { project: Project; idx: number }) {
  const [activeTab, setActiveTab] = useState<'flow' | 'telemetry'>('flow');

  return (
    <motion.article
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
            {project.liveUrl ? (
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
            ) : (
              <span className="text-xs px-3.5 py-2 rounded-xl border border-[#00e89d]/30 bg-[#00e89d]/10 text-[#00e89d] font-mono inline-flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00e89d] animate-pulse" />
                <span>Hardware &amp; Edge System</span>
              </span>
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

      {/* ── 2. Middle Tier: Split-Pane (Narrative/Impact + Visual Architecture Pipeline or Telemetry) ── */}
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
              System Performance &amp; Operational Metrics
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

        {/* Right Column: Visual System Architecture Pipeline or Live Telemetry HUD */}
        <div className="lg:col-span-5 rounded-2xl bg-bg-secondary border border-border-primary p-5 sm:p-6 flex flex-col justify-between">
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-border-primary gap-2">
            <div className="flex items-center gap-1 bg-bg-primary/80 p-1 rounded-lg border border-border-primary/80">
              <button
                type="button"
                onClick={() => setActiveTab('flow')}
                className={cn(
                  'text-[11px] font-mono px-2.5 py-1 rounded transition-colors flex items-center gap-1.5 cursor-pointer',
                  activeTab === 'flow'
                    ? 'bg-[#00e89d]/15 text-[#00e89d] font-semibold border border-[#00e89d]/30 shadow-sm'
                    : 'text-text-muted hover:text-text-primary'
                )}
              >
                <Workflow className="w-3.5 h-3.5" />
                <span>Pipeline Flow</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('telemetry')}
                className={cn(
                  'text-[11px] font-mono px-2.5 py-1 rounded transition-colors flex items-center gap-1.5 cursor-pointer',
                  activeTab === 'telemetry'
                    ? 'bg-[#00e89d]/15 text-[#00e89d] font-semibold border border-[#00e89d]/30 shadow-sm'
                    : 'text-text-muted hover:text-text-primary'
                )}
              >
                <Activity className="w-3.5 h-3.5" />
                <span>Live Trace</span>
              </button>
            </div>

            <span className="text-[11px] font-mono text-text-muted hidden sm:inline">
              {activeTab === 'flow' ? `${project.architecture.layers.length} Stages` : 'Live Telemetry'}
            </span>
          </div>

          {activeTab === 'flow' ? (
            /* Connected Sequential Stages Flow */
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
                        <p className="font-mono text-[11px] text-text-secondary mt-0.5 leading-relaxed">
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
          ) : (
            /* Interactive Cyber Telemetry HUD */
            <div className="flex flex-col justify-between h-full space-y-3">
              <div className="p-3.5 rounded-xl bg-bg-primary/90 border border-border-primary/80 font-mono shadow-inner">
                <div className="flex items-center justify-between text-[11px] mb-3 pb-2 border-b border-border-primary/50">
                  <span className="text-text-muted font-mono">{project.telemetry.target}</span>
                  <span
                    className="px-2 py-0.5 rounded text-[10px] font-semibold"
                    style={{
                      backgroundColor: `${project.telemetry.badgeColor}15`,
                      color: project.telemetry.badgeColor,
                      border: `1px solid ${project.telemetry.badgeColor}35`,
                    }}
                  >
                    {project.telemetry.badge}
                  </span>
                </div>

                <div className="space-y-2.5">
                  {project.telemetry.items.map((item, tIdx) => (
                    <div key={tIdx} className="flex items-start justify-between gap-2 text-xs">
                      <div className="flex items-start gap-2 min-w-0">
                        {item.isDefect ? (
                          <AlertCircle className="w-3.5 h-3.5 text-[#f5a623] shrink-0 mt-0.5" />
                        ) : (
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#00e89d] shrink-0 mt-0.5" />
                        )}
                        <div>
                          <p className="font-medium text-text-primary text-[11px] truncate">
                            {item.name}
                          </p>
                          <p className="text-[10px] text-text-muted">
                            {item.detail}
                          </p>
                        </div>
                      </div>
                      <span
                        className={cn(
                          'text-[9px] px-1.5 py-0.5 rounded font-mono font-bold shrink-0',
                          item.isDefect
                            ? 'bg-[#f5a623]/15 text-[#f5a623] border border-[#f5a623]/30'
                            : 'bg-[#00e89d]/15 text-[#00e89d] border border-[#00e89d]/30'
                        )}
                      >
                        {item.status}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-3 pt-2 border-t border-border-primary/40 text-[10px] text-text-muted">
                  {project.telemetry.meta}
                </div>
              </div>
            </div>
          )}

          <div className="mt-4 pt-3 border-t border-border-primary flex items-center justify-between text-[11px] font-mono text-text-muted">
            <span>Execution Paradigm</span>
            <span className="text-[#00e89d] font-medium flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00e89d] animate-pulse" />
              {activeTab === 'flow' ? 'Autonomous & Verified' : 'Live Runtime Stream'}
            </span>
          </div>
        </div>
      </div>

      {/* ── 3. Bottom Tier: Core Engineering Deliverables & Ownership ── */}
      <div className="mt-8 pt-6 border-t border-border-primary">
        <div className="flex items-center gap-2 mb-4">
          <Terminal className="w-4 h-4 text-[#00e89d]" />
          <span className="text-xs font-mono text-[#00e89d] font-semibold uppercase tracking-wider">
            Core Engineering Deliverables &amp; Technical Ownership
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
}

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
          {projects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}