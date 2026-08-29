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
              I got into coding because I was curious —{' '}
              <span className="text-text-primary font-medium">
                how do apps actually work behind the screen?
              </span>{' '}
              So I started building things. Badly at first, but enough to get hooked.
            </motion.p>

            <motion.p variants={childFade} className="body-lg leading-relaxed">
              What really stuck with me was when things{' '}
              <span className="text-text-primary font-medium">broke</span>. My
              first script crashed under real users. My first API started throwing
              errors the moment more than one person touched it. That&apos;s when I
              realized —{' '}
              <span className="text-text-primary font-medium">
                working in a demo and working in real life are two very different
                things.
              </span>
            </motion.p>

            <motion.p variants={childFade} className="body-lg leading-relaxed">
              That gap between{' '}
              <span className="font-mono text-sm text-teal-400 bg-teal-400/10 px-2 py-0.5 rounded">
                &quot;works on my machine&quot;
              </span>{' '}
              and{' '}
              <span className="font-mono text-sm text-teal-400 bg-teal-400/10 px-2 py-0.5 rounded">
                &quot;actually works&quot;
              </span>{' '}
              — that&apos;s where I live now. Backend systems and AI are where it
              gets most interesting, and I haven&apos;t looked away since.
            </motion.p>

            <motion.div
              variants={childFade}
              className="border-l-2 border-teal-500/40 pl-5 py-1"
            >
              <p className="body-lg leading-relaxed text-text-secondary italic">
                I&apos;d rather ship something small and honest than something big
                and flashy. Every project here has real numbers — load tests, latency,
                failure modes — because if I can&apos;t measure it, I don&apos;t
                really understand it yet.
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
              {['Fails gracefully', 'Measured systems', 'Real metrics', 'Clean docs'].map(
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
