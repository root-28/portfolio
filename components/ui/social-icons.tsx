"use client";

import React from 'react';
import { Github, Linkedin, Facebook, BookOpen } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SocialIconProps {
  platform: 'github' | 'linkedin' | 'medium' | 'facebook';
  href: string;
  className?: string;
}

export function SocialIcon({ platform, href, className }: SocialIconProps) {
  const getIcon = () => {
    switch (platform) {
      case 'github':
        return <Github className="w-5 h-5" />;
      case 'linkedin':
        return <Linkedin className="w-5 h-5" />;
      case 'medium':
        return <BookOpen className="w-5 h-5" />;
      case 'facebook':
        return <Facebook className="w-5 h-5" />;
      default:
        return null;
    }
  };

  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "flex items-center justify-center w-10 h-10 rounded-full",
        "bg-black border border-red-500 text-white",
        "hover:bg-red-500/10 hover:text-red-500 hover:shadow-[0_0_10px_rgba(255,0,0,0.5)]",
        "transition-all duration-300",
        className
      )}
    >
      {getIcon()}
    </a>
  );
}

export function SocialIconsGroup({ className }: { className?: string }) {
  return (
    <div className={cn("flex space-x-4", className)}>
      <SocialIcon platform="github" href="https://github.com" />
      <SocialIcon platform="linkedin" href="https://linkedin.com" />
      <SocialIcon platform="medium" href="https://medium.com" />
      <SocialIcon platform="facebook" href="https://facebook.com" />
    </div>
  );
}