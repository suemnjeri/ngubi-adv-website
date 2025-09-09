/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
import tailwindScrollbar from "tailwind-scrollbar";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // mono: ["var(--font-mono)", ...defaultTheme.fontFamily.mono],
        // Correctly apply Poppins to the body text
        sans: ["Poppins", "sans-serif"], 
        // Correctly apply Manrope to headings
        heading: ["Manrope", "sans-serif"], 
      },
      colors: {
        accent: "hsl(var(--accent-h) var(--accent-s) var(--accent-l))",
        "accent-dark": "var(--accent-dark)",
        "text-muted": "var(--text-muted)",
        "text-muted-dark": "var(--text-muted-dark)",
        "text-on-accent": "var(--text-on-accent)",
        background: "var(--background)",
        border: "var(--border)",
        divider: "var(--divider)",
        foreground: "var(--foreground)",
        surface: "var(--surface)",
      },
      transitionProperty: {
        height: "height",
      },
    },
  },
  plugins: [],
};