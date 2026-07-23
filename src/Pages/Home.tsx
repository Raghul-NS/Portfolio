import { useState, useEffect } from 'react';
import { ArrowUpRight, ArrowRight, CheckCircle2, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { 
  SiHtml5, 
  SiCss, 
  SiJavascript, 
  SiReact, 
  SiNodedotjs, 
  SiPython, 
  SiPostgresql, 
  SiGit 
} from 'react-icons/si';

import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Asset Imports
import avatarImg from '../assets/developer_avatar.png';
import techBadgeBg from '../assets/tech_badge_bg.png';
import dashboardMockup from '../assets/dashboard_mockup.png';
import krtMockup from '../assets/krt_mockup.png';
import clientImg from '../assets/testimonial_client.png';
import clientImg2 from '../assets/testimonial_client2.png';

function HeroSection() {
  return (
    <section id="home" className="py-12 md:py-20 lg:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Side Details */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8 text-left reveal-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 pl-3.5 pr-5 py-2 rounded-full bg-brand-teal/[0.06] text-brand-teal font-mono font-semibold text-[12.5px] tracking-[0.14em] uppercase">
              <span className="w-[18px] h-[18px] rounded-full bg-brand-teal/15 flex items-center justify-center flex-shrink-0">
                <span className="w-[9px] h-[9px] rounded-full bg-brand-teal"></span>
              </span>
              Available for work
            </div>

            {/* Main Headline */}
            <h1 className="font-sans font-extrabold text-4xl sm:text-5xl lg:text-6xl text-brand-navy tracking-tight leading-[1.1]">
              Hi, I'm a <br />
              <span className="bg-gradient-to-r from-brand-teal to-brand-green bg-clip-text text-transparent">
                Full Stack Developer
              </span>
            </h1>

            {/* Description */}
            <p className="font-sans text-gray-500 text-lg md:text-xl max-w-xl leading-relaxed">
              Showcasing my journey, projects, and skills in full-stack web development. 
              Passionate about building interactive and robust web applications with Node.js, React, and Google Sheets integrations.
            </p>

            {/* CTA Button */}
            <div className="pt-2">
              <a
                href="#works"
                className="inline-flex items-center gap-2.5 font-sans font-bold bg-brand-navy text-white px-8 py-4 rounded-full hover:bg-brand-teal transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 group"
              >
                Explore Projects
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Side Visual Block */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative w-full max-w-[520px]">
              
              {/* Main Cards Row (Photo + Info Card) */}
              <div className="grid grid-cols-12 gap-4 items-stretch mb-4">
                {/* Developer Avatar Card */}
                <div className="col-span-6 rounded-[2rem] overflow-hidden shadow-md border border-gray-border/60 bg-white aspect-[4/5] relative group reveal-scale delay-75">
                  <img
                    src={avatarImg}
                    alt="Raghul N.S"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Tech Dashboard Card */}
                <div className="col-span-6 rounded-[2rem] overflow-hidden border border-gray-border/70 shadow-sm relative aspect-[4/5] group bg-gray-50 reveal-scale delay-150">
                  {/* Background Tech Graphic */}
                  <img
                    src={techBadgeBg}
                    alt="Technology Background"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-[10s] group-hover:scale-105"
                  />
                  {/* Frosted Glass Overlay */}
                  <div className="absolute inset-0 bg-white/70 backdrop-blur-[6px]" />
                  
                  {/* Content (Absolute Layered) */}
                  <div className="absolute inset-0 p-5 flex flex-col justify-between z-10 text-left">
                    
                    {/* Window Title Bar */}
                    <div className="flex items-center justify-between border-b border-gray-200/50 pb-3">
                      <div className="flex gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                        <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                      </div>
                      <span className="font-mono text-[10px] text-gray-400 tracking-wider">activity_monitor.sh</span>
                    </div>

                    {/* Dashboard Metrics */}
                    <div className="space-y-4 my-auto">
                      
                      {/* Live System Status */}
                      <div className="flex items-center justify-between bg-white/40 p-2.5 rounded-xl border border-white/50">
                        <span className="font-mono text-[11px] text-brand-navy font-bold tracking-wide">STATUS:</span>
                        <div className="inline-flex items-center gap-1.5 bg-brand-green/10 text-brand-teal px-2 py-0.5 rounded-full font-mono text-[9px] font-bold uppercase tracking-wider">
                          <span className="relative flex h-1.5 w-1.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-teal opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-brand-teal"></span>
                          </span>
                          Active
                        </div>
                      </div>

                      {/* Equalizer/Activity Visualizer */}
                      <div className="bg-white/40 p-3 rounded-xl border border-white/50 space-y-2">
                        <span className="font-mono text-[10px] text-gray-400">DATA TRANSMISSION RATE:</span>
                        <div className="flex gap-1 items-end h-8 justify-between px-1">
                          <div className="w-1.5 bg-brand-teal rounded-full animate-[pulse_1s_infinite] h-4" />
                          <div className="w-1.5 bg-brand-teal rounded-full animate-[pulse_1.2s_infinite] h-7" />
                          <div className="w-1.5 bg-brand-teal rounded-full animate-[pulse_0.8s_infinite] h-5" />
                          <div className="w-1.5 bg-brand-teal rounded-full animate-[pulse_1.4s_infinite] h-8" />
                          <div className="w-1.5 bg-brand-teal rounded-full animate-[pulse_0.9s_infinite] h-3" />
                          <div className="w-1.5 bg-brand-teal rounded-full animate-[pulse_1.1s_infinite] h-6" />
                          <div className="w-1.5 bg-brand-teal rounded-full animate-[pulse_1.3s_infinite] h-4" />
                          <div className="w-1.5 bg-brand-teal rounded-full animate-[pulse_0.7s_infinite] h-5" />
                        </div>
                      </div>

                    </div>

                    {/* Simulated terminal output at bottom */}
                    <div className="bg-brand-navy/90 border border-brand-navy-light rounded-xl p-3 text-[10px] font-mono text-gray-300 shadow-sm">
                      <div className="flex items-center gap-1.5 text-brand-green-light">
                        <span className="text-gray-400">$</span> npm run deploy
                      </div>
                      <div className="text-gray-400 text-[9px] mt-1">✓ Build success in 320ms</div>
                      <div className="text-brand-green-light text-[9px] mt-0.5">● server listening on port 3000</div>
                    </div>

                  </div>
                </div>
              </div>

              {/* Bottom Actions Row (Social 2x2 Grid + Companies Banner) */}
              <div className="grid grid-cols-12 gap-4 items-stretch">
                {/* 2x2 Social Links Panel - Compressed padding/gaps */}
                <div className="col-span-5 grid grid-cols-2 gap-3.5 bg-white p-3.5 rounded-[2rem] border border-gray-border/60 shadow-sm items-center justify-items-center reveal-scale delay-200">
                  
                  {/* LinkedIn */}
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="w-12 h-12 rounded-full border border-gray-border flex items-center justify-center hover:scale-105 active:scale-95 shadow-sm hover:shadow-md transition-all duration-300 bg-white hover:bg-[#0077b5] text-[#0077b5] hover:text-white overflow-hidden group"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-5 h-5 fill-current transition-colors duration-300" viewBox="0 0 24 24">
                      <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.12 20.45H3.56V9H7.12v11.45zM5.34 7.43c-1.14 0-2.06-.92-2.06-2.06 0-1.14.92-2.06 2.06-2.06 1.14 0 2.06.92 2.06 2.06 0 1.14-.92 2.06-2.06 2.06zm15.11 13.02h-3.56v-5.604c0-3.368-.03-3.05-1.86-3.05-1.86 0-2.14 1.45-2.14 2.95v5.7H9.33V9h3.42v1.56h.05c.48-.9 1.64-1.86 3.39-1.86 3.63 0 4.3 2.39 4.3 5.5v6.25z"/>
                    </svg>
                  </a>

                  {/* GitHub */}
                  <a
                    href="https://github.com/Raghul799"
                    target="_blank"
                    rel="noreferrer"
                    className="w-12 h-12 rounded-full border border-gray-border flex items-center justify-center hover:scale-105 active:scale-95 shadow-sm hover:shadow-md transition-all duration-300 bg-white hover:bg-[#181717] text-[#181717] hover:text-white overflow-hidden group"
                    aria-label="GitHub"
                  >
                    <svg className="w-5 h-5 fill-current transition-colors duration-300" viewBox="0 0 24 24">
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                    </svg>
                  </a>

                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/918190962836"
                    target="_blank"
                    rel="noreferrer"
                    className="w-12 h-12 rounded-full border border-gray-border flex items-center justify-center hover:scale-105 active:scale-95 shadow-sm hover:shadow-md transition-all duration-300 bg-white hover:bg-[#25D366] text-[#25D366] hover:text-white overflow-hidden group"
                    aria-label="WhatsApp"
                  >
                    <svg className="w-5 h-5 fill-current transition-colors duration-300" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </a>

                  {/* Instagram */}
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    className="w-12 h-12 rounded-full border border-gray-border flex items-center justify-center hover:scale-105 active:scale-95 shadow-sm hover:shadow-md transition-all duration-300 bg-white hover:bg-gradient-to-tr hover:from-[#fdf497] hover:via-[#d6249f] hover:to-[#285AEB] overflow-hidden group"
                    aria-label="Instagram"
                  >
                    <svg className="w-5 h-5 transition-colors duration-300" viewBox="0 0 24 24" fill="none">
                      <defs>
                        <radialGradient id="ig-grad" cx="30%" cy="107%" r="130%">
                          <stop offset="0%" stopColor="#fdf497" />
                          <stop offset="5%" stopColor="#fdf497" />
                          <stop offset="45%" stopColor="#fd5949" />
                          <stop offset="60%" stopColor="#d6249f" />
                          <stop offset="90%" stopColor="#285AEB" />
                        </radialGradient>
                      </defs>
                      <rect x="2" y="2" width="20" height="20" rx="5" stroke="url(#ig-grad)" strokeWidth="2" className="group-hover:stroke-white transition-colors duration-300" />
                      <circle cx="12" cy="12" r="5" stroke="url(#ig-grad)" strokeWidth="2" className="group-hover:stroke-white transition-colors duration-300" />
                      <circle cx="18" cy="6" r="1.5" fill="url(#ig-grad)" className="group-hover:fill-white transition-colors duration-300" />
                    </svg>
                  </a>

                </div>

                {/* Brand Tagline & CTA Panel - Reduced spacing, margins, and sizes */}
                <div className="col-span-7 bg-gradient-to-r from-brand-teal to-brand-green p-4.5 md:p-5 rounded-[2rem] text-white shadow-sm flex flex-col justify-between border border-white/10 hover:brightness-105 transition-all text-left relative overflow-hidden group reveal-scale delay-300">
                  {/* Subtle background decoration (glowing circle) */}
                  <div className="absolute -right-10 -bottom-10 w-24 h-24 rounded-full bg-white/10 blur-xl group-hover:scale-110 transition-transform duration-700 pointer-events-none" />
                  
                  <div>
                    <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-brand-green-light">
                      MY PHILOSOPHY
                    </span>
                    <h4 className="font-sans font-black text-[17px] leading-tight text-white tracking-tight mt-1.5">
                      Design that connects.<br />
                      Code that performs.
                    </h4>
                  </div>
                  
                  <div className="mt-3 relative z-10">
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 border border-white/20 text-white font-sans font-bold text-[9px] uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-sm transition-all duration-300 hover:gap-3"
                    >
                      Let's collaborate
                      <span className="font-sans">&rarr;</span>
                    </a>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TechStackSection() {
  // SVG Logos for the primary tech track (matching reference image style)
  const mainTechs = [
    {
      name: 'HTML5',
      logo: (
        <SiHtml5 className="w-10 h-10 text-[#E34F26] transition-transform duration-300 group-hover:scale-110" />
      ),
      glowColor: 'group-hover:shadow-[0_8px_16px_rgba(227,79,38,0.12)] group-hover:border-[#E34F26]/30'
    },
    {
      name: 'CSS3',
      logo: (
        <SiCss className="w-10 h-10 text-[#1572B6] transition-transform duration-300 group-hover:scale-110" />
      ),
      glowColor: 'group-hover:shadow-[0_8px_16px_rgba(21,114,182,0.12)] group-hover:border-[#1572B6]/30'
    },
    {
      name: 'JavaScript',
      logo: (
        <SiJavascript className="w-10 h-10 text-[#F7DF1E] transition-transform duration-300 group-hover:scale-110" />
      ),
      glowColor: 'group-hover:shadow-[0_8px_16px_rgba(247,223,30,0.1)] group-hover:border-[#F7DF1E]/30'
    },
    {
      name: 'ReactJS',
      logo: (
        <SiReact className="w-10 h-10 text-[#61DAFB] animate-[spin_20s_linear_infinite] transition-transform duration-300 group-hover:scale-110" />
      ),
      glowColor: 'group-hover:shadow-[0_8px_16px_rgba(97,218,251,0.15)] group-hover:border-[#61DAFB]/30'
    },
    {
      name: 'NodeJS',
      logo: (
        <SiNodedotjs className="w-10 h-10 text-[#339933] transition-transform duration-300 group-hover:scale-110" />
      ),
      glowColor: 'group-hover:shadow-[0_8px_16px_rgba(51,153,51,0.12)] group-hover:border-[#339933]/30'
    },
    {
      name: 'Python',
      logo: (
        <SiPython className="w-10 h-10 text-[#3776AB] transition-transform duration-300 group-hover:scale-110" />
      ),
      glowColor: 'group-hover:shadow-[0_8px_16px_rgba(55,118,171,0.12)] group-hover:border-[#3776AB]/30'
    },
    {
      name: 'Postgres',
      logo: (
        <SiPostgresql className="w-10 h-10 text-[#336791] transition-transform duration-300 group-hover:scale-110" />
      ),
      glowColor: 'group-hover:shadow-[0_8px_16px_rgba(51,103,145,0.12)] group-hover:border-[#336791]/30'
    },
    {
      name: 'Git',
      logo: (
        <SiGit className="w-10 h-10 text-[#F05032] transition-transform duration-300 group-hover:scale-110" />
      ),
      glowColor: 'group-hover:shadow-[0_8px_16px_rgba(240,80,50,0.12)] group-hover:border-[#F05032]/30'
    }
  ];

  return (
    <section id="tech-stack" className="py-8 md:py-12 bg-gray-50 border-y border-gray-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 reveal">
        
        {/* Section Header */}
        <div className="text-left mb-8">
          <h2 className="font-sans font-black text-3xl sm:text-4xl text-brand-navy tracking-tight">
            Tech Stack
          </h2>
          <div className="w-12 h-[3px] bg-gradient-to-r from-brand-teal to-brand-green mt-3 rounded-full" />
        </div>

        {/* Horizontal Tech Logos Scroller (Ref design match) */}
        <div className="bg-white border border-gray-border/60 rounded-3xl p-6 md:p-8 shadow-sm overflow-x-auto">
          <div className="flex justify-between items-center gap-10 min-w-[650px] px-3">
            {mainTechs.map((tech) => (
              <div key={tech.name} className="flex flex-col items-center gap-3.5 group cursor-default">
                <div className={`p-3.5 bg-gray-50 border border-gray-100 rounded-2xl transition-all duration-300 ease-out group-hover:-translate-y-1.5 group-hover:bg-white ${tech.glowColor}`}>
                  {tech.logo}
                </div>
                <span className="font-sans font-bold text-xs uppercase tracking-wider text-gray-400 group-hover:text-brand-navy transition-colors">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

function WorksSection() {
  return (
    <section id="works" className="pt-12 pb-20 md:pt-16 md:pb-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 reveal">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-10">
          <div className="max-w-xl text-left">
            <h2 className="font-sans font-bold text-xs uppercase tracking-widest text-brand-teal">
              Works
            </h2>
            <p className="font-sans font-black text-3xl sm:text-4xl text-brand-navy mt-2 tracking-tight">
              My Selected Project Works
            </p>
            <div className="w-12 h-[3px] bg-gradient-to-r from-brand-teal to-brand-green mt-3.5 rounded-full" />
          </div>
          <div>
            <a 
              href="#contact"
              className="inline-flex items-center gap-2 font-sans font-bold text-sm text-brand-navy hover:text-brand-teal transition-colors group"
            >
              Show all
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Projects Grid (matching reference layout) */}
        <div className="space-y-8">
          
          {/* Row 1: Two Large Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Card Left - Azhizen ERP System */}
            <div className="bg-gray-50 border border-gray-100 rounded-3xl p-4 md:p-5 flex flex-col justify-between hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(20,184,166,0.12)] hover:border-brand-teal/30 hover:bg-white transition-all duration-300 ease-out group reveal-left delay-75">
              <div>
                <h3 className="font-sans font-black text-xl text-brand-navy leading-tight">
                  Azhizen ERP System
                </h3>
              </div>
              <div className="mt-4 rounded-2xl overflow-hidden shadow-sm border border-gray-border/40 bg-white aspect-[16/9]">
                <img 
                  src={dashboardMockup} 
                  alt="Azhizen ERP Project Preview" 
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500" 
                />
              </div>
              
              {/* Purpose & Tech Stack (Two-Line Content) */}
              <div className="mt-4 text-left font-sans leading-relaxed">
                <p className="text-xs font-semibold text-brand-navy">
                  A unified business dashboard designed to manage daily operations, track staff attendance, and process payroll workflows.
                </p>
                <p className="text-[11px] text-gray-400 mt-1">
                  Delivers real-time database sync via Supabase and offline desktop access (.exe) with Electron.
                </p>
              </div>
            </div>

            {/* Card Right - KRT Tech Solutions Portfolio */}
            <div className="bg-gray-50 border border-gray-100 rounded-3xl p-4 md:p-5 flex flex-col justify-between hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(34,197,94,0.12)] hover:border-brand-green/30 hover:bg-white transition-all duration-300 ease-out group reveal-right delay-75">
              <div>
                <div className="flex justify-between items-start">
                  <h3 className="font-sans font-black text-xl text-brand-navy leading-tight">
                    KRT Tech Solutions Portfolio
                  </h3>
                  <div className="flex items-center gap-1 bg-brand-green/10 border border-brand-green/20 px-2 py-0.5 rounded-full text-[9px] font-bold text-brand-teal uppercase">
                    <CheckCircle2 className="w-2.5 h-2.5" />
                    Live
                  </div>
                </div>
              </div>
              <div className="mt-4 rounded-2xl overflow-hidden shadow-sm border border-gray-border/40 bg-white aspect-[16/9]">
                <img 
                  src={krtMockup} 
                  alt="KRT Tech Solutions Portfolio Preview" 
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500" 
                />
              </div>

              {/* Purpose & Tech Stack (Two-Line Content) */}
              <div className="mt-4 text-left font-sans leading-relaxed">
                <p className="text-xs font-semibold text-brand-navy">
                  An engineering agency portfolio built to showcase embedded systems, IoT developments, and edge AI automations.
                </p>
                <p className="text-[11px] text-gray-400 mt-1">
                  Features interactive research catalogs, live sensor telemetry dashboards, and hardware product listings.
                </p>
              </div>
            </div>

          </div>

          {/* Row 2: Secondary Cards (Typography Block + Design System Card) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Card Bottom Left: Developer Resources Card (Git & terminal cheat sheet) */}
            <div className="lg:col-span-4 bg-gradient-to-br from-brand-navy to-brand-navy-light rounded-3xl p-8 text-white flex flex-col justify-between relative overflow-hidden group min-h-[320px] hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(15,23,42,0.3)] transition-all duration-300 ease-out reveal-left delay-150">
              
              {/* Background Decorative Code Braces Watermark */}
              <div className="absolute bottom-[-15px] right-4 text-[140px] font-sans font-black opacity-8 select-none pointer-events-none group-hover:scale-105 transition-transform duration-700">
                {"{}"}
              </div>

              <div>
                <span className="font-sans font-bold text-xs uppercase tracking-wider text-brand-teal">Resources</span>
                <h3 className="font-sans font-black text-[26px] leading-tight mt-3 text-white tracking-tight">
                  Essential Git & terminal cheat sheet
                </h3>
              </div>

              <div className="z-10 mt-auto">
                <p className="font-sans text-sm text-gray-300 max-w-[240px] mb-5 leading-relaxed">
                  Curated command cheat sheets and terminal workflows to accelerate daily dev cycles.
                </p>
                <div className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                  <ArrowRight className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>

            {/* Card Bottom Right: Figma Design System */}
            <div className="lg:col-span-8 bg-gray-50 border border-gray-100 rounded-3xl p-8 flex flex-col md:flex-row justify-between gap-8 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(168,85,247,0.12)] hover:border-purple-400/30 hover:bg-white transition-all duration-300 ease-out group reveal-right delay-150">
              <div className="flex flex-col justify-between max-w-sm">
                <div>
                  <div className="w-12 h-12 bg-white rounded-2xl border border-gray-border/60 flex items-center justify-center shadow-sm mb-6">
                    <svg className="w-6 h-6 text-brand-teal" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8.5 12a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0zm0-7a3.5 3.5 0 1 1 7 0v3.5H8.5V5zm0 14a3.5 3.5 0 0 1 0-7H12v3.5a3.5 3.5 0 0 1-3.5 3.5zm7-7a3.5 3.5 0 0 1-3.5 3.5H12V12h3.5zm0-3.5V5a3.5 3.5 0 0 1 0 7H15.5V8.5z"/>
                    </svg>
                  </div>
                  <h3 className="font-sans font-black text-2xl text-brand-navy leading-tight">
                    Figma design system starter kit
                  </h3>
                  <p className="font-sans text-sm text-gray-500 mt-2.5">
                    Foundations for color, typography, and spacing to kick start UI projects with full component sets.
                  </p>
                </div>
                
                <div className="mt-8">
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-brand-teal hover:underline cursor-pointer">
                    Download Toolkit
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>

              {/* Illustration mockup list side of figma card */}
              <div className="flex-1 bg-white border border-gray-border/40 rounded-2xl p-5 shadow-sm space-y-4 max-w-md w-full">
                <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                  <span className="text-xs font-sans font-bold text-brand-navy">Typography Style Guide</span>
                  <span className="text-[10px] font-sans text-gray-400">Fig. v1.2</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center p-2 rounded-lg hover:bg-gray-50 transition-colors">
                    <span className="font-sans font-bold text-sm text-brand-navy">H1 Title Bold</span>
                    <span className="font-mono text-[10px] text-gray-400">32px / 120%</span>
                  </div>
                  <div className="flex justify-between items-center p-2 rounded-lg hover:bg-gray-50 transition-colors">
                    <span className="font-sans font-bold text-sm text-brand-navy text-gray-600">Body Regular</span>
                    <span className="font-mono text-[10px] text-gray-400">16px / 150%</span>
                  </div>
                  <div className="flex justify-between items-center p-2 rounded-lg hover:bg-gray-50 transition-colors">
                    <span className="font-sans font-bold text-sm text-brand-navy text-gray-400">Caption Small</span>
                    <span className="font-mono text-[10px] text-gray-400">12px / 140%</span>
                  </div>
                </div>
                <div className="pt-2 flex gap-2">
                  <div className="h-6 w-6 rounded-full bg-brand-teal shadow-inner" />
                  <div className="h-6 w-6 rounded-full bg-brand-green shadow-inner" />
                  <div className="h-6 w-6 rounded-full bg-brand-navy shadow-inner" />
                  <div className="h-6 w-6 rounded-full bg-gray-200 shadow-inner" />
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

function TestimonialsSection() {
  const [currentPage, setCurrentPage] = useState(0);

  // Local observer to trigger reveal-scale animations when reviews page changes
  useEffect(() => {
    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
            }
          });
        },
        {
          threshold: 0.05,
          rootMargin: '0px 0px -50px 0px'
        }
      );

      const elements = document.querySelectorAll('#testimonials-grid .reveal-scale');
      elements.forEach((el) => observer.observe(el));

      return () => {
        elements.forEach((el) => observer.unobserve(el));
      };
    }, 60);

    return () => clearTimeout(timer);
  }, [currentPage]);

  const pageReviews = [
    {
      left: [
        {
          name: 'Molly Hellmuth',
          role: 'Product designer at UI Prep',
          avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100&q=80',
          stars: 5,
          social: 'none',
          text: "Raghul does an amazing job breaking down complex frontend systems into clean, reusable React components. It's a great resource for anyone looking to scale their web applications."
        },
        {
          name: 'Mitchell Clements',
          role: 'Sr. Product Design Manager',
          avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80',
          stars: 5,
          social: 'linkedin',
          text: "Raghul's setups are incredibly clean. I adopted his Supabase setups to streamline our dashboards, which saved our development team dozens of hours."
        },
        {
          name: 'Leonard Ugorji',
          role: 'Product designer',
          avatar: 'https://images.unsplash.com/photo-1500048993953-d23a436266cf?auto=format&fit=crop&w=100&h=100&q=80',
          stars: 5,
          social: 'linkedin',
          text: 'Raghul is a phenomenal full-stack developer. His attention to detail in motion design, clean code structure, and Supabase database optimization is outstanding. Highly recommended!'
        }
      ],
      center: [
        {
          name: 'UI Adrian',
          role: '@uiuxadrian',
          avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&h=100&q=80',
          stars: 0,
          social: 'x',
          text: "Saw Raghul's React component library when it launched :) I've been following his development work for a few years now, extremely clean coder."
        }
      ],
      right: [
        {
          name: 'Jordan Hughes',
          role: 'Product designer at Untitled UI',
          avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=100&h=100&q=80',
          stars: 5,
          social: 'none',
          text: "I've been following Raghul's code designs for years, he's always been a big inspiration. His repository layouts are clear, concise, and packed full of great frontend architecture."
        },
        {
          name: 'Garron Engstrom',
          role: 'Social Impact Designer',
          avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&h=100&q=80',
          stars: 5,
          social: 'linkedin',
          text: "Whenever junior developers ask how to structure React apps for production, I point them to Raghul's repositories. His clean architectures are unmatched."
        },
        {
          name: 'Patrick Morgan',
          role: '@itspat_dev',
          avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&h=100&q=80',
          stars: 5,
          social: 'x',
          text: "Raghul's Electron templates are a lifesaver. Clean code, perfect desktop encapsulation, and beautiful micro-animations."
        }
      ],
      featured: {
        name: 'Rolf Henke',
        role: 'Senior Engineering Manager at Amazon',
        image: clientImg,
        stars: 5,
        text: '"Raghul possesses a rare combination of visual styling excellence and backend discipline. Clean code, great APIs, highly cooperative."'
      }
    },
    {
      left: [
        {
          name: 'Sarah Jenkins',
          role: 'Product Designer at Figma',
          avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&h=100&q=80',
          stars: 5,
          social: 'none',
          text: 'Raghul is exceptionally talented at turning design system components into production-grade React code. The layouts are pixel-perfect and highly maintainable.'
        },
        {
          name: 'Alexander Wright',
          role: 'VP of Engineering at Stripe',
          avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&h=100&q=80',
          stars: 5,
          social: 'linkedin',
          text: 'Scaling our dashboards required high-performance React architectures. Raghul integrated our custom hooks and state management hooks with zero issues.'
        },
        {
          name: 'Elena Rostova',
          role: 'Frontend Lead at JetBrains',
          avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=100&h=100&q=80',
          stars: 5,
          social: 'linkedin',
          text: 'Raghul has a rare command over typescript typing and project architectures. His boilerplates are a masterclass in modern package structures. Highly collaborative developer!'
        }
      ],
      center: [
        {
          name: 'Dev Danny',
          role: '@danny_codes',
          avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&h=100&q=80',
          stars: 0,
          social: 'x',
          text: "Been utilizing Raghul's Vite setup files for all my client projects lately. Unbelievably fast dev servers and zero build overhead. Pure gold."
        }
      ],
      right: [
        {
          name: 'Clara Oswald',
          role: 'UX Researcher at Microsoft',
          avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=100&h=100&q=80',
          stars: 5,
          social: 'none',
          text: "The accessibility and semantic markup in Raghul's projects are top-notch. He is highly empathetic to user interactions and builds clean keyboard navigation."
        },
        {
          name: 'Hassan Al-Sabbah',
          role: 'Principal Architect at Oracle',
          avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80',
          stars: 5,
          social: 'linkedin',
          text: "Raghul's database schema migrations were flawlessly designed. His schema isolation and database security setups are extremely robust and secure."
        },
        {
          name: 'Sophie Turner',
          role: '@sophie_dev',
          avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100&q=80',
          stars: 5,
          social: 'x',
          text: "Raghul's Tailwind layouts are an absolute joy to read and customize. Perfectly responsive across even the strangest phone viewports. It saved us days of custom responsive CSS coding."
        }
      ],
      featured: {
        name: 'Marcus Vance',
        role: 'Director of Product at Salesforce',
        image: clientImg2,
        stars: 5,
        text: '"Raghul delivers high-fidelity frontend systems that stand up to enterprise-level stress tests. Excellent timing, robust documentation, and clean Git practices."'
      }
    }
  ];

  const currentReviews = pageReviews[currentPage];

  const TestimonialCard = ({ item, isLast, className = '', style = {} }: { item: any; isLast?: boolean; className?: string; style?: React.CSSProperties }) => (
    <div 
      style={style}
      className={`bg-white border border-gray-border/50 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between ${isLast ? 'flex-grow' : ''} ${className}`}
    >
      <div>
        {/* Header: Avatar, Info, Social logo */}
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-3">
            <img 
              src={item.avatar} 
              alt={item.name} 
              className="w-10 h-10 rounded-full object-cover border border-gray-100" 
            />
            <div className="text-left">
              <h4 className="font-sans font-extrabold text-sm text-brand-navy leading-tight">{item.name}</h4>
              <p className="font-sans text-[11px] text-gray-400 mt-0.5">{item.role}</p>
            </div>
          </div>
          {item.social === 'linkedin' && (
            <svg className="w-4 h-4 text-[#0077b5] mt-0.5 select-none" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          )}
          {item.social === 'x' && (
            <svg className="w-3.5 h-3.5 text-black mt-0.5 select-none" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          )}
        </div>

        {/* Stars Row */}
        {item.stars > 0 && (
          <div className="flex gap-0.5 text-amber-400 mb-3 select-none">
            {[...Array(item.stars)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-current" />
            ))}
          </div>
        )}

        {/* Quote text */}
        <p className="font-sans text-xs text-gray-500 leading-relaxed text-left">
          {item.text}
        </p>
      </div>
    </div>
  );

  return (
    <section className="pt-12 pb-10 md:pt-16 md:pb-14 bg-gray-50 border-t border-gray-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left max-w-xl mb-12">
          <h2 className="font-sans font-bold text-xs uppercase tracking-widest text-brand-teal">
            Reviews
          </h2>
          <p className="font-sans font-black text-3xl sm:text-4xl text-brand-navy mt-2 tracking-tight">
            Loved by thousands of users
          </p>
          <div className="w-12 h-[3px] bg-gradient-to-r from-brand-teal to-brand-green mt-3.5 rounded-full" />
          <p className="font-sans text-sm text-gray-500 mt-3.5 max-w-md">
            Read testimonials from design leaders, developers, and product managers about my code quality and work ethics.
          </p>
        </div>

        {/* 3-Column Testimonial Layout with key to reset animations on page change */}
        <div id="testimonials-grid" key={currentPage} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column */}
          <div className="lg:col-span-4 flex flex-col gap-6 min-h-full">
            {currentReviews.left.map((item, idx) => (
              <TestimonialCard 
                key={idx} 
                item={item} 
                isLast={idx === currentReviews.left.length - 1} 
                className="reveal-scale"
                style={{ transitionDelay: `${150 + idx * 150}ms` }}
              />
            ))}
          </div>

          {/* Middle Column - Video review stays */}
          <div className="lg:col-span-4 flex flex-col gap-6 min-h-full">
            {currentReviews.center.map((item, idx) => (
              <TestimonialCard 
                key={idx} 
                item={item} 
                isLast={idx === currentReviews.center.length - 1} 
                className="reveal-scale"
                style={{ transitionDelay: `${600 + idx * 150}ms` }}
              />
            ))}

            {/* Featured Image/Video Testimonial Card */}
            <div 
              style={{ transitionDelay: '0ms' }}
              className="bg-white border border-gray-border/60 rounded-3xl p-5 shadow-sm flex flex-col justify-start gap-3 group flex-grow reveal-scale"
            >
              
              {/* Portrait Image Only (stretches to fill space) */}
              <div className="relative w-full flex-grow min-h-[260px] lg:min-h-[280px] max-h-[300px] rounded-2xl overflow-hidden border border-gray-border/40 shadow-inner">
                <img 
                  src={currentReviews.featured.image} 
                  alt="Featured Client Testimonial" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
              </div>

              {/* Testimonial Quote under image */}
              <div className="text-left mt-1">
                <div className="flex gap-0.5 text-amber-400 mb-1.5 select-none">
                  {[...Array(currentReviews.featured.stars)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <h4 className="font-sans font-black text-sm text-brand-navy">{currentReviews.featured.name}</h4>
                <p className="font-sans text-[11px] text-gray-400">{currentReviews.featured.role}</p>
                <p className="font-sans text-xs text-gray-500 mt-2 leading-relaxed italic">
                  {currentReviews.featured.text}
                </p>
              </div>

            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-4 flex flex-col gap-6 min-h-full">
            {currentReviews.right.map((item, idx) => (
              <TestimonialCard 
                key={idx} 
                item={item} 
                isLast={idx === currentReviews.right.length - 1} 
                className="reveal-scale"
                style={{ transitionDelay: `${750 + idx * 150}ms` }}
              />
            ))}
          </div>

        </div>

        {/* Bottom Navigation Row */}
        <div className="flex justify-center items-center gap-4 mt-8">
          <button 
            onClick={() => setCurrentPage((prev) => (prev === 0 ? 1 : 0))}
            className="w-12 h-12 rounded-full border border-gray-border bg-white text-brand-navy hover:bg-brand-teal hover:text-white hover:border-brand-teal flex items-center justify-center transition-all duration-300 shadow-sm active:scale-95 cursor-pointer"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <span className="font-sans text-xs text-gray-400 font-bold select-none">
            {currentPage + 1} / 2
          </span>
          <button 
            onClick={() => setCurrentPage((prev) => (prev === 0 ? 1 : 0))}
            className="w-12 h-12 rounded-full border border-gray-border bg-white text-brand-navy hover:bg-brand-teal hover:text-white hover:border-brand-teal flex items-center justify-center transition-all duration-300 shadow-sm active:scale-95 cursor-pointer"
            aria-label="Next review"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
}

function LetsTalkSection() {
  return (
    <section id="lets-talk" className="pt-6 pb-12 md:pt-8 md:pb-16 bg-white select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 reveal">
        
        {/* Jet-Black Call-to-Action Card */}
        <div className="relative bg-black rounded-[36px] p-8 py-16 md:py-20 md:px-12 text-center overflow-hidden shadow-xl border border-white/5 group">
          
          {/* Overlapping 3D Dark Spheres */}
          <div className="absolute top-[-80%] left-[-15%] w-[80%] aspect-square rounded-full bg-gradient-to-br from-neutral-800/60 to-black/90 opacity-60 pointer-events-none mix-blend-screen shadow-[inset_-10px_-10px_30px_rgba(0,0,0,0.8),10px_10px_30px_rgba(0,0,0,0.5)] border-r border-b border-neutral-700/10" />
          <div className="absolute bottom-[-60%] left-[-10%] w-[50%] aspect-square rounded-full bg-gradient-to-tr from-neutral-900 via-neutral-800 to-black opacity-80 pointer-events-none mix-blend-screen shadow-[inset_10px_10px_35px_rgba(255,255,255,0.05),-10px_-10px_35px_rgba(0,0,0,0.8)] border border-neutral-700/5" />
          <div className="absolute top-[-30%] right-[-15%] w-[60%] aspect-square rounded-full bg-gradient-to-bl from-neutral-800 via-neutral-900 to-black opacity-75 pointer-events-none mix-blend-screen shadow-[inset_10px_10px_40px_rgba(255,255,255,0.05)] border border-neutral-700/5" />
          <div className="absolute bottom-[-80%] right-[5%] w-[75%] aspect-square rounded-full bg-gradient-to-tl from-neutral-900 via-neutral-800 to-black opacity-85 pointer-events-none mix-blend-screen shadow-[inset_15px_15px_45px_rgba(255,255,255,0.05)] border border-neutral-700/5" />

          {/* Subtitle Badge */}
          <div className="relative z-10 inline-block font-sans font-bold text-[10px] sm:text-xs uppercase tracking-[0.25em] bg-gradient-to-r from-brand-teal to-brand-green bg-clip-text text-transparent mb-6 select-none">
            Start a project!
          </div>

          {/* Main heading */}
          <h2 className="relative z-10 font-sans font-medium md:font-semibold text-2xl sm:text-3xl lg:text-4xl text-white max-w-4xl mx-auto tracking-tight leading-[1.3] mb-8 select-text">
            <span className="bg-gradient-to-r from-brand-teal to-brand-green bg-clip-text text-transparent">Got an idea?</span> Let's make it happen. <br />
            Let's connect and see what we can create together.
          </h2>

          {/* Centered Pill Button */}
          <div className="relative z-10 flex justify-center">
            <Link
              to="/lets-talk"
              className="inline-flex items-center font-sans font-bold text-sm bg-neutral-200 text-neutral-900 px-10 py-4 rounded-2xl hover:bg-gradient-to-r hover:from-brand-teal hover:to-brand-green hover:text-white hover:scale-105 active:scale-95 transition-all duration-300 shadow-md select-none"
            >
              Let's Talk
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-brand-navy antialiased selection:bg-brand-teal selection:text-white">
      <Navbar />
      <main>
        <HeroSection />
        <TechStackSection />
        <WorksSection />
        <TestimonialsSection />
        <LetsTalkSection />
      </main>
      <Footer />
    </div>
  );
}
