/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        dark: 'var(--color-dark)',
        black: 'var(--color-black)',
        'dark-grey': 'var(--color-dark-grey)',
        grey: 'var(--color-grey)',
        ash: 'var(--color-ash)',
        'light-grey': 'var(--color-light-grey)',
        light: 'var(--color-light)',
        'light-low': 'var(--color-light-low)',
        white: 'var(--color-white)',
        red: 'var(--color-red)',
        'red-light': 'var(--color-red-light)',
        blue: 'var(--color-blue)',
        'blue-light': 'var(--color-blue-light)',
        yellow: 'var(--color-yellow)',
        'yellow-light': 'var(--color-yellow-light)',
        green: 'var(--color-green)',
        'green-light': 'var(--color-green-light)',
      },
    },
  },
  plugins: [],
}
