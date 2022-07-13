/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 5s linear infinite",
      },
    },
    fontFamily: {
      mono: ["Space Mono", "monospace"],
    },
  },
  plugins: [],
};
