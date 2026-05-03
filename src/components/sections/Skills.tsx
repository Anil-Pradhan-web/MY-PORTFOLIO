"use client";

import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { FaJava, FaPython, FaReact, FaHtml5, FaCss3Alt, FaDocker, FaGitAlt, FaGithub, FaLinux, FaDatabase } from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiFastapi, SiDjango, SiJsonwebtokens, SiNextdotjs, SiTailwindcss, SiVite, SiPostgresql, SiMysql, SiSqlite, SiFirebase, SiVercel, SiRender, SiGithubactions, SiPostman, SiSelenium, SiMongodb, SiRedis, SiSwagger, SiIntellijidea, SiHuggingface, SiGnubash } from 'react-icons/si';
import { TbApi, TbRobot, TbCircleDot } from 'react-icons/tb';
import { VscCode } from 'react-icons/vsc';
import { BrainCircuit, Network, Mic, Users, Cpu, Database, Search } from 'lucide-react';

const skillCategories = [
  {
    title: "☕ Languages",
    skills: ["Java", "Python", "JavaScript", "TypeScript", "SQL", "Bash"]
  },
  {
    title: "🔩 Backend & APIs",
    skills: ["FastAPI", "Django", "Django REST", "JWT", "REST API"]
  },
  {
    title: "🤖 AI / GenAI / RAG Stack (Specialization)",
    skills: ["LangGraph", "RAG", "Vector DB", "ChromaDB", "Multi-Agent", "AutoGen", "Gemini", "Groq", "Sarvam AI", "HuggingFace", "Ollama"]
  },
  {
    title: "🎨 Frontend & UI",
    skills: ["Next.js", "React", "TailwindCSS", "Shadcn UI", "Vite", "HTML5", "CSS3"]
  },
  {
    title: "🗄️ Databases & Storage",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Firebase", "SQLite", "ChromaDB"]
  },
  {
    title: "☁️ DevOps & CI/CD",
    skills: ["Docker", "Docker Compose", "GitHub Actions", "Vercel", "Render"]
  },
  {
    title: "🛠️ Tools",
    skills: ["Git", "GitHub", "Postman", "Selenium", "Playwright", "Linux", "VS Code", "IntelliJ IDEA", "Swagger"]
  }
];

const techConfig: Record<string, { icon: any; color?: string }> = {
  "Java": { icon: FaJava, color: "#f89820" },
  "Python": { icon: FaPython, color: "#3776AB" },
  "TypeScript": { icon: SiTypescript, color: "#3178C6" },
  "JavaScript": { icon: SiJavascript, color: "#F7DF1E" },
  "SQL": { icon: FaDatabase, color: "#336791" },
  "Bash": { icon: SiGnubash, color: "#4EAA25" },
  "FastAPI": { icon: SiFastapi, color: "#009688" },
  "Django": { icon: SiDjango, color: "#092E20" },
  "Django REST": { icon: SiDjango, color: "#092E20" },
  "JWT": { icon: SiJsonwebtokens, color: "#FB015B" },
  "REST API": { icon: TbApi, color: "#0ea5e9" },
  "LangGraph": { icon: TbCircleDot, color: "#8b5cf6" },
  "RAG": { icon: Search, color: "#06b6d4" },
  "Vector DB": { icon: Database, color: "#8b5cf6" },
  "ChromaDB": { icon: Database, color: "#8b5cf6" },
  "Multi-Agent": { icon: Users, color: "#06b6d4" },
  "AutoGen": { icon: TbRobot, color: "#0078D4" },
  "Gemini": { icon: BrainCircuit, color: "#8b5cf6" },
  "Groq": { icon: Cpu, color: "#f97316" },
  "Sarvam AI": { icon: Mic, color: "#f43f5e" },
  "HuggingFace": { icon: SiHuggingface, color: "#FFD21E" },
  "Ollama": { icon: BrainCircuit, color: "#10b981" },
  "Next.js": { icon: SiNextdotjs, color: "#ffffff" },
  "React": { icon: FaReact, color: "#61DAFB" },
  "TailwindCSS": { icon: SiTailwindcss, color: "#06B6D4" },
  "Shadcn UI": { icon: SiTailwindcss, color: "#ffffff" },
  "Vite": { icon: SiVite, color: "#646CFF" },
  "HTML5": { icon: FaHtml5, color: "#E34F26" },
  "CSS3": { icon: FaCss3Alt, color: "#1572B6" },
  "PostgreSQL": { icon: SiPostgresql, color: "#336791" },
  "MySQL": { icon: SiMysql, color: "#4479A1" },
  "MongoDB": { icon: SiMongodb, color: "#47A248" },
  "Redis": { icon: SiRedis, color: "#DC382D" },
  "Firebase": { icon: SiFirebase, color: "#FFCA28" },
  "SQLite": { icon: SiSqlite, color: "#003B57" },
  "Docker": { icon: FaDocker, color: "#2496ED" },
  "Docker Compose": { icon: FaDocker, color: "#2496ED" },
  "GitHub Actions": { icon: SiGithubactions, color: "#2088FF" },
  "Vercel": { icon: SiVercel, color: "#ffffff" },
  "Render": { icon: SiRender, color: "#46E3B7" },
  "Git": { icon: FaGitAlt, color: "#F05032" },
  "GitHub": { icon: FaGithub, color: "#ffffff" },
  "Postman": { icon: SiPostman, color: "#FF6C37" },
  "Selenium": { icon: SiSelenium, color: "#43B02A" },
  "Playwright": { icon: SiSelenium, color: "#2EAD33" },
  "Linux": { icon: FaLinux, color: "#FCC624" },
  "VS Code": { icon: VscCode, color: "#007ACC" },
  "IntelliJ IDEA": { icon: SiIntellijidea, color: "#FE315D" },
  "Swagger": { icon: SiSwagger, color: "#85EA2D" }
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
            <h3 className="font-mono text-violet-400 font-semibold mb-4 tracking-wide text-sm">{category.title}</h3>
            
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
                    className="flex items-center gap-2.5 px-5 py-2.5 bg-zinc-900 border border-zinc-800 text-zinc-300 text-base font-medium rounded-xl hover:border-violet-400 hover:text-white hover:bg-violet-500/5 hover:shadow-[0_0_12px_rgba(139,92,246,0.15)] transition-all cursor-default shadow-sm"
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
