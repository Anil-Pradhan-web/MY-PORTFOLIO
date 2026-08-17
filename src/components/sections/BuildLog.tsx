'use client';

import { motion } from 'framer-motion';
import { Trophy, Code2, Cloud, Award, ExternalLink } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';

/* ─── Data ─── */

const highlights = [
  {
    label: 'Dell FutureMinds AI Hackathon 2026',
    result: '2nd Runner-Up',
    detail: 'Top 3 among 8,000+ participants nationwide — Grand Finale presentation at Dell Bengaluru office.',
    icon: Trophy,
    metrics: [
      { key: 'Rank', value: 'Top 3' },
      { key: 'Participants', value: '8K+' },
    ],
  },
  {
    label: 'FlowFinance × Techfest IIT Bombay',
    result: 'Round 2 Qualifier',
    detail: 'Designed a GTM strategy deck — platform analysis, customer personas, and acquisition/retention framework — with real customer outreach.',
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
    text: 'Built and deployed AI products in Microsoft AI Dev Days, Amazon Nova AI Challenge, and Google Solution Challenge.',
  },
  {
    icon: Code2,
    title: 'GFG 160 Days of Code',
    text: '100+ day coding streak — recognized with a GFG reward for consistency.',
  },
  {
    icon: Cloud,
    title: 'Google Cloud Arcade',
    text: '75+ points through hands-on labs, earning official rewards from Google Cloud.',
  },
];

const certifications = [
  { name: 'Career Essentials in Software Development', org: 'Microsoft' },
  { name: 'Python Essentials 2', org: 'Cisco' },
  { name: 'AI Fundamentals', org: 'IBM' },
  { name: 'Claude 101', org: 'Anthropic' },
  { name: 'Python (Basic) & Java (Basic)', org: 'HackerRank' },
  { name: 'SQL (Basic) & Problem Solving', org: 'HackerRank' },
];

/* ─── Animation presets ─── */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 } as const,
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true } as const,
  transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] },
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
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
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

        {/* ── Certifications ── */}
        <motion.div {...fadeUp(0.32)}>
          <div className="flex items-center gap-2.5 mb-5">
            <Award className="w-4 h-4 text-teal-400" />
            <h3 className="font-display text-base font-bold text-text-primary">Certifications</h3>
            <span className="ml-auto font-mono text-[0.65rem] text-text-muted">{certifications.length} verified</span>
          </div>

          <div className="rounded-xl border border-border-primary bg-bg-card overflow-hidden divide-y divide-border-primary">
            {certifications.map((cert, idx) => (
              <motion.div
                key={idx}
                {...fadeUp(0.36 + idx * 0.04)}
                className="flex items-center justify-between px-5 py-3.5 hover:bg-bg-card-hover transition-colors duration-150"
              >
                <span className="text-sm text-text-primary font-medium">{cert.name}</span>
                <span className="font-mono text-[0.65rem] text-text-muted uppercase tracking-wider flex-shrink-0 ml-4">
                  {cert.org}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}