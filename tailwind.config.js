/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      fontSize: {
        xxs: "10px",
      },
      colors: {
        brand: "#59C4D2", // Cor principal da marca
        web: "#E5FCFF", // Associada ao ClinicAll Web
        desktop: "#178191", // Associada ao ClinicAll Desktop
        background: "#EDEDED", // Fundo principal
        backgroundAlt: "#F7F7F7", // Fundo alternativo
        border: "#CCCCCC", // Cor de bordas e divisores
        support: "#C2EDF2", // Cor de apoio
        blc: "#404040",
        blc2: "#2E2E2E",
        blcg: "#0B444B",
      },
      keyframes: {
        wave: {
          "0%": { transform: "rotate(0deg)" },
          "10%": { transform: "rotate(30deg)" },
          "20%": { transform: "rotate(-8deg)" },
          "30%": { transform: "rotate(30deg)" },
          "40%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(10deg)" },
          "60%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
      },
      animation: {
        wave: "wave 2s ease-in-out",
      },
    },
  },
  plugins: [],
};
