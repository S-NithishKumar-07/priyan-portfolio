"use client";

import React, { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, useScroll, useSpring } from "framer-motion";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
        
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled 
            ? "py-4 bg-[#f5f5f7]/85 backdrop-blur-md border-b border-black/5 shadow-sm" 
            : "py-6 bg-transparent"
        }`}
      >
        {/* Scroll Progress Bar */}
        <motion.div 
          className="absolute top-0 left-0 right-0 h-[3px] bg-[#0066cc] origin-left"
          style={{ scaleX }}
        />

        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="#home" className="text-xl font-bold font-display tracking-tight text-[#1d1d1f] flex items-center gap-2 group">
            <span className="bg-gradient-to-r from-[#1d1d1f] to-[#6e6e73] bg-clip-text text-transparent group-hover:from-[#0066cc] group-hover:to-[#1d1d1f] transition-all duration-300">
              Priyan.dev
            </span>
          </a>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-1">
            <div className="glass-panel py-1.5 px-3 rounded-full flex items-center gap-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-xs px-4 py-1.5 rounded-full text-[#6e6e73] hover:text-[#1d1d1f] transition-all duration-300 relative group font-medium"
                >
                  <span className="relative z-10">{item.name}</span>
                  <span className="absolute inset-0 bg-black/5 rounded-full scale-0 group-hover:scale-100 transition-all duration-300" />
                </a>
              ))}
            </div>
            <a
              href="#contact"
              className="ml-4 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#1d1d1f] text-white hover:bg-black/90 hover:shadow-md hover:shadow-black/10 transition-all duration-300 flex items-center gap-1 group"
            >
              Contact
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-[#6e6e73] hover:text-[#1d1d1f] rounded-full bg-black/5 border border-black/5 hover:border-black/10 transition-all duration-300"
            aria-label="Toggle navigation"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu Panel */}
        {isOpen && (
          <div className="md:hidden fixed top-[73px] left-6 right-6 p-6 rounded-2xl glass-panel border border-black/5 flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-300">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-base py-2 border-b border-black/5 text-[#6e6e73] hover:text-[#1d1d1f] transition-all duration-300 font-medium"
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 w-full py-3 rounded-xl text-center font-semibold bg-[#1d1d1f] text-white hover:opacity-90 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Contact Me
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        )}
      </header>
    </>
  );
}
