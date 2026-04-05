"use client";

import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { FaJava, FaPython, FaReact, FaHtml5, FaCss3Alt, FaDocker, FaGitAlt, FaGithub, FaLinux, FaDatabase } from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiFastapi, SiDjango, SiSpringboot, SiJsonwebtokens, SiGunicorn, SiNextdotjs, SiTailwindcss, SiVite, SiPostgresql, SiMysql, SiSqlite, SiFirebase, SiGooglecloud, SiVercel, SiRender, SiNginx, SiGithubactions, SiPostman, SiSelenium, SiNumpy, SiPandas } from 'react-icons/si';
import { TbApi, TbRobot } from 'react-icons/tb';
import { BrainCircuit, Network, Mic, BarChart, Users, Cpu } from 'lucide-react';

const skillCategories = [
  {
    title: "Languages",
    skills: ["Java", "Python", "JavaScript", "TypeScript", "SQL"]
  },
  {
    title: "Backend & APIs",
    skills: ["FastAPI", "Django REST Framework", "Spring Boot", "REST API", "JWT", "Firebase", "Gunicorn"]
  },
  {
    title: "Frontend",
    skills: ["Next.js", "React", "HTML5", "CSS3", "Tailwind CSS"]
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MySQL", "SQLite", "Firebase Firestore"]
  },
  {
    title: "Cloud & Deploy",
    skills: ["Vercel", "Render", "Netlify", "Google Cloud", "Docker"]
  },
  {
    title: "AI / LLM",
    skills: ["Microsoft AutoGen", "Groq", "Gemini 1.5 Pro", "Ollama", "LangChain"]
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "GitHub Actions", "Playwright"]
  }
];

const techConfig: Record<string, { icon: any; color?: string }> = {
  "Java": { icon: FaJava, color: "#f89820" },
  "Python": { icon: FaPython, color: "#3776AB" },
  "TypeScript": { icon: SiTypescript, color: "#3178C6" },
  "JavaScript": { icon: SiJavascript, color: "#F7DF1E" },
  "SQL": { icon: FaDatabase, color: "#336791" },
  "FastAPI": { icon: SiFastapi, color: "#009688" },
  "Django": { icon: SiDjango, color: "#4ade80" }, // Lighter green for dark mode
  "Django REST Framework": { icon: SiDjango, color: "#4ade80" },
  "Spring Boot": { icon: SiSpringboot, color: "#6DB33F" },
  "REST API": { icon: TbApi, color: "#0ea5e9" },
  "JWT": { icon: SiJsonwebtokens, color: "#FB015B" },
  "Gunicorn": { icon: SiGunicorn, color: "#499848" },
  "Next.js": { icon: SiNextdotjs, color: "#ffffff" },
  "React": { icon: FaReact, color: "#61DAFB" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "#06B6D4" },
  "HTML5": { icon: FaHtml5, color: "#E34F26" },
  "CSS3": { icon: FaCss3Alt, color: "#1572B6" },
  "PostgreSQL": { icon: SiPostgresql, color: "#336791" },
  "MySQL": { icon: SiMysql, color: "#4479A1" },
  "SQLite": { icon: SiSqlite, color: "#3b82f6" }, // Bright blue
  "Firebase Firestore": { icon: SiFirebase, color: "#FFCA28" },
  "Firebase": { icon: SiFirebase, color: "#FFCA28" },
  "Groq": { icon: Cpu, color: "#f97316" }, // Orange
  "Gemini 1.5 Pro": { icon: BrainCircuit, color: "#8b5cf6" }, // Purple
  "Microsoft AutoGen": { icon: TbRobot, color: "#0078D4" },
  "Ollama": { icon: BrainCircuit, color: "#10b981" },
  "LangChain": { icon: Network, color: "#8b5cf6" },
  "Sarvam AI": { icon: Mic, color: "#f43f5e" },
  "Google Cloud": { icon: SiGooglecloud, color: "#4285F4" },
  "Docker": { icon: FaDocker, color: "#2496ED" },
  "Vercel": { icon: SiVercel, color: "#ffffff" },
  "Render": { icon: SiRender, color: "#46E3B7" },
  "Nginx": { icon: SiNginx, color: "#009639" },
  "GitHub Actions": { icon: SiGithubactions, color: "#2088FF" },
  "Git": { icon: FaGitAlt, color: "#F05032" },
  "GitHub": { icon: FaGithub, color: "#ffffff" },
  "Postman": { icon: SiPostman, color: "#FF6C37" },
  "Selenium": { icon: SiSelenium, color: "#43B02A" },
  "Linux": { icon: FaLinux, color: "#FCC624" },
  "NumPy": { icon: SiNumpy, color: "#4d77cb" },
  "Pandas": { icon: SiPandas, color: "#ffffff" },
  "Matplotlib": { icon: BarChart, color: "#38bdf8" }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { staggerChildren: 0.05 } 
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 10 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.3 } }
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 w-full max-w-7xl mx-auto px-6 sm:px-12 md:px-24">
      <SectionHeading>Tech Stack</SectionHeading>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {skillCategories.map((category, idx) => (
          <div key={idx} className="flex flex-col">
            <h3 className="font-mono text-cyan-400 font-semibold mb-4 tracking-wide text-sm">{category.title}</h3>
            
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-wrap gap-2"
            >
              {category.skills.map((skill) => {
                const config = techConfig[skill];
                const Icon = config?.icon;
                return (
                  <motion.span
                    key={skill}
                    variants={itemVariants}
                    className="flex items-center gap-2.5 px-5 py-2.5 bg-zinc-900 border border-zinc-800 text-zinc-300 text-base font-medium rounded-xl hover:border-cyan-400 hover:text-white transition-colors cursor-default shadow-sm"
                  >
                    {Icon && <Icon className="w-5 h-5 drop-shadow-md" color={config?.color} />}
                    {skill}
                  </motion.span>
                );
              })}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
