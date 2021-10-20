import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import { RootStack, TabsNavigator } from './navigators'

const Router = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        <RootStack.Screen name="TabsNavigator" component={TabsNavigator} />
      </RootStack.Navigator>
    </NavigationContainer>
  )
}

export default Router
