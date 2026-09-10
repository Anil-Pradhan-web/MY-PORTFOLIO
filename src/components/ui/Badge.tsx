'use client';

import { forwardRef, type HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'outline' | 'solid' | 'subtle' | 'emerald' | 'amber' | 'cyan' | 'indigo' | 'blue';
  size?: 'sm' | 'md';
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = 'subtle', size = 'md', children, ...props }, ref) => {
    const variantStyles = {
      outline: 'border border-border-primary bg-bg-primary/50 text-text-secondary hover:border-border-secondary hover:text-text-primary',
      solid: 'border border-blue-500/30 bg-blue-500/15 text-blue-300 font-medium',
      subtle: 'border border-border-primary/80 bg-bg-secondary text-text-secondary hover:border-blue-500/30 hover:text-text-primary',
      emerald: 'border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 font-medium',
      amber: 'border border-amber-500/30 bg-amber-500/10 text-amber-300 font-medium',
      cyan: 'border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 font-medium',
      indigo: 'border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 font-medium',
      blue: 'border border-blue-500/30 bg-blue-500/10 text-blue-300 font-medium',
    };
    const sizeStyles = {
      sm: 'px-2 py-0.5 text-[0.68rem] tracking-tight',
      md: 'px-2.5 py-1 text-[0.75rem] tracking-normal',
    };

    return (
      <span
        ref={ref}
        className={cn(
          'inline-flex items-center gap-1.5 font-mono rounded-md transition-all duration-150',
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';