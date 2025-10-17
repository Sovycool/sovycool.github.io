module.exports = {
  content: ["./src/**/*.{astro,html,js,tsx,ts}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        text: "var(--text)",
        indigoBrand: "var(--indigo-500)",
        pinkBrand: "var(--pink-400)",
        blueBrand: "var(--blue-400)",
      },
      boxShadow: {
        neon: "0 0 20px color-mix(in oklab, var(--glow-1) 60%, transparent)",
      }
    },
  },
  plugins: [],
};