import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2196F3",
        darkBlue: "#0F1924",
        darkGrey: "#606163",
        lightGrey: "#EFF3F8",
      },
    },
  },
  plugins: [],
};
export default config;
