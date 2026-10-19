'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  Trophy,
  BrainCircuit,
  Layers,
  Flame,
  Code2,
  Cpu,
  ArrowRight,
  ArrowLeft,
  GraduationCap,
  ShieldCheck,
  Zap,
  CheckCircle2,
  Play,
  Pause,
} from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { cn } from '@/lib/utils';

interface Milestone {
  id: string;
  step: string;
  period: string;
  title: string;
  icon: typeof Code2;
  badge: string;
  accentColor: string;
  story: string;
  breakthrough: string;
  stack: string[];
}

const milestones: Milestone[] = [
  {
    id: 'origin',
    step: '01',
    period: 'Year 01 · 2024',
    title: 'From Zero to My First "Hello World"',
    icon: Code2,
    badge: 'Day 0',
    accentColor: '#38bdf8',
    story:
      'Stepped into college with zero coding experience and a genuine fear of VS Code. The moment my first Java program compiled and printed to the terminal, a switch flipped—sparking daily DSA grind and OOP fundamentals.',
    breakthrough: 'Earned every line of code from absolute scratch—no shortcuts, zero ego.',
    stack: ['Java', 'OOP', 'Data Structures', 'Algorithms'],
  },
  {
    id: 'backend',
    step: '02',
    period: 'Year 02 · 2025',
    title: 'The Pivot to Backend Architecture',
    icon: Layers,
    badge: 'Curiosity',
    accentColor: '#f5a623',
    story:
      'Built a tutorial Netflix clone and immediately became curious about the invisible machinery powering it—APIs, database schemas, authentication, and throughput. That pulled me straight into Python and FastAPI.',
    breakthrough: 'Realized frontend delivers pixels, but backend commands the real power and reliability.',
    stack: ['Python', 'FastAPI', 'PostgreSQL', 'REST APIs', 'SQLAlchemy'],
  },
  {
    id: 'ai-systems',
    step: '03',
    period: 'Year 02 · 2025–2026',
    title: 'Beyond Prompt Wrappers: Autonomous AI',
    icon: BrainCircuit,
    badge: 'First AI Build',
    accentColor: '#00e89d',
    story:
      'Refused to build shallow chatbot wrappers. Built SIA (personal assistant) and AI Career Mentor during Microsoft AI Dev Days, wiring multi-agent LangGraph DAGs with real-time WebSocket state machines.',
    breakthrough: 'Engineered ~60% latency reduction by orchestrating parallel compiled agent nodes.',
    stack: ['LangGraph', 'Multi-Agent DAGs', 'WebSockets', 'Groq', 'Vector RAG'],
  },
  {
    id: 'hackathon',
    step: '04',
    period: 'Summer 2026',
    title: 'Dell FutureMinds National Grand Podium',
    icon: Trophy,
    badge: 'Top 6 / 8,000+',
    accentColor: '#f5a623',
    story:
      'Shortlisted from 8,000+ national candidates into the Top 6 Grand Finalists. Pitching our inspection architecture live before senior engineering juries in Bengaluru showed me how production systems survive scrutiny.',
    breakthrough: 'Demos are easy—production engineering is about handling edge cases and zero downtime.',
    stack: ['Live Defense', 'System Design', 'Benchmarking', 'Edge Testing'],
  },
  {
    id: 'frontier',
    step: '05',
    period: 'Present · 2026',
    title: 'VisionForge AI: Industrial Hardware AI',
    icon: Cpu,
    badge: 'Present Focus',
    accentColor: '#00e89d',
    story:
      'Engineering VisionForge AI to detect counterfeit PCB electronics in under 4 seconds using fine-tuned YOLO11n models, FAISS vector indexing, and autonomous verification agents backed by 200+ tests.',
    breakthrough: 'Sub-4-second end-to-end latency with cryptographic audit verification.',
    stack: ['YOLO11n', 'FAISS', 'OpenCV', 'LangGraph', 'SSE Telemetry'],
  },
];

const engineeringDna = [
  {
    icon: Flame,
    title: 'Zero Ego & First Principles',
    detail: 'Starting with no prior background taught me to debug fearlessly and learn rapidly without ego.',
    color: '#38bdf8',
  },
  {
    icon: Zap,
    title: 'Resilient Pipeline Design',
    detail: 'Obsessed with asynchronous throughput, fail-safe LLM routing, and hermetic automated test suites.',
    color: '#00e89d',
  },
  {
    icon: GraduationCap,
    title: 'Academic & Practical Rigor',
    detail: 'Third-year CSE at ITER SOA with 8.93 CGPA, balancing deep computer science theory with shipped products.',
    color: '#f5a623',
  },
];

