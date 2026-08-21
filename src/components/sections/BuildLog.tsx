'use client';

import { motion } from 'framer-motion';
import { Trophy, Code2, Cloud, Award, CheckCircle2 } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';

/* ─── Data ─── */

const highlights = [
  {
    label: 'Dell FutureMinds AI Hackathon 2026',
    result: '2nd Runner-Up',
    detail: 'Secured a Top 3 finish among 8,000+ participants nationwide, advancing to the Grand Finale and presenting our solution to senior Dell leaders and corporate employees at the Dell Bengaluru office.',
    icon: Trophy,
    metrics: [
      { key: 'Rank', value: 'Top 3' },
      { key: 'Participants', value: '8K+' },
    ],
  },
  {
    label: 'FlowFinance × Techfest IIT Bombay',
    result: 'Round 2 Qualifier',
    detail: 'Selected for Round 2 (Real-World Business Development) — FlowFinance × Techfest IIT Bombay Growth Challenge: Designed a GTM strategy deck (platform analysis, customer personas, acquisition/retention framework) for FlowFinance (AI SMB fintech platform) with real customer outreach.',
    icon: Trophy,
    metrics: [
      { key: 'Round', value: '2 / 3' },
      { key: 'Scope', value: 'National' },
    ],
  },
];

const milestones = [
  {
    icon: Trophy,
    title: 'International Hackathons',
    text: 'Built and deployed AI products in three international hackathons — Microsoft AI Dev Days, Amazon Nova AI Challenge, and Google Solution Challenge.',
  },
  {
    icon: Code2,
    title: 'GFG 160 Days of Code',
    text: "Maintained a 100+ day coding streak on GeeksforGeeks' 160 Days of Code Challenge, solving DSA problems daily — recognized with a GFG reward (T-shirt) for consistency.",
  },
  {
    icon: Cloud,
    title: 'Google Cloud Arcade',
    text: 'Completed 75+ Google Cloud Arcade points through hands-on labs on Google Cloud services, earning official rewards from Google Cloud.',
  },
];

const certificationGroups = [
  {
    group: 'Software Engineering & Industry Simulations',
    items: [
      { name: 'Software Engineering Job Simulation', org: 'Wells Fargo (Forage)', badge: 'Industry Sim' },
      { name: 'Python Essentials 2', org: 'Cisco Networking Academy', badge: 'Core Python' },
    ],
  },
  {
    group: 'AI, LLMs & Applied Machine Learning',
    items: [
      { name: 'AI Fundamentals', org: 'IBM', badge: 'AI & GenAI' },
      { name: 'Claude 101 & AI Fluency', org: 'Anthropic', badge: 'LLM Systems' },
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

/* ─── Animation presets ─── */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] as const },
});

/* ─── Component ─── */

export default function BuildLog() {
  return (
    <section id="build-log" className="section-padding w-full border-t border-border-primary" aria-labelledby="build-log-heading">
      <div className="container-custom">
        <SectionHeading
          id="build-log-heading"
          title="Achievements & Certifications"
          subtitle="Recognition and milestones along the way."
        />

        {/* ── Highlight Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                {...fadeUp(idx * 0.08)}
                className="group relative rounded-xl border border-border-primary bg-bg-card p-6 hover:border-border-secondary transition-colors duration-200"
              >
                {/* Top row: icon + label + result badge */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="p-2 rounded-lg bg-teal-500/10 border border-teal-500/20 flex-shrink-0">
                      <Icon className="w-4 h-4 text-teal-400" />
                    </div>
                    <h3 className="font-display text-base font-bold text-text-primary truncate group-hover:text-teal-400 transition-colors">
                      {item.label}
                    </h3>
                  </div>
                  <span className="flex-shrink-0 px-2.5 py-1 rounded-md bg-teal-500/10 border border-teal-500/20 font-mono text-[0.65rem] font-semibold text-teal-400 uppercase tracking-wider whitespace-nowrap">
                    {item.result}
                  </span>
                </div>

                {/* Description */}
                <p className="text-text-secondary text-sm leading-relaxed mb-5">
                  {item.detail}
                </p>

                {/* Inline metrics */}
                <div className="flex gap-4">
                  {item.metrics.map((m, mIdx) => (
                    <div key={mIdx} className="flex items-baseline gap-2">
                      <span className="font-mono text-[0.6rem] text-text-muted uppercase tracking-wider">{m.key}</span>
                      <span className="font-display text-lg font-bold text-teal-400">{m.value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ── Milestones Row ── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          {milestones.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                {...fadeUp(0.16 + idx * 0.06)}
                className="group rounded-xl border border-border-primary bg-bg-card p-5 hover:border-border-secondary transition-colors duration-200"
              >
                <div className="flex items-center gap-2.5 mb-3">
                  <Icon className="w-4 h-4 text-teal-400 flex-shrink-0" />
                  <h4 className="font-display text-sm font-bold text-text-primary group-hover:text-teal-400 transition-colors">
                    {item.title}
                  </h4>
                </div>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* ── Grouped Certifications ── */}
        <motion.div {...fadeUp(0.32)}>
          <div className="flex items-center justify-between gap-2.5 mb-6">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-lg bg-teal-500/10 border border-teal-500/20">
                <Award className="w-4 h-4 text-teal-400" />
              </div>
              <h3 className="font-display text-lg font-bold text-text-primary">Verified Credentials &amp; Certifications</h3>
            </div>
            <span className="font-mono text-[0.7rem] text-text-muted">High-Signal Portfolio Track</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {certificationGroups.map((group, gIdx) => (
              <motion.div
                key={gIdx}
                {...fadeUp(0.36 + gIdx * 0.06)}
                className="rounded-2xl border border-border-primary bg-bg-card p-5 flex flex-col justify-between hover:border-border-secondary transition-colors duration-200"
              >
                <div>
                  <h4 className="font-mono text-xs font-bold text-teal-400/90 uppercase tracking-wider mb-4 pb-2.5 border-b border-border-primary">
                    {group.group}
                  </h4>
                  <div className="space-y-3.5">
                    {group.items.map((cert, cIdx) => (
                      <div key={cIdx} className="group/cert">
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <span className="text-sm text-text-primary font-medium group-hover/cert:text-teal-300 transition-colors">
                            {cert.name}
                          </span>
                          <span className="font-mono text-[0.6rem] px-1.5 py-0.5 rounded bg-bg-primary border border-border-primary text-text-muted flex-shrink-0">
                            {cert.badge}
                          </span>
                        </div>
                        <p className="font-mono text-[0.7rem] text-text-secondary">
                          {cert.org}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}