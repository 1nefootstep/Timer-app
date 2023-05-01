module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "media",
  theme: {
    extend: {
      gridColumn: {
        "span-full": "1 / -1",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
