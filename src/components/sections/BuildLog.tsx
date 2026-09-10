'use client';

import { motion } from 'framer-motion';
import { Trophy, Award, Flame, CheckCircle2 } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';

const dellMetrics = [
  { label: 'Final Placement', value: 'Top 3 National', detail: '2nd Runner-Up Podium' },
  { label: 'Screening Pool', value: '8,000+', detail: 'HackerRank National Round' },
  { label: 'Final Selection', value: 'Top 6 Finalists', detail: 'Selected for Grand Finale' },
  { label: 'Executive Stage', value: 'Dell HQ, BLR', detail: 'Live Jury & Leadership Pitch' },
];

const competitiveMilestones = [
  {
    title: 'FlowFinance × Techfest IIT Bombay',
    category: 'Growth & Real-World Fintech',
    badge: 'Round 2 / 3 Qualifier',
    detail:
      'Selected for Round 2 (Real-World Business Development) — FlowFinance × Techfest IIT Bombay Growth Challenge: Designed a comprehensive GTM strategy deck (platform analysis, customer personas, acquisition/retention framework) for FlowFinance (AI SMB fintech platform) with real customer outreach.',
    highlight: 'National Level Competition',
    accentColor: '#38bdf8',
  },
  {
    title: '4× AI Hackathon Builder',
    category: 'End-to-End Applications',
    badge: '4 Applications Shipped',
    detail:
      'Built and shipped functional AI applications across 4 hackathons — Dell FutureMinds 2026, Microsoft AI Dev Days, Amazon Nova AI Challenge, and Google Solution Challenge, implementing agentic workflows and computer vision pipelines.',
    highlight: 'Rapid Prototyping & Systems',
    accentColor: '#818cf8',
  },
  {
    title: 'GeeksforGeeks 160 Days of Code',
    category: 'Algorithms & Problem Solving',
    badge: '100+ Day Daily Streak',
    detail:
      "Maintained a continuous 100+ day coding streak on GeeksforGeeks' 160 Days of Code Challenge, solving data structures and algorithm problems daily — recognized with an official GFG reward for engineering consistency.",
    highlight: 'DSA Consistency & Streak',
    accentColor: '#34d399',
  },
  {
    title: 'Google Cloud Arcade Labs',
    category: 'Cloud Infrastructure & Labs',
    badge: '75+ Points Earned',
    detail:
      'Completed 75+ Google Cloud Arcade points through hands-on labs and skill badges on Google Cloud services, practicing cloud deployment, networking, and security — earning official rewards from Google Cloud.',
    highlight: 'GCP Services Hands-on',
    accentColor: '#fbbf24',
  },
];

const certificationGroups = [
  {
    group: 'Industry Simulations & Engineering',
    items: [
      { name: 'Software Engineering Job Simulation', org: 'Wells Fargo (Forage)', badge: 'Industry Sim' },
      { name: 'Python Essentials 2', org: 'Cisco Networking Academy', badge: 'Core Python' },
    ],
  },
  {
    group: 'AI, LLMs & Applied Machine Learning',
    items: [
      { name: 'Claude 101 & AI Fluency', org: 'Anthropic', badge: 'LLM Systems' },
      { name: 'AI Fundamentals', org: 'IBM', badge: 'AI & GenAI' },
    ],
  },
  {
    group: 'Problem Solving & Core CS',
    items: [
      { name: 'Problem Solving (Basic) & SQL (Basic)', org: 'HackerRank', badge: 'DSA & SQL' },
      { name: 'Python (Basic) & Java (Basic)', org: 'HackerRank', badge: 'Languages' },
    ],
  },
];

