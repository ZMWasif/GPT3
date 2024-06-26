/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  themes: [
    {
      mytheme: {
        primary: "#a991f7",
        secondary: "#f6d860",
        accent: "#37cdbe",
        neutral: "#3d4451",
        "base-100": "#ffffff",
      },
    },
    "dark",
    "cupcake",
  ],
  plugins: [require("daisyui")],
};
