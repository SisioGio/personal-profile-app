/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#07090D",
        surface: "#0D1117",
        ink: "#EAF0F7",
        muted: "#8B97A8",
        line: "#1C2430",
        accent: "#C6F432",
        "accent-dark": "#A3D11A",
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', "Inter", "sans-serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};
