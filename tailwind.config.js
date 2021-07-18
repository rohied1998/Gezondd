module.exports = {
    mode: "jit",
    purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            varela: ["Varela", "sans-serif"],
        },
        extend: {
            backgroundImage: (theme) => ({
                home: "url('/home.png')",
            }),
            colors: {
                "green-pastel": "#82C074",
                "green-light": "#D5E9CF",
                "blue-aqua": "#83CDE0",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
