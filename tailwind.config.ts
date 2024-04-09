import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/components/ui/**/*.{ts, tsx}",
  ],
  theme: {
    screens: {
      mobile: "400px",
      tablet: "640px",
      laptop: "1024px",
      desktop: "1280px",
    },
    fontFamily: {
      sans: ["ui-sans-serif", "system-ui"],
      serif: ["ui-serif", "Georgia"],
      mono: ["monospace", "SFMono-Regular"],
      poppins: ["Poppins", "sans-serif"],
      inter: ["Inter", "sans-serif"],
      ubuntu: ["Ubuntu", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
export default config;
