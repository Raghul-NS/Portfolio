import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { ExternalLink, Heart, ChevronRight, X } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Asset Imports
import savsImg from '../assets/savs_tech_mockup.png';
import erpImg from '../assets/dashboard_mockup.png';
import krtImg from '../assets/krt_mockup.png';
import symposiumImg from '../assets/symposium_mockup.png';
import jsBuildingImg from '../assets/Js Building_mockup.png';
import sairamImg from '../assets/Sairamfinance_mockup.png';
import previewMinimalImg from '../assets/hero_card_minimal.png';
import previewLandscapeImg from '../assets/hero_card_landscape.png';

export default function Works() {
  const [makeItPop, setMakeItPop] = useState(false);
  const [blurRadius, setBlurRadius] = useState(12);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [showAll, setShowAll] = useState(false);
  const [revealedProjects, setRevealedProjects] = useState<boolean[]>([]);

  // Observe project cards scroll reveal
  useEffect(() => {
    setRevealedProjects(new Array(projects.length).fill(false));

    const observers: IntersectionObserver[] = [];
    const timer = setTimeout(() => {
      const cards = document.querySelectorAll('.project-step-card');
      cards.forEach((card, idx) => {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setRevealedProjects((prev) => {
                  const next = [...prev];
                  next[idx] = true;
                  return next;
                });
                observer.disconnect();
              }
            });
          },
          { threshold: 0.05, rootMargin: '0px 0px -35px 0px' }
        );
        observer.observe(card);
        observers.push(observer);
      });
    }, 950);

    return () => {
      clearTimeout(timer);
      observers.forEach((obs) => obs.disconnect());
    };
  }, [showAll]);

  const projects = [
    {
      title: 'SAVS Tech E-Commerce Website',
      desc: 'A full-featured shopping platform with secure user authentication, shopping carts, and dynamic catalogs. Created during a 15-day internship sprint at Azhizen Solutions.',
      tech: ['React.js', 'Tailwind CSS', 'Firebase', 'Vercel'],
      category: 'Internship Project',
      image: savsImg,
      liveUrl: 'https://project-iuh4.vercel.app/'
    },
    {
      title: 'Azhizen ERP Software',
      desc: 'An enterprise planning and data management system. Features database logging and real-time processing modules, packaged as a cross-platform Electron.js desktop application.',
      tech: ['React.js', 'Tailwind CSS', 'Supabase', 'Electron.js'],
      category: 'Enterprise App',
      image: erpImg,
      liveUrl: ''
    },
    {
      title: 'KRT Corporate Website',
      desc: 'A responsive marketing platform for a leading business organization, showcasing service catalogs, custom request forms, and performance analytics tools.',
      tech: ['React.js', 'Tailwind CSS', 'Vite', 'Netlify'],
      category: 'Business Website',
      image: krtImg,
      liveUrl: 'https://krt-solutions.vercel.app/'
    },
    {
      title: 'EEE Department Symposium Portal',
      desc: 'Event management platform built collaboratively for a college department symposium, handling student registrations, schedules, and online ticketing pipelines.',
      tech: ['React.js', 'Tailwind CSS', 'Vite', 'Netlify'],
      category: 'Collaborative Work',
      image: symposiumImg,
      liveUrl: 'https://ksrce-grid-2025.tech/#/'
    },
    {
      title: 'JS Building Demo Studio',
      desc: 'An interactive drag-and-shine builder page showcasing UI layout compositions. Built as a visual prototype for client presentations using Lovable.AI.',
      tech: ['React.js', 'Tailwind CSS', 'Lovable.AI', 'Vite'],
      category: 'Prototyping Demo',
      image: jsBuildingImg,
      liveUrl: 'https://drag-and-shine-studio.lovable.app/'
    },
    {
      title: 'Sai Ram Microfinance Platform',
      desc: 'A custom finance web system built for Sairam Microfinance client, streamlining borrower portfolios, loan records, and agent collections data outreach.',
      tech: ['React.js', 'Tailwind CSS', 'Vite', 'REST APIs'],
      category: 'Freelance Project',
      image: sairamImg,
      liveUrl: 'https://www.sairammicrofinance.com/'
    },
    {
      title: 'AI SaaS Automation Platform',
      desc: 'An artificial intelligence pipeline automation tool designed to streamline cloud workflows, schedule microtasks, and gather live data collect pipelines. (Currently in active development)',
      tech: ['Next.js', 'OpenAI API', 'Node.js', 'PostgreSQL'],
      category: 'Upcoming Release',
      image: erpImg,
      liveUrl: ''
    },
    {
      title: 'FinTech Mobile Wallet',
      desc: 'A clean digital wallet layout featuring secure ledger tracking, instant transactions, local currency conversion, and visual analytics dashboards. (Currently in planning)',
      tech: ['React Native', 'TypeScript', 'Tailwind CSS', 'Firebase'],
      category: 'Concept Design',
      image: sairamImg,
      liveUrl: ''
    }
  ];

  return (
    <div className="min-h-screen bg-white text-brand-navy antialiased selection:bg-brand-teal selection:text-white">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section id="works-hero" className="pt-8 pb-12 md:pt-12 md:pb-16 lg:pt-14 lg:pb-20 bg-white overflow-hidden select-none">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              
              {/* Left Column: Heading and description */}
              <div className="lg:col-span-6 space-y-6 text-left lg:pl-12 reveal-left">
                <h1 className="font-sans font-black text-6xl sm:text-7xl text-neutral-800 tracking-tighter leading-[0.9]">
                  works.
                </h1>
                
                <h2 className="font-sans font-normal text-xl sm:text-2xl text-neutral-500 leading-snug max-w-lg mt-4">
                  Check out some of my latest software and full-stack projects.
                </h2>
                
                <p className="font-sans text-sm sm:text-md text-neutral-500 leading-relaxed max-w-md mt-6">
                  I engineer scalable ERP platforms, database integrations, and desktop client systems designed to streamline business operations and build seamless digital experiences.
                </p>
              </div>

              {/* Right Column: Interactive control panel mockup (matching reference image 2 exactly) */}
              <div className="lg:col-span-6 flex justify-center lg:justify-start lg:pl-10 relative select-none mt-10 lg:mt-0 reveal-right">
                <div className="w-full max-w-[420px] flex flex-col gap-6">
                  
                  {/* Checkbox selector centered */}
                  <div className="flex justify-center items-center">
                    <button 
                      onClick={() => setMakeItPop(!makeItPop)}
                      className="flex items-center gap-3 text-neutral-800 text-md font-sans font-bold hover:opacity-90 transition-opacity"
                    >
                      <div className={`w-6 h-6 flex items-center justify-center transition-all ${
                        makeItPop ? 'bg-neutral-900 text-white shadow-sm' : 'bg-white text-transparent border-2 border-neutral-800'
                      }`}>
                        <svg className="w-4 h-4 fill-none stroke-current stroke-[4.5]" viewBox="0 0 24 24">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      <span className="text-neutral-800 text-md font-sans font-semibold">Make it pop</span>
                    </button>
                  </div>

                  {/* Mock Preview Cards display */}
                  <div className="relative h-[240px] w-full mt-4">
                    
                    {/* Slider Control absolute aligned directly above Card 1 */}
                    <div className="absolute left-4 top-2 flex items-center z-30">
                      <input 
                        type="range" 
                        min="4" 
                        max="32" 
                        value={blurRadius}
                        disabled={!makeItPop}
                        onChange={(e) => setBlurRadius(Number(e.target.value))}
                        className={`w-44 h-1 bg-neutral-200 rounded-none appearance-none accent-neutral-900 transition-all duration-300
                                   [&::-webkit-slider-runnable-track]:bg-neutral-200 [&::-webkit-slider-runnable-track]:h-1
                                   [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 
                                   [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border 
                                   [&::-webkit-slider-thumb]:border-neutral-200 [&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:-mt-[10px]
                                   [&::-moz-range-thumb]:w-6 [&::-moz-range-thumb]:h-6 [&::-moz-range-thumb]:rounded-full 
                                   [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:border [&::-moz-range-thumb]:border-neutral-200 [&::-moz-range-thumb]:shadow-md
                                   ${makeItPop ? 'cursor-pointer opacity-100' : 'cursor-not-allowed opacity-40'}`}
                        style={{
                          background: makeItPop 
                            ? `linear-gradient(to right, #171717 0%, #171717 ${((blurRadius - 4) / 28) * 100}%, #e5e7eb ${((blurRadius - 4) / 28) * 100}%, #e5e7eb 100%)`
                            : '#e5e7eb'
                        }}
                      />
                    </div>

                    {/* Left preview card (Card 1) */}
                    <div 
                      style={{ 
                        boxShadow: makeItPop ? '0 ' + (blurRadius/2) + 'px ' + blurRadius + 'px rgba(20,184,166,0.18)' : '0 4px 12px rgba(0,0,0,0.02)'
                      }}
                      className="absolute left-4 bottom-2 w-[310px] bg-white border border-neutral-200 rounded-2xl p-3.5 flex items-start gap-4 transition-all duration-300 z-10 hover:-translate-y-0.5"
                    >
                      <img 
                        src={previewMinimalImg} 
                        alt="Minimal Room" 
                        className="w-24 h-24 object-cover rounded-xl shrink-0" 
                      />
                      <div className="text-left leading-tight mt-1">
                        <span className="block font-sans font-black text-sm text-neutral-800">A modern minimal<br />renovation</span>
                        <span className="block font-sans text-[11px] text-neutral-400 mt-2.5 font-semibold">estliving.com<br />2 mins ago</span>
                      </div>
                    </div>

                    {/* Right preview card (Card 2) */}
                    <div 
                      style={{ 
                        boxShadow: makeItPop ? '0 ' + blurRadius + 'px ' + (blurRadius * 1.5) + 'px rgba(20,184,166,0.22)' : '0 6px 18px rgba(0,0,0,0.03)'
                      }}
                      className="absolute right-4 top-2 w-[180px] bg-white border border-neutral-200 rounded-2xl p-3.5 flex flex-col gap-3 transition-all duration-300 z-20 hover:-translate-y-0.5"
                    >
                      <div className="w-full h-28 rounded-xl overflow-hidden relative">
                        <img 
                          src={previewLandscapeImg} 
                          alt="Scenic Beach" 
                          className="w-full h-full object-cover" 
                        />
                        <Heart className="w-5 h-5 text-white/90 hover:text-white absolute top-2.5 right-2.5 z-10 stroke-[2.5px] cursor-pointer drop-shadow-sm" />
                        <div className="absolute inset-0 bg-black/5" />
                      </div>
                      <div className="text-left leading-tight">
                        <span className="block font-sans font-black text-[15px] text-neutral-800">Beaches</span>
                        <span className="block font-sans text-[11px] text-neutral-400 mt-1 font-semibold">Favourites</span>
                      </div>
                    </div>

                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Project Cards Grid Section */}
        <section id="projects-grid" className="pt-8 pb-6 md:pt-12 md:pb-8 bg-neutral-50/30 border-t border-neutral-100">
          <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Grid Container */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.slice(0, showAll ? projects.length : 6).map((project, idx) => {
                
                {/* Dynamically calculate active inline box shadow when Customizer is "popped" */}
                const shadowStyle = makeItPop 
                  ? { boxShadow: '0 ' + blurRadius + 'px ' + (blurRadius * 2) + 'px rgba(20,184,166,0.12)', border: '1px solid rgba(20,184,166,0.15)' }
                  : {};

                return (
                  <div 
                    key={idx}
                    onClick={() => setSelectedProject(project)}
                    style={{ 
                      ...shadowStyle, 
                      transitionDelay: `${(idx % 3) * 80}ms` 
                    }}
                    className={`bg-white border border-neutral-200/60 rounded-[1.8rem] overflow-hidden hover:-translate-y-1.5 flex flex-col justify-between h-full group text-left cursor-pointer shadow-sm hover:shadow-md project-step-card reveal-scale ${
                      revealedProjects[idx] ? 'visible transition-all duration-300' : ''
                    }`}
                  >
                    <div>
                      {/* Project Image Box (centered inside a padded light gray container to match reference image 2) */}
                      <div className="p-4 bg-neutral-50 rounded-t-[1.8rem] aspect-[16/10] flex items-center justify-center overflow-hidden border-b border-neutral-100/50">
                        <div className="w-full h-full overflow-hidden rounded-2xl bg-white shadow-sm relative border border-neutral-100/30">
                          <img 
                            src={project.image} 
                            alt={project.title} 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" 
                          />
                          <div className="absolute inset-0 bg-neutral-950/[0.01] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                      </div>

                      {/* Text Content Area (Compact and clean, matching reference image 2) */}
                      <div className="p-5 flex items-center justify-between">
                        <div className="text-left shrink-0 max-w-[80%]">
                          <h3 className="font-sans font-bold text-[15px] text-neutral-850 group-hover:text-brand-teal transition-colors leading-snug">
                            {project.title}
                          </h3>
                          <p className="font-sans text-[13px] text-neutral-400 mt-1 font-medium">
                            {project.category}
                          </p>
                        </div>
                        <ChevronRight className="w-5 h-5 text-neutral-300 group-hover:text-brand-teal group-hover:translate-x-0.5 transition-all duration-200" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Show All / Show Less Black Curved Pill Button */}
            <div className="flex justify-center mt-12">
              <button 
                onClick={() => setShowAll(!showAll)}
                className="inline-flex items-center justify-center px-8 py-3.5 bg-neutral-900 text-white font-sans font-bold text-xs uppercase tracking-wider rounded-full hover:bg-brand-teal hover:border-brand-teal hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(20,184,166,0.25)] active:scale-95 transition-all duration-300 select-none border border-neutral-800"
              >
                {showAll ? 'Show Less' : 'Show All'}
              </button>
            </div>

          </div>
        </section>

        {/* Let's Talk Section (Signature Jet-Black card routing to contact page) */}
        <section id="lets-talk" className="pt-2 pb-16 md:pt-4 md:pb-20 bg-white select-none">
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

              {/* Centered Pill Button routing to contact page */}
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

      {/* Selected Project Details Modal Dialog */}
      {selectedProject && createPortal(
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-all duration-300 animate-fade-in"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="bg-white rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl relative flex flex-col max-h-[90vh] scale-100 transition-transform duration-300 animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            
            {/* Close Button floating absolute */}
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/95 hover:bg-white text-neutral-500 hover:text-neutral-800 flex items-center justify-center shadow transition-all border border-neutral-200/50 z-20"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Top Section: Full Website Screenshot inside Browser Mockup */}
            <div className="w-full bg-gradient-to-br from-neutral-50 to-neutral-100/60 p-6 md:p-8 flex items-center justify-center border-b border-neutral-150 select-none">
              <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg border border-neutral-200/60 overflow-hidden flex flex-col transition-all duration-500 hover:shadow-xl">
                {/* Browser Header Control Bar */}
                <div className="h-7 bg-neutral-100 border-b border-neutral-200/60 flex items-center gap-1.5 px-3 shrink-0">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
                </div>
                {/* Browser Content Screenshot (completely visible with max-h and object-contain) */}
                <div className="w-full bg-white flex items-center justify-center overflow-hidden">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title} 
                    className="w-full max-h-[280px] md:max-h-[340px] object-contain bg-white"
                  />
                </div>
              </div>
            </div>

            {/* Bottom Section: Details & Meta Columns */}
            <div className="p-6 md:p-8 overflow-y-auto max-h-[45vh]">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 text-left">
                
                {/* Left details (takes 7 columns) */}
                <div className="md:col-span-7 space-y-4">
                  <div>
                    <span className="text-xs font-sans font-extrabold uppercase tracking-widest text-brand-teal">
                      {selectedProject.category}
                    </span>
                    <h2 className="text-2xl font-sans font-black text-neutral-850 mt-1 leading-tight">
                      {selectedProject.title}
                    </h2>
                  </div>
                  <p className="text-neutral-600 text-sm leading-relaxed font-sans font-normal">
                    {selectedProject.desc}
                  </p>
                </div>

                {/* Right details: Tech Stack & Action buttons (takes 5 columns) */}
                <div className="md:col-span-5 flex flex-col justify-between space-y-6">
                  <div>
                    <h4 className="text-[10px] font-sans font-extrabold uppercase tracking-widest text-neutral-400 mb-2">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedProject.tech.map((t: string) => (
                        <span 
                          key={t}
                          className="px-2.5 py-1 rounded-full bg-brand-teal/[0.04] text-[#115e59] text-xs font-sans font-semibold border border-brand-teal/5"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex items-center gap-3 pt-4 border-t border-neutral-100">
                    {selectedProject.liveUrl ? (
                      <a 
                        href={selectedProject.liveUrl} 
                        target="_blank" 
                        rel="noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-neutral-900 hover:bg-brand-teal text-white font-sans font-bold text-sm shadow transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(20,184,166,0.25)] active:scale-95 select-none"
                      >
                        Visit Live Site
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    ) : (
                      <div className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-neutral-100 text-neutral-400 font-sans font-bold text-sm cursor-not-allowed">
                        Internal Build
                      </div>
                    )}
                    <button 
                      onClick={() => setSelectedProject(null)}
                      className="px-6 py-3.5 rounded-2xl border border-neutral-200 hover:bg-neutral-50 hover:border-neutral-300 text-neutral-700 font-sans font-bold text-sm transition-all duration-300 hover:-translate-y-0.5 active:scale-95 select-none"
                    >
                      Close
                    </button>
                  </div>

                </div>

              </div>
            </div>

          </div>
        </div>,
        document.body
      )}
    </div>
  );
}
