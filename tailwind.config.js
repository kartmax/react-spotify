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

        extend: {
            boxShadow : {
                "3xl" : "0 16px 24px rgba(0, 0, 0, .3), 0 6px 8px rgba(0, 0, 0, .2)",
            } 
        },
    },

    plugins: [],
}

