import React from 'react'
import { View, FlatList, Text } from 'react-native'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { usersScreenSagaAction } from '../../sagas/actions'
import styles from './styles'
import { datasetSelector } from '../../redux/selectors'
import UserListItem from './UserListItem'
import { useNavigation } from '@react-navigation/core'

const EmptyLabel = ({}) => {
  const { t } = useTranslation()
  return <Text style={styles.noDataLabel}>{t('no_data')}</Text>
}

const UsersScreen = ({}) => {
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const users = useSelector(state => datasetSelector(state, 'users', { list_format: true }))
  const users_screen_is_loading = useSelector(state => datasetSelector(state, 'users_screen_is_loading'))
  const refreshUsers = React.useCallback(() => {
    dispatch(usersScreenSagaAction())
  }, [])
  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      refreshUsers()
    })

    return unsubscribe
  }, [])

  return (
    <View style={styles.container}>
      <FlatList
        refreshing={users_screen_is_loading}
        onRefresh={refreshUsers}
        data={users.all()}
        ListEmptyComponent={EmptyLabel}
        renderItem={({ item, index, separators }: any) => <UserListItem key={index} user_id={item['id']} isLast={index === users.count() - 1} />}
      />
    </View>
  )
}

export default UsersScreen
