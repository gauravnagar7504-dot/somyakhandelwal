/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cobalt: {
          DEFAULT: '#1746D1',
          hover: '#0F35A3',
          subtle: '#EAF1FF',
          tint: '#D2E0FD',
        },
        navy: {
          DEFAULT: '#14284B',
          deep: '#041B3D',
        },
        slate: {
          text: '#526078',
          border: '#E4EAF2',
          surface: '#F3F7FC',
        },
      },
      fontFamily: {
        sans: ['"DM Sans"', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['monospace'],
      },
      maxWidth: {
        container: '1200px',
      },
      borderRadius: {
        'card': '14px',
        'subtle': '10px',
        'btn': '8px',
      },
      boxShadow: {
        'editorial': '0 12px 32px -4px rgba(20, 40, 75, 0.05)',
        'card-hover': '0 16px 36px -4px rgba(23, 70, 209, 0.08)',
      },
    },
  },
  plugins: [],
}
