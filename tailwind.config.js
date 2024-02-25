/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        "80p": "80%",
      },
      width: {
        "full-m-192": "calc(100vw - 192px)",
      },
      colors: {
        "almost-white": "#C9C7C0FF",
      },
    },
  },
  plugins: [],
};
