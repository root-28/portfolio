"use client";

import React, { useState, useEffect } from 'react';

interface TerminalTextProps {
  text: string;
  speed?: number;
  className?: string;
  onComplete?: () => void;
}

export function TerminalText({ 
  text, 
  speed = 50, 
  className = "", 
  onComplete 
}: TerminalTextProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);
      
      return () => clearTimeout(timeout);
    } else if (onComplete) {
      onComplete();
    }
  }, [currentIndex, text, speed, onComplete]);

  // Blinking cursor effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 500);
    
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className={`font-mono ${className}`}>
      <span>{displayedText}</span>
      <span className={`${cursorVisible ? 'opacity-100' : 'opacity-0'} text-red-500`}>_</span>
    </div>
  );
}