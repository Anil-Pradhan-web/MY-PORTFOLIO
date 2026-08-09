'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  id?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export default function SectionHeading({ id, title, subtitle, align = 'left', className }: SectionHeadingProps) {
  const alignClasses = {
    left: 'items-start text-left',
    center: 'items-center text-center',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn('mb-16 flex flex-col w-full', alignClasses[align], className)}
    >
      <h2 id={id} className="heading-2 font-display">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 body-lg max-w-2xl text-text-secondary">
          {subtitle}
        </p>
      )}
      <div className="mt-6 flex w-full" aria-hidden="true">
        <div className={align === 'center' ? 'mx-auto' : ''} style={{ width: '60px' }}>
          <div className="h-[2px] bg-gradient-to-r from-teal-500 to-teal-500/20 rounded-full" />
        </div>
      </div>
    </motion.div>
  );
}