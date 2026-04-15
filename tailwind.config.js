export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2E4036", // Moss green
        accent: "#CC5833",  // Clay
        background: "#F2F0E9", // Cream
        dark: "#1A1A1A", // Charcoal
        sage: "#808f87", // Lighter green for age check overlay / secondary accents
      },
      fontFamily: {
        sans: ['Inter', 'Outfit', 'Plus Jakarta Sans', 'sans-serif'],
        serif: ['Cormorant Garamond', 'serif'],
        mono: ['IBM Plex Mono', 'monospace'],
      },
      animation: {
        'noise': 'noise 1s steps(2) infinite',
      },
      keyframes: {
        noise: {
          '0%, 100%': { transform: 'translate(0,0)' },
          '10%': { transform: 'translate(-5%,-5%)' },
          '20%': { transform: 'translate(-10%,5%)' },
          '30%': { transform: 'translate(5%,-10%)' },
          '40%': { transform: 'translate(-5%,15%)' },
          '50%': { transform: 'translate(-10%,5%)' },
          '60%': { transform: 'translate(15%,0)' },
          '70%': { transform: 'translate(0,15%)' },
          '80%': { transform: 'translate(3%,35%)' },
          '90%': { transform: 'translate(-10%,10%)' }
        }
      }
    },
  },
  plugins: [],
}
