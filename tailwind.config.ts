import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        nav: "0px 4px 40px 0px rgba(0, 0, 0, 0.05)",
      },
      colors: {
        primaryBlue: "#2693fa",
        app: {
          orange: "#fa7226",
        },
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        "3xl": "1600px",
      },
    },
  },
  plugins: [require("tailgrids/plugin")],
};
export default config;
