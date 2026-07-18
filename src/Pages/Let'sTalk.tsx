import { useState } from 'react';
import { createPortal } from 'react-dom';
import { 
  FaGithub, 
  FaLinkedin, 
  FaWhatsapp, 
  FaEnvelope,
  FaInstagram
} from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function LetsTalk() {
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    org: '',
    services: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all required fields marked with *');
      return;
    }

    setIsLoading(true);
    setErrorMessage('');
    
    try {
      const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';
      const response = await fetch(`${backendUrl}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok && result.status === 'success') {
        setIsSubmitted(true);
        setShowSuccessModal(true);
        setFormData({ name: '', email: '', org: '', services: '', message: '' });
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } else {
        setErrorMessage(result.message || 'Failed to send message. Please try again.');
      }
    } catch (err) {
      console.error('Submit error:', err);
      setErrorMessage('Could not connect to backend server. Make sure the server is running.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-brand-navy antialiased selection:bg-brand-teal selection:text-white flex flex-col justify-between">
      <div>
        <Navbar />

        {/* Hero Section */}
        <section className="pt-8 pb-16 md:pt-16 md:pb-20 select-none bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              
              {/* Left Column: Greeting & Intro */}
              <div className="lg:col-span-7 text-left space-y-6 reveal-left">
                <h1 className="font-sans font-black text-4xl sm:text-5xl lg:text-6xl text-neutral-850 tracking-tight leading-[1.1]">
                  Hi all, I'm Raghul N.S
                </h1>
                
                <p className="font-sans text-neutral-500 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
                  A passionate Frontend & Full Stack Developer 🚀 having an experience of building responsive Web applications with React.js / Tailwind CSS / Node.js / Express / databases like Supabase/Firebase and some other cool libraries and frameworks.
                </p>

                {/* Social Icons row */}
                <div className="flex flex-wrap items-center gap-3.5 pt-2">
                  <a 
                    href="https://github.com/Raghul799" 
                    target="_blank" 
                    rel="noreferrer"
                    className="w-10 h-10 rounded-full bg-[#181717] hover:bg-[#181717]/90 text-white flex items-center justify-center shadow-sm hover:scale-105 active:scale-95 transition-all duration-200"
                  >
                    <FaGithub className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noreferrer"
                    className="w-10 h-10 rounded-full bg-[#0A66C2] hover:bg-[#0A66C2]/90 text-white flex items-center justify-center shadow-sm hover:scale-105 active:scale-95 transition-all duration-200"
                  >
                    <FaLinkedin className="w-5 h-5" />
                  </a>
                  <a 
                    href="mailto:raghulpravee799@gmail.com"
                    className="w-10 h-10 rounded-full bg-[#EA4335] hover:bg-[#EA4335]/90 text-white flex items-center justify-center shadow-sm hover:scale-105 active:scale-95 transition-all duration-200"
                  >
                    <FaEnvelope className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://wa.me/918190962836" 
                    target="_blank" 
                    rel="noreferrer"
                    className="w-10 h-10 rounded-full bg-[#25D366] hover:bg-[#25D366]/90 text-white flex items-center justify-center shadow-sm hover:scale-105 active:scale-95 transition-all duration-200"
                  >
                    <FaWhatsapp className="w-6 h-6" />
                  </a>
                </div>
              </div>

              {/* Right Column: Premium Developer Robot Mascot Illustration (Sleek vector drawing with animations) */}
              <div className="lg:col-span-5 flex items-center justify-center relative min-h-[340px] sm:min-h-[380px] md:min-h-[420px] overflow-visible reveal-scale">
                {/* CSS animation definitions */}
                <style>{`
                  @keyframes float-robot {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                  }
                  @keyframes eye-blink {
                    0%, 45%, 55%, 100% { transform: scaleY(1); }
                    50% { transform: scaleY(0.15); }
                  }
                  @keyframes jet-pulse {
                    0%, 100% { transform: scaleY(1) scaleX(1); opacity: 0.9; }
                    50% { transform: scaleY(1.2) scaleX(1.05); opacity: 1; }
                  }
                  @keyframes holo-glow {
                    0%, 100% { opacity: 0.7; transform: scaleY(0.98); }
                    50% { opacity: 0.95; transform: scaleY(1.02); }
                  }
                  @keyframes drift-particle {
                    0% { transform: translateY(0px) scale(1); opacity: 0.8; }
                    100% { transform: translateY(-30px) scale(0.6); opacity: 0; }
                  }
                `}</style>

                {/* SVG Illustration Container (Sized larger) */}
                <svg viewBox="0 0 420 340" className="w-full max-w-[450px] md:max-w-[480px] h-auto overflow-visible select-none">
                  <defs>
                    {/* Glowing body gradient */}
                    <linearGradient id="body-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#0d9488" />
                      <stop offset="100%" stopColor="#1e1b4b" />
                    </linearGradient>
                    {/* Metal accents gradient */}
                    <linearGradient id="metal-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#cbd5e1" />
                      <stop offset="100%" stopColor="#64748b" />
                    </linearGradient>
                    {/* Flame gradient */}
                    <linearGradient id="fire-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#38bdf8" />
                      <stop offset="50%" stopColor="#0284c7" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#0369a1" stopOpacity="0" />
                    </linearGradient>
                    {/* Hologram screen gradient */}
                    <linearGradient id="holo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.45" />
                      <stop offset="100%" stopColor="#0d9488" stopOpacity="0.1" />
                    </linearGradient>
                  </defs>

                  {/* Backdrop Radial Light Grid */}
                  <circle cx="210" cy="160" r="140" fill="url(#holo-grad)" opacity="0.1" />
                  
                  {/* Holographic Keyboard / Coding console in 3D perspective */}
                  <g className="origin-center" style={{ transform: 'translateY(15px)' }}>
                    {/* Main holo grid plate */}
                    <polygon 
                      points="80,240 340,240 375,275 45,275" 
                      fill="url(#holo-grad)" 
                      stroke="#22d3ee" 
                      strokeWidth="2.5" 
                      strokeLinejoin="round"
                      className="animate-[holo-glow_3s_ease-in-out_infinite]"
                    />
                    
                    {/* Perspective grid lines */}
                    <line x1="145" y1="240" x2="110" y2="275" stroke="#22d3ee" strokeWidth="1" opacity="0.4" />
                    <line x1="210" y1="240" x2="210" y2="275" stroke="#22d3ee" strokeWidth="1" opacity="0.4" />
                    <line x1="275" y1="240" x2="310" y2="275" stroke="#22d3ee" strokeWidth="1" opacity="0.4" />
                    <line x1="80" y1="240" x2="340" y2="240" stroke="#22d3ee" strokeWidth="1" opacity="0.4" />
                    <line x1="62" y1="258" x2="358" y2="258" stroke="#22d3ee" strokeWidth="1.5" opacity="0.6" />

                    {/* Glowing floating code elements */}
                    <text x="75" y="230" fill="#22d3ee" fontSize="11" fontFamily="monospace" fontWeight="bold" opacity="0.8">{"<LetsTalk />"}</text>
                    <text x="300" y="230" fill="#0d9488" fontSize="11" fontFamily="monospace" fontWeight="bold" opacity="0.8">200 OK</text>
                  </g>

                  {/* Hovering Robot Mascot Group */}
                  <g className="animate-[float-robot_4s_ease-in-out_infinite]">

                    {/* Left Arm & Hand typing */}
                    <path d="M 130,172 C 105,190 115,225 155,225" fill="none" stroke="url(#body-grad)" strokeWidth="9" strokeLinecap="round" />
                    <circle cx="155" cy="225" r="5" fill="#fde047" stroke="#1f2937" strokeWidth="1.5" />

                    {/* Right Arm & Hand typing */}
                    <path d="M 290,172 C 315,190 305,225 265,225" fill="none" stroke="url(#body-grad)" strokeWidth="9" strokeLinecap="round" />
                    <circle cx="265" cy="225" r="5" fill="#fde047" stroke="#1f2937" strokeWidth="1.5" />

                    {/* Jet nozzle at base */}
                    <polygon points="192,238 228,238 222,250 198,250" fill="url(#metal-grad)" stroke="#1e293b" strokeWidth="1.5" />
                    {/* Glowing rocket fire (Hover jet pulse) */}
                    <path 
                      d="M 196,250 L 224,250 L 210,290 Z" 
                      fill="url(#fire-grad)" 
                      className="animate-[jet-pulse_0.15s_ease-in-out_infinite]"
                      style={{ transformOrigin: '210px 250px' }}
                    />

                    {/* Robot Torso / Body (Capsule style) */}
                    <path 
                      d="M 160,158 L 260,158 A 18,18 0 0,1 278,176 L 278,206 A 38,38 0 0,1 240,244 L 180,244 A 38,38 0 0,1 142,206 L 142,176 A 18,18 0 0,1 160,158 Z" 
                      fill="url(#body-grad)" 
                      stroke="#1e293b" 
                      strokeWidth="3.5" 
                      strokeLinejoin="round" 
                    />

                    {/* Chest screen (Heartbeat line indicator) */}
                    <rect x="178" y="174" width="64" height="38" rx="8" fill="#0f172a" stroke="url(#metal-grad)" strokeWidth="2" />
                    <path 
                      d="M 183,193 L 195,193 L 200,182 L 207,204 L 213,193 L 221,193 L 226,186 L 232,198 L 237,193" 
                      fill="none" 
                      stroke="#38bdf8" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      className="animate-pulse"
                    />

                    {/* Robot Neck */}
                    <rect x="198" y="146" width="24" height="12" rx="3" fill="url(#metal-grad)" stroke="#1e293b" strokeWidth="2" />

                    {/* Head / Monitor shell */}
                    <rect x="155" y="74" width="110" height="82" rx="18" fill="url(#body-grad)" stroke="#1e293b" strokeWidth="3.5" />
                    {/* Head screen */}
                    <rect x="165" y="84" width="90" height="62" rx="10" fill="#0f172a" />

                    {/* Glowing LED Face (Blinking eyes on 5s loop) */}
                    <g className="animate-[eye-blink_5s_infinite]" style={{ transformOrigin: '210px 115px' }}>
                      {/* Left glowing eye */}
                      <ellipse cx="192" cy="115" rx="6" ry="7" fill="#22d3ee" />
                      <circle cx="190" cy="112" r="2" fill="#ffffff" />
                      {/* Right glowing eye */}
                      <ellipse cx="228" cy="115" rx="6" ry="7" fill="#22d3ee" />
                      <circle cx="226" cy="112" r="2" fill="#ffffff" />
                      {/* Cute pixel smile */}
                      <path d="M 203,130 Q 210,136 217,130" fill="none" stroke="#22d3ee" strokeWidth="2.5" strokeLinecap="round" />
                    </g>

                    {/* Antennas on Head */}
                    <line x1="210" y1="74" x2="210" y2="52" stroke="#1f2937" strokeWidth="3.5" strokeLinecap="round" />
                    <circle cx="210" cy="48" r="5" fill="#e11d48" className="animate-ping" style={{ transformOrigin: '210px 48px' }} />
                    <circle cx="210" cy="48" r="4.5" fill="#e11d48" />

                    {/* Left headphone earcap */}
                    <rect x="144" y="94" width="11" height="42" rx="5" fill="url(#metal-grad)" stroke="#1e293b" strokeWidth="2" />
                    {/* Right headphone earcap */}
                    <rect x="265" y="94" width="11" height="42" rx="5" fill="url(#metal-grad)" stroke="#1e293b" strokeWidth="2" />

                  </g>

                  {/* Floating Holographic Envelope Icon (Top Right) */}
                  <g className="animate-[float-robot_3s_ease-in-out_infinite]" style={{ transformOrigin: '320px 80px', animationDelay: '-1.5s' }}>
                    <polygon points="305,65 345,55 355,90 315,100" fill="url(#holo-grad)" stroke="#22d3ee" strokeWidth="2" strokeLinejoin="round" />
                    <path d="M 305,65 L 330,85 L 345,55" fill="none" stroke="#22d3ee" strokeWidth="1.5" />
                  </g>

                  {/* Floating Holographic Chat Bubble (Top Left) */}
                  <g className="animate-[float-robot_3.5s_ease-in-out_infinite]" style={{ transformOrigin: '100px 90px', animationDelay: '-0.8s' }}>
                    <rect x="80" y="70" width="35" height="24" rx="6" fill="url(#holo-grad)" stroke="#22d3ee" strokeWidth="2" />
                    <polygon points="90,94 95,102 100,94" fill="#0d9488" stroke="#22d3ee" strokeWidth="2" strokeLinejoin="round" />
                    <circle cx="91" cy="82" r="1.5" fill="#22d3ee" />
                    <circle cx="97" cy="82" r="1.5" fill="#22d3ee" />
                    <circle cx="103" cy="82" r="1.5" fill="#22d3ee" />
                  </g>

                </svg>

              </div>

            </div>
          </div>
        </section>

        {/* Contact Form & Info Grid Section */}
        <section className="py-16 md:py-24 border-t border-neutral-100 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
              
              {/* Left Column: Form Details (takes 7 columns) */}
              <form onSubmit={handleSubmit} className="lg:col-span-7 text-left space-y-12 reveal-left delay-100">
                
                {/* Field 01: Name */}
                <div className="border-b border-neutral-200 focus-within:border-brand-teal/80 transition-colors pb-6 flex flex-col md:flex-row md:items-baseline gap-6">
                  <span className="font-sans font-black text-sm sm:text-base text-neutral-400 shrink-0">01</span>
                  <div className="flex-1 space-y-3">
                    <label className="block font-sans font-black text-base sm:text-lg text-neutral-850">
                      What is your name? <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full bg-transparent font-sans font-semibold text-base sm:text-lg text-neutral-700 placeholder-neutral-300 focus:outline-none py-2"
                    />
                  </div>
                </div>

                {/* Field 02: Email */}
                <div className="border-b border-neutral-200 focus-within:border-brand-teal/80 transition-colors pb-6 flex flex-col md:flex-row md:items-baseline gap-6">
                  <span className="font-sans font-black text-sm sm:text-base text-neutral-400 shrink-0">02</span>
                  <div className="flex-1 space-y-3">
                    <label className="block font-sans font-black text-base sm:text-lg text-neutral-850">
                      What is your email? <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@doe.com"
                      className="w-full bg-transparent font-sans font-semibold text-base sm:text-lg text-neutral-700 placeholder-neutral-300 focus:outline-none py-2"
                    />
                  </div>
                </div>

                {/* Field 03: Organization */}
                <div className="border-b border-neutral-200 focus-within:border-brand-teal/80 transition-colors pb-6 flex flex-col md:flex-row md:items-baseline gap-6">
                  <span className="font-sans font-black text-sm sm:text-base text-neutral-400 shrink-0">03</span>
                  <div className="flex-1 space-y-3">
                    <label className="block font-sans font-black text-base sm:text-lg text-neutral-850">
                      What is the name of your organization?
                    </label>
                    <input 
                      type="text" 
                      name="org"
                      value={formData.org}
                      onChange={handleChange}
                      placeholder="John & Doe ®"
                      className="w-full bg-transparent font-sans font-semibold text-base sm:text-lg text-neutral-700 placeholder-neutral-300 focus:outline-none py-2"
                    />
                  </div>
                </div>

                {/* Field 04: Services */}
                <div className="border-b border-neutral-200 focus-within:border-brand-teal/80 transition-colors pb-6 flex flex-col md:flex-row md:items-baseline gap-6">
                  <span className="font-sans font-black text-sm sm:text-base text-neutral-400 shrink-0">04</span>
                  <div className="flex-1 space-y-3">
                    <label className="block font-sans font-black text-base sm:text-lg text-neutral-850">
                      What services are you interested in?
                    </label>
                    <input 
                      type="text" 
                      name="services"
                      value={formData.services}
                      onChange={handleChange}
                      placeholder="Web Development, Frontend Development..."
                      className="w-full bg-transparent font-sans font-semibold text-base sm:text-lg text-neutral-700 placeholder-neutral-300 focus:outline-none py-2"
                    />
                  </div>
                </div>

                {/* Field 05: Message */}
                <div className="border-b border-neutral-200 focus-within:border-brand-teal/80 transition-colors pb-6 flex flex-col md:flex-row md:items-start gap-6">
                  <span className="font-sans font-black text-sm sm:text-base text-neutral-400 shrink-0 mt-1">05</span>
                  <div className="flex-1 space-y-3">
                    <label className="block font-sans font-black text-base sm:text-lg text-neutral-850">
                      Your message <span className="text-red-500">*</span>
                    </label>
                    <textarea 
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Hello Raghul, can you help me with..."
                      className="w-full bg-transparent font-sans font-semibold text-base sm:text-lg text-neutral-700 placeholder-neutral-300 focus:outline-none py-2 resize-none"
                    />
                  </div>
                </div>

                {/* Action Submit Button */}
                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <button 
                    type="submit"
                    disabled={isLoading}
                    className={`inline-flex items-center justify-center font-sans font-bold text-sm bg-neutral-900 text-white px-10 py-4 rounded-2xl transition-all duration-300 select-none ${
                      isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-brand-teal hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(20,184,166,0.25)] active:scale-95'
                    }`}
                  >
                    {isLoading ? 'Sending...' : isSubmitted ? 'Message Sent!' : 'Send Message'}
                  </button>
                  {isSubmitted && (
                    <span className="font-sans font-semibold text-xs text-brand-teal animate-pulse">
                      Thank you! I will get back to you shortly.
                    </span>
                  )}
                  {errorMessage && (
                    <span className="font-sans font-semibold text-xs text-red-500">
                      {errorMessage}
                    </span>
                  )}
                </div>

              </form>

              {/* Right Column: Contact Details Sidebar (takes 5 columns) */}
              <div className="lg:col-span-5 text-left space-y-12 lg:pl-30 reveal-right delay-150">
                
                {/* 1. Contact Details */}
                <div className="space-y-3">
                  <h4 className="font-sans font-extrabold text-[10px] text-neutral-350 uppercase tracking-widest">
                    Contact Details
                  </h4>
                  <div className="flex flex-col gap-1.5">
                    <a 
                      href="mailto:raghulpravee799@gmail.com"
                      className="font-sans font-bold text-base text-neutral-800 hover:text-brand-teal transition-colors"
                    >
                      raghulpravee799@gmail.com
                    </a>
                    <a 
                      href="tel:+918190962836"
                      className="font-sans font-bold text-base text-neutral-800 hover:text-brand-teal transition-colors"
                    >
                      (+91) 81909 62836
                    </a>
                  </div>
                </div>

                {/* 2. Business Details */}
                <div className="space-y-3">
                  <h4 className="font-sans font-extrabold text-[10px] text-neutral-350 uppercase tracking-widest">
                    Business Details
                  </h4>
                  <div className="flex flex-col gap-1">
                    <span className="font-sans font-bold text-base text-neutral-800">
                      Raghul N.S
                    </span>
                    <span className="font-sans text-sm text-neutral-500 font-medium">
                      Location: Erode, Tamil Nadu, India
                    </span>
                  </div>
                </div>

                {/* 3. Socials Grid */}
                <div className="space-y-4">
                  <h4 className="font-sans font-extrabold text-[10px] text-neutral-350 uppercase tracking-widest">
                    Socials
                  </h4>
                  <div className="flex items-center gap-3">
                    <a 
                      href="https://linkedin.com" 
                      target="_blank" 
                      rel="noreferrer"
                      className="w-11 h-11 bg-[#0A66C2] rounded-xl hover:bg-[#0A66C2]/90 text-white flex items-center justify-center shadow-sm hover:-translate-y-0.5 active:scale-95 transition-all duration-200"
                    >
                      <FaLinkedin className="w-5 h-5" />
                    </a>
                    <a 
                      href="https://github.com/Raghul799" 
                      target="_blank" 
                      rel="noreferrer"
                      className="w-11 h-11 bg-[#181717] rounded-xl hover:bg-[#181717]/90 text-white flex items-center justify-center shadow-sm hover:-translate-y-0.5 active:scale-95 transition-all duration-200"
                    >
                      <FaGithub className="w-5 h-5" />
                    </a>
                    <a 
                      href="https://instagram.com" 
                      target="_blank" 
                      rel="noreferrer"
                      className="w-11 h-11 bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] rounded-xl text-white flex items-center justify-center shadow-sm hover:-translate-y-0.5 hover:brightness-105 active:scale-95 transition-all duration-200"
                    >
                      <FaInstagram className="w-5 h-5" />
                    </a>
                    <a 
                      href="https://wa.me/918190962836" 
                      target="_blank" 
                      rel="noreferrer"
                      className="w-11 h-11 bg-[#25D366] rounded-xl hover:bg-[#25D366]/90 text-white flex items-center justify-center shadow-sm hover:-translate-y-0.5 active:scale-95 transition-all duration-200"
                    >
                      <FaWhatsapp className="w-6 h-6" />
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />

      {/* Success Dialog Modal */}
      {showSuccessModal && createPortal(
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-all duration-300 animate-fade-in"
          onClick={() => setShowSuccessModal(false)}
        >
          <div 
            className="bg-white rounded-[2rem] max-w-md w-full p-8 text-center shadow-2xl border border-neutral-100 relative scale-100 transition-transform duration-300 animate-scale-in flex flex-col items-center justify-center space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Animated Bouncy Checkmark Circle */}
            <div className="w-16 h-16 rounded-full bg-brand-teal/10 flex items-center justify-center text-brand-teal border border-brand-teal/20 shadow-sm animate-bounce">
              <svg className="w-8 h-8 stroke-current" fill="none" strokeWidth="2.5" viewBox="0 0 24 24">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            
            <div className="space-y-2">
              <h3 className="font-sans font-black text-2xl text-neutral-850">
                Message Sent!
              </h3>
              <p className="font-sans text-neutral-500 text-sm leading-relaxed">
                Thank you for reaching out! Your message has been successfully sent. I will get back to you shortly.
              </p>
            </div>

            <button 
              onClick={() => setShowSuccessModal(false)}
              className="w-full font-sans font-bold text-sm bg-neutral-900 text-white py-3.5 rounded-xl hover:bg-brand-teal active:scale-95 transition-all duration-200 select-none shadow-md hover:shadow-lg"
            >
              Awesome
            </button>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}
