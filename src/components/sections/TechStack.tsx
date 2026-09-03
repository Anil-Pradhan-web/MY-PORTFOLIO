'use client';

import { motion } from 'framer-motion';
import { FaJava, FaPython, FaReact, FaDocker, FaGitAlt } from 'react-icons/fa';
import {
  SiJavascript, SiFastapi, SiSqlite,
  SiGithubactions, SiPostman, SiRedis,
  SiJsonwebtokens, SiPostgresql,
  SiPytorch, SiOpencv, SiPytest,
} from 'react-icons/si';
import { BrainCircuit, Cpu, GitBranch, Box, ShieldCheck, Database, Radio, Sparkles, Clock } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';

const skillCategories = [
  {
    category: 'Languages',
    items: [
      { name: 'Python', icon: FaPython, color: '#3776AB' },
      { name: 'Java', icon: FaJava, color: '#f89820' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'SQL', icon: Database, color: '#0ea5e9' },
    ],
  },
  {
    category: 'Backend & APIs',
    items: [
      { name: 'FastAPI', icon: SiFastapi, color: '#009688' },
      { name: 'REST APIs', icon: GitBranch, color: '#0ea5e9' },
      { name: 'WebSockets', icon: Cpu, color: '#f59e0b' },
      { name: 'SSE', icon: Radio, color: '#00E599' },
      { name: 'SQLAlchemy', icon: Cpu, color: '#D71F00' },
      { name: 'Pydantic', icon: ShieldCheck, color: '#E92063' },
      { name: 'JWT', icon: SiJsonwebtokens, color: '#FB015B' },
      { name: 'OAuth 2.0', icon: ShieldCheck, color: '#4285F4' },
    ],
  },
  {
    category: 'Generative AI',
    items: [
      { name: 'LangGraph', icon: GitBranch, color: '#4ade80' },
      { name: 'Agentic AI', icon: BrainCircuit, color: '#4ade80' },
      { name: 'Multi-Agent Systems', icon: BrainCircuit, color: '#f97316' },
      { name: 'RAG', icon: BrainCircuit, color: '#38bdf8' },
      { name: 'LLM Orchestration', icon: BrainCircuit, color: '#76B900' },
      { name: 'LLM Integration', icon: BrainCircuit, color: '#10B981' },
      { name: 'Semantic Search', icon: BrainCircuit, color: '#FF6B35' },
      { name: 'Vector Search', icon: Box, color: '#8B5CF6' },
      { name: 'Prompt Engineering', icon: Sparkles, color: '#EC4899' },
    ],
  },
  {
    category: 'AI / ML',
    items: [
      { name: 'Computer Vision', icon: BrainCircuit, color: '#8B5CF6' },
      { name: 'CLIP', icon: Box, color: '#FF6F00' },
      { name: 'PyTorch', icon: SiPytorch, color: '#EE4C2C' },
      { name: 'OpenCV', icon: SiOpencv, color: '#5C3EE8' },
      { name: 'EasyOCR', icon: BrainCircuit, color: '#00C853' },
      { name: 'Anomaly Detection', icon: BrainCircuit, color: '#EF4444' },
    ],
  },
  {
    category: 'Databases',
    items: [
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#00E599' },
      { name: 'Redis', icon: SiRedis, color: '#DC382D' },
      { name: 'SQLite', icon: SiSqlite, color: '#64b5f6' },
      { name: 'ChromaDB', icon: Box, color: '#FF6B35' },
    ],
  },
  {
    category: 'DevOps & Testing',
    items: [
      { name: 'Docker', icon: FaDocker, color: '#2496ED' },
      { name: 'Git', icon: FaGitAlt, color: '#F05032' },
      { name: 'GitHub Actions', icon: SiGithubactions, color: '#2088FF' },
      { name: 'Pytest', icon: SiPytest, color: '#0A9EDC' },
      { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
    ],
  },
  {
    category: 'AI & Cloud Platforms',
    items: [
      { name: 'Groq', icon: Cpu, color: '#F55036' },
      { name: 'Google AI Studio', icon: Sparkles, color: '#4285F4' },
      { name: 'OpenRouter', icon: BrainCircuit, color: '#6366F1' },
      { name: 'NVIDIA NIM', icon: Cpu, color: '#76B900' },
    ],
  },
  {
    category: 'Core CS',
    items: [
      { name: 'Data Structures & Algorithms', icon: Cpu, color: '#0ea5e9' },
      { name: 'OOP', icon: Box, color: '#EC4899' },
      { name: 'DBMS', icon: Database, color: '#8B5CF6' },
      { name: 'Operating Systems', icon: Cpu, color: '#f59e0b' },
      { name: 'Computer Networks', icon: GitBranch, color: '#4ade80' },
    ],
  },
  {
    category: 'Soft Skills',
    items: [
      { name: 'Problem-Solving', icon: Cpu, color: '#4ade80' },
      { name: 'Teamwork', icon: GitBranch, color: '#38bdf8' },
      { name: 'Technical Communication', icon: ShieldCheck, color: '#f97316' },
      { name: 'Time Management', icon: Clock, color: '#EC4899' },
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
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