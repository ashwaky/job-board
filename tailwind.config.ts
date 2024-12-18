import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container:{
      screens: {
        'lg': '1024px',
        'xl': '1024px',
        '2xl': '1080px',
      },
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      center : true, 
      padding: {
        DEFAULT: '1.5rem',
      }
    },
  },
  plugins: [],
} satisfies Config;
