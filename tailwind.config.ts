import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        vidhaan: {
          obsidian: "#121212",      // Deep Obsidian
          surface: "#1A1A1A",       // Elevated Cards
          border: "#2A2A2A",        // Subtle Separators
          ivory: "#F9F9F8",         // Ivory White (Primary Text)
          gold: "#D4AF37",          // Royal Gold (Accents)
          goldMuted: "#D4AF3740",   // Royal Gold Faded (Hover states)
          muted: "#8A8C90",         // Secondary Text
        },
      },
      fontFamily: {
        heading: ["var(--font-cinzel)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
