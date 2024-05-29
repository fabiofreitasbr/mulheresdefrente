import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
                "banner": "url(/img/background-image.png)",
                "feature": "url(/img/img-banner.png)",
                "beneficios": "url(/img/background-beneficios.png)",
                "call": "url(/img/background-call.png)",
                "contato": "url(/img/background-contato.png)",
            },
            colors: {
                black: "#1E1B1B",
                purple: {
                    "500": "#AF1577",
                    "600": "#930E5F",
                    "700": "#540A33",
                },
                beige: {
                    "500": "#E5D0A8",
                    "600": "#D3AD74",
                    "700": "#BC8E64",
                },
            },
            fontFamily: {
                "playfair": "Playfair",
                "poppins": "Poppins"
            }
        },
    },
    plugins: [],
};
export default config;