export default function About() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);

  // Auto-play timeline ticker if user chooses
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % milestones.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const activeMilestone = milestones[activeIndex];
  const IconComponent = activeMilestone.icon;

  const nextMilestone = () => {
    setActiveIndex((prev) => (prev + 1) % milestones.length);
  };

  const prevMilestone = () => {
    setActiveIndex((prev) => (prev - 1 + milestones.length) % milestones.length);
  };

  return (
    <section id="about" className="section-padding w-full" aria-labelledby="about-heading">
      <div className="container-custom">
        <SectionHeading
          id="about-heading"
          eyebrow="Origin & Journey"
          title="From Hello World to National Finalist"
          subtitle="How an undergraduate who started from absolute zero in first year developed an obsession with autonomous AI and resilient backend systems."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mt-12">
          
          {/* ── Left Column: Concise Narrative & Engineering DNA ── */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            {/* The Hook */}
            <div className="p-6 sm:p-7 rounded-3xl bg-bg-card border border-border-primary space-y-4 shadow-[0_15px_35px_rgba(0,0,0,0.3)]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#00e89d] animate-pulse" />
                <span className="text-xs font-mono text-[#00e89d] font-semibold tracking-wider uppercase">
                  The Builder Mindset
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-display font-bold text-text-primary tracking-tight leading-snug">
                I didn&apos;t start as a prodigy. I started by being terrified of VS Code.
              </h3>

              <p className="text-sm text-text-secondary leading-relaxed font-body">
                I&apos;m <strong className="text-text-primary font-medium">Anil Pradhan</strong>, a 3rd-year CS student at ITER SOA. When I wrote my first line of code in college, I knew nothing about software.
              </p>

              <p className="text-sm text-text-secondary leading-relaxed font-body">
                Every skill I have today was forged through that loop: <strong className="text-[#00e89d]">Build, break, debug, rebuild.</strong> That curiosity grew from basic clones into high-throughput backends and multi-agent AI systems that solve genuine problems.
              </p>

              <div className="pt-2 border-t border-border-primary flex items-center justify-between text-xs font-mono text-text-muted">
                <span>ITER SOA University</span>
                <span className="text-[#00e89d] font-semibold">CGPA: 8.93</span>
              </div>
            </div>

            {/* Core Pillars / DNA */}
            <div className="space-y-3">
              <span className="text-[11px] font-mono text-text-muted uppercase tracking-wider block">
                Engineering DNA &amp; Principles
              </span>
              <div className="grid grid-cols-1 gap-2.5">
                {engineeringDna.map((pillar, pIdx) => {
                  const PillarIcon = pillar.icon;
                  return (
                    <div
                      key={pIdx}
                      className="p-3.5 rounded-2xl bg-bg-secondary border border-border-primary hover:border-border-secondary transition-colors flex items-start gap-3.5 group"
                    >
                      <div
                        className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0 mt-0.5 border"
                        style={{
                          backgroundColor: `${pillar.color}15`,
                          borderColor: `${pillar.color}30`,
                          color: pillar.color,
                        }}
                      >
                        <PillarIcon className="w-4 h-4" />
                      </div>
                      <div className="space-y-0.5">
                        <h4 className="text-xs sm:text-sm font-display font-semibold text-text-primary group-hover:text-[#00e89d] transition-colors">
                          {pillar.title}
                        </h4>
                        <p className="text-xs text-text-muted leading-relaxed font-body">
                          {pillar.detail}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ── Right Column: Interactive Journey Stepper ── */}
          <div className="lg:col-span-7 rounded-3xl border border-border-primary bg-bg-card p-6 sm:p-8 flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
            
            {/* Top Controls & Stepper Pills */}
            <div className="space-y-4 pb-6 border-b border-border-primary">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#00e89d]" />
                  <span className="text-xs font-mono font-semibold text-text-primary uppercase tracking-wide">
                    Interactive Evolution Timeline
                  </span>
                </div>

                {/* Auto Play / Pause Toggle */}
                <button
                  type="button"
                  onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                  className={cn(
                    'text-[11px] font-mono px-2.5 py-1 rounded-lg border transition-all flex items-center gap-1.5 cursor-pointer',
                    isAutoPlaying
                      ? 'bg-[#00e89d]/15 text-[#00e89d] border-[#00e89d]/30'
                      : 'bg-bg-secondary text-text-muted border-border-primary hover:text-text-primary'
                  )}
                  title={isAutoPlaying ? 'Pause timeline auto-play' : 'Auto-play milestones'}
                >
                  {isAutoPlaying ? (
                    <>
                      <Pause className="w-3 h-3" />
                      <span>Pause</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3 h-3" />
                      <span>Auto Play</span>
                    </>
                  )}
                </button>
              </div>

              {/* Step Selector Pills (01 to 05) */}
              <div className="grid grid-cols-5 gap-1.5 sm:gap-2">
                {milestones.map((m, mIdx) => {
                  const isActive = mIdx === activeIndex;
                  return (
                    <button
                      key={m.id}
                      type="button"
                      onClick={() => {
                        setActiveIndex(mIdx);
                        setIsAutoPlaying(false);
                      }}
                      className={cn(
                        'flex flex-col items-center justify-center py-2 sm:py-2.5 px-1 rounded-xl font-mono transition-all border cursor-pointer group',
                        isActive
                          ? 'bg-[#00e89d]/15 border-[#00e89d]/50 text-[#00e89d] shadow-[0_0_15px_rgba(0,232,157,0.15)]'
                          : 'bg-bg-secondary border-border-primary text-text-muted hover:border-border-secondary hover:text-text-primary'
                      )}
                    >
                      <span className="text-xs sm:text-sm font-bold">
                        {m.step}
                      </span>
                      <span className="text-[9px] sm:text-[10px] truncate max-w-full opacity-80 hidden sm:inline">
                        {m.badge}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Dynamic Milestone Card with Smooth Transition */}
            <div className="py-6 min-h-[280px] flex flex-col justify-between">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeMilestone.id}
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -12 }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                  className="space-y-4"
                >
                  {/* Phase & Badge */}
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <div className="flex items-center gap-2">
                      <div
                        className="w-7 h-7 rounded-lg flex items-center justify-center border"
                        style={{
                          backgroundColor: `${activeMilestone.accentColor}15`,
                          borderColor: `${activeMilestone.accentColor}35`,
                          color: activeMilestone.accentColor,
                        }}
                      >
                        <IconComponent className="w-3.5 h-3.5" />
                      </div>
                      <span className="font-mono text-xs font-semibold text-text-muted">
                        {activeMilestone.period}
                      </span>
                    </div>

                    <span
                      className="font-mono text-[10px] font-semibold px-2.5 py-0.5 rounded-full border"
                      style={{
                        backgroundColor: `${activeMilestone.accentColor}12`,
                        borderColor: `${activeMilestone.accentColor}30`,
                        color: activeMilestone.accentColor,
                      }}
                    >
                      {activeMilestone.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h4 className="text-xl sm:text-2xl font-display font-bold text-text-primary leading-snug">
                    {activeMilestone.title}
                  </h4>

                  {/* Punchy Story */}
                  <p className="text-sm sm:text-base text-text-secondary leading-relaxed font-body">
                    {activeMilestone.story}
                  </p>

                  {/* Key Breakthrough Callout */}
                  <div className="p-3.5 rounded-xl bg-bg-secondary border border-border-primary flex items-start gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-[#00e89d] shrink-0 mt-0.5" />
                    <p className="text-xs text-text-primary/90 font-mono leading-relaxed">
                      <span className="text-[#00e89d] font-semibold">Key Takeaway: </span>
                      {activeMilestone.breakthrough}
                    </p>
                  </div>

                  {/* Tech Stack Unlocked */}
                  <div className="space-y-1.5 pt-1">
                    <span className="text-[10px] font-mono text-text-muted uppercase tracking-wider block">
                      Skills &amp; Technologies Unlocked
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {activeMilestone.stack.map((tech) => (
                        <span
                          key={tech}
                          className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/[0.04] text-text-primary border border-white/[0.08]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Bottom Navigation & Progress Bar */}
            <div className="pt-4 border-t border-border-primary space-y-3">
              {/* Thin Progress Track */}
              <div className="w-full h-1 bg-bg-secondary rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-[#00e89d]"
                  initial={false}
                  animate={{ width: `${((activeIndex + 1) / milestones.length) * 100}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              {/* Prev / Next Buttons */}
              <div className="flex items-center justify-between text-xs font-mono">
                <button
                  type="button"
                  onClick={prevMilestone}
                  className="btn-secondary py-1.5 px-3 text-xs inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Previous</span>
                </button>

                <span className="text-text-muted font-mono">
                  Milestone <span className="text-[#00e89d] font-bold">{activeIndex + 1}</span> of {milestones.length}
                </span>

                <button
                  type="button"
                  onClick={nextMilestone}
                  className="btn-primary py-1.5 px-3 text-xs inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Next</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
