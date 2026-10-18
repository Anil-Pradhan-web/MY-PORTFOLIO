'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles,
  Terminal,
  Trophy,
  BrainCircuit,
  Layers,
  Flame,
  CheckCircle2,
  Code2,
  Cpu,
} from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { cn } from '@/lib/utils';

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

const journeyMilestones = [
  {
    phase: 'Year 01 · The Spark',
    title: 'Starting from Zero & My First "Hello World"',
    icon: Code2,
    badge: 'Day 0',
    accentColor: '#38BDF8',
    story:
      "I didn't grow up coding. When I stepped into ITER SOA in my first year, I didn't even know what programming truly meant—even opening VS Code felt alien. The day my first 'Hello World' compiled and printed to the terminal, a switch flipped. I threw myself into Java, OOP fundamentals, and daily DSA practice.",
  },
  {
    phase: 'Year 02 · The Pivot',
    title: 'From YouTube Netflix Clone to Backend Obsession',
    icon: Layers,
    badge: 'Curiosity',
    accentColor: '#f5a623',
    story:
      'My first project was a tutorial Netflix clone. Seeing pixels on screen was satisfying, but it made me curious about the invisible machinery behind it—the APIs, databases, authentication, and throughput. That curiosity pulled me straight into backend engineering and Python.',
  },
  {
    phase: 'Year 02 · The Big Question',
    title: '"How do we bring AI into normal applications to make them truly useful?"',
    icon: BrainCircuit,
    badge: 'First AI Build',
    accentColor: '#00e89d',
    story:
      'I didn’t want to build shallow prompt wrappers. That question drove me to build SIA (my first personal AI assistant), followed by AI Career Mentor during the Microsoft AI Dev Days Hackathon, integrating multi-agent DAGs and real-time WebSockets.',
  },
  {
    phase: 'Summer 2026 · The Crucible',
    title: 'National Hackathon Podium & Industry Scrutiny',
    icon: Trophy,
    badge: 'Top 6 / 8,000+',
    accentColor: '#f5a623',
    story:
      'Shortlisted from 8,000+ national candidates through rigorous coding rounds, our team advanced into the Top 6 Grand Finalists at Dell FutureMinds. Pitching our inspection architecture live before senior engineering juries and tech leaders in Bengaluru showed me firsthand how real-world engineering teams design for reliability, tight deadlines, and edge-case failure modes.',
  },
  {
    phase: 'Today · The Frontier',
    title: 'Industrial Hardware AI & Production Engineering',
    icon: Cpu,
    badge: 'Present',
    accentColor: '#00e89d',
    story:
      'Today, I engineer VisionForge AI—combining fine-tuned YOLO11n, FAISS blueprint indexing, and LangGraph multi-agent pipelines to detect counterfeit PCB hardware in under 4 seconds. Ready to bring this relentless zero-to-one drive to production software teams.',
  },
];

