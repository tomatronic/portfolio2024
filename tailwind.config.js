/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
  theme: {
    fontSize: {
      sm: '0.833rem',
      base: '1.125rem',
      xl: '1.44rem',
      '2xl': '1.728rem',
      '3xl': '2.074rem',
      '4xl': '2.488rem',
      '5xl': '2.986rem',
      '6xl': '4.976rem'
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
