import type { StackNavigationProp, StackScreenProps } from '@react-navigation/stack'

import type { CategoryId, MealId } from '~typings/assets/data'
import type { FiltersState } from '~typings/screens'
import { Routes } from '~constants'

export type CategoriesParams = { categoryId: CategoryId }

export type MealDetailParams = { mealId: MealId }

export type FiltersParams = { filters: FiltersState }

export type ParamListPerRoute = {
  [Routes.CATEGORIES]: undefined
  [Routes.CATEGORY_MEALS]: CategoriesParams
  [Routes.FILTERS]: FiltersParams
  [Routes.MEAL_DETAIL]: MealDetailParams
  [Routes.FAVORITES]: undefined
}

export type RootStackParamList<Route extends keyof ParamListPerRoute> = StackNavigationProp<ParamListPerRoute, Route>

export type ScreenProps<Route extends keyof ParamListPerRoute> = StackScreenProps<ParamListPerRoute, Route>
