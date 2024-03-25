/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        chemBG: "url(./bgs/chem-bg.JPG)",
        getStartedBG: "url(./bgs/mitech-processing-contact-bg.webp)",
      },
      colors: {
        customBlue: "#1163ea",
        customGreen: "rgb(24, 165, 121)",
        customGrayText: "#2f4264",
      },
      fontFamily: {
        nunito: ['"Nunito Sans Variable"', "sans-serif"],
      },
      boxShadow: {
        chatShadow: "2px 2px 3px 0px rgba(153, 153, 153, 1)",
      },
      animation: {
        fade: "fadeOut 5s ease-in-out",
      },
      keyframes: {
        fadeOut: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
