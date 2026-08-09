'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase, ChevronRight, GraduationCap } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { Badge } from '@/components/ui/Badge';

const education = [
  {
    degree: 'Bachelor of Technology (B.Tech), Computer Science & Engineering',
    institution: 'Institute of Technical Education & Research (ITER)',
    university: "Siksha 'O' Anusandhan (SOA) University, Bhubaneswar",
    period: '2024 – 2028',
    score: 'CGPA: 8.93/10',
  },
  {
    degree: 'Class XII (PCM with IT)',
    institution: 'Council of Higher Secondary Education (CHSE), Odisha',
    university: '',
    period: '2022 – 2024',
    score: '85%',
  },
];

const experiences = [
  {
    role: 'College Ambassador (Corporate Projects Program)',
    org: 'Techfest, IIT Bombay',
    period: 'Jul 2026 – Present',
    location: 'Mumbai, India (Remote)',
    type: 'Leadership & Corporate Projects',
    bullets: [
      'Selected as a College Ambassador for Techfest, IIT Bombay, representing one of Asia\'s largest science and technology festivals.',
      'Completed industry-sponsored corporate projects across web development, business strategy, and market research in collaboration with partner organizations.',
      'Qualified for Round 2 of the FlowFinance Growth Strategy & Business Development Challenge by developing a business strategy presentation and market analysis.',
      'Collaborated with multidisciplinary teams while delivering project submissions within defined deadlines.',
    ],
    skills: ['Web Development', 'Business Strategy', 'Market Research', 'Team Collaboration', 'Strategic Presentation'],
    metrics: [
      { label: 'Challenge', value: 'Round 2 Qualifier' },
      { label: 'Scale', value: "Asia's Largest" },
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-padding w-full relative" aria-labelledby="experience-heading">
      {/* Subtle background glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/3 right-0 w-[300px] h-[300px] bg-teal-500/3 rounded-full blur-[150px]" />
      </div>

      <div className="container-custom relative z-10">
        <SectionHeading
          id="experience-heading"
          title="Experience & Education"
          subtitle="Building systems that solve real problems."
        />

        {/* Education */}
        <div className="mb-16">
          <h3 className="font-mono text-xs font-bold text-text-muted uppercase tracking-widest mb-6 flex items-center gap-2">
            <GraduationCap className="w-4 h-4 text-teal-400" />
            Education
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {education.map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-5 rounded-xl border border-border-primary bg-bg-card"
              >
                <h4 className="font-display text-base font-bold text-text-primary mb-1">
                  {edu.degree}
                </h4>
                <p className="font-body text-sm text-text-secondary font-medium">
                  {edu.institution}
                </p>
                {edu.university && (
                  <p className="font-body text-xs text-text-muted mt-0.5">
                    {edu.university}
                  </p>
                )}
                <div className="flex items-center gap-3 mt-3 text-xs font-mono text-text-muted">
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-teal-400" />
                    {edu.period}
                  </span>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-teal-500/10 border border-teal-500/20 text-teal-400 font-bold">
                    {edu.score}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-teal-500/40 via-border-primary to-transparent" aria-hidden="true" />

          <h3 className="font-mono text-xs font-bold text-text-muted uppercase tracking-widest mb-8 flex items-center gap-2">
            <Briefcase className="w-4 h-4 text-teal-400" />
            Experience
          </h3>

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <motion.article
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="relative pl-12 md:pl-20 group"
              >
                {/* Timeline dot */}
                <div className="absolute left-2 md:left-6 top-1.5 w-4 h-4 rounded-full bg-bg-primary border-2 border-border-primary group-hover:border-teal-400 group-hover:shadow-[0_0_12px_rgba(0,212,170,0.4)] transition-all duration-300 z-10" aria-hidden="true">
                  <div className="absolute inset-1 rounded-full bg-border-primary group-hover:bg-teal-400 transition-colors duration-300" />
                </div>

                {/* Card */}
                <div className="relative p-6 md:p-8 rounded-2xl border border-border-primary bg-bg-card hover:border-teal-500/20 transition-all duration-300 group-hover:shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
                  {/* Ambient glow */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-500/2 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" aria-hidden="true" />

                  {/* Header */}
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-5">
                    <div>
                      <h3 className="heading-4 font-display group-hover:text-teal-400 transition-colors duration-300">
                        {exp.role}
                      </h3>
                      <p className="font-body text-lg text-text-secondary mt-1 font-medium">
                        {exp.org}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-text-muted">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-bg-primary border border-border-primary">
                        <Calendar className="w-3 h-3 text-teal-400" />
                        {exp.period}
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-bg-primary border border-border-primary">
                        <MapPin className="w-3 h-3 text-teal-400" />
                        {exp.location}
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-bg-primary border border-border-primary">
                        <Briefcase className="w-3 h-3 text-teal-400" />
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="flex flex-wrap gap-3 mb-5">
                    {exp.metrics.map((metric, mIdx) => (
                      <div
                        key={mIdx}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-teal-500/10 border border-teal-500/20"
                      >
                        <span className="font-mono text-xs text-teal-400/60 uppercase tracking-wider">{metric.label}:</span>
                        <span className="font-mono text-sm font-bold text-teal-300">{metric.value}</span>
                      </div>
                    ))}
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-3 mb-5" role="list">
                    {exp.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-3 text-text-secondary body-sm">
                        <ChevronRight className="w-4 h-4 text-teal-400 mt-1 flex-shrink-0 opacity-60 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-border-primary">
                    {exp.skills.map((skill, sIdx) => (
                      <Badge key={sIdx} variant="subtle" size="sm">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}