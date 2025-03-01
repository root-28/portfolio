"use client";

import React from 'react';
import { CRTEffect } from '@/components/crt-effect';
import { BinaryOverlay } from '@/components/binary-overlay';
import { GlitchButton } from '@/components/ui/glitch-button';
import { AlertTriangle, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white relative overflow-hidden p-4">
      <BinaryOverlay />
      <CRTEffect />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="z-10 text-center max-w-2xl"
      >
        <div className="mb-8 flex justify-center">
          <AlertTriangle className="h-24 w-24 text-red-500 animate-pulse" />
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold font-mono mb-4 text-red-500">
          BREACH DETECTED
        </h1>
        
        <div className="bg-black/50 border border-red-500 p-6 mb-8 font-mono">
          <p className="text-xl mb-4">ERROR 404: PAGE NOT FOUND</p>
          <p className="text-gray-400 mb-4">
            The requested resource could not be located on this server.
            Possible security breach attempt has been logged.
          </p>
          <div className="text-left text-sm text-gray-500 border-t border-red-500/30 pt-4">
            <p>IP: [REDACTED]</p>
            <p>TIMESTAMP: {new Date().toISOString()}</p>
            <p>TRACE: 0x8007007E</p>
          </div>
        </div>
        
        <Link href="/">
          <GlitchButton className="inline-flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" /> Return to Secure Area
          </GlitchButton>
        </Link>
      </motion.div>
    </div>
  );
}