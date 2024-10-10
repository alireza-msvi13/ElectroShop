import { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        vsm: '380px',
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
        xxl: '1400px',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
      fontFamily: {
        morabba: ['var(--font-morabba)'],
        dana: ['var(--font-dana)'],
      },
      fontSize: {
        md: '15px',
      },
      colors: {
        main: '#7B1FA2',
        mainBlack: '#272729',
        mainGray: '#757F95',
        mainBg: '#f4f5f9',
        mainYellow: '#fad505',
        mainBorder: 'rgba(0,0,0,.08)',
      },
      boxShadow: {
        custom: '0 0 20px rgba(0, 0, 0, .08)',
      },
      backgroundImage: {
        bigPoster: "url('/images/banner/big-banner.webp')",
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
    }),
  ],
};

export default config;
