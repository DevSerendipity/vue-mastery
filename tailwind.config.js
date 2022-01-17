module.exports = {
  content: ['./index.html','./src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {   
    extend: {
      backgroundImage: {
        'card': "url('src/assets/card2.jpg')",
        'chip': "url('src/assets/chip.png')",
      }
    },
  },
  pcorePlugins: {
    preflight: false,
  },
}
