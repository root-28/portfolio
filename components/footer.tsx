"use client";

import React from 'react';
import { SocialIconsGroup } from '@/components/ui/social-icons';

export function Footer() {
  return (
    <footer className="w-full py-8 border-t border-red-500/30 mt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <SocialIconsGroup className="mb-4" />
          
          <p className="text-center text-lg font-mono relative inline-block">
            <span className="relative z-10">Stay curious. Stay secure.</span>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-500 animate-pulse"></span>
          </p>
          
          <p className="mt-4 text-sm text-gray-500">
            © {new Date().getFullYear()} Ramim. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
