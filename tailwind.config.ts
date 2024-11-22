import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      /* Put custom values / themes / classes here */
      fontFamily: {
        sans: ["var(--font-inter)", ...fontFamily.sans],
        cabinSketch: ["var(--font-cabin-sketch)"],
      },
      backgroundImage: {
        'paper': "url('/paper-textured-background.jpg')",
        'cloud': "url('/cloud2.png')",
      },
      fontSize: {
        biggerrr: ['10rem', { lineHeight: '1' }],
      },
      letterSpacing: {
        widerrr: '2rem',
      },
    },
  },
  plugins: [],
};
export default config;
