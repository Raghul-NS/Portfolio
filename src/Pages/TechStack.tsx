import { Link } from 'react-router-dom';
import { 
  Layout, 
  Server, 
  Database, 
  Code2, 
  Cloud, 
  Terminal 
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function TechStack() {
  const categories = [
    {
      id: '01',
      title: 'Frontend Development',
      desc: 'Building responsive user interfaces with smooth animations, semantic structures, and complete type safety.',
      tech: ['React.js', 'Vite', 'Tailwind CSS', 'JavaScript', 'TypeScript'],
      icon: Layout,
    },
    {
      id: '02',
      title: 'Backend Services',
      desc: 'Crafting secure REST APIs, handling data validation middleware, and constructing robust routing pipelines.',
      tech: ['Node.js', 'Express.js', 'REST APIs'],
      icon: Server,
    },
    {
      id: '03',
      title: 'Database Systems',
      desc: 'Structuring relational schemas, handling real-time cloud triggers, and modeling document stores.',
      tech: ['Firebase Firestore', 'SupaBase', 'PostgreSQL (Basic)'],
      icon: Database,
    },
    {
      id: '04',
      title: 'Languages Known',
      desc: 'Writing clean logic controllers, backend scripts, task automation scripts, and general-purpose algorithms.',
      tech: ['Python'],
      icon: Code2,
    },
    {
      id: '05',
      title: 'Cloud & Hosting',
      desc: 'Configuring continuous integration/deployment (CI/CD) pipelines, edge configurations, and serverless routing.',
      tech: ['Netlify', 'Vercel'],
      icon: Cloud,
    },
    {
      id: '06',
      title: 'Developer Tools',
      desc: 'Managing version history, collaborative branches, and optimizing workflow settings for fast development.',
      tech: ['Git', 'GitHub', 'VS Code'],
      icon: Terminal,
    },
  ];

  return (
    <div className="min-h-screen bg-white text-brand-navy antialiased selection:bg-brand-teal selection:text-white flex flex-col justify-between">
      <div>
        <Navbar />

        {/* Hero Section */}
        <section className="relative pt-8 pb-6 md:pt-16 md:pb-12 overflow-hidden border-b border-neutral-100 bg-white">
          {/* Blueprint grid paper background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f3f5_1px,transparent_1px),linear-gradient(to_bottom,#f1f3f5_1px,transparent_1px)] bg-[size:32px_32px] opacity-70 pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              
              {/* Left Column: Copy & Actions */}
              <div className="lg:col-span-6 text-left space-y-6">
                <span className="inline-block font-sans font-bold text-xs uppercase tracking-[0.2em] text-brand-teal">
                  My Toolbelt
                </span>
                <h1 className="font-sans font-black text-4xl sm:text-5xl lg:text-6xl text-neutral-850 tracking-tight leading-[1.1]">
                  Stack of choice for building modern web apps.
                </h1>
                <p className="font-sans text-neutral-650 text-base sm:text-lg leading-relaxed max-w-xl font-normal">
                  A curated selection of modern frameworks, state management libraries, databases, cloud tools, and hosting providers that I trust to build high-performance products.
                </p>
                
                {/* Button Groups */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <Link
                    to="/lets-talk"
                    className="inline-flex items-center justify-center font-sans font-bold text-sm bg-neutral-900 text-white px-8 py-3.5 rounded-2xl hover:bg-brand-teal hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(20,184,166,0.25)] active:scale-95 transition-all duration-300 select-none"
                  >
                    Get in touch
                  </Link>
                  <Link
                    to="/works"
                    className="inline-flex items-center justify-center font-sans font-bold text-sm bg-white text-neutral-700 border border-neutral-200 px-8 py-3.5 rounded-2xl hover:bg-neutral-50 hover:border-neutral-350 hover:-translate-y-0.5 active:scale-95 transition-all duration-300 select-none"
                  >
                    View my works
                  </Link>
                </div>
              </div>

              {/* Right Column: Code Editor & Terminal collage */}
              <div className="lg:col-span-6 flex items-center justify-center relative min-h-[360px] md:min-h-[400px]">
                
                {/* Underneath: Code Editor Mockup tilted -rotate-2 */}
                <div className="absolute w-full max-w-[420px] bg-[#0b0f19] rounded-2xl shadow-2xl border border-slate-800/80 overflow-hidden flex flex-col -rotate-2 -translate-x-6 z-10 transition-transform duration-500 hover:rotate-0 hover:scale-[1.02] select-none">
                  {/* Window Title Bar */}
                  <div className="h-8 bg-[#070a12] border-b border-slate-850/60 flex items-center gap-1.5 px-4 shrink-0">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
                    <span className="text-[10px] font-mono text-slate-500 mx-auto -translate-x-4">package.json</span>
                  </div>
                  {/* Editor Content */}
                  <div className="p-5 font-mono text-[11px] sm:text-xs leading-relaxed text-slate-300 text-left overflow-x-auto">
                    <div>
                      <span className="text-[#f43f5e]">{'{'}</span>
                    </div>
                    <div className="pl-4">
                      <span className="text-[#38bdf8]">"name"</span>: <span className="text-[#34d399]">"raghul-ns-portfolio"</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-[#38bdf8]">"version"</span>: <span className="text-[#34d399]">"1.0.0"</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-[#38bdf8]">"dependencies"</span>: <span className="text-[#f43f5e]">{'{'}</span>
                    </div>
                    <div className="pl-8">
                      <span className="text-[#e2e8f0]">"react"</span>: <span className="text-[#34d399]">"^18.3.1"</span>,
                    </div>
                    <div className="pl-8">
                      <span className="text-[#e2e8f0]">"typescript"</span>: <span className="text-[#34d399]">"^5.4.2"</span>,
                    </div>
                    <div className="pl-8">
                      <span className="text-[#e2e8f0]">"tailwindcss"</span>: <span className="text-[#34d399]">"^3.4.1"</span>,
                    </div>
                    <div className="pl-8">
                      <span className="text-[#e2e8f0]">"express"</span>: <span className="text-[#34d399]">"^4.19.2"</span>,
                    </div>
                    <div className="pl-8">
                      <span className="text-[#e2e8f0]">"supabase-js"</span>: <span className="text-[#34d399]">"^2.43.0"</span>
                    </div>
                    <div className="pl-4">
                      <span className="text-[#f43f5e]">{'}'}</span>
                    </div>
                    <div>
                      <span className="text-[#f43f5e]">{'}'}</span>
                    </div>
                  </div>
                </div>

                {/* Overlapping Foreground: Terminal Window Mockup tilted rotate-3 */}
                <div className="absolute right-4 bottom-0 w-[240px] sm:w-[280px] bg-neutral-900 rounded-xl shadow-xl border border-neutral-800/60 p-4 rotate-3 translate-x-4 translate-y-4 z-20 transition-transform duration-500 hover:rotate-0 hover:scale-[1.03] select-none text-left">
                  <div className="flex items-center gap-1.5 pb-2.5 border-b border-neutral-800/80 mb-2 shrink-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-neutral-700" />
                    <div className="w-1.5 h-1.5 rounded-full bg-neutral-700" />
                    <div className="w-1.5 h-1.5 rounded-full bg-neutral-700" />
                    <span className="text-[9px] font-mono text-neutral-600 ml-1.5">bash</span>
                  </div>
                  <div className="font-mono text-[10px] sm:text-[11px] leading-relaxed text-neutral-400 space-y-1">
                    <div>
                      <span className="text-brand-teal">user@nsr-portfolio</span> <span className="text-neutral-500">~ %</span> npm run dev
                    </div>
                    <div className="text-brand-green">
                      VITE v8.1.0 ready in 248ms
                    </div>
                    <div className="text-neutral-500">
                      ➜  Local:   <span className="text-neutral-300 underline">http://localhost:5173/</span>
                    </div>
                    <div className="text-neutral-500">
                      ➜  press h + enter to show help
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* Philosophy & Tech Grid Section */}
        <section className="relative pt-6 pb-16 md:pt-10 md:pb-24 border-t border-neutral-100 select-none bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            {/* Split Header Block: Philosophy copy on left, stats summary card on right */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16 select-none">
              
              {/* Left-Aligned Header Block (takes 7 columns) */}
              <div className="lg:col-span-7 text-left space-y-4">
                <span className="inline-block font-sans font-bold text-xs uppercase tracking-[0.2em] text-brand-teal">
                  My Philosophy
                </span>
                <h2 className="font-sans font-black text-3xl sm:text-4xl text-neutral-850 tracking-tight leading-tight">
                  Pragmatic development. Robust architectures. Clean code.
                </h2>
                <p className="font-sans text-neutral-600 text-sm sm:text-base leading-relaxed font-normal max-w-2xl">
                  Rather than chasing every emerging framework or trend, I master a select set of industry-standard tools. This allows me to deliver secure, reliable, and high-performance applications that stand the test of time.
                </p>
              </div>

              {/* Right-Aligned Stats Card (takes 5 columns, fills the empty space beautifully) */}
              <div className="lg:col-span-5 relative bg-neutral-50/70 border border-neutral-200/50 rounded-3xl p-6 md:p-8 overflow-hidden shadow-sm flex flex-col justify-between text-left group hover:shadow-md transition-all duration-300">
                {/* Decorative faint glow */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-teal/5 rounded-full blur-2xl" />
                
                <div className="space-y-4">
                  <span className="inline-block text-[10px] font-sans font-bold uppercase tracking-widest text-brand-teal bg-brand-teal/[0.04] px-3 py-1 rounded-md border border-brand-teal/5">
                    Engineering Principles
                  </span>
                  <h3 className="text-base sm:text-lg font-sans font-black text-neutral-800 tracking-tight leading-snug">
                    Focusing on user-centric performance, accessibility, and robust developer workflows.
                  </h3>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-neutral-150">
                  <div>
                    <div className="text-2xl font-sans font-black text-brand-teal">95+</div>
                    <div className="text-[10px] font-sans font-bold uppercase tracking-wider text-neutral-400 mt-0.5">Lighthouse Speed</div>
                  </div>
                  <div>
                    <div className="text-2xl font-sans font-black text-brand-green">100%</div>
                    <div className="text-[10px] font-sans font-bold uppercase tracking-wider text-neutral-400 mt-0.5">Responsive Design</div>
                  </div>
                </div>
              </div>

            </div>

            {/* Flat Grid Container */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
              {categories.map((cat, idx) => {
                const IconComponent = cat.icon;
                return (
                  <div
                    key={idx}
                    className="flex flex-col text-left space-y-4 group"
                  >
                    {/* Circle Icon - matching reference image 2 style with premium hover and border */}
                    <div className="w-12 h-12 rounded-full bg-brand-teal/[0.06] border border-brand-teal/10 flex items-center justify-center text-brand-teal group-hover:bg-brand-teal group-hover:text-white group-hover:border-brand-teal group-hover:scale-105 transition-all duration-300 shadow-sm">
                      <IconComponent className="w-5 h-5" />
                    </div>

                    <div className="space-y-2">
                      {/* Numbered Title - crisper typography */}
                      <h3 className="font-sans font-black text-[16px] text-neutral-800 tracking-tight leading-snug">
                        {cat.id}. {cat.title}
                      </h3>
                      
                      {/* Description - high contrast readable color */}
                      <p className="font-sans text-[13px] text-neutral-500 font-medium leading-relaxed max-w-sm">
                        {cat.desc}
                      </p>
                    </div>

                    {/* Tech Badges - modern GitHub-like design with better borders */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {cat.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded-lg bg-neutral-50 text-neutral-600 text-[11px] font-sans font-semibold border border-neutral-200/70 group-hover:border-neutral-350 transition-colors duration-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* Let's Talk Section */}
        <section id="lets-talk" className="pt-2 pb-16 md:pt-4 md:pb-20 bg-white select-none">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
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
      </div>

      <Footer />
    </div>
  );
}
