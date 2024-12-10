/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#1A1A2F",
        primary: "#3B3E6A",
        accent: "#7351F9",
        destructive: "#FF3B5E",
        success: "#17D286",
      },
    },
  },
  plugins: [],
};
