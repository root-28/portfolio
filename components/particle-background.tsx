"use client";

import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
}

export function ParticleBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const requestRef = useRef<number>();
  const mousePosition = useRef({ x: 0, y: 0 });

  const createParticles = () => {
    if (!containerRef.current) return;
    
    const { width, height } = containerRef.current.getBoundingClientRect();
    const particles: Particle[] = [];
    
    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.1
      });
    }
    
    particlesRef.current = particles;
  };

  const updateParticles = () => {
    if (!containerRef.current) return;
    
    const { width, height } = containerRef.current.getBoundingClientRect();
    const ctx = containerRef.current.querySelector('canvas')?.getContext('2d');
    
    if (!ctx) return;
    
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = '#FF0000';
    
    particlesRef.current.forEach((particle, i) => {
      // Update position
      particle.x += particle.speedX;
      particle.y += particle.speedY;
      
      // Mouse influence
      const dx = mousePosition.current.x - particle.x;
      const dy = mousePosition.current.y - particle.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < 100) {
        const angle = Math.atan2(dy, dx);
        particle.speedX -= Math.cos(angle) * 0.02;
        particle.speedY -= Math.sin(angle) * 0.02;
      }
      
      // Boundary check
      if (particle.x < 0 || particle.x > width) particle.speedX *= -1;
      if (particle.y < 0 || particle.y > height) particle.speedY *= -1;
      
      // Draw particle
      ctx.globalAlpha = particle.opacity;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fill();
      
      // Connect particles
      for (let j = i + 1; j < particlesRef.current.length; j++) {
        const otherParticle = particlesRef.current[j];
        const dx = particle.x - otherParticle.x;
        const dy = particle.y - otherParticle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 100) {
          ctx.globalAlpha = (1 - distance / 100) * 0.2;
          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(otherParticle.x, otherParticle.y);
          ctx.stroke();
        }
      }
    });
    
    requestRef.current = requestAnimationFrame(updateParticles);
  };

  useEffect(() => {
    if (!containerRef.current) return;
    
    const canvas = document.createElement('canvas');
    const { width, height } = containerRef.current.getBoundingClientRect();
    
    canvas.width = width;
    canvas.height = height;
    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.pointerEvents = 'none';
    
    containerRef.current.appendChild(canvas);
    
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.strokeStyle = '#FF0000';
    }
    
    createParticles();
    requestRef.current = requestAnimationFrame(updateParticles);
    
    const handleResize = () => {
      if (!containerRef.current || !canvas) return;
      
      const { width, height } = containerRef.current.getBoundingClientRect();
      canvas.width = width;
      canvas.height = height;
      
      createParticles();
    };
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      mousePosition.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    };
    
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
      
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      
      if (containerRef.current && canvas) {
        containerRef.current.removeChild(canvas);
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 z-0 overflow-hidden"
    />
  );
}