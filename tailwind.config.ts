import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        coffee: { DEFAULT: '#3B1F0A', light: '#5C3A1E', dark: '#2A1507' },
        cream: { DEFAULT: '#FDF6EE', dark: '#F5E6D0' },
        terracotta: { DEFAULT: '#C4622D', light: '#D4784A', dark: '#A04E22' },
        warm: { 50: '#FDF6EE', 100: '#F5E6D0', 200: '#ECDCC8', 300: '#D4C4A8', 400: '#B5A088', 500: '#8C7B6B', 600: '#6B5D4F', 700: '#4A3F35', 800: '#3B1F0A', 900: '#2A1507' },
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
