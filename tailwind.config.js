/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      display: ["Sora"],
      body: ['"Noto Sans"',],
    },
    extend: {
      colors: {
        bgDark100: "#272343",
        bgDark70: "#413C73",
        bgDark50: "#4E448F",
        text100: "#F1F3FC",
        text70: "#E5E9FA",
        text50: "#D1D6F4",
        lavender70: "#B4BAED",
        tabContainer: "#1F1C33",
        productDark: "#131121",
        canvas: "#19181f",
        cardColor: "#5B4EAD",
        dark: "#120F1A",
        deepPurple: "#12131C",
      },
      backgroundImage: {
        buttonGradient:
          "linear-gradient(90deg, rgba(77,63,176,0.95) 0%, rgba(112,99,203,0.85) 100%)",
        heroGradient:
          "linear-gradient(calc(atan2(1080, 1920) + 0deg), #1C2336 5%, #12131C 35%, #12131C 50%, #35185C 100% )",
        heroContGradient:
          "linear-gradient(calc(atan2(1080, -1920) + 0deg), #1C2336 5%, #12131C 35%)",
        aboutUsGradient: "linear-gradient(180deg, #12131C 0%, #120F1A 100%)",
        moreAboutUsGradient:
          "linear-gradient(calc(atan2(1080, 1920) + 0deg), #1C2336 5%, #12131C 35%, #12131C 50%, #35185C 100% )",
        moreAboutUsContGradient:
          "linear-gradient(calc(atan2(1080, -1920) + 0deg), #1C2336 5%, #12131C 35%, #12131C 50%, #35185C 100% )",
        cardGradient:
          "linear-gradient(180deg, rgba(79, 70, 138, .15) 0%, rgba(132, 125, 176, .15) 100%)",
        faqGradient:
          "linear-gradient(160deg, #120F1A 40%, #120F1A 55%, #3F3776 95%)",
        ctaGradient:
          "linear-gradient(20deg, #120F1A 40%, #120F1A 55%, #3F3776 95%)",
      },
      boxShadow: {
        cardGlowEffect:
          "inset 3px 3px 12px 0 rgb(255 255 255 / 0.12), inset -3px -3px 12px 0 rgb(255 255 255 / 0.12)",
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
