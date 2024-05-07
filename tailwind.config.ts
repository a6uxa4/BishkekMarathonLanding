import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layout/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/screens/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
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
        ending: "url('/images/Ending.webp')",
        finish: "url('/images/Finish.webp')",
      },
    },
  },
  plugins: [nextui()],
};
export default config;
