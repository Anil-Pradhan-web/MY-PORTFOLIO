import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import FeaturedWork from '@/components/sections/FeaturedWork';
import Experience from '@/components/sections/Experience';
import TechStack from '@/components/sections/TechStack';
import BuildLog from '@/components/sections/BuildLog';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full">
      <Hero />
      <About />
      <FeaturedWork />
      <div className="w-full bg-bg-secondary/40">
        <Experience />
      </div>
      <TechStack />
      <div className="w-full bg-bg-secondary/40">
        <BuildLog />
      </div>
      <Contact />
    </main>
  );
}