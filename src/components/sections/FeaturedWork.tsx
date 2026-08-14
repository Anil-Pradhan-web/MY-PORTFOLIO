'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ChevronDown, ChevronUp, Layers, Zap, Shield } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { Badge } from '@/components/ui/Badge';

const projects = [
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
      "Built a multi-agent AI system using LangGraph's parallel DAG to orchestrate 4 agents (Resume, Market, Roadmap, LinkedIn) with shared state, cutting analysis latency by ~60%.",
      'Developed a real-time mock interview engine using a 7-phase FSM over WebSockets with a live Monaco code editor and resume-personalized questions.',
      'Built a RAG-powered roadmap generator using ChromaDB vector search to create personalized 8-week learning paths with quality-scored resources.',
      'Designed a fault-tolerant backend (FastAPI, PostgreSQL, Redis) with multi-provider LLM failover and a 113-test CI/CD suite.',
      'Used AI-assisted development (Claude) to design high-level architecture — DAG structure, FSM design, and failover strategy — for solo delivery of a production-grade platform.',
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
      'Built an AI-powered task management system using 8 specialized agents to manage and prioritize software engineering tasks. Integrated data from 7 sources including Jira, GitHub, Slack, Email, Calendar, Meetings, and Incidents into one platform.',
    challenge:
      'Engineers lose hours daily switching between Jira, GitHub, Slack, Email, Calendar, Meetings, and Incident trackers. Critical action items fall through the cracks across these disconnected tools.',
    solution:
      'Developed an 8-factor priority system to rank tasks based on severity, deadline, customer impact, blockers, and business impact. Added an AI chat assistant that can detect P1 issues and automatically re-run the pipeline to update task priorities and schedules.',
    architecture: {
      layers: [
        { name: 'Frontend', tech: 'React + TypeScript', icon: '🌐' },
        { name: 'API Layer', tech: 'FastAPI + WebSocket', icon: '⚡' },
        { name: 'Agents', tech: 'LangGraph (8 specialized)', icon: '🧠' },
        { name: 'Integrations', tech: 'Jira / GitHub / Slack / Email / Calendar / Meetings / Incidents', icon: '🔌' },
        { name: 'Data Layer', tech: 'SQLite + Redis', icon: '💾' },
      ],
    },
    metrics: [
      { label: 'Agents', value: '8', detail: 'specialized' },
      { label: 'Sources', value: '7', detail: 'integrated' },
      { label: 'Priority Factors', value: '8', detail: 'factor system' },
      { label: 'P1 Detection', value: 'Auto', detail: 're-run pipeline' },
    ],
    features: [
      'Integrated data connectors to pull developer tasks from 7 sources including Jira, GitHub, Slack, Email, Calendar, Meetings, and Incident trackers.',
      'Developed an 8-factor mathematical scoring formula to rank tasks based on deadlines, blockers, customer urgency, and business impact.',
      'Structured the relational database using SQLite with Write-Ahead Logging (WAL) concurrency to ensure fast, lock-free read and write operations.',
      'Built a WebSocket-powered chat assistant that lets engineers query schedules, update tasks, and inject urgent issues in real-time.',
      '[AI-Collaborative Architect] Pair-programmed with AI co-pilots to design the high-level architecture of an 8-agent system; focused on system design, sequential DAG flows, and prompt orchestration, using AI to accelerate implementation of SQLite WAL, regex parsers, and dashboard latency diagnostics.',
    ],
    stack: ['FastAPI', 'React', 'SQLite', 'Redis', 'LLMs'],
    githubUrl: 'https://github.com/IdeaForg-e/TaskPilot-AI',
    liveUrl: 'https://taskpilot-ai-app.onrender.com/',
  },
];

