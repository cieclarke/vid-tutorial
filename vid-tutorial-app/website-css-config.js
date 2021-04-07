const colors = require('tailwindcss/colors')

module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
      extend: {
          flex: {
              '2': '1 1 50%'
          },
          fontFamily: {
              sans: ['arial', 'sans-serif'],
              serif: ['arial', 'serif'],
          }
      }
  },
  variants: {},
  plugins: [],
}

/*
*blue
 
   shade 0 = #1E41C1 = rgb( 30, 65,193) = rgba( 30, 65,193,1) = rgb0(0.118,0.255,0.757)
   shade 1 = #718DF5 = rgb(113,141,245) = rgba(113,141,245,1) = rgb0(0.443,0.553,0.961)
   shade 2 = #788DDB = rgb(120,141,219) = rgba(120,141,219,1) = rgb0(0.471,0.553,0.859)
   shade 3 = #091E6D = rgb(  9, 30,109) = rgba(  9, 30,109,1) = rgb0(0.035,0.118,0.427)
   shade 4 = #061034 = rgb(  6, 16, 52) = rgba(  6, 16, 52,1) = rgb0(0.024,0.063,0.204)

*red

   shade 0 = #DF0A6F = rgb(223, 10,111) = rgba(223, 10,111,1) = rgb0(0.875,0.039,0.435)
   shade 1 = #FA61A9 = rgb(250, 97,169) = rgba(250, 97,169,1) = rgb0(0.98,0.38,0.663)
   shade 2 = #EC73AD = rgb(236,115,173) = rgba(236,115,173,1) = rgb0(0.925,0.451,0.678)
   shade 3 = #86003F = rgb(134,  0, 63) = rgba(134,  0, 63,1) = rgb0(0.525,0,0.247)
   shade 4 = #40001E = rgb( 64,  0, 30) = rgba( 64,  0, 30,1) = rgb0(0.251,0,0.118)

*green

   shade 0 = #95F00B = rgb(149,240, 11) = rgba(149,240, 11,1) = rgb0(0.584,0.941,0.043)
   shade 1 = #C0FC62 = rgb(192,252, 98) = rgba(192,252, 98,1) = rgb0(0.753,0.988,0.384)
   shade 2 = #C4F678 = rgb(196,246,120) = rgba(196,246,120,1) = rgb0(0.769,0.965,0.471)
   shade 3 = #599300 = rgb( 89,147,  0) = rgba( 89,147,  0,1) = rgb0(0.349,0.576,0)
   shade 4 = #2B4600 = rgb( 43, 70,  0) = rgba( 43, 70,  0,1) = rgb0(0.169,0.275,0)

*yellow

   shade 0 = #FFB50B = rgb(255,181, 11) = rgba(255,181, 11,1) = rgb0(1,0.71,0.043)
   shade 1 = #FFD063 = rgb(255,208, 99) = rgba(255,208, 99,1) = rgb0(1,0.816,0.388)
   shade 2 = #FFD77C = rgb(255,215,124) = rgba(255,215,124,1) = rgb0(1,0.843,0.486)
   shade 3 = #A06F00 = rgb(160,111,  0) = rgba(160,111,  0,1) = rgb0(0.627,0.435,0)
   shade 4 = #4C3500 = rgb( 76, 53,  0) = rgba( 76, 53,  0,1) = rgb0(0.298,0.208,0)

*/