/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      keyframes: {
        moveleft: {
          "0%": {
            transform: "translateX(120%)",
          },
          "100%": {
            transform: "translateX(0)",
          },
        },
      },
      animation: {
        "appear-left": "moveleft 0.3s",
      },
      translate: {
        120: "120%",
      },
    },
  },
  plugins: [],
};
