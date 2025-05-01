
import React from 'react';
import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { Icons } from '@/components/icons';

const Footer = () => {
  return (
    <footer className="bg-secondary py-6">
      <div className="container flex items-center justify-center">
        {/* Copyright Message */}
        <div>&copy; {new Date().getFullYear()} pritish. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;


    