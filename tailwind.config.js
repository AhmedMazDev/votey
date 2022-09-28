/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: "#1A1C23",
        bg: "#1E2028",
        lightBg: "#313440",
        input: "#374151",
        grey: "#94A3B8",
        lightBlue: "#29B9F0",
        darkBlue: "#2F71E8",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
      },
    },
    container: {
      center: true,
    },
  },
};
