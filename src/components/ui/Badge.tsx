'use client';

import { forwardRef, type HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'outline' | 'solid' | 'subtle';
  size?: 'sm' | 'md';
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = 'outline', size = 'md', children, ...props }, ref) => {
    const variantStyles = {
      outline: 'badge-outline',
      solid: 'badge-solid',
      subtle: 'badge-outline bg-zinc-900/50',
    };
    const sizeStyles = {
      sm: 'px-2 py-0.5 text-[0.65rem]',
      md: 'px-2.5 py-1 text-[0.7rem]',
    };

    return (
      <span
        ref={ref}
        className={cn('badge', variantStyles[variant], sizeStyles[size], className)}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';