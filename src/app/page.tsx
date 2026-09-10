import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import FeaturedWork from '@/components/sections/FeaturedWork';
import Experience from '@/components/sections/Experience';
import TechStack from '@/components/sections/TechStack';
import BuildLog from '@/components/sections/BuildLog';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col w-full">
      <Hero />
      <div className="w-full relative">
        <About />
      </div>
      <FeaturedWork />
      <div className="w-full bg-bg-secondary/60 border-y border-border-primary/50 relative">
        <Experience />
      </div>
      <TechStack />
      <div className="w-full bg-bg-secondary/60 border-y border-border-primary/50 relative">
        <BuildLog />
      </div>
      <Contact />
    </div>
  );
}