'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Bot, Eye, Server, Globe,
  ArrowRight, Sparkles, Terminal
} from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';

const stagger = {
  initial: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const childFade = {
  initial: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const whatIBuild = [
  {
    icon: Bot,
    title: 'Autonomous AI Agents',
    description:
      'I build multi-agent systems where different agents handle different tasks and work together through structured workflows.',
    tag: 'LangGraph · Multi-Agent',
    accentColor: '#4ade80',
  },
  {
    icon: Eye,
    title: 'Computer Vision',
    description:
      'I work with image processing, embeddings, object detection, OCR, and visual evidence to solve practical inspection problems.',
    tag: 'OpenCV · YOLO · CLIP',
    accentColor: '#38bdf8',
  },
  {
    icon: Server,
    title: 'Resilient Backends',
    description:
      'I build backend systems and APIs with a focus on clean architecture, reliability, error handling, and real-world failure cases.',
    tag: 'FastAPI · PostgreSQL · Redis',
    accentColor: '#f97316',
  },
  {
    icon: Globe,
    title: 'Real-World Problems',
    description:
      'I enjoy working on problems where AI has to deal with actual data, users, tools, and system constraints — not just generate a response.',
    tag: 'Applied AI · Production',
    accentColor: '#a855f7',
  },
];

const questions = [
  {
    icon: '🤖',
    question: 'What happens when multiple AI agents need to work together?',
  },
  {
    icon: '🔍',
    question: 'How can a system make decisions using evidence from different sources?',
  },
  {
    icon: '👁️',
    question: 'What if AI has to inspect something physical and detect what’s wrong?',
  },
];

const currentStack = [
  'Python', 'FastAPI', 'LangGraph', 'LLMs', 'RAG',
  'Computer Vision', 'PostgreSQL', 'Redis', 'Docker'
];

export default function About() {
  return (
    <section id="about" className="section-padding w-full" aria-labelledby="about-heading">
      <div className="container-custom space-y-20 lg:space-y-24">

        {/* ── 1. Top Section: Story + Side Panel ── */}
        <div>
          <SectionHeading
            id="about-heading"
            title="About Me"
            subtitle="The person behind the commits."
          />

          <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_380px] gap-12 lg:gap-16 items-start">
            
            {/* Main Story Narrative */}
            <motion.div
              variants={stagger}
              initial="initial"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="space-y-6"
            >
              <motion.div variants={childFade} className="space-y-3">
                <span className="font-mono text-xs font-semibold text-teal-400 tracking-wider uppercase">
                  How It Started
                </span>
                <p className="body-lg text-text-primary font-medium leading-relaxed">
                  I learn best by building.
                </p>
                <p className="body-lg text-text-secondary leading-relaxed">
                  Instead of only reading about a technology, I like to open my editor, build something with it, break it, fix it, and understand how it works. That habit has shaped the way I approach engineering.
                </p>
              </motion.div>

              <motion.p variants={childFade} className="body-lg text-text-secondary leading-relaxed">
                I started with <strong className="text-text-primary font-medium">backend development</strong>, where I found myself more interested in what happens behind the screen — designing APIs, working with databases, handling errors, and making systems reliable.
              </motion.p>

              <motion.p variants={childFade} className="body-lg text-text-secondary leading-relaxed">
                Then I started exploring <strong className="text-teal-400 font-medium">AI</strong>. But I didn&apos;t want to build just another chatbot or simple AI wrapper. I wanted to understand what happens when AI becomes part of a larger system.
              </motion.p>

              {/* Spark Questions */}
              <motion.div variants={childFade} className="space-y-3 pt-2">
                <span className="font-mono text-xs text-text-muted tracking-wider uppercase block">
                  That led me to questions like:
                </span>
                <div className="grid grid-cols-1 gap-2.5">
                  {questions.map((q, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3.5 p-3.5 rounded-xl bg-bg-card/70 border border-border-primary hover:border-teal-500/30 transition-all duration-200"
                    >
                      <span className="text-lg shrink-0">{q.icon}</span>
                      <p className="body font-medium text-text-primary text-sm sm:text-base">
                        {q.question}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.p variants={childFade} className="body-lg text-text-secondary leading-relaxed">
                Those questions turned into projects. Today, I build systems that combine <strong className="text-text-primary font-medium">AI with real engineering</strong> — from multi-agent workflows and backend APIs to computer vision pipelines and reliable services.
              </motion.p>

              <motion.div variants={childFade} className="space-y-3">
                <p className="body-lg text-text-secondary leading-relaxed">
                  Because real-world systems are messy: models can produce unexpected results, APIs can fail, networks can go down, and rate limits can hit at the worst possible time.
                </p>

                {/* Contrast Box */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-4 rounded-xl bg-bg-card/40 border border-border-primary text-text-muted">
                    <span className="font-mono text-[11px] text-text-muted uppercase tracking-wider block mb-1">
                      Surface Question
                    </span>
                    <p className="font-mono text-sm text-text-secondary italic">
                      &ldquo;How do I make the AI work?&rdquo;
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-teal-500/5 border border-teal-500/30 text-teal-300">
                    <span className="font-mono text-[11px] text-teal-400 uppercase tracking-wider block mb-1">
                      Engineering Question
                    </span>
                    <p className="font-mono text-sm font-semibold text-text-primary">
                      &ldquo;How do I make the whole system keep working when things go wrong?&rdquo;
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Mindset Callout */}
              <motion.div
                variants={childFade}
                className="border-l-2 border-teal-400 pl-5 py-3 bg-gradient-to-r from-teal-500/10 via-teal-500/5 to-transparent rounded-r-xl"
              >
                <span className="font-mono text-xs uppercase tracking-widest text-teal-400 font-bold block mb-1">
                  My Mindset
                </span>
                <p className="body-lg font-bold text-text-primary text-base sm:text-lg">
                  &ldquo;Build things that actually hold up — especially when the pieces want to fail.&rdquo;
                </p>
              </motion.div>
            </motion.div>

            {/* Side Panel: How I Think, Currently, Open To Work */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-6"
            >
              {/* How I Think */}
              <div className="card p-5 relative overflow-hidden group hover:border-teal-500/30 transition-colors">
                <div className="flex items-center gap-2 mb-3">
                  <Terminal className="w-4 h-4 text-teal-400" />
                  <span className="font-mono text-xs font-semibold tracking-wider uppercase text-teal-400">
                    How I Think
                  </span>
                </div>
                <h4 className="font-display text-base font-bold text-text-primary mb-2">
                  Honest Engineering
                </h4>
                <p className="body-sm text-text-secondary leading-relaxed">
                  I care more about <strong className="text-text-primary font-medium">working systems than flashy demos</strong>. Good engineering means understanding the problem, knowing the limitations, handling failures, and being honest about what a system can actually do.
                </p>
              </div>

              {/* Currently Working On */}
              <div className="card p-5 relative overflow-hidden group hover:border-teal-500/30 transition-colors">
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="w-4 h-4 text-teal-400" />
                  <span className="font-mono text-xs font-semibold tracking-wider uppercase text-teal-400">
                    Currently
                  </span>
                </div>
                <h4 className="font-display text-base font-bold text-text-primary mb-2">
                  What I&apos;m Working On
                </h4>
                <p className="body-sm text-text-secondary mb-3 leading-relaxed">
                  Right now, I&apos;m exploring the intersection of <strong className="text-text-primary font-medium">Backend Engineering + Generative AI + Agentic AI</strong>.
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {currentStack.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[10px] px-2 py-0.5 rounded bg-bg-primary/80 border border-border-primary text-text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="pt-3 border-t border-border-primary">
                  <p className="font-display text-sm font-semibold text-teal-300">
                    &ldquo;My goal isn&apos;t just to use AI. I want to build systems around AI.&rdquo;
                  </p>
                </div>
              </div>

              {/* Open to Work */}
              <div className="relative overflow-hidden rounded-xl border border-teal-500/30 bg-gradient-to-br from-teal-500/10 via-bg-card to-bg-card p-5 shadow-lg">
                <div className="absolute top-0 right-0 w-24 h-24 bg-teal-500/10 rounded-full blur-2xl -translate-y-8 translate-x-8" />
                <div className="relative space-y-3">
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-[11px] font-medium">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                    </span>
                    Open to Work
                  </div>
                  <h4 className="font-display text-base font-bold text-text-primary">
                    Let&apos;s Build Something Useful.
                  </h4>
                  <p className="body-sm text-text-secondary leading-relaxed">
                    I&apos;m currently open to <strong className="text-text-primary font-medium">AI / Backend Engineering internships</strong> where I can work on real products, solve challenging engineering problems, and keep learning from people who build at scale.
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {['AI Engineering', 'Backend Engineering', 'Generative AI', 'Agentic AI'].map((field) => (
                      <span key={field} className="font-mono text-[10px] px-2 py-0.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-300">
                        {field}
                      </span>
                    ))}
                  </div>
                  <Link
                    href="#contact"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-teal-400 hover:text-teal-300 transition-colors pt-2 group"
                  >
                    <span>Let&apos;s talk</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>

            </motion.div>

          </div>
        </div>

        {/* ── 2. What I Build ── */}
        <div>
          <div className="mb-8">
            <span className="font-mono text-xs font-semibold text-teal-400 tracking-widest uppercase block mb-1">
              Specialization
            </span>
            <h3 className="heading-2 font-display text-text-primary">
              What I Build
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {whatIBuild.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="card p-6 relative overflow-hidden group hover:border-teal-500/40 transition-all duration-300"
                >
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center border transition-colors"
                      style={{
                        backgroundColor: `${item.accentColor}12`,
                        borderColor: `${item.accentColor}30`,
                        color: item.accentColor,
                      }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-[10px] px-2.5 py-1 rounded-md bg-bg-primary border border-border-primary text-text-muted uppercase tracking-wider">
                      {item.tag}
                    </span>
                  </div>
                  <h4 className="font-display text-lg font-bold text-text-primary mb-2">
                    {item.title}
                  </h4>
                  <p className="body-sm text-text-secondary leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
