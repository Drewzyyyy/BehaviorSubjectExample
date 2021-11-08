module.exports = {
  mode: 'jit',
  prefix: '',
  purge: {
    content: [
      './src/**/*.{html,ts}',
    ]
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend:{
      colors:{
        backgroundBG: '#118ab2',
        darkBlueBG: '#073b4c',
        yellowBG: '#ffd166',
        redBG: '#ef476f',
        greenBG: '#06d6a0',
      },
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
