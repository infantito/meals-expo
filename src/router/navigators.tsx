import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import {
  createMaterialBottomTabNavigator,
  MaterialBottomTabNavigationOptions,
} from '@react-navigation/material-bottom-tabs'
import { BottomTabNavigationOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'

import { Categories, CategoryMeals, Favorites, MealDetail } from '~screens'
import { Colors, isAndroid, Routes, StackNavigationOptions } from '~constants'
import { BottomNavigation } from 'react-native-paper'

export const RootStack = createStackNavigator()

export const MealsStack = createStackNavigator()

export const FavoritesStack = createStackNavigator()

export const MealsNavigator = () => (
  <MealsStack.Navigator>
    <MealsStack.Screen name={Routes.CATEGORIES} component={Categories} options={StackNavigationOptions} />
    <MealsStack.Screen name={Routes.CATEGORY_MEALS} component={CategoryMeals} options={StackNavigationOptions} />
    <MealsStack.Screen name={Routes.MEAL_DETAIL} component={MealDetail} options={StackNavigationOptions} />
  </MealsStack.Navigator>
)

export const FavoritesNavigator = () => (
  <FavoritesStack.Navigator>
    <FavoritesStack.Screen name={Routes.FAVORITES} component={Favorites} options={StackNavigationOptions} />
    <FavoritesStack.Screen name={Routes.MEAL_DETAIL} component={MealDetail} options={StackNavigationOptions} />
  </FavoritesStack.Navigator>
)

export const TabsStack = isAndroid ? createMaterialBottomTabNavigator() : createBottomTabNavigator()

const mealsBottomTabNavigationOptions: MaterialBottomTabNavigationOptions = {
  tabBarIcon: tabInfo => <Ionicons name="ios-restaurant" size={24} color={tabInfo.color} />,
  tabBarColor: Colors.primary,
  tabBarLabel: 'Meals',
}

const favoritesBottomTabNavigationOptions: MaterialBottomTabNavigationOptions = {
  tabBarIcon: tabInfo => <Ionicons name="ios-star" size={24} color={tabInfo.color} />,
  tabBarColor: Colors.accent,
  tabBarLabel: 'Favorites',
}

const materialBottomTabNavigationOptions: typeof BottomNavigation['defaultProps'] = {
  activeColor: 'white',
  shifting: true,
  barStyle: {
    backgroundColor: Colors.primary,
  },
}

const commonBottomTabNavigationOptions: BottomTabNavigationOptions = {
  tabBarLabelStyle: { fontFamily: 'open-sans' },
  tabBarActiveTintColor: Colors.accent,
  headerShown: false,
}

const bottomNavigationOptions = (
  isAndroid ? materialBottomTabNavigationOptions : { screenOptions: commonBottomTabNavigationOptions }
) as object

export const TabsNavigator = () => {
  return (
    <TabsStack.Navigator {...bottomNavigationOptions}>
      <TabsStack.Screen
        name="TabsMeals"
        component={MealsNavigator}
        options={mealsBottomTabNavigationOptions as object}
      />
      <TabsStack.Screen
        name="TabsFavorites"
        component={FavoritesNavigator}
        options={favoritesBottomTabNavigationOptions as object}
      />
    </TabsStack.Navigator>
  )
}
