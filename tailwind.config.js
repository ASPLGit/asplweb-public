/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.25rem",
        md: "1.5rem",
        lg: "2rem",
      },
      screens: {
        sm: "90%",
        md: "90%",
        lg: "90%",
        xl: "1140px",
        "2xl": "1320px",
      },
    },
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"],
        lora: ["var(--font-lora)", "serif"],
      },
      colors: {
        darkblue: "var(--color-darkblue)",
        mainbody: "var(--color-mainbody)",
        bodylight: "var(--color-bodylight)",
        lightblue: "var(--color-lightblue)",
      },
      backgroundImage: {
        "gradient-primary": "var(--gradient-primary)",
      },
    },
  },
  plugins: [],
};
