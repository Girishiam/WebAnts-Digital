import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                "deep-void": "#0a0a0a",
                "starlight-white": "#F9F9F9",
                "ants-blue": "#3ea4f5",
                "electric-cyan": "#5a5aff",
                "muted-silver": "#888888",
            },
            fontFamily: {
                sans: ["var(--font-montserrat)", "sans-serif"],
                serif: ["var(--font-montserrat)", "serif"],      // Force Gotham for serif
                mono: ["var(--font-montserrat)", "monospace"],   // Force Gotham for mono
                monument: ["var(--font-montserrat)", "sans-serif"],
                inter: ["var(--font-montserrat)", "sans-serif"],
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            keyframes: {
                "dash-flow": {
                    "0%": { strokeDashoffset: "100" },
                    "100%": { strokeDashoffset: "0" },
                },
                "pulse-glow": {
                    "0%, 100%": { opacity: "0.4", r: "2" },
                    "50%": { opacity: "1", r: "3" },
                }
            },
            animation: {
                "dash-flow": "dash-flow 2s linear infinite",
                "pulse-glow": "pulse-glow 3s ease-in-out infinite",
            }
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
};
export default config;
