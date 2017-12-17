import { TabNavigator, StackNavigator } from 'react-navigation'
import Login from '../containers/Auth/Login'

export const LoginView = StackNavigator({
  Login: {
    screen: Login
  }
})