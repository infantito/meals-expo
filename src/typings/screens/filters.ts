import type { ScreenProps } from '~typings/router'
import { Routes } from '~constants'

export type FiltersProps = ScreenProps<Routes.FILTERS>

export type FiltersState = {
  isGlutenFree: boolean
  isLactoseFree: boolean
  isVegan: boolean
  isVegetarian: boolean
}
