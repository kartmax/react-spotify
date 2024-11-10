/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./public/**/*.html",
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        screens: {
            'sm': '500px',
            'md': '900px',
            'lg': '1100px',
            'xl': '1400px',
            '2xl': '1600px',
            '3xl': '1800px',
            '4xl': '2000px',
            '5xl': '2200px'
        },
    },
    plugins: [],
}

