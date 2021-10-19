import { CATEGORIES, MEALS } from '~assets/data'

export type CategoryId = typeof CATEGORIES[number]['id']

export type Category = typeof CATEGORIES[number]

export type MealId = typeof MEALS[number]['id']

export type Meal = typeof MEALS[number]
