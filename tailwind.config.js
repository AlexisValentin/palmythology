const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  safelist: [
    {
      pattern:
        /(bg|from|text|to)-(amber|blue|cyan|emerald|indigo|lime|neutral|orange|pink|red|sky|violet)-(100|300|500|600|700|800|900)/,
      variants: ["lg:hover"],
    },
  ],
  theme: {
    extend: {
      colors: {
        amber: colors.amber,
        black: colors.black,
        blue: colors.blue,
        cyan: colors.cyan,
        emerald: colors.emerald,
        indigo: colors.indigo,
        lime: colors.lime,
        neutral: colors.neutral,
        orange: colors.orange,
        pink: colors.pink,
        red: colors.red,
        sky: colors.sky,
        violet: colors.violet,
      },
    },
  },
};
