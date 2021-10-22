import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import { Colors } from '~constants'
import { FiltersNavigator, RootStack, TabsNavigator } from './navigators'

const Router = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{
          drawerActiveTintColor: Colors.accent,
          drawerLabelStyle: { fontFamily: 'open-sans-bold' },
          headerShown: false,
        }}
      >
        <RootStack.Screen name="DrawerMealsFavorites" component={TabsNavigator} options={{ drawerLabel: 'Meals' }} />
        <RootStack.Screen name="DrawerFilters" component={FiltersNavigator} options={{ drawerLabel: 'Filters' }} />
      </RootStack.Navigator>
    </NavigationContainer>
  )
}

export default Router
