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
                "electric-cyan": "#00f3ff",
                "muted-silver": "#888888",
            },
            fontFamily: {
                sans: ["var(--font-montserrat)", "sans-serif"],
                monument: ["var(--font-montserrat)", "sans-serif"], // Mapping monument to montserrat effectively replacing it
                inter: ["var(--font-montserrat)", "sans-serif"],    // Mapping inter to montserrat
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
    },
    plugins: [],
};
export default config;
