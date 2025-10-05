/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        dark: 'var(--dark)',
        black: 'var(--black)',
        'dark-grey': 'var(--dark-grey)',
        grey: 'var(--grey)',
        ash: 'var(--ash)',
        'light-grey': 'var(--light-grey)',
        light: 'var(--light)',
        'light-low': 'var(--light-low)',
        white: 'var(--white)',
        red: 'var(--red)',
        'red-light': 'var(--red-light)',
        blue: 'var(--blue)',
        'blue-light': 'var(--blue-light)',
        yellow: 'var(--yellow)',
        'yellow-light': 'var(--yellow-light)',
        green: 'var(--green)',
        'green-light': 'var(--green-light)',
      },
    },
  },
  plugins: [],
}
