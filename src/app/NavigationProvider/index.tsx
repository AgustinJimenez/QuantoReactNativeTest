import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { useTranslation } from 'react-i18next'
import screenOptions from './screenOptions'
import UsersScreen from '../../screens/UsersScreen'
import UserDetailsScreen from '../../screens/UserDetailsScreen'

const Stack = createStackNavigator()
const NavigationProvider = (props: any) => {
  const { t } = useTranslation()
  return (
    <Stack.Navigator headerMode='screen' initialRouteName='Users' screenOptions={screenOptions}>
      <Stack.Screen name='Users' component={UsersScreen} options={{ headerTitle: t('users_list') }} />
      <Stack.Screen name='UserDetails' component={UserDetailsScreen} options={{ headerTitle: t('user_detail') }} />
    </Stack.Navigator>
  )
}

export default NavigationProvider
