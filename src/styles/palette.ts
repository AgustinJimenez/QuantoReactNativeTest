const palette: any = {
  primary: (opacity = 1) => `rgba(29,121,228,${opacity})`, //rgba(29, 121, 228, 1)
  secondary: (opacity = 1) => `rgba(217,57,43, ${opacity})`, //rgb(217,57,43)
  dark: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,//rgba(0,0,0,1),
  light: (opacity = 1) => `rgba(232,233,234, ${opacity})`, //rgb(232,233,234)
  white: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`, //rgba(255, 255, 255, 0.07)
  redOne: (opacity = 1) => `rgba(217, 55, 96, ${opacity})`,//`rgba(217,55,96,1)`,
  blueOne: (opacity = 1) => `rgba(76,183,203, ${opacity})`,//rgba(76,183,203,1),
}

export default palette
