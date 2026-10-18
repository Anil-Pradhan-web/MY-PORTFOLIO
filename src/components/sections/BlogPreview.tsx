'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { BookOpen, ArrowRight } from 'lucide-react';

const TOPICS = [
  {
    title: 'Science & Oceans',
    image: '/blog/deep_sea.png',
    alt: 'Deep sea research submersible exploring the ocean floor',
  },
  {
    title: 'Nature & Environment',
    image: '/blog/nature_enviroment.png',
    alt: 'Lush green forest with sunlight filtering through the canopy',
  },
  {
    title: 'Technology & AI',
    image: '/blog/Technology_ai.png',
    alt: 'Software engineer coding on a laptop with neural and backend scripts',
  },
  {
    title: 'Economics & Society',
    image: '/blog/society.png',
    alt: 'Urban commerce and working-class labor in an Indian street scene',
  },
];

export default function BlogPreview() {
  return (
    <section
      id="writing"
      className="section-padding relative overflow-hidden bg-bg-secondary/40 border-t border-border-primary/60"
      aria-label="Writing and Explorations"
    >
      <div className="container-custom relative z-10 max-w-6xl">
        {/* Header matching exact design */}
        <div className="flex items-start gap-3.5 mb-8">
          <div className="p-2.5 rounded-xl bg-bg-card border border-border-primary text-text-primary mt-0.5 shadow-sm">
            <BookOpen className="w-5 h-5 text-text-primary" />
          </div>
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-text-primary tracking-tight">
              Writing &amp; Explorations
            </h2>
            <div className="mt-1">
              <Link
                href="/blog"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-mono text-text-muted hover:text-[#00e89d] transition-colors group focus-ring rounded"
              >
                <span>Separate page:</span>
                <span className="text-[#00e89d] group-hover:underline underline-offset-4">/blog</span>
                <ArrowRight className="w-3.5 h-3.5 text-text-muted group-hover:text-[#00e89d] group-hover:translate-x-1 transition-all" />
              </Link>
            </div>
          </div>
        </div>

        {/* 2x2 Grid of the 4 Topics Only */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {TOPICS.map((topic, idx) => (
            <motion.div
              key={topic.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
            >
              <Link
                href="/blog"
                className="group block focus-ring rounded-2xl"
                aria-label={`Explore ${topic.title} on blog`}
              >
                {/* Image Container */}
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-border-primary/80 bg-bg-card shadow-md transition-all duration-300 group-hover:border-[#00e89d]/40 group-hover:shadow-[0_12px_30px_rgba(0,0,0,0.6)]">
                  <Image
                    src={topic.image}
                    alt={topic.alt}
                    fill
                    quality={95}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  />
                  {/* Subtle inner highlight */}
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>

                {/* Topic Title Directly Below Image */}
                <h3 className="font-display text-lg sm:text-xl font-bold text-text-primary tracking-tight mt-3.5 transition-colors group-hover:text-[#00e89d] flex items-center justify-between">
                  <span>{topic.title}</span>
                  <ArrowRight className="w-4 h-4 text-text-muted opacity-0 -translate-x-2 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-[#00e89d]" />
                </h3>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