function ArchitectureDiagram({ layers }: { layers: { name: string; tech: string; icon: string }[] }) {
  return (
    <div className="relative flex flex-col gap-3">
      {layers.map((layer, idx) => (
        <div key={idx} className="flex items-center gap-4">
          <div className="w-8 h-8 rounded-lg bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-sm flex-shrink-0">
            {layer.icon}
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-teal-400 uppercase tracking-wider">{layer.name}</span>
              {idx < layers.length - 1 && (
                <span className="text-text-muted" aria-hidden="true">↓</span>
              )}
            </div>
            <span className="font-body text-sm text-text-secondary">{layer.tech}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

function MetricCard({ metric }: { metric: { label: string; value: string; detail: string } }) {
  return (
    <div className="flex flex-col p-4 rounded-xl bg-bg-card border border-border-primary hover:border-teal-500/30 transition-colors group">
      <span className="font-mono text-xs text-text-muted uppercase tracking-wider mb-1">{metric.label}</span>
      <div className="flex items-baseline gap-2">
        <span className="font-display text-2xl font-bold text-teal-400 group-hover:text-teal-300 transition-colors">
          {metric.value}
        </span>
        <span className="font-body text-xs text-text-muted">{metric.detail}</span>
      </div>
    </div>
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

        <div className="flex flex-col gap-8">
          {projects.map((project, idx) => {
            const isExpanded = expandedId === project.id;
            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group relative overflow-hidden rounded-2xl border border-border-primary bg-bg-card hover:border-border-secondary transition-all duration-300"
              >
                {/* Ambient glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" aria-hidden="true" />

                <div className="relative p-6 md:p-8">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="font-mono text-2xl font-bold text-teal-500/40">
                          0{idx + 1}.
                        </span>
                        <h3 className="heading-4 font-display">
                          {project.title}
                        </h3>
                      </div>
                      <p className="font-mono text-sm text-teal-400/80 tracking-wider mb-3">
                        {project.tagline}
                      </p>
                      <p className="body text-text-secondary max-w-3xl">
                        {project.description}
                      </p>
                    </div>

                    {/* Quick metrics */}
                    <div className="flex gap-3 flex-wrap md:flex-nowrap md:w-auto">
                      {project.metrics.slice(0, 2).map((metric, mIdx) => (
                        <div key={mIdx} className="flex flex-col items-center p-3 rounded-lg bg-bg-primary/50 border border-border-primary min-w-[80px]">
                          <span className="font-display text-xl font-bold text-teal-400">{metric.value}</span>
                          <span className="font-mono text-[10px] text-text-muted uppercase tracking-wider">{metric.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Stack badges */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.stack.map((tech) => (
                      <Badge key={tech} variant="subtle" size="sm">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-text-secondary hover:text-teal-400 transition-colors font-mono"
                    >
                      GitHub
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 text-sm font-medium text-teal-400 hover:text-teal-300 transition-colors font-mono"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    )}
                    <button
                      suppressHydrationWarning
                      onClick={() => setExpandedId(isExpanded ? null : project.id)}
                      className="ml-auto flex items-center gap-2 text-sm font-medium text-text-secondary hover:text-teal-400 transition-colors font-mono focus-ring rounded-lg px-3 py-1.5"
                      aria-expanded={isExpanded}
                      aria-controls={`project-details-${project.id}`}
                    >
                      {isExpanded ? 'Less' : 'More'} Details
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
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
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pt-6 mt-6 border-t border-border-primary">
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* Left: Challenge + Solution */}
                            <div className="space-y-6">
                              <div>
                                <h4 className="font-mono text-xs font-bold text-text-muted uppercase tracking-widest mb-3 flex items-center gap-2">
                                  <Zap className="w-3 h-3 text-teal-400" />
                                  Challenge
                                </h4>
                                <p className="body-sm text-text-secondary leading-relaxed">
                                  {project.challenge}
                                </p>
                              </div>
                              <div>
                                <h4 className="font-mono text-xs font-bold text-text-muted uppercase tracking-widest mb-3 flex items-center gap-2">
                                  <Shield className="w-3 h-3 text-teal-400" />
                                  Solution
                                </h4>
                                <p className="body-sm text-text-secondary leading-relaxed">
                                  {project.solution}
                                </p>
                              </div>
                            </div>

                            {/* Right: Architecture */}
                            <div>
                              <h4 className="font-mono text-xs font-bold text-text-muted uppercase tracking-widest mb-4 flex items-center gap-2">
                                <Layers className="w-3 h-3 text-teal-400" />
                                Architecture
                              </h4>
                              <ArchitectureDiagram layers={project.architecture.layers} />
                            </div>
                          </div>

                          {/* All Metrics */}
                          <div className="mt-8">
                            <h4 className="font-mono text-xs font-bold text-text-muted uppercase tracking-widest mb-4">
                              Key Metrics
                            </h4>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                              {project.metrics.map((metric, mIdx) => (
                                <MetricCard key={mIdx} metric={metric} />
                              ))}
                            </div>
                          </div>

                          {/* All Features */}
                          <div className="mt-8">
                            <h4 className="font-mono text-xs font-bold text-text-muted uppercase tracking-widest mb-4">
                              Key Contributions
                            </h4>
                            <ul className="space-y-3" role="list">
                              {project.features.map((feature, fIdx) => (
                                <li key={fIdx} className="flex items-start gap-3 text-text-secondary body-sm">
                                  <span className="text-teal-400 mt-1 flex-shrink-0" aria-hidden="true">→</span>
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}