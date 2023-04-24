/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {},
    fontFamily:{
      'sans': ['Inter', 'sans-serif'],
      'serif': ['Merriweather', 'serif'],
      'mono': ['JetBrains Mono', 'monospace'],
      'poppins': ['Poppins', 'sans-serif'],

    }
  },
  plugins: [],
}

