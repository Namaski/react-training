/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        background: "rgba(var(--background))",

        cta: "rgba(var(--cta))",

        border: "rgba(var(--border))",
        card: "rgba(var(--card))",
        card_secondary: "rgba(var(--card_secondary))",

        sucess: "rgba(var(--sucess))",
        warning: "rgba(var(--warning))",
        error: "rgba(var(--error))"
      },
    },
  },
  plugins: [],
}

