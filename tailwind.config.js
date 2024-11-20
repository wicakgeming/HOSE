const {nextui} = require('@nextui-org/theme');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(table|checkbox|spacer).js"
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        accent:'#2f1121',
        dark: '#222831',
        gradient1: '#00020e',
        gradient2: '#2f0854',
        gradient3: '#010b3b',
        pashaungu: '#a14ae8',
        primary:  '#92c7cf',
        secondary: '#aad7d9',
        third:  '#fbf9f1',
        fourth: '#e5e1da',
      },
    },
  },
  plugins: [nextui()],
};
