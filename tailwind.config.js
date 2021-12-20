const plugin = require("tailwindcss/plugin")

module.exports = {
    content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
    darkMode: "media", // or false or 'class'
    theme: {
        fontFamily: {
            sans: "'Outfit', sans-serif",
            body: "'Outfit', sans-serif",
            heading: "'Outfit', sans-serif",
        },
        fontSize: {
            sm: ["16px", "20.16px"],
            base: ["18px", "26px"],
            lg: ["22px", "27.72px"],
        },
        extend: {
            colors: {
                "soft-blue": "#8BACD9",
                cyan: "#00FFF8",
            },
            backgroundColor: {
                main: "#0D192C",
                card: "#15263F",
                cyan: "#00FFF8",
            },
            borderColor: {
                line: "#2E405A",
            },
            backgroundImage: (theme) => ({
                "card-header": "url('/images/image-equilibrium.jpg')",
            }),
        },
    },
    variants: {
        extend: {},
    },
    corePlugins: {
        container: false,
    },
    plugins: [
        plugin(function ({ addUtilities }) {
            addUtilities(
                {
                    ".optimize-legibility": {
                        "text-rendering": "optimizeLegibility",
                    },
                },
                ["responsive", "hover"]
            )
        }),
    ],
}
