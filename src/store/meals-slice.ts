import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

import type { Meal, MealId } from '~typings/assets/data'
import type { FiltersState } from '~typings/screens'
import { MEALS } from '~assets/data'

export enum MealsActions {
  TOGGLE_FAVORITE = 'TOGGLE_FAVORITE',
  SET_FILTERS = 'SET_FILTERS',
}

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: [] as Meal[],
}

const mealsSlice = createSlice({
  name: 'meals',
  initialState,
  reducers: {
    [MealsActions.TOGGLE_FAVORITE]: (state, action: PayloadAction<MealId>) => {
      const { meals, favoriteMeals } = state

      const mealId = action.payload

      const hasMeal = favoriteMeals.some(meal => meal.id === mealId)

      if (hasMeal) {
        const updatedFavoritesMeals = favoriteMeals.filter(meal => meal.id !== mealId)

        return { ...state, favoriteMeals: updatedFavoritesMeals }
      }

      const meal = meals.find(item => item.id === mealId)

      return { ...state, favoriteMeals: [...favoriteMeals, meal] }
    },
    [MealsActions.SET_FILTERS]: (state, action: PayloadAction<FiltersState>) => {
      const { meals } = state

      const appliedFilters = action.payload

      const updatedFilteredMeals = meals.filter(meal => {
        if (appliedFilters.isGlutenFree && !meal.isGlutenFree) {
          return false
        }

        if (appliedFilters.isLactoseFree && !meal.isLactoseFree) {
          return false
        }

        if (appliedFilters.isVegetarian && !meal.isVegetarian) {
          return false
        }

        if (appliedFilters.isVegan && !meal.isVegan) {
          return false
        }

        return true
      })

      return { ...state, filteredMeals: updatedFilteredMeals }
    },
  },
})

export const { TOGGLE_FAVORITE: toggleFavorite, SET_FILTERS: setFilters } = mealsSlice.actions

const mealsReducer = mealsSlice.reducer

export default mealsReducer
