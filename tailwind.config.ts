import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/stories/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#761735",
        secondary: "#F7F7F7",
        "primary-light": "#A52A58",
        backdrop: "#5F0F2D", // Modified backdrop color
      },
    },
  },
  plugins: [],
};
export default config;
