import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: 'rgb(var(--background) / <alpha-value>)',
                foreground: 'var(--foreground)',

                overlay: 'rgba(var(--overlay))',

                navigation: {
                    background: {
                        DEFAULT: 'rgb(var(--navigation-background) / <alpha-value>)',
                        active: {
                            DEFAULT: 'var(--navigation-background-active)',
                            hover: 'var(--navigation-background-active-hover)',
                        },
                        inactive: {
                            hover: 'rgb(var(--navigation-background-inactive-hover) / <alpha-value>)',
                        },
                    },
                    foreground: {
                        DEFAULT: 'var(--navigation-foreground)',
                        active: 'var(--navigation-foreground-active)',
                        inactive: 'var(--navigation-foreground-inactive)',
                    },
                    border: 'var(--navigation-border)',

                    input: {
                        background: 'rgb(var(--navigation-input-background) / <alpha-value>)',
                        hover: 'rgb(var(--navigation-input-hover) / <alpha-value>)',
                        placeholder: 'var(--navigation-input-placeholder)',
                        border: 'var(--navigation-input-border)',
                    }
                },

                primary: {
                    DEFAULT: 'rgb(var(--primary) / <alpha-value>)',
                    foreground: 'var(--primary-foreground)',
                    hover: 'var(--primary-hover)',
                },

                accent: {
                    DEFAULT: 'rgb(var(--accent) / <alpha-value>)',
                    foreground: 'var(--accent-foreground)',
                    hover: 'var(--accent-hover)',
                },

                success: {
                    DEFAULT: 'rgb(var(--success))',
                    foreground: 'var(--success-foreground)',
                    hover: 'var(--success-hover)',

                    light: {
                        DEFAULT: 'var(--success-light)',
                        foreground: 'var(--success-light-foreground)',
                        hover: 'var(--success-light-hover)',
                        border: 'var(--success-light-border)',
                    },
                },

                warning: {
                    DEFAULT: 'rgb(var(--warning))',
                    foreground: 'var(--warning-foreground)',
                    hover: 'var(--warning-hover)',

                    light: {
                        DEFAULT: 'var(--warning-light)',
                        foreground: 'var(--warning-light-foreground)',
                        hover: 'var(--warning-light-hover)',
                        border: 'var(--warning-light-border)',
                    },
                },

                destructive: {
                    DEFAULT: 'rgb(var(--destructive))',
                    foreground: 'var(--destructive-foreground)',
                    hover: 'var(--destructive-hover)',

                    light: {
                        DEFAULT: 'var(--destructive-light)',
                        foreground: 'var(--destructive-light-foreground)',
                        hover: 'var(--destructive-light-hover)',
                        border: 'var(--destructive-light-border)',
                    },
                },

                secondary: {
                    DEFAULT: 'rgb(var(--secondary))',
                    background: 'var(--secondary-background)',
                    foreground: 'var(--secondary-foreground)',
                    hover: 'var(--secondary-hover)',
                    light: 'var(--secondary-light)',

                    green: {
                        DEFAULT: 'rgb(var(--secondary-green))',
                        foreground: 'var(--secondary-green-foreground)',
                    }
                },


                input: {
                    background: 'var(--input-background)',
                    foreground: 'var(--input-foreground)',
                    placeholder: 'var(--input-placeholder)',
                    border: 'var(--input-border)',
                    hover: 'var(--input-hover)',
                },

                muted: {
                    DEFAULT: 'var(--muted)',
                    foreground: 'var(--muted-foreground)'
                },

                border: 'var(--border)',

                inactive: 'var(--inactive)',

                ring: 'hsl(var(--ring))',
                chart: {
                    '1': 'hsl(var(--chart-1))',
                    '2': 'hsl(var(--chart-2))',
                    '3': 'hsl(var(--chart-3))',
                    '4': 'hsl(var(--chart-4))',
                    '5': 'hsl(var(--chart-5))'
                }
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)'
            }
        }
    },
    plugins: [require("tailwindcss-animate")],
};
export default config;
