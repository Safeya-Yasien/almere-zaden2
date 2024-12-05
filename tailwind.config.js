/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "sunset-orange": "#fba43d",
        "custom-green": "#324700",
      },
      container: {
        center: true,
        padding: "2rem",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        philosopher: ["Philosopher", "sans-serif"],
      },
    },
  },
  plugins: [],
};
