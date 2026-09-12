'use client';

import { motion } from 'framer-motion';
import {
  Workflow, Search, Eye,
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

          {/* ── Left Column: My Story ── */}
          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="lg:col-span-7 space-y-7"
          >
            <motion.div variants={childFade} className="space-y-3">
              <span className="text-xs font-mono text-[#00e89d] font-semibold uppercase tracking-wider">
                The Short Version
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-text-primary tracking-tight">
                I break things on purpose — so they don&apos;t break on accident.
              </h3>
              <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-body">
                Most people learn by reading docs. I learn by building something, watching it
                fail under real conditions, and figuring out why. That loop — build, break, fix —
                is how every system I&apos;ve shipped actually got solid.
              </p>
            </motion.div>

            <motion.p variants={childFade} className="text-base text-text-secondary leading-relaxed font-body">
              I started in <strong className="text-text-primary font-semibold">backend</strong> —
              APIs, databases, the plumbing nobody sees. Then I wandered into{' '}
              <strong className="text-[#00e89d] font-semibold">AI systems</strong> — not
              prompt wrappers, but pipelines where vision models, reasoning engines, and
              fallback logic have to coexist without falling over.
            </motion.p>

            {/* Driving Questions */}
            <motion.div variants={childFade} className="pt-2 space-y-3">
              <span className="text-xs font-mono text-text-muted uppercase tracking-wider font-semibold block">
                The Questions That Keep Me Up at Night
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
              Those questions turned into real systems. Today I build{' '}
              <strong className="text-text-primary font-semibold">
                AI that actually ships
              </strong>{' '}
              — multi-agent workflows that degrade gracefully, backend APIs that
              don&apos;t blink when traffic spikes, and vision pipelines that catch
              what human eyes miss.
            </motion.div>

            {/* The Engineering Question vs The Surface Question */}
            <motion.div variants={childFade} className="space-y-3">
              <p className="text-sm text-text-muted leading-relaxed">
                Every system looks brilliant in a demo. The real test is what happens
                when the network hiccups, a model returns garbage, or two agents
                deadlock on shared state. That&apos;s the gap I design for.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1 p-3 rounded-xl bg-bg-card border border-border-primary">
                  <span className="text-[10px] font-mono text-text-muted uppercase">The Demo Question</span>
                  <p className="text-xs text-text-secondary italic mt-1">&ldquo;Does the AI give the right answer?&rdquo;</p>
                </div>
                <div className="flex-1 p-3 rounded-xl bg-[#00e89d]/[0.05] border border-[#00e89d]/25">
                  <span className="text-[10px] font-mono text-[#00e89d] uppercase">The Engineering Question</span>
                  <p className="text-xs text-text-primary font-medium mt-1">&ldquo;What happens to the whole system when this one piece fails?&rdquo;</p>
                </div>
              </div>
            </motion.div>

            {/* Engineering Principle Quote */}
            <motion.div
              variants={childFade}
              className="border-l-2 border-[#00e89d] pl-5 py-2.5 bg-gradient-to-r from-[#00e89d]/10 via-[#00e89d]/[0.02] to-transparent rounded-r-xl"
            >
              <span className="font-mono text-[11px] uppercase tracking-widest text-[#00e89d] font-bold block mb-1">
                The Principle
              </span>
              <p className="font-display font-semibold text-text-primary text-base sm:text-lg">
                &ldquo;Ship something small and measured — or don&apos;t ship it at all.
                A system I can&apos;t test is a system I don&apos;t understand.&rdquo;
              </p>
            </motion.div>
          </motion.div>

          {/* ── Right Column: Terminal ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.2, 0, 0, 1] as const }}
            className="lg:col-span-5 rounded-2xl border border-border-primary bg-bg-card overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
          >
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-border-primary bg-bg-primary/50">
              <div className="flex items-center gap-2 text-xs font-mono text-text-muted">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500 opacity-60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500 opacity-60" />
                  <div className="w-3 h-3 rounded-full bg-green-500 opacity-60" />
                </div>
                <span>anil@portfolio</span>
              </div>
              <span className="text-xs font-mono text-[#00e89d] font-semibold">how_i_think.py</span>
            </div>

            {/* Code Display */}
            <pre className="font-mono text-[11px] sm:text-xs text-text-secondary p-5 sm:p-6 overflow-x-auto leading-relaxed">
              <code>
                <span className="text-[#0dfbca]"># ── how I approach every project ──</span>
                {'\n\n'}
                <span className="text-[#f89820] font-semibold">class</span><span className="text-text-secondary"> Engineer:</span>
                {'\n'}
                {'    '}
                <span className="text-[#f89820] font-semibold">def</span><span className="text-text-secondary"> __init__</span><span className="text-text-muted">(</span><span className="text-text-secondary">self</span><span className="text-text-muted">):</span>
                {'\n'}
                {'        '}
                <span className="text-text-secondary">self.bias</span> <span className="text-text-muted">=</span> <span className="text-[#c08497]">&quot;ship small, measure everything&quot;</span>
                {'\n'}
                {'        '}
                <span className="text-text-secondary">self.stack</span> <span className="text-text-muted">=</span> <span className="text-text-muted">[</span><span className="text-[#c08497]">&quot;FastAPI&quot;</span><span className="text-text-muted">,</span> <span className="text-[#c08497]">&quot;LangGraph&quot;</span><span className="text-text-muted">,</span> <span className="text-[#c08497]">&quot;RAG&quot;</span><span className="text-text-muted">]</span>
                {'\n'}
                {'        '}
                <span className="text-text-secondary">self.status</span> <span className="text-text-muted">=</span> <span className="text-[#c08497]">&quot;open to internships&quot;</span>
                {'\n\n'}
                <span className="text-[#f89820] font-semibold">    def</span><span className="text-text-secondary"> build</span><span className="text-text-muted">(</span><span className="text-text-secondary">self, idea</span><span className="text-text-muted">):</span>
                {'\n'}
                {'        '}
                <span className="text-[#0dfbca]">if</span><span className="text-text-secondary"> idea.boring</span><span className="text-text-muted">:</span>
                {'\n'}
                {'            '}
                <span className="text-[#0dfbca]">return</span><span className="text-text-secondary"> self.</span><span className="text-[#00e89d]">ship_it</span><span className="text-text-muted">()</span>
                {'\n'}
                {'        '}
                <span className="text-[#0dfbca]">elif</span><span className="text-text-secondary"> idea.impressive</span><span className="text-text-muted">:</span>
                {'\n'}
                {'            '}
                <span className="text-text-secondary">self.</span><span className="text-[#eb5d2f]">ask_why</span><span className="text-text-muted">()</span>
                {'\n'}
                {'            '}
                <span className="text-[#0dfbca]">return</span><span className="text-text-secondary"> self.</span><span className="text-[#00e89d]">ship_it</span><span className="text-text-muted">()</span>
                {'\n\n'}
                <span className="text-[#f89820] font-semibold">    def</span><span className="text-text-secondary"> handle_failure</span><span className="text-text-muted">(</span><span className="text-text-secondary">self, error</span><span className="text-text-muted">):</span>
                {'\n'}
                {'        '}
                <span className="text-[#0dfbca]">if</span><span className="text-text-secondary"> error.load</span><span className="text-text-muted">:</span>
                {'\n'}
                {'            '}
                <span className="text-text-secondary">self.</span><span className="text-[#00e89d]">add_fallback</span><span className="text-text-muted">()</span>
                {'\n'}
                {'        '}
                <span className="text-[#0dfbca]">elif</span><span className="text-text-secondary"> error.model_drift</span><span className="text-text-muted">:</span>
                {'\n'}
                {'            '}
                <span className="text-text-secondary">self.</span><span className="text-[#00e89d]">rerank</span><span className="text-text-muted">()</span>
                {'\n'}
                {'        '}
                <span className="text-[#0dfbca]">else</span><span className="text-text-muted">:</span>
                {'\n'}
                {'            '}
                <span className="text-[#0dfbca]">raise</span><span className="text-text-secondary"> </span><span className="text-[#eb5d2f]">Exception</span><span className="text-text-muted">(</span><span className="text-[#c08497]">&quot;investigate properly&quot;</span><span className="text-text-muted">)</span>
                {'\n\n'}
                <span className="text-[#0dfbca]">me</span><span className="text-text-muted"> =</span><span className="text-text-secondary"> Engineer</span><span className="text-text-muted">()</span>
                {'\n'}
                <span className="text-[#0dfbca]">me</span><span className="text-text-muted">.</span><span className="text-[#00e89d]">build</span><span className="text-text-muted">(</span><span className="text-text-secondary">idea</span><span className="text-text-muted">)</span>
              </code>
            </pre>

            {/* Terminal Status Bar */}
            <div className="flex items-center justify-between px-5 py-3 border-t border-border-primary bg-bg-primary/50">
              <div className="flex items-center gap-2 text-[11px] font-mono">
                <span className="text-[#00e89d] font-semibold">&gt;</span>
                <span className="text-text-secondary">python how_i_think.py</span>
              </div>
              <div className="flex items-center gap-3 text-[11px] font-mono">
                <span className="text-text-muted">status:</span>
                <span className="text-[#00e89d] font-medium flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00e89d] animate-pulse" />
                  active
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
