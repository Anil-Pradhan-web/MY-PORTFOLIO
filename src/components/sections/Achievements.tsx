"use client";

import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';

const achievements = [
  {
    title: "Top Tech Hackathons",
    desc: "Participated and successfully shipped projects in 3 major tech company hackathons: Microsoft AI Dev Days, Amazon Nova AI Hackathon, and Google Solution Challenge. Consistently building and competing.",
    icon: "🏆"
  },
  {
    title: "Active Tech Community",
    desc: "Attending multiple offline tech events, actively building my professional network, and continuously connecting with like-minded developers.",
    icon: "👥"
  },
  {
    title: "Java DSA – GeeksForGeeks",
    desc: "Maintained 80+ day continuous coding streak; completed all foundational Java DSA problems and patterns, earning GFG rewards.",
    icon: "☕"
  },
  {
    title: "Google Cloud Arcade Program",
    desc: "Completed program; earned multiple skill badges and rewards.",
    link: "View Badges →",
    linkUrl: "https://www.credly.com/users/anil-pradhan324",
    icon: "☁️"
  }
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 w-full max-w-7xl mx-auto px-6 sm:px-12 md:px-24">
      <SectionHeading>Achievements & Certifications</SectionHeading>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 w-full">
        {achievements.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="flex flex-col bg-[#0d0d0d] p-8 rounded-2xl border border-zinc-800 hover:border-fuchsia-400/50 transition-colors shadow-lg group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-fuchsia-500/5 rounded-full blur-3xl pointer-events-none group-hover:bg-fuchsia-400/10 transition-colors" />
            <div className="w-14 h-14 bg-zinc-900 border border-zinc-800 rounded-full flex items-center justify-center mb-6 group-hover:border-fuchsia-400/30 transition-colors">
              <span className="text-2xl">{item.icon}</span>
            </div>
            <h3 className="font-syne text-2xl font-bold text-white mb-3 group-hover:text-fuchsia-300 transition-colors">{item.title}</h3>
            <p className="text-zinc-400 leading-relaxed mb-4">{item.desc}</p>
            {item.link ? (
              <a
                href={item.linkUrl}
                target="_blank"
                rel="noreferrer"
                className="text-fuchsia-400 text-xs tracking-widest font-bold uppercase mt-auto flex items-center gap-2 group-hover:translate-x-1 transition-transform cursor-pointer"
              >
                {item.link}
              </a>
            ) : (
              // Add a spacer to keep the layout consistent if there's no link
              <div className="mt-auto"></div>
            )}
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="mt-16 flex justify-center w-full"
      >
        <a
          href="https://www.linkedin.com/in/anil-pradhan543/details/certifications/"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-3 bg-zinc-900/50 backdrop-blur-md border border-zinc-800 hover:border-fuchsia-400 text-zinc-300 hover:text-fuchsia-400 font-syne tracking-wide font-semibold px-8 py-4 rounded-xl transition-all shadow-lg hover:shadow-[0_0_20px_rgba(232,121,249,0.2)] group"
        >
          View All Certificates
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </a>
      </motion.div>
    </section>
  );
}
