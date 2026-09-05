'use client';

import { motion } from 'framer-motion';
import { Code2, Zap, ArrowRight } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';

const stagger = {
  initial: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const childFade = {
  initial: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const highlights = [
  {
    icon: Code2,
    label: 'Bias',
    text: 'Honest engineering beats flashy demos',
  },
  {
    icon: Zap,
    label: 'Focus',
    text: 'Autonomous AI Agents, Computer Vision & Backends',
  },
];

export default function About() {
  return (
    <section id="about" className="section-padding w-full" aria-labelledby="about-heading">
      <div className="container-custom">
        <SectionHeading
          id="about-heading"
          title="About Me"
          subtitle="The person behind the commits."
        />

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 lg:gap-16 items-start">
          {/* Main content */}
          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="space-y-6"
          >
            <motion.p variants={childFade} className="body-lg leading-relaxed">
              I&apos;ve always been the kind of person who learns best by getting my hands dirty. I don&apos;t just want to read tutorials or theorize — I like opening a fresh code editor, building something from scratch, and seeing how far I can push it. That&apos;s honestly how every project of mine begins.
            </motion.p>

            <motion.p variants={childFade} className="body-lg leading-relaxed">
              Early on, I realized I cared much more about what happens{' '}
              <span className="text-text-primary font-medium">
                behind
              </span>{' '}
              the screen than on top of it. I fell in love with backend engineering — designing clean APIs, organizing databases, and figuring out what happens when a system runs into weird edge cases or heavy traffic.
            </motion.p>

            <motion.p variants={childFade} className="body-lg leading-relaxed">
              When I started diving into AI, I saw so many people building the same basic ChatGPT wrappers. That felt boring to me. I wanted to tackle problems that actually had moving parts:{' '}
              <span className="text-text-primary font-medium">
                What if 8 different AI agents need to coordinate like a team to organize messy developer tasks? What if a camera and a vision model have to inspect physical hardware and catch counterfeit chips in seconds?
              </span>
            </motion.p>

            <motion.p variants={childFade} className="body-lg leading-relaxed">
              Real-world AI is messy. Models hallucinate, network connections drop, and API keys hit rate limits. For me, the real engineering isn&apos;t just getting an AI to generate a cool response — it&apos;s building the safety nets, fallbacks, and pipelines around it so the entire system never breaks when things go wrong.
            </motion.p>

            <motion.div
              variants={childFade}
              className="border-l-2 border-teal-500/40 pl-5 py-2 bg-teal-500/5 rounded-r-xl"
            >
              <p className="body-lg font-bold text-text-primary">
                &ldquo;Build things that actually hold up, especially when the pieces want to fail.&rdquo;
              </p>
              <p className="body text-text-secondary mt-0.5 italic">
                That&apos;s the mindset I bring to my work every day.
              </p>
            </motion.div>
          </motion.div>

          {/* Side panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-5"
          >
            {/* Highlight cards */}
            {highlights.map((item) => (
              <div
                key={item.label}
                className="card p-5 flex items-start gap-4 group hover:border-teal-500/30 transition-colors"
              >
                <div className="shrink-0 w-10 h-10 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center group-hover:bg-teal-500/15 transition-colors">
                  <item.icon className="w-5 h-5 text-teal-400" />
                </div>
                <div>
                  <span className="font-mono text-xs font-semibold tracking-wider uppercase text-teal-400">
                    {item.label}
                  </span>
                  <p className="mt-1 body-sm text-text-secondary leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}

            {/* CTA-style availability card */}
            <div className="relative overflow-hidden rounded-xl border border-teal-500/20 bg-gradient-to-br from-teal-500/5 via-bg-card to-bg-card p-5">
              <div className="absolute top-0 right-0 w-24 h-24 bg-teal-500/5 rounded-full blur-2xl -translate-y-8 translate-x-8" />
              <div className="relative">
                <span className="font-mono text-xs font-semibold tracking-wider uppercase text-teal-400">
                  Open to work
                </span>
                <p className="mt-2 text-text-primary font-medium text-sm leading-relaxed">
                  Currently open to AI / Backend Engineering internships.
                </p>
                <div className="mt-4 flex items-center gap-2 text-xs text-teal-400 font-medium group cursor-pointer">
                  <span>Let&apos;s talk</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </div>

            {/* Philosophy tag list */}
            <div className="flex flex-wrap gap-2 pt-1">
              {['Curiosity & Tinkering', 'Autonomous Agents', 'Computer Vision', 'Resilient Backends', 'Real-World Problems'].map(
                (tag) => (
                  <span key={tag} className="badge-outline">
                    {tag}
                  </span>
                )
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
