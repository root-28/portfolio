"use client";

import React, { useState, useEffect } from 'react';
import { TerminalText } from '@/components/ui/terminal-text';

export function TerminalSection() {
  const [commandIndex, setCommandIndex] = useState(0);
  const [showPrompt, setShowPrompt] = useState(true);
  const [showOutput, setShowOutput] = useState(false);
  
  const commands = [
  { cmd: "whoami", output: "ramim" },
  { cmd: "cat skills.txt", output: "Penetration Testing\nVulnerability Assessment\nNetwork Security\nMalware Analysis\nIncident Response" },
  { cmd: "ls certifications/", output: "OSCP.cert\\eJPTv@.cert" }
];

  
  const currentCommand = commands[commandIndex];
  
  const handleCommandComplete = () => {
    setShowOutput(true);
    
    // Set timeout for next command
    const timer = setTimeout(() => {
      if (commandIndex < commands.length - 1) {
        setCommandIndex(prev => prev + 1);
        setShowOutput(false);
        setShowPrompt(true);
      }
    }, 3000);
    
    return () => clearTimeout(timer);
  };
  
  return (
    <div className="font-mono text-sm sm:text-base md:text-lg bg-black/50 p-4 rounded border border-red-500/30 w-full max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-2 border-b border-red-500/30 pb-1">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="text-xs text-gray-400">terminal@sajid:~</div>
      </div>
      
      <div className="space-y-2">
        {showPrompt && (
          <div className="flex">
            <span className="text-green-500 mr-2">$</span>
            <TerminalText 
              text={currentCommand.cmd} 
              speed={80} 
              onComplete={handleCommandComplete}
            />
          </div>
        )}
        
        {showOutput && (
          <div className="text-white whitespace-pre-line pl-4">
            {currentCommand.output}
          </div>
        )}
      </div>
    </div>
  );
}
