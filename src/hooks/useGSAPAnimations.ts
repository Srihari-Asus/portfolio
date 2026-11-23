import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register plugin once
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function useScrollReveal(
  selector: string,
  options?: {
    y?: number;
    duration?: number;
    stagger?: number;
    delay?: number;
    threshold?: number;
  }
) {
  useEffect(() => {
    // Check prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const elements = document.querySelectorAll(selector);
    if (!elements || elements.length === 0) return;

    const ctx = gsap.context(() => {
      elements.forEach((el) => {
        gsap.fromTo(
          el,
          {
            opacity: 0,
            y: options?.y ?? 40,
          },
          {
            opacity: 1,
            y: 0,
            duration: options?.duration ?? 0.85,
            delay: options?.delay ?? 0,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      });
    });

    return () => {
      ctx.revert();
    };
  }, [selector, options]);
}

export { gsap, ScrollTrigger };
