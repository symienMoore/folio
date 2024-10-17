/** @type {import("tailwindcss").Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "regal-blue": "#13A3F4",
      "purple": "#B20BFF",
      "white": "#FFFFFF",
      "black": "#000000",
      "gray": "#7D7D7D"
    },
    extend: {
      fontFamily: {
        "bhs": ["Black Han Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
}
