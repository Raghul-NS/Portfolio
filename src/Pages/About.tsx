import { useState, useEffect } from 'react';
import { ArrowRight, Download, Compass, Layers, Terminal, Rocket, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Asset Imports
import avatarImg from '../assets/about me avatar.png';

export default function About() {
  const [activeStep, setActiveStep] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [revealedSteps, setRevealedSteps] = useState<boolean[]>([false, false, false, false, false]);
  const [revealedServices, setRevealedServices] = useState<boolean[]>([false, false, false, false, false]);
  const [revealedExp, setRevealedExp] = useState<boolean[]>([false, false, false]);

  // Observe Experience Cards on currentPage change
  useEffect(() => {
    setRevealedExp([false, false, false]);

    const observers: IntersectionObserver[] = [];
    const timer = setTimeout(() => {
      const cards = document.querySelectorAll('.experience-step-card');
      cards.forEach((card, idx) => {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setRevealedExp((prev) => {
                  const next = [...prev];
                  next[idx] = true;
                  return next;
                });
                observer.disconnect();
              }
            });
          },
          { threshold: 0.05, rootMargin: '0px 0px -20px 0px' }
        );
        observer.observe(card);
        observers.push(observer);
      });
    }, 150);

    return () => {
      clearTimeout(timer);
      observers.forEach((obs) => obs.disconnect());
    };
  }, [currentPage]);

  // Observe process section scroll reveals individually per card
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    
    const timer = setTimeout(() => {
      // Observe Left Mock IDE Card
      const leftCard = document.querySelector('.process-left-card');
      if (leftCard) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setRevealedSteps((prev) => {
                  const next = [...prev];
                  next[0] = true;
                  return next;
                });
                observer.disconnect();
              }
            });
          },
          { threshold: 0.05 }
        );
        observer.observe(leftCard);
        observers.push(observer);
      }

      // Observe Right Step Cards
      const cards = document.querySelectorAll('.process-step-card');
      cards.forEach((card, idx) => {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setRevealedSteps((prev) => {
                  const next = [...prev];
                  next[idx + 1] = true;
                  return next;
                });
                observer.disconnect();
              }
            });
          },
          { threshold: 0.05, rootMargin: '0px 0px -30px 0px' }
        );
        observer.observe(card);
        observers.push(observer);
      });

      // Observe Services Left Details Column
      const serviceLeft = document.querySelector('.service-left-details');
      if (serviceLeft) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setRevealedServices((prev) => {
                  const next = [...prev];
                  next[0] = true;
                  return next;
                });
                observer.disconnect();
              }
            });
          },
          { threshold: 0.05 }
        );
        observer.observe(serviceLeft);
        observers.push(observer);
      }

      // Observe Services Right 2x2 Grid Cards
      const serviceCards = document.querySelectorAll('.service-step-card');
      serviceCards.forEach((card, idx) => {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setRevealedServices((prev) => {
                  const next = [...prev];
                  next[idx + 1] = true;
                  return next;
                });
                observer.disconnect();
              }
            });
          },
          { threshold: 0.05, rootMargin: '0px 0px -30px 0px' }
        );
        observer.observe(card);
        observers.push(observer);
      });
    }, 950);

    return () => {
      clearTimeout(timer);
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  const skills = [
    'React.js',
    'Tailwind CSS',
    'Node.js',
    'Express.js',
    'Electron.js',
    'Firebase',
    'Supabase',
    'PostgreSQL',
    'Git & GitHub'
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discover',
      desc: 'Gathering specifications, defining product goals, and clarifying integration requirements (e.g. system controls, telemetry flows).',
      icon: <Compass className="w-5 h-5 text-brand-teal" />
    },
    {
      step: '02',
      title: 'Planning & Design',
      desc: 'Drafting data relational models, architecting backend states for Supabase/Firebase, and designing responsive wireframes.',
      icon: <Layers className="w-5 h-5 text-brand-teal" />
    },
    {
      step: '03',
      title: 'Development',
      desc: 'Coding clean component sets in React, implementing Node.js API routes, and compiling cross-platform desktop wrapper executables (.exe).',
      icon: <Terminal className="w-5 h-5 text-brand-teal" />
    },
    {
      step: '04',
      title: 'Launch & Support',
      desc: 'Deploying release builds on cloud hosts (Vercel/Netlify), executing telemetry testing, and providing post-launch support cycles.',
      icon: <Rocket className="w-5 h-5 text-brand-teal" />
    }
  ];

  const experiences = [
    {
      role: 'Software Developer Intern',
      company: 'Azhizen Solutions',
      location: 'Namakkal, India',
      durationLabel: 'Job Duration:',
      durationYears: '2025 - PRESENT',
      desc: 'Engineered EaseMilker platform interfaces with real-time controls. Architected and implemented structured modules for a scalable ERP application, and packaged React web applications into cross-platform desktop executables (.exe) using Electron.js with offline features.'
    },
    {
      role: 'Electrical & Electronics Engineering Student',
      company: 'K.S.R. College of Engineering',
      location: 'Tiruchengode, India',
      durationLabel: 'Academic Duration:',
      durationYears: '2023 - 2027',
      desc: 'Pursuing Bachelor of Engineering in Electrical and Electronics Engineering with a current CGPA of 7.9. Undertook coursework in Database Management Systems, Web Development, and Software Engineering, alongside leadership activities as an active NCC cadet.'
    },
    {
      role: 'Bootcamp & Campaign Achievements',
      company: 'PRASKLA & Asia Book of Records',
      location: 'India',
      durationLabel: 'Duration:',
      durationYears: '2023 - 2025',
      desc: 'Participated in the PRASKLA Technology Hackathon/Bootcamp, building rapid software prototypes. Recognized by the Asia Book of Records for contributing to a 277-hour continuous virtual campaign program.'
    },
    {
      role: 'Lead Developer - SAVS Tech',
      company: 'E-Commerce Platform',
      location: 'India',
      durationLabel: 'Project Duration:',
      durationYears: '2024 - 2025',
      desc: 'Designed and developed a scalable e-commerce web application with secure authentication, cart transactions, and dynamic product catalogs. Optimized responsive interfaces and deployed on Vercel for high availability.'
    },
    {
      role: 'Full-Stack Developer - ERP',
      company: 'Azhizen Solutions',
      location: 'Namakkal, India',
      durationLabel: 'Project Duration:',
      durationYears: '2024 - 2025',
      desc: 'Architected and built full-stack modules for business data management. Transformed the system into a cross-platform desktop application (.exe) using Electron.js with offline capability.'
    },
    {
      role: 'NCC Cadet',
      company: 'National Cadet Corps',
      location: 'Tiruchengode, India',
      durationLabel: 'NCC Duration:',
      durationYears: '2023 - 2026',
      desc: 'Successfully completed all levels of National Cadet Corps training, achieving A, B, and C certificates. Actively participated in camp coordination, drills, and team leadership activities demonstrating high responsibility.'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-brand-navy antialiased selection:bg-brand-teal selection:text-white">
      <Navbar />

      <main>
        {/* Section 1: Introduction (Hero Section) */}
        <section id="introduction" className="pt-8 pb-12 md:pt-12 md:pb-16 lg:pt-14 lg:pb-20 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              
              {/* Left Side Details */}
              <div className="lg:col-span-7 space-y-6 text-left reveal">
                {/* Header Name and Subtitle Container with bottom border line */}
                <div className="border-b border-neutral-200/80 pb-4">
                  <h1 className="font-sans font-normal text-3xl sm:text-4xl text-neutral-800 tracking-wide uppercase">
                    Raghul N.S
                  </h1>
                  
                  {/* Subtitle with grey location pin */}
                  <div className="flex items-center gap-2 text-neutral-600 font-sans text-sm sm:text-base mt-3">
                    <span>Software Developer</span>
                    <span className="text-gray-300">•</span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-neutral-400" />
                      Based in Erode, Tamil Nadu, India
                    </span>
                  </div>
                </div>

                {/* Overview mono tag and description */}
                <div className="space-y-3">
                  <span className="block font-mono text-xs font-bold text-gray-400 uppercase tracking-widest">
                    Overview
                  </span>
                  <p className="font-sans text-gray-500 text-sm sm:text-base leading-relaxed">
                    Full-stack software developer. Passionate about engineering responsive user interfaces, scaling web apps with real-time backends (Supabase, Firebase), and packaging cross-platform desktop products. I build reliable, scalable, and secure systems with high focus on performance and usability.
                  </p>
                </div>

                {/* Skills Pill Badges with Green/Teal Theme and Hover Glows */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {skills.map((skill) => (
                    <span 
                      key={skill}
                      className="px-4 py-2 rounded-full border border-brand-teal/10 bg-gradient-to-r from-brand-teal/[0.04] to-brand-green/[0.04] text-[#115e59] text-xs font-sans font-semibold hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(20,184,166,0.12)] hover:border-brand-teal/30 hover:bg-white transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Stats Dashboard Cards Row */}
                <div className="grid grid-cols-3 gap-4 pt-4 max-w-2xl">
                  <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5 text-center flex flex-col justify-center items-center shadow-sm">
                    <span className="block font-sans font-black text-2xl sm:text-3xl text-brand-navy">10+</span>
                    <span className="font-sans text-[11px] font-bold text-gray-400 mt-1 uppercase tracking-wide">Finished projects</span>
                  </div>
                  <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5 text-center flex flex-col justify-center items-center shadow-sm">
                    <span className="block font-sans font-black text-2xl sm:text-3xl text-brand-navy">95%</span>
                    <span className="font-sans text-[11px] font-bold text-gray-400 mt-1 uppercase tracking-wide">Client satisfaction</span>
                  </div>
                  <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5 text-center flex flex-col justify-center items-center shadow-sm">
                    <span className="block font-sans font-black text-2xl sm:text-3xl text-brand-navy">2+</span>
                    <span className="font-sans text-[11px] font-bold text-gray-400 mt-1 uppercase tracking-wide">Years experience</span>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="pt-4 flex items-center gap-6">
                  <a
                    href="#lets-talk"
                    className="font-sans font-bold text-sm bg-brand-navy text-white px-8 py-3.5 rounded-2xl hover:bg-brand-teal transition-all duration-300 shadow-sm active:scale-95"
                  >
                    Start a Project
                  </a>
                  <a
                    href="/resume.pdf"
                    download
                    className="inline-flex items-center gap-2 font-sans font-bold text-sm text-brand-navy hover:text-brand-teal transition-colors py-3 group"
                  >
                    Download Resume
                    <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>

              {/* Right Side Visual Block */}
              <div className="lg:col-span-5 flex flex-col items-center justify-center reveal-right">
                <div className="relative w-full max-w-[360px] group">
                  
                  {/* Photo Frame Container (Image 2 style match) */}
                  <div className="rounded-[1.75rem] overflow-hidden shadow-lg border border-gray-border/40 bg-white aspect-[3/4] relative">
                    <img
                      src={avatarImg}
                      alt="Raghul N.S"
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                    />
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Section 2: Process Section */}
        <section id="process" className="pt-8 pb-8 md:pt-12 md:pb-12 bg-gray-50 border-y border-gray-border/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Section Header */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start mb-16 reveal">
              <div className="lg:col-span-6 text-left">
                <h2 className="font-sans font-bold text-xs uppercase tracking-widest text-brand-teal">
                  Process
                </h2>
                <p className="font-sans font-black text-3xl sm:text-4xl text-brand-navy mt-2 tracking-tight">
                  A step by step look at my working process
                </p>
                <div className="w-12 h-[3px] bg-gradient-to-r from-brand-teal to-brand-green mt-3.5 rounded-full" />
              </div>
              <div className="lg:col-span-6 text-left">
                <p className="font-sans text-sm text-gray-500 leading-relaxed mt-2 lg:mt-8">
                  My workflow ensures structured data flows, reliable integrations, and clean code delivery. From scoping requirements to supporting packaged desktop environments, every step is optimized for quality and scale.
                </p>
              </div>
            </div>

            {/* Content Row: IDE Graphic + Steps Timeline */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
              
              {/* Left Side: Mock IDE/Terminal Graphic */}
              <div className={`lg:col-span-5 flex flex-col process-left-card reveal-left delay-75 ${revealedSteps[0] ? 'visible transition-all duration-300' : ''}`}>
                <div className="bg-brand-navy border border-brand-navy-light rounded-[2rem] p-6 text-left shadow-lg relative overflow-hidden group flex flex-col justify-between h-full">
                  {/* Decorative glowing gradient dots */}
                  <div className="absolute top-[-10%] right-[-10%] w-40 h-40 rounded-full bg-brand-teal/10 blur-2xl pointer-events-none" />
                  <div className="absolute bottom-[-10%] left-[-10%] w-40 h-40 rounded-full bg-brand-green/10 blur-2xl pointer-events-none" />
                  
                  {/* Window header */}
                  <div className="flex items-center justify-between border-b border-white/10 pb-4 select-none">
                    <div className="flex gap-2">
                      <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                      <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                      <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
                    </div>
                    <span className="font-mono text-xs text-gray-400">process_flow.ts</span>
                  </div>
                  
                  {/* Mock Code Block */}
                  <div className="font-mono text-xs text-gray-300 space-y-3.5 my-auto overflow-hidden">
                    <div>
                      <span className="text-[#ff79c6]">const</span> <span className="text-[#50fa7b]">workflow</span> = [
                    </div>
                    <div className="pl-4">
                      <span className="text-[#f1fa8c]">'01_discover'</span>, <span className="text-gray-400">// Gather specs</span>
                    </div>
                    <div className="pl-4">
                      <span className="text-[#f1fa8c]">'02_plan_design'</span>, <span className="text-gray-400">// Schema design</span>
                    </div>
                    <div className="pl-4">
                      <span className="text-[#f1fa8c]">'03_development'</span>, <span className="text-gray-400">// Coding & packing</span>
                    </div>
                    <div className="pl-4">
                      <span className="text-[#f1fa8c]">'04_launch_support'</span> <span className="text-gray-400">// Deploy & sync</span>
                    </div>
                    <div>];</div>
                    <div className="pt-2">
                      <span className="text-[#ff79c6]">function</span> <span className="text-[#50fa7b]">executeProject</span>() {'{'}
                    </div>
                    <div className="pl-4">
                      <span className="text-[#ff79c6]">return</span> workflow.<span className="text-[#50fa7b]">map</span>(step =&gt; {'{'})
                    </div>
                    <div className="pl-8 text-brand-teal">
                      console.log(<span className="text-[#f1fa8c]">'Running: ' + step</span>);
                    </div>
                    <div className="pl-4">{'}'});</div>
                    <div>{'}'}</div>
                  </div>

                  {/* Status Bar */}
                  <div className="bg-white/5 border border-white/10 rounded-xl p-3 text-[10px] font-mono text-gray-400 flex items-center justify-between select-none">
                    <span>Ln 12, Col 24</span>
                    <span className="text-brand-green font-bold">● TypeScript</span>
                  </div>
                </div>
              </div>

              {/* Right Side: Timeline Steps List */}
              <div className="lg:col-span-7 space-y-4 text-left">
                {processSteps.map((item, idx) => (
                  <div 
                    key={item.step}
                    onMouseEnter={() => setActiveStep(idx)}
                    style={{ transitionDelay: `${idx * 80}ms` }}
                    className={`bg-white border rounded-2xl p-5 md:p-6 shadow-sm hover:shadow-md flex items-start gap-4 cursor-default group process-step-card reveal-right ${
                      revealedSteps[idx + 1] ? 'visible transition-all duration-300' : ''
                    } ${
                      activeStep === idx ? 'border-brand-teal/30 ring-1 ring-brand-teal/5' : 'border-gray-border/50'
                    }`}
                  >
                    <div className="p-3 bg-gray-50 border border-gray-100 rounded-xl group-hover:bg-brand-teal/5 group-hover:border-brand-teal/10 transition-colors">
                      {item.icon}
                    </div>
                    <div className="space-y-1.5 flex-1">
                      <div className="flex justify-between items-center">
                        <h3 className="font-sans font-black text-md text-brand-navy group-hover:text-brand-teal transition-colors">
                          {item.title}
                        </h3>
                        <span className="font-mono text-xs font-bold text-gray-300 group-hover:text-brand-teal/60 transition-colors">
                          STEP {item.step}
                        </span>
                      </div>
                      <p className="font-sans text-xs text-gray-500 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            </div>

          </div>
        </section>

        {/* Section 3: Services Section */}
        <section id="services" className="pt-8 pb-8 md:pt-12 md:pb-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
              
              {/* Left Column details */}
              <div className={`lg:col-span-4 flex flex-col justify-between items-start text-left service-left-details reveal-left ${revealedServices[0] ? 'visible transition-all duration-300' : ''}`}>
                <div>
                  <h2 className="font-sans font-bold text-xs uppercase tracking-widest text-brand-teal">
                    Services
                  </h2>
                  <p className="font-sans font-black text-3xl sm:text-4xl text-brand-navy mt-2 tracking-tight">
                    Offer a range of services to elevate your projects
                  </p>
                  <div className="w-12 h-[3px] bg-gradient-to-r from-brand-teal to-brand-green mt-3.5 rounded-full" />
                  <p className="font-sans text-xs text-gray-500 leading-relaxed mt-6 max-w-sm">
                    Everything you need to conceptualize, design, develop, and package your web systems. Specializing in responsive React systems, Node.js control APIs, and desktop conversion software wrapper tools.
                  </p>
                </div>

                <div className="pt-8">
                  <Link
                    to="/lets-talk"
                    className="inline-flex items-center gap-2 font-sans font-bold text-sm bg-brand-navy text-white px-7 py-3.5 rounded-full hover:bg-brand-teal transition-all duration-300 shadow-sm hover:shadow-md active:scale-95"
                  >
                    Contact Me
                  </Link>
                </div>
              </div>

              {/* Right Column: 2x2 Services Grid */}
              <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Card 1: Frontend Development (Jet-Black Theme Match with Glossy Spheres) */}
                <Link 
                  to="/tech-stack#tech-section"
                  style={{ transitionDelay: '0ms' }}
                  className={`bg-black rounded-[2rem] p-6 text-white border border-white/5 hover:border-brand-teal/30 hover:-translate-y-1 hover:shadow-lg relative overflow-hidden group text-left flex flex-col justify-between min-h-[220px] service-step-card reveal-scale ${revealedServices[1] ? 'visible transition-all duration-300' : ''}`}
                >
                                 {/* High-Tech Ambient Glassmorphic Grid Background */}
                  {/* Teal & Green Glowing Ambient Orbs */}
                  <div className="absolute top-[-20%] right-[-10%] w-60 h-60 rounded-full bg-brand-teal/20 blur-[50px] pointer-events-none group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute bottom-[-20%] left-[-10%] w-48 h-48 rounded-full bg-brand-green/10 blur-[40px] pointer-events-none" />
                  
                  {/* Radial Dot-Grid Pattern */}
                  <div className="absolute inset-0 opacity-20 group-hover:opacity-35 transition-opacity duration-300 pointer-events-none" style={{ backgroundImage: 'radial-gradient(rgba(20, 184, 166, 0.25) 1.5px, transparent 1.5px)', backgroundSize: '16px 16px' }} />
                  
                  {/* Floating Glassmorphic 3D Card */}
                  <div className="absolute top-4 right-10 w-28 h-20 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-md rotate-12 shadow-2xl pointer-events-none transition-all duration-500 group-hover:rotate-[18deg] group-hover:translate-x-1 group-hover:-translate-y-1">
                    <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '8px 8px' }} />
                    <div className="absolute top-3 left-3 w-2 h-2 rounded-full bg-brand-teal" />
                    <div className="absolute top-3 left-7 w-6 h-1 bg-white/20 rounded-full" />
                    <div className="absolute bottom-3 left-3 w-16 h-1.5 bg-brand-green/40 rounded-full" />
                  </div>
                  
                  {/* Glowing Mathematical Vector Wave */}
                  <svg className="absolute inset-0 w-full h-full opacity-40 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none" viewBox="0 0 400 220" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M-50 160 Q 100 80, 250 180 T 450 120" stroke="url(#wave-grad)" strokeWidth="3" />
                    <path d="M-50 175 Q 100 95, 250 195 T 450 135" stroke="url(#wave-grad)" strokeWidth="1" strokeDasharray="3 3" opacity="0.5" />
                    <defs>
                      <linearGradient id="wave-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#14b8a6" />
                        <stop offset="100%" stopColor="#22c55e" />
                      </linearGradient>
                    </defs>
                  </svg>

                  {/* Arrow icon positioning */}
                  <div className="absolute bottom-6 right-6 z-20">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                      <ArrowRight className="w-4 h-4 text-white group-hover:text-black" />
                    </div>
                  </div>

                  <div className="relative z-10">
                    <span className="font-mono text-[9px] font-bold text-brand-teal uppercase tracking-widest">React & Tailwind</span>
                    <h3 className="font-sans font-black text-xl mt-1.5 text-white">Frontend Development</h3>
                    <p className="font-sans text-[11px] text-gray-400 mt-2.5 leading-relaxed pr-8">
                      Crafting clean, responsive user interfaces and component kits structured using Tailwind CSS.
                    </p>
                  </div>
                  
                  <div className="relative z-10 flex justify-between items-center mt-6">
                    <span className="text-[10px] text-brand-teal font-sans uppercase font-bold tracking-wider">Next.js / Vite</span>
                  </div>
                </Link>

                {/* Card 2: Backend Development */}
                <Link 
                  to="/tech-stack#tech-section"
                  style={{ transitionDelay: '80ms' }}
                  className={`bg-gray-50 rounded-[2rem] p-6 border border-gray-100 hover:border-brand-green/30 hover:bg-white hover:-translate-y-1 hover:shadow-lg text-left flex flex-col justify-between min-h-[220px] group service-step-card reveal-scale ${revealedServices[2] ? 'visible transition-all duration-300' : ''}`}
                >
                  <div>
                    <span className="font-mono text-[9px] font-bold text-brand-teal uppercase tracking-widest">Node.js & Supabase</span>
                    <h3 className="font-sans font-black text-xl mt-1.5 text-brand-navy">Backend & Database</h3>
                    <p className="font-sans text-[11px] text-gray-500 mt-2.5 leading-relaxed">
                      Developing secure server architectures, API routing layers, database relational schemas, and sync scripts.
                    </p>
                  </div>
                  
                  <div className="flex justify-between items-center mt-6">
                    <span className="text-[10px] text-brand-teal font-sans uppercase font-bold tracking-wider">Firebase / Postgres</span>
                    <div className="w-8 h-8 rounded-full bg-brand-navy/5 flex items-center justify-center group-hover:bg-brand-navy group-hover:text-white transition-colors">
                      <ArrowRight className="w-4 h-4 text-brand-navy group-hover:text-white" />
                    </div>
                  </div>
                </Link>

                {/* Card 3: Desktop App Packaging */}
                <Link 
                  to="/tech-stack#tech-section"
                  style={{ transitionDelay: '160ms' }}
                  className={`bg-gray-50 rounded-[2rem] p-6 border border-gray-100 hover:border-brand-teal/30 hover:bg-white hover:-translate-y-1 hover:shadow-lg text-left flex flex-col justify-between min-h-[220px] group service-step-card reveal-scale ${revealedServices[3] ? 'visible transition-all duration-300' : ''}`}
                >
                  <div>
                    <span className="font-mono text-[9px] font-bold text-brand-teal uppercase tracking-widest">Electron.js Wrapper</span>
                    <h3 className="font-sans font-black text-xl mt-1.5 text-brand-navy">Desktop App Packaging</h3>
                    <p className="font-sans text-[11px] text-gray-500 mt-2.5 leading-relaxed">
                      Packaging React/Vite platforms into multi-platform offline-capable desktop application executables (.exe).
                    </p>
                  </div>
                  
                  <div className="flex justify-between items-center mt-6">
                    <span className="text-[10px] text-brand-teal font-sans uppercase font-bold tracking-wider">Windows / MacOS</span>
                    <div className="w-8 h-8 rounded-full bg-brand-navy/5 flex items-center justify-center group-hover:bg-brand-navy group-hover:text-white transition-colors">
                      <ArrowRight className="w-4 h-4 text-brand-navy group-hover:text-white" />
                    </div>
                  </div>
                </Link>

                {/* Card 4: IoT & Automation Interfaces */}
                <Link 
                  to="/tech-stack#tech-section"
                  style={{ transitionDelay: '240ms' }}
                  className={`bg-gray-50 rounded-[2rem] p-6 border border-gray-100 hover:border-brand-green/30 hover:bg-white hover:-translate-y-1 hover:shadow-lg text-left flex flex-col justify-between min-h-[220px] group service-step-card reveal-scale ${revealedServices[4] ? 'visible transition-all duration-300' : ''}`}
                >
                  <div>
                    <span className="font-mono text-[9px] font-bold text-brand-teal uppercase tracking-widest">Automation & Hardware</span>
                    <h3 className="font-sans font-black text-xl mt-1.5 text-brand-navy">IoT & Control Panels</h3>
                    <p className="font-sans text-[11px] text-gray-500 mt-2.5 leading-relaxed">
                      Building user interfaces that connect with hardware sensors and industrial modules (e.g. EaseMilker integration).
                    </p>
                  </div>
                  
                  <div className="flex justify-between items-center mt-6">
                    <span className="text-[10px] text-brand-teal font-sans uppercase font-bold tracking-wider">Real-time Telemetry</span>
                    <div className="w-8 h-8 rounded-full bg-brand-navy/5 flex items-center justify-center group-hover:bg-brand-navy group-hover:text-white transition-colors">
                      <ArrowRight className="w-4 h-4 text-brand-navy group-hover:text-white" />
                    </div>
                  </div>
                </Link>

              </div>

            </div>

          </div>
        </section>

        {/* Section 4: Experience Section */}
        <section id="experience" className="pt-8 pb-8 md:pt-12 md:pb-12 bg-gray-50 border-t border-gray-border/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Section Header */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start mb-16 reveal">
              <div className="lg:col-span-6 text-left">
                <h2 className="font-sans font-bold text-xs uppercase tracking-widest text-brand-teal">
                  Experience
                </h2>
                <p className="font-sans font-black text-3xl sm:text-4xl text-brand-navy mt-2 tracking-tight">
                  A yearly snapshot of my creative growth
                </p>
                <div className="w-12 h-[3px] bg-gradient-to-r from-brand-teal to-brand-green mt-3.5 rounded-full" />
              </div>
              <div className="lg:col-span-6 text-left">
                <p className="font-sans text-sm text-gray-500 leading-relaxed mt-2 lg:mt-8">
                  Combining robust engineering academic frameworks with active professional intern roles, bootcamp prototyping runs, and campaign operations.
                </p>
              </div>
            </div>

            {/* Experience Cards List with key to reset animations on page change */}
            <div key={currentPage} id="experience-grid" className="space-y-4 max-w-5xl mx-auto">
              {experiences.slice((currentPage - 1) * 3, currentPage * 3).map((exp, idx) => {
                const realIndex = (currentPage - 1) * 3 + idx;
                const isActive = idx === 0;
                const isLeft = idx % 2 === 0;
                return (
                  <div 
                    key={realIndex}
                    style={{ transitionDelay: `${idx * 80}ms` }}
                    className={`border rounded-[2rem] p-5 md:p-6 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-6 group experience-step-card ${
                      isLeft ? 'reveal-left' : 'reveal-right'
                    } ${
                      revealedExp[idx] ? 'visible transition-all duration-300' : ''
                    } ${
                      isActive
                        ? 'bg-gradient-to-r from-brand-teal/[0.08] to-brand-green/[0.03] border-brand-teal/20 shadow-sm'
                        : 'bg-white border-gray-200/80 shadow-sm hover:border-gray-300/80'
                    }`}
                  >
                    {/* Left & Center Information Area */}
                    <div className="flex flex-col sm:flex-row items-start gap-4 flex-1">
                      {/* Number Badge (Image 2 style) */}
                      <div className="w-11 h-11 rounded-2xl bg-white shadow-sm border border-gray-border/20 flex items-center justify-center font-sans font-black text-md text-brand-navy shrink-0 select-none">
                        {realIndex + 1}
                      </div>
                      
                      {/* Text Details */}
                      <div className="space-y-1.5 flex-1">
                        <h3 className="font-sans font-black text-md md:text-lg text-brand-navy group-hover:text-brand-teal transition-colors">
                          {exp.role} <span className="text-gray-400 font-normal text-sm md:text-md">at</span> <span className="text-brand-navy/70 font-bold text-sm md:text-md">{exp.company}</span>
                        </h3>
                        <p className="font-sans text-xs text-gray-500 leading-relaxed pr-2">
                          {exp.desc}
                        </p>
                      </div>
                    </div>
                    
                    {/* Right Side Vertical Divider & Duration */}
                    <div className="flex items-center gap-6 shrink-0 w-full md:w-auto mt-4 md:mt-0 border-t md:border-t-0 md:border-l border-gray-200/80 pt-4 md:pt-0 md:pl-8">
                      <div className="text-left">
                        <span className="block font-mono text-[9px] text-gray-400 uppercase tracking-widest">
                          {exp.durationLabel}
                        </span>
                        <span className="font-sans font-black text-sm md:text-md text-brand-navy tracking-tight mt-0.5 block whitespace-nowrap">
                          {exp.durationYears}
                        </span>
                      </div>
                    </div>
                    
                  </div>
                );
              })}
            </div>

            {/* Pagination Controls */}
            <div className="flex justify-center items-center gap-6 mt-8 select-none">
              {/* Previous Button */}
              <button
                onClick={() => setCurrentPage(1)}
                disabled={currentPage === 1}
                className="w-11 h-11 rounded-full border border-gray-200/80 bg-white text-brand-navy hover:bg-brand-teal hover:border-brand-teal hover:text-white hover:shadow-md active:scale-95 flex items-center justify-center transition-all duration-300"
                aria-label="Previous Page"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Next Button */}
              <button
                onClick={() => setCurrentPage(2)}
                disabled={currentPage === 2}
                className="w-11 h-11 rounded-full border border-gray-200/80 bg-white text-brand-navy hover:bg-brand-teal hover:border-brand-teal hover:text-white hover:shadow-md active:scale-95 flex items-center justify-center transition-all duration-300"
                aria-label="Next Page"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

          </div>
        </section>

        {/* Section 5: Let's Talk Section (Jet-Black style matching homepage) */}
        <section id="lets-talk" className="pt-8 pb-16 md:pt-12 md:pb-20 bg-white select-none">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 reveal">
            
            {/* Jet-Black Card */}
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

      </main>

      <Footer />
    </div>
  );
}
