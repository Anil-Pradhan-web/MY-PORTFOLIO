'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  ArrowRight, Sparkles, Terminal,
  Workflow, Search, Eye, Database, BrainCircuit, Cloud
} from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';

const stagger = {
  initial: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const childFade = {
  initial: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.2, 0, 0, 1] as const },
  },
};

const questions = [
  {
    icon: Workflow,
    question: 'What happens when multiple AI agents need to work together?',
    note: 'State orchestration, message passing, and deterministic fallbacks',
  },
  {
    icon: Search,
    question: 'How can a system make decisions using evidence from different sources?',
    note: 'Evidence fusion, confidence scoring, and multi-model consensus',
  },
  {
    icon: Eye,
    question: "What if AI has to inspect physical hardware and detect what's wrong?",
    note: 'Image authenticity, golden-reference alignment, and ROI scheduling',
  },
];

/* ── Mock code snippet for the "terminal" panel ── */
const codeSnippet = `// vision_forge_pipeline.py
from langgraph.graph import StateGraph

class InspectionPipeline:
    def __init__(self):
        self.stages = [
            "image_validation",
            "golden_match",
            "roi_scheduling",
            "agent_routing",
            "evidence_fusion",
            "decision_making",
            "report_generation",
            "human_verify"
        ]

    def run(self, image_path):
        # 8-stage autonomous inspection
        evidence = [
            self.validate_image(image_path),
            self.match_golden(image_path),
            ...
        ]
        return self.make_decision(evidence)
`;

const currentStack = [
  { name: 'Python', color: '#f89820' },
  { name: 'FastAPI', color: '#00e89d' },
  { name: 'LangGraph', color: '#34d399' },
  { name: 'LLMs', color: '#eb5d2f' },
  { name: 'RAG', color: '#62e08a' },
  { name: 'Computer Vision', color: '#be63c9' },
  { name: 'PostgreSQL', color: '#4479c3' },
  { name: 'Redis', color: '#dc382d' },
  { name: 'Docker', color: '#2496ed' },
];

