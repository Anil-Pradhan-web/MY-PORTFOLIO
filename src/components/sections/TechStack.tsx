'use client';

import { motion } from 'framer-motion';
import { FaJava, FaPython, FaReact, FaDocker, FaGitAlt } from 'react-icons/fa';
import {
  SiTypescript, SiJavascript, SiFastapi, SiSqlite,
  SiVercel, SiRender, SiGithubactions, SiPostman, SiRedis,
  SiSwagger, SiJsonwebtokens, SiPostgresql,
  SiTailwindcss,
} from 'react-icons/si';
import { BrainCircuit, Cpu, GitBranch, Box, Github, ShieldCheck } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';

const skillCategories = [
  {
    category: 'Programming Languages',
    items: [
      { name: 'Python', icon: FaPython, color: '#3776AB' },
      { name: 'Java', icon: FaJava, color: '#f89820' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'SQL', icon: SiPostgresql, color: '#336791' },
    ],
  },
  {
    category: 'Backend & APIs',
    items: [
      { name: 'FastAPI', icon: SiFastapi, color: '#009688' },
      { name: 'REST APIs', icon: GitBranch, color: '#0ea5e9' },
      { name: 'WebSockets', icon: Cpu, color: '#f59e0b' },
      { name: 'LangGraph', icon: GitBranch, color: '#4ade80' },
      { name: 'SQLAlchemy', icon: Cpu, color: '#D71F00' },
      { name: 'Pydantic', icon: ShieldCheck, color: '#E92063' },
    ],
  },
  {
    category: 'Databases',
    items: [
      { name: 'PostgreSQL (Neon)', icon: SiPostgresql, color: '#00E599' },
      { name: 'SQLite', icon: SiSqlite, color: '#64b5f6' },
      { name: 'Redis (Upstash)', icon: SiRedis, color: '#DC382D' },
      { name: 'ChromaDB', icon: Box, color: '#FF6B35' },
    ],
  },
  {
    category: 'DevOps & Cloud',
    items: [
      { name: 'Docker', icon: FaDocker, color: '#2496ED' },
      { name: 'GitHub Actions', icon: SiGithubactions, color: '#2088FF' },
      { name: 'Render', icon: SiRender, color: '#46E3B7' },
      { name: 'Vercel', icon: SiVercel, color: '#ffffff' },
    ],
  },
  {
    category: 'Frontend',
    items: [
      { name: 'React', icon: FaReact, color: '#61DAFB' },
      { name: 'HTML', icon: SiJavascript, color: '#E34F26' },
      { name: 'CSS', icon: SiTailwindcss, color: '#1572B6' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38BDF8' },
    ],
  },
  {
    category: 'Security & Auth',
    items: [
      { name: 'JWT', icon: SiJsonwebtokens, color: '#FB015B' },
      { name: 'Google OAuth 2.0', icon: ShieldCheck, color: '#4285F4' },
      { name: 'bcrypt', icon: ShieldCheck, color: '#94a3b8' },
      { name: 'CORS', icon: ShieldCheck, color: '#22C55E' },
      { name: 'Rate Limiting', icon: Cpu, color: '#0EA5E9' },
    ],
  },
  {
    category: 'Developer Tools',
    items: [
      { name: 'Git', icon: FaGitAlt, color: '#F05032' },
      { name: 'GitHub', icon: Github, color: '#ffffff' },
      { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
      { name: 'Swagger UI', icon: SiSwagger, color: '#85EA2D' },
      { name: 'VS Code', icon: SiTypescript, color: '#007ACC' },
    ],
  },
  {
    category: 'AI / GenAI',
    items: [
      { name: 'Prompt Engineering', icon: BrainCircuit, color: '#a78bfa' },
      { name: 'RAG', icon: BrainCircuit, color: '#38bdf8' },
      { name: 'Agentic AI', icon: BrainCircuit, color: '#4ade80' },
      { name: 'Multi-Agent Systems', icon: BrainCircuit, color: '#f97316' },
      { name: 'Semantic Search', icon: BrainCircuit, color: '#FF6B35' },
      { name: 'LLM Integration', icon: BrainCircuit, color: '#76B900' },
    ],
  },
  {
    category: 'Agentic AI Tools',
    items: [
      { name: 'Claude Code', icon: BrainCircuit, color: '#D4A574' },
      { name: 'AnythingLLM', icon: BrainCircuit, color: '#f59e0b' },
      { name: 'Multica', icon: Box, color: '#FF6B35' },
      { name: 'OpenCode', icon: Cpu, color: '#0ea5e9' },
    ],
  },
];

export default function TechStack() {
  return (
    <section id="tech-stack" className="section-padding w-full" aria-labelledby="tech-stack-heading">
      <div className="container-custom">
        <SectionHeading
          id="tech-stack-heading"
          title="Technical Skills"
          subtitle="Tools and technologies I use to build systems that scale."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: idx * 0.04, ease: [0.22, 1, 0.36, 1] }}
              className="group relative p-5 rounded-2xl border border-border-primary bg-bg-card/50 hover:bg-bg-card hover:border-border-secondary transition-all duration-300"
            >
              {/* Subtle hover glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-500/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" aria-hidden="true" />

              <div className="relative z-10">
                {/* Category header */}
                <div className="mb-4 pb-3 border-b border-border-primary">
                  <h3 className="font-mono text-xs font-bold text-text-primary uppercase tracking-wider">
                    {category.category}
                  </h3>
                  <p className="font-mono text-[10px] text-text-muted mt-1">
                    {category.items.length} skills
                  </p>
                </div>

                {/* Items */}
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item, itemIdx) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={itemIdx}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-bg-primary/60 border border-border-primary/50 hover:border-teal-500/30 hover:bg-teal-500/5 transition-all duration-200 group/item"
                      >
                        <Icon
                          className="w-3.5 h-3.5 flex-shrink-0"
                          style={{ color: item.color }}
                          aria-hidden="true"
                        />
                        <span className="font-mono text-[11px] text-text-secondary group-hover/item:text-text-primary transition-colors">
                          {item.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}