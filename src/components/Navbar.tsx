import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About Me', href: '/about' },
    { label: 'Works', href: '/works' },
    { label: 'Tech Stack', href: '/tech-stack' },
  ];

  // Determine active item from pathname
  const getActiveItem = () => {
    const path = location.pathname;
    if (path === '/') return 'Home';
    if (path === '/about') return 'About Me';
    if (path === '/works') return 'Works';
    if (path === '/tech-stack') return 'Tech Stack';
    return '';
  };

  const activeItem = getActiveItem();

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-border/60 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Left Corner - Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link 
              to="/"
              className="flex items-center gap-2"
            >
              <img 
                src="/Logo.png" 
                alt="NSR Logo" 
                className="h-10 w-auto object-contain hover:opacity-90 transition-opacity" 
              />
              <span className="font-sans font-bold text-xl text-brand-navy tracking-tight hidden sm:block">
                Raghul N.S
              </span>
            </Link>
          </div>

          {/* Right Side Menu (Desktop) */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = activeItem === item.label;
              return (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`relative font-sans font-medium text-sm transition-colors tracking-wide uppercase group py-1.5 ${
                    isActive ? 'text-brand-navy' : 'text-gray-500 hover:text-brand-navy'
                  }`}
                >
                  {item.label}
                  <span className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-brand-teal to-brand-green transition-all duration-300 rounded-full ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </Link>
              );
            })}
          </div>

          {/* Right Corner Option - Let's Talk */}
          <div className="hidden md:flex items-center">
            <Link
              to="/lets-talk"
              className="font-sans font-semibold text-sm bg-brand-navy text-white px-6 py-3 rounded-full hover:bg-gradient-to-r hover:from-brand-teal hover:to-brand-green transition-all duration-300 shadow-sm hover:shadow-md active:scale-95"
            >
              Let's Talk
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-navy hover:text-brand-teal focus:outline-none p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-border shadow-lg animate-in fade-in slide-in-from-top-5 duration-200">
          <div className="px-4 pt-2 pb-6 space-y-3">
            {navItems.map((item) => {
              const isActive = activeItem === item.label;
              return (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2.5 rounded-lg text-base font-semibold transition-all ${
                    isActive 
                      ? 'bg-gray-50 text-brand-teal border-l-2 border-brand-teal pl-2.5' 
                      : 'text-brand-navy hover:bg-gray-50 hover:text-brand-teal'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="pt-4 border-t border-gray-100">
              <Link
                to="/lets-talk"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center font-sans font-bold bg-brand-navy text-white py-3 rounded-xl hover:bg-gradient-to-r hover:from-brand-teal hover:to-brand-green transition-all"
              >
                Let's Talk
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
