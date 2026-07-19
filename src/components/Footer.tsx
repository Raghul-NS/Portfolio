import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [statusMsg, setStatusMsg] = useState('');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    setStatusMsg('');

    try {
      const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';
      const response = await fetch(`${backendUrl}/api/subscribe`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const result = await response.json();
      if (response.ok && result.status === 'success') {
        setStatus('success');
        setStatusMsg('Successfully subscribed!');
        setEmail('');
        setTimeout(() => {
          setStatus('idle');
          setStatusMsg('');
        }, 5000);
      } else {
        setStatus('error');
        setStatusMsg(result.message || 'Subscription failed. Try again.');
      }
    } catch (err) {
      console.error('Subscription error:', err);
      setStatus('error');
      setStatusMsg('Could not connect to subscription server.');
    }
  };

  return (
    <footer className="bg-white border-t border-gray-border/60 pt-16 pb-8 md:pt-20 md:pb-10 font-sans text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start mb-16">
          
          {/* Left Column: Newsletter (Occupies 5 columns) */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="font-sans font-black text-2xl md:text-3xl text-brand-navy tracking-tight">
              Subscribe to our<br />newsletter
            </h3>
            
            {/* Custom Input Field with Arrow Button */}
            <form className="max-w-md" onSubmit={handleSubscribe}>
              <div className="relative flex items-center border-b-2 border-brand-navy/30 focus-within:border-brand-teal transition-colors py-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="w-full bg-transparent border-none text-brand-navy placeholder-gray-400 font-sans font-semibold text-sm outline-none pr-10"
                  required
                  disabled={status === 'loading'}
                />
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className={`absolute right-0 p-1.5 rounded-full hover:bg-gray-100 text-brand-navy hover:text-brand-teal transition-all active:scale-90 ${
                    status === 'loading' ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                  aria-label="Subscribe"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

              {/* Status Message Labels */}
              {statusMsg && (
                <div className="mt-3">
                  <span className={`font-sans font-semibold text-xs transition-opacity duration-300 ${
                    status === 'success' ? 'text-brand-teal animate-pulse' : 'text-red-500'
                  }`}>
                    {statusMsg}
                  </span>
                </div>
              )}
            </form>
          </div>

          {/* Right Columns: Links & Info (Occupies 7 columns) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-12 gap-8">
            
            {/* About links */}
            <div className="sm:col-span-3">
              <h4 className="font-sans font-extrabold text-xs text-brand-navy uppercase tracking-widest mb-4">
                Navigation
              </h4>
              <ul className="space-y-3">
                {[
                  { label: 'About Me', href: '#about' },
                  { label: 'Works', href: '#works' },
                  { label: 'Tech Stack', href: '#tech-stack' },
                  { label: 'Reviews', href: '#lets-talk' }
                ].map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className="text-sm text-gray-500 hover:text-brand-teal transition-colors">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Specialties Links */}
            <div className="sm:col-span-4">
              <h4 className="font-sans font-extrabold text-xs text-brand-navy uppercase tracking-widest mb-4">
                Services
              </h4>
              <ul className="space-y-3">
                {['Web Applications', 'Database Design', 'API Development', 'Workflow Automation'].map((item) => (
                  <li key={item}>
                    <span className="text-sm text-gray-500">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact details & Location */}
            <div className="sm:col-span-5 space-y-4">
              <div>
                <h4 className="font-sans font-extrabold text-xs text-brand-navy uppercase tracking-widest mb-3">
                  Location
                </h4>
                <p className="text-sm text-gray-500 leading-relaxed">
                  27, Nathakattu Palayam, Koonan Kadu,<br />
                  Vellode VIA, Erode - 638112
                </p>
              </div>
              <div>
                <h4 className="font-sans font-extrabold text-xs text-brand-navy uppercase tracking-widest mb-1.5">
                  Contact
                </h4>
                <div className="flex flex-col items-start gap-1">
                  <a 
                    href="tel:+918190962836" 
                    className="text-sm text-brand-teal hover:underline font-semibold"
                  >
                    (+91) 81909 62836
                  </a>
                  <a 
                    href="mailto:raghulpravee799@gmail.com" 
                    className="text-sm text-brand-teal hover:underline font-semibold"
                  >
                    raghulpravee799@gmail.com
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Bar: Copyright & Socials */}
        <div className="pt-8 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="font-sans text-xs text-gray-400">
            &copy; {new Date().getFullYear()} Raghul N.S. All rights reserved.
          </p>

          {/* Social Icons (matching ref design style) */}
          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/918190962836"
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 rounded-full border border-[#25D366]/40 text-[#25D366] bg-[#25D366]/5 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 hover:bg-[#25D366] hover:text-white hover:border-[#25D366] hover:shadow-[0_4px_12px_rgba(37,211,102,0.2)]"
              aria-label="WhatsApp"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 rounded-full border border-[#e1306c]/40 text-[#e1306c] bg-[#e1306c]/5 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 hover:bg-[#e1306c] hover:text-white hover:border-[#e1306c] hover:shadow-[0_4px_12px_rgba(225,48,108,0.2)]"
              aria-label="Instagram"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 rounded-full border border-[#0a66c2]/40 text-[#0a66c2] bg-[#0a66c2]/5 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 hover:bg-[#0a66c2] hover:text-white hover:border-[#0a66c2] hover:shadow-[0_4px_12px_rgba(10,102,194,0.2)]"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
