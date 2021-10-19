import type { StackNavigationProp } from '@react-navigation/stack'

import type { MealId } from '~typings/assets/data'
import { Routes } from '~constants'

export type MealDetailParams = { mealId: MealId }

export type ParamListPerRoute = {
  [Routes.MEAL_DETAIL]: MealDetailParams
}

export type RootStackParamList<Route extends keyof ParamListPerRoute> = StackNavigationProp<ParamListPerRoute, Route>
