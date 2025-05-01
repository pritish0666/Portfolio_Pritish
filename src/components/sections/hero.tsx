'use client';

import React from 'react';
import Image from 'next/image';
import {siteConfig} from '@/config/site';
import {Button} from '@/components/ui/button';
import {Github, Linkedin} from 'lucide-react';
import { cn } from '@/lib/utils';

const Hero = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-[linear-gradient(45deg,theme(colors.accent),theme(colors.primary),theme(colors.secondary),theme(colors.muted))] bg-[length:200%_200%] animate-gradient"
        />
        {/* Add a subtle overlay to improve text readability */}
        <div className="absolute inset-0 bg-background/60 dark:bg-background/80"></div>
      </div>


      {/* Content Container */}
      <div className="container relative z-10 flex flex-col items-center justify-center">
        {/* Profile Photo */}
        <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden mb-8 shadow-xl border-2 border-accent">
          <Image
            src={siteConfig.images.profile}
            alt="Profile Picture"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
        {/* Introduction */}
        <h1
          className={cn(
            "text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 text-center text-pretty",
            // Light mode: Use foreground color
            "text-foreground",
             // Dark mode: Apply gradient
            "dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r dark:from-accent-foreground dark:to-primary-foreground",
            // Animation
            "animate-slide-in-left"
          )}
           // Apply subtle shadow in both modes, slightly darker in dark mode
           style={{ textShadow: '2px 2px 6px hsla(var(--foreground), 0.2)' }}
        >
          {siteConfig.name}
        </h1>
        <p
          className={cn(
            "text-xl mb-8 text-center text-pretty",
            // Light mode: Use muted foreground
            "text-muted-foreground",
            // Dark mode: Use lighter gray
            "dark:text-gray-300",
            // Animation
            "animate-slide-in-left"
          )}
          // Remove strong text shadow for better readability
        >
          {siteConfig.description}
        </p>
        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mb-8 animate-slide-in-left">
          <a
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors dark:text-gray-400 dark:hover:text-primary"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-8 w-8" />
          </a>
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors dark:text-gray-400 dark:hover:text-primary"
            aria-label="GitHub"
          >
            <Github className="h-8 w-8" />
          </a>
        </div>
        {/* Download Resume Button */}
        <div className="animate-slide-in-left">
          <Button className="btn-hover-effect">
            <a
              href={siteConfig.links.resume}
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              Download Resume
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
