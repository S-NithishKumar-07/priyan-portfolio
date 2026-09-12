"use client";

import React from "react";
import { Printer, ArrowLeft, Mail, Phone, MapPin, Linkedin, ExternalLink } from "lucide-react";

export default function ResumePage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 p-4 md:p-12 font-sans selection:bg-slate-200">
      
      {/* Control bar - hidden on print */}
      <div className="max-w-4xl mx-auto mb-8 flex justify-between items-center print:hidden">
        <a 
          href="/" 
          className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 hover:text-slate-850 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Portfolio
        </a>
        <button
          onClick={handlePrint}
          className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider bg-slate-900 text-white hover:bg-slate-800 shadow transition-all duration-300"
        >
          <Printer className="w-4 h-4" />
          Print / Save PDF
        </button>
      </div>

      {/* Main Resume Sheet */}
      <div className="max-w-4xl mx-auto bg-white border border-slate-200 p-8 sm:p-12 rounded-xl shadow-sm print:shadow-none print:border-none print:p-0">
        
        {/* Name and Title */}
        <div className="text-center border-b border-slate-200 pb-8 mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 uppercase">
            Shanmuga Priyan B
          </h1>
          <p className="text-xs sm:text-sm font-semibold text-slate-500 uppercase tracking-widest mt-2">
            MCA Student | Python Developer | Machine Learning Enthusiast
          </p>

          {/* Quick contact list */}
          <div className="flex flex-wrap justify-center items-center gap-y-2 gap-x-6 text-xs text-slate-600 mt-6">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-slate-400" />
              Natham, Dindigul, Tamil Nadu
            </span>
            <a href="mailto:shanmugapriyan830@gmail.com" className="flex items-center gap-1.5 hover:text-slate-900">
              <Mail className="w-3.5 h-3.5 text-slate-400" />
              shanmugapriyan830@gmail.com
            </a>
            <a href="tel:+919843258406" className="flex items-center gap-1.5 hover:text-slate-900">
              <Phone className="w-3.5 h-3.5 text-slate-400" />
              +91 9843258406
            </a>
            <a 
              href="https://linkedin.com/in/shanmuga-priyan-999a5431b" 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center gap-1.5 hover:text-slate-900 print:after:content-['_(linkedin.com/in/shanmuga-priyan-999a5431b)'] print:after:text-[10px]"
            >
              <Linkedin className="w-3.5 h-3.5 text-slate-400" />
              shan-muga-priyan
            </a>
          </div>
        </div>

        {/* Resume Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Column Left (Main Information) */}
          <div className="md:col-span-2 flex flex-col gap-8">
            
            {/* Education Section */}
            <div>
              <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b-2 border-slate-900 pb-1.5 mb-4">
                Education
              </h2>
              <div className="flex flex-col gap-5">
                <div>
                  <div className="flex justify-between items-baseline gap-2">
                    <h3 className="text-sm font-bold text-slate-900">Master of Computer Applications (MCA)</h3>
                    <span className="text-xs text-slate-500 shrink-0 font-medium">2025 - Present</span>
                  </div>
                  <p className="text-xs text-slate-600 font-medium">Bharathiar University, Coimbatore</p>
                </div>
                
                <div>
                  <div className="flex justify-between items-baseline gap-2">
                    <h3 className="text-sm font-bold text-slate-900">Bachelor of Science in Computer Science</h3>
                    <span className="text-xs text-slate-500 shrink-0 font-medium">2022 - 2025</span>
                  </div>
                  <p className="text-xs text-slate-600 font-medium">The American College, Madurai</p>
                  <p className="text-[11px] text-slate-500 mt-1">CGPA: 7.1</p>
                </div>

                <div>
                  <div className="flex justify-between items-baseline gap-2">
                    <h3 className="text-sm font-bold text-slate-900">Higher Secondary Certificate (HSC)</h3>
                    <span className="text-xs text-slate-500 shrink-0 font-medium">2022</span>
                  </div>
                  <p className="text-xs text-slate-600 font-medium">D K Govt Model HR Sec School, Natham</p>
                  <p className="text-[11px] text-slate-500 mt-1">Percentage: 81.33%</p>
                </div>

                <div>
                  <div className="flex justify-between items-baseline gap-2">
                    <h3 className="text-sm font-bold text-slate-900">Secondary School Leaving Certificate (SSLC)</h3>
                    <span className="text-xs text-slate-500 shrink-0 font-medium">2020</span>
                  </div>
                  <p className="text-xs text-slate-600 font-medium">D K Govt Model HR Sec School, Natham</p>
                  <p className="text-[11px] text-slate-500 mt-1">Percentage: 81.6%</p>
                </div>
              </div>
            </div>

            {/* Projects Section */}
            <div>
              <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b-2 border-slate-900 pb-1.5 mb-4">
                Projects
              </h2>
              <div className="flex flex-col gap-6">
                
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Cryptocurrency Price Prediction</h3>
                  <p className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider mt-0.5">
                    Python | LSTM | NumPy | SciPy | Machine Learning
                  </p>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed font-light">
                    Developed a cryptocurrency price prediction system using Python and LSTM to analyze Bitcoin, Ethereum, and Dogecoin historical market data. Implemented data scaling, neural net layers, and visualized trend forecast lines.
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-slate-900">Tourism Management System</h3>
                  <p className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider mt-0.5">
                    PHP | MySQL | HTML | CSS
                  </p>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed font-light">
                    Developed a web application using PHP and MySQL to manage tourism bookings, packages, and customer inquiries. Designed distinct administrator dashboards and client portals for registration, billing, and packages management.
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-slate-900">Medi Guide Mobile Application</h3>
                  <p className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider mt-0.5">
                    Java | Android Studio | XML
                  </p>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed font-light">
                    Developed an Android mobile application using Java that provides users with medical guidance, location assistance, catalogued emergency contacts, and first-aid recommendations.
                  </p>
                </div>
                
              </div>
            </div>

          </div>

          {/* Column Right (Sidebar details) */}
          <div className="flex flex-col gap-8 border-t border-slate-200 pt-6 md:border-t-0 md:pt-0 md:pl-4 md:border-l md:border-slate-100">
            
            {/* Skills */}
            <div>
              <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b-2 border-slate-900 pb-1.5 mb-4">
                Skills
              </h2>
              <div className="flex flex-col gap-4">
                <div>
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">Programming</h4>
                  <p className="text-xs text-slate-800 font-medium">Python, Java</p>
                </div>
                <div>
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">Database</h4>
                  <p className="text-xs text-slate-800 font-medium">MySQL</p>
                </div>
                <div>
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">Tools</h4>
                  <p className="text-xs text-slate-800 font-medium">VS Code, Android Studio, Git, GitHub</p>
                </div>
                <div>
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">Technologies</h4>
                  <p className="text-xs text-slate-800 font-medium">Machine Learning, PHP, Cloud Computing, AI Tools</p>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b-2 border-slate-900 pb-1.5 mb-4">
                Certifications
              </h2>
              <ul className="text-xs text-slate-700 flex flex-col gap-3 font-medium">
                <li>
                  <div className="font-bold text-slate-900">AWS Serverless</div>
                  <div className="text-[10px] text-slate-500">Core AWS Services - Udemy</div>
                </li>
                <li>
                  <div className="font-bold text-slate-900">Electronics Sector Skills</div>
                  <div className="text-[10px] text-slate-500">Recognized by NCVET</div>
                </li>
              </ul>
            </div>

            {/* Interests */}
            <div>
              <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b-2 border-slate-900 pb-1.5 mb-4">
                Interests
              </h2>
              <div className="flex flex-wrap gap-1.5">
                {[
                  "Web Dev",
                  "Machine Learning",
                  "Mobile Apps",
                  "Cloud",
                  "AI"
                ].map((interest) => (
                  <span key={interest} className="text-[10px] font-medium bg-slate-100 px-2.5 py-1 rounded text-slate-700 border border-slate-200">
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div>
              <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b-2 border-slate-900 pb-1.5 mb-4">
                Languages
              </h2>
              <div className="text-xs font-medium text-slate-700 flex flex-col gap-1.5">
                <div className="flex justify-between">
                  <span>Tamil</span>
                  <span className="text-slate-400 font-light">Native</span>
                </div>
                <div className="flex justify-between">
                  <span>English</span>
                  <span className="text-slate-400 font-light">Professional</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
