import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Projects from '@/components/sections/Projects';
import Skills from '@/components/sections/Skills';
import Experience from '@/components/sections/Experience';
import Achievements from '@/components/sections/Achievements';
import Devlog from '@/components/sections/Devlog';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full max-w-[100vw] overflow-hidden bg-[#0a0a0a]">
      <Hero />
      <About />
      <Achievements />
      <Projects />
      <Skills />
      <Experience />
      <Devlog />
      <Contact />
    </main>
  );
}
