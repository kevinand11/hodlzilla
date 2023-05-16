/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html"],
  theme: {
    extend: {
        colors: {
            'primary' : '#FDFFB8',
            'secondary' : '#909190',
            'auxiliary' : '#FFD252',
            'gradient-start' : '#F5F1DA',
            'gradient-middle' : '#D9D9D9',
            'gradient-end' : '#EEEEFF'
        },
        fontFamily: {
            'primary' : ['Raleway', 'sans-serif']
        }
    },
  },
  plugins: [],
}

