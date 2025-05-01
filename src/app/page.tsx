'use client';

import Image from 'next/image';
import {
  Navigation,
  Hero,
  About,
  Skills,
  Achievements,
  Projects,
  Contact,
  Footer,
  Gallery,
} from '@/components/sections';
import { siteConfig } from '@/config/site';
import { Toaster } from '@/components/ui/toaster';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-md">
        <Navigation />
      </header>

      <main className="flex-1">
          <Hero  />
          <About/>
          <Skills/>
          <Achievements/>
          <Projects />
          <Gallery />
          <Contact />
          <Toaster/>
      </main>

      <Footer />
    </div>
  );
}

