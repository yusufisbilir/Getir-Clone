module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        0.1: "1px",
      },
      backgroundImage: (theme) => ({
        "mobile-app":
          "url('https://getir.com/_next/static/images/doodle-d659f9f1fd505c811c2331fe3ffddd5f.png')",
      }),
      colors: {
        "brand-color": "#4c3398",
        "primary-brand-color": "#5d3ebc",
        "secondary-brand-color": "#78497f",
        "brand-yellow": "#ffd300",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
