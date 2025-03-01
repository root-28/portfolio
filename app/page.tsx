"use client";

import React, { useEffect, useState } from 'react';
import { ParticleBackground } from '@/components/particle-background';
import { BinaryOverlay } from '@/components/binary-overlay';
import { CRTEffect } from '@/components/crt-effect';
import { TerminalText } from '@/components/ui/terminal-text';
import { TerminalSection } from '@/components/terminal-section';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { GlitchButton } from '@/components/ui/glitch-button';
import { motion } from 'framer-motion';
import { Shield, Lock, Cpu, Server, Globe } from 'lucide-react';

export default function Home() {
  const [showTerminal, setShowTerminal] = useState(false);
  
  useEffect(() => {
    // Show terminal after title animation completes
    const timer = setTimeout(() => {
      setShowTerminal(true);
    }, 2500);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Background Effects */}
      <ParticleBackground />
      <BinaryOverlay />
      <CRTEffect />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl md:text-6xl font-bold font-mono mb-4">
            <TerminalText 
              text="Sajid" 
              className="text-red-500"
              speed={150}
            />
          </h1>
          <h2 className="text-xl md:text-2xl font-mono text-gray-300">
            <TerminalText 
              text="Cybersecurity Professional | Ethical Hacker" 
              speed={50}
            />
          </h2>
        </motion.div>
        
        {showTerminal && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-2xl"
          >
            <TerminalSection />
          </motion.div>
        )}
      </section>
      
      {/* Research Section */}
      <section id="research" className="relative z-10 py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold font-mono mb-4 inline-flex items-center">
              <Shield className="mr-2 text-red-500" />
              Research Areas
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Exploring the cutting edge of cybersecurity to develop innovative solutions
              for emerging threats and vulnerabilities.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Lock className="h-8 w-8 text-red-500" />,
                title: "Penetration Testing",
                description: "Identifying security vulnerabilities through simulated cyber attacks to strengthen defensive measures."
              },
              {
                icon: <Cpu className="h-8 w-8 text-red-500" />,
                title: "Malware Analysis",
                description: "Reverse engineering malicious software to understand attack vectors and develop countermeasures."
              },
              {
                icon: <Server className="h-8 w-8 text-red-500" />,
                title: "Cloud Security",
                description: "Securing cloud infrastructure against sophisticated attacks and data breaches."
              },
              {
                icon: <Globe className="h-8 w-8 text-red-500" />,
                title: "Threat Intelligence",
                description: "Gathering and analyzing information about existing and emerging threats in the cyber landscape."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-black/50 border border-red-500/30 p-6 rounded-lg hover:border-red-500 transition-all duration-300"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2 font-mono">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <GlitchButton href="https://medium.com" className="mx-auto">
              Read Research Papers
            </GlitchButton>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <Footer />
    </main>
  );
}