module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "btn-green": "linear-gradient(180deg, #1FE644 0%, #16F2BB 100%)",
      },
      boxShadow: {
        whitish: "8px 8px 31px rgba(255, 255, 255, 0.3)",
      },
      screens: {
        "380px": "23.75em",
      },
    },
    fontFamily: {
      montserrat: "'Montserrat', sans-serif;",
    },
  },
  plugins: [],
};
