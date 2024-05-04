import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layout/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/screens/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        customRed: "#DE0A36",
        customGreen: "#E9FF00",
        customBlack: "#131313",
        customWhite: "#FEFFFA",
      },
      backgroundImage: {
        banner: "url('/images/Banner.webp')",
        about: "url('/images/About.webp')",
        conditions: "url('/images/Conditions.webp')",
        schedule: "url('/images/Schedule.webp')",
      },
    },
  },
  plugins: [],
};
export default config;
