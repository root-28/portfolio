"use client";

import React, { useState } from 'react';
import { GlitchButton } from '@/components/ui/glitch-button';
import { AboutCard } from '@/components/about-card';
import { 
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-30 flex justify-center p-4">
      <div className="flex space-x-4">
        <Dialog>
          <DialogTrigger asChild>
            <div>
              <GlitchButton>About Me</GlitchButton>
            </div>
          </DialogTrigger>
          <DialogContent className="bg-transparent border-0 p-0 max-w-2xl">
            <AboutCard />
          </DialogContent>
        </Dialog>
        
        <GlitchButton href="https://hashnode.com" className="cursor-pointer">
          Blog
        </GlitchButton>
        
        <GlitchButton href="#research" className="cursor-pointer">
          Research
        </GlitchButton>
      </div>
    </nav>
  );
}