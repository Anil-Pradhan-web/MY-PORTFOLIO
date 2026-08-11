'use client';

import { motion } from 'framer-motion';
import { Trophy, Code2, Cloud, Award } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';

const achievements = [
  {
    title: 'Hackathons & Competitions',
    icon: Trophy,
    items: [
      '2nd Runner-Up — Dell FutureMinds AI Hackathon 2026: Secured a Top 3 finish among 8,000+ participants nationwide, advancing to the Grand Finale and presenting our solution to senior Dell leaders and corporate employees at the Dell Bengaluru office.',
      'Developed production-grade AI solutions for Microsoft AI DevDays, Amazon Nova AI Challenge, and Google Solution Challenge.',
    ],
  },
  {
    title: 'Data Structures & Algorithms',
    icon: Code2,
    items: [
      'Solved 200+ DSA problems across LeetCode & GeeksforGeeks & HackerRank.',
      'Participated in GeeksforGeeks 160 Days Coding Challenge and earned a GFG T-shirt.',
    ],
  },
  {
    title: 'Google Cloud Program',
    icon: Cloud,
    items: [
      'Completed Google Cloud Arcade (75+ Arcade Points) through hands-on Google Cloud labs and earned awesome rewards from Google Cloud.',
    ],
  },
  {
    title: 'Certifications',
    icon: Award,
    items: [
      'Microsoft: Career Essentials in Software Development',
      'Cisco: Python Essentials 2',
      'HackerRank: Python (Basic) and Java (Basic)',
      'IBM: AI Fundamentals',
      'Anthropic: Claude 101',
      'HackerRank: SQL (Basic) and Problem Solving (Basic)',
    ],
  },
];

export default function BuildLog() {
  return (
    <section id="build-log" className="section-padding w-full border-t border-border-primary" aria-labelledby="build-log-heading">
      <div className="container-custom">
        <SectionHeading
          id="build-log-heading"
          title="Achievements & Certifications"
          subtitle="Recognition and milestones along the way."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((section, idx) => {
            const Icon = section.icon;
            return (
              <motion.article
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group p-6 rounded-xl border border-border-primary bg-bg-card hover:border-border-secondary transition-all duration-200"
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-teal-500/10 border border-teal-500/20">
                    <Icon className="w-4 h-4 text-teal-400" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-text-primary group-hover:text-teal-400 transition-colors">
                    {section.title}
                  </h3>
                </div>

                {/* Items */}
                <ul className="space-y-2.5" role="list">
                  {section.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-2.5 text-text-secondary body-sm">
                      <span className="text-teal-400 mt-1 flex-shrink-0" aria-hidden="true">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}