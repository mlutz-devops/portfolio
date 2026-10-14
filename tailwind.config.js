/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ["Akatab"],
      title: ["Fugaz One"],
      subtitle: ["belanosima"],
    },
    extend: {
      animation: {
        cursor: "cursor 1s ease infinite",
      },
      keyframes: {
        cursor: {
          "0%, 100%": { opacity: "0" },
          "50%": { opacity: "1" },
        },
      },
      colors: {
        main: "#242424",
      },
    },
  },
  plugins: [],
};
