/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "athena-black": "#0a0a0a",
        "athena-gold": "#d4af37",
        "athena-rose": "#ffb6c1",
        "athena-blue": "#1a1e2e",
      },
    },
  },
  plugins: [],
};
