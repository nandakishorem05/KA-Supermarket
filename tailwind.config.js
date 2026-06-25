/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'ka-charcoal': '#141619',
      'ka-white': '#FFFFFF',
      'ka-brown-mid': '#7B6F66',
      'ka-brown-dark': '#4C3B30',
      'ka-navy': '#1B2A3A',
      'ka-warm-gray': '#D8D2C4',
      'ka-warm-gray-light': '#EDE9E1',
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      black: '#000000',
    },
    fontFamily: {
      display: ['Playfair Display', 'Georgia', 'serif'],
      sans: ['Inter', 'system-ui', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
};
