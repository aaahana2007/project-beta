module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        first: "#000EAA",
        second: "#7CE9FC",
        third: "#AFFEFC",
        fourth: "#00096A",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
