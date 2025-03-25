/** @type {import('tailwindcss').Config} */
import { Config } from 'tailwindcss'

export default <Partial<Config>>{
  mode: 'jit',
  darkMode: 'class',
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    extend: {
      colors: {
        black: {
          DEFAULT: '#131612',
        },
        dark: {
          DEFAULT: '#293542',
          500: '#080B12',
        },
        blue: {
          DEFAULT: '#278BFF',
          50: '#DFEEFA',
          100: '#40C0FF',
          200: '#1C92E0',
          500: '#35B6F5',
          600: '#03A9F4',
        },

        gray: {
          DEFAULT: '#77797B',
          100: '#85898B',
          200: '#8A8C8A',
          300: '#D9D9D9',
          400: '#EDEDED',
          500: '#71717A',
          600: '#F8F8F9',
          700: '#EDEDED',
          800: '#ABABAB',
        },

        zinc: {
          DEFAULT: '#77797B',
        },
        slate: {
          DEFAULT: '#1e293A',
          800: '#1e293B',
        },
      },
      fontFamily: {
        proximaA: ['Proxima Nova A', 'sans-serif'],
        proxima: ['Proxima Nova', 'sans-serif'],
        velasans: ['Vela Sans', 'sans-serif'],
      },
      lineHeight: {
        120: '120%',
        130: '130%',
        140: '140%',
      },
      boxShadow: {
        offer:
          '0px 27px 71px 0px rgba(28, 78, 66, 0.03), 0px -2.353px 54.828px 0px rgba(28, 78, 66, 0.02), 0px -4.354px 31.545px 0px rgba(28, 78, 66, 0.01), 0px -2.42px 8.124px 0px rgba(28, 78, 66, 0.01), 0px -0.586px 1.043px 0px rgba(28, 78, 66, 0.00), 0px 0.278px 0px 0px rgba(28, 78, 66, 0.00);',
      },
    },
  },
  plugins: [],
}
