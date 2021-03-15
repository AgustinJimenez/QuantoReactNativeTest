import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { useTranslation } from 'react-i18next'
import screenOptions from './screenOptions'

import LoginScreen from '../../screens/LoginScreen'
import WelcomeScreen from '../../screens/WelcomeScreen'
import HomeScreen from '../../screens/HomeScreen'
import ProductsScreen from '../../screens/ProductsScreen'
import ProductDetailsScreen from '../../screens/ProductDetailsScreen'
import BudgetConfirmScreen from '../../screens/BudgetConfirmScreen'
import RegisterScreen from '../../screens/RegisterScreen'
import MyBudgetScreen from '../../screens/MyBudgetScreen'
import UsersScreen from '../../screens/UsersScreen'
import UserDetailsScreen from '../../screens/UserDetailsScreen'

const Stack = createStackNavigator()
const NavigationProvider = (props: any) => {
  const { t } = useTranslation()
  return (
    <Stack.Navigator headerMode='screen' initialRouteName='Users' screenOptions={screenOptions}>
      <Stack.Screen name='Welcome' component={WelcomeScreen} />
      <Stack.Screen name='Login' component={LoginScreen} />
      <Stack.Screen name='Register' component={RegisterScreen} />
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name='Products' component={ProductsScreen} />
      <Stack.Screen name='ProductDetails' component={ProductDetailsScreen} />
      <Stack.Screen name='MyBudget' component={MyBudgetScreen} />
      <Stack.Screen name='BudgetConfirm' component={BudgetConfirmScreen} />
      <Stack.Screen name='Users' component={UsersScreen} options={{ headerTitle: t('users_list') }} />
      <Stack.Screen name='UserDetails' component={UserDetailsScreen} options={{ headerTitle: t('user_detail') }} />
    </Stack.Navigator>
  )
}

export default NavigationProvider
