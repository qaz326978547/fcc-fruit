/** @type {import('tailwindcss').Config} */
export default {
  content: ['./components/**/*.vue', './layouts/**/*.vue', './pages/**/*.vue'],
  variants: {
    extend: {
      backgroundColor: ['group-hover'],
      textColor: ['group-hover']
    }
  },
  theme: {
    extend: {
      flex: {
        '50': '1 1 50%'
      },
      colors: {
        'primary': '#f08300',
        'primary-light': '#f3a03d',
        'primary-red': '#DC2626',
        'secondary': '#729d38',
        'brown': '#952e00',
        'yellow-light': '#fabf01'
      },
      backgroundImage: {
        'logo': "url('/assets/img/logo.png')",
        'bg-1': "url('/assets/img/bg-1.png')",
        'bg-2': "url('/assets/img/bg-2.jpeg')",
        'bg-3': "url('/assets/img/bg-3.jpeg')",
        'apple-icon': "url('/assets/img/coverImg.png')",
        'phone-bg': "url('/assets/img/index_phoneBg.png')"
      },

      fontSize: {
        h1: '2.5rem',
        h2: '2rem',
        h3: '1.75rem',
        h4: '1.5rem',
        h5: '1.25rem',
        h6: '1rem'
      }
    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '640px',
        md: '768px',
        lg: '992px',
        xl: '1140px',
        xxl: '1320px'
      }
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '992px',
      xl: '1140px',
      xxl: '1320px'
    }
  },
  plugins: []
};

