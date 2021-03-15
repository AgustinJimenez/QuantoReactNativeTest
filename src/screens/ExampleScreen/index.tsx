import React from 'react'
import { View, Text } from 'react-native'
import { useTranslation } from 'react-i18next'
import { useNavigation } from '@react-navigation/native'
import styles from './styles'

const UserDetailsScreen = ({}) => {
  const { t } = useTranslation()
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Text>{t('example_screen')}</Text>
    </View>
  )
}

export default UserDetailsScreen
