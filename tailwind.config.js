/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html"],
  theme: {
    extend: {
        colors: {
            'primary' : '#FDFFB8',
            'secondary' : '#909190'
        },
        fontFamily: {
            'primary' : ['Raleway', 'sans-serif']
        }
    },
  },
  plugins: [],
}

