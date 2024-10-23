import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        sm: "48rem", // 768px
        md: "64rem", // 1024px
        lg: "76rem", // 1216px
      },
    },
    screens: {
      sm: "48em", // 768px
      md: "64em", // 1024px
      lg: "75em", // 1200px
    },
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // ... остальные цвета ...
      },
      spacing: {
        "1/12": "8.333333%",
        "1/6": "16.666667%",
        "1/4": "25%",
        "1/3": "33.333333%",
        "5/12": "41.666667%",
        "1/2": "50%",
        "7/12": "58.333333%",
        "2/3": "66.666667%",
        "3/4": "75%",
        "5/6": "83.333333%",
        "11/12": "91.666667%",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      gridColumn: {
        "span-1": "span 1 / span 1",
        "span-2": "span 2 / span 2",
        "span-3": "span 3 / span 3",
        "span-4": "span 4 / span 4",
        "span-5": "span 5 / span 5",
        "span-6": "span 6 / span 6",
        "span-7": "span 7 / span 7",
        "span-8": "span 8 / span 8",
        "span-9": "span 9 / span 9",
        "span-10": "span 10 / span 10",
        "span-11": "span 11 / span 11",
        "span-12": "span 12 / span 12",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
