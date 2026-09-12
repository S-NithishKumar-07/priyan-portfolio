"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function MouseGlow() {
  const [mounted, setMounted] = useState(false);
  const mouseX = useMotionValue(-400);
  const mouseY = useMotionValue(-400);

  const springConfig = { damping: 30, stiffness: 200, mass: 0.6 };
  const glowX = useSpring(mouseX, springConfig);
  const glowY = useSpring(mouseY, springConfig);

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 250); // 250px is half of the 500px glow width
      mouseY.set(e.clientY - 250);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  if (!mounted) return null;

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-30 hidden md:block"
      style={{
        left: glowX,
        top: glowY,
        width: 500,
        height: 500,
      }}
    >
      <div 
        className="w-full h-full rounded-full opacity-[0.4] blur-[60px]"
        style={{
          background: "radial-gradient(circle, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0) 70%)",
        }}
      />
    </motion.div>
  );
}
