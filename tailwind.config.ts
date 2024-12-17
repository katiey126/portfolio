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
      fontFamily: {
        sans: ["var(--font-inter)", ...fontFamily.sans],
        coloredCrayons: ['ColoredCrayons', 'sans-serif'],
        crayonWorks: ['CrayonWorks', 'sans-serif'],
      },
      backgroundImage: {
        'paper': "url('/paper-textured-background.jpg')",
        'cloud': "url('/cloud2.png')",
        'bubble': "url('/crayon-speech-bubble.png')",
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
