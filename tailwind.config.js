/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "active-cell-bg": "#c0c0c0",
        "dead-cell-bg": "#222222",
        "bring-to-life-cell-bg": "#00ff00",
        "survive-cell-bg": "#00ff00",
        "grid-bg": "#000",
      },
    },
  },
  plugins: [],
};
