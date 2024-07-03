/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        tp: "transparent",
        primary: "#41FF8E",
      },
      height: {
        "h-container": "calc(100lvh-4rem)",
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
    },
  },
  plugins: [],
};
