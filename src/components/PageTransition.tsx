import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function PageTransition() {
  const location = useLocation();
  const [animState, setAnimState] = useState<'idle' | 'active'>('idle');

  useEffect(() => {
    setAnimState('active');
    
    // Cycle duration is 950ms total
    const timer = setTimeout(() => {
      setAnimState('idle');
    }, 950);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  if (animState === 'idle') return null;

  // Staggered light color wave layers
  const layers = [
    { id: 1, color: 'bg-neutral-100/90' },
    { id: 2, color: 'bg-white' },
    { id: 3, color: 'bg-[#e0f2fe]/90' }, // Pale Sky Blue
    { id: 4, color: 'bg-brand-teal' }
  ];

  return (
    <div className="fixed inset-0 z-[99999] pointer-events-auto select-none overflow-hidden">
      {layers.map((layer, index) => {
        // Staggered slide delays (60ms intervals)
        const delay = index * 60;

        return (
          <div
            key={layer.id}
            className={`absolute inset-0 ${layer.color}`}
            style={{
              transform: 'translateX(-100%)',
              animation: 'slide-light-wave 0.95s cubic-bezier(0.85, 0, 0.15, 1) forwards',
              animationDelay: `${delay}ms`
            }}
          />
        );
      })}

      {/* Inline Keyframe Styles */}
      <style>{`
        @keyframes slide-light-wave {
          0% {
            transform: translateX(-100%);
          }
          45%, 55% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  );
}
