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
        primary: '#6C63FF',
        secondary: '#00D9FF',
        accent: '#FF6584',
        dark: {
          100: '#1A1A2E',
          200: '#16213E',
          300: '#0F3460',
          400: '#0A0A1A',
          500: '#050508',
        },
        light: {
          100: '#F8F9FF',
          200: '#EEF0FF',
          300: '#E0E3FF',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
        'gradient-y': 'gradient-y 15s ease infinite',
        'gradient-xy': 'gradient-xy 15s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-delay': 'float 6s ease-in-out 2s infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'bounce-slow': 'bounce 3s infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'blob': 'blob 7s infinite',
        'cursor-blink': 'cursor-blink 1s step-end infinite',
        'slide-up': 'slide-up 0.6s ease-out',
        'fade-in': 'fade-in 1s ease-out',
        'scan-line': 'scan-line 3s linear infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': { backgroundSize: '200% 200%', backgroundPosition: 'left center' },
          '50%': { backgroundSize: '200% 200%', backgroundPosition: 'right center' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.7', transform: 'scale(1.05)' },
        },
        'shimmer': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'blob': {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        'cursor-blink': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scan-line': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'grid-pattern': 'linear-gradient(rgba(108, 99, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(108, 99, 255, 0.05) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid': '50px 50px',
      },
      backdropBlur: {
        'xs': '2px',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(108, 99, 255, 0.3)',
        'glow-lg': '0 0 40px rgba(108, 99, 255, 0.4)',
        'glow-cyan': '0 0 20px rgba(0, 217, 255, 0.3)',
        'inner-glow': 'inset 0 0 20px rgba(108, 99, 255, 0.1)',
        'card': '0 8px 32px rgba(0, 0, 0, 0.3)',
        'card-hover': '0 20px 60px rgba(108, 99, 255, 0.2)',
      }
    },
  },
  plugins: [],
}
