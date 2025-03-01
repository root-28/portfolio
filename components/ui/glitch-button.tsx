"use client";

import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface GlitchButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  href?: string;
}

export function GlitchButton({ 
  children, 
  onClick, 
  className,
  href
}: GlitchButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  const buttonContent = (
    <div 
      className={cn(
        "relative px-6 py-3 font-mono text-sm uppercase tracking-wider border border-red-500 transition-all duration-300",
        "before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-red-500/10",
        "after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-black",
        "hover:text-red-500 hover:border-red-600 hover:shadow-[0_0_10px_rgba(255,0,0,0.7)]",
        isHovered && "before:animate-glitch after:animate-glitch",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <span className="relative z-10">{children}</span>
      {isHovered && (
        <span className="absolute inset-0 flex items-center justify-center z-20 text-red-500 opacity-0 animate-glitch-text">
          {children}
        </span>
      )}
    </div>
  );
  
  if (href) {
    return (
      <a href={href} className="inline-block">
        {buttonContent}
      </a>
    );
  }
  
  return buttonContent;
}