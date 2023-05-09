/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        Kumbh: ["Kumbh Sans", "sans-serif"],
      },
      textColor: {
        SoftRed: "hsl(14, 88%, 65%)",
        DarkBlue: "hsl(238, 29%, 16%)",
      },
      colors: {
        SoftViolet: "hsl(273, 75%, 66%)",
        SoftBlue: "hsl(240, 73%, 65%)",
      },
    },
  },
  plugins: [],
};
