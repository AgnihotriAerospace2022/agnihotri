import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes : 
      {
          popup : {
            '0%':{
              transform : 'translateY(43vh)'
            }  ,
            '100%':{
              transform: 'translateY(-25vh)'
            }
          },
      },
      animation : 
      {
          popup : 'popup  .6s linear'  ,
      }
    },
  },
  plugins: [],
}
export default config
