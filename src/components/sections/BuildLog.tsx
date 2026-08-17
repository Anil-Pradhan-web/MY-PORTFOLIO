'use client';

import { motion } from 'framer-motion';
import { Trophy, Code2, Cloud, Award, Medal, Zap, ExternalLink } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';

/* ─── Data ─── */

const heroAchievement = {
  title: '2nd Runner-Up — Dell FutureMinds AI Hackathon 2026',
  description:
    'Secured a Top 3 finish among 8,000+ participants nationwide, advancing to the Grand Finale and presenting our solution to senior Dell leaders and corporate employees at the Dell Bengaluru office.',
  stats: [
    { label: 'Participants', value: '8,000+' },
    { label: 'Finish', value: 'Top 3' },
    { label: 'Scope', value: 'Nationwide' },
  ],
};

const competitionItems = [
  {
    title: 'FlowFinance × Techfest IIT Bombay',
    badge: 'Round 2 Qualifier',
    description:
      'Selected for Round 2 (Real-World Business Development) — designed a comprehensive GTM strategy deck (platform analysis, customer personas, acquisition/retention framework) for FlowFinance (AI SMB fintech platform) with real customer outreach.',
  },
  {
    title: 'International Hackathons',
    badge: '3 Events',
    description:
      'Built and deployed AI products in three international hackathons — Microsoft AI Dev Days, Amazon Nova AI Challenge, and Google Solution Challenge.',
  },
];

const dsaItem = {
  title: 'GeeksforGeeks 160 Days of Code',
  streak: '100+',
  description:
    "Maintained a 100+ day coding streak on GeeksforGeeks' 160 Days of Code Challenge, solving DSA problems daily — recognized with a GFG reward (T-shirt) for consistency.",
};

const cloudItem = {
  title: 'Google Cloud Arcade',
  points: '75+',
  description:
    'Completed 75+ Google Cloud Arcade points through hands-on labs on Google Cloud services, earning official rewards from Google Cloud.',
};

const certifications = [
  { name: 'Career Essentials in Software Development', issuer: 'Microsoft', color: '#00A4EF' },
  { name: 'Python Essentials 2', issuer: 'Cisco', color: '#049FD9' },
  { name: 'AI Fundamentals', issuer: 'IBM', color: '#0F62FE' },
  { name: 'Claude 101', issuer: 'Anthropic', color: '#D4A574' },
  { name: 'Python (Basic) & Java (Basic)', issuer: 'HackerRank', color: '#00EA64' },
  { name: 'SQL (Basic) & Problem Solving', issuer: 'HackerRank', color: '#00EA64' },
];

/* ─── Components ─── */

function HeroCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative overflow-hidden rounded-2xl border border-amber-500/20 bg-gradient-to-br from-amber-500/5 via-bg-card to-bg-card p-8"
    >
      {/* Glow */}
      <div className="absolute -top-20 -right-20 w-60 h-60 bg-amber-500/8 rounded-full blur-[80px] pointer-events-none" aria-hidden="true" />

      <div className="relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 mb-5">
          <Trophy className="w-3.5 h-3.5 text-amber-400" />
          <span className="font-mono text-[0.7rem] font-semibold text-amber-400 uppercase tracking-wider">
            Featured Achievement
          </span>
        </div>

        <h3 className="font-display text-xl md:text-2xl font-bold text-text-primary mb-3 leading-tight">
          {heroAchievement.title}
        </h3>
        <p className="body-sm text-text-secondary max-w-2xl leading-relaxed mb-6">
          {heroAchievement.description}
        </p>

        {/* Stats Row */}
        <div className="flex flex-wrap gap-6">
          {heroAchievement.stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="font-display text-2xl font-bold text-amber-400">{stat.value}</span>
              <span className="font-mono text-[0.65rem] text-text-muted uppercase tracking-wider mt-0.5">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function CompetitionCard({ item, index }: { item: typeof competitionItems[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group p-6 rounded-xl border border-border-primary bg-bg-card hover:border-violet-500/30 transition-all duration-300"
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex items-center gap-2.5">
          <div className="p-1.5 rounded-lg bg-violet-500/10 border border-violet-500/20">
            <Medal className="w-3.5 h-3.5 text-violet-400" />
          </div>
          <h4 className="font-display text-base font-bold text-text-primary group-hover:text-violet-400 transition-colors">
            {item.title}
          </h4>
        </div>
        <span className="flex-shrink-0 px-2.5 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 font-mono text-[0.6rem] text-violet-400 uppercase tracking-wider whitespace-nowrap">
          {item.badge}
        </span>
      </div>
      <p className="body-sm text-text-secondary leading-relaxed">{item.description}</p>
    </motion.div>
  );
}

function DSACard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="group p-6 rounded-xl border border-border-primary bg-bg-card hover:border-emerald-500/30 transition-all duration-300"
    >
      <div className="flex items-start gap-4">
        {/* Streak Counter */}
        <div className="flex-shrink-0 flex flex-col items-center justify-center w-16 h-16 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
          <span className="font-display text-xl font-bold text-emerald-400 leading-none">{dsaItem.streak}</span>
          <span className="font-mono text-[0.5rem] text-emerald-400/70 uppercase tracking-wider mt-0.5">days</span>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2">
            <Code2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
            <h4 className="font-display text-base font-bold text-text-primary group-hover:text-emerald-400 transition-colors">
              {dsaItem.title}
            </h4>
          </div>
          <p className="body-sm text-text-secondary leading-relaxed">{dsaItem.description}</p>
        </div>
      </div>
    </motion.div>
  );
}

function CloudCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="group p-6 rounded-xl border border-border-primary bg-bg-card hover:border-sky-500/30 transition-all duration-300"
    >
      <div className="flex items-start gap-4">
        {/* Points Counter */}
        <div className="flex-shrink-0 flex flex-col items-center justify-center w-16 h-16 rounded-xl bg-sky-500/10 border border-sky-500/20">
          <span className="font-display text-xl font-bold text-sky-400 leading-none">{cloudItem.points}</span>
          <span className="font-mono text-[0.5rem] text-sky-400/70 uppercase tracking-wider mt-0.5">points</span>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2">
            <Cloud className="w-3.5 h-3.5 text-sky-400 flex-shrink-0" />
            <h4 className="font-display text-base font-bold text-text-primary group-hover:text-sky-400 transition-colors">
              {cloudItem.title}
            </h4>
          </div>
          <p className="body-sm text-text-secondary leading-relaxed">{cloudItem.description}</p>
        </div>
      </div>
    </motion.div>
  );
}

function CertificationsGrid() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Section Label */}
      <div className="flex items-center gap-2.5 mb-5">
        <div className="p-2 rounded-lg bg-teal-500/10 border border-teal-500/20">
          <Award className="w-4 h-4 text-teal-400" />
        </div>
        <h3 className="font-display text-lg font-bold text-text-primary">Certifications</h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {certifications.map((cert, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.4 + idx * 0.06, ease: [0.22, 1, 0.36, 1] }}
            className="group flex items-center gap-3 p-4 rounded-xl border border-border-primary bg-bg-card hover:border-border-secondary transition-all duration-200"
          >
            {/* Issuer Dot */}
            <div
              className="w-2 h-2 rounded-full flex-shrink-0"
              style={{ backgroundColor: cert.color }}
              aria-hidden="true"
            />
            <div className="flex-1 min-w-0">
              <p className="font-body text-sm font-medium text-text-primary truncate">{cert.name}</p>
              <p className="font-mono text-[0.65rem] uppercase tracking-wider mt-0.5" style={{ color: cert.color }}>
                {cert.issuer}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

/* ─── Main Section ─── */

export default function BuildLog() {
  return (
    <section id="build-log" className="section-padding w-full border-t border-border-primary" aria-labelledby="build-log-heading">
      <div className="container-custom">
        <SectionHeading
          id="build-log-heading"
          title="Achievements & Certifications"
          subtitle="Recognition and milestones along the way."
        />

        <div className="space-y-8">
          {/* 1. Hero Achievement */}
          <HeroCard />

          {/* 2. Competitions Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {competitionItems.map((item, idx) => (
              <CompetitionCard key={idx} item={item} index={idx} />
            ))}
          </div>

          {/* 3. DSA + Cloud Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <DSACard />
            <CloudCard />
          </div>

          {/* 4. Certifications */}
          <CertificationsGrid />
        </div>
      </div>
    </section>
  );
}