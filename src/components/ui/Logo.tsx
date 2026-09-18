'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export interface LogoIconProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  animate?: boolean;
}

const sizeMap = {
  xs: { box: 24, px: 'w-6 h-6' },
  sm: { box: 32, px: 'w-8 h-8' },
  md: { box: 40, px: 'w-10 h-10' },
  lg: { box: 48, px: 'w-12 h-12' },
  xl: { box: 64, px: 'w-16 h-16' },
};

/**
 * Geometric AP Monogram Icon for Anil Pradhan
 * Features cyber-architect geometry, electric mint & warm amber gradients,
 * dark squircle badge, and glowing terminal node accent.
 */
export function LogoIcon({ size = 'sm', className, animate = true }: LogoIconProps) {
  const { box, px } = sizeMap[size];

  return (
    <div
      className={cn(
        'relative flex items-center justify-center shrink-0 rounded-xl group/logo select-none',
        px,
        className
      )}
    >
      {/* Ambient background glow on hover */}
      <div
        className="absolute -inset-1 rounded-xl bg-gradient-to-br from-[#00e89d]/30 via-[#00e89d]/0 to-[#f5a623]/25 blur-sm opacity-0 group-hover/logo:opacity-100 transition-opacity duration-300 pointer-events-none"
        aria-hidden="true"
      />

      <svg
        viewBox="0 0 100 100"
        width={box}
        height={box}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full transform transition-transform duration-300 group-hover/logo:scale-105"
        aria-hidden="true"
      >
        <defs>
          {/* Deep dark card gradient */}
          <linearGradient id="apBgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#111625" />
            <stop offset="50%" stopColor="#0a0d17" />
            <stop offset="100%" stopColor="#05070c" />
          </linearGradient>

          {/* Electric Mint Gradient */}
          <linearGradient id="apMintGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#34d399" />
            <stop offset="50%" stopColor="#00e89d" />
            <stop offset="100%" stopColor="#05b16d" />
          </linearGradient>

          {/* High-contrast White/Silver Gradient */}
          <linearGradient id="apWhiteGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#d1d5db" />
          </linearGradient>

          {/* Warm Amber Accent Gradient */}
          <linearGradient id="apAmberGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fcd34d" />
            <stop offset="100%" stopColor="#f5a623" />
          </linearGradient>

          {/* Border Gradient */}
          <linearGradient id="apBorderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00e89d" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#2a334b" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#f5a623" stopOpacity="0.7" />
          </linearGradient>
        </defs>

        {/* Squircle Badge Base */}
        <rect
          x="3"
          y="3"
          width="94"
          height="94"
          rx="24"
          fill="url(#apBgGrad)"
          stroke="url(#apBorderGrad)"
          strokeWidth="3.5"
        />

        {/* Subtle grid accent inside badge */}
        <path
          d="M20 50 H80 M50 20 V80"
          stroke="#00e89d"
          strokeWidth="0.75"
          strokeDasharray="2 6"
          strokeOpacity="0.15"
        />

        {/* Monogram 'A' - Left Diagonal Stem */}
        <path
          d="M 18 73 L 37 25 L 47 25 L 28 73 Z"
          fill="url(#apMintGrad)"
        />

        {/* Monogram 'A' - Right Diagonal Stem & Apex Joint */}
        <path
          d="M 37 25 L 47 25 L 56 50 L 47 50 Z"
          fill="url(#apMintGrad)"
        />

        {/* Monogram 'A' - Crossbar Connection */}
        <path
          d="M 25 54 L 49 54 L 46 47 L 28 47 Z"
          fill="#00e89d"
        />

        {/* Monogram 'P' - Main Vertical Stem */}
        <path
          d="M 54 25 H 63 V 73 H 54 V 25 Z"
          fill="url(#apWhiteGrad)"
        />

        {/* Monogram 'P' - Outer & Inner Loop */}
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M 63 25 H 77 C 84.732 25 90 30.268 90 38.5 C 90 46.732 84.732 52 77 52 H 63 V 25 Z M 63 33.5 V 43.5 H 75.5 C 78.8137 43.5 81.5 41.2614 81.5 38.5 C 81.5 35.7386 78.8137 33.5 75.5 33.5 H 63 Z"
          fill="url(#apWhiteGrad)"
        />

        {/* Dynamic Glowing Cyber Node (Amber Accent) */}
        <circle
          cx="79"
          cy="71"
          r="5"
          fill="url(#apAmberGrad)"
        />
        <circle
          cx="79"
          cy="71"
          r="8"
          fill="none"
          stroke="#f5a623"
          strokeWidth="1.5"
          strokeOpacity="0.4"
        />
      </svg>
    </div>
  );
}

export interface LogoProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  href?: string;
  className?: string;
  onClick?: () => void;
}

/**
 * Main Logo component combining the AP Monogram Icon with brand typography.
 */
export default function Logo({
  size = 'sm',
  showText = true,
  href = '#',
  className,
  onClick,
}: LogoProps) {
  const content = (
    <div
      className={cn(
        'group flex items-center gap-2.5 focus-ring rounded-xl px-1 py-0.5 transition-all select-none',
        className
      )}
      onClick={onClick}
    >
      <LogoIcon size={size} />

      {showText && (
        <div className="flex items-baseline gap-1.5">
          <span className="font-display text-lg md:text-xl font-bold tracking-tight text-text-primary group-hover:text-[#00e89d] transition-colors">
            Anil Pradhan
          </span>
          <span className="text-[11px] font-mono font-semibold text-[#00e89d] bg-[#00e89d]/10 border border-[#00e89d]/25 px-1.5 py-0.2 rounded-md hidden sm:inline-block">
            /dev
          </span>
        </div>
      )}
    </div>
  );

  if (href) {
    return (
      <Link href={href} aria-label="Anil Pradhan — Home" className="inline-block">
        {content}
      </Link>
    );
  }

  return content;
}
