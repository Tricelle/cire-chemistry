import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        cream: {
          DEFAULT: "#F5F0E6",
          50: "#FAF8F4",
          100: "#F5F0E6",
          200: "#EDE6DA",
        },
        charcoal: {
          DEFAULT: "#3E2723",
          light: "#5C4A44",
          dark: "#2A1B17",
        },
        rose: {
          DEFAULT: "#C4929B",
          light: "#D4A9B0",
          dark: "#A8767F",
          50: "#F9F5F6",
          100: "#F2EAEC",
          200: "#E5D5D8",
        },
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        muted: {
          DEFAULT: "#EDE6DA",
          foreground: "#7A6D65",
        },
      },
      borderRadius: {
        button: "8px",
      },
      fontFamily: {
        serif: [
          "var(--font-cormorant)",
          "Cormorant Garamond",
          "Georgia",
          "serif",
        ],
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-lg": [
          "4rem",
          { lineHeight: "1.1", fontWeight: "500" },
        ],
        "display-md": [
          "3rem",
          { lineHeight: "1.2", fontWeight: "500" },
        ],
        h1: ["2.25rem", { lineHeight: "1.3", fontWeight: "500" }],
        h2: ["1.875rem", { lineHeight: "1.4", fontWeight: "500" }],
        "body-lg": ["1.125rem", { lineHeight: "1.75" }],
        "body-md": ["1rem", { lineHeight: "1.75" }],
      },
      spacing: {
        'section': '7.5rem',  // 120px
        'section-sm': '5rem', // 80px
        'card': '3rem',       // 48px
        'element': '2rem',    // 32px
      },
      lineHeight: {
        "tight-editorial": "0.85",
      },
      letterSpacing: {
        "extra-wide": "0.15em",
        "luxury": "0.25em",
      },
      boxShadow: {
        sm: "0 1px 3px 0 rgb(0 0 0 / 0.04)",
        md: "0 4px 12px -2px rgb(0 0 0 / 0.06)",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
