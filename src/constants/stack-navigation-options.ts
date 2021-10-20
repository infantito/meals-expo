import type { StackNavigationOptions } from '@react-navigation/stack'

import { isAndroid } from './common'

import Colors from './colors'

const stackNavigationOptions: StackNavigationOptions = {
  headerStyle: {
    backgroundColor: isAndroid ? Colors.primary : '',
  },
  headerTitleStyle: {
    fontFamily: 'open-sans-bold',
  },
  headerBackTitleStyle: {
    fontFamily: 'open-sans',
  },
  headerTintColor: isAndroid ? 'white' : Colors.primary,
  presentation: 'card',
  headerShown: true,
}

export default stackNavigationOptions