export default function About() {
  const [activeTab, setActiveTab] = useState<'journey_code' | 'lessons'>('journey_code');

  return (
    <section id="about" className="section-padding w-full" aria-labelledby="about-heading">
      <div className="container-custom">
        <SectionHeading
          id="about-heading"
          eyebrow="Origin & Journey"
          title="From Hello World to National Finalist"
          subtitle="How an undergraduate who started from absolute zero in first year developed a deep obsession with scalable backend systems and autonomous AI."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start mt-12">

          {/* ── Left Column: Personal Narrative & Journey Cards ── */}
          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="lg:col-span-7 space-y-8"
          >
            {/* The Hook Narrative */}
            <motion.div variants={childFade} className="space-y-4">
              <span className="text-xs font-mono text-[#00e89d] font-semibold uppercase tracking-wider flex items-center gap-2">
                <Flame className="w-3.5 h-3.5" />
                <span>The Honest Truth</span>
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-text-primary tracking-tight leading-snug">
                I didn&apos;t start as a prodigy. I started by being terrified of VS Code.
              </h3>
              <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-body">
                I&apos;m <strong className="text-text-primary font-semibold">Anil Pradhan</strong>, a Third-year Computer Science Engineering student at ITER, SOA University. When I walked into college, I didn&apos;t know what a function was, let alone a neural network or a distributed system.
              </p>
              <p className="text-base text-text-secondary leading-relaxed font-body">
                Every line of code I know today was earned through that loop: <strong className="text-[#00e89d]">Build. Break. Fix. Learn. Repeat.</strong> What started with a simple YouTube tutorial Netflix clone gradually transformed into a burning curiosity for what happens behind the scenes—the backend plumbing, the data contracts, and ultimately, autonomous AI systems that solve real problems.
              </p>
            </motion.div>

            {/* Visual Step-by-Step Evolution Cards */}
            <motion.div variants={childFade} className="space-y-4 pt-2">
              <span className="text-xs font-mono text-text-muted uppercase tracking-wider font-semibold block">
                Chronological Milestones · Zero to One
              </span>

              <div className="space-y-3.5">
                {journeyMilestones.map((m, idx) => {
                  const Icon = m.icon;
                  return (
                    <div
                      key={idx}
                      className="p-4 sm:p-5 rounded-2xl bg-bg-card border border-border-primary hover:border-[#00e89d]/30 transition-all hover:-translate-y-0.5 duration-300 flex items-start gap-4 group"
                    >
                      <div
                        className="p-2.5 rounded-xl shrink-0 mt-0.5 transition-transform group-hover:scale-110"
                        style={{
                          backgroundColor: `${m.accentColor}15`,
                          borderColor: `${m.accentColor}35`,
                          color: m.accentColor,
                        }}
                      >
                        <Icon className="w-4 h-4" />
                      </div>

                      <div className="flex-1 min-w-0 space-y-1.5">
                        <div className="flex items-center justify-between gap-2 flex-wrap">
                          <span className="font-mono text-[11px] text-text-muted">
                            {m.phase}
                          </span>
                          <span
                            className="font-mono text-[10px] font-semibold px-2 py-0.5 rounded border"
                            style={{
                              backgroundColor: `${m.accentColor}12`,
                              borderColor: `${m.accentColor}30`,
                              color: m.accentColor,
                            }}
                          >
                            {m.badge}
                          </span>
                        </div>

                        <h4 className="font-display text-sm sm:text-base font-bold text-text-primary group-hover:text-[#00e89d] transition-colors leading-snug">
                          {m.title}
                        </h4>

                        <p className="text-xs sm:text-sm text-text-secondary leading-relaxed font-body">
                          {m.story}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* The Big Takeaway Banner */}
            <motion.div
              variants={childFade}
              className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-[#00e89d]/10 via-bg-card to-[#f5a623]/10 border border-[#00e89d]/30 space-y-3"
            >
              <div className="flex items-center gap-2 text-xs font-mono text-[#00e89d] font-semibold uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-[#00e89d]" />
                <span>The Core Conviction</span>
              </div>
              <p className="font-display font-semibold text-text-primary text-base sm:text-lg leading-relaxed">
                &ldquo;For me, the biggest achievement is not just the lines of code I&apos;ve shipped—it&apos;s how far I&apos;ve traveled: from struggling with my very first Hello World program in VS Code to architecting autonomous multi-agent pipelines and real-world computer vision systems.&rdquo;
              </p>
              <p className="text-xs sm:text-sm text-text-secondary font-body">
                Today, I bring that exact hunger, discipline, and humility to every engineering challenge I tackle.
              </p>
            </motion.div>
          </motion.div>

          {/* ── Right Column: Interactive Journey Telemetry Terminal ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.2, 0, 0, 1] as const }}
            className="lg:col-span-5 rounded-2xl border border-border-primary bg-bg-card overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.4)] sticky top-24"
          >
            {/* Terminal Header & Tab Bar */}
            <div className="flex items-center justify-between px-4 sm:px-5 py-3 border-b border-border-primary bg-bg-primary/60">
              <div className="flex items-center gap-2 text-xs font-mono text-text-muted">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                </div>
                <span className="hidden sm:inline">anil@journey-engine</span>
              </div>

              {/* Tabs */}
              <div className="flex items-center gap-1 bg-bg-secondary p-1 rounded-lg border border-border-primary/80">
                <button
                  type="button"
                  onClick={() => setActiveTab('journey_code')}
                  className={cn(
                    'text-[10px] sm:text-[11px] font-mono px-2.5 py-1 rounded transition-colors flex items-center gap-1.5 cursor-pointer',
                    activeTab === 'journey_code'
                      ? 'bg-[#00e89d]/15 text-[#00e89d] font-semibold border border-[#00e89d]/30'
                      : 'text-text-muted hover:text-text-primary'
                  )}
                >
                  <Terminal className="w-3 h-3" />
                  <span>journey.py</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('lessons')}
                  className={cn(
                    'text-[10px] sm:text-[11px] font-mono px-2.5 py-1 rounded transition-colors flex items-center gap-1.5 cursor-pointer',
                    activeTab === 'lessons'
                      ? 'bg-[#00e89d]/15 text-[#00e89d] font-semibold border border-[#00e89d]/30'
                      : 'text-text-muted hover:text-text-primary'
                  )}
                >
                  <CheckCircle2 className="w-3 h-3" />
                  <span>learnings.log</span>
                </button>
              </div>
            </div>

            {/* Terminal Body */}
            {activeTab === 'journey_code' ? (
              <pre className="font-mono text-[11px] sm:text-xs text-text-secondary p-5 sm:p-6 overflow-x-auto leading-relaxed">
                <code>
                  <span className="text-[#0dfbca]"># ── from zero to national finalist ──</span>
                  {'\n\n'}
                  <span className="text-[#f89820] font-semibold">class</span><span className="text-text-primary"> AnilPradhan</span><span className="text-text-muted">:</span>
                  {'\n'}
                  {'    '}
                  <span className="text-text-muted">college</span> <span className="text-text-muted">=</span> <span className="text-[#c08497]">&quot;ITER, SOA University&quot;</span>
                  {'\n'}
                  {'    '}
                  <span className="text-text-muted">year</span> <span className="text-text-muted">=</span> <span className="text-[#f5a623]">&quot;3rd Year CSE (CGPA: 8.93)&quot;</span>
                  {'\n'}
                  {'    '}
                  <span className="text-text-muted">day_zero</span> <span className="text-text-muted">=</span> <span className="text-[#c08497]">&quot;knew 0 lines of code; feared VS Code&quot;</span>
                  {'\n\n'}
                  <span className="text-[#f89820] font-semibold">    def</span><span className="text-text-primary"> evolution_arc</span><span className="text-text-muted">(self):</span>
                  {'\n'}
                  {'        '}
                  <span className="text-[#0dfbca]">return</span> <span className="text-text-muted">[</span>
                  {'\n'}
                  {'            '}
                  <span className="text-text-secondary">{'{ &quot;step&quot;: 1, &quot;event&quot;: &quot;Ran first Hello World in Java&quot; },'}</span>
                  {'\n'}
                  {'            '}
                  <span className="text-text-secondary">{'{ &quot;step&quot;: 2, &quot;event&quot;: &quot;Built YouTube Netflix clone -> caught backend bug&quot; },'}</span>
                  {'\n'}
                  {'            '}
                  <span className="text-text-secondary">{'{ &quot;step&quot;: 3, &quot;event&quot;: &quot;Asked: How can AI make real apps useful?&quot; },'}</span>
                  {'\n'}
                  {'            '}
                  <span className="text-text-secondary">{'{ &quot;step&quot;: 4, &quot;event&quot;: &quot;Shipped SIA & AI Career Mentor (MSFT Dev Days)&quot; },'}</span>
                  {'\n'}
                  {'            '}
                  <span className="text-[#00e89d] font-semibold">{'{ &quot;step&quot;: 5, &quot;event&quot;: &quot;National Grand Finalist (Top 6 / 8,000+ Teams)&quot; },'}</span>
                  {'\n'}
                  {'            '}
                  <span className="text-[#f5a623] font-semibold">{'{ &quot;step&quot;: 6, &quot;event&quot;: &quot;Engineering VisionForge AI (PCB Inspection)&quot; }'}</span>
                  {'\n'}
                  {'        '}
                  <span className="text-text-muted">]</span>
                  {'\n\n'}
                  <span className="text-[#f89820] font-semibold">    def</span><span className="text-text-primary"> current_mindset</span><span className="text-text-muted">(self):</span>
                  {'\n'}
                  {'        '}
                  <span className="text-[#0dfbca]">return</span> <span className="text-[#c08497]">&quot;Humility of a beginner, grit of a builder.&quot;</span>
                </code>
              </pre>
            ) : (
              <div className="p-5 sm:p-6 space-y-4 font-mono text-xs">
                <div className="p-3 rounded-xl bg-bg-secondary border border-border-primary space-y-1">
                  <span className="text-[10px] text-[#00e89d] font-bold uppercase tracking-wider">Lesson 01 · Starting From Scratch</span>
                  <p className="text-text-secondary leading-relaxed font-body text-xs">
                    Not knowing something isn&apos;t a disadvantage. Being honest about knowing zero meant I had no ego—I asked dumb questions, broke code freely, and rebuilt from first principles.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-bg-secondary border border-border-primary space-y-1">
                  <span className="text-[10px] text-[#f5a623] font-bold uppercase tracking-wider">Lesson 02 · Competing Under Industry Scrutiny</span>
                  <p className="text-text-secondary leading-relaxed font-body text-xs">
                    Pitching live before senior industry leadership and veteran engineering juries taught me that demos are easy, but real engineering is about handling edge cases, failure states, and tight deadlines.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-bg-secondary border border-border-primary space-y-1">
                  <span className="text-[10px] text-[#38BDF8] font-bold uppercase tracking-wider">Lesson 03 · Useful AI vs Wrapper AI</span>
                  <p className="text-text-secondary leading-relaxed font-body text-xs">
                    AI only creates real value when it is deeply wired into domain pipelines—like catching counterfeit electronics via computer vision or automating engineering task queues.
                  </p>
                </div>
              </div>
            )}

            {/* Terminal Status Bar */}
            <div className="flex items-center justify-between px-5 py-3 border-t border-border-primary bg-bg-primary/60 text-[11px] font-mono">
              <div className="flex items-center gap-2">
                <span className="text-[#00e89d] font-semibold">&gt;</span>
                <span className="text-text-muted">trajectory: exponential</span>
              </div>
              <div className="flex items-center gap-2 text-[#00e89d] font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00e89d] animate-pulse" />
                <span>Ready for Impact</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
