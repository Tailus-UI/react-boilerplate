import themer from '@tailus/themer';
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', './node_modules/@tailus/themer-**/dist/**/*.{js,ts}'],
  theme: {
    extend: {
      colors: ({ colors }) => ({
        primary: colors.blue,
        success: colors.green,
        danger: colors.red,
        warning: colors.yellow,
        info: colors.blue,
        gray: colors.zinc,
        white: colors.white,
        black: colors.black,
        transparent: colors.transparent,
      }),
      fontFamily: {
        sans: ['Geist', 'Inter', ...defaultTheme.fontFamily.sans],
        mono: ['GeistMono', 'fira-code', ...defaultTheme.fontFamily.mono],
      },
      keyframes: {
        slideDown: {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        slideUp: {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        slideDown: 'slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)',
        slideUp: 'slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)',
      },
    },
  },
  plugins: [
    themer({
      components: {
        // Set your component customization here
      },
    }),
  ],
};
