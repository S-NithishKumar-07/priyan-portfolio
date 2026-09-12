"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  duration: number;
  delay: number;
}

export default function FloatingParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const colors = ["#FFFFFF", "#E5E7EB", "#D1D5DB"];
    const generated: Particle[] = Array.from({ length: 10 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100, // percentage of viewport width
      y: Math.random() * 100, // percentage of viewport height
      size: Math.random() * 200 + 100, // size in pixels
      color: colors[Math.floor(Math.random() * colors.length)],
      duration: Math.random() * 30 + 20, // transition duration
      delay: Math.random() * -20, // negative delay so particles start in different states
    }));
    setParticles(generated);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full opacity-[0.25] blur-[80px]"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
          }}
          animate={{
            y: [0, -60, 60, 0],
            x: [0, 30, -30, 0],
            scale: [1, 1.15, 0.95, 1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
