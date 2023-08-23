/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';
import { fontFamily } from 'tailwindcss/defaultTheme';

const screens = {
  xxs: '320px',
  xs: '576px',
  sm: '768px',
  md: '991px',
  lg: '1200px',
  xl: '1440px',
};

export default {
  content: [
    './src/*.{ts,tsx}',
    './src/pages/**/*.{ts,tsx}',
    './src/modules/**/*.{ts,tsx}',
    './src/shared/components/**/*.{ts,tsx}',
    './index.html',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        bartleen: ['Bartleen Script', ...fontFamily.sans],
      },
      screens,
      colors: {
        purple1: '#d159f2',
        black800: '#333333',
      },
      backgroundImage: {
        'loading-ball': "url('src/assets/icons/ic_loading_ball.svg')",
        'primary-gradient': 'linear-gradient(0deg, #547fd3 0%, #6e65d8 45%, #d159f2 75%, #ba18e5 100%)',
        skeleton:
          'linear-gradient(90deg,rgba(190, 190, 190, 0.2) 25%, rgba(129, 129, 129, 0.24) 37%,  rgba(190, 190, 190, 0.2) 63%)',
      },
      transitionProperty: {
        height: 'height',
      },
      transitionDuration: {
        2000: '2000ms',
      },
      dropShadow: {
        '3xl': '0px 4px 12px rgba(0, 0, 0, 0.55)',
        '2xl': '2px 16px 16px rgba(0, 0, 0, 0.85)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    plugin(({ addUtilities, addVariant }) => {
      // registering new static utility styles
      addUtilities({
        '.flex-center': {
          display: 'flex',
          'justify-content': 'center',
          'align-items': 'center',
        },
      });
      addUtilities({
        '.reset-input': {
          outline: 'none',
          appearance: 'none',
        },
      });
      addUtilities({
        '.reset-button': {
          border: 'none',
          outline: 'none',
          appearance: 'none',
        },
      });
      addUtilities({
        '.svg-white': {
          filter: 'brightness(0) invert(1)',
        },
      });

      // registering custom variants
      addVariant('hocus', ['&:hover', '&:focus']);
      addVariant('before-after', ['&:before', '&:after']);
      addVariant('not-last', '&:not(:last-child)');
      addVariant('not-first', '&:not(:first-child)');
      addVariant('not-disabled', '&:not(:disabled)');
    }),
  ],
};
