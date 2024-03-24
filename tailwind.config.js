/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: 'jit',
    darkMode: true, // or 'media' or 'class'
    content: [
      "./src/**/*.ts",
      "./**/*.html",
    ],
    theme: {
      extend: {
        colors: {
          customBlue: '#007bff',
          customGreen: '#28a745',
        },
        fontFamily: {
          sans: ['Roboto', 'sans-serif'], // Integrating Google Fonts
        },
        screens: {
          'sm': '640px',  // Defining breakpoints
          'md': '768px',
          'lg': '1024px',
          'xl': '1280px',
        },
      },
    },
    variants: {
      extend: {
        backgroundColor: ['hover', 'focus'],
        textColor: ['hover', 'active'],
      },
    },
    plugins: [],
  };
