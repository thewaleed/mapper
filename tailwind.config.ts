import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ED7202",    // البرتقالي
        secondary: "#FFCB2D",  // الأصفر الفاتح
        accent: "#ED9602",     // البرتقالي الذهبي
        warning: "#ED4902",    // البرتقالي الداكن
        highlight: "#EDCF02",  // الأصفر
        muted: "#EDB351",      // البيج
      },
    },
  },
  plugins: [],
} satisfies Config;
