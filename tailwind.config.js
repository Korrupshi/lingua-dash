/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#14cb42",
          hover: "#3fec6b",
        },
        gradient: "#156A2A",
        secondary: "#f3ea78",
        background: "#0f141a",
        surface: "#1e2736",
        textPrimary: "#efeff1",
        textSecondary: "#c8c8c8",
        textTertiary: "#98979d",
      },
    },
  },
  plugins: [],
};
