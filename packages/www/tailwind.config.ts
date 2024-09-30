import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ["var(--font-space-mono)"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      textColor: {
        link: "var(--link)",
        secondary: "var(--secondary-text)",
      },
      borderColor: {
        DEFAULT: "var(--border-color)",
      },
    },
  },
  plugins: [],
};
export default config;
