export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'black-50': '#0F072A',
        'blue-50': '#C2F7FF',
        'blue-100': '#24BDDF',
        'blue-900': '#1D1144',
        'pink-50': '#FF6799',
        'pink-100': '#FFE1D9',
        'green-50': '#23B1A5',
        'orange-50': '#F56A47',
      },
      backgroundImage: {
        'orange-pink': 'linear-gradient(to right, #ff9600 0%,#ff6799 100%);',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '15px',
        sm: '15px',
        xl: '50px',
      },
      screens: {
        'sm': '100%',
        'md': '100%',
        'lg': '1024px',
        'xl': '1600px'
      }
    }
  },
  plugins: [],
}