/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        "80p": "80%",
        "50vh": "50vh",
      },
      width: {
        "full-m-208": "calc(100vw - 208px)",
      },
      minHeight: {
        "70vh": "70vh",
        "80vh": "80%",
        "90vh": "90%",
      },
      maxHeight: {
        half: "50%",
        "50vh": "50vh",
        "60vh": "60vh",
        "70p": "70%",
        "70vh": "70vh",
        "80vh": "80%",
        "95vh": "95%",
      },
      colors: {
        "almost-white": "#C9C7C0FF",
      },
    },
  },
  plugins: [],
};
