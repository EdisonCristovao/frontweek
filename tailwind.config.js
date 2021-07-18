module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#0D0D2B",

          redNomral: "#C33333",
          redLight: "#CD4242",
          redBlack: "#AD2A2A",

          whiteNormal: "#FFF",
          whiteLight: "#EEF0F0",
          whiteBlack: "#E6E8E8",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
