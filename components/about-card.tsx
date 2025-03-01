"use client";

import React from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { SocialIconsGroup } from '@/components/ui/social-icons';
import { Shield, Award, Code, Cpu } from 'lucide-react';

export function AboutCard() {
  return (
    <Card className="w-full max-w-2xl mx-auto bg-black/80 border-red-500/50 text-white">
      <CardHeader>
        <CardTitle className="text-2xl font-mono flex items-center">
          <Shield className="mr-2 text-red-500" /> About Me
        </CardTitle>
        <CardDescription className="text-gray-400">
          Cybersecurity Professional & Ethical Hacker
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <p>
          I'm a passionate cybersecurity expert with over 5 years of experience in penetration testing, 
          vulnerability assessment, and security architecture. My mission is to help organizations 
          strengthen their security posture and protect against evolving threats.
        </p>
        
        <div>
          <h3 className="text-lg font-semibold mb-2 flex items-center">
            <Award className="mr-2 text-red-500" /> Certifications
          </h3>
          <ul className="list-disc list-inside space-y-1 text-gray-300">
            <li>Offensive Security Certified Professional (OSCP)</li>
            <li>Certified Ethical Hacker (CEH)</li>
            <li>Certified Information Systems Security Professional (CISSP)</li>
            <li>SANS GIAC Security Essentials (GSEC)</li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-2 flex items-center">
            <Code className="mr-2 text-red-500" /> Technical Skills
          </h3>
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-black/50 p-2 rounded border border-red-500/30">
              <span className="text-red-500">Penetration Testing</span>
            </div>
            <div className="bg-black/50 p-2 rounded border border-red-500/30">
              <span className="text-red-500">Vulnerability Assessment</span>
            </div>
            <div className="bg-black/50 p-2 rounded border border-red-500/30">
              <span className="text-red-500">Network Security</span>
            </div>
            <div className="bg-black/50 p-2 rounded border border-red-500/30">
              <span className="text-red-500">Malware Analysis</span>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-2 flex items-center">
            <Cpu className="mr-2 text-red-500" /> Research Interests
          </h3>
          <p className="text-gray-300">
            My research focuses on advanced persistent threats, zero-day vulnerability discovery, 
            and developing innovative defense mechanisms against emerging attack vectors.
          </p>
        </div>
      </CardContent>
      <CardFooter className="flex justify-center border-t border-red-500/30 pt-4">
        <SocialIconsGroup />
      </CardFooter>
    </Card>
  );
}