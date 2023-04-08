/** @type {import('tailwindcss').Config} */
export default {
    mode: 'jit',
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        fontFamily: {
            "sans-serif": "Open Sans",
        },
        colors: {
            "black": {
                DEFAULT: "#000",
                light: "#343434"
            },
            "red": "#E20008",
            "gray": {
                DEFAULT: "#B4B4B4",
                light: "#f9f9f9",
            },
            "blue": {
                DEFAULT: "#1840A7",
                light: "#EAF0FF",
            },
            "white": "#FFF",
            "sky": "#EAF0FF",
            "green": "#279825"
        }
    },
    safelist: [
        {
            pattern: /border-(red|gray)/
        }
    ],
    plugins: [],
}

