/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // C'est ici qu'on mettra ton Noir Mat et ton Or plus tard
        'matte-black': '#0a0a0a',
        'gold-matte': '#c5a059',
      },
    },
  },
  plugins: [],
}