export default function BuildLog() {
  return (
    <section id="build-log" className="section-padding w-full" aria-labelledby="build-log-heading">
      <div className="container-custom space-y-12">
        <SectionHeading
          id="build-log-heading"
          eyebrow="Podium & Credentials"
          title="Achievements &amp; Certifications"
          subtitle="National hackathon recognitions, competitive milestones, and verified industry credentials."
        />

        {/* ── 1. The National Podium Spotlight (Dell FutureMinds 2026) ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl border border-amber-500/35 bg-gradient-to-br from-amber-500/[0.07] via-bg-card to-bg-card p-6 sm:p-8 lg:p-10 shadow-[0_20px_50px_rgba(245,158,11,0.07)] overflow-hidden"
        >
          {/* Subtle Ambient Radial Glow - GPU accelerated */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-amber-500/10 rounded-full blur-2xl pointer-events-none -mr-16 -mt-16 transform-gpu" />

          {/* Header Row */}
          <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-border-primary">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 font-mono text-xs font-semibold">
                <Trophy className="w-3.5 h-3.5 text-amber-400" />
                <span>National Podium Finish · 3rd Place</span>
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-text-primary tracking-tight">
                Dell FutureMinds AI Hackathon 2026
              </h3>
            </div>

            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-semibold px-3 py-1.5 rounded-lg bg-amber-500/15 text-amber-300 border border-amber-500/30 whitespace-nowrap">
                2nd Runner-Up Overall
              </span>
            </div>
          </div>

          {/* Narrative Story */}
          <div className="relative z-10 py-6">
            <p className="text-base sm:text-lg text-text-primary/90 leading-relaxed font-body max-w-4xl">
              Competed in Dell FutureMinds AI Hackathon 2026, a national competition that began with <strong className="text-text-primary font-semibold">8,000+ participants</strong> attempting a rigorous HackerRank screening round. Selected among the top 370 for an internal hackathon, our 5-member team advanced through a Top 10 shortlist, an executive Zoom pitch round, and finally into the <strong className="text-amber-300 font-semibold">Top 6 Grand Finalists</strong>. We flew to Dell&apos;s Bengaluru headquarters to pitch our hardware inspection solution live before Dell&apos;s senior leadership, engineering jury, and employees — securing <strong className="text-amber-300 font-semibold">3rd position (2nd Runner-Up)</strong> overall.
            </p>
          </div>

          {/* High-Impact Metrics Grid */}
          <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-3.5 pt-6 border-t border-border-primary">
            {dellMetrics.map((m, mIdx) => (
              <div
                key={mIdx}
                className="p-4 rounded-2xl bg-bg-secondary border border-border-primary hover:border-amber-500/40 transition-colors"
              >
                <span className="font-mono text-[10px] text-text-muted uppercase tracking-wider block mb-1">
                  {m.label}
                </span>
                <span className="font-display text-xl sm:text-2xl font-bold text-amber-300 block">
                  {m.value}
                </span>
                <span className="text-xs text-text-secondary block mt-0.5 font-mono">
                  {m.detail}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── 2. Competitive Track Record & Builder Milestones ── */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 pb-1">
            <Flame className="w-4 h-4 text-blue-400" />
            <h3 className="font-mono text-xs font-semibold text-blue-400 uppercase tracking-wider">
              Competitive Track Record &amp; Builder Milestones
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {competitiveMilestones.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="p-6 rounded-2xl border border-border-primary bg-bg-card hover:border-blue-500/30 transition-all flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <span className="font-mono text-[11px] text-text-muted block">
                        {item.category}
                      </span>
                      <h4 className="font-display text-lg font-bold text-text-primary group-hover:text-blue-300 transition-colors mt-0.5">
                        {item.title}
                      </h4>
                    </div>
                    <span
                      className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded border shrink-0"
                      style={{
                        backgroundColor: `${item.accentColor}12`,
                        borderColor: `${item.accentColor}35`,
                        color: item.accentColor,
                      }}
                    >
                      {item.badge}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                    {item.detail}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-border-primary flex items-center justify-between text-xs font-mono text-text-muted">
                  <span>Scope:</span>
                  <span className="text-text-primary font-medium">{item.highlight}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── 3. Verified Industry Credentials Ledger ── */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 pb-1">
            <Award className="w-4 h-4 text-blue-400" />
            <h3 className="font-mono text-xs font-semibold text-blue-400 uppercase tracking-wider">
              Verified Industry Credentials &amp; Certifications
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {certificationGroups.map((group, gIdx) => (
              <motion.div
                key={gIdx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.1 + gIdx * 0.08 }}
                className="p-6 rounded-2xl border border-border-primary bg-bg-card flex flex-col justify-between hover:border-blue-500/30 transition-all"
              >
                <div>
                  <h4 className="font-mono text-xs font-semibold text-blue-400 uppercase tracking-wider mb-4 pb-3 border-b border-border-primary">
                    {group.group}
                  </h4>
                  <div className="space-y-4">
                    {group.items.map((cert, cIdx) => (
                      <div key={cIdx} className="group/cert">
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <span className="text-sm text-text-primary font-medium group-hover/cert:text-blue-300 transition-colors leading-snug">
                            {cert.name}
                          </span>
                          <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-bg-secondary border border-border-primary text-text-muted shrink-0">
                            {cert.badge}
                          </span>
                        </div>
                        <p className="text-xs text-text-muted flex items-center gap-1.5">
                          <CheckCircle2 className="w-3 h-3 text-blue-400" />
                          <span>{cert.org}</span>
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}