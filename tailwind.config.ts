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
        "secondary-dark": "#35424a",
        "secondary-light": "#ECC4C3",
        backdrop: "#5F0F2D",
        light: "#F2F2F2",
        "off-white": "#FFFFFF",
      },
      textColor: {
        primary: "#333333",
        soft: "#4a4a4a",
      },
      backgroundColor: {
        light: "#F2F2F2",
        white: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
export default config;
