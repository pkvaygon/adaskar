import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  prefix: "",
  theme: {
    extend: {},
  },
  plugins: [
    require("tailwindcss-animate"),
    nextui({
      themes: {
        light: {
          extend: "light",
          layout: {},
          colors: {
            background: "#E8FAF0",
            foreground: "#000000",
          },
        },
        dark: {
          extend: "dark",
          layout: {
            hoverOpacity: 0.9,
          },
          colors: {
            background: "#18181B",
            foreground: "#FFFFFF",
            focus: "#000000",
          },
        },
      },
    }),
  ],
} satisfies Config;

export default config;
