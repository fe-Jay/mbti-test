/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
    // mode: "jit",
    theme: {
        extend: {
            colors: {
                tp: "transparent",
                primary: "#33D486",
            },
            spacing: {
                header: "64px",
                "max-width": "100%",
                gap: "16px",
            },
        },
    },
    plugins: [],
};
