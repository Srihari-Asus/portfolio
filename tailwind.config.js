/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        void: {
          950: '#030304',
          900: '#07070a',
          850: '#0b0b10',
          800: '#111118',
          700: '#191924',
          600: '#232332',
        },
        crimson: {
          DEFAULT: '#e50914',
          glow: '#ff1f2d',
          dark: '#8b0008',
          subtle: 'rgba(229, 9, 20, 0.12)',
          accent: '#ff3b47',
        },
        silver: {
          light: '#f5f5f7',
          DEFAULT: '#d1d1d6',
          muted: '#8e8e93',
          dark: '#48484a',
        }
      },
      fontFamily: {
        sans: ['Space Grotesk', 'Syne', 'Inter', '-apple-system', 'sans-serif'],
        display: ['Syne', 'Space Grotesk', 'Cabinet Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      backgroundImage: {
        'radial-vignette': 'radial-gradient(circle at 50% 50%, rgba(229, 9, 20, 0.08) 0%, transparent 70%)',
        'cinematic-gradient': 'linear-gradient(180deg, rgba(7,7,10,0) 0%, rgba(7,7,10,0.8) 100%)',
      }
    },
  },
  plugins: [],
}
