import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "#05070D",
        surface: "#0A0E18",
        "surface-2": "#0F1524",
        "surface-3": "#141B2E",
        line: "#1D2740",
        "line-soft": "#151C2E",
        ink: "#F3F5FA",
        muted: "#8A93AA",
        "muted-2": "#7C86A1",
        chain: {
          blue: "#2E6BFF",
          cyan: "#22D3EE",
          violet: "#7C5CFF",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "grid-tech":
          "linear-gradient(rgba(46,107,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(46,107,255,0.06) 1px, transparent 1px)",
      },
      boxShadow: {
        glow: "0 0 40px rgba(46,107,255,0.25)",
      },
      animation: {
        "pulse-slow": "pulse-slow 4s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
        marquee: "marquee 30s linear infinite",
      },
      keyframes: {
        "pulse-slow": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
