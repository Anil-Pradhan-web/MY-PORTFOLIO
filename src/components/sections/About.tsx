'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  ArrowRight, Sparkles, Terminal,
  Workflow, Search, Eye
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
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] as const },
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

const currentStack = [
  'Python', 'FastAPI', 'LangGraph', 'LLMs', 'RAG',
  'Computer Vision', 'PostgreSQL', 'Redis', 'Docker'
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
          
          {/* ── Left Column: The Engineer's Narrative ── */}
          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="lg:col-span-7 space-y-7"
          >
            <motion.div variants={childFade} className="space-y-3">
              <span className="text-xs font-mono text-blue-400 font-semibold uppercase tracking-wider">
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
              Then I started exploring <strong className="text-blue-400 font-semibold">AI</strong>. But I didn&apos;t want to build another trivial chatbot or thin API wrapper. I wanted to understand what happens when AI becomes an integrated component of a larger, distributed system.
            </motion.p>

            {/* Driving Questions — Clean Typographical Sequence */}
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
                      className="p-3.5 rounded-xl bg-bg-card border border-border-primary hover:border-blue-500/30 transition-all flex items-start gap-3.5 group"
                    >
                      <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
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

            <motion.p variants={childFade} className="text-base text-text-secondary leading-relaxed font-body">
              Those questions turned into real projects. Today, I build systems that combine <strong className="text-text-primary font-semibold">AI with robust software engineering</strong> — from multi-agent workflows and backend APIs to computer vision inspection pipelines.
            </motion.p>

            {/* Editorial Comparison: Surface vs Systems */}
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
                <div className="p-4 rounded-xl bg-blue-500/[0.05] border border-blue-500/25 space-y-1">
                  <span className="font-mono text-[10px] text-blue-400 uppercase tracking-wider block font-semibold">
                    The Engineering Question
                  </span>
                  <p className="font-body text-sm font-semibold text-text-primary">
                    &ldquo;How do I make the whole system keep working when things go wrong?&rdquo;
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Mindset Quote */}
            <motion.div
              variants={childFade}
              className="border-l-2 border-blue-500 pl-5 py-2.5 bg-gradient-to-r from-blue-500/10 via-blue-500/[0.02] to-transparent rounded-r-xl"
            >
              <span className="font-mono text-[11px] uppercase tracking-widest text-blue-400 font-bold block mb-1">
                Engineering Principle
              </span>
              <p className="font-display font-semibold text-text-primary text-base sm:text-lg">
                &ldquo;Build systems that actually hold up — especially when the individual pieces want to fail.&rdquo;
              </p>
            </motion.div>
          </motion.div>

          {/* ── Right Column: Operating Console & Status Ledger ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 rounded-3xl border border-border-primary bg-bg-card p-6 sm:p-8 space-y-7 shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
          >
            {/* 1. Availability Status Banner */}
            <div className="space-y-3 pb-6 border-b border-border-primary">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 font-mono text-xs font-semibold">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                </span>
                <span>Open to Internships</span>
              </div>
              <h4 className="font-display text-lg font-bold text-text-primary">
                Let&apos;s Build Something Useful.
              </h4>
              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                Currently open to <strong className="text-text-primary font-medium">AI &amp; Backend Engineering internships</strong> where I can work on real products, solve challenging systems problems, and learn from engineers building at scale.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {['AI Engineering', 'Backend Systems', 'Agentic Workflows', 'Computer Vision'].map((field) => (
                  <span
                    key={field}
                    className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-blue-500/10 text-blue-300 border border-blue-500/20"
                  >
                    {field}
                  </span>
                ))}
              </div>
              <div className="pt-2">
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors group"
                >
                  <span>Start a conversation</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* 2. Honest Engineering Philosophy */}
            <div className="space-y-2 pb-6 border-b border-border-primary">
              <div className="flex items-center gap-2 text-xs font-mono text-blue-400 font-semibold uppercase tracking-wider">
                <Terminal className="w-3.5 h-3.5" />
                <span>Operating Philosophy</span>
              </div>
              <h5 className="font-display text-sm font-semibold text-text-primary">
                Honest Engineering Over Demos
              </h5>
              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                I care more about working systems than flashy prototypes. Good engineering means understanding the domain, knowing model limitations, designing fallback paths, and being transparent about what a system can actually do in production.
              </p>
            </div>

            {/* 3. Active Radar & Core Thesis */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Active Focus Radar</span>
              </div>
              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                Exploring the convergence of <strong className="text-text-primary font-medium">Backend Engineering + Generative AI + Agentic AI</strong>.
              </p>
              <div className="flex flex-wrap gap-1.5">
                {currentStack.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-[11px] px-2 py-0.5 rounded bg-bg-secondary border border-border-primary text-text-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="pt-2 border-t border-border-primary">
                <p className="font-display text-xs text-text-secondary italic">
                  &ldquo;My goal isn&apos;t just to call an LLM API. I want to build resilient systems around AI.&rdquo;
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
