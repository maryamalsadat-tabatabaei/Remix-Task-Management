import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color-10": "var(--color-primary-10)",
        "primary-color-50": "var(--color-primary-50)",
        "primary-color-100": "var(--color-primary-100)",
        "primary-color-200": "var(--color-primary-200)",
        "primary-color-300": "var(--color-primary-300)",
        "primary-color-400": "var(--color-primary-400)",
        "primary-color-500": "var(--color-primary-500)",
        "primary-color-600": "var(--color-primary-600)",
        "primary-color-700": "var(--color-primary-700)",
        "primary-color-800": "var(--color-primary-800)",
        "secondary-color-50": "var(--color-secondary-50)",
        "secondary-color-100": "var(--color-secondary-100)",
        "secondary-color-200": "var(--color-secondary-200)",
        "secondary-color-300": "var(--color-secondary-300)",
        "secondary-color-400": "var(--color-secondary-400)",
        "secondary-color-500": "var(--color-secondary-500)",
        "secondary-color-600": "var(--color-secondary-600)",
      },
      fontFamily: {
        roboto: [
          "Segoe UI",
          "Roboto",
          "Oxygen",
          "Ubuntu",
          "Cantarell",
          "Fira Sans",
          "Droid Sans",
          "Helvetica Neue",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
} satisfies Config;
