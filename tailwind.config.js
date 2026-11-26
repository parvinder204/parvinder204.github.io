/** @type {import('tailwindcss').Config} */
const v = (name) => `rgb(var(${name}) / <alpha-value>)`

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts}'],
  theme: {
    extend: {
      colors: {
        // Raw brand palette
        floral:   '#fffcf2',
        silver:   '#ccc5b9',
        charcoal: '#403d39',
        carbon:   '#252422',
        paprika:  '#eb5e28',
        // Theme-aware tokens (switch with [data-theme])
        base:   v('--c-base'),
        alt:    v('--c-alt'),
        fg:     v('--c-fg'),
        muted:  v('--c-muted'),
        line:   v('--c-line'),
        accent: v('--c-accent'),
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        sans:    ['"DM Sans"', 'system-ui', 'sans-serif'],
        mono:    ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      animation: {
        float:   'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        marquee: 'marquee 40s linear infinite',
        blob:    'blob 18s ease-in-out infinite',
        'fade-up': 'fadeUp .5s ease both',
      },
      keyframes: {
        float:   { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-12px)' } },
        marquee: { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } },
        blob:    { '0%,100%': { transform: 'translate(0,0) scale(1)' }, '50%': { transform: 'translate(40px,-30px) scale(1.12)' } },
        fadeUp:  { from: { opacity: 0, transform: 'translateY(8px)' }, to: { opacity: 1, transform: 'none' } },
      },
    },
  },
  plugins: [],
}
