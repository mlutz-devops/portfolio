/** @type {import('tailwindcss').Config} */
export default {
  content: ["../src/*.{html,js}", "./dist/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ["Akatab"],
      title: ["Fugaz One"],
      subtitle: ["belanosima"],
    },
    extend: {
      animation: {
        cursor: "cursor 1s ease infinite",
        shuffleLeft: "shuffleLeft 1s ease",
        shuffleRight: "shuffleRight 1s ease",
      },
      keyframes: {
        cursor: {
          "0%, 100%": { opacity: "0" },
          "50%": { opacity: "1" },
        },
        shuffleLeft: {
          "0%, 100%": {
            transform: "translate(0px,-50%)",
          },
          "50%": {
            transform: "translate(-300px, -50%)",
          },
        },
        shuffleRight: {
          "0%, 100%": {
            transform: "translate(0px,-50%)",
          },
          "50%": {
            transform: "translate(300px, -50%)",
          },
        },
      },
      colors: {
        main: "#242424",
      },
    },
  },
  plugins: [],
};
