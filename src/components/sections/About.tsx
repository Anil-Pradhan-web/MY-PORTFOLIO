'use client';

import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';

export default function About() {
  return (
    <section id="about" className="section-padding w-full" aria-labelledby="about-heading">
      <div className="container-custom">
        <SectionHeading
          id="about-heading"
          title="About Me"
          subtitle="The person behind the commits."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mx-auto space-y-5 text-text-secondary"
        >
          <p className="body-lg">
            I got into programming because I wanted to understand how the software
            I used every day actually worked — and stayed because building systems
            that hold up under real traffic is the closest thing to engineering
            magic I&apos;ve found. Somewhere along the way, backend architecture and
            applied AI became the part I can&apos;t stop thinking about.
          </p>
          <p className="body-lg">
            What I care about most: honest engineering over impressive-sounding
            buzzwords. I&apos;d rather ship something small that&apos;s measured,
            load-tested, and documented than something large that just demos well —
            which is why every project below comes with real metrics and real
            trade-offs.
          </p>
          <p className="flex items-center gap-2 font-mono text-sm text-teal-400">
            <Sparkles className="w-4 h-4" aria-hidden="true" />
            Currently open to backend / AI engineering internships.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
