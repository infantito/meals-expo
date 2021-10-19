import type { Meal } from '~typings/assets/data'

export type MealItemProps = {
  meal: Meal
  handleSelect: () => void
}
