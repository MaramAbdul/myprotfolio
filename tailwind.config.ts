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
        primary: '#2E86AB',  
        secondary: '#FF6B6B',  
        accent: '#FFE66D',   
        background: '#F7FFF7', 
        text: '#1A535C',       
        highlight: '#4ECDC4',  
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Poppins", "sans-serif"]
      },
    },
  },
  plugins: [],
} satisfies Config;

