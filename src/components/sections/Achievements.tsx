"use client";

import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';

const achievements = [
  { target: "9.55", label: "CGPA out of 10" },
  { target: "2", label: "Hackathon submissions" },
  { target: "15", suffix: " Days", label: "Sprint for VolunteerIQ" },
  { target: "4", label: "AI agents built in one system" },
  { target: "3", suffix: "+", label: "Production projects shipped" },
  { target: "80", suffix: "+", label: "Days continuous Java coding (GFG160)" }
];

function AnimatedCounter({ target, suffix = "" }: { target: string, suffix?: string }) {
  const [count, setCount] = useState("0");
  const nodeRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      if (target.includes(".")) {
        // Handle float like 9.55
        let start = 0;
        const end = parseFloat(target);
        const duration = 2000;
        const startTime = performance.now();

        const step = (currentTime: number) => {
          const progress = Math.min((currentTime - startTime) / duration, 1);
          // easeOutQuart
          const easeOut = 1 - Math.pow(1 - progress, 4);
          const currentCount = (easeOut * end).toFixed(2);
          setCount(currentCount);

          if (progress < 1) {
            requestAnimationFrame(step);
          } else {
            setCount(target);
          }
        };
        requestAnimationFrame(step);
      } else {
        // Handle int like 175 or 2
        let start = 0;
        const end = parseInt(target.replace(/[^0-9]/g, ''), 10);
        const duration = 2000;
        const startTime = performance.now();

        const step = (currentTime: number) => {
          const progress = Math.min((currentTime - startTime) / duration, 1);
          const easeOut = 1 - Math.pow(1 - progress, 4);
          const currentCount = Math.floor(easeOut * end).toString();
          setCount(currentCount);

          if (progress < 1) {
            requestAnimationFrame(step);
          } else {
            setCount(target);
          }
        };
        requestAnimationFrame(step);
      }
    }
  }, [isInView, target]);

  return (
    <div ref={nodeRef} className="text-cyan-400 font-syne font-bold text-5xl md:text-7xl mb-4 tracking-tighter">
      {target.startsWith("$") && "$"}
      {count}
      {suffix}
    </div>
  );
}

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 w-full max-w-7xl mx-auto px-6 sm:px-12 md:px-24">
      <SectionHeading>Numbers Don't Lie</SectionHeading>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-12 bg-zinc-900/40 p-10 md:p-16 rounded-2xl border border-zinc-800 backdrop-blur-sm">
        {achievements.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="flex flex-col items-center justify-center text-center p-6 border-b border-zinc-800 last:border-0 sm:border-0 relative"
          >
            <AnimatedCounter target={item.target} suffix={item.suffix} />
            <p className="text-zinc-500 font-medium uppercase tracking-widest text-sm max-w-[200px]">
              {item.label}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="mt-32">
        <SectionHeading>Certifications & Awards</SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 w-full">
          <motion.a
            href="https://www.credly.com/users/anil-pradhan.f52b6f52"
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col bg-[#0d0d0d] p-8 rounded-2xl border border-zinc-800 hover:border-cyan-400/50 transition-colors shadow-lg group cursor-pointer relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
            <div className="w-14 h-14 bg-zinc-900 border border-zinc-800 rounded-full flex items-center justify-center mb-6 group-hover:bg-cyan-400/10 group-hover:border-cyan-400/30 transition-colors">
              <span className="text-2xl">🏅</span>
            </div>
            <h3 className="font-syne text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">Credly Badges</h3>
            <p className="text-zinc-400 leading-relaxed mb-8">Verified achievements, skill badges, and professional certifications earned across various tech stacks.</p>
            <span className="text-cyan-400 text-xs tracking-widest font-bold uppercase mt-auto flex items-center gap-2 group-hover:translate-x-1 transition-transform">
              View Verified Profile &rarr;
            </span>
          </motion.a>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col bg-[#0d0d0d] p-8 rounded-2xl border border-cyan-400/30 shadow-lg group relative overflow-hidden"
          >
            <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-cyan-400 to-rose-500 pointer-events-none" />
            <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-400/10 rounded-full blur-[50px] pointer-events-none" />
            <div className="w-14 h-14 bg-zinc-900 border border-cyan-400/30 rounded-full flex items-center justify-center mb-6">
              <span className="text-2xl">👕</span>
            </div>
            <h3 className="font-syne text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">GFG 160 Days Challenge</h3>
            <p className="text-zinc-400 leading-relaxed">
              Maintained 80+ continuous days of rigorous Java coding and advanced problem solving on GeeksforGeeks platform.
            </p>
            <div className="mt-8 pt-6 border-t border-zinc-800/60 mt-auto flex flex-wrap gap-2">
              <span className="text-xs px-2.5 py-1 bg-cyan-400/10 text-cyan-400 border border-cyan-400/20 rounded font-mono font-medium">Winner: GFG160 Exclusive T-Shirt</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
