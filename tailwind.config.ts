import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#080C18",
          2: "#0D1A32",
          3: "#162544",
          4: "#1B2F52",
        },
        brand: {
          blue:     "#2F6BFF",
          "blue-h": "#2456D3",
          icy:      "#A9D6FF",
        },
      },
      fontFamily: {
        sans: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      fontSize: {
        "display-xl": ["clamp(3rem,7vw,5.5rem)", { lineHeight: "1.0", letterSpacing: "-0.03em" }],
        "display-lg": ["clamp(2rem,4vw,3rem)",   { lineHeight: "1.12", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(1.5rem,3vw,2rem)",  { lineHeight: "1.2",  letterSpacing: "-0.015em" }],
        "body-lg":    ["1.0625rem",               { lineHeight: "1.75" }],
        "body-md":    ["0.9375rem",               { lineHeight: "1.7"  }],
        "body-sm":    ["0.8125rem",               { lineHeight: "1.65" }],
        "label":      ["0.6875rem",               { lineHeight: "1.4", letterSpacing: "0.2em" }],
      },
      animation: {
        "pulse-dot":   "pulse-dot 2s ease-in-out infinite",
        "glow-breathe":"glow-breathe 4s ease-in-out infinite",
        "float-y":     "float-y 4s ease-in-out infinite",
        "shimmer":     "shimmer-slide 3.5s linear infinite",
        "marquee-fwd": "marquee-fwd 32s linear infinite",
        "skills-mq":   "skills-marquee 40s linear infinite",
        "testi-fwd":   "testi-forward 45s linear infinite",
        "testi-rev":   "testi-reverse 38s linear infinite",
      },
      transitionTimingFunction: {
        "spring": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      transitionDuration: {
        "250": "250ms",
        "350": "350ms",
        "400": "400ms",
      },
      backdropBlur: {
        xl: "20px",
        "2xl": "32px",
      },
    },
  },
  plugins: [],
};
export default config;
