import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export default function TransitionLayout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [animState, setAnimState] = useState<'idle' | 'covering' | 'covered' | 'uncovering'>(() => {
    // Start covered on first load to run the entry reveal animation
    return 'covered';
  });
  const isFirstLoadRef = useRef(true);

  // Initial Entry Reveal on Mount
  useEffect(() => {
    setAnimState('uncovering');
    const timer = setTimeout(() => {
      setAnimState('idle');
    }, 700);
    return () => clearTimeout(timer);
  }, []);

  // Route Transition Logic
  useEffect(() => {
    if (isFirstLoadRef.current) {
      isFirstLoadRef.current = false;
      return;
    }

    // Phase 1: Defocus the page container and fade in light leak
    setAnimState('covering');

    // Phase 2: Swap page content and reset scroll position behind the light leak flare
    const coveredTimer = setTimeout(() => {
      setAnimState('covered');
      setDisplayLocation(location);
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant' as any
      });
    }, 350);

    // Phase 3: Refocus page container and fade out light leak
    const uncoverTimer = setTimeout(() => {
      setAnimState('uncovering');
    }, 400);

    // Phase 4: Complete transition and return to idle
    const idleTimer = setTimeout(() => {
      setAnimState('idle');
    }, 900);

    return () => {
      clearTimeout(coveredTimer);
      clearTimeout(uncoverTimer);
      clearTimeout(idleTimer);
    };
  }, [location.pathname]);

  // Intersection Observer for scroll reveal elements
  useEffect(() => {
    let observer: IntersectionObserver | null = null;
    let elements: NodeListOf<Element> | null = null;

    const observerTimer = setTimeout(() => {
      observer = new IntersectionObserver(
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

      elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
      elements.forEach((el) => observer?.observe(el));
    }, 900);

    return () => {
      clearTimeout(observerTimer);
      if (observer && elements) {
        elements.forEach((el) => observer?.unobserve(el));
      }
    };
  }, [displayLocation]);

  const isPointerActive = animState !== 'idle';

  // Determine page container classes based on animState
  let pageClass = 'opacity-100 blur-0 scale-100';
  if (animState === 'covering' || animState === 'covered') {
    pageClass = 'opacity-25 blur-2xl scale-[0.97] pointer-events-none';
  }

  // Determine light leak classes based on animState
  let flareOpacity = 'opacity-0 scale-95';
  if (animState === 'covering') {
    flareOpacity = 'opacity-100 scale-100';
  } else if (animState === 'covered') {
    flareOpacity = 'opacity-100 scale-100';
  } else if (animState === 'uncovering') {
    flareOpacity = 'opacity-0 scale-105';
  }

  return (
    <div className="relative min-h-screen bg-white">
      {/* 1. Cinematic Page Container - Refocuses and scales smoothly */}
      <div className={`transition-all duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${pageClass}`}>
        {React.cloneElement(children as React.ReactElement<any>, { location: displayLocation })}
      </div>

      {/* 2. Full-screen Light Leak Overlay - Blocks double-clicks when active */}
      <div 
        className={`fixed inset-0 z-[99999] flex items-center justify-center select-none overflow-hidden transition-all duration-[650ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isPointerActive ? 'pointer-events-auto' : 'pointer-events-none'
        } ${flareOpacity}`}
      >
        {/* Soft radial lens flare gradient centered */}
        <div 
          className="w-[140vmax] h-[140vmax] rounded-full blur-[80px] origin-center"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(20,184,166,0.35) 0%, rgba(186,230,253,0.45) 35%, rgba(255,255,255,0.7) 60%, rgba(255,255,255,0) 80%)'
          }}
        />
      </div>
    </div>
  );
}
