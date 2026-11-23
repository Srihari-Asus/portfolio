import { useEffect, useState } from 'react';

interface LoaderProps {
  onComplete: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const startTime = Date.now();
    const duration = 1200; // Fast and snappy, never hangs or delays

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const currentProgress = Math.min(Math.round((elapsed / duration) * 100), 100);
      setProgress(currentProgress);

      if (currentProgress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsExiting(true);
          setTimeout(() => {
            onComplete();
          }, 500); // Wait for fade-out transition
        }, 150);
      }
    }, 20);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[10000] bg-void-950 flex flex-col justify-between p-5 sm:p-14 select-none transition-all duration-500 ease-in-out ${
        isExiting ? 'opacity-0 pointer-events-none scale-105' : 'opacity-100'
      }`}
      aria-label="Loading portfolio experience"
    >
      {/* Top Branding */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-crimson animate-pulse" />
          <span className="font-mono text-xs tracking-widest text-silver-muted uppercase">
            SRIHARI S. // PORTFOLIO
          </span>
        </div>
        <span className="font-mono text-xs text-silver-muted tracking-wider">
          INIT_SYSTEM_2026
        </span>
      </div>

      {/* Center Cinematic Statement */}
      <div className="max-w-4xl mx-auto my-auto text-center px-4">
        <div className="overflow-hidden mb-3">
          <p className="font-mono text-xs sm:text-sm tracking-[0.3em] text-crimson-accent uppercase">
            SYSTEM ARCHITECTURE &amp; INTELLIGENCE
          </p>
        </div>
        <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
          BUILDING IDEAS <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-crimson to-crimson-glow text-glow-crimson">
            INTO REALITY.
          </span>
        </h1>
      </div>

      {/* Bottom Progress Counter & Bar */}
      <div className="max-w-xl mx-auto w-full">
        <div className="flex justify-between items-baseline mb-2 font-mono text-xs">
          <span className="text-silver-muted tracking-wider">LOADING ASSETS &amp; MODELS</span>
          <span className="text-crimson font-bold tabular-nums text-sm">
            {progress.toString().padStart(3, '0')}%
          </span>
        </div>
        <div className="w-full h-[2px] bg-void-700 overflow-hidden relative">
          <div
            className="h-full bg-gradient-to-r from-crimson-dark via-crimson to-crimson-glow shadow-[0_0_12px_#ff2a38] transition-all duration-100 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
