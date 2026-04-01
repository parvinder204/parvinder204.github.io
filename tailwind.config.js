/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'bg-primary':  '#faf9f6',
        'bg-secondary':'#f3efe6',
        'bg-card':     '#ffffff',
        'bg-accent':   '#fdf8ee',
        'ink':         '#1a1208',
        'ink-light':   '#ffffff',
        'ink-muted':   '#f3efe6',
        'paper':       '#1a1208',
        'paper-warm':  '#3d2e0e',
        'warm-gold':   '#b8860b',
        'warm-amber':  '#c0622a',
        'warm-rust':   '#9c3a1a',
        'warm-cream':  '#fdf8ee',
        'warm-sand':   '#e8dcc8',
        'accent':      '#b8860b',
        'accent-light':'#d4a017',
        'muted':       '#6b5e45',
        'muted-light': '#3d2e0e',
      },
      fontFamily: {
        'display': ['"Playfair Display"','Georgia','serif'],
        'mono':    ['"JetBrains Mono"','monospace'],
        'sans':    ['"DM Sans"','system-ui','sans-serif'],
      },
      animation: {
        'float':      'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'marquee':    'marquee 25s linear infinite',
      },
      keyframes: {
        float:   { '0%,100%':{ transform:'translateY(0)' }, '50%':{ transform:'translateY(-12px)' } },
        marquee: { '0%':{ transform:'translateX(0%)' }, '100%':{ transform:'translateX(-50%)' } },
      },
    },
  },
  plugins: [],
}