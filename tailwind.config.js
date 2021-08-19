module.exports = {
  mode: 'jit',
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx,css}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false,
  theme: {
    extend: {
      boxShadow: {
        DEFAULT: '0 1px 6px #20212447',
        sm: '0 1px 1px #0000001a',
      },
    },
  },
  variants: {
    extend: {},
  },
};