export default function About() {
  return (
    <section id="about" className="section-padding w-full" aria-labelledby="about-heading">
      <div className="container-custom">
        <SectionHeading
          id="about-heading"
          eyebrow="Engineering Philosophy"
          title="About Me"
          subtitle="The person behind the commits — how I think, build, and approach complex systems."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start mt-12">

          {/* ── Left Column: Narrative ── */}
          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="lg:col-span-7 space-y-7"
          >
            <motion.div variants={childFade} className="space-y-3">
              <span className="text-xs font-mono text-[#00e89d] font-semibold uppercase tracking-wider">
                Origins &amp; Process
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-text-primary tracking-tight">
                I learn best by building.
              </h3>
              <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-body">
                Instead of only reading about a technology, I open my editor, build something with it, break it, fix it, and understand how it works at runtime. That habit has shaped how I approach every system.
              </p>
            </motion.div>

            <motion.p variants={childFade} className="text-base text-text-secondary leading-relaxed font-body">
              I started with <strong className="text-text-primary font-semibold">backend development</strong>, where I found myself drawn to what happens behind the screen — designing APIs, architecting database schemas, handling error boundaries, and guaranteeing service resilience under load.
            </motion.p>

            <motion.p variants={childFade} className="text-base text-text-secondary leading-relaxed font-body">
              Then I started exploring <strong className="text-[#00e89d] font-semibold">AI</strong>. But I didn&apos;t want to build another trivial chatbot or thin API wrapper. I wanted to understand what happens when AI becomes an integrated component of a larger, distributed system.
            </motion.p>

            {/* Driving Questions */}
            <motion.div variants={childFade} className="pt-2 space-y-3">
              <span className="text-xs font-mono text-text-muted uppercase tracking-wider font-semibold block">
                Research Questions Directing My Work
              </span>
              <div className="space-y-2.5">
                {questions.map((q, idx) => {
                  const Icon = q.icon;
                  return (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-bg-card border border-border-primary hover:border-[#00e89d]/30 transition-all hover:-translate-y-0.5 duration-300 flex items-start gap-3.5 group"
                    >
                      <div className="p-2 rounded-lg bg-[#00e89d]/10 text-[#00e89d] shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-display text-sm sm:text-base font-semibold text-text-primary">
                          {q.question}
                        </p>
                        <p className="font-mono text-xs text-text-muted mt-0.5">
                          {q.note}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            <motion.div
              variants={childFade}
              className="text-base text-text-secondary leading-relaxed font-body group cursor-default"
            >
              Those questions turned into real projects. Today, I build systems that combine <strong className="text-text-primary font-semibold">AI with robust software engineering</strong> — from multi-agent workflows and backend APIs to computer vision inspection pipelines.
            </motion.div>

            {/* The Engineering Question vs The Surface Question */}
            <motion.div variants={childFade} className="space-y-3">
              <p className="text-sm text-text-muted leading-relaxed">
                Because real-world systems are messy: models can hallucinate, APIs can fail, networks drop packets, and rate limits hit at the worst possible time.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div className="p-4 rounded-xl bg-bg-card border border-border-primary space-y-1">
                  <span className="font-mono text-[10px] text-text-muted uppercase tracking-wider block font-semibold">
                    The Surface Question
                  </span>
                  <p className="font-body text-sm text-text-secondary italic">
                    &ldquo;How do I make the AI work?&rdquo;
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#00e89d]/[0.05] border border-[#00e89d]/25 space-y-1">
                  <span className="font-mono text-[10px] text-[#00e89d] uppercase tracking-wider block font-semibold">
                    The Engineering Question
                  </span>
                  <p className="font-body text-sm font-semibold text-text-primary">
                    &ldquo;How do I make the whole system keep working when things go wrong?&rdquo;
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Engineering Principle Quote */}
            <motion.div
              variants={childFade}
              className="border-l-2 border-[#00e89d] pl-5 py-2.5 bg-gradient-to-r from-[#00e89d]/10 via-[#00e89d]/[0.02] to-transparent rounded-r-xl"
            >
              <span className="font-mono text-[11px] uppercase tracking-widest text-[#00e89d] font-bold block mb-1">
                Engineering Principle
              </span>
              <p className="font-display font-semibold text-text-primary text-base sm:text-lg">
                &ldquo;Build systems that actually hold up — especially when the individual pieces want to fail.&rdquo;
              </p>
            </motion.div>
          </motion.div>

          {/* ── Right Column: Code Editor Terminal Mockup ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.2, 0, 0, 1] as const }}
            className="lg:col-span-5 rounded-2xl border border-border-primary bg-bg-card p-6 sm:p-8 space-y-7 shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
          >
            {/* Terminal Header */}
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-border-primary">
              <div className="flex items-center gap-2 text-xs font-mono text-text-muted">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500 opacity-60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500 opacity-60" />
                  <div className="w-3 h-3 rounded-full bg-green-500 opacity-60" />
                </div>
                <span>anilpradhan@visionforge</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[11px] font-mono text-text-muted">~</span>
                <span className="text-xs font-mono text-[#00e89d] font-semibold">vision_forge_pipeline.py</span>
              </div>
            </div>

            {/* Code Display - Syntax highlighted */}
            <pre className="font-mono text-xs text-text-secondary bg-bg-primary/80 rounded-xl p-4 overflow-x-auto">
              <code>
                <span className="text-[#00e89d] font-semibold">from</span><span className="text-text-secondary"> langgraph</span><span className="text-text-muted">.</span><span className="text-[#c08497]">graph</span> <span className="text-[#0dfbca]">import</span><span className="text-text-secondary"> StateGraph</span>
                {'\n'}
                {'\n'}
                <span className="text-[#f89820] font-semibold">class</span><span className="text-text-secondary"> InspectionPipeline</span><span className="text-text-muted">:</span>
                {'  '}
                <span className="text-[#eb5d2f] font-semibold">def</span><span className="text-text-secondary"> __init__</span><span className="text-text-muted">(</span><span className="text-text-secondary">self</span><span className="text-text-muted">):</span>
                {'    '}
                <span className="text-[#62e08a] font-semibold">self</span><span className="text-text-secondary">.stages</span> <span className="text-text-muted">=</span><span className="text-text-secondary"> [
                    "image_validation",
                    "golden_match",
                    "roi_scheduling",
                    "agent_routing",
                    "evidence_fusion",
                    "decision_making",
                    "report_generation",
                    "human_verify"
                ]</span>
                {'\n'}
                {'\n'}
                <span className="text-[#f89820] font-semibold">def</span><span className="text-text-secondary"> run</span><span className="text-text-muted">(</span><span className="text-text-secondary">self, image_path</span><span className="text-text-muted">):</span>
                {'    '}
                <span className="text-[#0dfbca] font-semibold">#</span><span className="text-text-secondary"> 8-stage autonomous inspection</span>
                {'    '}
                <span className="text-[#eb5d2f] font-semibold">evidence</span><span className="text-text-secondary"> =</span> <span className="text-text-muted">[</span>
                {'      '}
                <span className="text-[#00e89d] font-semibold">self</span><span className="text-text-secondary">.validate_image</span><span className="text-text-muted">(</span><span className="text-text-secondary">image_path</span><span className="text-text-muted">),</span>
                {'      '}
                <span className="text-[#00e89d] font-semibold">self</span><span className="text-text-secondary">.match_golden</span><span className="text-text-muted">(</span><span className="text-text-secondary">image_path</span><span className="text-text-muted">),</span>
                {'    '}<span className="text-text-muted">]</span>
                {'    '}
                <span className="text-[#0dfbca] font-semibold">return</span><span className="text-text-secondary"> self.make_decision</span><span className="text-text-muted">(</span><span className="text-text-secondary">evidence</span><span className="text-text-muted">)</span>
              </code>
            </pre>

            {/* Execution Status */}
            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center gap-2 text-xs font-mono">
                <span className="text-[#00e89d] font-semibold">{">"}</span>
                <span className="text-text-secondary">python vision_forge_pipeline.py --inspect ./samples/</span>
              </div>
              <div className="flex items-center gap-3 text-xs font-mono">
                <span className="text-text-muted">Status:</span>
                <span className="text-[#00e89d] font-medium flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00e89d] animate-pulse" />
                  Processing
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}