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
          DEFAULT: "#D4879C",
          light: "#E5A9B8",
          dark: "#B8697E",
          50: "#FCF5F7",
          100: "#F8E8ED",
          200: "#F0D1DC",
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
        "display-hero": [
          "5.5rem",
          { lineHeight: "1.0", fontWeight: "500", letterSpacing: "-0.02em" },
        ],
        "display-xl": [
          "4.5rem",
          { lineHeight: "1.05", fontWeight: "500", letterSpacing: "-0.02em" },
        ],
        "display-lg": [
          "3.75rem",
          { lineHeight: "1.1", fontWeight: "500", letterSpacing: "-0.01em" },
        ],
        "display-md": [
          "3rem",
          { lineHeight: "1.15", fontWeight: "500", letterSpacing: "-0.01em" },
        ],
        h1: ["2.25rem", { lineHeight: "1.2", fontWeight: "500" }],
        h2: ["1.875rem", { lineHeight: "1.3", fontWeight: "500" }],
        h3: ["1.5rem", { lineHeight: "1.4", fontWeight: "500" }],
        "body-lg": ["1.125rem", { lineHeight: "1.75" }],
        "body-md": ["1rem", { lineHeight: "1.75" }],
        "body-sm": ["0.875rem", { lineHeight: "1.6" }],
        "body-xs": ["0.75rem", { lineHeight: "1.5" }],
      },
      letterSpacing: {
        "extra-wide": "0.15em",
        "luxury": "0.25em",
      },
      boxShadow: {
        sm: "0 1px 3px 0 rgb(0 0 0 / 0.04)",
        md: "0 4px 12px -2px rgb(0 0 0 / 0.06)",
        lg: "0 12px 24px -4px rgb(0 0 0 / 0.07)",
        xl: "0 24px 48px -8px rgb(0 0 0 / 0.08)",
        glow: "0 0 40px rgba(212, 135, 156, 0.15)",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-up": {
          "0%": { transform: "translateY(24px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "scale-in": {
          "0%": { transform: "scale(0.96)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.8s ease-out forwards",
        "slide-up": "slide-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "scale-in": "scale-in 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
