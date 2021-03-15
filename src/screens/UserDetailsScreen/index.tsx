import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'
import AvatarImage from '../../components/AvatarImage'
import UserInterface from '../../interfaces/userInterface'
import { useDispatch, useSelector } from 'react-redux'
import { datasetSelector } from '../../redux/selectors'
import { usersDetailsScreenSagaAction } from '../../sagas/actions'
import { scale } from '../../styles'

const UserDetailsScreen = ({ route }: any = {}) => {
  const id = route.params?.id
  const dispatch = useDispatch()
  const user: UserInterface = useSelector(state => datasetSelector(state, 'users', { id, single_format: true })) || {}
  const fetchUserDetails = React.useCallback(() => {
    dispatch(usersDetailsScreenSagaAction({ id }))
  }, [])

  React.useEffect(() => {
    fetchUserDetails()
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.detailsContainer}>
        <AvatarImage uri={user['avatar']} size={scale(3)} image_coverage_percentage={93} />
        <Text style={styles.firstNameTxt}>{user['first_name']}</Text>
        <Text style={styles.emailTxt}>{`Email: ${user['email']}`}</Text>
      </View>
    </View>
  )
}

export default UserDetailsScreen
