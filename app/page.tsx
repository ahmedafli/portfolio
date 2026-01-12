'use client';

import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import About from '@/components/About';

export default function Home() {
  return (
    <main className="min-h-screen p-2 md:p-6 flex justify-center">
      <div className="w-full max-w-7xl flex flex-col gap-4">

        {/* HERO */}
        <div className="rounded-3xl bento-card min-h-[500px]">
          <Hero />
        </div>

        {/* PROJECTS */}
        <div className="rounded-3xl bento-card min-h-[400px]">
          <Projects />
        </div>

        {/* ABOUT & SKILLS ROW */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
          <div className="rounded-3xl bento-card p-6 min-h-[200px]">
            <About />
          </div>
          <div className="rounded-3xl bento-card p-6 min-h-[200px]">
            <Skills />
          </div>
        </div>

        {/* CONTACT */}
        <div className="rounded-3xl bento-card p-6 flex items-center justify-center">
          <div className="w-full">
            <Contact />
          </div>
        </div>

      </div>
    </main>
  );
}
