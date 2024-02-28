/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        "80p": "80%",
      },
      width: {
        "full-m-208": "calc(100vw - 208px)",
      },
      maxHeight: {
        half: "50%",
        "50vh": "50vh",
        "60vh": "60vh",
        "70p": "70%",
        "70vh": "70vh",
      },
      colors: {
        "almost-white": "#C9C7C0FF",
      },
    },
  },
  plugins: [],
};
