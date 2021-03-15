import { StyleSheet } from 'react-native'
import { colors, scale } from '../../styles'
import palette from '../../styles/palette'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  detailsContainer: {
    alignItems: 'center',
  },
  firstNameTxt: {
    textAlign: 'center',
    fontSize: scale(0.9),
    fontWeight: '600',
  },
  emailTxt: {
    textAlign: 'center',
    color: colors.blueOne(),
    fontSize: scale(0.5),
    fontWeight: '500',
  },
})

export default styles
