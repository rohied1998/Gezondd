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
                ika: "url('/ikaned-header.png')",
                ikadark: "url('/ikaned-dark.png')",
                werkgever: "url('/werkgever.png')",
                werkgeverdark: "url('/werkgever-dark.png')",
                werknemer: "url('/werknemer.png')",
                werknemerdark: "url('/werknemer-dark.png')",
                bedrijfsarts: "url('/bedrijfs-arts-op-maat.png')",
                bedrijfsartsdark: "url('/bedrijfs-arts-op-maat-dark.png')",
                zelfstandige: "url('/zelfstandige.png')",
                zelfstandigedark: "url('/zelfstandige-dark.png')",
                casemanager: "url('/casemanager.png')",
                casemanagerdark: "url('/casemanager-dark.png')",

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
