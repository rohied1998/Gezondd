module.exports = {
    mode: "jit",
    purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                sans: ["Varela\\ Round", "sans-serif"],
            },
            backgroundImage: (theme) => ({
                home: "url('/home.png')",
                doktor: "url('/doktor.png')",
                teddy: "url('/teddy.png')",
                ika: "url('/ika.png')",
            }),
            colors: {
                "green-pastel": "#82C074",
                "green-light": "#D5E9CF",
                "blue-aqua": "#83CDE0",
                "gray-light": "#FBFBFB",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
