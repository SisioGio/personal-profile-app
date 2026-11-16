/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#0A0F1A",
        surface: "#0F1626",
        ink: "#F1F5F9",
        muted: "#94A3B8",
        line: "#1E2A3F",
        accent: "#F5A524",
        "accent-dark": "#D98E12",
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
