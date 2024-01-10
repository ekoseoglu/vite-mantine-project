/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ['class', '[data-theme="dark"]'],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        /*BASES*/
        'base-body': 'var(--theme-base-body)',
        'base-box': 'var(--theme-base-box)',
        'base-border': 'var(--theme-base-border)',
        'base-hover': 'var(--theme-base-hover)',
        /*BASES*/

        /*COLORS*/
        'primary': {
          '100': 'var(--theme-primary-100)',
          '200': 'var(--theme-primary-200)',
          '300': 'var(--theme-primary-300)',
          '400': 'var(--theme-primary-400)',
          DEFAULT: 'var(--theme-primary)',
          '600': 'var(--theme-primary-600)',
          '700': 'var(--theme-primary-700)',
          '800': 'var(--theme-primary-800)',
          '900': 'var(--theme-primary-900)',
        },
        'secondary': {
          '100': 'var(--theme-secondary-100)',
          '200': 'var(--theme-secondary-200)',
          '300': 'var(--theme-secondary-300)',
          '400': 'var(--theme-secondary-400)',
          DEFAULT: 'var(--theme-secondary)',
          '600': 'var(--theme-secondary-600)',
          '700': 'var(--theme-secondary-700)',
          '800': 'var(--theme-secondary-800)',
          '900': 'var(--theme-secondary-900)',
        },
        'accent': {
          '100': 'var(--theme-accent-100)',
          '200': 'var(--theme-accent-200)',
          '300': 'var(--theme-accent-300)',
          '400': 'var(--theme-accent-400)',
          DEFAULT: 'var(--theme-accent)',
          '600': 'var(--theme-accent-600)',
          '700': 'var(--theme-accent-700)',
          '800': 'var(--theme-accent-800)',
          '900': 'var(--theme-accent-900)',
        },
        'info': {
          '100': 'var(--theme-info-100)',
          '200': 'var(--theme-info-200)',
          '300': 'var(--theme-info-300)',
          '400': 'var(--theme-info-400)',
          DEFAULT: 'var(--theme-info)',
          '600': 'var(--theme-info-600)',
          '700': 'var(--theme-info-700)',
          '800': 'var(--theme-info-800)',
          '900': 'var(--theme-info-900)',
        },
        'success': {
          '100': 'var(--theme-success-100)',
          '200': 'var(--theme-success-200)',
          '300': 'var(--theme-success-300)',
          '400': 'var(--theme-success-400)',
          DEFAULT: 'var(--theme-success)',
          '600': 'var(--theme-success-600)',
          '700': 'var(--theme-success-700)',
          '800': 'var(--theme-success-800)',
          '900': 'var(--theme-success-900)',
        },
        'warning': {
          '100': 'var(--theme-warning-100)',
          '200': 'var(--theme-warning-200)',
          '300': 'var(--theme-warning-300)',
          '400': 'var(--theme-warning-400)',
          DEFAULT: 'var(--theme-warning)',
          '600': 'var(--theme-warning-600)',
          '700': 'var(--theme-warning-700)',
          '800': 'var(--theme-warning-800)',
          '900': 'var(--theme-warning-900)',
        },
        'error': {
          '100': 'var(--theme-error-100)',
          '200': 'var(--theme-error-200)',
          '300': 'var(--theme-error-300)',
          '400': 'var(--theme-error-400)',
          DEFAULT: 'var(--theme-error)',
          '600': 'var(--theme-error-600)',
          '700': 'var(--theme-error-700)',
          '800': 'var(--theme-error-800)',
          '900': 'var(--theme-error-900)',
        },
        /*COLORS*/

        /*CONTENTS*/
        'base-content': 'var(--theme-base-content)',
        'header-content': 'var(--theme-header-content)',
        'helper-content': 'var(--theme-helper-content)',
        'placeholder-content': 'var(--theme-placeholder-content)',
        'primary-content': 'var(--theme-primary-content)',
        'secondary-content': 'var(--theme-secondary-content)',
        'accent-content': 'var(--theme-accent-content)',
        'info-content': 'var(--theme-info-content)',
        'success-content': 'var(--theme-success-content)',
        'warning-content': 'var(--theme-warning-content)',
        'error-content': 'var(--theme-error-content)',
        /*CONTENTS*/

        /*INPUTS*/
        'input-regular': 'var(--theme-input-regular)',
        'input-solid': 'var(--theme-input-solid)',
        'input-ghost': 'var(--theme-input-ghost)',
        'input-focus': 'var(--theme-input-focus)',
        'input-success': 'var(--theme-input-success)',
        'input-error': 'var(--theme-input-error)',
        /*INPUTS*/

        /*TABLES*/
        'table-odd': 'var(--theme-table-odd)',
        'table-even': 'var(--theme-table-even)',
        'table-hover': 'var(--theme-table-hover)',
        'table-active': 'var(--theme-table-active)',
        /*TABLES*/
      },
    },
  },
  plugins: [],
  safelist: [
    'hover:bg-primary',
    'hover:bg-secondary',
    'hover:text-secondary-content',
    'hover:text-primary-content',
  ]
}

