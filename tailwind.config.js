/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./modules/**/*.{js,ts,jsx,tsx}"],
   theme: {
      fontFamily: {
         sans: ['"Nunito"', "sans-serif"]
      },
      extend: {}
   },
   plugins: []
};
