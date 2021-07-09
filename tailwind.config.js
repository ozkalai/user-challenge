module.exports = {
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        main: "#f3f2ee",
        secondary: "#0a66c2",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
