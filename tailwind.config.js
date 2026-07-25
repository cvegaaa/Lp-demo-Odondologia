/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Fraunces"', 'ui-serif', 'Georgia', 'serif'],
      },
      colors: {
        teal: {
          50: '#f0fdfb', 100: '#ccfbf3', 200: '#99f6e4', 300: '#5eead4',
          400: '#2dd4bf', 500: '#14b8a6', 600: '#0d9488', 700: '#0f766e',
          800: '#115e59', 900: '#134e4a', 950: '#042f2e',
        },
        gold: {
          50: '#fbf7ef', 100: '#f5ebd6', 200: '#ecd9ad', 300: '#e0c07a',
          400: '#d4a942', 500: '#c89323', 600: '#a8761b', 700: '#85591a',
          800: '#6e481c', 900: '#5e3d1c',
        },
        ink: {
          50: '#f6f7f9', 100: '#eceef2', 200: '#d4d9e0', 300: '#aeb6c2',
          400: '#828b9c', 500: '#636c7f', 600: '#4e5567', 700: '#404554',
          800: '#383c48', 900: '#1f2330', 950: '#131621',
        },
      },
      boxShadow: {
        soft: '0 1px 2px rgba(16,24,40,0.04), 0 12px 32px -12px rgba(16,24,40,0.12)',
        lift: '0 1px 2px rgba(16,24,40,0.05), 0 24px 48px -16px rgba(13,148,136,0.22)',
        gold: '0 10px 30px -10px rgba(200,147,35,0.45)',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
    },
  },
  plugins: [],
};
