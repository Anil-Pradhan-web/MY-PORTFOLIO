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
    text: 'Small & honest beats big & flashy',
  },
  {
    icon: Zap,
    label: 'Focus',
    text: 'Backend systems & applied AI',
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
              I usually start with a simple question:{' '}
              <span className="text-text-primary font-medium">
                &ldquo;What happens if I actually try this?&rdquo;
              </span>{' '}
              That&apos;s how most of my projects begin.
            </motion.p>

            <motion.p variants={childFade} className="body-lg leading-relaxed">
              I build things, break things, fix them, and usually learn something I didn&apos;t expect along the way. Sometimes the code works perfectly. Sometimes it completely falls apart for a reason I didn&apos;t even think about. And honestly, I like that part.
            </motion.p>

            <motion.p variants={childFade} className="body-lg leading-relaxed">
              Over time, I found myself spending more time thinking about{' '}
              <span className="text-text-primary font-medium">
                what happens behind the scenes
              </span>{' '}
              — APIs, databases, performance, edge cases, failures, and now AI systems too. I&apos;m not very interested in building projects just to make a nice demo. I like building something, putting it under pressure, and seeing where it breaks.
            </motion.p>

            <motion.p variants={childFade} className="body-lg leading-relaxed">
              That&apos;s also why I try to keep my projects measurable. If something is slow, I want to know how slow. If a model makes mistakes, I want to know where. If a system fails, I want to understand why.
            </motion.p>

            <motion.div
              variants={childFade}
              className="border-l-2 border-teal-500/40 pl-5 py-2 bg-teal-500/5 rounded-r-xl"
            >
              <p className="body-lg font-bold text-text-primary">
                Build it. Break it. Fix it. Learn from it.
              </p>
              <p className="body text-text-secondary mt-0.5 italic">
                That&apos;s pretty much how I like to work.
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
                  Currently open to backend / AI engineering internships.
                </p>
                <div className="mt-4 flex items-center gap-2 text-xs text-teal-400 font-medium group cursor-pointer">
                  <span>Let&apos;s talk</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </div>

            {/* Philosophy tag list */}
            <div className="flex flex-wrap gap-2 pt-1">
              {['Build & Break', 'Measured systems', 'Under pressure', 'Edge cases & Failures'].map(
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
