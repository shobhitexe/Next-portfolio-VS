/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "480px",
        ss: "620px",
        sm: "768px",
        md: "1060px",
        lg: "1200px",
        xl: "1700px",
      },
      fontFamily: {
        firaCode: ["Fira Code", "monospace"],
      },
      colors: {
        base: "#1e1e1e",
        topBarBg: "#3c3c3c",
        textGrey: "#b1b2b0",
        lightText: "#cccccc",
        lightGrey: "#464646",
        sidePanelGrey: "#333333",
        sideBarColor: "#252526",
        selectedSideBar: "#37373d",
        topTag: "#3A3D41",
        footerBg: "#007acc",
      },
    },
  },
  plugins: [],
};
