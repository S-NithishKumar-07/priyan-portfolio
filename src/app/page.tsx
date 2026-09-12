"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Mail, 
  Phone, 
  Linkedin, 
  MapPin, 
  GraduationCap, 
  Award, 
  Terminal, 
  Database, 
  Cpu, 
  Wrench, 
  ArrowRight, 
  Download, 
  ExternalLink, 
  Code, 
  Sparkles, 
  Languages, 
  Heart,
  Send,
  CheckCircle2
} from "lucide-react";

import Navbar from "@/components/Navbar";
import MouseGlow from "@/components/MouseGlow";
import FloatingParticles from "@/components/FloatingParticles";
import CardTilt from "@/components/CardTilt";

const roles = [
  "MCA Student",
  "Python Developer",
  "Machine Learning Enthusiast"
];

export default function Home() {
  const [typedTitle, setTypedTitle] = useState("");
  const [activeRoleIndex, setActiveRoleIndex] = useState(0);
  const [roleText, setRoleText] = useState("");
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  // Typing effect for main heading
  useEffect(() => {
    const title = "Hi, I'm Shanmuga Priyan";
    let i = 0;
    const timer = setInterval(() => {
      setTypedTitle(title.slice(0, i + 1));
      i++;
      if (i >= title.length) clearInterval(timer);
    }, 80);
    return () => clearInterval(timer);
  }, []);

  // Cycling/Typing effect for subheadings/roles
  useEffect(() => {
    let isMounted = true;
    const currentRole = roles[activeRoleIndex];
    let i = 0;
    
    // Typing phase
    const typeTimer = setInterval(() => {
      if (isMounted) {
        setRoleText(currentRole.slice(0, i + 1));
        i++;
      }
      if (i >= currentRole.length) {
        clearInterval(typeTimer);
        // Pause typed role, then trigger untyping/switching
        setTimeout(() => {
          if (isMounted) {
            let j = currentRole.length;
            const eraseTimer = setInterval(() => {
              if (isMounted) {
                setRoleText(currentRole.slice(0, j - 1));
                j--;
              }
              if (j <= 0) {
                clearInterval(eraseTimer);
                setActiveRoleIndex((prev) => (prev + 1) % roles.length);
              }
            }, 30);
          }
        }, 2000);
      }
    }, 60);

    return () => {
      isMounted = false;
    };
  }, [activeRoleIndex]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const tempErrors: typeof errors = {};
    if (!formState.name.trim()) tempErrors.name = "Name is required";
    if (!formState.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
      tempErrors.email = "Invalid email address";
    }
    if (!formState.message.trim()) tempErrors.message = "Message is required";

    if (Object.keys(tempErrors).length > 0) {
      setErrors(tempErrors);
      return;
    }

    const whatsappNumber = "919843258406";
    const text = `Hello Shanmuga Priyan!\n\n*Name:* ${formState.name}\n*Email:* ${formState.email}\n*Message:* ${formState.message}`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
    
    window.open(whatsappUrl, '_blank');

    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormState({ name: "", email: "", message: "" });
    }, 4000);
  };

  return (
    <div className="relative min-h-screen bg-[#f5f5f7] text-[#1d1d1f] overflow-hidden selection:bg-[#0066cc]/20">
      {/* Background gradients and particles */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-white/40 blur-[120px]" />
        <div className="absolute bottom-[20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-slate-200/20 blur-[150px]" />
        <div className="absolute top-[40%] left-[30%] w-[40%] h-[40%] rounded-full bg-[#0066cc]/5 blur-[100px]" />
      </div>
      
      <FloatingParticles />
      <MouseGlow />
      <Navbar />

      {/* Main Layout container */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-24 flex flex-col gap-24 md:gap-32">
        
        {/* HERO SECTION */}
        <section id="home" className="min-h-[80vh] flex flex-col md:flex-row items-center justify-between gap-12 pt-6 md:pt-16">
          <div className="flex-1 flex flex-col items-start text-left gap-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/5 border border-black/10 text-xs font-semibold text-[#1d1d1f] tracking-wider uppercase font-display">
              <Sparkles className="w-3.5 h-3.5 text-[#0066cc]" />
              Available for Opportunities
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold font-display tracking-tight leading-tight min-h-[90px] md:min-h-[140px] select-none text-[#1d1d1f]">
              {typedTitle}
              <span className="inline-block w-1.5 h-8 sm:h-12 lg:h-16 ml-1 bg-black animate-pulse" />
            </h1>

            <div className="text-xl sm:text-2xl font-semibold font-display text-[#86868b] min-h-[40px]">
              {roleText}
            </div>

            <p className="max-w-xl text-base sm:text-lg text-[#6e6e73] leading-relaxed font-light">
              Passionate Computer Science graduate currently pursuing MCA. Interested in AI, Machine Learning, Web Development, Cloud Computing, and building scalable applications.
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-4 w-full sm:w-auto">
              <a
                href="#projects"
                className="px-8 py-4 rounded-xl font-semibold text-sm bg-[#1d1d1f] text-white shadow hover:bg-black/90 hover:scale-[1.02] transition-all duration-300 flex items-center gap-2 w-full sm:w-auto justify-center"
              >
                View Projects
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="/resume"
                target="_blank"
                className="px-8 py-4 rounded-xl font-semibold text-sm glass-panel text-[#1d1d1f] hover:bg-black/5 hover:scale-[1.02] transition-all duration-300 flex items-center gap-2 w-full sm:w-auto justify-center"
              >
                <Download className="w-4 h-4 text-[#0066cc]" />
                Download Resume
              </a>
              <a
                href="#contact"
                className="px-8 py-4 rounded-xl font-semibold text-sm border border-black/10 hover:border-black/30 text-[#1d1d1f] hover:bg-black/5 transition-all duration-300 w-full sm:w-auto text-center"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="flex-1 flex justify-center md:justify-end w-full">
            <CardTilt className="w-full max-w-sm sm:max-w-md">
              <div className="relative rounded-3xl overflow-hidden group shadow-xl border border-black/[0.06] bg-[#f0f0f0]" style={{aspectRatio: "3/4"}}>
                <Image
                  src="/profile.jpg"
                  alt="Shanmuga Priyan B"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  priority
                  className="object-contain group-hover:scale-[1.02] transition-transform duration-700"
                />
                
                {/* Floating name tag */}
                <div className="absolute bottom-4 left-4 right-4 py-3 px-4 rounded-2xl flex items-center justify-between bg-white/90 backdrop-blur-md border border-black/[0.06] shadow-sm">
                  <div>
                    <h4 className="text-sm font-semibold font-display text-[#1d1d1f]">Shanmuga Priyan B</h4>
                    <p className="text-xs text-[#6e6e73] font-light">Python & ML Dev</p>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[10px] text-emerald-600 font-semibold">Open to work</span>
                  </div>
                </div>
              </div>
            </CardTilt>
          </div>
        </section>

        {/* ABOUT ME SECTION */}
        <section id="about" className="scroll-mt-24">
          <motion.div
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-8"
          >
            <div className="flex items-center gap-4">
              <div className="h-[2px] w-12 bg-[#1d1d1f]" />
              <h2 className="text-2xl sm:text-3xl font-bold font-display uppercase tracking-wider text-[#1d1d1f]">
                About Me
              </h2>
            </div>

            <CardTilt>
              <div className="glass-panel p-8 md:p-12 rounded-3xl relative overflow-hidden">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="p-4 rounded-2xl bg-black/5 border border-black/[0.05] text-[#1d1d1f]">
                    <Code className="w-12 h-12" />
                  </div>
                  <div className="flex-1 flex flex-col gap-4">
                    <p className="text-lg text-[#6e6e73] leading-relaxed font-light">
                      I am currently pursuing a Master of Computer Applications after completing my B.Sc in Computer Science. I enjoy solving real-world problems using Python, Machine Learning, and Web Technologies. I continuously learn new technologies and love building innovative software solutions.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#0066cc]" />
                        <span className="text-sm text-[#1d1d1f] font-medium">Location: Dindigul, Tamil Nadu</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#86868b]" />
                        <span className="text-sm text-[#1d1d1f] font-medium">Interest: Machine Learning & Python</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardTilt>
          </motion.div>
        </section>

        {/* EDUCATION SECTION */}
        <section id="education" className="scroll-mt-24">
          <motion.div
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-10"
          >
            <div className="flex items-center gap-4">
              <div className="h-[2px] w-12 bg-[#1d1d1f]" />
              <h2 className="text-2xl sm:text-3xl font-bold font-display uppercase tracking-wider text-[#1d1d1f]">
                Education Timeline
              </h2>
            </div>

            {/* Timeline Wrapper */}
            <div className="relative border-l border-black/10 ml-4 md:ml-12 pl-8 md:pl-12 flex flex-col gap-12">
              
              {/* Timeline dot connector */}
              <div className="absolute top-0 bottom-0 left-0 w-[1px] bg-gradient-to-b from-black via-black/40 to-black/5" />

              {/* Education Entry 1 */}
              <div className="relative">
                {/* Timeline node */}
                <div className="absolute -left-[41px] md:-left-[57px] top-1.5 w-6 h-6 rounded-full bg-[#f5f5f7] border-2 border-black flex items-center justify-center shadow z-10">
                  <div className="w-2 h-2 rounded-full bg-black" />
                </div>
                
                <CardTilt>
                  <div className="glass-panel p-6 rounded-2xl transition-all duration-300 hover:border-black/20 hover:bg-white">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#1d1d1f] px-2.5 py-1 rounded-full bg-black/5 border border-black/10 inline-block mb-3 font-display">
                      2025 - Present
                    </span>
                    <h3 className="text-xl font-bold font-display text-[#1d1d1f]">Master of Computer Applications</h3>
                    <p className="text-sm text-[#6e6e73] font-medium mt-1 flex items-center gap-2">
                      <GraduationCap className="w-4 h-4 text-black" />
                      Bharathiar University, Coimbatore
                    </p>
                  </div>
                </CardTilt>
              </div>

              {/* Education Entry 2 */}
              <div className="relative">
                <div className="absolute -left-[41px] md:-left-[57px] top-1.5 w-6 h-6 rounded-full bg-[#f5f5f7] border-2 border-black/60 flex items-center justify-center shadow z-10">
                  <div className="w-2 h-2 rounded-full bg-black/60" />
                </div>
                
                <CardTilt>
                  <div className="glass-panel p-6 rounded-2xl transition-all duration-300 hover:border-black/20 hover:bg-white">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#1d1d1f] px-2.5 py-1 rounded-full bg-black/5 border border-black/10 inline-block mb-3 font-display">
                      2022 - 2025
                    </span>
                    <h3 className="text-xl font-bold font-display text-[#1d1d1f]">Bachelor of Science in Computer Science</h3>
                    <p className="text-sm text-[#6e6e73] font-medium mt-1 flex items-center gap-2">
                      <GraduationCap className="w-4 h-4 text-black" />
                      The American College, Madurai
                    </p>
                    <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-black/5 border border-black/5 text-xs text-[#6e6e73]">
                      <span>CGPA: <strong className="text-black font-semibold">7.1</strong></span>
                    </div>
                  </div>
                </CardTilt>
              </div>

              {/* Education Entry 3 */}
              <div className="relative">
                <div className="absolute -left-[41px] md:-left-[57px] top-1.5 w-6 h-6 rounded-full bg-[#f5f5f7] border-2 border-black/40 flex items-center justify-center shadow z-10">
                  <div className="w-2 h-2 rounded-full bg-black/40" />
                </div>
                
                <CardTilt>
                  <div className="glass-panel p-6 rounded-2xl transition-all duration-300 hover:border-black/20 hover:bg-white">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#1d1d1f] px-2.5 py-1 rounded-full bg-black/5 border border-black/10 inline-block mb-3 font-display">
                      2022
                    </span>
                    <h3 className="text-xl font-bold font-display text-[#1d1d1f]">Higher Secondary Certificate (HSC)</h3>
                    <p className="text-sm text-[#6e6e73] font-medium mt-1 flex items-center gap-2">
                      <GraduationCap className="w-4 h-4 text-black" />
                      D K Govt Model HR Sec School, Natham
                    </p>
                    <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-black/5 border border-black/5 text-xs text-[#6e6e73]">
                      <span>Percentage: <strong className="text-black font-semibold">81.33%</strong></span>
                    </div>
                  </div>
                </CardTilt>
              </div>

              {/* Education Entry 4 */}
              <div className="relative">
                <div className="absolute -left-[41px] md:-left-[57px] top-1.5 w-6 h-6 rounded-full bg-[#f5f5f7] border border-black/20 flex items-center justify-center z-10">
                  <div className="w-2 h-2 rounded-full bg-black/20" />
                </div>
                
                <CardTilt>
                  <div className="glass-panel p-6 rounded-2xl transition-all duration-300 hover:border-black/20 hover:bg-white">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#6e6e73] px-2.5 py-1 rounded-full bg-black/5 border border-black/5 inline-block mb-3 font-display">
                      2020
                    </span>
                    <h3 className="text-xl font-bold font-display text-[#1d1d1f]">Secondary School Leaving Certificate (SSLC)</h3>
                    <p className="text-sm text-[#6e6e73] font-medium mt-1 flex items-center gap-2">
                      <GraduationCap className="w-4 h-4 text-black" />
                      D K Govt Model HR Sec School, Natham
                    </p>
                    <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-black/5 border border-black/5 text-xs text-[#6e6e73]">
                      <span>Percentage: <strong className="text-black font-semibold">81.6%</strong></span>
                    </div>
                  </div>
                </CardTilt>
              </div>

            </div>
          </motion.div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="scroll-mt-24">
          <motion.div
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-10"
          >
            <div className="flex items-center gap-4">
              <div className="h-[2px] w-12 bg-[#1d1d1f]" />
              <h2 className="text-2xl sm:text-3xl font-bold font-display uppercase tracking-wider text-[#1d1d1f]">
                Skills & Tech
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* Programming Category */}
              <CardTilt className="h-full">
                <div className="glass-panel p-6 rounded-2xl border-black/[0.05] hover:border-black/25 transition-all duration-300 flex flex-col gap-4 h-full relative overflow-hidden group hover:bg-white">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-black/5 text-black">
                      <Terminal className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold font-display text-base text-[#1d1d1f]">Programming</h3>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {["Python", "Java"].map((skill) => (
                      <span key={skill} className="px-3 py-1.5 rounded-lg bg-white border border-black/[0.08] text-xs text-[#6e6e73] font-medium hover:text-black hover:border-black/30 hover:bg-black/5 transition-all duration-300">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </CardTilt>

              {/* Database Category */}
              <CardTilt className="h-full">
                <div className="glass-panel p-6 rounded-2xl border-black/[0.05] hover:border-black/25 transition-all duration-300 flex flex-col gap-4 h-full relative overflow-hidden group hover:bg-white">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-black/5 text-black">
                      <Database className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold font-display text-base text-[#1d1d1f]">Database</h3>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {["MySQL"].map((skill) => (
                      <span key={skill} className="px-3 py-1.5 rounded-lg bg-white border border-black/[0.08] text-xs text-[#6e6e73] font-medium hover:text-black hover:border-black/30 hover:bg-black/5 transition-all duration-300">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </CardTilt>

              {/* Dev Tools Category */}
              <CardTilt className="h-full">
                <div className="glass-panel p-6 rounded-2xl border-black/[0.05] hover:border-black/25 transition-all duration-300 flex flex-col gap-4 h-full relative overflow-hidden group hover:bg-white">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-black/5 text-black">
                      <Wrench className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold font-display text-base text-[#1d1d1f]">Development</h3>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {["VS Code", "Android Studio", "Git", "GitHub"].map((skill) => (
                      <span key={skill} className="px-3 py-1.5 rounded-lg bg-white border border-black/[0.08] text-xs text-[#6e6e73] font-medium hover:text-black hover:border-black/30 hover:bg-black/5 transition-all duration-300">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </CardTilt>

              {/* Technologies Category */}
              <CardTilt className="h-full">
                <div className="glass-panel p-6 rounded-2xl border-black/[0.05] hover:border-black/25 transition-all duration-300 flex flex-col gap-4 h-full relative overflow-hidden group hover:bg-white">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-black/5 text-black">
                      <Cpu className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold font-display text-base text-[#1d1d1f]">Technologies</h3>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {["Machine Learning", "PHP", "Cloud Computing", "AI Tools"].map((skill) => (
                      <span key={skill} className="px-3 py-1.5 rounded-lg bg-white border border-black/[0.08] text-xs text-[#6e6e73] font-medium hover:text-black hover:border-black/30 hover:bg-black/5 transition-all duration-300">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </CardTilt>

            </div>
          </motion.div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="scroll-mt-24">
          <motion.div
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-10"
          >
            <div className="flex items-center gap-4">
              <div className="h-[2px] w-12 bg-[#1d1d1f]" />
              <h2 className="text-2xl sm:text-3xl font-bold font-display uppercase tracking-wider text-[#1d1d1f]">
                Featured Projects
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* Project 1 */}
              <CardTilt className="h-full">
                <div className="glass-panel p-6 rounded-2xl hover:border-black/20 hover:bg-white hover:shadow-md transition-all duration-500 flex flex-col justify-between h-full relative overflow-hidden group">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 rounded-xl bg-black/5 text-black group-hover:scale-105 transition-transform duration-300">
                        <Cpu className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] text-black/50 border border-black/10 bg-black/5 px-2 py-0.5 rounded-full font-mono font-medium uppercase tracking-wider">
                        Prediction App
                      </span>
                    </div>

                    <h3 className="text-lg font-bold font-display mb-3 text-[#1d1d1f] group-hover:text-[#0066cc] transition-colors duration-300">
                      Cryptocurrency Price Prediction
                    </h3>

                    <p className="text-sm text-[#6e6e73] leading-relaxed font-light mb-6">
                      Developed a cryptocurrency price prediction system using Python and LSTM to analyze Bitcoin, Ethereum, and Dogecoin historical market data.
                    </p>
                  </div>

                  <div>
                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {["Python", "LSTM", "NumPy", "SciPy", "ML"].map((tech) => (
                        <span key={tech} className="text-[10px] font-medium px-2 py-1 rounded bg-black/5 border border-black/5 text-[#6e6e73]">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between border-t border-black/5 pt-4">
                      <span className="text-xs text-[#6e6e73] font-light">Machine Learning</span>
                      <span className="inline-flex items-center gap-1 text-xs text-[#0066cc] group-hover:text-black font-semibold transition-all duration-300">
                        Details <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </div>
              </CardTilt>

              {/* Project 2 */}
              <CardTilt className="h-full">
                <div className="glass-panel p-6 rounded-2xl hover:border-black/20 hover:bg-white hover:shadow-md transition-all duration-500 flex flex-col justify-between h-full relative overflow-hidden group">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 rounded-xl bg-black/5 text-black group-hover:scale-105 transition-transform duration-300">
                        <Code className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] text-black/50 border border-black/10 bg-black/5 px-2 py-0.5 rounded-full font-mono font-medium uppercase tracking-wider">
                        Web Portal
                      </span>
                    </div>

                    <h3 className="text-lg font-bold font-display mb-3 text-[#1d1d1f] group-hover:text-[#0066cc] transition-colors duration-300">
                      Tourism Management System
                    </h3>

                    <p className="text-sm text-[#6e6e73] leading-relaxed font-light mb-6">
                      Developed a responsive web application using PHP and MySQL to manage tourism bookings, packages, and customer inquiries with centralized user/admin portals.
                    </p>
                  </div>

                  <div>
                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {["PHP", "MySQL", "HTML", "CSS"].map((tech) => (
                        <span key={tech} className="text-[10px] font-medium px-2 py-1 rounded bg-black/5 border border-black/5 text-[#6e6e73]">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between border-t border-black/5 pt-4">
                      <span className="text-xs text-[#6e6e73] font-light">Web Application</span>
                      <span className="inline-flex items-center gap-1 text-xs text-[#0066cc] group-hover:text-black font-semibold transition-all duration-300">
                        Details <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </div>
              </CardTilt>

              {/* Project 3 */}
              <CardTilt className="h-full">
                <div className="glass-panel p-6 rounded-2xl hover:border-black/20 hover:bg-white hover:shadow-md transition-all duration-500 flex flex-col justify-between h-full relative overflow-hidden group">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 rounded-xl bg-black/5 text-black group-hover:scale-105 transition-transform duration-300">
                        <Terminal className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] text-black/50 border border-black/10 bg-black/5 px-2 py-0.5 rounded-full font-mono font-medium uppercase tracking-wider">
                        Android App
                      </span>
                    </div>

                    <h3 className="text-lg font-bold font-display mb-3 text-[#1d1d1f] group-hover:text-[#0066cc] transition-colors duration-300">
                      Medi Guide Application
                    </h3>

                    <p className="text-sm text-[#6e6e73] leading-relaxed font-light mb-6">
                      Developed a dynamic Android mobile application using Java that provides users with custom medical guidance, local resource assistance, and symptom cataloging.
                    </p>
                  </div>

                  <div>
                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {["Java", "Android Studio", "XML"].map((tech) => (
                        <span key={tech} className="text-[10px] font-medium px-2 py-1 rounded bg-black/5 border border-black/5 text-[#6e6e73]">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between border-t border-black/5 pt-4">
                      <span className="text-xs text-[#6e6e73] font-light">Mobile App</span>
                      <span className="inline-flex items-center gap-1 text-xs text-[#0066cc] group-hover:text-black font-semibold transition-all duration-300">
                        Details <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </div>
              </CardTilt>

            </div>
          </motion.div>
        </section>

        {/* CERTIFICATIONS */}
        <section id="certifications" className="scroll-mt-24">
          <motion.div
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-10"
          >
            <div className="flex items-center gap-4">
              <div className="h-[2px] w-12 bg-[#1d1d1f]" />
              <h2 className="text-2xl sm:text-3xl font-bold font-display uppercase tracking-wider text-[#1d1d1f]">
                Certifications
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Cert 1 */}
              <CardTilt>
                <div className="glass-panel p-6 rounded-2xl flex items-start gap-4 hover:border-black/20 hover:bg-white transition-all duration-300 group">
                  <div className="p-3.5 rounded-xl bg-black/5 text-black group-hover:scale-105 transition-transform duration-300">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1d1d1f] text-base">AWS Serverless</h3>
                    <p className="text-sm text-[#0066cc] font-medium mt-1">Hands-on with Core AWS Services</p>
                    <span className="text-xs text-[#6e6e73] mt-2 block font-light">Udemy Certification</span>
                  </div>
                </div>
              </CardTilt>

              {/* Cert 2 */}
              <CardTilt>
                <div className="glass-panel p-6 rounded-2xl flex items-start gap-4 hover:border-black/20 hover:bg-white transition-all duration-300 group">
                  <div className="p-3.5 rounded-xl bg-black/5 text-black group-hover:scale-105 transition-transform duration-300">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1d1d1f] text-base">Electronics Sector Skills Council of India</h3>
                    <p className="text-sm text-[#0066cc] font-medium mt-1">Recognized by NCVET</p>
                    <span className="text-xs text-[#6e6e73] mt-2 block font-light">Government Recognized Skill Certification</span>
                  </div>
                </div>
              </CardTilt>

            </div>
          </motion.div>
        </section>

        {/* INTERESTS & LANGUAGES */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Interests */}
          <motion.div
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <div className="flex items-center gap-4">
              <div className="h-[2px] w-12 bg-[#1d1d1f]" />
              <h2 className="text-xl font-bold font-display uppercase tracking-wider text-[#1d1d1f]">
                Interests & Fields
              </h2>
            </div>
            
            <div className="glass-panel p-6 rounded-2xl flex flex-wrap gap-2.5">
              {[
                "Web Development",
                "Machine Learning",
                "Mobile App Development",
                "Cloud Computing",
                "Artificial Intelligence"
              ].map((interest) => (
                <div 
                  key={interest}
                  className="px-4 py-2 rounded-xl bg-white border border-black/10 text-sm text-[#6e6e73] hover:text-black hover:border-black/30 hover:bg-black/5 transition-all duration-300 cursor-default flex items-center gap-2 group"
                >
                  <Heart className="w-3.5 h-3.5 text-black group-hover:scale-110 transition-transform" />
                  {interest}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <div className="flex items-center gap-4">
              <div className="h-[2px] w-12 bg-[#1d1d1f]" />
              <h2 className="text-xl font-bold font-display uppercase tracking-wider text-[#1d1d1f]">
                Languages
              </h2>
            </div>
            
            <div className="glass-panel p-6 rounded-2xl flex flex-wrap gap-2.5">
              {[
                { lang: "Tamil", level: "Native / Bilingual" },
                { lang: "English", level: "Professional working" }
              ].map((langObj) => (
                <div 
                  key={langObj.lang}
                  className="px-5 py-3 rounded-xl bg-white border border-black/10 text-sm flex items-center justify-between w-full hover:border-black/20 hover:bg-black/5 transition-all duration-300 group"
                >
                  <span className="text-[#1d1d1f] font-semibold flex items-center gap-2">
                    <Languages className="w-4 h-4 text-black" />
                    {langObj.lang}
                  </span>
                  <span className="text-xs text-[#6e6e73] font-light group-hover:text-black transition-colors">
                    {langObj.level}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="scroll-mt-24">
          <motion.div
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-10"
          >
            <div className="flex items-center gap-4">
              <div className="h-[2px] w-12 bg-[#1d1d1f]" />
              <h2 className="text-2xl sm:text-3xl font-bold font-display uppercase tracking-wider text-[#1d1d1f]">
                Contact Me
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              
              {/* Contact Info Panel */}
              <div className="lg:col-span-2 flex flex-col gap-6">
                
                {/* Email card */}
                <CardTilt>
                  <a href="mailto:shanmugapriyan830@gmail.com" className="glass-panel p-6 rounded-2xl flex items-center gap-4 hover:border-black/20 hover:bg-white transition-all duration-300 group block">
                    <div className="p-3 rounded-xl bg-black/5 text-black group-hover:scale-105 transition-transform duration-300">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-[#6e6e73] block font-light">Email Address</span>
                      <span className="text-sm font-semibold text-[#1d1d1f] group-hover:text-[#0066cc] transition-colors break-all">
                        shanmugapriyan830@gmail.com
                      </span>
                    </div>
                  </a>
                </CardTilt>

                {/* Phone card */}
                <CardTilt>
                  <a href="tel:+919843258406" className="glass-panel p-6 rounded-2xl flex items-center gap-4 hover:border-black/20 hover:bg-white transition-all duration-300 group block">
                    <div className="p-3 rounded-xl bg-black/5 text-black group-hover:scale-105 transition-transform duration-300">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-[#6e6e73] block font-light">Phone Number</span>
                      <span className="text-sm font-semibold text-[#1d1d1f] group-hover:text-[#0066cc] transition-colors">
                        +91 9843258406
                      </span>
                    </div>
                  </a>
                </CardTilt>

                {/* LinkedIn Card */}
                <CardTilt>
                  <a 
                    href="https://linkedin.com/in/shanmuga-priyan-999a5431b" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="glass-panel p-6 rounded-2xl flex items-center gap-4 hover:border-black/20 hover:bg-white transition-all duration-300 group block"
                  >
                    <div className="p-3 rounded-xl bg-black/5 text-black group-hover:scale-105 transition-transform duration-300">
                      <Linkedin className="w-5 h-5" />
                    </div>
                    <div className="flex-1 flex items-center justify-between">
                      <div>
                        <span className="text-xs text-[#6e6e73] block font-light">LinkedIn Profile</span>
                        <span className="text-sm font-semibold text-[#1d1d1f] group-hover:text-[#0066cc] transition-colors">
                          shan-muga-priyan
                        </span>
                      </div>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#0066cc] transition-colors" />
                    </div>
                  </a>
                </CardTilt>

                {/* Location Card */}
                <div className="glass-panel p-6 rounded-2xl flex items-center gap-4 border-black/[0.05]">
                  <div className="p-3 rounded-xl bg-black/5 text-black">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-[#6e6e73] block font-light">Current Location</span>
                    <span className="text-sm font-semibold text-[#1d1d1f]">
                      Natham, Dindigul, Tamil Nadu
                    </span>
                  </div>
                </div>

              </div>

              {/* Contact Form Panel */}
              <div className="lg:col-span-3">
                <CardTilt>
                  <div className="glass-panel p-8 rounded-3xl relative overflow-hidden hover:bg-white transition-colors duration-555">
                    <AnimatePresence mode="wait">
                      {!formSubmitted ? (
                        <motion.form 
                          key="form"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          onSubmit={handleFormSubmit} 
                          className="flex flex-col gap-5"
                        >
                          <div>
                            <label htmlFor="name" className="text-xs font-semibold text-[#1d1d1f] uppercase tracking-wider block mb-2 font-display">
                              Name
                            </label>
                            <input
                              type="text"
                              id="name"
                              name="name"
                              value={formState.name}
                              onChange={handleInputChange}
                              placeholder="Your Name"
                              className="glass-input w-full px-5 py-3.5 rounded-xl text-sm placeholder:text-slate-400 focus:bg-white"
                            />
                            {errors.name && <span className="text-xs text-rose-500 mt-1 block">{errors.name}</span>}
                          </div>

                          <div>
                            <label htmlFor="email" className="text-xs font-semibold text-[#1d1d1f] uppercase tracking-wider block mb-2 font-display">
                              Email Address
                            </label>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              value={formState.email}
                              onChange={handleInputChange}
                              placeholder="yourname@example.com"
                              className="glass-input w-full px-5 py-3.5 rounded-xl text-sm placeholder:text-slate-400 focus:bg-white"
                            />
                            {errors.email && <span className="text-xs text-rose-500 mt-1 block">{errors.email}</span>}
                          </div>

                          <div>
                            <label htmlFor="message" className="text-xs font-semibold text-[#1d1d1f] uppercase tracking-wider block mb-2 font-display">
                              Message
                            </label>
                            <textarea
                              id="message"
                              name="message"
                              rows={4}
                              value={formState.message}
                              onChange={handleInputChange}
                              placeholder="Write your message here..."
                              className="glass-input w-full px-5 py-3.5 rounded-xl text-sm resize-none placeholder:text-slate-400 focus:bg-white"
                            />
                            {errors.message && <span className="text-xs text-rose-500 mt-1 block">{errors.message}</span>}
                          </div>

                          <button
                            type="submit"
                            className="mt-2 w-full py-4 rounded-xl font-semibold text-sm bg-[#1d1d1f] text-white hover:bg-black/90 hover:shadow-md transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                          >
                            Send Message
                            <Send className="w-4 h-4" />
                          </button>
                        </motion.form>
                      ) : (
                        <motion.div 
                          key="success"
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0 }}
                          className="flex flex-col items-center justify-center text-center py-12 gap-4"
                        >
                          <div className="p-4 rounded-full bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 animate-bounce">
                            <CheckCircle2 className="w-12 h-12" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold font-display text-black">Message Sent!</h3>
                            <p className="text-sm text-[#6e6e73] mt-2 max-w-xs font-light">
                              Thank you for reaching out, Shanmuga. I will get back to you as soon as possible!
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </CardTilt>
              </div>

            </div>
          </motion.div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="relative z-10 border-t border-black/5 py-8 mt-12 bg-[#f5f5f7]/85 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#6e6e73] font-light text-center sm:text-left">
            Designed & Developed by Wanderer Nova © 2025
          </p>
          <div className="flex items-center gap-4">
            <a 
              href="https://linkedin.com/in/shanmuga-priyan-999a5431b" 
              target="_blank" 
              rel="noreferrer" 
              className="text-[#6e6e73] hover:text-black transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a 
              href="mailto:shanmugapriyan830@gmail.com" 
              className="text-[#6e6e73] hover:text-black transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
