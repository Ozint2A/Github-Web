/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  plugins: [require("daisyui")],
  theme: {
    daisyui: {
      themes: ["light", "dark", "cyberpunk", "aqua"],
      extend: {},
    },
  },
};
