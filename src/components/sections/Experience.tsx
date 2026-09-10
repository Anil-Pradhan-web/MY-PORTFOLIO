'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase, GraduationCap, CheckCircle2 } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { Badge } from '@/components/ui/Badge';

const education = [
  {
    degree: 'Bachelor of Technology (B.Tech), Computer Science & Engineering',
    institution: 'Institute of Technical Education & Research (ITER)',
    university: "Siksha 'O' Anusandhan (SOA) University, Bhubaneswar",
    period: '2024 – 2028',
    score: 'CGPA: 8.93/10',
    status: 'In Progress',
  },
  {
    degree: 'Class XII (PCM with Information Technology)',
    institution: 'Nalanda Vidya Mandir Higher Secondary School',
    university: 'Berhampur, Odisha',
    period: '2022 – 2024',
    score: '85%',
    status: 'Completed',
  },
];

const experiences = [
  {
    role: 'Agentic AI Trainee',
    org: 'CogniForce.AI & ITER, SOA University',
    period: '2026 – Present',
    location: 'Bhubaneswar, India',
    type: 'Intensive Training Program',
    bullets: [
      'Hands-on training in Agentic AI, LLMs, prompt engineering, RAG, tool calling, MCP, and multi-agent orchestration.',
      'Built and experimented with agents using OpenClaw, Multica, AnythingLLM, OpenRouter, Claude Code, OpenCode, and MCP servers, including agent squads and tool integrations.',
    ],
    skills: ['Agentic AI', 'LLMs', 'Prompt Engineering', 'RAG', 'Tool Calling', 'MCP', 'Multi-Agent Orchestration', 'Claude Code', 'OpenClaw'],
    metrics: [
      { label: 'Domain', value: 'Agentic AI' },
      { label: 'Partnership', value: 'CogniForce × ITER' },
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-padding w-full relative" aria-labelledby="experience-heading">
      <div className="container-custom relative z-10">
        <SectionHeading
          id="experience-heading"
          eyebrow="Track Record"
          title="Experience &amp; Education"
          subtitle="Specialized training in autonomous agent systems and rigorous computer science foundations."
        />

        {/* ── Experience Showcase ── */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-6">
            <Briefcase className="w-4 h-4 text-blue-400" />
            <h3 className="font-display text-base font-semibold text-text-primary">
              Engineering &amp; Agentic Training
            </h3>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, idx) => (
              <motion.article
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
                className="p-6 md:p-8 rounded-2xl border border-border-primary bg-bg-card hover:border-blue-500/30 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-5 pb-5 border-b border-border-primary">
                  <div>
                    <div className="flex items-center gap-2.5 flex-wrap mb-1">
                      <h4 className="font-display text-xl font-semibold text-text-primary">
                        {exp.role}
                      </h4>
                      <Badge variant="blue" size="sm">
                        {exp.type}
                      </Badge>
                    </div>
                    <p className="font-body text-sm font-medium text-blue-400">
                      {exp.org}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-2.5 text-xs font-mono text-text-muted">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-bg-secondary border border-border-primary">
                      <Calendar className="w-3 h-3 text-blue-400" />
                      {exp.period}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-bg-secondary border border-border-primary">
                      <MapPin className="w-3 h-3 text-blue-400" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Bullets */}
                <ul className="space-y-3 mb-6" role="list">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-3 body-sm text-text-secondary">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" aria-hidden="true" />
                      <span className="leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Skills Badges */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border-primary">
                  {exp.skills.map((skill, sIdx) => (
                    <Badge key={sIdx} variant="subtle" size="sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* ── Education Grid ── */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <GraduationCap className="w-4 h-4 text-blue-400" />
            <h3 className="font-display text-base font-semibold text-text-primary">
              Academic Foundations
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {education.map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="p-6 rounded-2xl border border-border-primary bg-bg-card hover:border-blue-500/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="font-mono text-xs text-text-muted flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-blue-400" />
                      {edu.period}
                    </span>
                    <Badge variant={edu.score.includes('8.93') ? 'blue' : 'outline'} size="sm">
                      {edu.score}
                    </Badge>
                  </div>

                  <h4 className="font-display text-base font-semibold text-text-primary mb-1 leading-snug">
                    {edu.degree}
                  </h4>
                  <p className="body-sm text-text-secondary font-medium">
                    {edu.institution}
                  </p>
                  {edu.university && (
                    <p className="text-xs text-text-muted mt-1">
                      {edu.university}
                    </p>
                  )}
                </div>

                <div className="mt-5 pt-3 border-t border-border-primary flex items-center justify-between text-xs font-mono text-text-muted">
                  <span>Status:</span>
                  <span className="text-text-secondary font-medium">{edu.status}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}