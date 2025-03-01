"use client";

import React from 'react';

export function CRTEffect() {
  return (
    <>
      {/* Scanlines overlay */}
      <div className="fixed inset-0 z-50 pointer-events-none bg-scanlines opacity-10"></div>
      
      {/* CRT flicker effect */}
      <div className="fixed inset-0 z-50 pointer-events-none animate-crt-flicker opacity-5"></div>
    </>
  );
}