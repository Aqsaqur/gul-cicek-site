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
        lightPink: "#FFB6C1",
        darkPink: "rgb(199, 100, 166)",
        lightText: "#888888",
        accent: "#000000",
        accentWhite: "#FFFFFF",
        lightRed: "#EF3636",
        lightGreen: "#41CE09",
        bgLight: "#F5F5F5"
      },
    },
  },
  plugins: [],
} satisfies Config;
