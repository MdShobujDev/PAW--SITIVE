import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        EBGaramond: ["var(--font-EB-Garamond)"],
      },
      colors: {
        primary: "#EDD2C1",
        secondary: "#FDECE4",
      },
    },
  },
  plugins: [],
} satisfies Config;
