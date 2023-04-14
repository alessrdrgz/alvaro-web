/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFD200',
        gray: 'rgba(17, 17, 17, 0.5)'
      },
      backgroundImage: {
        starfield: 'url(/background.webp)'
      },
      screens: {
        medium: '468px',
        mobile: '411px',
        tablet: '721px',
        laptop: '890px'
      }
    }
  },
  plugins: []
}
