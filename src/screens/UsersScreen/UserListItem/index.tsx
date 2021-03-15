import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useTranslation } from 'react-i18next'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import styles from './styles'
import { datasetSelector } from '../../../redux/selectors'
import UserInterface from '../../../interfaces/userInterface'
import AvatarImage from '../../../components/AvatarImage'

const UserListItem = ({ user_id = 0, isLast = false }: any) => {
  const { t } = useTranslation()
  const navigation = useNavigation()
  const user: UserInterface = useSelector(state => datasetSelector(state, 'users', { id: user_id, single_format: true }))
  const goToUserDetailsScreen = React.useCallback(() => {
    navigation.navigate('UserDetails', { id: user_id })
  }, [user_id])
  return (
    <TouchableOpacity onPress={goToUserDetailsScreen}>
      <View style={styles.userListItemContainer}>
        <View style={styles.userListItemAvatarContainer}>
          <AvatarImage uri={user['avatar']} />
        </View>
        <View style={styles.userListItemTitles}>
          <Text style={styles.userListItemFirstNameTxt}>{user['first_name']}</Text>
          <Text style={styles.userListItemEmailTxt}>{user['email']}</Text>
        </View>
        <View style={styles.userListItemShowBtnContainer}>
          <Text>{t('show')}</Text>
        </View>
      </View>
      {!isLast && <View style={styles.userListItemSeparator} />}
    </TouchableOpacity>
  )
}

export default UserListItem
