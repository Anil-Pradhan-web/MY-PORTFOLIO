'use client';

import { motion } from 'framer-motion';
import { FaJava, FaPython, FaDocker } from 'react-icons/fa';
import {
  SiFastapi, SiSqlite,
  SiRedis, SiPostgresql, SiOpencv,
  SiGit, SiLinux, SiPostman, SiJavascript,
} from 'react-icons/si';
import {
  BrainCircuit, Cpu, GitBranch, Box, ShieldCheck,
  Database, Sparkles, ScanText, Target,
  ShieldAlert, Lock
} from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';

const technicalDomains = [
  {
    domain: 'AI & Computer Vision',
    summary: 'Autonomous multi-agent workflows, prompt engineering, RAG, and industrial computer vision',
    accentColor: '#00e89d',
    skills: [
      { name: 'LangGraph', icon: GitBranch, color: '#4ade80' },
      { name: 'Multi-Agent Systems', icon: BrainCircuit, color: '#f97316' },
      { name: 'RAG Architecture', icon: BrainCircuit, color: '#38bdf8' },
      { name: 'Prompt Engineering', icon: Sparkles, color: '#a855f7' },
      { name: 'LLM Integration', icon: ShieldCheck, color: '#0ea5e9' },
      { name: 'OpenCV', icon: SiOpencv, color: '#5c3ee8' },
      { name: 'YOLO11n', icon: Target, color: '#f59e0b' },
      { name: 'OCR', icon: ScanText, color: '#10b981' },
      { name: 'Anomaly Detection (SSIM)', icon: ShieldAlert, color: '#ef4444' },
    ],
  },
  {
    domain: 'Backend & Databases',
    summary: 'High-throughput async APIs, data contracts, JWT security, and multi-database persistence',
    accentColor: '#38bdf8',
    skills: [
      { name: 'FastAPI', icon: SiFastapi, color: '#009688' },
      { name: 'REST APIs', icon: GitBranch, color: '#0ea5e9' },
      { name: 'SQLAlchemy', icon: Cpu, color: '#d71f00' },
      { name: 'JWT/RBAC', icon: Lock, color: '#f43f5e' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
      { name: 'Redis', icon: SiRedis, color: '#dc382d' },
      { name: 'ChromaDB', icon: Box, color: '#f97316' },
      { name: 'SQLite', icon: SiSqlite, color: '#64b5f6' },
    ],
  },
];

const coreFoundations = [
  {
    title: 'Languages',
    skills: [
      { name: 'Python', icon: FaPython, color: '#f89820' },
      { name: 'Java', icon: FaJava, color: '#f89820' },
      { name: 'JavaScript', icon: SiJavascript, color: '#f7df1e' },
      { name: 'SQL', icon: Database, color: '#0ea5e9' },
    ],
  },
  {
    title: 'Core CS Concepts',
    skills: [
      { name: 'Data Structures & Algorithms', icon: Cpu, color: '#0ea5e9' },
      { name: 'OOP (Object-Oriented Programming)', icon: Box, color: '#ec4899' },
      { name: 'Operating Systems', icon: Cpu, color: '#f59e0b' },
      { name: 'DBMS (Database Management)', icon: Database, color: '#8b5cf6' },
      { name: 'Computer Networks', icon: GitBranch, color: '#4ade80' },
    ],
  },
  {
    title: 'Developer Tools',
    skills: [
      { name: 'Git & GitHub', icon: SiGit, color: '#f05032' },
      { name: 'Docker', icon: FaDocker, color: '#2496ed' },
      { name: 'Linux Commands', icon: SiLinux, color: '#facc15' },
      { name: 'Postman', icon: SiPostman, color: '#ff6c37' },
    ],
  },
];

export default function TechStack() {
  return (
    <section id="tech-stack" className="section-padding w-full" aria-labelledby="tech-stack-heading">
      <div className="container-custom">
        <SectionHeading
          id="tech-stack-heading"
          eyebrow="Technical Arsenal"
          title="Skills &amp; Capabilities"
          subtitle="A domain-driven overview of the technologies, frameworks, and system practices I leverage."
        />

        {/* ── Domain Architecture Clusters (2 Main Deep Domains) ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {technicalDomains.map((domain, idx) => (
            <motion.div
              key={domain.domain}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.45, delay: idx * 0.08, ease: [0.2, 0, 0, 1] as const }}
              className="p-6 md:p-7 rounded-2xl border border-border-primary bg-bg-card hover:border-border-secondary transition-all hover:-translate-y-1 duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-3 pb-3 border-b border-border-primary">
                  <div>
                    <h3 className="font-display text-lg font-semibold text-text-primary">
                      {domain.domain}
                    </h3>
                    <p className="body-xs text-text-muted mt-0.5">
                      {domain.summary}
                    </p>
                  </div>
                  <span
                    className="w-2.5 h-2.5 rounded-full mt-1.5 flex-shrink-0 shadow-sm"
                    style={{ backgroundColor: domain.accentColor }}
                    aria-hidden="true"
                  />
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {domain.skills.map((skill, sIdx) => {
                    const Icon = skill.icon;
                    return (
                      <div
                        key={sIdx}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-bg-secondary border border-border-primary hover:border-border-secondary transition-all group/item hover:bg-bg-card shadow-sm"
                      >
                        <Icon
                          className="w-4 h-4 flex-shrink-0 transition-transform group-hover/item:scale-110"
                          style={{ color: skill.color }}
                          aria-hidden="true"
                        />
                        <span className="font-mono text-xs text-text-primary group-hover/item:text-white transition-colors">
                          {skill.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Core Foundations & Tools Row (3-Column Clean Grid) ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {coreFoundations.map((group, gIdx) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 + gIdx * 0.06, ease: [0.2, 0, 0, 1] as const }}
              className="p-5 rounded-xl border border-border-primary bg-bg-card flex flex-col"
            >
              <h4 className="font-mono text-xs font-semibold text-text-primary uppercase tracking-wider mb-3 pb-2 border-b border-border-primary/50">
                {group.title}
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {group.skills.map((s, sIdx) => {
                  const Icon = s.icon;
                  return (
                    <span
                      key={sIdx}
                      className="inline-flex items-center gap-1.5 text-xs text-text-primary px-2.5 py-1.5 rounded-md bg-bg-primary/80 border border-border-primary/60 font-body hover:border-border-secondary transition-colors"
                    >
                      <Icon className="w-3.5 h-3.5 flex-shrink-0" style={{ color: s.color }} aria-hidden="true" />
                      <span>{s.name}</span>
                    </span>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}