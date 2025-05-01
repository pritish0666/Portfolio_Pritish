'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation'; // Keep this import if used for active link highlighting
import { siteConfig } from '@/config/site';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { ModeToggle } from '@/components/ui/mode-toggle'; // Import ModeToggle
import { cn } from '@/lib/utils';

const Navigation = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  // const router = useRouter(); // Keep if needed for active link logic

  const toggleMenu = () => setIsOpen(!isOpen);

  // Example function to check if a link is active (adjust as needed)
  // const isActive = (href: string) => router.pathname === href;

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#achievements', label: 'Achievements' },
    { href: '#projects', label: 'Projects' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <div className="bg-secondary py-4 shadow-md">
      <div className="container flex items-center justify-between w-full">
        {/* Name on the left */}
        <div className="text-lg font-bold">Portfolio</div>

        {/* Navigation links in the middle */}
        <div className="hidden md:flex items-center space-x-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'transition-colors no-underline hover:bg-accent hover:text-accent-foreground rounded-full px-3 py-1'
                // isActive(link.href) ? 'font-semibold bg-accent text-accent-foreground' : '' // Example active state
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right side container */}
        <div className="flex items-center space-x-4">
          {/* Mobile menu button (hamburger icon) */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="p-2">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mode switcher */}
          <ModeToggle />

          {/* Buy Me Coffee link */}
          <div>
            <Button variant="outline" asChild className="btn-hover-effect">
              <Link
                href={siteConfig.links.buyMeCoffee}
                target="_blank"
                rel="noopener noreferrer"
              >
                Buy Me Coffee
              </Link>
            </Button>
          </div>
        </div>

        {/* Mobile menu (hidden by default) */}
        <div
          className={`md:hidden absolute top-full right-0 bg-secondary shadow-md rounded-b-lg overflow-hidden transition-all duration-300 ease-in-out w-full ${
            isOpen ? 'block' : 'hidden'
          }`}
        >
          <div className="flex flex-col items-center p-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-2 hover:text-accent transition-colors"
                onClick={toggleMenu}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
