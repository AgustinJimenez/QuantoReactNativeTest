import { StyleSheet } from 'react-native'
import { colors, scale } from '../../styles'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: scale(0.3),
  },
  noDataLabel: {
    flex: 1,
    textAlign: 'center',
    marginVertical: scale(),
  },
  userListItemContainer: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: scale(0.3),
  },
  userListItemSeparator: {
    width: '90%',
    backgroundColor: colors.dark(0.3),
    height: 0.4,
    alignSelf: 'center',
  },
  userListItemAvatarContainer: {
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'center',
    //backgroundColor: 'red',
  },
  userListItemAvatarImageContainer: {
    backgroundColor: colors.redOne(),
    width: scale(1.2),
    height: scale(1.2),
    borderRadius: scale(0.6),
    alignItems: 'center',
    justifyContent: 'center',
  },
  userListItemAvatarImage: {
    width: '87%',
    height: '87%',
    borderRadius: scale(),
  },
  userListItemTitles: {
    flex: 0.6,
    //backgroundColor: 'blue'
  },
  userListItemShowBtnContainer: {
    flex: 0.2,
    //backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
  userListItemFirstNameTxt: {
    marginVertical: scale(0.1),
    fontWeight: '500',
  },
  userListItemEmailTxt: {
    color: colors.blueOne(),
    fontWeight: '500',
    marginVertical: scale(0.1),
  },
  userListItemShowBtn: {},

  title: {
    textAlign: 'left',
    paddingHorizontal: scale(0.4),
    marginTop: scale(1),
    fontSize: scale(0.55),
    color: colors.primary(),
    fontWeight: 'bold',
  },
  section_title: {
    color: colors.primary(),
    fontWeight: 'bold',
    marginTop: scale(0.5),
    paddingHorizontal: scale(0.2),
    paddingBottom: scale(0.2),
    fontSize: scale(0.45),
  },
  categories: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
  },
  search: {
    alignItems: 'center',
    position: 'absolute',
    bottom: scale(0.5),
    right: scale(0.5),
    left: scale(0.5),
  },
  scrollContainer: {
    paddingBottom: scale(10),
  },
  loader: {
    marginVertical: scale(),
    alignSelf: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  bgLight: {
    backgroundColor: colors.light(0.21),
  },
})

export default styles
