import tailwindcss from "@tailwindcss/vite";
import animate from "tailwindcss-animate";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        neue: ['NeueMontreal']
      }
    },
  },
  plugins: [tailwindcss(), animate()],
};
