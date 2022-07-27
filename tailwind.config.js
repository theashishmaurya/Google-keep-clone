/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      gridTemplateColumns: {
        fluid: "repeat(auto-fit, minmax(24rem, 1fr))",
      },
    },
  },
  plugins: [require("daisyui")],
  content: ["./src/**/*.{js,jsx,ts,tsx,html}", "./public/index.html"],
};
