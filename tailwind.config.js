/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'customized': 'scandia-gh, Helvetica, Arial, sans-serif'
      },
      color: {
        'customized': '#fb8500'
      },
      // backgroundImage: {
      //   'bodyBackground' : "url('assets/Project-management-tools.png')"
      // }
    },
  },
  plugins: [],
};
