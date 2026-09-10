'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  id?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export default function SectionHeading({
  id,
  eyebrow,
  title,
  subtitle,
  align = 'left',
  className,
}: SectionHeadingProps) {
  const alignClasses = {
    left: 'items-start text-left',
    center: 'items-center text-center mx-auto',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={cn('mb-12 md:mb-16 flex flex-col w-full', alignClasses[align], className)}
    >
      {eyebrow && (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono text-teal-400 bg-teal-500/10 border border-teal-500/20 mb-3 font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-teal-400" aria-hidden="true" />
          {eyebrow}
        </span>
      )}
      <h2 id={id} className="heading-2 font-display text-text-primary tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3.5 body-lg max-w-2xl text-text-secondary leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}