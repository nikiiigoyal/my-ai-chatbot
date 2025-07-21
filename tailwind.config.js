/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    // Add all your template paths here
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans, var(--font-sans-fallback))"],

        // Optional: Create separate font definitions if needed
        geist: ["var(--font-sans)"],
        inter: ["var(--font-sans-fallback)"],
      },
    },
  },
  plugins: [],
};
