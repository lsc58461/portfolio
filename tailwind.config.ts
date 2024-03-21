import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

type AccType = Record<string, string>;

const range = (start: number, end: number): number[] => {
  let array = [];
  for (let i = start; i <= end; ++i) {
    array.push(i);
  }
  return array;
};

const pxToRem = (px: number, base = 16) => `${px / base}rem`;

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    spacing: {
      ...range(0, 2000).reduce((acc: AccType, px: number) => {
        acc[`${px}pxr`] = pxToRem(px);
        return acc;
      }, {}),
    },
    fontSize: {
      ...range(0, 2000).reduce((acc: AccType, px: number) => {
        acc[`${px}pxr`] = pxToRem(px);
        return acc;
      }, {}),
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        custom: '0px 4px 23px 0px rgba(0, 0, 0, 0.07)',
      },
      backgroundColor: {
        'black-50': 'rgba(0, 0, 0, 0.50)',
        'white-100': 'rgba(255, 255, 255, 1)',
      },
      colors: {
        error: '#DA1E28',
        white: '#FFFFFF',
        black: '#000000',
        gray100: '#F5F5F5',
        gray200: '#E8E8E8',
        gray300: '#DFDFDF',
        gray400: '#C8C8C8',
        gray500: '#949494',
        gray600: '#555555',
        gray700: '#383838',
        gray800: '#1F1F1F',
      },
      screens: {
        mobileMin: '320px',
        mobile: {
          min: '320px',
          max: '767px',
        },
        tablet: {
          min: '768px',
          max: '1199px',
        },
        desktop: '1200px',
      },
      fontFamily: {
        pre: 'Pretendard',
      },
    },
    plugins: [
      plugin(({ addUtilities }) => {
        const newUtilities = {
          '.font-h1-semibold': {
            fontSize: pxToRem(48),
            letterSpacing: pxToRem(-0.48),
            fontWeight: '600',
            fontFamily: 'Pretendard',
          },
          '.font-h2-semibold': {
            fontSize: pxToRem(32),
            letterSpacing: pxToRem(-0.32),
            fontWeight: '600',
            fontFamily: 'Pretendard',
          },

          '.font-h3-semibold': {
            fontSize: pxToRem(28),
            letterSpacing: pxToRem(-0.28),
            fontWeight: '600',
            fontFamily: 'Pretendard',
          },
          '.font-title1': {
            fontSize: pxToRem(24),
            letterSpacing: pxToRem(-0.24),
            fontFamily: 'Pretendard',
            fontWeight: '400',
          },
          '.font-title1-bold': {
            fontSize: pxToRem(24),
            letterSpacing: pxToRem(-0.24),
            fontWeight: '700',
            fontFamily: 'Pretendard',
          },
          '.font-title1-semibold': {
            fontSize: pxToRem(24),
            letterSpacing: pxToRem(-0.48),
            fontWeight: '600',
            fontFamily: 'Pretendard',
          },
          '.font-title2-bold': {
            fontSize: pxToRem(22),
            letterSpacing: pxToRem(-0.22),
            fontWeight: '700',
            fontFamily: 'Pretendard',
          },
          '.font-title2-semibold': {
            fontSize: pxToRem(22),
            letterSpacing: pxToRem(-0.22),
            fontWeight: '600',
            fontFamily: 'Pretendard',
          },
          '.font-title3-bold': {
            fontSize: pxToRem(20),
            letterSpacing: pxToRem(-0.2),
            fontWeight: '600',
            fontFamily: 'Pretendard',
          },
          '.font-title3-semibold': {
            fontSize: pxToRem(20),
            letterSpacing: pxToRem(-0.2),
            fontWeight: '600',
            fontFamily: 'Pretendard',
          },
          '.font-title3-medium': {
            fontSize: pxToRem(20),
            letterSpacing: pxToRem(-0.2),
            fontWeight: '500',
            fontFamily: 'Pretendard',
          },
          '.font-body1': {
            fontSize: pxToRem(18),
            letterSpacing: pxToRem(-0.18),
            fontFamily: 'Pretendard',
            fontWeight: '400',
          },
          '.font-body1-semibold': {
            fontSize: pxToRem(18),
            letterSpacing: pxToRem(-0.18),
            fontFamily: 'Pretendard',
            fontWeight: '600',
          },
          '.font-body1-bold': {
            fontSize: pxToRem(18),
            letterSpacing: pxToRem(-0.18),
            fontFamily: 'Pretendard',
            fontWeight: '700',
          },
          '.font-body1-medium': {
            fontSize: pxToRem(18),
            letterSpacing: pxToRem(-0.18),
            fontWeight: '500',
            fontFamily: 'Pretendard',
          },
          '.font-body2': {
            fontSize: pxToRem(16),
            letterSpacing: pxToRem(-0.16),
            fontFamily: 'Pretendard',
            fontWeight: '400',
          },
          '.font-body2-medium': {
            fontSize: pxToRem(16),
            letterSpacing: pxToRem(-0.16),
            fontFamily: 'Pretendard',
            fontWeight: '500',
          },
          '.font-body2-bold': {
            fontSize: pxToRem(16),
            letterSpacing: pxToRem(-0.16),
            fontFamily: 'Pretendard',
            fontWeight: '700',
          },
          '.font-body2-semibold': {
            fontSize: pxToRem(16),
            letterSpacing: pxToRem(-0.16),
            fontWeight: '600',
            fontFamily: 'Pretendard',
          },
          '.font-caption1-medium': {
            fontSize: pxToRem(14),
            letterSpacing: pxToRem(-0.14),
            fontFamily: 'Pretendard',
            fontWeight: '500',
          },
          '.font-caption1-semibold': {
            fontSize: pxToRem(14),
            letterSpacing: pxToRem(-0.14),
            fontWeight: '600',
            fontFamily: 'Pretendard',
          },
          '.font-caption2': {
            fontSize: pxToRem(12),
            letterSpacing: pxToRem(-0.12),
            fontFamily: 'Pretendard',
            fontWeight: '400',
          },
          '.font-caption2-medium': {
            fontSize: pxToRem(12),
            letterSpacing: pxToRem(-0.12),
            fontFamily: 'Pretendard',
            fontWeight: '500',
          },
          '.font-caption2-semibold': {
            fontSize: pxToRem(12),
            letterSpacing: pxToRem(-0.12),
            fontWeight: '600',
            fontFamily: 'Pretendard',
          },
        };

        addUtilities(newUtilities);
      }),
    ],
  },
};

export default config;
