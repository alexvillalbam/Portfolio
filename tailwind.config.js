/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: '#0F766E',
        'brand-hover': '#115E59',
        'brand-dark': '#0F172A',
        'brand-dark-hover': '#1E293B',
        'brand-light': '#CCFBF1',
        surface: '#FAFAF7',
        'surface-alt': '#F1F5F2',
        'surface-raised': '#FFFFFF',
        'text-main': '#111827',
        'text-muted': '#52606D',
        'text-on-dark': '#F8FAFC',
        'text-muted-on-dark': '#CBD5E1',
        'border-subtle': '#D7E0DC',
        'border-strong': '#A7B4AE',
        'border-on-dark': '#475569',
      },
      fontFamily: {
        sans: ['Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft:
          '0 1px 2px rgb(15 23 42 / 0.04), 0 1px 3px rgb(15 23 42 / 0.06)',
        lifted:
          '0 18px 45px -24px rgb(15 23 42 / 0.35), 0 8px 18px -12px rgb(15 23 42 / 0.14)',
      },
    },
  },
  plugins: [],
};
