import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
   colors: {
        // Semantic color names
        primary: '#2E86AB',    // Blue (Main brand color)
        secondary: '#FF6B6B',  // Coral (Secondary brand color)
        accent: '#FFE66D',     // Yellow (Accent color)
        background: '#F7FFF7', // Off-White (Background color)
        text: '#1A535C',       // Dark Teal (Text color)
        highlight: '#4ECDC4',  // Turquoise (Highlight color)
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Poppins", "sans-serif"]
      },
    },
  },
  plugins: [],
} satisfies Config;

