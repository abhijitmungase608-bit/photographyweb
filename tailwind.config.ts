import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          cream: "#fdfbf7",        // Background color
          dark: "#3a2a1a",         // Dark brown text
          brown: "#8b5a2b",        // Borders & Accents
          gold: "#a67c00",         // Highlights
        },
      },
    },
  },
  plugins: [],
};
export default config;