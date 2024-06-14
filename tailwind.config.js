/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgDark100: "#272343",
        bgDark70: "#413c73",
        bgDark50: "#4e448f",
        text100: "#f1f3fc",
        text70: "#e5e9fa",
        text50: "#d1d6f4",
        lavender100: "#807cd8",
        lavender70: "#9698e3",
        lavender50: "#b4baed",
        purple100: "#6d62c9",
        purple70: "#5b4ead",
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
};
