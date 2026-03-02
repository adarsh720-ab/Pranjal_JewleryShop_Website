/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        pearl: '#FAFAF8',
        snow: '#F5F5F0',
        ivory: '#EDE8E0',
        warm: '#D4C9B8',
        stone: '#9A8F82',
        charcoal: '#2C2C2C',
        ink: '#1A1A1A',
        gold: '#C4A35A',
        'gold-light': '#D4B96A',
        'gold-dark': '#A8893E',
        blush: '#E8D5CC',
        sage: '#9BAE9A',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        heading: ['Cinzel', 'serif'],
        body: ['Raleway', 'sans-serif'],
      },
      boxShadow: {
        luxury: '0 4px 40px rgba(196, 163, 90, 0.12)',
        'luxury-lg': '0 8px 60px rgba(196, 163, 90, 0.18)',
        soft: '0 2px 20px rgba(0,0,0,0.06)',
        'soft-lg': '0 8px 40px rgba(0,0,0,0.10)',
      },
      animation: {
        shimmer: 'shimmer 2.5s linear infinite',
        float: 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 12s linear infinite',
        'fade-up': 'fadeUp 0.7s ease forwards',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        fadeUp: {
          from: { opacity: 0, transform: 'translateY(24px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
