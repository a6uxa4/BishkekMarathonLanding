import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layout/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        customRed: "#DE0A36",
        customGreen: "#E9FF00",
        customBlack: "#131313",
        customWhite: "#FEFFFA",
      },
    },
  },
  plugins: [],
};
export default config;
